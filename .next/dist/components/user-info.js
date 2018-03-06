'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _antd = require('antd');

var _apis = require('./apis');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      username: '',
      physical: 0,
      wisdom: 0,
      mileage: 0
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchUserData();
      this.fetchUserScore();
    }
  }, {
    key: 'fetchUserData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var user, username;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _apis.getUser)();

              case 2:
                user = _context.sent;
                username = user.username;

                this.setState({
                  username: username
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchUserData() {
        return _ref.apply(this, arguments);
      }

      return fetchUserData;
    }()
  }, {
    key: 'fetchUserScore',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _ref3, physical, wisdom, mileage;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _apis.getScore)();

              case 2:
                _ref3 = _context2.sent;
                physical = _ref3.physical;
                wisdom = _ref3.wisdom;
                mileage = _ref3.mileage;

                this.setState({
                  physical: physical,
                  wisdom: wisdom,
                  mileage: mileage
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchUserScore() {
        return _ref2.apply(this, arguments);
      }

      return fetchUserScore;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          username = _state.username,
          physical = _state.physical,
          wisdom = _state.wisdom,
          mileage = _state.mileage;

      return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, username), _react2.default.createElement('div', { style: { width: 170 } }, '\u4F53\u529B\u503C\uFF1A', _react2.default.createElement(_antd.Progress, { percent: physical }), '\u7CBE\u795E\u503C\uFF1A', _react2.default.createElement(_antd.Progress, { percent: wisdom }), '\u91CC\u7A0B\u6570\uFF1A', _react2.default.createElement(_antd.Progress, { percent: mileage })));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;