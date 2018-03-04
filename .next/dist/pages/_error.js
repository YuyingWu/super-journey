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

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
    (0, _inherits3.default)(Error, _React$Component);

    function Error() {
        (0, _classCallCheck3.default)(this, Error);

        return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
    }

    (0, _createClass3.default)(Error, [{
        key: 'render',

        /*static getInitialProps({ res, err }) {
          const statusCode = res ? res.statusCode : err ? err.statusCode : null;
          return { statusCode }
        }*/

        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-830220282' + ' ' + 'page-error'
            }, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement('title', {
                className: 'jsx-830220282'
            }, '404 | \u543E\u60A0\u6742\u8D27\u94FA')), _react2.default.createElement(_style2.default, {
                styleId: '1213744191',
                css: ['html{font-size:62.5%;}', 'body{font-size:1.4rem;background:#2710f2!important;}', '*::selection{color:#49ffb9;background:#000;}']
            }), _react2.default.createElement(_style2.default, {
                styleId: '3886255244',
                css: ['.page-error.jsx-830220282{-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);color:#fff;text-align:center;font-family:monospace,\'Hiragino Sans GB\',\'tahoma\',\'PingFang SC\',\'WenQuanYi Micro Hei\',\'Microsoft YaHei\',\'arial\',\'sans-serif\';}', '.page-error.jsx-830220282 a.jsx-830220282{color:#fff;text-decoration:underline;}', '.page-error.jsx-830220282 p.jsx-830220282{text-align:left;max-width:54rem;padding:0 3rem;margin:2rem auto;font-size:1.6rem;}', '.title.jsx-830220282{margin:0;background:#ccc;color:#2710f2;display:inline-block;font-size:2rem;padding:0 0.25em;}', '.page-error.jsx-830220282 p.text-right.jsx-830220282{text-align:right;}']
            }), _react2.default.createElement('main', {
                className: 'jsx-830220282'
            }, _react2.default.createElement('h1', {
                className: 'jsx-830220282' + ' ' + 'title'
            }, '404 error'), _react2.default.createElement('p', {
                className: 'jsx-830220282'
            }, ' An error has occurred. To continue: '), _react2.default.createElement('p', {
                className: 'jsx-830220282'
            }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
                className: 'jsx-830220282'
            }, 'Click Here')), ' to return to the index, or'), _react2.default.createElement('p', {
                className: 'jsx-830220282'
            }, 'Press CTRL+ALT+DEL to restart your computer. If you do this, you will lose any unsaved data in all open applications.'), _react2.default.createElement('p', {
                className: 'jsx-830220282'
            }, 'Error: 404 : hi it\'s Yuying Wu.'), _react2.default.createElement('p', {
                className: 'jsx-830220282' + ' ' + 'text-right'
            }, _react2.default.createElement('a', { href: 'https://github.com/YuyingWu', className: 'jsx-830220282'
            }, 'Click here'), ' to continue _')));
        }
    }]);

    return Error;
}(_react2.default.Component);

exports.default = Error;