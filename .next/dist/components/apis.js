'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyDestination = exports.getDestinationList = exports.getGroupTaskList = exports.getTaskList = exports.getMyVehicle = exports.getVehicleList = exports.setVehicle = exports.getUserLevel = exports.getScore = exports.getRecords = exports.getUid = exports.getUser = undefined;

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _leancloud = require('./leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// 获取当前用户
var getUser = exports.getUser = function getUser() {
  var currentUser = _leancloud2.default.User.current();

  if (currentUser) {
    return (0, _utils.LeanCloudResParser)(currentUser);
  }

  return -1;
};

// 获取用户id
var getUid = exports.getUid = function getUid() {
  var currentUser = _leancloud2.default.User.current();

  if (currentUser) {
    var _LeanCloudResParser = (0, _utils.LeanCloudResParser)(currentUser),
        id = _LeanCloudResParser.id;

    return id;
  }

  return -1;
};

// 获取打卡记录
var getRecords = exports.getRecords = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var uid, query, User, list;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getUid();

          case 2:
            uid = _context.sent;

            if (!(uid === -1)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return');

          case 5:
            query = new _leancloud2.default.Query('Game');
            User = _leancloud2.default.Object.createWithoutData('_User', uid);

            query.equalTo('user', User);
            query.include(['task']);
            query.descending('createdAt');

            list = [];
            return _context.abrupt('return', query.find().then(function (results) {
              results.map(function (r) {
                list.push((0, _assign2.default)((0, _utils.LeanCloudResParser)(r.attributes.task), {
                  createdAt: r.createdAt
                }));
              });

              return list;
            }, function (error) {
              return [];
            }));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getRecords() {
    return _ref.apply(this, arguments);
  };
}();

// 获取积分
var getScore = exports.getScore = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var records, score;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getRecords();

          case 2:
            records = _context2.sent;
            score = {
              physical: 0,
              wisdom: 0,
              mileage: 0
            };

            records.map(function (r) {
              var physical = r.physical,
                  wisdom = r.wisdom,
                  mileage = r.mileage;

              score = {
                physical: score.physical + physical,
                wisdom: score.wisdom + wisdom,
                mileage: score.mileage + mileage
              };
            });

            return _context2.abrupt('return', score);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function getScore() {
    return _ref2.apply(this, arguments);
  };
}();

// 获取用户等级信息
var getUserLevel = exports.getUserLevel = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var score, physical, wisdom, levelList, userLevel, query;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getScore();

          case 2:
            score = _context3.sent;
            physical = score.physical, wisdom = score.wisdom;
            levelList = [];
            userLevel = {
              level: 1,
              physical: 100,
              wisdom: 100
            };
            query = new _leancloud2.default.Query('Level');
            return _context3.abrupt('return', query.find().then(function (res) {
              if (res && res.length) {
                res.map(function (r) {
                  levelList.push((0, _utils.LeanCloudResParser)(r));
                });

                levelList.map(function (item) {
                  var level = item.level,
                      levelPhysical = item.physical,
                      levelWisdom = item.wisdom;

                  switch (level) {
                    case 2:
                      if (physical > levelPhysical && wisdom > levelWisdom) {
                        userLevel = {
                          level: level,
                          physical: levelPhysical,
                          wisdom: levelWisdom
                        };
                      }
                      break;
                  }
                });
              }

              return userLevel;
            }));

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function getUserLevel() {
    return _ref3.apply(this, arguments);
  };
}();

