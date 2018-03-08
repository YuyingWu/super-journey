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

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-journey/next-src/components/user-info.js';


var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      username: '',
      physical: 0,
      wisdom: 0,
      mileage: 0,
      level: 1,
      levelPhysical: 100,
      levelWisdom: 100
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchUserData();
      this.fetchUserScore();
      this.fetchUserLevel();
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
    key: 'fetchUserLevel',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _ref5, level, levelPhysical, levelWisdom;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _apis.getUserLevel)();

              case 2:
                _ref5 = _context3.sent;
                level = _ref5.level;
                levelPhysical = _ref5.physical;
                levelWisdom = _ref5.wisdom;

                this.setState({
                  level: level,
                  levelPhysical: levelPhysical,
                  levelWisdom: levelWisdom
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchUserLevel() {
        return _ref4.apply(this, arguments);
      }

      return fetchUserLevel;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          username = _state.username,
          physical = _state.physical,
          wisdom = _state.wisdom,
          mileage = _state.mileage,
          level = _state.level,
          levelPhysical = _state.levelPhysical,
          levelWisdom = _state.levelWisdom;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, username), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, '\u7B49\u7EA7\uFF1ALv.', level), _react2.default.createElement('div', { style: { width: 170 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, '\u4F53\u529B\u503C\uFF1A', _react2.default.createElement(_antd.Progress, { percent: physical / levelPhysical * 100, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), '\u7CBE\u795E\u503C\uFF1A', _react2.default.createElement(_antd.Progress, { percent: wisdom / levelWisdom * 100, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), '\u91CC\u7A0B\u6570\uFF1A', _react2.default.createElement(_antd.Progress, { percent: mileage / 50 * 100, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci1pbmZvLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb2dyZXNzIiwiZ2V0VXNlciIsImdldFNjb3JlIiwiZ2V0VXNlckxldmVsIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGh5c2ljYWwiLCJ3aXNkb20iLCJtaWxlYWdlIiwibGV2ZWwiLCJsZXZlbFBoeXNpY2FsIiwibGV2ZWxXaXNkb20iLCJmZXRjaFVzZXJEYXRhIiwiZmV0Y2hVc2VyU2NvcmUiLCJmZXRjaFVzZXJMZXZlbCIsInVzZXIiLCJzZXRTdGF0ZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFTLEFBQVUsQUFBb0I7Ozs7Ozs7O2tDQUc5Qzs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Z0JBRlcsQUFFRCxBQUNWO2NBSFcsQUFHSCxBQUNSO2VBSlcsQUFJRixBQUNUO2FBTFcsQUFLSixBQUNQO3FCQU5XLEFBTUksQUFDZjttQkFWZSxBQUdqQixBQUFhLEFBT0U7QUFQRixBQUNYO1dBUUg7Ozs7O3lDQUVvQixBQUNuQjtXQUFBLEFBQUssQUFDTDtXQUFBLEFBQUssQUFDTDtXQUFBLEFBQUssQUFDTjs7Ozs7Ozs7Ozs7O3VCQUdvQixBOzttQkFBYjtBLGdDQUNFO0EsMkIsQUFBYSxLLEFBQWIsQUFFUjs7cUJBQUEsQUFBSzs0QkFBTCxBQUFjO0FBQUEsQUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCLEFBSzBDOzs7a0NBQXBDO0EsaUNBQUEsQUFBVSxBO0EsK0IsQUFBQSxBQUFRO0EsZ0NBQUEsQSxBQUUxQjs7cUJBQUEsQUFBSzs0QkFBUyxBQUVaOzBCQUZZLEFBR1o7MkJBSEYsQUFBYztBQUFBLEFBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QixBQVdROzs7a0NBSFI7QSw4QixBQUFBLEFBQ1U7QSxzQ0FBVixBLEFBQ1E7QSxvQyxBQUFSLEFBR0Y7O3FCQUFBLEFBQUs7eUJBQVMsQUFFWjtpQ0FGWSxBQUdaOytCQUhGLEFBQWM7QUFBQSxBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBTUs7bUJBQzRFLEtBRDVFLEFBQ2lGO1VBRGpGLEFBQ0Msa0JBREQsQUFDQztVQURELEFBQ1csa0JBRFgsQUFDVztVQURYLEFBQ3FCLGdCQURyQixBQUNxQjtVQURyQixBQUM2QixpQkFEN0IsQUFDNkI7VUFEN0IsQUFDc0MsZUFEdEMsQUFDc0M7VUFEdEMsQUFDNkMsdUJBRDdDLEFBQzZDO1VBRDdDLEFBQzRELHFCQUQ1RCxBQUM0RCxBQUVuRTs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxTQURGLEFBQ0UsQUFDQSwyQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBVyx5QkFGYixBQUVFLEFBRUEsd0JBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFkLEFBQVksQUFBUztvQkFBckI7c0JBQUE7QUFBQTtTQUNNLDRDQUFBLEFBQUMsZ0NBQVMsU0FBVSxXQUFBLEFBQVcsZ0JBQS9CLEFBQStDO29CQUEvQztzQkFETixBQUNNO0FBQUE7VUFDQSw0Q0FBQSxBQUFDLGdDQUFTLFNBQVUsU0FBQSxBQUFTLGNBQTdCLEFBQTJDO29CQUEzQztzQkFGTixBQUVNO0FBQUE7VUFDQSw0Q0FBQSxBQUFDLGdDQUFTLFNBQVUsVUFBQSxBQUFVLEtBQTlCLEFBQW1DO29CQUFuQztzQkFSVixBQUNFLEFBSUUsQUFHTSxBQUlYO0FBSlc7Ozs7OztBQWpFZSxBIiwiZmlsZSI6InVzZXItaW5mby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL2JhZS1zdXBlci1qb3VybmV5L25leHQtc3JjIn0=