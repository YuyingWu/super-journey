'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _leancloudStorage = require('leancloud-storage');

var _leancloudStorage2 = _interopRequireDefault(_leancloudStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AVInstance = _leancloudStorage2.default;

if (!AVInstance.applicationId) {
  var appId = 'Do5NpSTuP2APFE9wQAvDxmxM-gzGzoHsz';
  var appKey = 'TL0dh8sMu3m6MMaEukSxPfon';
  AVInstance.init({ appId: appId, appKey: appKey });
}

exports.default = AVInstance;