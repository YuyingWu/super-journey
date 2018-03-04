'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/pages/_document.js?entry';


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
      }), _react2.default.createElement('link', { href: '//cdnjs.cloudflare.com/ajax/libs/antd/3.2.3/antd.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "<!--[if lt IE 9]><script src=\"/static/html5shiv.js\"></script><script src=\"/static/respond.js\"></script><![endif]-->" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent()), _react2.default.createElement('body', (0, _extends3.default)({}, bodyAttrs, {
        className: 'jsx-3958856833' + ' ' + (bodyAttrs.className != null && bodyAttrs.className || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3958856833',
        css: 'html{font-size:62.5%!important;}body{font-size:1.4rem!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBR3VDLEFBR0MsMEJBRjdCLENBR0EiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvc3VwZXItam91cm5leSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7SGVsbWV0fSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVuZGVyUGFnZSB9KSB7XG4gICAgY29uc3Qge2h0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzfSA9IHJlbmRlclBhZ2UoKVxuICAgIGNvbnN0IHN0eWxlcyA9IGZsdXNoKClcbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rcywgc3R5bGVzIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuICAgIGNvbnN0IGh0bWxBdHRycyA9IGhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpO1xuICAgIGNvbnN0IGJvZHlBdHRycyA9IGhlbG1ldC5ib2R5QXR0cmlidXRlcy50b0NvbXBvbmVudCgpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgIDxodG1sIGxhbmc9XCJ6aC1DTlwiIHsuLi5odG1sQXR0cnN9PlxuICAgICAgIDxIZWFkPlxuICAgICAgICAgPHRpdGxlPui2heWHoeS5i+aXhTwvdGl0bGU+XG4gICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWluaW1hbC11aVwiLz5cbiAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Jvb3RzdHJhcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgIDxsaW5rIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzJkZG9pYnB5MTYzbnh3MjkuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICA8bGluayBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjIuMy9hbnRkLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgXG4gICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBcIjwhLS1baWYgbHQgSUUgOV0+PHNjcmlwdCBzcmM9XFxcIi9zdGF0aWMvaHRtbDVzaGl2LmpzXFxcIj48L3NjcmlwdD48c2NyaXB0IHNyYz1cXFwiL3N0YXRpYy9yZXNwb25kLmpzXFxcIj48L3NjcmlwdD48IVtlbmRpZl0tLT5cIiB9fS8+XG4gICAgICBcbiAgICAgICAgIHtoZWxtZXQudGl0bGUudG9Db21wb25lbnQoKX1cbiAgICAgICAgIHtoZWxtZXQubWV0YS50b0NvbXBvbmVudCgpfVxuICAgICAgICAge2hlbG1ldC5saW5rLnRvQ29tcG9uZW50KCl9XG4gICAgICAgPC9IZWFkPlxuICAgICAgIDxib2R5IHsuLi5ib2R5QXR0cnN9PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGh0bWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDYyLjUlIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgIDwvYm9keT5cbiAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/_document.js?entry */'
      }), _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiSGVsbWV0IiwiTXlEb2N1bWVudCIsImhlbG1ldCIsInJlbmRlclN0YXRpYyIsImh0bWxBdHRycyIsImh0bWxBdHRyaWJ1dGVzIiwidG9Db21wb25lbnQiLCJib2R5QXR0cnMiLCJib2R5QXR0cmlidXRlcyIsIl9faHRtbCIsInRpdGxlIiwibWV0YSIsImxpbmsiLCJyZW5kZXJQYWdlIiwiaHRtbCIsImhlYWQiLCJlcnJvckh0bWwiLCJjaHVua3MiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFPOzs7O0FBQ1AsQUFBUTs7Ozs7OztJLEFBRWE7Ozs7Ozs7Ozs7OzZCQU9ULEFBQ1I7VUFBTSxTQUFTLG9CQUFmLEFBQWUsQUFBTyxBQUN0QjtVQUFNLFlBQVksT0FBQSxBQUFPLGVBQXpCLEFBQWtCLEFBQXNCLEFBQ3hDO1VBQU0sWUFBWSxPQUFBLEFBQU8sZUFBekIsQUFBa0IsQUFBc0IsQUFFeEM7OzZCQUNDLGNBQUEsaUNBQU0sTUFBTixBQUFXLFdBQVgsQUFBdUI7O29CQUF2QjtzQkFBQSxBQUNFO0FBREY7QUFBQSxRQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxRUFBTSxTQUFOLEFBQWM7b0JBQWQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sV0FBTixBQUFnQixtQkFBa0IsU0FBbEMsQUFBMEM7b0JBQTFDO3NCQUhGLEFBR0UsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFKRixBQUlFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcseUJBQXdCLEtBQW5DLEFBQXVDO29CQUF2QztzQkFMRixBQUtFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsK0NBQThDLEtBQXpELEFBQTZEO29CQUE3RDtzQkFORixBQU1FLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsd0RBQXVELEtBQWxFLEFBQXNFO29CQUF0RTtzQkFQRixBQU9FLEFBRUE7QUFGQTtpREFFSyx5QkFBeUIsRUFBQyxRQUEvQixBQUE4QixBQUFTO29CQUF2QztzQkFURixBQVNFLEFBRUM7QUFGRDtpQkFFQyxBQUFPLE1BWFYsQUFXRyxBQUFhLEFBQ2Isc0JBQUEsQUFBTyxLQVpWLEFBWUcsQUFBWSxBQUNaLHNCQUFBLEFBQU8sS0FkWixBQUNFLEFBYUcsQUFBWSxBQUVmLGdDQUFBLGNBQUEsbUNBQUEsQUFBVTttR0FBVjs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBO2lCQUFBO2FBQUEsQUFTRTtBQVRGLDBCQVNFLEFBQUM7O29CQUFEO3NCQVRGLEFBU0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBM0JMLEFBQ0MsQUFnQkUsQUFVRSxBQUlOO0FBSk07QUFBQTs7OzswQ0F0Q2lDO1VBQWQsQUFBYyxrQkFBZCxBQUFjOzt3QkFBQSxBQUNFO1VBREYsQUFDL0IsbUJBRCtCLEFBQy9CO1VBRCtCLEFBQ3pCLG1CQUR5QixBQUN6QjtVQUR5QixBQUNuQix3QkFEbUIsQUFDbkI7VUFEbUIsQUFDUixxQkFEUSxBQUNSLEFBQzlCOztVQUFNLFNBQU4sQUFBZSxBQUNmO2FBQU8sRUFBRSxNQUFGLE1BQVEsTUFBUixNQUFjLFdBQWQsV0FBeUIsUUFBekIsUUFBaUMsUUFBeEMsQUFBTyxBQUNSOzs7OztBQUxxQyxBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9zdXBlci1qb3VybmV5In0=