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

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-journey/next-src/components/layout.js';

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
        css: '.wgt-nav.jsx-4043893803{width:100%;height:56px;background:#2e928a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.wgt-nav.jsx-4043893803 a.jsx-4043893803{line-height:56px;color:#fff;text-decoration:none;padding-left:12px;padding-right:12px;font-size:1.8rem;}.navTitle.jsx-4043893803{font-size:2.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFHd0IsQUFPTSxBQVFBLFdBZEwsTUFPRCxBQVFiLE1BZHFCLEtBT0UsY0FOUixPQU9LLGtCQUNDLG1CQUNGLGlCQUNuQixhQVRnQyxtSEFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9iYWUtc3VwZXItam91cm5leS9uZXh0LXNyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuLy8gaW1wb3J0IEFWIGZyb20gJ2xlYW5jbG91ZC1zdG9yYWdlJztcbi8vIGltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgY29uc29sZS5sb2coQVYuX2luc3RhbGxhdGlvbklkKTtcbiAgLy8gICBpZighQVYuX2luc3RhbGxhdGlvbklkKXtcbiAgLy8gICAgIGNvbnN0IGFwcElkID0gJ0RvNU5wU1R1UDJBUEZFOXdRQXZEeG14TS1nekd6b0hzeic7XG4gIC8vICAgICBjb25zdCBhcHBLZXkgPSAnVEwwZGg4c011M202TU1hRXVrU3hQZm9uJztcbiAgLy8gICAgIEFWLmluaXQoeyBhcHBJZCwgYXBwS2V5IH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndndC1uYXZ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZTkyOGE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2d0LW5hdiBhe1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdlRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwid2d0LW5hdlwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZUaXRsZVwiPummlumhtTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgey8qPGEgaHJlZj1cIi9ibG9nL1wiPkJsb2c8L2E+Ki99XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PlxuLy8gICA8ZGl2PlxuLy8gICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAud2d0LW5hdntcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgaGVpZ2h0OiA1NnB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogIzJlOTI4YTtcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgfVxuLy8gICAgIC53Z3QtbmF2IGF7XG4vLyAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbi8vICAgICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuLy8gICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbi8vICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuLy8gICAgIH1cbi8vICAgICAubmF2VGl0bGV7XG4vLyAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbi8vICAgICB9XG4vLyAgIGB9PC9zdHlsZT5cbi8vICAgICA8bmF2IGNsYXNzTmFtZT1cIndndC1uYXZcIj5cbi8vICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4vLyAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdlRpdGxlXCI+6aaW6aG1PC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgICAgey8qPGEgaHJlZj1cIi9ibG9nL1wiPkJsb2c8L2E+Ki99XG4vLyAgICAgPC9uYXY+XG5cbi8vICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbi8vICAgICAgIHtjaGlsZHJlbn1cbi8vICAgICA8L21haW4+XG4vLyAgIDwvZGl2PiJdfQ== */\n/*@ sourceURL=components/layout.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkxpbmsiLCJGb290ZXIiLCJjaGlsZHJlbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7O1NBR0U7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzZCQUNTO1VBQUEsQUFDQyxXQUFhLEtBRGQsQUFDbUIsTUFEbkIsQUFDQyxBQUVSOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBcUJFO0FBckJGLDBCQXFCRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQXZCTixBQXFCRSxBQUNFLEFBQ0UsQUFLSixtQ0FBQSxjQUFBOzRDQUFBLEFBQWdCOztvQkFBaEI7c0JBQUEsQUFDRztBQURIO0FBQUEsU0E3QkosQUFDRSxBQTRCRSxBQUtMOzs7OztBLEFBOUMwQjs7QUFpRDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL2JhZS1zdXBlci1qb3VybmV5L25leHQtc3JjIn0=