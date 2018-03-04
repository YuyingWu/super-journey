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

var _link = require('_next@4.2.3@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wyy/Documents/code/super-journey/pages/_error.js?entry';


var Error = function (_React$Component) {
    (0, _inherits3.default)(Error, _React$Component);

    function Error() {
        (0, _classCallCheck3.default)(this, Error);

        return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
    }

    (0, _createClass3.default)(Error, [{
        key: 'render',

        /*static getInitialProps({ res, err }) {
          const statusCode = res ? res.statusCode : err ? err.statusCode : null;
          return { statusCode }
        }*/

        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-830220282' + ' ' + 'page-error',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_reactHelmet.Helmet, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, '404 | \u543E\u60A0\u6742\u8D27\u94FA')), _react2.default.createElement(_style2.default, {
                styleId: '1213744191',
                css: 'html{font-size:62.5%;}body{font-size:1.4rem;background:#2710f2!important;}*::selection{color:#49ffb9;background:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQjJCLEFBR2lDLEFBR0MsQUFJSCxjQUNFLEVBUHBCLENBR2lDLGFBS2pDLGdCQUpBIiwiZmlsZSI6InBhZ2VzL19lcnJvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd3l5L0RvY3VtZW50cy9jb2RlL3N1cGVyLWpvdXJuZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKnN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiBudWxsO1xuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICB9Ki9cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1lcnJvclwiPlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgICAgPHRpdGxlPjQwNCB8IOWQvuaCoOadgui0p+mTujwvdGl0bGU+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgaHRtbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxMGYyIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICo6OnNlbGVjdGlvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ5ZmZiOTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2UtZXJyb3J7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgJ0hpcmFnaW5vIFNhbnMgR0InLCAndGFob21hJywgJ1BpbmdGYW5nIFNDJywgJ1dlblF1YW5ZaSBNaWNybyBIZWknLCAnTWljcm9zb2Z0IFlhSGVpJywgJ2FyaWFsJywgJ3NhbnMtc2VyaWYnO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlLWVycm9yIGF7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlLWVycm9yIHB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgM3JlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgIGNvbG9yOiAjMjcxMGYyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtZXJyb3IgcC50ZXh0LXJpZ2h0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj40MDQgZXJyb3I8L2gxPlxuICAgICAgICAgICAgPHA+IEFuIGVycm9yIGhhcyBvY2N1cnJlZC4gVG8gY29udGludWU6IDwvcD5cbiAgICAgICAgICAgIDxwPjxMaW5rIGhyZWY9XCIvXCI+PGE+Q2xpY2sgSGVyZTwvYT48L0xpbms+IHRvIHJldHVybiB0byB0aGUgaW5kZXgsIG9yPC9wPlxuICAgICAgICAgICAgPHA+UHJlc3MgQ1RSTCtBTFQrREVMIHRvIHJlc3RhcnQgeW91ciBjb21wdXRlci4gSWYgeW91IGRvIHRoaXMsIHlvdSB3aWxsIGxvc2UgYW55IHVuc2F2ZWQgZGF0YSBpbiBhbGwgb3BlbiBhcHBsaWNhdGlvbnMuPC9wPlxuICAgICAgICAgICAgPHA+RXJyb3I6IDQwNCA6IGhpIGl0J3MgWXV5aW5nIFd1LjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1l1eWluZ1d1XCI+Q2xpY2sgaGVyZTwvYT4gdG8gY29udGludWUgXzwvcD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/_error.js?entry */'
            }), _react2.default.createElement(_style2.default, {
                styleId: '3886255244',
                css: '.page-error.jsx-830220282{-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);color:#fff;text-align:center;font-family:monospace,\'Hiragino Sans GB\',\'tahoma\',\'PingFang SC\',\'WenQuanYi Micro Hei\',\'Microsoft YaHei\',\'arial\',\'sans-serif\';}.page-error.jsx-830220282 a.jsx-830220282{color:#fff;text-decoration:underline;}.page-error.jsx-830220282 p.jsx-830220282{text-align:left;max-width:54rem;padding:0 3rem;margin:2rem auto;font-size:1.6rem;}.title.jsx-830220282{margin:0;background:#ccc;color:#2710f2;display:inline-block;font-size:2rem;padding:0 0.25em;}.page-error.jsx-830220282 p.text-right.jsx-830220282{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qm9CLEFBR3VDLEFBTWYsQUFJSyxBQU9QLEFBUVEsU0FQRCxFQVhVLEtBSVYsQ0FlcEIsUUFQa0IsT0FQQyxLQUpuQixFQVl5QixRQVBKLGFBUUYsSUFQRSxXQVFBLE1BUHJCLFNBZGUsRUFzQmYsU0FyQnNCLGtCQUNrSCw2SEFDeEkiLCJmaWxlIjoicGFnZXMvX2Vycm9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvc3VwZXItam91cm5leSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGw7XG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG4gIH0qL1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWVycm9yXCI+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICA8dGl0bGU+NDA0IHwg5ZC+5oKg5p2C6LSn6ZO6PC90aXRsZT5cbiAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBodG1se1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzEwZjIhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKjo6c2VsZWN0aW9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDlmZmI5O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZS1lcnJvcntcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCAnSGlyYWdpbm8gU2FucyBHQicsICd0YWhvbWEnLCAnUGluZ0ZhbmcgU0MnLCAnV2VuUXVhbllpIE1pY3JvIEhlaScsICdNaWNyb3NvZnQgWWFIZWknLCAnYXJpYWwnLCAnc2Fucy1zZXJpZic7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtZXJyb3IgYXtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtZXJyb3IgcHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU0cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgICAgICAgY29sb3I6ICMyNzEwZjI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgICAgICAgfVxuICAgICAgICAucGFnZS1lcnJvciBwLnRleHQtcmlnaHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPjQwNCBlcnJvcjwvaDE+XG4gICAgICAgICAgICA8cD4gQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBUbyBjb250aW51ZTogPC9wPlxuICAgICAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9cIj48YT5DbGljayBIZXJlPC9hPjwvTGluaz4gdG8gcmV0dXJuIHRvIHRoZSBpbmRleCwgb3I8L3A+XG4gICAgICAgICAgICA8cD5QcmVzcyBDVFJMK0FMVCtERUwgdG8gcmVzdGFydCB5b3VyIGNvbXB1dGVyLiBJZiB5b3UgZG8gdGhpcywgeW91IHdpbGwgbG9zZSBhbnkgdW5zYXZlZCBkYXRhIGluIGFsbCBvcGVuIGFwcGxpY2F0aW9ucy48L3A+XG4gICAgICAgICAgICA8cD5FcnJvcjogNDA0IDogaGkgaXQncyBZdXlpbmcgV3UuPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vWXV5aW5nV3VcIj5DbGljayBoZXJlPC9hPiB0byBjb250aW51ZSBfPC9wPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/_error.js?entry */'
            }), _react2.default.createElement('main', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('h1', {
                className: 'jsx-830220282' + ' ' + 'title',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, '404 error'), _react2.default.createElement('p', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, ' An error has occurred. To continue: '), _react2.default.createElement('p', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('a', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Click Here')), ' to return to the index, or'), _react2.default.createElement('p', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Press CTRL+ALT+DEL to restart your computer. If you do this, you will lose any unsaved data in all open applications.'), _react2.default.createElement('p', {
                className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Error: 404 : hi it\'s Yuying Wu.'), _react2.default.createElement('p', {
                className: 'jsx-830220282' + ' ' + 'text-right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', { href: 'https://github.com/YuyingWu', className: 'jsx-830220282',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Click here'), ' to continue _')));
        }
    }]);

    return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJIZWxtZXQiLCJFcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0lBRVksQTs7Ozs7Ozs7OzthQUNuQjs7Ozs7OztpQ0FLUyxBQUNQO21DQUNFLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDRTtBQURGO0FBQUEsYUFBQSxrQkFDRSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGTixBQUNFLEFBQ0k7eUJBRk47cUJBQUE7QUFBQTt5QkFBQTtxQkFBQSxBQWdERTtBQWhERixnQ0FnREUsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTttREFBQSxBQUFjOzs4QkFBZDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOEJBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLDBEQUFBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQWU7QUFBZjsrQkFBZSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBbEIsQUFBRyxBQUFlLGdCQUh0QixBQUdJLEFBQ0EsZ0RBQUEsY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDBJQUFBLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxxREFBQSxjQUFBO21EQUFBLEFBQWE7OzhCQUFiO2dDQUFBLEFBQTBCO0FBQTFCO0FBQUEsK0JBQTBCLGNBQUEsT0FBRyxNQUFILEFBQVEsMENBQVI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFBMUIsQUFBMEIsZUF2RGxDLEFBQ0UsQUFnREUsQUFNSSxBQUlUOzs7OztFQWxFZ0MsZ0JBQU0sQTs7a0JBQXBCLEEiLCJmaWxlIjoiX2Vycm9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93eXkvRG9jdW1lbnRzL2NvZGUvc3VwZXItam91cm5leSJ9