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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGVhbmNsb3VkLmpzIl0sIm5hbWVzIjpbIkFWIiwiQVZJbnN0YW5jZSIsImFwcGxpY2F0aW9uSWQiLCJhcHBJZCIsImFwcEtleSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxBQUFhLEFBQW5COztBQUVBLElBQUcsQ0FBQyxXQUFXLEFBQWYsZUFBNkIsQUFDM0I7TUFBTSxRQUFRLEFBQWQsQUFDQTtNQUFNLFNBQVMsQUFBZixBQUNBO2FBQVcsQUFBWCxLQUFnQixFQUFFLE9BQUYsT0FBUyxRQUFULEFBQWhCLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJsZWFuY2xvdWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3d5eS9Eb2N1bWVudHMvY29kZS9zdXBlci1qb3VybmV5In0=