"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeanCloudResParser = undefined;

var _extends2 = require("_babel-runtime@6.26.0@babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeanCloudResParser = exports.LeanCloudResParser = function LeanCloudResParser(result) {
  var attributes = result.attributes,
      id = result.id,
      createdAt = result.createdAt;

  return (0, _extends3.default)({}, attributes, {
    id: id,
    createdAt: createdAt
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMuanMiXSwibmFtZXMiOlsiTGVhbkNsb3VkUmVzUGFyc2VyIiwiYXR0cmlidXRlcyIsInJlc3VsdCIsImlkIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUFPLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLDJCQUFVO01BQUEsQUFDbEMsYUFEa0MsQUFDSixPQURJLEFBQ2xDO01BRGtDLEFBQ3RCLEtBRHNCLEFBQ0osT0FESSxBQUN0QjtNQURzQixBQUNsQixZQURrQixBQUNKLE9BREksQUFDbEIsQUFFeEI7O29DQUFBLEFBQ0s7UUFETCxBQUdFO2VBSEYsQUFLRDtBQUhHO0FBTEciLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9iYWUtc3VwZXItam91cm5leS9uZXh0LXNyYyJ9