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

var _apis = require('../apis');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      vehicles: [],
      myVehicle: 'foot'
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchVehicles();

      // setVehicle('foot');
      this.fetchMyVehicle();
    }
  }, {
    key: 'fetchVehicles',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var vehicles;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _apis.getVehicleList)();

              case 2:
                vehicles = _context.sent;

                if (vehicles && vehicles.length) {
                  this.setState({
                    vehicles: vehicles
                  });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchVehicles() {
        return _ref.apply(this, arguments);
      }

      return fetchVehicles;
    }()
  }, {
    key: 'fetchMyVehicle',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _ref3, vehicle, garage, garageVehicles;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _apis.getMyVehicle)();

              case 2:
                _ref3 = _context2.sent;
                vehicle = _ref3.vehicle;
                garage = _ref3.garage;
                garageVehicles = this.getGarage(garage);

                this.setState({
                  myVehicle: vehicle,
                  garage: garageVehicles
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchMyVehicle() {
        return _ref2.apply(this, arguments);
      }

      return fetchMyVehicle;
    }()
  }, {
    key: 'getGarage',
    value: function getGarage(data) {
      if (!data) {
        return;
      }

      var keys = data.split(',');
      var result = [];

      if (keys && keys.length) {
        var vehicles = this.state.vehicles;

        keys.map(function (key) {
          var matchItem = vehicles.find(function (v) {
            return key === v.key;
          });

          if (matchItem && matchItem !== -1) {

            result.push(matchItem);
          }
        });
      }
      console.log(result);
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          vehicles = _state.vehicles,
          myVehicle = _state.myVehicle,
          garage = _state.garage;

      return _react2.default.createElement('div', null, garage && garage.length ? _react2.default.createElement('p', null, '\u6211\u76EE\u524D\u7684\u4EA4\u901A\u5DE5\u5177\u4ED3\u5E93\uFF1A', garage.map(function (v) {
        return _react2.default.createElement('span', { key: 'garage-' + v.name }, v.name);
      })) : null, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'center' }, vehicles && vehicles.map(function (v) {
        var cls = (0, _classnames2.default)({
          'bg-info': v.key === myVehicle,
          'bg-danger': v.key !== myVehicle
        });

        return _react2.default.createElement(_antd.Col, { key: 'v-' + v.id, span: 4 }, _react2.default.createElement('div', { className: cls }, v.name));
      })));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;