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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _travel = require('./travel');

var _travel2 = _interopRequireDefault(_travel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/components/dashboard/dashboard.js';

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
              lineNumber: 34
            }
          });
          break;
        default:
          content = _react2.default.createElement(_task2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_antd.Menu, {
        onClick: this.handleClick,
        selectedKeys: [tab],
        mode: 'horizontal',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: 'task', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, '\u4EFB\u52A1'), _react2.default.createElement(_antd.Menu.Item, { key: 'travel', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, '\u65C5\u884C')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.getTab()));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJNZW51IiwiVGFzayIsIlRyYXZlbCIsIlN1Yk1lbnUiLCJNZW51SXRlbUdyb3VwIiwiSXRlbUdyb3VwIiwicHJvcHMiLCJzdGF0ZSIsInRhYiIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldFRhYiIsImRhdGEiLCJrZXkiLCJzZXRTdGF0ZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7Ozs7Ozs7QUFDbkIsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0FBQ3JCLElBQU0sZ0JBQWdCLFdBQXRCLEFBQTJCOzs7a0NBR3pCOztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO1dBQUwsQUFBYSxBQUNOLEFBR1A7QUFKYSxBQUNYOztVQUdGLEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQUFwQyxBQUNBO1VBQUEsQUFBSyxTQUFTLE1BQUEsQUFBSyxPQUFMLEFBQVksS0FSVCxBQVFqQjtXQUNEOzs7OztnQ0FFVyxBLE1BQU07VUFBQSxBQUNSLE1BRFEsQUFDQSxLQURBLEFBQ1IsQUFFUjs7V0FBQSxBQUFLO2FBQUwsQUFBYyxBQUNQLEFBRVI7QUFIZSxBQUNaOzs7OzZCQUlLO1VBQUEsQUFDQyxNQUFRLEtBRFQsQUFDYyxNQURkLEFBQ0MsQUFDUjs7VUFBSSxlQUFKLEFBRUE7O2NBQUEsQUFBUSxBQUNOO2FBQUEsQUFBSyxBQUNIO29DQUFVLEFBQUM7O3dCQUFEOzBCQUFWLEFBQVUsQUFDVjtBQURVO0FBQUEsV0FBQTtBQUVaO0FBQ0U7b0NBQVUsQUFBQzs7d0JBQUQ7MEJBTGQsQUFLSSxBQUFVLEFBR2Q7QUFIYztBQUFBLFdBQUE7OzthQUdkLEFBQU8sQUFDUjs7Ozs2QkFFUTtVQUFBLEFBQ0MsTUFBUSxLQURULEFBQ2MsTUFEZCxBQUNDLEFBRVI7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztpQkFDVSxLQURYLEFBQ2dCLEFBQ2Q7c0JBQWMsQ0FGaEIsQUFFZ0IsQUFBQyxBQUNmO2NBSEYsQUFHTzs7b0JBSFA7c0JBQUEsQUFLRTtBQUxGO0FBQ0UseUJBSUMsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQUxGLEFBS0UsQUFHQSxpQ0FBQyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBVEosQUFDRSxBQVFFLEFBS0Ysa0NBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEsY0FmSixBQUNFLEFBY0UsQUFDSSxBQUFLLEFBSWQ7Ozs7O0FBMUQwQixBIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL3N1cGVyLWpvdXJuZXkifQ==