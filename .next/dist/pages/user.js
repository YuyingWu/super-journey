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

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-journey/next-src/pages/user.js?entry';
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
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'User - \u8D85\u51E1\u4E4B\u65C5')), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, '\u8D85\u51E1\u4E4B\u65C5', _react2.default.createElement('p', { onClick: this.logOut, className: 'text-right', style: {
          fontSize: 12
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, '\u9000\u51FA')), _react2.default.createElement(_dashboard2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSGVsbWV0IiwiUm91dGVyIiwiTGF5b3V0IiwiTGVhbkNsb3VkUmVzUGFyc2VyIiwiQVYiLCJEYXNoYm9hcmQiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJ1aWQiLCJsb2dPdXQiLCJiaW5kIiwiY3VycmVudFVzZXIiLCJVc2VyIiwiY3VycmVudCIsImlkIiwic2V0U3RhdGUiLCJwdXNoIiwic2V0VGltZW91dCIsImZvbnRTaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQWM7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQTBCOztBQUNuQyxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWU7Ozs7Ozs7QUFQdEI7Ozs7a0NBVUU7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO1dBRkYsQUFBYSxBQUVOLEFBR1A7QUFMYSxBQUNYOztVQUlGLEFBQUssU0FBUyxNQUFBLEFBQUssT0FBTCxBQUFZLEtBUlQsQUFRakI7V0FDRDs7Ozs7d0NBRW1CLEFBQ2xCO1VBQUksY0FBYyxvQkFBQSxBQUFHLEtBQXJCLEFBQWtCLEFBQVEsQUFFMUI7O1VBQUEsQUFBSSxhQUFhO2tDQUNVLCtCQURWLEFBQ1UsQUFBbUI7WUFEN0IsQUFDUCx5QkFETyxBQUNQO1lBRE8sQUFDSCwrQkFERyxBQUNILEFBQ1o7O2FBQUEsQUFBSztvQkFBUyxBQUVaO2VBRkYsQUFBYyxBQUVQLEFBRVI7QUFKZSxBQUNaO0FBSEosYUFPSyxBQUNIO3VCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFDRjs7Ozs2QkFFUSxBQUNQOzBCQUFBLEFBQUcsS0FBSCxBQUFRLEFBRVI7O2lCQUFXLFlBQVUsQUFDbkI7dUJBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUZELFNBQUEsQUFFRyxBQUNKOzs7OzZCQUVTO1VBQUEsQUFDQSxXQUFhLEtBRGIsQUFDa0IsTUFEbEIsQUFDQSxBQUVSOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUdGLHFEQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFRLDRDQUFBLGNBQUEsT0FBRyxTQUFTLEtBQVosQUFBaUIsUUFBUSxXQUF6QixBQUFtQyxjQUFhO29CQUFoRCxBQUF1RCxBQUNuRDtBQURtRCxBQUM3RDtvQkFETTtzQkFBQTtBQUFBO1NBTFYsQUFLRSxBQUFRLEFBSVIsa0NBQUEsQUFBQzs7b0JBQUQ7c0JBVkosQUFDRSxBQVNFLEFBR0w7QUFISztBQUFBOzs7OztFQWhEcUIsZ0JBQU0sQSIsImZpbGUiOiJ1c2VyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvYmFlLXN1cGVyLWpvdXJuZXkvbmV4dC1zcmMifQ==