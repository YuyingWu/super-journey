'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@4.2.3@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactHelmet = require('react-helmet');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _leancloud = require('../components/leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'submit',
    value: function submit() {
      var usernameValue = this.username.value,
          passwordValue = this.password.value;

      if (!usernameValue || !passwordValue) {
        alert('Incorrect username or password!');
        return;
      }

      // 新建 AVUser 对象实例
      var user = new _leancloud2.default.User();
      // 设置用户名
      user.setUsername(usernameValue);
      // 设置密码
      user.setPassword(passwordValue);

      user.signUp().then(function (loginedUser) {
        alert('Register successfully!');

        setTimeout(function () {
          _routes.Router.push('/user');
        }, 1500);
        // console.log(loginedUser);
        // Router.pushRoute('/user');
      }, function (error) {
        alert('error: ' + (0, _stringify2.default)(error));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement('title', null, 'Register - \u8D85\u51E1\u4E4B\u65C5')), _react2.default.createElement('h1', null, 'Register'), _react2.default.createElement('form', null, _react2.default.createElement('label', null, 'User name:', _react2.default.createElement('input', { type: 'text', ref: function ref(_ref) {
          return _this2.username = _ref;
        } })), _react2.default.createElement('label', null, 'Password:', _react2.default.createElement('input', { type: 'password', ref: function ref(_ref2) {
          return _this2.password = _ref2;
        } })), _react2.default.createElement('p', { role: 'submit', className: 'btn btn-primary', onClick: this.submit }, 'Register')));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;