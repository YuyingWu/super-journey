'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _document = require('_next@4.2.3@next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-j/next-src/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var helmet = _reactHelmet.Helmet.renderStatic();
      var htmlAttrs = helmet.htmlAttributes.toComponent();
      var bodyAttrs = helmet.bodyAttributes.toComponent();

      return _react2.default.createElement('html', (0, _extends3.default)({ lang: 'zh-CN' }, htmlAttrs, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, '\u8D85\u51E1\u4E4B\u65C5'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimal-ui', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('link', { href: '/static/bootstrap.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('link', { href: '//at.alicdn.com/t/font_2ddoibpy163nxw29.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('link', { href: '/static/antd.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "<!--[if lt IE 9]><script src=\"/static/html5shiv.js\"></script><script src=\"/static/respond.js\"></script><![endif]-->" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent()), _react2.default.createElement('body', (0, _extends3.default)({}, bodyAttrs, {
        className: 'jsx-4043581549' + ' ' + (bodyAttrs.className != null && bodyAttrs.className || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '4043581549',
        css: 'html{font-size:62.5%!important;}body{font-size:1.4rem!important;}.container{padding-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBR3VDLEFBR0MsQUFHVixpQkFDbkIsU0FOQSxDQUdBIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL2JhZS1zdXBlci1qL25leHQtc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHtIZWxtZXR9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7aHRtbCwgaGVhZCwgZXJyb3JIdG1sLCBjaHVua3N9ID0gcmVuZGVyUGFnZSgpXG4gICAgY29uc3Qgc3R5bGVzID0gZmx1c2goKVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzLCBzdHlsZXMgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBoZWxtZXQgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XG4gICAgY29uc3QgaHRtbEF0dHJzID0gaGVsbWV0Lmh0bWxBdHRyaWJ1dGVzLnRvQ29tcG9uZW50KCk7XG4gICAgY29uc3QgYm9keUF0dHJzID0gaGVsbWV0LmJvZHlBdHRyaWJ1dGVzLnRvQ29tcG9uZW50KCk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgPGh0bWwgbGFuZz1cInpoLUNOXCIgey4uLmh0bWxBdHRyc30+XG4gICAgICAgPEhlYWQ+XG4gICAgICAgICA8dGl0bGU+6LaF5Yeh5LmL5peFPC90aXRsZT5cbiAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSxtaW5pbWFsLXVpXCIvPlxuICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgPGxpbmsgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMmRkb2licHkxNjNueHcyOS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2FudGQuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICBcbiAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiPCEtLVtpZiBsdCBJRSA5XT48c2NyaXB0IHNyYz1cXFwiL3N0YXRpYy9odG1sNXNoaXYuanNcXFwiPjwvc2NyaXB0PjxzY3JpcHQgc3JjPVxcXCIvc3RhdGljL3Jlc3BvbmQuanNcXFwiPjwvc2NyaXB0PjwhW2VuZGlmXS0tPlwiIH19Lz5cbiAgICAgIFxuICAgICAgICAge2hlbG1ldC50aXRsZS50b0NvbXBvbmVudCgpfVxuICAgICAgICAge2hlbG1ldC5tZXRhLnRvQ29tcG9uZW50KCl9XG4gICAgICAgICB7aGVsbWV0LmxpbmsudG9Db21wb25lbnQoKX1cbiAgICAgICA8L0hlYWQ+XG4gICAgICAgPGJvZHkgey4uLmJvZHlBdHRyc30+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjIuNSUhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW0haW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICA8L2JvZHk+XG4gICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/_document.js?entry */'
      }), _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiSGVsbWV0IiwiTXlEb2N1bWVudCIsImhlbG1ldCIsInJlbmRlclN0YXRpYyIsImh0bWxBdHRycyIsImh0bWxBdHRyaWJ1dGVzIiwidG9Db21wb25lbnQiLCJib2R5QXR0cnMiLCJib2R5QXR0cmlidXRlcyIsIl9faHRtbCIsInRpdGxlIiwibWV0YSIsImxpbmsiLCJyZW5kZXJQYWdlIiwiaHRtbCIsImhlYWQiLCJlcnJvckh0bWwiLCJjaHVua3MiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTzs7OztBQUNQLEFBQVE7Ozs7Ozs7SSxBQUVhOzs7Ozs7Ozs7Ozs2QkFPVCxBQUNSO1VBQU0sU0FBUyxvQkFBZixBQUFlLEFBQU8sQUFDdEI7VUFBTSxZQUFZLE9BQUEsQUFBTyxlQUF6QixBQUFrQixBQUFzQixBQUN4QztVQUFNLFlBQVksT0FBQSxBQUFPLGVBQXpCLEFBQWtCLEFBQXNCLEFBRXhDOzs2QkFDQyxjQUFBLGlDQUFNLE1BQU4sQUFBVyxXQUFYLEFBQXVCOztvQkFBdkI7c0JBQUEsQUFDRTtBQURGO0FBQUEsUUFBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUVBQU0sU0FBTixBQUFjO29CQUFkO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLFdBQU4sQUFBZ0IsbUJBQWtCLFNBQWxDLEFBQTBDO29CQUExQztzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBSkYsQUFJRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLHlCQUF3QixLQUFuQyxBQUF1QztvQkFBdkM7c0JBTEYsQUFLRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLCtDQUE4QyxLQUF6RCxBQUE2RDtvQkFBN0Q7c0JBTkYsQUFNRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLG9CQUFtQixLQUE5QixBQUFrQztvQkFBbEM7c0JBUEYsQUFPRSxBQUVBO0FBRkE7aURBRUsseUJBQXlCLEVBQUMsUUFBL0IsQUFBOEIsQUFBUztvQkFBdkM7c0JBVEYsQUFTRSxBQUVDO0FBRkQ7aUJBRUMsQUFBTyxNQVhWLEFBV0csQUFBYSxBQUNiLHNCQUFBLEFBQU8sS0FaVixBQVlHLEFBQVksQUFDWixzQkFBQSxBQUFPLEtBZFosQUFDRSxBQWFHLEFBQVksQUFFZixnQ0FBQSxjQUFBLG1DQUFBLEFBQVU7bUdBQVY7O29CQUFBO3NCQUFBO0FBQUE7QUFBQTtpQkFBQTthQUFBLEFBWUU7QUFaRiwwQkFZRSxBQUFDOztvQkFBRDtzQkFaRixBQVlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQTlCTCxBQUNDLEFBZ0JFLEFBYUUsQUFJTjtBQUpNO0FBQUE7Ozs7MENBekNpQztVQUFkLEFBQWMsa0JBQWQsQUFBYzs7d0JBQUEsQUFDRTtVQURGLEFBQy9CLG1CQUQrQixBQUMvQjtVQUQrQixBQUN6QixtQkFEeUIsQUFDekI7VUFEeUIsQUFDbkIsd0JBRG1CLEFBQ25CO1VBRG1CLEFBQ1IscUJBRFEsQUFDUixBQUM5Qjs7VUFBTSxTQUFOLEFBQWUsQUFDZjthQUFPLEVBQUUsTUFBRixNQUFRLE1BQVIsTUFBYyxXQUFkLFdBQXlCLFFBQXpCLFFBQWlDLFFBQXhDLEFBQU8sQUFDUjs7Ozs7QUFMcUMsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvYmFlLXN1cGVyLWovbmV4dC1zcmMifQ==