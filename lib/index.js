'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bricks = require('bricks.js');

var _bricks2 = _interopRequireDefault(_bricks);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasonryInfiniteScroller = (_temp = _class = function (_Component) {
  _inherits(MasonryInfiniteScroller, _Component);

  function MasonryInfiniteScroller() {
    _classCallCheck(this, MasonryInfiniteScroller);

    return _possibleConstructorReturn(this, (MasonryInfiniteScroller.__proto__ || Object.getPrototypeOf(MasonryInfiniteScroller)).apply(this, arguments));
  }

  _createClass(MasonryInfiniteScroller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var packed = _props.packed;
      var sizes = _props.sizes;
      var children = _props.children;
      var position = _props.position;


      var instance = (0, _bricks2.default)({
        container: this.masonryContainer,
        packed: packed,
        sizes: sizes,
        position: position
      });

      instance.resize(true);

      if (children.length > 0) {
        instance.pack();
      }

      this.setState({ instance: instance });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var children = this.props.children;


      if (prevProps.children.length === 0 && children.length === 0) {
        return;
      }

      var instance = this.state.instance;


      if (prevProps.children.length === 0 && children.length > 0) {
        return instance.pack();
      }

      if (prevProps.children.length !== children.length) {
        return instance.update();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.instance.resize(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var className = _props2.className;
      var style = _props2.style;
      var children = _props2.children;
      var pageStart = _props2.pageStart;
      var loadMore = _props2.loadMore;
      var hasMore = _props2.hasMore;
      var loader = _props2.loader;
      var threshold = _props2.threshold;
      var useWindow = _props2.useWindow;

      return _react2.default.createElement(
        _reactInfiniteScroller2.default,
        {
          pageStart: pageStart,
          loadMore: loadMore,
          hasMore: hasMore,
          loader: loader,
          threshold: threshold,
          useWindow: useWindow
        },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(component) {
              return _this2.masonryContainer = component;
            },
            className: className,
            style: style
          },
          children
        )
      );
    }
  }]);

  return MasonryInfiniteScroller;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.arrayOf(_react.PropTypes.element).isRequired,
  className: _react.PropTypes.string,
  hasMore: _react.PropTypes.bool,
  loader: _react.PropTypes.element,
  loadMore: _react.PropTypes.func,
  packed: _react.PropTypes.string,
  pageStart: _react.PropTypes.number,
  position: _react.PropTypes.bool,
  sizes: _react.PropTypes.array,
  style: _react.PropTypes.object,
  threshold: _react.PropTypes.number,
  useWindow: _react.PropTypes.bool
}, _class.defaultProps = {
  className: '',
  packed: 'data-packed',
  position: true,
  sizes: [{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 3, gutter: 20 }],
  style: {}
}, _temp);
exports.default = MasonryInfiniteScroller;