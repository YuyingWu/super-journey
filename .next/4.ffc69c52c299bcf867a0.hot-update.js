webpackHotUpdate(4,{

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(84);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(85);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(32);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(465);

var _apis = __webpack_require__(514);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wyy/Documents/code/bae-super-journey/next-src/components/user-info.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wyy/Documents/code/bae-super-journey/next-src/components/user-info.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5mZmM2OWM1MmMyOTliY2Y4NjdhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyLWluZm8uanM/MTA1MjM2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRVc2VyLCBnZXRTY29yZSwgZ2V0VXNlckxldmVsIH0gZnJvbSAnLi9hcGlzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGh5c2ljYWw6IDAsXG4gICAgICB3aXNkb206IDAsXG4gICAgICBtaWxlYWdlOiAwLFxuICAgICAgbGV2ZWw6IDEsXG4gICAgICBsZXZlbFBoeXNpY2FsOiAxMDAsXG4gICAgICBsZXZlbFdpc2RvbTogMTAwLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoVXNlckRhdGEoKTtcbiAgICB0aGlzLmZldGNoVXNlclNjb3JlKCk7XG4gICAgdGhpcy5mZXRjaFVzZXJMZXZlbCgpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hVc2VyRGF0YSAoKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoKTtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSB1c2VyO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VybmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoVXNlclNjb3JlKCkge1xuICAgIGNvbnN0IHsgcGh5c2ljYWwsIHdpc2RvbSwgbWlsZWFnZSB9ID0gYXdhaXQgZ2V0U2NvcmUoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGh5c2ljYWwsXG4gICAgICB3aXNkb20sXG4gICAgICBtaWxlYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hVc2VyTGV2ZWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGV2ZWwsXG4gICAgICBwaHlzaWNhbDogbGV2ZWxQaHlzaWNhbCxcbiAgICAgIHdpc2RvbTogbGV2ZWxXaXNkb21cbiAgICB9ID0gYXdhaXQgZ2V0VXNlckxldmVsKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxldmVsLFxuICAgICAgbGV2ZWxQaHlzaWNhbCxcbiAgICAgIGxldmVsV2lzZG9tXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGh5c2ljYWwsIHdpc2RvbSwgbWlsZWFnZSwgbGV2ZWwsIGxldmVsUGh5c2ljYWwsIGxldmVsV2lzZG9tIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57IHVzZXJuYW1lIH08L2gxPlxuICAgICAgICA8cD7nrYnnuqfvvJpMdi57IGxldmVsIH08L3A+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTcwIH19PlxuICAgICAgICAgIOS9k+WKm+WAvO+8mjxQcm9ncmVzcyBwZXJjZW50PXsgcGh5c2ljYWwgLyBsZXZlbFBoeXNpY2FsICogMTAwIH0gLz5cbiAgICAgICAgICDnsr7npZ7lgLzvvJo8UHJvZ3Jlc3MgcGVyY2VudD17IHdpc2RvbSAvIGxldmVsV2lzZG9tICogMTAwIH0gLz5cbiAgICAgICAgICDph4znqIvmlbDvvJo8UHJvZ3Jlc3MgcGVyY2VudD17IG1pbGVhZ2UgLyA1MCAqIDEwMCB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXNlci1pbmZvLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVFBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7OztBQUVBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=