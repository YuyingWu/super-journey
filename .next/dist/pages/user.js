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

var _routes = require('../routes');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _utils = require('../components/utils');

var _leancloud = require('../components/leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _dashboard = require('../components/dashboard/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/pages/user.js?entry';
// import AV from 'leancloud-storage';


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

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3636536621',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RvQiIsImZpbGUiOiJwYWdlcy91c2VyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvc3VwZXItam91cm5leSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgQVYgZnJvbSAnbGVhbmNsb3VkLXN0b3JhZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgeyBMZWFuQ2xvdWRSZXNQYXJzZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCBBViBmcm9tICcuLi9jb21wb25lbnRzL2xlYW5jbG91ZCc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICfml6DlkI3msI8nLFxuICAgICAgdWlkOiAnJyxcbiAgICB9XG5cbiAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY3VycmVudFVzZXIgPSBBVi5Vc2VyLmN1cnJlbnQoKTtcblxuICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgY29uc3QgeyBpZCwgdXNlcm5hbWUgfSA9IExlYW5DbG91ZFJlc1BhcnNlcihjdXJyZW50VXNlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHVpZDogaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH1cblxuICBsb2dPdXQoKSB7XG4gICAgQVYuVXNlci5sb2dPdXQoKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9LCAxNTAwKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT5Vc2VyIC0g6LaF5Yeh5LmL5peFPC90aXRsZT5cbiAgICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgICAgPGgxPlVzZXIgSW5mb3JtYXRpb24gLSB7dXNlcm5hbWV9PC9oMT5cblxuICAgICAgICA8cCBvbkNsaWNrPXt0aGlzLmxvZ091dH0+6YCA5Ye6PC9wPlxuXG4gICAgICAgIDxEYXNoYm9hcmQgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/user.js?entry */'
      }), _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('title', {
        className: 'jsx-3636536621',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'User - \u8D85\u51E1\u4E4B\u65C5')), _react2.default.createElement('h1', {
        className: 'jsx-3636536621',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'User Information - ', username), _react2.default.createElement('p', { onClick: this.logOut, className: 'jsx-3636536621',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, '\u9000\u51FA'), _react2.default.createElement(_dashboard2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSGVsbWV0IiwiUm91dGVyIiwiTGF5b3V0IiwiTGVhbkNsb3VkUmVzUGFyc2VyIiwiQVYiLCJEYXNoYm9hcmQiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJ1aWQiLCJsb2dPdXQiLCJiaW5kIiwiY3VycmVudFVzZXIiLCJVc2VyIiwiY3VycmVudCIsImlkIiwic2V0U3RhdGUiLCJwdXNoIiwic2V0VGltZW91dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBMEI7O0FBQ25DLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBZTs7Ozs7OztBQVB0Qjs7OztrQ0FVRTs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7V0FGRixBQUFhLEFBRU4sQUFHUDtBQUxhLEFBQ1g7O1VBSUYsQUFBSyxTQUFTLE1BQUEsQUFBSyxPQUFMLEFBQVksS0FSVCxBQVFqQjtXQUNEOzs7Ozt3Q0FFbUIsQUFDbEI7VUFBSSxjQUFjLG9CQUFBLEFBQUcsS0FBckIsQUFBa0IsQUFBUSxBQUUxQjs7VUFBQSxBQUFJLGFBQWE7a0NBQ1UsK0JBRFYsQUFDVSxBQUFtQjtZQUQ3QixBQUNQLHlCQURPLEFBQ1A7WUFETyxBQUNILCtCQURHLEFBQ0gsQUFDWjs7YUFBQSxBQUFLO29CQUFTLEFBRVo7ZUFGRixBQUFjLEFBRVAsQUFFUjtBQUplLEFBQ1o7QUFISixhQU9LLEFBQ0g7dUJBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUNGOzs7OzZCQUVRLEFBQ1A7MEJBQUEsQUFBRyxLQUFILEFBQVEsQUFFUjs7aUJBQVcsWUFBVSxBQUNuQjt1QkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBRkQsU0FBQSxBQUVHLEFBQ0o7Ozs7NkJBRVM7VUFBQSxBQUNBLFdBQWEsS0FEYixBQUNrQixNQURsQixBQUNBLEFBRVI7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxPQUFBO2lCQUFBO2FBQUEsQUFJRTtBQUpGLDBCQUlFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxKLEFBSUUsQUFDRSxBQUdGLHFEQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUF3Qix1QkFSMUIsQUFRRSxBQUVBLDJCQUFBLGNBQUEsT0FBRyxTQUFTLEtBQVosQUFBaUIsbUJBQWpCOztvQkFBQTtzQkFBQTtBQUFBO1NBVkYsQUFVRSxBQUVBLGlDQUFBLEFBQUM7O29CQUFEO3NCQWJKLEFBQ0UsQUFZRSxBQUdMO0FBSEs7QUFBQTs7Ozs7RUFuRHFCLGdCQUFNLEEiLCJmaWxlIjoidXNlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL3N1cGVyLWpvdXJuZXkifQ==