// 设置当前交通工具
var setVehicle = exports.setVehicle = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(vehicle) {
    var uid, User;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getUid();

          case 2:
            uid = _context4.sent;

            if (!(uid === -1)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt('return');

          case 5:
            User = _leancloud2.default.Object.createWithoutData('_User', uid);
            // const VehicleList = await getVehicleList(vehicle);
            // const v = AV.Object.createWithoutData('Vehicle', VehicleList[0].id);

            User.set('vehicle', vehicle);

            User.save().then(function () {
              console.log('set vehicle successfully!');
            });

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function setVehicle(_x) {
    return _ref4.apply(this, arguments);
  };
}();

// 获取所有交通工具
var getVehicleList = exports.getVehicleList = function getVehicleList(type) {
  var query = new _leancloud2.default.Query('Vehicle');

  if (type) {
    query.equalTo('key', type);
  }

  return query.find().then(function (results) {
    var list = [];

    if (results && results.length) {
      results.map(function (r) {
        list.push((0, _utils.LeanCloudResParser)(r));
      });
    }

    return list;
  });
};

// 获取我的交通工具
var getMyVehicle = exports.getMyVehicle = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    var uid, query;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getUid();

          case 2:
            uid = _context5.sent;

            if (!(uid === -1)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return');

          case 5:
            query = new _leancloud2.default.Query('_User');
            return _context5.abrupt('return', query.get(uid).then(function (user) {
              return {
                vehicle: user.get('vehicle'),
                garage: user.get('garage')
              };
            }));

          case 7:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function getMyVehicle() {
    return _ref5.apply(this, arguments);
  };
}();

// task list
var getTaskList = exports.getTaskList = function getTaskList() {
  var query = new _leancloud2.default.Query('Task');

  return query.find().then(function (results) {
    var data = [];

    if (results && results.length) {
      results.map(function (r) {
        data.push((0, _utils.LeanCloudResParser)(r));
      });
    }

    return data;
  }, function (error) {});
};

var getGroupTaskList = exports.getGroupTaskList = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var list, group;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return getTaskList();

          case 2:
            list = _context6.sent;
            group = {};

            list.map(function (item) {
              if (!group[item.group]) {
                group[item.group] = [];
              }

              group[item.group].push(item);
            });

            return _context6.abrupt('return', group);

          case 6:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this);
  }));

  return function getGroupTaskList() {
    return _ref6.apply(this, arguments);
  };
}();

var getDestinationList = exports.getDestinationList = function getDestinationList() {
  var query = new _leancloud2.default.Query('Destination');

  return query.find().then(function (results) {
    var data = [];

    if (results && results.length) {
      results.map(function (r) {
        data.push((0, _utils.LeanCloudResParser)(r));
      });
    }

    return data;
  }, function (error) {
    console.error(error);
  });
};

