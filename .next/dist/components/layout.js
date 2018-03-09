'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _test = require('../stores/test');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-j/next-src/components/layout.js';


var _default = function (_Component) {
  (0, _inherits3.default)(_default, _Component);

  function _default() {
    (0, _classCallCheck3.default)(this, _default);

    return (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).apply(this, arguments));
  }

  (0, _createClass3.default)(_default, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var childrenWithProps = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { store: _test.TestStore });
      });

      return _react2.default.createElement('div', {
        className: 'jsx-4043893803',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '4043893803',
        css: '.wgt-nav.jsx-4043893803{width:100%;height:56px;background:#2e928a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.wgt-nav.jsx-4043893803 a.jsx-4043893803{line-height:56px;color:#fff;text-decoration:none;padding-left:12px;padding-right:12px;font-size:1.8rem;}.navTitle.jsx-4043893803{font-size:2.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUd3QixBQU9NLEFBUUEsV0FkTCxNQU9ELEFBUWIsTUFkcUIsS0FPRSxjQU5SLE9BT0ssa0JBQ0MsbUJBQ0YsaUJBQ25CLGFBVGdDLG1IQUNoQyIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL2JhZS1zdXBlci1qL25leHQtc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IFRlc3RTdG9yZSB9IGZyb20gJy4uL3N0b3Jlcy90ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZHJlbldpdGhQcm9wcyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBzdG9yZTogVGVzdFN0b3JlIH0pKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndndC1uYXZ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZTkyOGE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2d0LW5hdiBhe1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdlRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwid2d0LW5hdlwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZUaXRsZVwiPummlumhtTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgey8qPGEgaHJlZj1cIi9ibG9nL1wiPkJsb2c8L2E+Ki99XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHtjaGlsZHJlbldpdGhQcm9wc31cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PlxuLy8gICA8ZGl2PlxuLy8gICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAud2d0LW5hdntcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgaGVpZ2h0OiA1NnB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogIzJlOTI4YTtcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgfVxuLy8gICAgIC53Z3QtbmF2IGF7XG4vLyAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbi8vICAgICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuLy8gICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbi8vICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuLy8gICAgIH1cbi8vICAgICAubmF2VGl0bGV7XG4vLyAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbi8vICAgICB9XG4vLyAgIGB9PC9zdHlsZT5cbi8vICAgICA8bmF2IGNsYXNzTmFtZT1cIndndC1uYXZcIj5cbi8vICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4vLyAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdlRpdGxlXCI+6aaW6aG1PC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgICAgey8qPGEgaHJlZj1cIi9ibG9nL1wiPkJsb2c8L2E+Ki99XG4vLyAgICAgPC9uYXY+XG5cbi8vICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbi8vICAgICAgIHtjaGlsZHJlbn1cbi8vICAgICA8L21haW4+XG4vLyAgIDwvZGl2PiJdfQ== */\n/*@ sourceURL=components/layout.js */'
      }), _react2.default.createElement('nav', {
        className: 'jsx-4043893803' + ' ' + 'wgt-nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-4043893803' + ' ' + 'navTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, '\u9996\u9875'))), _react2.default.createElement('main', {
        className: 'jsx-4043893803' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, childrenWithProps));
    }
  }]);

  return _default;
}(_react.Component);

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


exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkZvb3RlciIsIlRlc3RTdG9yZSIsImNoaWxkcmVuIiwicHJvcHMiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2xvbmVFbGVtZW50IiwiY2hpbGQiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHZjtVQUFBLEFBQ0MsV0FBYSxLQURkLEFBQ21CLE1BRG5CLEFBQ0MsQUFDUjs7VUFBTSxvQ0FBb0IsQUFBTSxTQUFOLEFBQWUsSUFBZixBQUFtQixVQUFVLGlCQUFBO2VBQ3JELGdCQUFBLEFBQU0sYUFBTixBQUFtQixPQUFPLEVBRDJCLEFBQ3JELEFBQTBCLEFBQUUsQUFBTztBQURyQyxBQUEwQixBQUcxQixPQUgwQjs7NkJBSXhCLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBO2lCQUFBO2FBQUEsQUFxQkU7QUFyQkYsMEJBcUJFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBdkJOLEFBcUJFLEFBQ0UsQUFDRSxBQUtKLG1DQUFBLGNBQUE7NENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQTdCSixBQUNFLEFBNEJFLEFBS0w7Ozs7O0FBeEMwQixBOztBQTJDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvYmFlLXN1cGVyLWovbmV4dC1zcmMifQ==