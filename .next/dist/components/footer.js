"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("_styled-jsx@2.2.1@styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("footer", {
        className: "jsx-886665729" + " " + "wgt-footer"
      }, _react2.default.createElement(_style2.default, {
        styleId: "886665729",
        css: [".wgt-footer.jsx-886665729{font-size:1.2rem;padding:20px 0 10px;text-align:center;}", ".wgt-footer.jsx-886665729 p.jsx-886665729{line-height:1;}", ".v-split.jsx-886665729{margin:0 5px;}", ".wgt-footer.jsx-886665729 a.jsx-886665729{color:#000;}"]
      }), _react2.default.createElement("p", {
        className: "jsx-886665729"
      }, "\xA9 2014-", new Date().getFullYear(), "\xA0", _react2.default.createElement("a", { href: "http://www.wuyuying.com/blog/", className: "jsx-886665729"
      }, "\u4F0D\u9171"), _react2.default.createElement("span", {
        className: "jsx-886665729" + " " + "v-split"
      }, "|"), _react2.default.createElement("a", { href: "https://github.com/YuyingWu", className: "jsx-886665729"
      }, "Github"), _react2.default.createElement("span", {
        className: "jsx-886665729" + " " + "v-split"
      }, "|"), _react2.default.createElement("a", { href: "http://www.weibo.com/wuyuying1128", className: "jsx-886665729"
      }, "\u5FAE\u535A"), _react2.default.createElement("span", {
        className: "jsx-886665729" + " " + "v-split"
      }, "|"), _react2.default.createElement("a", { href: "http://www.douban.com/people/wuyuying1128/", className: "jsx-886665729"
      }, "\u8C46\u74E3")), _react2.default.createElement("p", {
        className: "jsx-886665729"
      }, "\u4EACICP\u590716019960\u53F7"));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;