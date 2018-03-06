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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@4.2.3@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactHelmet = require('react-helmet');

var _routes = require('../routes');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _utils = require('../components/utils');

var _leancloud = require('../components/leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _dashboard = require('../components/dashboard/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      username: '无名氏',
      uid: ''
    };

    _this.logOut = _this.logOut.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var currentUser = _leancloud2.default.User.current();

      if (currentUser) {
        var _LeanCloudResParser = (0, _utils.LeanCloudResParser)(currentUser),
            id = _LeanCloudResParser.id,
            username = _LeanCloudResParser.username;

        this.setState({
          username: username,
          uid: id
        });
      } else {
        _routes.Router.push('/login');
      }
    }
  }, {
    key: 'logOut',
    value: function logOut() {
      _leancloud2.default.User.logOut();

      setTimeout(function () {
        _routes.Router.push('/login');
      }, 1500);
    }
  }, {
    key: 'render',
    value: function render() {
      var username = this.state.username;

      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement('title', null, 'User - \u8D85\u51E1\u4E4B\u65C5')), _react2.default.createElement('h1', null, '\u8D85\u51E1\u4E4B\u65C5', _react2.default.createElement('p', { onClick: this.logOut, className: 'text-right', style: {
          fontSize: 12
        } }, '\u9000\u51FA')), _react2.default.createElement(_dashboard2.default, null));
    }
  }]);

  return _class;
}(_react2.default.Component);
// import AV from 'leancloud-storage';
exports.default = _class;