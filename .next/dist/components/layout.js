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

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/components/layout.js';

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
        className: 'jsx-4043893803',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '4043893803',
        css: '.wgt-nav.jsx-4043893803{width:100%;height:56px;background:#2e928a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.wgt-nav.jsx-4043893803 a.jsx-4043893803{line-height:56px;color:#fff;text-decoration:none;padding-left:12px;padding-right:12px;font-size:1.8rem;}.navTitle.jsx-4043893803{font-size:2.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFHd0IsQUFPTSxBQVFBLFdBZEwsTUFPRCxBQVFiLE1BZHFCLEtBT0UsY0FOUixPQU9LLGtCQUNDLG1CQUNGLGlCQUNuQixhQVRnQyxtSEFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9zdXBlci1qb3VybmV5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG4vLyBpbXBvcnQgQVYgZnJvbSAnbGVhbmNsb3VkLXN0b3JhZ2UnO1xuLy8gaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhBVi5faW5zdGFsbGF0aW9uSWQpO1xuICAvLyAgIGlmKCFBVi5faW5zdGFsbGF0aW9uSWQpe1xuICAvLyAgICAgY29uc3QgYXBwSWQgPSAnRG81TnBTVHVQMkFQRkU5d1FBdkR4bXhNLWd6R3pvSHN6JztcbiAgLy8gICAgIGNvbnN0IGFwcEtleSA9ICdUTDBkaDhzTXUzbTZNTWFFdWtTeFBmb24nO1xuICAvLyAgICAgQVYuaW5pdCh7IGFwcElkLCBhcHBLZXkgfSk7XG4gIC8vICAgfVxuICAvLyB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud2d0LW5hdntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJlOTI4YTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC53Z3QtbmF2IGF7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2VGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ3Z3QtbmF2XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdlRpdGxlXCI+6aaW6aG1PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7Lyo8YSBocmVmPVwiL2Jsb2cvXCI+QmxvZzwvYT4qL31cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+XG4vLyAgIDxkaXY+XG4vLyAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgIC53Z3QtbmF2e1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBoZWlnaHQ6IDU2cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjMmU5MjhhO1xuLy8gICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICB9XG4vLyAgICAgLndndC1uYXYgYXtcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuLy8gICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4vLyAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuLy8gICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4vLyAgICAgfVxuLy8gICAgIC5uYXZUaXRsZXtcbi8vICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuLy8gICAgIH1cbi8vICAgYH08L3N0eWxlPlxuLy8gICAgIDxuYXYgY2xhc3NOYW1lPVwid2d0LW5hdlwiPlxuLy8gICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbi8vICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2VGl0bGVcIj7pppbpobU8L2E+XG4vLyAgICAgICA8L0xpbms+XG4vLyAgICAgICB7Lyo8YSBocmVmPVwiL2Jsb2cvXCI+QmxvZzwvYT4qL31cbi8vICAgICA8L25hdj5cblxuLy8gICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuLy8gICAgICAge2NoaWxkcmVufVxuLy8gICAgIDwvbWFpbj5cbi8vICAgPC9kaXY+Il19 */\n/*@ sourceURL=components/layout.js */'
      }), _react2.default.createElement('nav', {
        className: 'jsx-4043893803' + ' ' + 'wgt-nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-4043893803' + ' ' + 'navTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, '\u9996\u9875'))), _react2.default.createElement('main', {
        className: 'jsx-4043893803' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkxpbmsiLCJGb290ZXIiLCJjaGlsZHJlbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7O1NBR0U7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzZCQUNTO1VBQUEsQUFDQyxXQUFhLEtBRGQsQUFDbUIsTUFEbkIsQUFDQyxBQUVSOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBcUJFO0FBckJGLDBCQXFCRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQXZCTixBQXFCRSxBQUNFLEFBQ0UsQUFLSixtQ0FBQSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRztBQURIO0FBQUEsU0E3QkosQUFDRSxBQTRCRSxBQUtMOzs7OztBLEFBOUMwQjs7QUFpRDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL3N1cGVyLWpvdXJuZXkifQ==