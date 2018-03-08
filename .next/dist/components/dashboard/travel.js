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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _leancloud = require('../leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _apis = require('../apis');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/bae-super-journey/next-src/components/dashboard/travel.js';

var moment = require('moment');

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      vehicles: [],
      myVehicle: 'foot',
      enableTravel: false
    };

    _this.createTravel = _this.createTravel.bind(_this);
    _this.updateTravelStatus = _this.updateTravelStatus.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.init();
      this.fetchVehicles();
      this.fetchMyVehicle();
      this.fetchMyDestination();
    }
  }, {
    key: 'init',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
    key: 'updateTravelStatus',
    value: function updateTravelStatus() {
      var travelEndTime = this.state.travelEndTime;

      var enableTravel = true;

      if (travelEndTime) {
        enableTravel = moment().isAfter(travelEndTime);
      }

      this.setState({
        enableTravel: enableTravel
      });
    }
  }, {
    key: 'fetchVehicles',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var vehicles;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _apis.getVehicleList)();

              case 2:
                vehicles = _context2.sent;

                if (vehicles && vehicles.length) {
                  this.setState({
                    vehicles: vehicles
                  });
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchVehicles() {
        return _ref2.apply(this, arguments);
      }

      return fetchVehicles;
    }()
  }, {
    key: 'fetchMyVehicle',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _ref4, vehicle, garage, garageVehicles;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _apis.getMyVehicle)();

              case 2:
                _ref4 = _context3.sent;
                vehicle = _ref4.vehicle;
                garage = _ref4.garage;
                garageVehicles = this.getGarage(garage);

                this.setState({
                  myVehicle: vehicle,
                  garage: garageVehicles
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchMyVehicle() {
        return _ref3.apply(this, arguments);
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

      return result;
    }
  }, {
    key: 'createTravel',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this2 = this;

        var uid, User, destinationList, random, desId, Destination, Travel;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                uid = this.state.uid;
                User = _leancloud2.default.Object.createWithoutData('_User', uid);

                //random

                _context4.next = 4;
                return (0, _apis.getDestinationList)();

              case 4:
                destinationList = _context4.sent;
                random = Math.floor(Math.random() * destinationList.length);
                desId = destinationList[random].id;
                Destination = _leancloud2.default.Object.createWithoutData('Destination', desId);
                //random

                Travel = new _leancloud2.default.Object('Travel');

                Travel.set('user', User);
                Travel.set('destination', Destination);
                Travel.set('startTime', moment().toDate());
                Travel.set('endTime', moment().hour(24).toDate());

                Travel.save().then(function (results) {
                  if (results) {
                    var id = results.id;

                    var travel = _leancloud2.default.Object.createWithoutData('Travel', id);

                    User.set('travel', travel);

                    User.save().then(function (res) {
                      _antd.message.info('提交成功');

                      _this2.setState({
                        enableTravel: false
                      });
                    });
                  }
                });

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createTravel() {
        return _ref5.apply(this, arguments);
      }

      return createTravel;
    }()
  }, {
    key: 'fetchMyDestination',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var _this3 = this;

        var destination;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _apis.getMyDestination)();

              case 2:
                destination = _context5.sent;

                this.setState({
                  travelEndTime: destination.endTime || null
                }, function () {
                  _this3.updateTravelStatus();
                });

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchMyDestination() {
        return _ref6.apply(this, arguments);
      }

      return fetchMyDestination;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          vehicles = _state.vehicles,
          myVehicle = _state.myVehicle,
          garage = _state.garage,
          enableTravel = _state.enableTravel;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, garage && garage.length ? _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, '\u6211\u76EE\u524D\u7684\u4EA4\u901A\u5DE5\u5177\u4ED3\u5E93\uFF1A', garage.map(function (v) {
        return _react2.default.createElement('span', { key: 'garage-' + v.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, v.name);
      })) : null, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, vehicles && vehicles.map(function (v) {
        var cls = (0, _classnames2.default)({
          'bg-info': v.key === myVehicle,
          'bg-danger': v.key !== myVehicle
        });

        return _react2.default.createElement(_antd.Col, { key: 'v-' + v.id, span: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, _react2.default.createElement('div', { className: cls, __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, v.name));
      })), _react2.default.createElement(_antd.Button, { type: 'primary', onClick: function onClick() {
          _this4.createTravel();
        }, disabled: !enableTravel, __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, '\u53BB\u65C5\u884C'));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL3RyYXZlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJtZXNzYWdlIiwiY2xhc3NOYW1lcyIsIkFWIiwiZ2V0VmVoaWNsZUxpc3QiLCJnZXRNeVZlaGljbGUiLCJnZXRVaWQiLCJnZXREZXN0aW5hdGlvbkxpc3QiLCJnZXRNeURlc3RpbmF0aW9uIiwibW9tZW50IiwicmVxdWlyZSIsInByb3BzIiwic3RhdGUiLCJ2ZWhpY2xlcyIsIm15VmVoaWNsZSIsImVuYWJsZVRyYXZlbCIsImNyZWF0ZVRyYXZlbCIsImJpbmQiLCJ1cGRhdGVUcmF2ZWxTdGF0dXMiLCJpbml0IiwiZmV0Y2hWZWhpY2xlcyIsImZldGNoTXlWZWhpY2xlIiwiZmV0Y2hNeURlc3RpbmF0aW9uIiwidWlkIiwic2V0U3RhdGUiLCJ0cmF2ZWxFbmRUaW1lIiwiaXNBZnRlciIsImxlbmd0aCIsInZlaGljbGUiLCJnYXJhZ2UiLCJnYXJhZ2VWZWhpY2xlcyIsImdldEdhcmFnZSIsImRhdGEiLCJrZXlzIiwic3BsaXQiLCJyZXN1bHQiLCJtYXAiLCJtYXRjaEl0ZW0iLCJmaW5kIiwia2V5IiwidiIsInB1c2giLCJVc2VyIiwiT2JqZWN0IiwiY3JlYXRlV2l0aG91dERhdGEiLCJkZXN0aW5hdGlvbkxpc3QiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJkZXNJZCIsImlkIiwiRGVzdGluYXRpb24iLCJUcmF2ZWwiLCJzZXQiLCJ0b0RhdGUiLCJob3VyIiwic2F2ZSIsInRoZW4iLCJyZXN1bHRzIiwidHJhdmVsIiwiaW5mbyIsImRlc3RpbmF0aW9uIiwiZW5kVGltZSIsIm5hbWUiLCJjbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFLLEFBQUssQUFBUTs7QUFDM0IsQUFBTzs7OztBQUNQLEFBQU8s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LHNCQUFBLEFBQUMsMkJBQUksTUFBTCxBQUFVLFFBQU8sU0FBakIsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjs4QkFDYyxBQUFTLElBQUksYUFBSyxBQUM5QjtZQUFNO3FCQUNPLEVBQUEsQUFBRSxRQURRLEFBQ0EsQUFDckI7dUJBQWEsRUFBQSxBQUFFLFFBRmpCLEFBQVksQUFBVyxBQUVFLEFBR3pCO0FBTHVCLEFBQ3JCLFNBRFU7OytCQU1WLEFBQUMsMkJBQUksWUFBVSxFQUFmLEFBQWlCLElBQU0sTUFBdkIsQUFBNkI7c0JBQTdCO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUF1QjtBQUF2QjthQUZKLEFBQ0UsQUFDRSxBQUF5QixBQUc5QjtBQW5CSCxBQU9FLEFBQ2MsQUFjZCxPQWRjLG9CQWNkLEFBQUMsOEJBQU8sTUFBUixBQUFhLFdBQVUsU0FBUyxtQkFBTSxBQUFDO2lCQUFBLEFBQUssQUFBZTtBQUEzRCxXQUE2RCxVQUFVLENBQXZFLEFBQXdFO29CQUF4RTtzQkFBQTtBQUFBO1NBdkJKLEFBQ0UsQUFzQkUsQUFHTDs7Ozs7QUFqSzBCLEEiLCJmaWxlIjoidHJhdmVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvYmFlLXN1cGVyLWpvdXJuZXkvbmV4dC1zcmMifQ==