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
        header: _react2.default.createElement('div', null, '\u4EFB\u52A1\u4E2D\u5FC3'),
        footer: _react2.default.createElement('div', null, '\u9009\u62E9\u4F60\u9700\u8981\u786E\u8BA4\u7684\u4EFB\u52A1\uFF0C\u5E76\u70B9\u51FB\u201C\u5B8C\u6210\u201D'),
        bordered: true,
        dataSource: tasks,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(_antd.List.Item, null, _react2.default.createElement('p', null, item.name, '\uFF1A\u4F53\u529B\u503C', item.physical, '\uFF0C\u7CBE\u795E\u503C', item.wisdom, '\uFF0C\u91CC\u7A0B', item.mileage, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: function onClick() {
              return _this6.claimTask(item);
            } }, '\u5B8C\u6210')));
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

      return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Layout, null, _react2.default.createElement(Sider, { width: 300, style: { background: '#fff' } }, records.length ? this.renderRecords() : null), _react2.default.createElement(Content, { style: { padding: '0 24px', minHeight: 280 } }, _react2.default.createElement('div', null, tasks.length ? this.renderTask() : null))));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;