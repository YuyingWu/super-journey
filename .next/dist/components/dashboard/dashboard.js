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

var _antd = require('antd');

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _travel = require('./travel');

var _travel2 = _interopRequireDefault(_travel);

var _userInfo = require('../user-info');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      tab: 'task'
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.getTab = _this.getTab.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick(data) {
      var key = data.key;

      this.setState({
        tab: key
      });
    }
  }, {
    key: 'getTab',
    value: function getTab() {
      var tab = this.state.tab;

      var content = void 0;

      switch (tab) {
        case 'travel':
          content = _react2.default.createElement(_travel2.default, null);
          break;
        default:
          content = _react2.default.createElement(_task2.default, null);
      }

      return content;
    }
  }, {
    key: 'render',
    value: function render() {
      var tab = this.state.tab;

      return _react2.default.createElement('section', {
        className: 'jsx-1695625990'
      }, _react2.default.createElement(_style2.default, {
        styleId: '1695625990',
        css: ['.wgt-menu{margin-bottom:10px;}']
      }), _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { lg: 4, md: 12, xs: 24 }, _react2.default.createElement(_userInfo2.default, null)), _react2.default.createElement(_antd.Col, { lg: 20, md: 12, xs: 24 }, _react2.default.createElement('div', {
        className: 'jsx-1695625990'
      }, _react2.default.createElement(_antd.Menu, {
        onClick: this.handleClick,
        selectedKeys: [tab],
        mode: 'horizontal',
        className: 'wgt-menu'
      }, _react2.default.createElement(_antd.Menu.Item, { key: 'task' }, '\u4EFB\u52A1'), _react2.default.createElement(_antd.Menu.Item, { key: 'travel' }, '\u7528\u6237\u4FE1\u606F')), this.getTab()))));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;