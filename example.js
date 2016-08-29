require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMasonryInfinite = require('react-masonry-infinite');

var _reactMasonryInfinite2 = _interopRequireDefault(_reactMasonryInfinite);

var defaults = function defaults() {
	var ar = [];
	for (var i = 0; i < 10; i++) {
		ar.push({ height: height(), color: color() });
	}
	return ar;
};

var color = function color() {
	var colors = ['#EC407A', '#EF5350', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#827717', '#EF6C00'];
	return colors[Math.floor(Math.random() * colors.length)];
};

var height = function height() {
	var heights = [200, 300, 300, 400, 400, 450];
	return heights[Math.floor(Math.random() * heights.length)];
};

var Loader = function Loader(props, context) {
	return _react2['default'].createElement(
		'div',
		null,
		_react2['default'].createElement(
			'p',
			{ style: { color: 'rgba(0,0,0,0.87)', marginTop: 32, textAlign: 'center' } },
			'Example loader with 2 seconds delay.',
			_react2['default'].createElement('br', null),
			'Now ',
			props.amount,
			' elements in scroller.'
		),
		_react2['default'].createElement('div', { className: 'loader' })
	);
};

var Card = function Card(props, context) {
	return _react2['default'].createElement(
		'div',
		{ style: { height: props.height, width: 296, backgroundColor: props.color, boxShadow: '0 2px 4px rgba(0,0,0,0.15)', position: 'relative' } },
		_react2['default'].createElement(
			'div',
			{ style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } },
			_react2['default'].createElement(
				'h2',
				null,
				props.header
			)
		)
	);
};

