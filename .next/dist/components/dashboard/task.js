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

      (0, _apis.setVehicle)('foot');
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

      var keys = (0, _keys2.default)(groupTasks);
      var groupArray = [];

      keys.map(function (key) {
        groupArray.push({
          key: key,
          list: groupTasks[key]
        });
      });

      return _react2.default.createElement(_antd.List, {
        header: _react2.default.createElement('div', null, '\u4EFB\u52A1\u4E2D\u5FC3'),
        footer: _react2.default.createElement('div', null, '\u9009\u62E9\u4F60\u9700\u8981\u786E\u8BA4\u7684\u4EFB\u52A1\uFF0C\u5E76\u70B9\u51FB\u201C\u5B8C\u6210\u201D'),
        bordered: true,
        dataSource: groupArray,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, null, _react2.default.createElement('div', { style: {
              display: 'block'
            } }, _react2.default.createElement('h1', null, item.key), _react2.default.createElement('br', null), _react2.default.createElement(_antd.Select, { defaultValue: '\u8BF7\u9009\u62E9', style: { width: 240 }, onChange: _this4.claimTask }, item.list.map(function (task) {
            return _react2.default.createElement(Option, { value: task.id, key: 'select-' + task.id }, task.name, '\uFF08', task.physical ? '\u4F53\u529B\u503C' + task.physical + ' ' : null, task.wisdom ? '\u7CBE\u795E\u503C' + task.wisdom + ' ' : null, task.mileage ? '\u91CC\u7A0B' + task.mileage : null, '\uFF09');
          }))));
        }
      });
    }
  }, {
    key: 'renderRecords',
    value: function renderRecords() {
      var records = this.state.records;

      return _react2.default.createElement(_antd.List, {
        header: _react2.default.createElement('div', null, '\u4EFB\u52A1\u6253\u5361'),
        footer: _react2.default.createElement('div', null, '\u6253\u5361\u7684\u8BB0\u5F55'),
        bordered: true,
        dataSource: records,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, null, _react2.default.createElement('div', null, _react2.default.createElement('p', null, moment(item.createdAt).format('HH:mm MMM Do YYYY')), _react2.default.createElement('p', null, _react2.default.createElement('span', { className: 'text-primary' }, item.name), '\uFF1A', item.physical ? '\u4F53\u529B' + item.physical : null, item.wisdom ? '\u7CBE\u795E' + item.wisdom : null, item.mileage ? '\u91CC\u7A0B' + item.mileage : null)));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          tasks = _state.tasks,
          records = _state.records;

      return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { lg: 12, md: 12, xs: 24 }, records.length ? this.renderRecords() : null), _react2.default.createElement(_antd.Col, { lg: 12, md: 12, xs: 24 }, _react2.default.createElement('div', null, tasks.length ? this.renderTask() : null))));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;