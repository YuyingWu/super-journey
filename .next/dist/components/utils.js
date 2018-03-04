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