import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bricks from 'bricks.js';
import InfiniteScroll from 'react-infinite-scroller';

export default class MasonryInfiniteScroller extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    initialLoad: PropTypes.bool,
    pack: PropTypes.bool,
    packed: PropTypes.string,
    position: PropTypes.bool,
    sizes: PropTypes.array,
    style: PropTypes.object
  }

  static defaultProps = {
    className: '',
    initialLoad: true,
    pack: false,
    packed: 'data-packed',
    position: true,
    sizes: [
      { columns: 1, gutter: 20 },
      { mq: '768px', columns: 2, gutter: 20 },
      { mq: '1024px', columns: 3, gutter: 20 }
    ],
    style: {}
  }

  componentDidMount() {
    this.createNewInstance();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    const { instance } = this.state;

    if (prevProps.children.length === 0 && children.length === 0) {
      return;
    }

    if (prevProps.children.length === 0 && children.length > 0) {
      return instance.pack();
    }

    if (prevProps.children.length !== children.length) {
      if (this.props.pack) {
        return instance.pack();
      } else {
        return instance.update();
      }
    }
  }

  componentWillUnmount() {
    if (this.state) {
      this.state.instance.resize(false);
    }
  }

  setContainerRef = (component) => {
    this.masonryContainer = component;
  }

  forcePack = () => {
    if (this.masonryContainer) {
      this.state.instance.pack();
    }
  }

  forceUpdate = () => {
    if (this.masonryContainer) {
      this.state.instance.update();
    }
  }

  createNewInstance = () => {
    const { packed, sizes, children, position } = this.props;
    const instance = Bricks({
      container: this.masonryContainer,
      packed: packed,
      sizes: sizes,
      position: position
    });

    instance.resize(true);

    if (children.length > 0) {
      instance.pack();
    }

    this.setState(() => ({ instance }));
  }

  render() {
    const {
      children,
      className,
      style,
      pack,
      packed,
      position,
      sizes,
      ...props
    } = this.props;

    return (
      <InfiniteScroll {...props}>
        <div ref={this.setContainerRef} className={className} style={style}>
          {children}
        </div>
      </InfiniteScroll>
    );
  }
}
