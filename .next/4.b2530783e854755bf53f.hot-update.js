webpackHotUpdate(4,{

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(168);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(60);

var _assign2 = _interopRequireDefault(_assign);

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

var _antd = __webpack_require__(514);

var _leancloud = __webpack_require__(512);

var _leancloud2 = _interopRequireDefault(_leancloud);

var _utils = __webpack_require__(511);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/components/dashboard/task.js';

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;

var moment = __webpack_require__(416);

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      tasks: [],
      uid: '',
      records: []
    };

    _this.renderTask = _this.renderTask.bind(_this);
    _this.claimTask = _this.claimTask.bind(_this);
    _this.fetchGameLog = _this.fetchGameLog.bind(_this);
    _this.fetchTaskList = _this.fetchTaskList.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var currentUser = _leancloud2.default.User.current();

      if (currentUser) {
        var _LeanCloudResParser = (0, _utils.LeanCloudResParser)(currentUser),
            id = _LeanCloudResParser.id;

        this.setState({
          uid: id
        }, function () {
          _this2.fetchTaskList();
          _this2.fetchGameLog();
        });
      }
    }
  }, {
    key: 'fetchTaskList',
    value: function fetchTaskList() {
      var _this3 = this;

      var query = new _leancloud2.default.Query('Task');

      query.find().then(function (results) {
        var data = [];

        results.map(function (r) {
          data.push((0, _utils.LeanCloudResParser)(r));
        });

        _this3.setState({
          tasks: [].concat(data)
        });
      }, function (error) {});
    }
  }, {
    key: 'fetchGameLog',
    value: function fetchGameLog() {
      var _this4 = this;

      var uid = this.state.uid;

      var query = new _leancloud2.default.Query('Game');
      var User = _leancloud2.default.Object.createWithoutData('_User', uid);

      query.equalTo('user', User);
      query.include(['task']);
      query.descending('createdAt');

      query.find().then(function (results) {
        var list = [];

        results.map(function (r) {
          list.push((0, _assign2.default)((0, _utils.LeanCloudResParser)(r.attributes.task), {
            createdAt: r.createdAt
          }));
        });

        _this4.setState({
          records: [].concat(list)
        });
      }, function (error) {});
    }
  }, {
    key: 'claimTask',
    value: function claimTask(task) {
      var _this5 = this;

      var uid = this.state.uid;

      var User = _leancloud2.default.Object.createWithoutData('_User', uid);
      var Task = _leancloud2.default.Object.createWithoutData('Task', task.id);

      var Game = new _leancloud2.default.Object('Game'); // 构建 Comment 对象
      Game.set('user', User);
      Game.set('task', Task);

      Game.save().then(function (results) {
        if (results) {
          _antd.message.info('提交成功');

          _this5.setState({
            records: [(0, _assign2.default)(task, {
              createdAt: moment()
            })].concat((0, _toConsumableArray3.default)(_this5.state.records))
          });
        }
      });
    }
  }, {
    key: 'renderTask',
    value: function renderTask() {
      var _this6 = this;

      var tasks = this.state.tasks;

      return _react2.default.createElement(_antd.List, {
        header: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, '\u4EFB\u52A1\u4E2D\u5FC3'),
        footer: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, '\u9009\u62E9\u4F60\u9700\u8981\u786E\u8BA4\u7684\u4EFB\u52A1\uFF0C\u5E76\u70B9\u51FB\u201C\u5B8C\u6210\u201D'),
        bordered: true,
        dataSource: tasks,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            }
          }, item.name, '\uFF1A\u4F53\u529B\u503C', item.physical, '\uFF0C\u7CBE\u795E\u503C', item.wisdom, '\uFF0C\u91CC\u7A0B', item.mileage, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: function onClick() {
              return _this6.claimTask(item);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          }, '\u5B8C\u6210')));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      });
    }
  }, {
    key: 'renderRecords',
    value: function renderRecords() {
      var records = this.state.records;

      console.log(records);
      return _react2.default.createElement(_antd.List, {
        header: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, '\u4EFB\u52A1\u6253\u5361'),
        footer: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, '\u6253\u5361\u7684\u8BB0\u5F55'),
        bordered: true,
        dataSource: records,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          }, moment(item.createdAt).format('HH:mm MMM Do YYYY')), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          }, _react2.default.createElement('span', { className: 'text-primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          }, item.name), '\uFF1A', item.physical ? '\u4F53\u529B' + item.physical : null, item.wisdom ? '\u7CBE\u795E' + item.wisdom : null, item.mileage ? '\u91CC\u7A0B' + item.mileage : null)));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          tasks = _state.tasks,
          records = _state.records;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_antd.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(Sider, { width: 300, style: { background: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, records.length ? this.renderRecords() : null), _react2.default.createElement(Content, { style: { padding: '0 24px', minHeight: 280 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, tasks.length ? this.renderTask() : null))));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL3Rhc2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiTGlzdCIsIm1lc3NhZ2UiLCJBViIsIkxlYW5DbG91ZFJlc1BhcnNlciIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsIm1vbWVudCIsInJlcXVpcmUiLCJwcm9wcyIsInN0YXRlIiwidGFza3MiLCJ1aWQiLCJyZWNvcmRzIiwicmVuZGVyVGFzayIsImJpbmQiLCJjbGFpbVRhc2siLCJmZXRjaEdhbWVMb2ciLCJmZXRjaFRhc2tMaXN0IiwiY3VycmVudFVzZXIiLCJVc2VyIiwiY3VycmVudCIsImlkIiwic2V0U3RhdGUiLCJxdWVyeSIsIlF1ZXJ5IiwiZmluZCIsInRoZW4iLCJkYXRhIiwicmVzdWx0cyIsIm1hcCIsInB1c2giLCJyIiwiZXJyb3IiLCJPYmplY3QiLCJjcmVhdGVXaXRob3V0RGF0YSIsImVxdWFsVG8iLCJpbmNsdWRlIiwiZGVzY2VuZGluZyIsImxpc3QiLCJhdHRyaWJ1dGVzIiwidGFzayIsImNyZWF0ZWRBdCIsIlRhc2siLCJHYW1lIiwic2V0Iiwic2F2ZSIsImluZm8iLCJpdGVtIiwibmFtZSIsInBoeXNpY2FsIiwid2lzZG9tIiwibWlsZWFnZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXQiLCJiYWNrZ3JvdW5kIiwibGVuZ3RoIiwicmVuZGVyUmVjb3JkcyIsInBhZGRpbmciLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQVEsQUFBTTs7QUFDL0IsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUEwQjs7Ozs7O0ksQUFDM0IsUyxBQUFtQyxhLEFBQW5DO0ksQUFBUSxVLEFBQTJCLGFBQTNCLEE7SUFBUyxBLFMsQUFBa0IsYSxBQUFsQjtJQUFRLEEs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QUVVLEFBQ1I7a0JBSEYsQUFJRTtvQkFKRixBQUljLEFBQ1o7b0JBQVksMEJBQUE7aUNBQ1QsY0FBRCxXQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEsb0JBQVksS0FBUCxBQUFZLFdBQVosQUFBdUIsT0FEOUIsQUFDRSxBQUFLLEFBQThCLEFBQ25DLHVDQUFBLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3dCQUFoQjswQkFBQSxBQUFnQztBQUFoQztrQkFERixBQUNFLEFBQXFDLE9BQ3BDLGVBQUEsQUFBSyw0QkFBZ0IsS0FBckIsQUFBMEIsV0FGN0IsQUFFMEMsQUFDdkMsV0FBQSxBQUFLLDBCQUFjLEtBQW5CLEFBQXdCLFNBSDNCLEFBR3NDLEFBQ25DLFdBQUEsQUFBSywyQkFBZSxLQUFwQixBQUF5QixVQVJ0QixBQUNWLEFBQ0UsQUFFRSxBQUl3QztBQWJoRDs7b0JBQUE7c0JBREYsQUFDRSxBQW9CSDtBQXBCRztBQUNFLE9BREY7Ozs7NkJBc0JLO21CQUNvQixLQURwQixBQUN5QjtVQUR6QixBQUNDLGVBREQsQUFDQztVQURELEFBQ1EsaUJBRFIsQUFDUSxBQUVmOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsU0FBTyxPQUFQLEFBQWMsS0FBSyxPQUFPLEVBQUUsWUFBNUIsQUFBMEIsQUFBYztvQkFBeEM7c0JBQUEsQUFDSTtBQURKO2lCQUNJLEFBQVEsU0FBUyxLQUFqQixBQUFpQixBQUFLLGtCQUY1QixBQUNFLEFBQzRDLEFBRzVDLHVCQUFDLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBRixBQUFXLFVBQVUsV0FBckMsQUFBZ0IsQUFBZ0M7b0JBQWhEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxlQUNJLEFBQU0sU0FBUyxLQUFmLEFBQWUsQUFBSyxlQVRoQyxBQUNFLEFBQ0UsQUFLRSxBQUNFLEFBQ3VDLEFBTWhEOzs7OztBQWhLMEIsQSIsImZpbGUiOiJ0YXNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvc3VwZXItam91cm5leSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/wyy/Documents/code/super-journey/components/dashboard/task.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wyy/Documents/code/super-journey/components/dashboard/task.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5iMjUzMDc4M2U4NTQ3NTViZjUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvdGFzay5qcz8wODg3NzFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0LCBCdXR0b24sIExpc3QsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCBBViBmcm9tICcuLi9sZWFuY2xvdWQnO1xuaW1wb3J0IHsgTGVhbkNsb3VkUmVzUGFyc2VyIH0gZnJvbSAnLi4vdXRpbHMnO1xuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0YXNrczogW10sXG4gICAgICB1aWQ6ICcnLFxuICAgICAgcmVjb3JkczogW11cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclRhc2sgPSB0aGlzLnJlbmRlclRhc2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsYWltVGFzayA9IHRoaXMuY2xhaW1UYXNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZXRjaEdhbWVMb2cgPSB0aGlzLmZldGNoR2FtZUxvZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hUYXNrTGlzdCA9IHRoaXMuZmV0Y2hUYXNrTGlzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQVYuVXNlci5jdXJyZW50KCk7XG5cbiAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IExlYW5DbG91ZFJlc1BhcnNlcihjdXJyZW50VXNlcik7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1aWQ6IGlkLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmZldGNoVGFza0xpc3QoKTtcbiAgICAgICAgdGhpcy5mZXRjaEdhbWVMb2coKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZldGNoVGFza0xpc3QoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgQVYuUXVlcnkoJ1Rhc2snKTtcblxuICAgIHF1ZXJ5LmZpbmQoKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgcmVzdWx0cy5tYXAociA9PiB7XG4gICAgICAgIGRhdGEucHVzaChMZWFuQ2xvdWRSZXNQYXJzZXIocikpO1xuICAgICAgfSlcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRhc2tzOiBbLi4uZGF0YV1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hHYW1lTG9nKCkge1xuICAgIGNvbnN0IHsgdWlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IEFWLlF1ZXJ5KCdHYW1lJyk7XG4gICAgY29uc3QgVXNlciA9IEFWLk9iamVjdC5jcmVhdGVXaXRob3V0RGF0YSgnX1VzZXInLCB1aWQpO1xuXG4gICAgcXVlcnkuZXF1YWxUbygndXNlcicsIFVzZXIpO1xuICAgIHF1ZXJ5LmluY2x1ZGUoWyd0YXNrJ10pO1xuICAgIHF1ZXJ5LmRlc2NlbmRpbmcoJ2NyZWF0ZWRBdCcpO1xuXG4gICAgcXVlcnkuZmluZCgpLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgICByZXN1bHRzLm1hcChyID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKE9iamVjdC5hc3NpZ24oTGVhbkNsb3VkUmVzUGFyc2VyKHIuYXR0cmlidXRlcy50YXNrKSwge1xuICAgICAgICAgIGNyZWF0ZWRBdDogci5jcmVhdGVkQXRcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZWNvcmRzOiBbLi4ubGlzdF1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIH0pO1xuICB9XG5cbiAgY2xhaW1UYXNrKHRhc2spIHtcbiAgICBjb25zdCB7IHVpZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBVc2VyID0gQVYuT2JqZWN0LmNyZWF0ZVdpdGhvdXREYXRhKCdfVXNlcicsIHVpZCk7XG4gICAgY29uc3QgVGFzayA9IEFWLk9iamVjdC5jcmVhdGVXaXRob3V0RGF0YSgnVGFzaycsIHRhc2suaWQpO1xuXG4gICAgY29uc3QgR2FtZSA9IG5ldyBBVi5PYmplY3QoJ0dhbWUnKTsvLyDmnoTlu7ogQ29tbWVudCDlr7nosaFcbiAgICBHYW1lLnNldCgndXNlcicsIFVzZXIpO1xuICAgIEdhbWUuc2V0KCd0YXNrJywgVGFzayk7XG5cbiAgICBHYW1lLnNhdmUoKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgbWVzc2FnZS5pbmZvKCfmj5DkuqTmiJDlip8nKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByZWNvcmRzOiBbT2JqZWN0LmFzc2lnbih0YXNrLCB7XG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG1vbWVudCgpXG4gICAgICAgICAgfSksIC4uLnRoaXMuc3RhdGUucmVjb3Jkc11cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclRhc2soKSB7XG4gICAgY29uc3QgeyB0YXNrcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdFxuICAgICAgICBoZWFkZXI9ezxkaXY+5Lu75Yqh5Lit5b+DPC9kaXY+fVxuICAgICAgICBmb290ZXI9ezxkaXY+6YCJ5oup5L2g6ZyA6KaB56Gu6K6k55qE5Lu75Yqh77yM5bm254K55Ye74oCc5a6M5oiQ4oCdPC9kaXY+fVxuICAgICAgICBib3JkZXJlZFxuICAgICAgICBkYXRhU291cmNlPXt0YXNrc31cbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB977ya5L2T5Yqb5YC8e2l0ZW0ucGh5c2ljYWx977yM57K+56We5YC8e2l0ZW0ud2lzZG9tfe+8jOmHjOeoi3tpdGVtLm1pbGVhZ2V9IFxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbGFpbVRhc2soaXRlbSl9PuWujOaIkDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUmVjb3JkcygpIHtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuc3RhdGU7XG5jb25zb2xlLmxvZyhyZWNvcmRzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RcbiAgICAgICAgaGVhZGVyPXs8ZGl2PuS7u+WKoeaJk+WNoTwvZGl2Pn1cbiAgICAgICAgZm9vdGVyPXs8ZGl2PuaJk+WNoeeahOiusOW9lTwvZGl2Pn1cbiAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgZGF0YVNvdXJjZT17cmVjb3Jkc31cbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPnsgbW9tZW50KGl0ZW0uY3JlYXRlZEF0KS5mb3JtYXQoJ0hIOm1tIE1NTSBEbyBZWVlZJykgfTwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+e2l0ZW0ubmFtZX08L3NwYW4+77yaXG4gICAgICAgICAgICAgICAge2l0ZW0ucGh5c2ljYWwgPyBg5L2T5YqbJHtpdGVtLnBoeXNpY2FsfWAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtpdGVtLndpc2RvbSA/IGDnsr7npZ4ke2l0ZW0ud2lzZG9tfWAgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtpdGVtLm1pbGVhZ2UgPyBg6YeM56iLJHtpdGVtLm1pbGVhZ2V9YCA6IG51bGx9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFza3MsIHJlY29yZHMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8U2lkZXIgd2lkdGg9ezMwMH0gc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnIH19PlxuICAgICAgICAgICAgeyByZWNvcmRzLmxlbmd0aCA/IHRoaXMucmVuZGVyUmVjb3JkcygpIDogbnVsbCB9XG4gICAgICAgICAgPC9TaWRlcj5cblxuICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDI0cHgnLCBtaW5IZWlnaHQ6IDI4MCB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsgdGFza3MubGVuZ3RoID8gdGhpcy5yZW5kZXJUYXNrKCkgOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kYXNoYm9hcmQvdGFzay5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFSQTs7OztBQWNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFGQTtBQVZBOzs7O0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFEQTtBQUtBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTs7QUFBQTtBQWVBO0FBZkE7QUFDQTs7OztBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFWQTs7QUFBQTtBQW9CQTtBQXBCQTtBQUNBOzs7O0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=