import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bricks from 'bricks.js';
import InfiniteScroll from 'react-infinite-scroller';

export default class MasonryInfiniteScroller extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    element: PropTypes.string,
    hasMore: PropTypes.bool,
    loadMore: PropTypes.func,
    loader: PropTypes.element,
    pack: PropTypes.bool,
    packed: PropTypes.string,
    pageStart: PropTypes.number,
    position: PropTypes.bool,
    sizes: PropTypes.array,
    style: PropTypes.object,
    threshold: PropTypes.number,
    useWindow: PropTypes.bool
  }

  static defaultProps = {
    className: '',
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

    // eslint-disable-next-line
    this.setState(() => ({ instance }));
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;

    if (prevProps.children.length === 0 && children.length === 0) {
      return;
    }

    if (prevProps.children.length === 0 && children.length > 0) {
      return this.state.instance.pack();
    }

    if (prevProps.children.length !== children.length) {
      if (this.props.pack) {
        return this.state.instance.pack();
      } else {
        return this.state.instance.update();
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

  render() {
    const {
      children,
      className,
      element,
      hasMore,
      loadMore,
      loader,
      pageStart,
      style,
      threshold,
      useWindow
    } = this.props;

    return (
      <InfiniteScroll
        element={element}
        hasMore={hasMore}
        loadMore={loadMore}
        loader={loader}
        pageStart={pageStart}
        threshold={threshold}
        useWindow={useWindow}
      >
        <div ref={this.setContainerRef} className={className} style={style}>
          {children}
        </div>
      </InfiniteScroll>
    );
  }
}
