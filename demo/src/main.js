!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./demo/src",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function r(){return null}function o(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&C(e.attributes,t.defaultProps),n&&C(e.attributes,n)}function i(e,t){var n,r,o;if(t){for(o in t)if(n=F.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[F.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function a(e,t,n){var r=t&&t._preactCompatRendered&&t._preactCompatRendered.base;r&&r.parentNode!==t&&(r=null),!r&&t&&(r=t.firstElementChild);for(var o=t.childNodes.length;o--;)t.childNodes[o]!==r&&t.removeChild(t.childNodes[o]);var i=Object(D.e)(e,t,r);return t&&(t._preactCompatRendered=i&&(i._component||{base:i})),"function"==typeof n&&n(),i&&i._component||i}function u(e,t,n,r){var o=Object(D.c)(K,{context:e.context},t),i=a(o,n),u=i._component||i.base;return r&&r.call(u,i),u}function s(e){var t=e._preactCompatRendered&&e._preactCompatRendered.base;return!(!t||t.parentNode!==e)&&(Object(D.e)(Object(D.c)(r),e,t),!0)}function c(e){return h.bind(null,e)}function l(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?l(r):r&&"object"==typeof r&&!y(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=h(r.type||r.nodeName,r.props||r.attributes,r.children))}}function p(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function f(e){return w({displayName:e.displayName||e.name,render:function(){return e(this.props,this.context)}})}function d(e){var t=e[$];return t?!0===t?e:t:(t=f(e),Object.defineProperty(t,$,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,$,{configurable:!0,value:t}),t)}function h(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return l(e,2),m(D.c.apply(void 0,e))}function m(e){e.preactCompatNormalized=!0,g(e),p(e.nodeName)&&(e.nodeName=d(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!Q||"string"!==n&&"number"!==n||(e.attributes.ref=b(t,Q)),_(e),e}function v(e,t){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];if(!y(e))return e;var o=e.attributes||e.props,i=Object(D.c)(e.nodeName||e.type,o,e.children||o&&o.children),a=[i,t];return n&&n.length?a.push(n):t&&t.children&&a.push(t.children),m(D.b.apply(void 0,a))}function y(e){return e&&(e instanceof Z||e.$$typeof===z)}function b(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function _(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|rad/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=S([n[i],n[r.onchange]]),delete n[r.onchange])}}}function g(e){var t=e.attributes||(e.attributes={});re.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",re)}function C(e,t){for(var n=arguments,r=1,o=void 0;r<arguments.length;r++)if(o=n[r])for(var i in o)o.hasOwnProperty(i)&&(e[i]=o[i]);return e}function x(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function N(e){return e&&e.base||e}function P(){}function w(e){function t(e,t){T(this),A.call(this,e,t,q),j.call(this,e,t)}return e=C({constructor:t},e),e.mixins&&k(e,O(e.mixins)),e.statics&&C(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),P.prototype=A.prototype,t.prototype=C(new P,e),t.displayName=e.displayName||"Component",t}function O(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function k(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=S(t[n].concat(e[n]||X),"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n))}function T(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||H.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function E(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function S(e,t){return function(){for(var n,r=arguments,o=this,i=0;i<e.length;i++){var a=E(o,e[i],r);if(t&&null!=a){n||(n={});for(var u in a)a.hasOwnProperty(u)&&(n[u]=a[u])}else void 0!==a&&(n=a)}return n}}function j(e,t){R.call(this,e,t),this.componentWillReceiveProps=S([R,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=S([R,M,this.render||"render",U])}function R(e,t){if(e){var n=e.children;if(n&&Array.isArray(n)&&1===n.length&&("string"==typeof n[0]||"function"==typeof n[0]||n[0]instanceof Z)&&(e.children=n[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),G){var r="function"==typeof this?this:this.constructor,o=this.propTypes||r.propTypes,i=this.displayName||r.name;o&&L.a.checkPropTypes(o,e,"prop",i)}}}function M(e){Q=this}function U(){Q===this&&(Q=null)}function A(e,t,n){D.a.call(this,e,t),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},n!==q&&j.call(this,e,t)}function B(e,t){A.call(this,e,t)}n.d(t,"version",function(){return W}),n.d(t,"DOM",function(){return te}),n.d(t,"Children",function(){return ee}),n.d(t,"render",function(){return a}),n.d(t,"createClass",function(){return w}),n.d(t,"createFactory",function(){return c}),n.d(t,"createElement",function(){return h}),n.d(t,"cloneElement",function(){return v}),n.d(t,"isValidElement",function(){return y}),n.d(t,"findDOMNode",function(){return N}),n.d(t,"unmountComponentAtNode",function(){return s}),n.d(t,"Component",function(){return A}),n.d(t,"PureComponent",function(){return B}),n.d(t,"unstable_renderSubtreeIntoContainer",function(){return u}),n.d(t,"__spread",function(){return C});var I=n(4),L=n.n(I),D=n(9);n.d(t,"PropTypes",function(){return L.a});var W="15.1.0",V="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$="undefined"!=typeof Symbol?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",H={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},F=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,q={},G=void 0===e||!Object({NODE_ENV:"production"})||!1,Z=Object(D.c)("a",null).constructor;Z.prototype.$$typeof=z,Z.prototype.preactCompatUpgraded=!1,Z.prototype.preactCompatNormalized=!1,Object.defineProperty(Z.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(Z.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var Y=D.d.event;D.d.event=function(e){return Y&&(e=Y(e)),e.persist=Object,e.nativeEvent=e,e};var J=D.d.vnode;D.d.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes=C({},e.attributes);"function"==typeof t?(!0===t[$]||t.prototype&&"isReactComponent"in t.prototype)&&(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),e.preactCompatNormalized||m(e),o(e)):(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),i(e,n))}J&&J(e)};var K=function(){};K.prototype.getChildContext=function(){return this.props.context},K.prototype.render=function(e){return e.children[0]};for(var Q,X=[],ee={map:function(e,t,n){return null==e?null:(e=ee.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){if(null==e)return null;e=ee.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e&&e.length||0},only:function(e){if(e=ee.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:X.concat(e)}},te={},ne=V.length;ne--;)te[V[ne]]=c(V[ne]);var re={configurable:!0,get:function(){return this.class},set:function(e){this.class=e}};C(A.prototype=new D.a,{constructor:A,isReactComponent:{},replaceState:function(e,t){var n=this;this.setState(e,t);for(var r in n.state)r in e||delete n.state[r]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),P.prototype=A.prototype,B.prototype=new P,B.prototype.isPureReactComponent=!0,B.prototype.shouldComponentUpdate=function(e,t){return x(this.props,e)||x(this.state,t)};var oe={version:W,DOM:te,PropTypes:L.a,Children:ee,render:a,createClass:w,createFactory:c,createElement:h,cloneElement:v,isValidElement:y,findDOMNode:N,unmountComponentAtNode:s,Component:A,PureComponent:B,unstable_renderSubtreeIntoContainer:u,__spread:C};t.default=oe}.call(t,n(3))},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(0);n(10),n(11),n(12),n(13),n(14);var i=n(15);o.render(r.createElement(i.default,{playPauseButtonImage:"img/play-button.svg",nextButtonImage:"img/next-button.svg",previousButtonImage:"img/previous-button.svg",className:"player-controls",showPreviousButton:!0,showPlayPauseButton:!0,showNextButton:!0,onPrevious:function(){alert("previous")},onPlayPause:function(){alert("play/pause")},onNext:function(){alert("next")}}),document.getElementById("root"))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,h=[],m=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";var r=n(6),o=n(7),i=n(8);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,a,u=A;for(a=arguments.length;a-- >2;)U.push(arguments[a]);for(t&&null!=t.children&&(U.length||U.push(t.children),delete t.children);U.length;)if((o=U.pop())&&void 0!==o.pop)for(a=o.length;a--;)U.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?u[u.length-1]+=o:u===A?u=[o]:u.push(o),n=i;var s=new r;return s.nodeName=e,s.children=u,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==M.vnode&&M.vnode(s),s}function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function u(e){!e._dirty&&(e._dirty=!0)&&1==L.push(e)&&(M.debounceRendering||B)(s)}function s(){var e,t=L;for(L=[];e=t.pop();)e._dirty&&T(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&l(e,t.nodeName):n||e._componentConstructor===t.nodeName}function l(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===I.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,v,a):e.removeEventListener(t,v,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)m(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var u=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function m(e,t,n){try{e[t]=n}catch(e){}}function v(e){return this._listeners[e.type](M.event&&M.event(e)||e)}function y(){for(var e;e=D.pop();)M.afterMount&&M.afterMount(e),e.componentDidMount&&e.componentDidMount()}function b(e,t,n,r,o,i){W++||(V=null!=o&&void 0!==o.ownerSVGElement,z=null!=e&&!("__preactattr_"in e));var a=_(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--W||(z=!1,i||y()),a}function _(e,t,n,r,o){var i=e,a=V;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0))),i.__preactattr_=!0,i;var u=t.nodeName;if("function"==typeof u)return E(e,t,n,r);if(V="svg"===u||"foreignObject"!==u&&V,u=String(u),(!e||!l(e,u))&&(i=f(u,V),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0)}var s=i.firstChild,c=i.__preactattr_,p=t.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!z&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&g(i,p,n,r,z||null!=c.dangerouslySetInnerHTML),N(i,t.attributes,c),V=a,i}function g(e,t,n,r,o){var i,a,u,s,l,p=e.childNodes,f=[],h={},m=0,v=0,y=p.length,b=0,g=t?t.length:0;if(0!==y)for(var x=0;x<y;x++){var N=p[x],P=N.__preactattr_,w=g&&P?N._component?N._component.__key:P.key:null;null!=w?(m++,h[w]=N):(P||(void 0!==N.splitText?!o||N.nodeValue.trim():o))&&(f[b++]=N)}if(0!==g)for(var x=0;x<g;x++){s=t[x],l=null;var w=s.key;if(null!=w)m&&void 0!==h[w]&&(l=h[w],h[w]=void 0,m--);else if(!l&&v<b)for(i=v;i<b;i++)if(void 0!==f[i]&&c(a=f[i],s,o)){l=a,f[i]=void 0,i===b-1&&b--,i===v&&v++;break}l=_(l,s,n,r),u=p[x],l&&l!==e&&l!==u&&(null==u?e.appendChild(l):l===u.nextSibling?d(u):e.insertBefore(l,u))}if(m)for(var x in h)void 0!==h[x]&&C(h[x],!1);for(;v<=b;)void 0!==(l=f[b--])&&C(l,!1)}function C(e,t){var n=e._component;n?S(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}function N(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,V);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],V)}function P(e){var t=e.constructor.name;($[t]||($[t]=[])).push(e)}function w(e,t,n){var r,o=$[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),j.call(r,t,n)):(r=new j(t,n),r.constructor=e,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function O(e,t,n){return this.constructor(e,n)}function k(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===M.syncComponentUpdates&&e.base?u(e):T(e,1,o)),e.__ref&&e.__ref(e))}function T(e,t,n,r){if(!e._disable){var o,a,u,s=e.props,c=e.state,l=e.context,f=e.prevProps||s,d=e.prevState||c,h=e.prevContext||l,m=e.base,v=e.nextBase,_=m||v,g=e._component,x=!1;if(m&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,l)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,l),e.props=s,e.state=c,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){o=e.render(s,c,l),e.getChildContext&&(l=i(i({},l),e.getChildContext()));var N,P,O=o&&o.nodeName;if("function"==typeof O){var E=p(o);a=g,a&&a.constructor===O&&E.key==a.__key?k(a,E,1,l,!1):(N=a,e._component=a=w(O,E,l),a.nextBase=a.nextBase||v,a._parentComponent=e,k(a,E,0,l,!1),T(a,1,n,!0)),P=a.base}else u=_,N=g,N&&(u=e._component=null),(_||1===t)&&(u&&(u._component=null),P=b(u,o,l,n||!m,_&&_.parentNode,!0));if(_&&P!==_&&a!==g){var j=_.parentNode;j&&P!==j&&(j.replaceChild(P,_),N||(_._component=null,C(_,!1)))}if(N&&S(N),e.base=P,P&&!r){for(var R=e,U=e;U=U._parentComponent;)(R=U).base=P;P._component=R,P._componentConstructor=R.constructor}}if(!m||n?D.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),M.afterUpdate&&M.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);W||r||y()}}function E(e,t,n,r){for(var o=e&&e._component,i=o,a=e,u=o&&e._componentConstructor===t.nodeName,s=u,c=p(t);o&&!s&&(o=o._parentComponent);)s=o.constructor===t.nodeName;return o&&s&&(!r||o._component)?(k(o,c,3,n,r),e=o.base):(i&&!u&&(S(i),e=a=null),o=w(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),k(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,C(a,!1))),e}function S(e){M.beforeUnmount&&M.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?S(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),P(e),x(t)),e.__ref&&e.__ref(null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function R(e,t,n){return b(n,e,{},!1,t,!1)}n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return j}),n.d(t,"e",function(){return R}),n.d(t,"d",function(){return M});var M={},U=[],A=[],B="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,I=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,L=[],D=[],W=0,V=!1,z=!1,$={};i(j.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),u(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),T(this,2)},render:function(){}})},function(e,t){},function(e,t){e.exports="img/../img/next-button.svg"},function(e,t){e.exports="img/../img/pause-button.svg"},function(e,t){e.exports="img/../img/play-button.svg"},function(e,t){e.exports="img/../img/previous-button.svg"},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(16),a=function(e){function t(t){var n=e.call(this,t)||this;return n.props=t,n}return r(t,e),t.prototype.render=function(){var e=this.props.showPreviousButton?o.createElement(i.default,{src:this.props.previousButtonImage,onClick:this.props.onPrevious,className:"previous-button",alt:"previous button"}):null,t=this.props.showPlayPauseButton?o.createElement(i.default,{src:this.props.playPauseButtonImage,onClick:this.props.onPlayPause,className:"playpause-button",alt:"play/pause button"}):null,n=this.props.showNextButton?o.createElement(i.default,{src:this.props.nextButtonImage,onClick:this.props.onNext,className:"next-button",alt:"next button"}):null;return o.createElement("div",{className:this.props.className},e,t,n)},t}(o.Component);t.default=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(17),a=function(e){function t(t){var n=e.call(this,t)||this;return n.props=t,n}return r(t,e),t.prototype.render=function(){return o.createElement("span",{onClick:this.props.onClick,className:this.props.className,role:"button",tabIndex:this.props.tabIndex?this.props.tabIndex:0,"aria-label":this.props.alt},o.createElement(i.default,{alt:this.props.alt,src:this.props.src}))},t}(o.Component);t.default=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){function t(t){var n=e.call(this,t)||this;return n.props=t,n}return r(t,e),t.prototype.render=function(){return o.createElement("img",{src:this.props.src,alt:this.props.alt,className:this.props.className})},t}(o.Component);t.default=i}]);
//# sourceMappingURL=main.js.map