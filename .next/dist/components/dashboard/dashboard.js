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

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-journey/next-src/components/dashboard/dashboard.js';

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
          content = _react2.default.createElement(_travel2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          });
          break;
        default:
          content = _react2.default.createElement(_task2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          });
      }

      return content;
    }
  }, {
    key: 'render',
    value: function render() {
      var tab = this.state.tab;

      return _react2.default.createElement('section', {
        className: 'jsx-1695625990',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '1695625990',
        css: '.wgt-menu{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDJCLEFBR2dDLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9iYWUtc3VwZXItam91cm5leS9uZXh0LXNyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgVHJhdmVsIGZyb20gJy4vdHJhdmVsJztcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi91c2VyLWluZm8nO1xuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudTtcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFiOiAndGFzaycsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFRhYiA9IHRoaXMuZ2V0VGFiLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhkYXRhKSB7XG4gICAgY29uc3QgeyBrZXkgfSA9IGRhdGE7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjoga2V5XG4gICAgfSk7XG4gIH1cblxuICBnZXRUYWIoKSB7XG4gICAgY29uc3QgeyB0YWIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBzd2l0Y2ggKHRhYikge1xuICAgICAgY2FzZSAndHJhdmVsJzpcbiAgICAgICAgY29udGVudCA9IDxUcmF2ZWwgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGVudCA9IDxUYXNrIC8+O1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFiIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC53Z3QtbWVudXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezEyfSB4cz17MjR9PlxuICAgICAgICAgICAgPFVzZXJJbmZvIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17MjB9IG1kPXsxMn0geHM9ezI0fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0YWJdfVxuICAgICAgICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3Z3QtbWVudVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgIOS7u+WKoVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidHJhdmVsXCI+XG4gICAgICAgICAgICAgICAgICDml4XooYxcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICB7IHRoaXMuZ2V0VGFiKCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=components/dashboard/dashboard.js */'
      }), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_antd.Col, { lg: 4, md: 12, xs: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_userInfo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_antd.Col, { lg: 20, md: 12, xs: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1695625990',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_antd.Menu, {
        onClick: this.handleClick,
        selectedKeys: [tab],
        mode: 'horizontal',
        className: 'wgt-menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: 'task', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, '\u4EFB\u52A1'), _react2.default.createElement(_antd.Menu.Item, { key: 'travel', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, '\u65C5\u884C')), this.getTab()))));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJNZW51IiwiUm93IiwiQ29sIiwiVGFzayIsIlRyYXZlbCIsIlVzZXJJbmZvIiwiU3ViTWVudSIsIk1lbnVJdGVtR3JvdXAiLCJJdGVtR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZ2V0VGFiIiwiZGF0YSIsImtleSIsInNldFN0YXRlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFLOztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7Ozs7Ozs7QUFDckIsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0FBQ3JCLElBQU0sZ0JBQWdCLFdBQXRCLEFBQTJCOzs7a0NBR3pCOztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO1dBQUwsQUFBYSxBQUNOLEFBR1A7QUFKYSxBQUNYOztVQUdGLEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQUFwQyxBQUNBO1VBQUEsQUFBSyxTQUFTLE1BQUEsQUFBSyxPQUFMLEFBQVksS0FSVCxBQVFqQjtXQUNEOzs7OztnQyxBQUVXLE1BQU07VUFBQSxBQUNSLE1BRFEsQUFDQSxLQURBLEFBQ1IsQUFFUjs7V0FBQSxBQUFLO2FBQUwsQUFBYyxBQUNQLEFBRVI7QUFIZSxBQUNaOzs7OzZCQUlLO1VBQUEsQUFDQyxNQUFRLEtBRFQsQUFDYyxNQURkLEFBQ0MsQUFDUjs7VUFBSSxlQUFKLEFBRUE7O2NBQUEsQUFBUSxBQUNOO2FBQUEsQUFBSyxBQUNIO29DQUFVLEFBQUM7O3dCQUFEOzBCQUFWLEFBQVUsQUFDVjtBQURVO0FBQUEsV0FBQTtBQUVaO0FBQ0U7b0NBQVUsQUFBQzs7d0JBQUQ7MEJBTGQsQUFLSSxBQUFVLEFBR2Q7QUFIYztBQUFBLFdBQUE7OzthQUdkLEFBQU8sQUFDUjs7Ozs2QkFFUTtVQUFBLEFBQ0MsTUFBUSxLQURULEFBQ2MsTUFEZCxBQUNDLEFBRVI7OzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBO2lCQUFBO2FBQUEsQUFNRTtBQU5GLDBCQU1FLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsMkJBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQixJQUFJLElBQXBCLEFBQXdCO29CQUF4QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLDJCQUVGLEFBQUMsMkJBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQixJQUFJLElBQXJCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFDVSxLQURYLEFBQ2dCLEFBQ2Q7c0JBQWMsQ0FGaEIsQUFFZ0IsQUFBQyxBQUNmO2NBSEYsQUFHTyxBQUNMO21CQUpGLEFBSVk7O29CQUpaO3NCQUFBLEFBTUU7QUFORjtBQUNFLHlCQUtDLGNBQUQsV0FBQSxBQUFNLFFBQUssS0FBWCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FORixBQU1FLEFBR0EsaUNBQUMsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQVZKLEFBQ0UsQUFTRSxBQUlBLHVCQTFCWixBQUNFLEFBTUUsQUFJRSxBQUNFLEFBY0ksQUFBSyxBQU1sQjs7Ozs7QUF0RTBCLEEiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvYmFlLXN1cGVyLWpvdXJuZXkvbmV4dC1zcmMifQ==