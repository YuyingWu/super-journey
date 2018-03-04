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

      return _react2.default.createElement('html', (0, _extends3.default)({ lang: 'zh-CN' }, htmlAttrs), _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, '\u8D85\u51E1\u4E4B\u65C5'), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimal-ui' }), _react2.default.createElement('link', { href: '/static/bootstrap.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: '//at.alicdn.com/t/font_2ddoibpy163nxw29.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: '/static/antd.css', rel: 'stylesheet' }), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: "<!--[if lt IE 9]><script src=\"/static/html5shiv.js\"></script><script src=\"/static/respond.js\"></script><![endif]-->" } }), helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent()), _react2.default.createElement('body', (0, _extends3.default)({}, bodyAttrs, {
        className: 'jsx-3958856833' + ' ' + (bodyAttrs.className != null && bodyAttrs.className || '')
      }), _react2.default.createElement(_style2.default, {
        styleId: '3958856833',
        css: ['html{font-size:62.5%!important;}', 'body{font-size:1.4rem!important;}']
      }), _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
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