var getMyDestination = exports.getMyDestination = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
    var uid, query;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getUid();

          case 2:
            uid = _context7.sent;

            if (!(uid === -1)) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt('return');

          case 5:
            query = new _leancloud2.default.Query('_User');

            query.include(['travel']);

            return _context7.abrupt('return', query.get(uid).then(function (user) {
              if (user.get('travel')) {
                return {
                  travel: (0, _utils.LeanCloudResParser)(user.get('travel'))
                };
              }

              return {};
            }, function (error) {
              console.error(error);
            }));

          case 8:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this);
  }));

  return function getMyDestination() {
    return _ref7.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBpcy5qcyJdLCJuYW1lcyI6WyJBViIsIkxlYW5DbG91ZFJlc1BhcnNlciIsImdldFVzZXIiLCJjdXJyZW50VXNlciIsIlVzZXIiLCJjdXJyZW50IiwiZ2V0VWlkIiwiaWQiLCJnZXRSZWNvcmRzIiwidWlkIiwicXVlcnkiLCJRdWVyeSIsIk9iamVjdCIsImNyZWF0ZVdpdGhvdXREYXRhIiwiZXF1YWxUbyIsImluY2x1ZGUiLCJkZXNjZW5kaW5nIiwibGlzdCIsImZpbmQiLCJ0aGVuIiwicmVzdWx0cyIsIm1hcCIsInB1c2giLCJyIiwiYXR0cmlidXRlcyIsInRhc2siLCJjcmVhdGVkQXQiLCJlcnJvciIsImdldFNjb3JlIiwicmVjb3JkcyIsInNjb3JlIiwicGh5c2ljYWwiLCJ3aXNkb20iLCJtaWxlYWdlIiwiZ2V0VXNlckxldmVsIiwibGV2ZWxMaXN0IiwidXNlckxldmVsIiwibGV2ZWwiLCJyZXMiLCJsZW5ndGgiLCJpdGVtIiwibGV2ZWxQaHlzaWNhbCIsImxldmVsV2lzZG9tIiwic2V0VmVoaWNsZSIsInZlaGljbGUiLCJzZXQiLCJzYXZlIiwiY29uc29sZSIsImxvZyIsImdldFZlaGljbGVMaXN0IiwidHlwZSIsImdldE15VmVoaWNsZSIsImdldCIsInVzZXIiLCJnYXJhZ2UiLCJnZXRUYXNrTGlzdCIsImRhdGEiLCJnZXRHcm91cFRhc2tMaXN0IiwiZ3JvdXAiLCJnZXREZXN0aW5hdGlvbkxpc3QiLCJnZXRNeURlc3RpbmF0aW9uIiwidHJhdmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUEwQjs7Ozs7O0FBRW5DLEFBQ0E7QUFBTyxJQUFNLDRCQUFVLFNBQVYsQUFBVSxVQUFNLEFBQzNCO01BQU0sY0FBYyxvQkFBQSxBQUFHLEtBQXZCLEFBQW9CLEFBQVEsQUFFNUI7O01BQUEsQUFBSSxhQUFhLEFBQ2Y7V0FBTywrQkFBUCxBQUFPLEFBQW1CLEFBQzNC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QU8sQUFDUjtBQVZNLEdBQUEsRUFVSixpQkFBUyxBQUNWO1lBQUEsQUFBUSxNQUFSLEFBQWMsQUFDZjtBQVpELEFBQU8sQUFhUjtBQWhCTSxBQWtCUDs7QUFBTyxJQUFNLDBEQUFBO3VGQUFtQixvQkFBQTthQUFBO29FQUFBO2dCQUFBOzJDQUFBO2VBQUE7NkJBQUE7bUJBQUEsQUFDWjs7ZUFBWjtBQUR3Qiw0QkFBQTs7a0JBRzFCLFFBQVEsQ0FIa0IsQUFHakIsSUFIaUI7K0JBQUE7QUFBQTtBQUFBOztvQ0FBQTs7ZUFPeEI7QUFQd0Isb0JBT2hCLElBQUksb0JBQUosQUFBTyxNQVBTLEFBT2hCLEFBQWEsQUFFM0I7O2tCQUFBLEFBQU0sUUFBUSxDQVRnQixBQVM5QixBQUFjLEFBQUM7O29EQUVSLEFBQU0sSUFBTixBQUFVLEtBQVYsQUFBZSxLQUFLLGdCQUFRLEFBQ2pDO2tCQUFJLEtBQUEsQUFBSyxJQUFULEFBQUksQUFBUyxXQUFXLEFBQ3RCOzswQkFDVSwrQkFBbUIsS0FBQSxBQUFLLElBRGxDLEFBQU8sQUFDRyxBQUFtQixBQUFTLEFBRXZDO0FBSFEsQUFDTDtBQUlKOztxQkFBQSxBQUFPLEFBQ1I7QUFSTSxhQUFBLEVBUUosaUJBQVMsQUFDVjtzQkFBQSxBQUFRLE1BQVIsQUFBYyxBQUNmO0FBckI2QixBQVd2Qjs7ZUFYdUI7ZUFBQTs2QkFBQTs7QUFBQTtpQkFBQTtBQUFuQjs7cUNBQUE7NkJBQUE7QUFBQTtBQUFOIiwiZmlsZSI6ImFwaXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9iYWUtc3VwZXItam91cm5leS9uZXh0LXNyYyJ9