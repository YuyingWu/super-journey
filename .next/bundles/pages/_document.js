
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports=webpackJsonp([3],{193:function(e,t,n){e.exports=n(459)},443:function(e,t,n){e.exports=n(444)},444:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),u=r(a),l=n(19),s=r(l),i=n(1),o=r(i),c=n(7),d=r(c),f=n(2),_=r(f),p=n(3),h=r(p),m=n(79),y=r(m),E=n(0),k=r(E),v=n(457),x=r(v),g=n(193),P=r(g),T=n(62),N=function(e){function t(){return(0,o.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=T.Helmet.renderStatic(),t=e.htmlAttributes.toComponent(),n=e.bodyAttributes.toComponent();return k.default.createElement("html",(0,u.default)({lang:"zh-CN"},t),k.default.createElement(v.Head,null,k.default.createElement("title",null,"超凡之旅"),k.default.createElement("meta",{charSet:"utf-8"}),k.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),k.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimal-ui"}),k.default.createElement("link",{href:"/static/bootstrap.css",rel:"stylesheet"}),k.default.createElement("link",{href:"//at.alicdn.com/t/font_2ddoibpy163nxw29.css",rel:"stylesheet"}),k.default.createElement("link",{href:"/static/antd.css",rel:"stylesheet"}),k.default.createElement("div",{dangerouslySetInnerHTML:{__html:'\x3c!--[if lt IE 9]><script src="/static/html5shiv.js"><\/script><script src="/static/respond.js"><\/script><![endif]--\x3e'}}),e.title.toComponent(),e.meta.toComponent(),e.link.toComponent()),k.default.createElement("body",(0,u.default)({},n,{className:"jsx-4043581549 "+(null!=n.className&&n.className||"")}),k.default.createElement(y.default,{styleId:"4043581549",css:["html{font-size:62.5%!important;}","body{font-size:1.4rem!important;}",".container{padding-top:15px;}"]}),k.default.createElement(v.Main,null),k.default.createElement(v.NextScript,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,P.default)()}}}]),t}(x.default);t.default=N},457:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return"/"===e?"/index.js":e+".js"}Object.defineProperty(t,"__esModule",{value:!0}),t.NextScript=t.Main=t.Head=void 0;var u=n(4),l=r(u),s=n(19),i=r(s),o=n(1),c=r(o),d=n(7),f=r(d),_=n(2),p=r(_),h=n(3),m=r(h),y=n(0),E=r(y),k=n(5),v=r(k),x=n(458),g=r(x),P=n(193),T=r(P),N=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{_documentProps:this.props}}},{key:"render",value:function(){return E.default.createElement("html",null,E.default.createElement(C,null),E.default.createElement("body",null,E.default.createElement(A,null),E.default.createElement(S,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,T.default)()}}}]),t}(y.Component);N.childContextTypes={_documentProps:v.default.any},t.default=N;var C=t.Head=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChunkPreloadLink",value:function(e){var t=this.context._documentProps.__NEXT_DATA__,n=t.buildStats,r=t.assetPrefix,a=t.buildId,u=n?n[e].hash:a;return E.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+u+"/"+e,as:"script"})}},{key:"getPreloadMainLinks",value:function(){return this.context._documentProps.dev?[this.getChunkPreloadLink("manifest.js"),this.getChunkPreloadLink("commons.js"),this.getChunkPreloadLink("main.js")]:[this.getChunkPreloadLink("app.js")]}},{key:"getPreloadDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,a=n.buildId;return t.map(function(e){return E.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+a+"/webpack/chunks/"+e,as:"script"})})}},{key:"render",value:function(){var e=this.context._documentProps,t=e.head,n=e.styles,r=e.__NEXT_DATA__,u=r.pathname,l=r.buildId,s=r.assetPrefix,i=a(u);return E.default.createElement("head",this.props,(t||[]).map(function(e,t){return E.default.cloneElement(e,{key:t})}),E.default.createElement("link",{rel:"preload",href:s+"/_next/"+l+"/page"+i,as:"script"}),E.default.createElement("link",{rel:"preload",href:s+"/_next/"+l+"/page/_error.js",as:"script"}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),n||null,this.props.children)}}]),t}(y.Component);C.contextTypes={_documentProps:v.default.any};var A=t.Main=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.context._documentProps,t=e.html,n=e.errorHtml,r=this.props.className;return E.default.createElement("div",{className:r},E.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:t}}),E.default.createElement("div",{id:"__next-error",dangerouslySetInnerHTML:{__html:n}}))}}]),t}(y.Component);A.propTypes={className:v.default.string},A.contextTypes={_documentProps:v.default.any};var S=t.NextScript=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChunkScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.context._documentProps.__NEXT_DATA__,r=n.buildStats,a=n.assetPrefix,u=n.buildId,s=r?r[e].hash:u;return E.default.createElement("script",(0,l.default)({key:e,type:"text/javascript",src:a+"/_next/"+s+"/"+e},t))}},{key:"getScripts",value:function(){return this.context._documentProps.dev?[this.getChunkScript("manifest.js"),this.getChunkScript("commons.js"),this.getChunkScript("main.js")]:[this.getChunkScript("app.js",{async:!0})]}},{key:"getDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,a=n.buildId;return E.default.createElement("div",null,t.map(function(e){return E.default.createElement("script",{async:!0,key:e,type:"text/javascript",src:r+"/_next/"+a+"/webpack/chunks/"+e})}))}},{key:"render",value:function(){var e=this.context._documentProps,t=e.staticMarkup,n=e.__NEXT_DATA__,r=e.chunks,u=n.pathname,l=n.buildId,s=n.assetPrefix,i=a(u);return n.chunks=r,E.default.createElement("div",null,t?null:E.default.createElement("script",{nonce:this.props.nonce,dangerouslySetInnerHTML:{__html:"\n          __NEXT_DATA__ = "+(0,g.default)(n)+"\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "}}),E.default.createElement("script",{async:!0,id:"__NEXT_PAGE__"+u,type:"text/javascript",src:s+"/_next/"+l+"/page"+i}),E.default.createElement("script",{async:!0,id:"__NEXT_PAGE__/_error",type:"text/javascript",src:s+"/_next/"+l+"/page/_error.js"}),t?null:this.getDynamicChunks(),t?null:this.getScripts())}}]),t}(y.Component);S.propTypes={nonce:v.default.string},S.contextTypes={_documentProps:v.default.any}},458:function(e,t,n){"use strict";function r(e){return u[e]}function a(e){return s[e]}var u={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},l=/[&><\u2028\u2029]/g;e.exports=function(e){return JSON.stringify(e).replace(l,r)};var s={"\u2028":"\\u2028","\u2029":"\\u2029"},i=/[\u2028\u2029]/g;e.exports.sanitize=function(e){return e.replace(i,a)}},459:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=(0,f.flush)(),t=[],n=!0,r=!1,a=void 0;try{for(var u,l=(0,o.default)(e);!(n=(u=l.next()).done);n=!0){var i=(0,s.default)(u.value,2),c=i[0],_=i[1];t.push(d.default.createElement("style",{id:"__"+c,key:"__"+c,dangerouslySetInnerHTML:{__html:_}}))}}catch(e){r=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return t}function u(){var e=(0,f.flush)(),t="",n=!0,r=!1,a=void 0;try{for(var u,l=(0,o.default)(e);!(n=(u=l.next()).done);n=!0){var i=(0,s.default)(u.value,2);t+='<style id="__'+i[0]+'">'+i[1]+"</style>"}}catch(e){r=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return t}Object.defineProperty(t,"__esModule",{value:!0});var l=n(76),s=r(l),i=n(110),o=r(i);t.default=a,t.flushToHTML=u;var c=n(0),d=r(c),f=n(192)}},[443]);
            return { page: comp.default }
          })
        