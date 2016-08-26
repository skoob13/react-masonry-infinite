import React, { PropTypes, Component } from 'react';
import Bricks from 'bricks.js';
import InfiniteScroll from 'react-infinite-scroller';

export default class MasonryInfiniteScroller extends Component {
  static propTypes = {
    packed: PropTypes.string,
    sizes: PropTypes.array,
    position: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    pageStart: PropTypes.number,
    loadMore: PropTypes.func,
    hasMore: PropTypes.bool,
    loader: PropTypes.element,
    threshold: PropTypes.number,
    useWindow: PropTypes.bool,
  }

  static defaultProps = {
    packed: 'data-packed',
    sizes: [
      { columns: 1, gutter: 30 },
      { mq: '660px', columns: 2, gutter: 30 },
      { mq: '970px', columns: 3, gutter: 30 }
    ],
    position: true,
    style: {},
    className: '',
  }

  componentDidMount() {
    const { packed, sizes, children, position } = this.props;

    const instance = Bricks({
      container: this.masonryContainer,
      packed: packed,
      sizes: sizes,
      position: position,
    });

    instance.resize(true);

    if (children.length > 0) {
      instance.pack();
    }

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;

    if (prevProps.children.length === 0 && children.length === 0) {
      return;
    }

    const { instance } = this.state;

    if (prevProps.children.length === 0 && children.length > 0) {
      return instance.pack();
    }

    if (prevProps.children.length !== children.length) {
      return instance.update();
    }
  }

  componentWillUnmount() {
    this.state.instance.resize(false);
  }

  render() {
    const { className, style, children, pageStart, loadMore, hasMore, loader, threshold, useWindow } = this.props;
    return (
      <InfiniteScroll
        pageStart={pageStart}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={loader}
        threshold={threshold}
        useWindow={useWindow}
      >
        <div
          ref={(component) => this.masonryContainer = component}
          className={className}
          style={style}
        >
          {children}
        </div>
      </InfiniteScroll>
    );
  }
}
