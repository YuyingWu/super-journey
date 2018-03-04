'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/components/dashboard/task.js';

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;

var moment = require('moment');

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