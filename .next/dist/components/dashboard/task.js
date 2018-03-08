'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _leancloud = require('../leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _utils = require('../utils');

var _apis = require('../apis');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-journey/next-src/components/dashboard/task.js';

var moment = require('moment');
var Option = _antd.Select.Option;

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      tasks: [],
      uid: '',
      records: [],
      groupTasks: {}
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
      this.init();

      this.groupTask();
    }
  }, {
    key: 'init',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var uid;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _apis.getUid)();

              case 2:
                uid = _context.sent;

                this.setState({
                  uid: uid
                }, function () {
                  _this2.fetchTaskList();
                  _this2.fetchGameLog();
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'fetchTaskList',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _apis.getTaskList)();

              case 2:
                data = _context2.sent;

                this.setState({
                  tasks: [].concat((0, _toConsumableArray3.default)(data))
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchTaskList() {
        return _ref2.apply(this, arguments);
      }

      return fetchTaskList;
    }()
  }, {
    key: 'groupTask',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var group;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _apis.getGroupTaskList)();

              case 2:
                group = _context3.sent;

                this.setState({
                  groupTasks: group
                });

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function groupTask() {
        return _ref3.apply(this, arguments);
      }

      return groupTask;
    }()
  }, {
    key: 'fetchGameLog',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var list;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _apis.getRecords)();

              case 2:
                list = _context4.sent;

                if (list && list.length) {
                  this.setState({
                    records: [].concat((0, _toConsumableArray3.default)(list))
                  });
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchGameLog() {
        return _ref4.apply(this, arguments);
      }

      return fetchGameLog;
    }()
  }, {
    key: 'claimTask',
    value: function claimTask(id) {
      var _this3 = this;

      var tasks = this.state.tasks;

      var task = tasks.find(function (t) {
        return t.id === id;
      });
      var uid = this.state.uid;

      var User = _leancloud2.default.Object.createWithoutData('_User', uid);
      var Task = _leancloud2.default.Object.createWithoutData('Task', task.id);

      var Game = new _leancloud2.default.Object('Game'); // 构建 Comment 对象
      Game.set('user', User);
      Game.set('task', Task);

      Game.save().then(function (results) {
        if (results) {
          _antd.message.info('提交成功');

          _this3.setState({
            records: [(0, _assign2.default)(task, {
              createdAt: moment()
            })].concat((0, _toConsumableArray3.default)(_this3.state.records))
          });
        }
      });
    }
  }, {
    key: 'renderTask',
    value: function renderTask() {
      var _this4 = this;

      var groupTasks = this.state.groupTasks;

      var keys = (0, _keys2.default)(groupTasks) || [];
      var groupArray = [];

      if (keys.length) {
        keys.map(function (key) {
          groupArray.push({
            key: key,
            list: groupTasks[key]
          });
        });
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, groupArray.length ? _react2.default.createElement(_antd.List, {
        header: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, '\u4EFB\u52A1\u4E2D\u5FC3'),
        footer: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, '\u9009\u62E9\u4F60\u9700\u8981\u786E\u8BA4\u7684\u4EFB\u52A1\uFF0C\u5E76\u70B9\u51FB\u201C\u5B8C\u6210\u201D'),
        bordered: true,
        dataSource: groupArray,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          }, _react2.default.createElement('div', { style: {
              display: 'block'
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          }, _react2.default.createElement('h1', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            }
          }, item.key), _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            }
          }), _react2.default.createElement(_antd.Select, { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 240 }, onChange: _this4.claimTask, __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          }, item && item.list && item.list.map(function (task) {
            return _react2.default.createElement(Option, { value: task.id, key: 'select-' + task.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            }, task.name, '\uFF08', task.physical ? '\u4F53\u529B\u503C +' + task.physical + ' ' : null, task.wisdom ? '\u7CBE\u795E\u503C +' + task.wisdom + ' ' : null, task.mileage ? '\u91CC\u7A0B +' + task.mileage : null, '\uFF09');
          }))));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }) : null);
    }
  }, {
    key: 'renderRecords',
    value: function renderRecords() {
      var records = this.state.records;

      return _react2.default.createElement(_antd.List, {
        header: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, '\u4EFB\u52A1\u6253\u5361'),
        footer: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, '\u6253\u5361\u7684\u8BB0\u5F55'),
        bordered: true,
        dataSource: records,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            }
          }, _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            }
          }, _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            }
          }, moment(item.createdAt).format('HH:mm MMM Do YYYY')), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            }
          }, _react2.default.createElement('span', { className: 'text-primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            }
          }, item.name), '\uFF1A', item.physical ? '\u4F53\u529B +' + item.physical : null, item.wisdom ? '\u7CBE\u795E +' + item.wisdom : null, item.mileage ? '\u91CC\u7A0B +' + item.mileage : null)));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
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
          lineNumber: 168
        }
      }, _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement(_antd.Col, { lg: 12, md: 12, xs: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, records.length ? this.renderRecords() : null), _react2.default.createElement(_antd.Col, { lg: 12, md: 12, xs: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, tasks.length ? this.renderTask() : null))));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL3Rhc2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiQnV0dG9uIiwiTGlzdCIsIm1lc3NhZ2UiLCJSb3ciLCJDb2wiLCJTZWxlY3QiLCJBViIsIkxlYW5DbG91ZFJlc1BhcnNlciIsImdldFVpZCIsImdldFJlY29yZHMiLCJnZXRUYXNrTGlzdCIsImdldEdyb3VwVGFza0xpc3QiLCJzZXRWZWhpY2xlIiwibW9tZW50IiwicmVxdWlyZSIsIk9wdGlvbiIsInByb3BzIiwic3RhdGUiLCJ0YXNrcyIsInVpZCIsInJlY29yZHMiLCJncm91cFRhc2tzIiwicmVuZGVyVGFzayIsImJpbmQiLCJjbGFpbVRhc2siLCJmZXRjaEdhbWVMb2ciLCJmZXRjaFRhc2tMaXN0IiwiaW5pdCIsImdyb3VwVGFzayIsInNldFN0YXRlIiwiZGF0YSIsImdyb3VwIiwibGlzdCIsImxlbmd0aCIsImlkIiwidGFzayIsImZpbmQiLCJ0IiwiVXNlciIsIk9iamVjdCIsImNyZWF0ZVdpdGhvdXREYXRhIiwiVGFzayIsIkdhbWUiLCJzZXQiLCJzYXZlIiwidGhlbiIsInJlc3VsdHMiLCJpbmZvIiwiY3JlYXRlZEF0Iiwia2V5cyIsImdyb3VwQXJyYXkiLCJtYXAiLCJwdXNoIiwia2V5IiwiZGlzcGxheSIsIml0ZW0iLCJ3aWR0aCIsIm5hbWUiLCJwaHlzaWNhbCIsIndpc2RvbSIsIm1pbGVhZ2UiLCJmb3JtYXQiLCJyZW5kZXJSZWNvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNLEFBQVMsQUFBSyxBQUFLOztBQUMxQyxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQTBCOztBQUNuQyxBQUFTLEFBQVEsQUFBWSxBQUFhLEFBQWtCLEFBQWtCOzs7Ozs7QUFDOUUsSUFBTSxTQUFOLEFBQU0sQUFB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Q0FFZTtVQUFBLEFBQ04sVUFBWSxLQUROLEFBQ1csTUFEWCxBQUNOLEFBRVI7OzZCQUNFLEFBQUM7Z0NBQ1MsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFEVixBQUNVLEFBQ1I7Z0NBQVEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFGVixBQUVVLEFBQ1I7a0JBSEYsQUFJRTtvQkFKRixBQUljLEFBQ1o7b0JBQVksMEJBQUE7aUNBQ1QsY0FBRCxXQUFBLEFBQU07O3dCQUFOOzBCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEsb0JBQVksS0FBUCxBQUFZLFdBQVosQUFBdUIsT0FEOUIsQUFDRSxBQUFLLEFBQThCLEFBQ25DLHVDQUFBLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3dCQUFoQjswQkFBQSxBQUFnQztBQUFoQztrQkFERixBQUNFLEFBQXFDLE9BQ3BDLGVBQUEsQUFBSyw4QkFBa0IsS0FBdkIsQUFBNEIsV0FGL0IsQUFFNEMsQUFDekMsV0FBQSxBQUFLLDRCQUFnQixLQUFyQixBQUEwQixTQUg3QixBQUd3QyxBQUNyQyxXQUFBLEFBQUssNkJBQWlCLEtBQXRCLEFBQTJCLFVBUnhCLEFBQ1YsQUFDRSxBQUVFLEFBSTBDO0FBYmxEOztvQkFBQTtzQkFERixBQUNFLEFBb0JIO0FBcEJHO0FBQ0UsT0FERjs7Ozs2QkFzQks7bUJBQ29CLEtBRHBCLEFBQ3lCO1VBRHpCLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxpQkFEUixBQUNRLEFBRWY7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQywyQkFBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCLElBQUksSUFBckIsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0k7QUFESjtpQkFDSSxBQUFRLFNBQVMsS0FBakIsQUFBaUIsQUFBSyxrQkFGNUIsQUFDRSxBQUM0QyxBQUU1Qyx1QkFBQSxBQUFDLDJCQUFJLElBQUwsQUFBUyxJQUFJLElBQWIsQUFBaUIsSUFBSSxJQUFyQixBQUF5QjtvQkFBekI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLGVBQ0ksQUFBTSxTQUFTLEtBQWYsQUFBZSxBQUFLLGVBUmhDLEFBQ0UsQUFDRSxBQUlFLEFBQ0UsQUFDdUMsQUFNaEQ7Ozs7O0FBNUswQixBIiwiZmlsZSI6InRhc2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9iYWUtc3VwZXItam91cm5leS9uZXh0LXNyYyJ9