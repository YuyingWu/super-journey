'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('_styled-jsx@2.2.1@styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@4.2.3@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AV from 'leancloud-storage';
// import { Helmet } from "react-helmet";

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',

    // componentDidMount() {
    //   console.log(AV._installationId);
    //   if(!AV._installationId){
    //     const appId = 'Do5NpSTuP2APFE9wQAvDxmxM-gzGzoHsz';
    //     const appKey = 'TL0dh8sMu3m6MMaEukSxPfon';
    //     AV.init({ appId, appKey });
    //   }
    // }
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement('div', {
        className: 'jsx-4043893803'
      }, _react2.default.createElement(_style2.default, {
        styleId: '4043893803',
        css: ['.wgt-nav.jsx-4043893803{width:100%;height:56px;background:#2e928a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}', '.wgt-nav.jsx-4043893803 a.jsx-4043893803{line-height:56px;color:#fff;text-decoration:none;padding-left:12px;padding-right:12px;font-size:1.8rem;}', '.navTitle.jsx-4043893803{font-size:2.4rem;}']
      }), _react2.default.createElement('nav', {
        className: 'jsx-4043893803' + ' ' + 'wgt-nav'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-4043893803' + ' ' + 'navTitle'
      }, '\u9996\u9875'))), _react2.default.createElement('main', {
        className: 'jsx-4043893803' + ' ' + 'container'
      }, children));
    }
  }]);

  return _class;
}(_react.PureComponent);

// export default ({ children }) =>
//   <div>
//     <style jsx>{`
//     .wgt-nav{
//       width: 100%;
//       height: 56px;
//       background: #2e928a;
//       display: flex;
//       justify-content: space-between;
//     }
//     .wgt-nav a{
//       line-height: 56px;
//       color: #fff;
//       text-decoration: none;
//       padding-left: 12px;
//       padding-right: 12px;
//       font-size: 1.8rem;
//     }
//     .navTitle{
//       font-size: 2.4rem;
//     }
//   `}</style>
//     <nav className="wgt-nav">
//       <Link href="/">
//         <a className="navTitle">首页</a>
//       </Link>
//       {/*<a href="/blog/">Blog</a>*/}
//     </nav>

//     <main className="container">
//       {children}
//     </main>
//   </div>


exports.default = _class;