var App = (function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

		this.state = {
			hasMore: true,
			elements: defaults()
		};
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ style: { width: '100%', height: '100%' } },
				_react2['default'].createElement(
					'div',
					{ style: { textAlign: 'center', minHeight: 30 } },
					_react2['default'].createElement(
						'h1',
						{ style: { color: 'white' } },
						'React Masonry Infinite Scroller'
					)
				),
				_react2['default'].createElement(
					'div',
					{ style: { paddingTop: 32, paddingBottom: 16, marginBottom: 16, backgroundColor: 'white' } },
					_react2['default'].createElement(
						_reactMasonryInfinite2['default'],
						{
							hasMore: this.state.hasMore,
							loadMore: this.handleInfiniteLoad.bind(this),
							style: { margin: '0 auto' },
							loader: _react2['default'].createElement(Loader, { amount: this.state.elements.length })
						},
						this.state.elements.map(function (el, index) {
							return _react2['default'].createElement(Card, { color: el.color, height: el.height, header: index, key: index });
						})
					)
				),
				_react2['default'].createElement(
					'div',
					{ style: { position: 'absolute', top: 8, right: 8 } },
					_react2['default'].createElement(
						'a',
						{ href: 'https://github.com/skoob13/react-masonry-infinite' },
						_react2['default'].createElement('img', { style: { height: 32, width: 32 }, src: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' })
					)
				)
			);
		}
	}, {
		key: 'handleInfiniteLoad',
		value: function handleInfiniteLoad() {
			var _this = this;

			setTimeout(function () {
				return _this.setState({ elements: _this.state.elements.concat(defaults()) });
			}, 2000);
		}
	}]);

	return App;
})(_react.Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-masonry-infinite":4}],2:[function(require,module,exports){
/*!
 * Bricks.js 1.7.0 - A blazing fast masonry layout generator for fixed width elements.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/bricks.js
 * License: MIT
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Bricks=n()}(this,function(){"use strict";var t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},n=function(){function n(t,n){return u[t]=u[t]||[],u[t].push(n),this}function e(t,e){return e._once=!0,n(t,e),this}function i(t){var n=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];return n?u[t].splice(u[t].indexOf(n),1):delete u[t],this}function r(t){for(var n=this,e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];var c=u[t]&&u[t].slice();return c&&c.forEach(function(e){e._once&&i(t,e),e.apply(n,r)}),this}var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],u={};return t({},o,{on:n,once:e,off:i,emit:r})},e=function(){function t(t){t.forEach(function(t){return t()})}function e(t){arguments.length<=1||void 0===arguments[1]?document:arguments[1];return g.call(t)}function i(t){return Array.apply(null,Array(t)).map(function(){return 0})}function r(){return B.map(function(t){return t.mq&&window.matchMedia("(min-width: "+t.mq+")").matches}).indexOf(!0)}function o(){A=r()}function u(){O=A===-1?B[B.length-1]:B[A]}function c(){k=i(O.columns)}function a(){z=P[x?"new":"all"]()}function f(){0!==z.length&&(j=z[0].clientWidth,L=z.map(function(t){return t.clientHeight}))}function d(){z.forEach(function(t,n){b=k.indexOf(Math.min.apply(Math,k)),t.style.position="absolute",E=k[b]+"px",M=b*j+b*O.gutter+"px",F?(t.style.top=E,t.style.left=M):t.style.transform="translate3d("+M+", "+E+", 0)",t.setAttribute(_,""),q=L[n],q&&(k[b]+=q+O.gutter)})}function l(){H.style.position="relative",H.style.width=O.columns*j+(O.columns-1)*O.gutter+"px",H.style.height=Math.max.apply(Math,k)-O.gutter+"px"}function s(){w||(requestAnimationFrame(p),w=!0)}function p(){A!==r()&&(h(),W.emit("resize",O)),w=!1}function h(){return x=!1,t(S.concat(T)),W.emit("pack")}function v(){return x=!0,t(T),W.emit("update")}function m(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],n=t?"addEventListener":"removeEventListener";return window[n]("resize",s),W}var y=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],g=Array.prototype.slice,x=void 0,w=void 0,A=void 0,O=void 0,b=void 0,k=void 0,E=void 0,M=void 0,q=void 0,z=void 0,j=void 0,L=void 0,_=0===y.packed.indexOf("data-")?y.packed:"data-"+y.packed,B=y.sizes.slice().reverse(),F=y.position!==!1,H=y.container.nodeType?y.container:document.querySelector(y.container),P={all:function(){return e(H.children)},new:function(){return e(H.children).filter(function(t){return!t.hasAttribute(""+_)})}},S=[o,u,c],T=[a,f,d,l],W=n({pack:h,update:v,resize:m});return W};return e});
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}

var InfiniteScroll = function (_React$Component) {
  _inherits(InfiniteScroll, _React$Component);

  function InfiniteScroll(props) {
    _classCallCheck(this, InfiniteScroll);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteScroll).call(this, props));

    _this.scrollListener = _this.scrollListener.bind(_this);
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pageLoaded = this.props.pageStart;
      this.attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var hasMore = _props.hasMore;
      var loader = _props.loader;
      var loadMore = _props.loadMore;
      var pageStart = _props.pageStart;
      var threshold = _props.threshold;
      var useWindow = _props.useWindow;

      var props = _objectWithoutProperties(_props, ['children', 'hasMore', 'loader', 'loadMore', 'pageStart', 'threshold', 'useWindow']);

      return _react2.default.DOM.div(props, children, hasMore && (loader || this._defaultLoader));
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      var el = _reactDom2.default.findDOMNode(this);
      var scrollEl = window;

      var offset;
      if (this.props.useWindow == true) {
        var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        offset = topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight;
      } else {
        offset = el.offsetHeight - el.parentNode.scrollTop - el.parentNode.clientHeight;
      }

      if (offset < Number(this.props.threshold)) {
        this.detachScrollListener();
        // call loadMore after detachScrollListener to allow
        // for non-async loadMore functions
        this.props.loadMore(this.pageLoaded += 1);
      }
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      if (!this.props.hasMore) {
        return;
      }

      var scrollEl = window;
      if (this.props.useWindow == false) {
        scrollEl = _reactDom2.default.findDOMNode(this).parentNode;
      }

      scrollEl.addEventListener('scroll', this.scrollListener);
      scrollEl.addEventListener('resize', this.scrollListener);
      this.scrollListener();
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      var scrollEl = window;
      if (this.props.useWindow == false) {
        scrollEl = _reactDom2.default.findDOMNode(this).parentNode;
      }

      scrollEl.removeEventListener('scroll', this.scrollListener);
      scrollEl.removeEventListener('resize', this.scrollListener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
    }
  }, {
    key: 'setDefaultLoader',
    value: function setDefaultLoader(loader) {
      this._defaultLoader = loader;
    }
  }]);

  return InfiniteScroll;
}(_react2.default.Component);

exports.default = InfiniteScroll;

InfiniteScroll.PropTypes = {
  pageStart: _react2.default.PropTypes.number,
  hasMore: _react2.default.PropTypes.bool,
  loadMore: _react2.default.PropTypes.func.isRequired,
  threshold: _react2.default.PropTypes.number,
  useWindow: _react2.default.PropTypes.bool
};
InfiniteScroll.defaultProps = {
  pageStart: 0,
  hasMore: false,
  loadMore: function loadMore() {},
  threshold: 250,
  useWindow: true
};
module.exports = exports['default'];

},{"react":undefined,"react-dom":undefined}],4:[function(require,module,exports){
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
},{"bricks.js":2,"react":undefined,"react-infinite-scroller":3}]},{},[1]);
