/*! For license information please see main.5b036eda.js.LICENSE.txt */
(()=>{var e={497(e,t,n){"use strict";var r=n(218);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},173(e,t,n){e.exports=n(497)()},218(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},82(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,A=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case f:case l:case i:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case h:case s:return e;default:return t}}case a:return t}}}function w(e){return k(e)===f}t.AsyncMode=c,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=d,t.Fragment=l,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||k(e)===c},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===l},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===o},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===l||e===f||e===i||e===o||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===y||e.$$typeof===b||e.$$typeof===A||e.$$typeof===v)},t.typeOf=k},86(e,t,n){"use strict";e.exports=n(82)},139(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,l(n)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}};const t={};function n(r){const a=t[r];if(void 0!==a)return a.exports;const l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,n.cw=e=>{var t;return()=>{if(e){var n=e;e=0,t={exports:{}},n.call(t.exports,t,t.exports)}return t.exports}},(()=>{const e=Object.getPrototypeOf;let t;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}const l=Object.create(null);n.r(l);const o={};t||=[null,e({}),e([]),e(e)];for(var i=2&a&&r;("object"==typeof i||"function"==typeof i)&&!~t.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(l,o),l}})(),n.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var a=t[r++],l=t[r++],o=0===l?{enumerable:!0,value:t[r++]}:{enumerable:!0,get:l};n.o(e,a)||Object.defineProperty(e,a,o)}else for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".6e365cdf.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e={},t="tkhang1999.github.io:";n.l=(r,a,l,o)=>{if(e[r])return void e[r].push(a);let i,s;if(void 0!==l){const e=document.getElementsByTagName("script");for(var u=0;u<e.length;u++){const n=e[u];if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+l){i=n;break}}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+l),i.src=r),e[r]=[a];const c=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);const a=e[r];if(delete e[r],i.parentNode?.removeChild(i),a?.forEach(e=>e(n)),t)return t(n)},f=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),s&&document.head.appendChild(i)}})(),n.r=e=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{const e={792:0};n.f.j=(t,r)=>{let a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{const l=new Promise((n,r)=>a=e[t]=[n,r]);r.push(a[2]=l);const o=new Error,i=r=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){const e=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",o.name="ChunkLoadError",o.type=e,o.request=n,o.event=r,a[1](o)}};n.l(n.p+n.u(t),i,"chunk-"+t,t)}};const t=(t,r)=>{let[a,l,o]=r;var i,s,u=0;if(a.some(t=>0!==e[t])){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(o)o(n)}for(t&&t(r);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0},r=globalThis.webpackChunktkhang1999_github_io||=[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n.cw(function(e,t){var n=i(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function s(e){return n.isMemo(e)?l:o[e.$$typeof]||r}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=l;var u=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var l=p(n);l&&l!==m&&e(t,l,r)}var o=c(n);f&&(o=o.concat(f(n)));for(var i=s(t),h=s(n),g=0;g<o.length;++g){var v=o[g];if(!a[v]&&(!r||!r[v])&&(!h||!h[v])&&(!i||!i[v])){var y=d(n,v);try{u(t,v,y)}catch(b){}}}}return t}}),t=n.cw(function(e,t){var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case f:case h:case m:case s:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return v(e)===l}}),r=n.cw(function(e,n){e.exports=t()}),a=n.cw(function(e,t){var n=m(),r=v();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,o={};function i(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(o[e]=t,e=0;e<t.length;e++)l.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},p={};function h(e,t,n,r,a,l,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function A(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!c.call(p,e)||!c.call(d,e)&&(f.test(e)?p[e]=!0:(d[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(y,b);g[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(y,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(y,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var k=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),x=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),j=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var _=Symbol.iterator;function F(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=_&&e[_]||e["@@iterator"])?e:null}var M,R=Object.assign;function J(e){if(void 0===M)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var B=!1;function V(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),l=r.stack.split("\n"),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(1!==o||1!==i)do{if(o--,0>--i||a[o]!==l[i]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=i);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?J(e):""}function D(e){switch(e.tag){case 5:return J(e.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case C:return"Fragment";case x:return"Portal";case E:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case N:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case L:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function X(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function H(e){e._valueTracker||(e._valueTracker=function(e){var t=Q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Z(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=X(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function K(e,t){null!=(t=t.checked)&&A(e,"checked",t,!1)}function $(e,t){K(e,t);var n=X(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,n):t.hasOwnProperty("defaultValue")&&te(e,t.type,X(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function te(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function re(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+X(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ae(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function le(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(ne(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:X(n)}}function oe(e,t){var n=X(t.value),r=X(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,fe,de=(fe=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return fe(e,t)})}:fe);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||me.hasOwnProperty(e)&&me[e]?(""+t).trim():t+"px"}function ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(me).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),me[t]=me[e]})});var ye=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function Ae(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,Ce=null,Se=null;function Ee(e){if(e=Aa(e)){if("function"!==typeof xe)throw Error(a(280));var t=e.stateNode;t&&(t=wa(t),xe(e.stateNode,e.type,t))}}function Ne(e){Ce?Se?Se.push(e):Se=[e]:Ce=e}function je(){if(Ce){var e=Ce,t=Se;if(Se=Ce=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function ze(){}var Ie=!1;function Le(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return Pe(e,t,n)}finally{Ie=!1,(null!==Ce||null!==Se)&&(ze(),je())}}function Te(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Oe=!1;if(u)try{var _e={};Object.defineProperty(_e,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch(fe){Oe=!1}function Fe(e,t,n,r,a,l,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Me=!1,Re=null,Je=!1,Be=null,Ve={onError:function(e){Me=!0,Re=e}};function De(e,t,n,r,a,l,o,i,s){Me=!1,Re=null,Fe.apply(Ve,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Xe(e){if(Ue(e)!==e)throw Error(a(188))}function Qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(null===l)break;var o=l.alternate;if(null===o){if(null!==(r=l.return)){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xe(l),e;if(o===r)return Xe(l),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ze=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,Ge=r.unstable_shouldYield,qe=r.unstable_requestPaint,Ke=r.unstable_now,$e=r.unstable_getCurrentPriorityLevel,et=r.unstable_ImmediatePriority,tt=r.unstable_UserBlockingPriority,nt=r.unstable_NormalPriority,rt=r.unstable_LowPriority,at=r.unstable_IdlePriority,lt=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/ut|0)|0},st=Math.log,ut=Math.LN2;var ct=64,ft=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=268435455&n;if(0!==o){var i=o&~a;0!==i?r=dt(i):0!==(l&=o)&&(r=dt(l))}else 0!==(o=n&~a)?r=dt(o):0!==l&&(r=dt(l));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(l=t&-t)||16===a&&0!==(4194240&l)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function mt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function vt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var At=0;function kt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,xt,Ct,St,Et,Nt=!1,jt=[],Pt=null,zt=null,It=null,Lt=new Map,Tt=new Map,Ot=[],_t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ft(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Lt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function Mt(e,t,n,r,a,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},null!==t&&(null!==(t=Aa(t))&&xt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Rt(e){var t=ba(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,function(){Ct(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Jt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Aa(n))&&xt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ke=r,n.target.dispatchEvent(r),ke=null,t.shift()}return!0}function Bt(e,t,n){Jt(e)&&n.delete(t)}function Vt(){Nt=!1,null!==Pt&&Jt(Pt)&&(Pt=null),null!==zt&&Jt(zt)&&(zt=null),null!==It&&Jt(It)&&(It=null),Lt.forEach(Bt),Tt.forEach(Bt)}function Dt(e,t){e.blockedOn===t&&(e.blockedOn=null,Nt||(Nt=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Vt)))}function Ut(e){function t(t){return Dt(t,e)}if(0<jt.length){Dt(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Dt(Pt,e),null!==zt&&Dt(zt,e),null!==It&&Dt(It,e),Lt.forEach(t),Tt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Rt(n),null===n.blockedOn&&Ot.shift()}var Wt=k.ReactCurrentBatchConfig,Xt=!0;function Qt(e,t,n,r){var a=At,l=Wt.transition;Wt.transition=null;try{At=1,Zt(e,t,n,r)}finally{At=a,Wt.transition=l}}function Ht(e,t,n,r){var a=At,l=Wt.transition;Wt.transition=null;try{At=4,Zt(e,t,n,r)}finally{At=a,Wt.transition=l}}function Zt(e,t,n,r){if(Xt){var a=Gt(e,t,n,r);if(null===a)Xr(e,t,r,Yt,n),Ft(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Mt(Pt,e,t,n,r,a),!0;case"dragenter":return zt=Mt(zt,e,t,n,r,a),!0;case"mouseover":return It=Mt(It,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Lt.set(l,Mt(Lt.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Tt.set(l,Mt(Tt.get(l)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ft(e,r),4&t&&-1<_t.indexOf(e)){for(;null!==a;){var l=Aa(a);if(null!==l&&wt(l),null===(l=Gt(e,t,n,r))&&Xr(e,t,r,Yt,n),l===a)break;a=l}null!==a&&r.stopPropagation()}else Xr(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=ba(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case et:return 1;case tt:return 4;case nt:case rt:return 16;case at:return 536870912;default:return 16}default:return 16}}var Kt=null,$t=null,en=null;function tn(){if(en)return en;var e,t,n=$t,r=n.length,a="value"in Kt?Kt.value:Kt.textContent,l=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[l-t];t++);return en=a.slice(e,1<t?1-t:void 0)}function nn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rn(){return!0}function an(){return!1}function ln(e){function t(t,n,r,a,l){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?rn:an,this.isPropagationStopped=an,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rn)},persist:function(){},isPersistent:rn}),t}var on,sn,un,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fn=ln(cn),dn=R({},cn,{view:0,detail:0}),pn=ln(dn),mn=R({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&"mousemove"===e.type?(on=e.screenX-un.screenX,sn=e.screenY-un.screenY):sn=on=0,un=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=ln(mn),gn=ln(R({},mn,{dataTransfer:0})),vn=ln(R({},dn,{relatedTarget:0})),yn=ln(R({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=R({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),An=ln(bn),kn=ln(R({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Cn[e])&&!!t[e]}function En(){return Sn}var Nn=R({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?nn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=ln(Nn),Pn=ln(R({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=ln(R({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),In=ln(R({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ln=R({},mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tn=ln(Ln),On=[9,13,27,32],_n=u&&"CompositionEvent"in window,Fn=null;u&&"documentMode"in document&&(Fn=document.documentMode);var Mn=u&&"TextEvent"in window&&!Fn,Rn=u&&(!_n||Fn&&8<Fn&&11>=Fn),Jn=String.fromCharCode(32),Bn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Qn(e,t,n,r){Ne(r),0<(t=Hr(t,"onChange")).length&&(n=new fn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Zn=null;function Yn(e){Jr(e,0)}function Gn(e){if(Z(ka(e)))return e}function qn(e,t){if("change"===e)return t}var Kn=!1;if(u){var $n;if(u){var er="oninput"in document;if(!er){var tr=document.createElement("div");tr.setAttribute("oninput","return;"),er="function"===typeof tr.oninput}$n=er}else $n=!1;Kn=$n&&(!document.documentMode||9<document.documentMode)}function nr(){Hn&&(Hn.detachEvent("onpropertychange",rr),Zn=Hn=null)}function rr(e){if("value"===e.propertyName&&Gn(Zn)){var t=[];Qn(t,Zn,e,we(e)),Le(Yn,t)}}function ar(e,t,n){"focusin"===e?(nr(),Zn=n,(Hn=t).attachEvent("onpropertychange",rr)):"focusout"===e&&nr()}function lr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Zn)}function or(e,t){if("click"===e)return Gn(t)}function ir(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ur(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!c.call(t,a)||!sr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&mr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=void 0===r.end?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=fr(n,l);var o=fr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=u&&"documentMode"in document&&11>=document.documentMode,vr=null,yr=null,br=null,Ar=!1;function kr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Ar||null==vr||vr!==Y(r)||("selectionStart"in(r=vr)&&mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&ur(br,r)||(br=r,0<(r=Hr(yr,"onSelect")).length&&(t=new fn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Cr={},Sr={};function Er(e){if(Cr[e])return Cr[e];if(!xr[e])return e;var t,n=xr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return Cr[e]=n[t];return e}u&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);var Nr=Er("animationend"),jr=Er("animationiteration"),Pr=Er("animationstart"),zr=Er("transitionend"),Ir=new Map,Lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Ir.set(e,t),i(t,[e])}for(var Or=0;Or<Lr.length;Or++){var _r=Lr[Or];Tr(_r.toLowerCase(),"on"+(_r[0].toUpperCase()+_r.slice(1)))}Tr(Nr,"onAnimationEnd"),Tr(jr,"onAnimationIteration"),Tr(Pr,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(zr,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Rr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,l,o,i,s,u){if(De.apply(this,arguments),Me){if(!Me)throw Error(a(198));var c=Re;Me=!1,Re=null,Je||(Je=!0,Be=c)}}(r,t,void 0,e),e.currentTarget=null}function Jr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==l&&a.isPropagationStopped())break e;Rr(a,i,u),l=s}else for(o=0;o<r.length;o++){if(s=(i=r[o]).instance,u=i.currentTarget,i=i.listener,s!==l&&a.isPropagationStopped())break e;Rr(a,i,u),l=s}}}if(Je)throw e=Be,Je=!1,Be=null,e}function Br(e,t){var n=t[ga];void 0===n&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Dr]){e[Dr]=!0,l.forEach(function(t){"selectionchange"!==t&&(Mr.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Dr]||(t[Dr]=!0,Vr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(qt(t)){case 1:var a=Qt;break;case 4:a=Ht;break;default:a=Zt}n=a.bind(null,t,n,e),a=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Xr(e,t,n,r,a){var l=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var i=r.stateNode.containerInfo;if(i===a||8===i.nodeType&&i.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==i;){if(null===(o=ba(i)))return;if(5===(s=o.tag)||6===s){r=l=o;continue e}i=i.parentNode}}r=r.return}Le(function(){var r=l,a=we(n),o=[];e:{var i=Ir.get(e);if(void 0!==i){var s=fn,u=e;switch(e){case"keypress":if(0===nn(n))break e;case"keydown":case"keyup":s=jn;break;case"focusin":u="focus",s=vn;break;case"focusout":u="blur",s=vn;break;case"beforeblur":case"afterblur":s=vn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case Nr:case jr:case Pr:s=yn;break;case zr:s=In;break;case"scroll":s=pn;break;case"wheel":s=Tn;break;case"copy":case"cut":case"paste":s=An;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),f=!c&&"scroll"===e,d=c?null!==i?i+"Capture":null:i;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==d&&(null!=(h=Te(m,d))&&c.push(Qr(m,h,p)))),f)break;m=m.return}0<c.length&&(i=new s(i,u,null,n,a),o.push({event:i,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===ke||!(u=n.relatedTarget||n.fromElement)||!ba(u)&&!u[ha])&&(s||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ba(u):null)&&(u!==(f=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,h="onMouseLeave",d="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",d="onPointerEnter",m="pointer"),f=null==s?i:ka(s),p=null==u?i:ka(u),(i=new c(h,m+"leave",s,n,a)).target=f,i.relatedTarget=p,h=null,ba(a)===r&&((c=new c(d,m+"enter",u,n,a)).target=p,c.relatedTarget=f,h=c),f=h,s&&u)e:{for(d=u,m=0,p=c=s;p;p=Zr(p))m++;for(p=0,h=d;h;h=Zr(h))p++;for(;0<m-p;)c=Zr(c),m--;for(;0<p-m;)d=Zr(d),p--;for(;m--;){if(c===d||null!==d&&c===d.alternate)break e;c=Zr(c),d=Zr(d)}c=null}else c=null;null!==s&&Yr(o,i,s,c,!1),null!==u&&null!==f&&Yr(o,f,u,c,!0)}if("select"===(s=(i=r?ka(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===s&&"file"===i.type)var g=qn;else if(Xn(i))if(Kn)g=ir;else{g=lr;var v=ar}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(g=or);switch(g&&(g=g(e,r))?Qn(o,g,n,a):(v&&v(e,i,r),"focusout"===e&&(v=i._wrapperState)&&v.controlled&&"number"===i.type&&te(i,"number",i.value)),v=r?ka(r):window,e){case"focusin":(Xn(v)||"true"===v.contentEditable)&&(vr=v,yr=r,br=null);break;case"focusout":br=yr=vr=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,kr(o,n,a);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":kr(o,n,a)}var y;if(_n)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Vn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Rn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(y=tn()):($t="value"in(Kt=a)?Kt.value:Kt.textContent,Un=!0)),0<(v=Hr(r,b)).length&&(b=new kn(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=Dn(n))&&(b.data=y))),(y=Mn?function(e,t){switch(e){case"compositionend":return Dn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Jn);case"textInput":return(e=t.data)===Jn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!_n&&Vn(e,t)?(e=tn(),en=$t=Kt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Hr(r,"onBeforeInput")).length&&(a=new kn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Jr(o,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,l=a.stateNode;5===a.tag&&null!==l&&(a=l,null!=(l=Te(e,n))&&r.unshift(Qr(e,l,a)),null!=(l=Te(e,t))&&r.push(Qr(e,l,a))),e=e.return}return r}function Zr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var l=t._reactName,o=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(null!==s&&s===r)break;5===i.tag&&null!==u&&(i=u,a?null!=(s=Te(n,l))&&o.unshift(Qr(n,s,i)):a||null!=(s=Te(n,l))&&o.push(Qr(n,s,i))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Kr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function $r(e,t,n){if(t=Kr(t),Kr(e)!==t&&n)throw Error(a(425))}function ea(){}var ta=null,na=null;function ra(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var aa="function"===typeof setTimeout?setTimeout:void 0,la="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(sa)}:aa;function sa(e){setTimeout(function(){throw e})}function ua(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function fa(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,ma="__reactProps$"+da,ha="__reactContainer$"+da,ga="__reactEvents$"+da,va="__reactListeners$"+da,ya="__reactHandles$"+da;function ba(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=fa(e);null!==e;){if(n=e[pa])return n;e=fa(e)}return t}n=(e=n).parentNode}return null}function Aa(e){return!(e=e[pa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ka(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wa(e){return e[ma]||null}var xa=[],Ca=-1;function Sa(e){return{current:e}}function Ea(e){0>Ca||(e.current=xa[Ca],xa[Ca]=null,Ca--)}function Na(e,t){Ca++,xa[Ca]=e.current,e.current=t}var ja={},Pa=Sa(ja),za=Sa(!1),Ia=ja;function La(e,t){var n=e.type.contextTypes;if(!n)return ja;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,l={};for(a in n)l[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ta(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oa(){Ea(za),Ea(Pa)}function _a(e,t,n){if(Pa.current!==ja)throw Error(a(168));Na(Pa,t),Na(za,n)}function Fa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var l in r=r.getChildContext())if(!(l in t))throw Error(a(108,W(e)||"Unknown",l));return R({},n,r)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ja,Ia=Pa.current,Na(Pa,e),Na(za,za.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Fa(e,t,Ia),r.__reactInternalMemoizedMergedChildContext=e,Ea(za),Ea(Pa),Na(Pa,e)):Ea(za),Na(za,n)}var Ja=null,Ba=!1,Va=!1;function Da(e){null===Ja?Ja=[e]:Ja.push(e)}function Ua(){if(!Va&&null!==Ja){Va=!0;var e=0,t=At;try{var n=Ja;for(At=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ja=null,Ba=!1}catch(a){throw null!==Ja&&(Ja=Ja.slice(e+1)),Ze(et,Ua),a}finally{At=t,Va=!1}}return null}var Wa=[],Xa=0,Qa=null,Ha=0,Za=[],Ya=0,Ga=null,qa=1,Ka="";function $a(e,t){Wa[Xa++]=Ha,Wa[Xa++]=Qa,Qa=e,Ha=t}function el(e,t,n){Za[Ya++]=qa,Za[Ya++]=Ka,Za[Ya++]=Ga,Ga=e;var r=qa;e=Ka;var a=32-it(r)-1;r&=~(1<<a),n+=1;var l=32-it(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qa=1<<32-it(t)+a|n<<a|r,Ka=l+e}else qa=1<<l|n<<a|r,Ka=e}function tl(e){null!==e.return&&($a(e,1),el(e,1,0))}function nl(e){for(;e===Qa;)Qa=Wa[--Xa],Wa[Xa]=null,Ha=Wa[--Xa],Wa[Xa]=null;for(;e===Ga;)Ga=Za[--Ya],Za[Ya]=null,Ka=Za[--Ya],Za[Ya]=null,qa=Za[--Ya],Za[Ya]=null}var rl=null,al=null,ll=!1,ol=null;function il(e,t){var n=Lu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sl(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,rl=e,al=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,rl=e,al=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:qa,overflow:Ka}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Lu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,rl=e,al=null,!0);default:return!1}}function ul(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function cl(e){if(ll){var t=al;if(t){var n=t;if(!sl(e,t)){if(ul(e))throw Error(a(418));t=ca(n.nextSibling);var r=rl;t&&sl(e,t)?il(r,n):(e.flags=-4097&e.flags|2,ll=!1,rl=e)}}else{if(ul(e))throw Error(a(418));e.flags=-4097&e.flags|2,ll=!1,rl=e}}}function fl(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;rl=e}function dl(e){if(e!==rl)return!1;if(!ll)return fl(e),ll=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ra(e.type,e.memoizedProps)),t&&(t=al)){if(ul(e))throw pl(),Error(a(418));for(;t;)il(e,t),t=ca(t.nextSibling)}if(fl(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){al=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}al=null}}else al=rl?ca(e.stateNode.nextSibling):null;return!0}function pl(){for(var e=al;e;)e=ca(e.nextSibling)}function ml(){al=rl=null,ll=!1}function hl(e){null===ol?ol=[e]:ol.push(e)}var gl=k.ReactCurrentBatchConfig;function vl(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=l.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function yl(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bl(e){return(0,e._init)(e._payload)}function Al(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function l(e,t){return(e=Ou(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ru(n,e.mode,r)).return=e,t):((t=l(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===C?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===T&&bl(a)===t.type)?((r=l(t,n.props)).ref=vl(e,t,n),r.return=e,r):((r=_u(n.type,n.key,n.props,null,e.mode,r)).ref=vl(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ju(n,e.mode,r)).return=e,t):((t=l(t,n.children||[])).return=e,t)}function f(e,t,n,r,a){return null===t||7!==t.tag?((t=Fu(n,e.mode,r,a)).return=e,t):((t=l(t,n)).return=e,t)}function d(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ru(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=_u(t.type,t.key,t.props,null,e.mode,n)).ref=vl(e,null,t),n.return=e,n;case x:return(t=Ju(t,e.mode,n)).return=e,t;case T:return d(e,(0,t._init)(t._payload),n)}if(ne(t)||F(t))return(t=Fu(t,e.mode,n,null)).return=e,t;yl(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case x:return n.key===a?c(e,t,n,r):null;case T:return p(e,t,(a=n._init)(n._payload),r)}if(ne(n)||F(n))return null!==a?null:f(e,t,n,r,null);yl(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case T:return m(e,t,n,(0,r._init)(r._payload),a)}if(ne(r)||F(r))return f(t,e=e.get(n)||null,r,a,null);yl(t,r)}return null}function h(a,l,i,s){for(var u=null,c=null,f=l,h=l=0,g=null;null!==f&&h<i.length;h++){f.index>h?(g=f,f=null):g=f.sibling;var v=p(a,f,i[h],s);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&t(a,f),l=o(v,l,h),null===c?u=v:c.sibling=v,c=v,f=g}if(h===i.length)return n(a,f),ll&&$a(a,h),u;if(null===f){for(;h<i.length;h++)null!==(f=d(a,i[h],s))&&(l=o(f,l,h),null===c?u=f:c.sibling=f,c=f);return ll&&$a(a,h),u}for(f=r(a,f);h<i.length;h++)null!==(g=m(f,a,h,i[h],s))&&(e&&null!==g.alternate&&f.delete(null===g.key?h:g.key),l=o(g,l,h),null===c?u=g:c.sibling=g,c=g);return e&&f.forEach(function(e){return t(a,e)}),ll&&$a(a,h),u}function g(l,i,s,u){var c=F(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var f=c=null,h=i,g=i=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(l,h,y.value,u);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(l,h),i=o(b,i,g),null===f?c=b:f.sibling=b,f=b,h=v}if(y.done)return n(l,h),ll&&$a(l,g),c;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=d(l,y.value,u))&&(i=o(y,i,g),null===f?c=y:f.sibling=y,f=y);return ll&&$a(l,g),c}for(h=r(l,h);!y.done;g++,y=s.next())null!==(y=m(h,l,g,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),i=o(y,i,g),null===f?c=y:f.sibling=y,f=y);return e&&h.forEach(function(e){return t(l,e)}),ll&&$a(l,g),c}return function e(r,a,o,s){if("object"===typeof o&&null!==o&&o.type===C&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=a;null!==c;){if(c.key===u){if((u=o.type)===C){if(7===c.tag){n(r,c.sibling),(a=l(c,o.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===T&&bl(u)===c.type){n(r,c.sibling),(a=l(c,o.props)).ref=vl(r,c,o),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===C?((a=Fu(o.props.children,r.mode,s,o.key)).return=r,r=a):((s=_u(o.type,o.key,o.props,null,r.mode,s)).ref=vl(r,a,o),s.return=r,r=s)}return i(r);case x:e:{for(c=o.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=l(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Ju(o,r.mode,s)).return=r,r=a}return i(r);case T:return e(r,a,(c=o._init)(o._payload),s)}if(ne(o))return h(r,a,o,s);if(F(o))return g(r,a,o,s);yl(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=l(a,o)).return=r,r=a):(n(r,a),(a=Ru(o,r.mode,s)).return=r,r=a),i(r)):n(r,a)}}var kl=Al(!0),wl=Al(!1),xl=Sa(null),Cl=null,Sl=null,El=null;function Nl(){El=Sl=Cl=null}function jl(e){var t=xl.current;Ea(xl),e._currentValue=t}function Pl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zl(e,t){Cl=e,El=Sl=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Ai=!0),e.firstContext=null)}function Il(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},null===Sl){if(null===Cl)throw Error(a(308));Sl=e,Cl.dependencies={lanes:0,firstContext:e}}else Sl=Sl.next=e;return t}var Ll=null;function Tl(e){null===Ll?Ll=[e]:Ll.push(e)}function Ol(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Tl(t)):(n.next=a.next,a.next=n),t.interleaved=n,_l(e,r)}function _l(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Fl=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jl(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bl(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,_l(e,n)}return null===(a=r.interleaved)?(t.next=t,Tl(r)):(t.next=a.next,a.next=t),r.interleaved=t,_l(e,n)}function Vl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Dl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,l=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===l?a=l=o:l=l.next=o,n=n.next}while(null!==n);null===l?a=l=t:l=l.next=t}else a=l=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ul(e,t,n,r){var a=e.updateQueue;Fl=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,u=s.next;s.next=null,null===o?l=u:o.next=u,o=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==l){var f=a.baseState;for(o=0,c=u=s=null,i=l;;){var d=i.lane,p=i.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var m=e,h=i;switch(d=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(d="function"===typeof(m=h.payload)?m.call(p,f,d):m)||void 0===d)break e;f=R({},f,d);break e;case 2:Fl=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[i]:d.push(i))}else p={eventTime:p,lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=p,s=f):c=c.next=p,o|=d;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(d=i).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(s=f),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===l&&(a.shared.lanes=0);Ms|=o,e.lanes=o,e.memoizedState=f}}function Wl(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(null!==l){if(r.callback=null,r=n,"function"!==typeof l)throw Error(a(191,l));l.call(r)}}}var Xl={},Ql=Sa(Xl),Hl=Sa(Xl),Zl=Sa(Xl);function Yl(e){if(e===Xl)throw Error(a(174));return e}function Gl(e,t){switch(Na(Zl,t),Na(Hl,e),Na(Ql,Xl),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Ql),Na(Ql,t)}function ql(){Ea(Ql),Ea(Hl),Ea(Zl)}function Kl(e){Yl(Zl.current);var t=Yl(Ql.current),n=ue(t,e.type);t!==n&&(Na(Hl,e),Na(Ql,n))}function $l(e){Hl.current===e&&(Ea(Ql),Ea(Hl))}var eo=Sa(0);function to(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var ao=k.ReactCurrentDispatcher,lo=k.ReactCurrentBatchConfig,oo=0,io=null,so=null,uo=null,co=!1,fo=!1,po=0,mo=0;function ho(){throw Error(a(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,l,o){if(oo=o,io=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=null===e||null===e.memoizedState?ei:ti,e=n(r,l),fo){o=0;do{if(fo=!1,po=0,25<=o)throw Error(a(301));o+=1,uo=so=null,t.updateQueue=null,ao.current=ni,e=n(r,l)}while(fo)}if(ao.current=$o,t=null!==so&&null!==so.next,oo=0,uo=so=io=null,co=!1,t)throw Error(a(300));return e}function yo(){var e=0!==po;return po=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===uo?io.memoizedState=uo=e:uo=uo.next=e,uo}function Ao(){if(null===so){var e=io.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===uo?io.memoizedState:uo.next;if(null!==t)uo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===uo?io.memoizedState=uo=e:uo=uo.next=e}return uo}function ko(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=Ao(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,l=r.baseQueue,o=n.pending;if(null!==o){if(null!==l){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(null!==l){o=l.next,r=r.baseState;var s=i=null,u=null,c=o;do{var f=c.lane;if((oo&f)===f)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=d,i=r):u=u.next=d,io.lanes|=f,Ms|=f}c=c.next}while(null!==c&&c!==o);null===u?i=r:u.next=s,sr(r,t.memoizedState)||(Ai=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){l=e;do{o=l.lane,io.lanes|=o,Ms|=o,l=l.next}while(l!==e)}else null===l&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=Ao(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(null!==l){n.pending=null;var i=l=l.next;do{o=e(o,i.action),i=i.next}while(i!==l);sr(o,t.memoizedState)||(Ai=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Co(){}function So(e,t){var n=io,r=Ao(),l=t(),o=!sr(r.memoizedState,l);if(o&&(r.memoizedState=l,Ai=!0),r=r.queue,Mo(jo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==uo&&1&uo.memoizedState.tag){if(n.flags|=2048,Lo(9,No.bind(null,n,r,l,t),void 0,null),null===zs)throw Error(a(349));0!==(30&oo)||Eo(n,t,l)}return l}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=io.updateQueue)?(t={lastEffect:null,stores:null},io.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function No(e,t,n,r){t.value=n,t.getSnapshot=r,Po(t)&&zo(e)}function jo(e,t,n){return n(function(){Po(t)&&zo(e)})}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function zo(e){var t=_l(e,1);null!==t&&ru(t,e,1,-1)}function Io(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,io,e),[t.memoizedState,e]}function Lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=io.updateQueue)?(t={lastEffect:null,stores:null},io.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function To(){return Ao().memoizedState}function Oo(e,t,n,r){var a=bo();io.flags|=e,a.memoizedState=Lo(1|t,n,void 0,void 0===r?null:r)}function _o(e,t,n,r){var a=Ao();r=void 0===r?null:r;var l=void 0;if(null!==so){var o=so.memoizedState;if(l=o.destroy,null!==r&&go(r,o.deps))return void(a.memoizedState=Lo(t,n,l,r))}io.flags|=e,a.memoizedState=Lo(1|t,n,l,r)}function Fo(e,t){return Oo(8390656,8,e,t)}function Mo(e,t){return _o(2048,8,e,t)}function Ro(e,t){return _o(4,2,e,t)}function Jo(e,t){return _o(4,4,e,t)}function Bo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,_o(4,4,Bo.bind(null,t,e),n)}function Do(){}function Uo(e,t){var n=Ao();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=Ao();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xo(e,t,n){return 0===(21&oo)?(e.baseState&&(e.baseState=!1,Ai=!0),e.memoizedState=n):(sr(n,t)||(n=gt(),io.lanes|=n,Ms|=n,e.baseState=!0),t)}function Qo(e,t){var n=At;At=0!==n&&4>n?n:4,e(!0);var r=lo.transition;lo.transition={};try{e(!1),t()}finally{At=n,lo.transition=r}}function Ho(){return Ao().memoizedState}function Zo(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))qo(t,n);else if(null!==(n=Ol(e,t,n,r))){ru(n,e,r,tu()),Ko(n,t,r)}}function Yo(e,t,n){var r=nu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))qo(t,a);else{var l=e.alternate;if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var o=t.lastRenderedState,i=l(o,n);if(a.hasEagerState=!0,a.eagerState=i,sr(i,o)){var s=t.interleaved;return null===s?(a.next=a,Tl(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Ol(e,t,a,r))&&(ru(n,e,r,a=tu()),Ko(n,t,r))}}function Go(e){var t=e.alternate;return e===io||null!==t&&t===io}function qo(e,t){fo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ko(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var $o={readContext:Il,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},ei={readContext:Il,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Il,useEffect:Fo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4194308,4,Bo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zo.bind(null,io,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:Io,useDebugValue:Do,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=Io(!1),t=e[0];return e=Qo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=io,l=bo();if(ll){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===zs)throw Error(a(349));0!==(30&oo)||Eo(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Fo(jo.bind(null,r,o,e),[e]),r.flags|=2048,Lo(9,No.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=zs.identifierPrefix;if(ll){var n=Ka;t=":"+t+"R"+(n=(qa&~(1<<32-it(qa)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=mo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ti={readContext:Il,useCallback:Uo,useContext:Il,useEffect:Mo,useImperativeHandle:Vo,useInsertionEffect:Ro,useLayoutEffect:Jo,useMemo:Wo,useReducer:wo,useRef:To,useState:function(){return wo(ko)},useDebugValue:Do,useDeferredValue:function(e){return Xo(Ao(),so.memoizedState,e)},useTransition:function(){return[wo(ko)[0],Ao().memoizedState]},useMutableSource:Co,useSyncExternalStore:So,useId:Ho,unstable_isNewReconciler:!1},ni={readContext:Il,useCallback:Uo,useContext:Il,useEffect:Mo,useImperativeHandle:Vo,useInsertionEffect:Ro,useLayoutEffect:Jo,useMemo:Wo,useReducer:xo,useRef:To,useState:function(){return xo(ko)},useDebugValue:Do,useDeferredValue:function(e){var t=Ao();return null===so?t.memoizedState=e:Xo(t,so.memoizedState,e)},useTransition:function(){return[xo(ko)[0],Ao().memoizedState]},useMutableSource:Co,useSyncExternalStore:So,useId:Ho,unstable_isNewReconciler:!1};function ri(e,t){if(e&&e.defaultProps){for(var n in t=R({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ai(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:R({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),a=nu(e),l=Jl(r,a);l.payload=t,void 0!==n&&null!==n&&(l.callback=n),null!==(t=Bl(e,l,a))&&(ru(t,e,a,r),Vl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),a=nu(e),l=Jl(r,a);l.tag=1,l.payload=t,void 0!==n&&null!==n&&(l.callback=n),null!==(t=Bl(e,l,a))&&(ru(t,e,a,r),Vl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),a=Jl(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Bl(e,a,r))&&(ru(t,e,r,n),Vl(t,e,r))}};function oi(e,t,n,r,a,l,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,o):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(a,l))}function ii(e,t,n){var r=!1,a=ja,l=t.contextType;return"object"===typeof l&&null!==l?l=Il(l):(a=Ta(t)?Ia:Pa.current,l=(r=null!==(r=t.contextTypes)&&void 0!==r)?La(e,a):ja),t=new t(n,l),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function si(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function ui(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ml(e);var l=t.contextType;"object"===typeof l&&null!==l?a.context=Il(l):(l=Ta(t)?Ia:Pa.current,a.context=La(e,l)),a.state=e.memoizedState,"function"===typeof(l=t.getDerivedStateFromProps)&&(ai(e,t,l,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&li.enqueueReplaceState(a,a.state,null),Ul(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ci(e,t){try{var n="",r=t;do{n+=D(r),r=r.return}while(r);var a=n}catch(l){a="\nError generating stack: "+l.message+"\n"+l.stack}return{value:e,source:t,stack:a,digest:null}}function fi(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function di(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pi="function"===typeof WeakMap?WeakMap:Map;function mi(e,t,n){(n=Jl(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xs||(Xs=!0,Qs=r),di(0,t)},n}function hi(e,t,n){(n=Jl(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){di(0,t)}}var l=e.stateNode;return null!==l&&"function"===typeof l.componentDidCatch&&(n.callback=function(){di(0,t),"function"!==typeof r&&(null===Hs?Hs=new Set([this]):Hs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gi(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pi;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function vi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yi(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Jl(-1,1)).tag=2,Bl(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bi=k.ReactCurrentOwner,Ai=!1;function ki(e,t,n,r){t.child=null===e?wl(t,null,n,r):kl(t,e.child,n,r)}function wi(e,t,n,r,a){n=n.render;var l=t.ref;return zl(t,a),r=vo(e,t,n,r,l,a),n=yo(),null===e||Ai?(ll&&n&&tl(t),t.flags|=1,ki(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xi(e,t,a))}function xi(e,t,n,r,a){if(null===e){var l=n.type;return"function"!==typeof l||Tu(l)||void 0!==l.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=_u(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,Ci(e,t,l,r,a))}if(l=e.child,0===(e.lanes&a)){var o=l.memoizedProps;if((n=null!==(n=n.compare)?n:ur)(o,r)&&e.ref===t.ref)return Xi(e,t,a)}return t.flags|=1,(e=Ou(l,r)).ref=t.ref,e.return=t,t.child=e}function Ci(e,t,n,r,a){if(null!==e){var l=e.memoizedProps;if(ur(l,r)&&e.ref===t.ref){if(Ai=!1,t.pendingProps=r=l,0===(e.lanes&a))return t.lanes=e.lanes,Xi(e,t,a);0!==(131072&e.flags)&&(Ai=!0)}}return Ni(e,t,n,r,a)}function Si(e,t,n){var r=t.pendingProps,a=r.children,l=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Na(Os,Ts),Ts|=n;else{if(0===(1073741824&n))return e=null!==l?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Na(Os,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==l?l.baseLanes:n,Na(Os,Ts),Ts|=r}else null!==l?(r=l.baseLanes|n,t.memoizedState=null):r=n,Na(Os,Ts),Ts|=r;return ki(e,t,a,n),t.child}function Ei(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,a){var l=Ta(n)?Ia:Pa.current;return l=La(t,l),zl(t,a),n=vo(e,t,n,r,l,a),r=yo(),null===e||Ai?(ll&&r&&tl(t),t.flags|=1,ki(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xi(e,t,a))}function ji(e,t,n,r,a){if(Ta(n)){var l=!0;Ma(t)}else l=!1;if(zl(t,a),null===t.stateNode)Wi(e,t),ii(t,n,r),ui(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Il(u):u=La(t,u=Ta(n)?Ia:Pa.current);var c=n.getDerivedStateFromProps,f="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;f||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==r||s!==u)&&si(t,o,r,u),Fl=!1;var d=t.memoizedState;o.state=d,Ul(t,r,o,a),s=t.memoizedState,i!==r||d!==s||za.current||Fl?("function"===typeof c&&(ai(t,n,c,r),s=t.memoizedState),(i=Fl||oi(t,n,i,r,d,s,u))?(f||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Rl(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ri(t.type,i),o.props=u,f=t.pendingProps,d=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Il(s):s=La(t,s=Ta(n)?Ia:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==f||d!==s)&&si(t,o,r,s),Fl=!1,d=t.memoizedState,o.state=d,Ul(t,r,o,a);var m=t.memoizedState;i!==f||d!==m||za.current||Fl?("function"===typeof p&&(ai(t,n,p,r),m=t.memoizedState),(u=Fl||oi(t,n,u,r,d,m,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,l,a)}function Pi(e,t,n,r,a,l){Ei(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Ra(t,n,!1),Xi(e,t,l);r=t.stateNode,bi.current=t;var i=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=kl(t,e.child,null,l),t.child=kl(t,null,i,l)):ki(e,t,i,l),t.memoizedState=r.state,a&&Ra(t,n,!0),t.child}function zi(e){var t=e.stateNode;t.pendingContext?_a(0,t.pendingContext,t.pendingContext!==t.context):t.context&&_a(0,t.context,!1),Gl(e,t.containerInfo)}function Ii(e,t,n,r,a){return ml(),hl(a),t.flags|=256,ki(e,t,n,r),t.child}var Li,Ti,Oi,_i,Fi={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ri(e,t,n){var r,l=t.pendingProps,o=eo.current,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(i=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Na(eo,1&o),null===e)return cl(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=l.children,e=l.fallback,i?(l=t.mode,i=t.child,s={mode:"hidden",children:s},0===(1&l)&&null!==i?(i.childLanes=0,i.pendingProps=s):i=Mu(s,l,0,null),e=Fu(e,l,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mi(n),t.memoizedState=Fi,e):Ji(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,l,o,i){if(n)return 256&t.flags?(t.flags&=-257,Bi(e,t,i,r=fi(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Mu({mode:"visible",children:r.children},l,0,null),(o=Fu(o,l,i,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&kl(t,e.child,null,i),t.child.memoizedState=Mi(i),t.memoizedState=Fi,o);if(0===(1&t.mode))return Bi(e,t,i,null);if("$!"===l.data){if(r=l.nextSibling&&l.nextSibling.dataset)var s=r.dgst;return r=s,Bi(e,t,i,r=fi(o=Error(a(419)),r,void 0))}if(s=0!==(i&e.childLanes),Ai||s){if(null!==(r=zs)){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}0!==(l=0!==(l&(r.suspendedLanes|i))?0:l)&&l!==o.retryLane&&(o.retryLane=l,_l(e,l),ru(r,e,l,-1))}return gu(),Bi(e,t,i,r=fi(Error(a(421))))}return"$?"===l.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,al=ca(l.nextSibling),rl=t,ll=!0,ol=null,null!==e&&(Za[Ya++]=qa,Za[Ya++]=Ka,Za[Ya++]=Ga,qa=e.id,Ka=e.overflow,Ga=t),t=Ji(t,r.children),t.flags|=4096,t)}(e,t,s,l,r,o,n);if(i){i=l.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:l.children};return 0===(1&s)&&t.child!==o?((l=t.child).childLanes=0,l.pendingProps=u,t.deletions=null):(l=Ou(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?i=Ou(r,i):(i=Fu(i,s,n,null)).flags|=2,i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,s=null===(s=e.child.memoizedState)?Mi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Fi,l}return e=(i=e.child).sibling,l=Ou(i,{mode:"visible",children:l.children}),0===(1&t.mode)&&(l.lanes=n),l.return=t,l.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function Ji(e,t){return(t=Mu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bi(e,t,n,r){return null!==r&&hl(r),kl(t,e.child,null,n),(e=Ji(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vi(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pl(e.return,t,n)}function Di(e,t,n,r,a){var l=e.memoizedState;null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Ui(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(ki(e,t,r.children,n),0!==(2&(r=eo.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vi(e,n,t);else if(19===e.tag)Vi(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Na(eo,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===to(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Di(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===to(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Di(t,!0,n,null,l);break;case"together":Di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wi(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ms|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ou(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ou(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Qi(e,t){if(!ll)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Hi(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zi(e,t,n){var r=t.pendingProps;switch(nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hi(t),null;case 1:case 17:return Ta(t.type)&&Oa(),Hi(t),null;case 3:return r=t.stateNode,ql(),Ea(za),Ea(Pa),ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(dl(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ol&&(iu(ol),ol=null))),Ti(e,t),Hi(t),null;case 5:$l(t);var l=Yl(Zl.current);if(n=t.type,null!==e&&null!=t.stateNode)Oi(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Hi(t),null}if(e=Yl(Ql.current),dl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pa]=t,r[ma]=i,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(l=0;l<Fr.length;l++)Br(Fr[l],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":q(r,i),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Br("invalid",r);break;case"textarea":le(r,i),Br("invalid",r)}for(var s in be(n,i),l=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&$r(r.textContent,u,e),l=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&$r(r.textContent,u,e),l=["children",""+u]):o.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Br("scroll",r)}switch(n){case"input":H(r),ee(r,i,!0);break;case"textarea":H(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=ea)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pa]=t,e[ma]=r,Li(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ae(n,r),n){case"dialog":Br("cancel",e),Br("close",e),l=r;break;case"iframe":case"object":case"embed":Br("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fr.length;l++)Br(Fr[l],e);l=r;break;case"source":Br("error",e),l=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),l=r;break;case"details":Br("toggle",e),l=r;break;case"input":q(e,r),l=G(e,r),Br("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=R({},r,{value:void 0}),Br("invalid",e);break;case"textarea":le(e,r),l=ae(e,r),Br("invalid",e)}for(i in be(n,l),u=l)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ve(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(o.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Br("scroll",e):null!=c&&A(e,i,c,s))}switch(n){case"input":H(e),ee(e,r,!1);break;case"textarea":H(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+X(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?re(e,!!r.multiple,i,!1):null!=r.defaultValue&&re(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof l.onClick&&(e.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hi(t),null;case 6:if(e&&null!=t.stateNode)_i(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Yl(Zl.current),Yl(Ql.current),dl(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(i=r.nodeValue!==n)&&null!==(e=rl))switch(e.tag){case 3:$r(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&$r(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return Hi(t),null;case 13:if(Ea(eo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ll&&null!==al&&0!==(1&t.mode)&&0===(128&t.flags))pl(),ml(),t.flags|=98560,i=!1;else if(i=dl(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[pa]=t}else ml(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hi(t),i=!1}else null!==ol&&(iu(ol),ol=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&eo.current)?0===_s&&(_s=3):gu())),null!==t.updateQueue&&(t.flags|=4),Hi(t),null);case 4:return ql(),Ti(e,t),null===e&&Ur(t.stateNode.containerInfo),Hi(t),null;case 10:return jl(t.type._context),Hi(t),null;case 19:if(Ea(eo),null===(i=t.memoizedState))return Hi(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Qi(i,!1);else{if(0!==_s||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=to(e))){for(t.flags|=128,Qi(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Na(eo,1&eo.current|2),t.child}e=e.sibling}null!==i.tail&&Ke()>Us&&(t.flags|=128,r=!0,Qi(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=to(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Qi(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ll)return Hi(t),null}else 2*Ke()-i.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Qi(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ke(),t.sibling=null,n=eo.current,Na(eo,r?1&n|2:1&n),t):(Hi(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ts)&&(Hi(t),6&t.subtreeFlags&&(t.flags|=8192)):Hi(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Yi(e,t){switch(nl(t),t.tag){case 1:return Ta(t.type)&&Oa(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ql(),Ea(za),Ea(Pa),ro(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return $l(t),null;case 13:if(Ea(eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ml()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(eo),null;case 4:return ql(),null;case 10:return jl(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Li=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ti=function(){},Oi=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yl(Ql.current);var l,i=null;switch(n){case"input":a=G(e,a),r=G(e,r),i=[];break;case"select":a=R({},a,{value:void 0}),r=R({},r,{value:void 0}),i=[];break;case"textarea":a=ae(e,a),r=ae(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=ea)}for(c in be(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(o.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(o.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Br("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},_i=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gi=!1,qi=!1,Ki="function"===typeof WeakSet?WeakSet:Set,$i=null;function es(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Su(e,t,r)}else n.current=null}function ts(e,t,n){try{n()}catch(r){Su(e,t,r)}}var ns=!1;function rs(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,void 0!==l&&ts(t,n,l)}a=a.next}while(a!==r)}}function as(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[ma],delete t[ga],delete t[va],delete t[ya])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ss(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=ea));else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var fs=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)ms(e,t,n),n=n.sibling}function ms(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(lt,n)}catch(i){}switch(n.tag){case 5:qi||es(n,t);case 6:var r=fs,a=ds;fs=null,ps(e,t,n),ds=a,null!==(fs=r)&&(ds?(e=fs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):fs.removeChild(n.stateNode));break;case 18:null!==fs&&(ds?(e=fs,n=n.stateNode,8===e.nodeType?ua(e.parentNode,n):1===e.nodeType&&ua(e,n),Ut(e)):ua(fs,n.stateNode));break;case 4:r=fs,a=ds,fs=n.stateNode.containerInfo,ds=!0,ps(e,t,n),fs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!qi&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,void 0!==o&&(0!==(2&l)||0!==(4&l))&&ts(n,t,o),a=a.next}while(a!==r)}ps(e,t,n);break;case 1:if(!qi&&(es(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Su(n,t,i)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(qi=(r=qi)||null!==n.memoizedState,ps(e,t,n),qi=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ki),t.forEach(function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 5:fs=s.stateNode,ds=!1;break e;case 3:case 4:fs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===fs)throw Error(a(160));ms(o,i,l),fs=null,ds=!1;var u=l.alternate;null!==u&&(u.return=null),l.return=null}catch(c){Su(l,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vs(t,e),t=t.sibling}function vs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),ys(e),4&r){try{rs(3,e,e.return),as(3,e)}catch(g){Su(e,e.return,g)}try{rs(5,e,e.return)}catch(g){Su(e,e.return,g)}}break;case 1:gs(t,e),ys(e),512&r&&null!==n&&es(n,n.return);break;case 5:if(gs(t,e),ys(e),512&r&&null!==n&&es(n,n.return),32&e.flags){var l=e.stateNode;try{pe(l,"")}catch(g){Su(e,e.return,g)}}if(4&r&&null!=(l=e.stateNode)){var o=e.memoizedProps,i=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&K(l,o),Ae(s,i);var c=Ae(s,o);for(i=0;i<u.length;i+=2){var f=u[i],d=u[i+1];"style"===f?ve(l,d):"dangerouslySetInnerHTML"===f?de(l,d):"children"===f?pe(l,d):A(l,f,d,c)}switch(s){case"input":$(l,o);break;case"textarea":oe(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?re(l,!!o.multiple,m,!1):p!==!!o.multiple&&(null!=o.defaultValue?re(l,!!o.multiple,o.defaultValue,!0):re(l,!!o.multiple,o.multiple?[]:"",!1))}l[ma]=o}catch(g){Su(e,e.return,g)}}break;case 6:if(gs(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(a(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(g){Su(e,e.return,g)}}break;case 3:if(gs(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Su(e,e.return,g)}break;case 4:default:gs(t,e),ys(e);break;case 13:gs(t,e),ys(e),8192&(l=e.child).flags&&(o=null!==l.memoizedState,l.stateNode.isHidden=o,!o||null!==l.alternate&&null!==l.alternate.memoizedState||(Ds=Ke())),4&r&&hs(e);break;case 22:if(f=null!==n&&null!==n.memoizedState,1&e.mode?(qi=(c=qi)||f,gs(t,e),qi=c):gs(t,e),ys(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!f&&0!==(1&e.mode))for($i=e,f=e.child;null!==f;){for(d=$i=f;null!==$i;){switch(m=(p=$i).child,p.tag){case 0:case 11:case 14:case 15:rs(4,p,p.return);break;case 1:es(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Su(r,n,g)}}break;case 5:es(p,p.return);break;case 22:if(null!==p.memoizedState){ws(d);continue}}null!==m?(m.return=p,$i=m):ws(d)}f=f.sibling}e:for(f=null,d=e;;){if(5===d.tag){if(null===f){f=d;try{l=d.stateNode,c?"function"===typeof(o=l.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=d.stateNode,i=void 0!==(u=d.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ge("display",i))}catch(g){Su(e,e.return,g)}}}else if(6===d.tag){if(null===f)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){Su(e,e.return,g)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gs(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;32&r.flags&&(pe(l,""),r.flags&=-33),cs(e,ss(e),l);break;case 3:case 4:var o=r.stateNode.containerInfo;us(e,ss(e),o);break;default:throw Error(a(161))}}catch(i){Su(e,e.return,i)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){$i=e,As(e,t,n)}function As(e,t,n){for(var r=0!==(1&e.mode);null!==$i;){var a=$i,l=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Gi;if(!o){var i=a.alternate,s=null!==i&&null!==i.memoizedState||qi;i=Gi;var u=qi;if(Gi=o,(qi=s)&&!u)for($i=a;null!==$i;)s=(o=$i).child,22===o.tag&&null!==o.memoizedState?xs(a):null!==s?(s.return=o,$i=s):xs(a);for(;null!==l;)$i=l,As(l,t,n),l=l.sibling;$i=a,Gi=i,qi=u}ks(e)}else 0!==(8772&a.subtreeFlags)&&null!==l?(l.return=a,$i=l):ks(e)}}function ks(e){for(;null!==$i;){var t=$i;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:qi||as(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!qi)if(null===n)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ri(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wl(t,o,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wl(t,i,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var f=c.memoizedState;if(null!==f){var d=f.dehydrated;null!==d&&Ut(d)}}}break;default:throw Error(a(163))}qi||512&t.flags&&ls(t)}catch(p){Su(t,t.return,p)}}if(t===e){$i=null;break}if(null!==(n=t.sibling)){n.return=t.return,$i=n;break}$i=t.return}}function ws(e){for(;null!==$i;){var t=$i;if(t===e){$i=null;break}var n=t.sibling;if(null!==n){n.return=t.return,$i=n;break}$i=t.return}}function xs(e){for(;null!==$i;){var t=$i;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{as(4,t)}catch(s){Su(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Su(t,a,s)}}var l=t.return;try{ls(t)}catch(s){Su(t,l,s)}break;case 5:var o=t.return;try{ls(t)}catch(s){Su(t,o,s)}}}catch(s){Su(t,t.return,s)}if(t===e){$i=null;break}var i=t.sibling;if(null!==i){i.return=t.return,$i=i;break}$i=t.return}}var Cs,Ss=Math.ceil,Es=k.ReactCurrentDispatcher,Ns=k.ReactCurrentOwner,js=k.ReactCurrentBatchConfig,Ps=0,zs=null,Is=null,Ls=0,Ts=0,Os=Sa(0),_s=0,Fs=null,Ms=0,Rs=0,Js=0,Bs=null,Vs=null,Ds=0,Us=1/0,Ws=null,Xs=!1,Qs=null,Hs=null,Zs=!1,Ys=null,Gs=0,qs=0,Ks=null,$s=-1,eu=0;function tu(){return 0!==(6&Ps)?Ke():-1!==$s?$s:$s=Ke()}function nu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ls?Ls&-Ls:null!==gl.transition?(0===eu&&(eu=gt()),eu):0!==(e=At)?e:e=void 0===(e=window.event)?16:qt(e.type)}function ru(e,t,n,r){if(50<qs)throw qs=0,Ks=null,Error(a(185));yt(e,n,r),0!==(2&Ps)&&e===zs||(e===zs&&(0===(2&Ps)&&(Rs|=n),4===_s&&su(e,Ls)),au(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Us=Ke()+500,Ba&&Ua()))}function au(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-it(l),i=1<<o,s=a[o];-1===s?0!==(i&n)&&0===(i&r)||(a[o]=mt(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}}(e,t);var r=pt(e,e===zs?Ls:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Ba=!0,Da(e)}(uu.bind(null,e)):Da(uu.bind(null,e)),ia(function(){0===(6&Ps)&&Ua()}),n=null;else{switch(kt(r)){case 1:n=et;break;case 4:n=tt;break;case 16:default:n=nt;break;case 536870912:n=at}n=zu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if($s=-1,eu=0,0!==(6&Ps))throw Error(a(327));var n=e.callbackNode;if(xu()&&e.callbackNode!==n)return null;var r=pt(e,e===zs?Ls:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=vu(e,r);else{t=r;var l=Ps;Ps|=2;var o=hu();for(zs===e&&Ls===t||(Ws=null,Us=Ke()+500,pu(e,t));;)try{bu();break}catch(s){mu(e,s)}Nl(),Es.current=o,Ps=l,null!==Is?t=0:(zs=null,Ls=0,t=_s)}if(0!==t){if(2===t&&(0!==(l=ht(e))&&(r=l,t=ou(e,l))),1===t)throw n=Fs,pu(e,0),su(e,r),au(e,Ke()),n;if(6===t)su(e,r);else{if(l=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!sr(l(),a))return!1}catch(i){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(l)&&(2===(t=vu(e,r))&&(0!==(o=ht(e))&&(r=o,t=ou(e,o))),1===t))throw n=Fs,pu(e,0),su(e,r),au(e,Ke()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wu(e,Vs,Ws);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Ds+500-Ke())){if(0!==pt(e,0))break;if(((l=e.suspendedLanes)&r)!==r){tu(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=aa(wu.bind(null,e,Vs,Ws),t);break}wu(e,Vs,Ws);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-it(r);o=1<<i,(i=t[i])>l&&(l=i),r&=~o}if(r=l,10<(r=(120>(r=Ke()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ss(r/1960))-r)){e.timeoutHandle=aa(wu.bind(null,e,Vs,Ws),r);break}wu(e,Vs,Ws);break;default:throw Error(a(329))}}}return au(e,Ke()),e.callbackNode===n?lu.bind(null,e):null}function ou(e,t){var n=Bs;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=vu(e,t))&&(t=Vs,Vs=n,null!==t&&iu(t)),e}function iu(e){null===Vs?Vs=e:Vs.push.apply(Vs,e)}function su(e,t){for(t&=~Js,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(0!==(6&Ps))throw Error(a(327));xu();var t=pt(e,0);if(0===(1&t))return au(e,Ke()),null;var n=vu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Fs,pu(e,0),su(e,t),au(e,Ke()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Vs,Ws),au(e,Ke()),null}function cu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Us=Ke()+500,Ba&&Ua())}}function fu(e){null!==Ys&&0===Ys.tag&&0===(6&Ps)&&xu();var t=Ps;Ps|=1;var n=js.transition,r=At;try{if(js.transition=null,At=1,e)return e()}finally{At=r,js.transition=n,0===(6&(Ps=t))&&Ua()}}function du(){Ts=Os.current,Ea(Os)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,la(n)),null!==Is)for(n=Is.return;null!==n;){var r=n;switch(nl(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oa();break;case 3:ql(),Ea(za),Ea(Pa),ro();break;case 5:$l(r);break;case 4:ql();break;case 13:case 19:Ea(eo);break;case 10:jl(r.type._context);break;case 22:case 23:du()}n=n.return}if(zs=e,Is=e=Ou(e.current,null),Ls=Ts=t,_s=0,Fs=null,Js=Rs=Ms=0,Vs=Bs=null,null!==Ll){for(t=0;t<Ll.length;t++)if(null!==(r=(n=Ll[t]).interleaved)){n.interleaved=null;var a=r.next,l=n.pending;if(null!==l){var o=l.next;l.next=a,r.next=o}n.pending=r}Ll=null}return e}function mu(e,t){for(;;){var n=Is;try{if(Nl(),ao.current=$o,co){for(var r=io.memoizedState;null!==r;){var l=r.queue;null!==l&&(l.pending=null),r=r.next}co=!1}if(oo=0,uo=so=io=null,fo=!1,po=0,Ns.current=null,null===n||null===n.return){_s=1,Fs=t,Is=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=Ls,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,f=s,d=f.tag;if(0===(1&f.mode)&&(0===d||11===d||15===d)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=vi(i);if(null!==m){m.flags&=-257,yi(m,i,s,0,t),1&m.mode&&gi(o,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){gi(o,c,t),gu();break e}u=Error(a(426))}else if(ll&&1&s.mode){var v=vi(i);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),yi(v,i,s,0,t),hl(ci(u,s));break e}}o=u=ci(u,s),4!==_s&&(_s=2),null===Bs?Bs=[o]:Bs.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Dl(o,mi(0,u,t));break e;case 1:s=u;var y=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Hs||!Hs.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Dl(o,hi(o,s,t));break e}}o=o.return}while(null!==o)}ku(n)}catch(A){t=A,Is===n&&null!==n&&(Is=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=$o,null===e?$o:e}function gu(){0!==_s&&3!==_s&&2!==_s||(_s=4),null===zs||0===(268435455&Ms)&&0===(268435455&Rs)||su(zs,Ls)}function vu(e,t){var n=Ps;Ps|=2;var r=hu();for(zs===e&&Ls===t||(Ws=null,pu(e,t));;)try{yu();break}catch(l){mu(e,l)}if(Nl(),Ps=n,Es.current=r,null!==Is)throw Error(a(261));return zs=null,Ls=0,_s}function yu(){for(;null!==Is;)Au(Is)}function bu(){for(;null!==Is&&!Ge();)Au(Is)}function Au(e){var t=Cs(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?ku(e):Is=t,Ns.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Zi(n,t,Ts)))return void(Is=n)}else{if(null!==(n=Yi(n,t)))return n.flags&=32767,void(Is=n);if(null===e)return _s=6,void(Is=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Is=t);Is=t=e}while(null!==t);0===_s&&(_s=5)}function wu(e,t,n){var r=At,l=js.transition;try{js.transition=null,At=1,function(e,t,n,r){do{xu()}while(null!==Ys);if(0!==(6&Ps))throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}(e,o),e===zs&&(Is=zs=null,Ls=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Zs||(Zs=!0,zu(nt,function(){return xu(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=js.transition,js.transition=null;var i=At;At=1;var s=Ps;Ps|=4,Ns.current=null,function(e,t){if(ta=Xt,mr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(k){n=null;break e}var i=0,s=-1,u=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var m;d!==n||0!==l&&3!==d.nodeType||(s=i+l),d!==o||0!==r&&3!==d.nodeType||(u=i+r),3===d.nodeType&&(i+=d.nodeValue.length),null!==(m=d.firstChild);)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++c===l&&(s=i),p===o&&++f===r&&(u=i),null!==(m=d.nextSibling))break;p=(d=p).parentNode}d=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},Xt=!1,$i=t;null!==$i;)if(e=(t=$i).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,$i=e;else for(;null!==$i;){t=$i;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ri(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var A=t.stateNode.containerInfo;1===A.nodeType?A.textContent="":9===A.nodeType&&A.documentElement&&A.removeChild(A.documentElement);break;default:throw Error(a(163))}}catch(k){Su(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,$i=e;break}$i=t.return}h=ns,ns=!1}(e,n),vs(n,e),hr(na),Xt=!!ta,na=ta=null,e.current=n,bs(n,e,l),qe(),Ps=s,At=i,js.transition=o}else e.current=n;if(Zs&&(Zs=!1,Ys=e,Gs=l),o=e.pendingLanes,0===o&&(Hs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(lt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),au(e,Ke()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xs)throw Xs=!1,e=Qs,Qs=null,e;0!==(1&Gs)&&0!==e.tag&&xu(),o=e.pendingLanes,0!==(1&o)?e===Ks?qs++:(qs=0,Ks=e):qs=0,Ua()}(e,t,n,r)}finally{js.transition=l,At=r}return null}function xu(){if(null!==Ys){var e=kt(Gs),t=js.transition,n=At;try{if(js.transition=null,At=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Gs=0,0!==(6&Ps))throw Error(a(331));var l=Ps;for(Ps|=4,$i=e.current;null!==$i;){var o=$i,i=o.child;if(0!==(16&$i.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for($i=c;null!==$i;){var f=$i;switch(f.tag){case 0:case 11:case 15:rs(8,f,o)}var d=f.child;if(null!==d)d.return=f,$i=d;else for(;null!==$i;){var p=(f=$i).sibling,m=f.return;if(os(f),f===c){$i=null;break}if(null!==p){p.return=m,$i=p;break}$i=m}}}var h=o.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}$i=o}}if(0!==(2064&o.subtreeFlags)&&null!==i)i.return=o,$i=i;else e:for(;null!==$i;){if(0!==(2048&(o=$i).flags))switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,$i=y;break e}$i=o.return}}var b=e.current;for($i=b;null!==$i;){var A=(i=$i).child;if(0!==(2064&i.subtreeFlags)&&null!==A)A.return=i,$i=A;else e:for(i=b;null!==$i;){if(0!==(2048&(s=$i).flags))try{switch(s.tag){case 0:case 11:case 15:as(9,s)}}catch(w){Su(s,s.return,w)}if(s===i){$i=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,$i=k;break e}$i=s.return}}if(Ps=l,Ua(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(lt,e)}catch(w){}r=!0}return r}finally{At=n,js.transition=t}}return!1}function Cu(e,t,n){e=Bl(e,t=mi(0,t=ci(n,t),1),1),t=tu(),null!==e&&(yt(e,1,t),au(e,t))}function Su(e,t,n){if(3===e.tag)Cu(e,e,n);else for(;null!==t;){if(3===t.tag){Cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Hs||!Hs.has(r))){t=Bl(t,e=hi(t,e=ci(n,e),1),1),e=tu(),null!==t&&(yt(t,1,e),au(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&(Ls&n)===n&&(4===_s||3===_s&&(130023424&Ls)===Ls&&500>Ke()-Ds?pu(e,0):Js|=n),au(e,t)}function Nu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ft,0===(130023424&(ft<<=1))&&(ft=4194304)));var n=tu();null!==(e=_l(e,t))&&(yt(e,t,n),au(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Nu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;null!==l&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Nu(e,n)}function zu(e,t){return Ze(e,t)}function Iu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lu(e,t,n,r){return new Iu(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ou(e,t){var n=e.alternate;return null===n?((n=Lu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _u(e,t,n,r,l,o){var i=2;if(r=e,"function"===typeof e)Tu(e)&&(i=1);else if("string"===typeof e)i=5;else e:switch(e){case C:return Fu(n.children,l,o,t);case S:i=8,l|=8;break;case E:return(e=Lu(12,n,t,2|l)).elementType=E,e.lanes=o,e;case z:return(e=Lu(13,n,t,l)).elementType=z,e.lanes=o,e;case I:return(e=Lu(19,n,t,l)).elementType=I,e.lanes=o,e;case O:return Mu(n,l,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case N:i=10;break e;case j:i=9;break e;case P:i=11;break e;case L:i=14;break e;case T:i=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Lu(i,n,t,l)).elementType=e,t.type=r,t.lanes=o,t}function Fu(e,t,n,r){return(e=Lu(7,e,r,t)).lanes=n,e}function Mu(e,t,n,r){return(e=Lu(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Ru(e,t,n){return(e=Lu(6,e,null,t)).lanes=n,e}function Ju(e,t,n){return(t=Lu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vt(0),this.expirationTimes=vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,a,l,o,i,s){return e=new Bu(e,t,n,i,s),1===t?(t=1,!0===l&&(t|=8)):t=0,l=Lu(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(l),e}function Du(e){if(!e)return ja;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Ta(n))return Fa(e,n,t)}return t}function Uu(e,t,n,r,a,l,o,i,s){return(e=Vu(n,r,!0,e,0,l,0,i,s)).context=Du(null),n=e.current,(l=Jl(r=tu(),a=nu(n))).callback=void 0!==t&&null!==t?t:null,Bl(n,l,a),e.current.lanes=a,yt(e,a,r),au(e,r),e}function Wu(e,t,n,r){var a=t.current,l=tu(),o=nu(a);return n=Du(n),null===t.context?t.context=n:t.pendingContext=n,(t=Jl(l,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bl(a,t,o))&&(ru(e,a,o,l),Vl(e,a,o)),o}function Xu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Qu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hu(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}Cs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||za.current)Ai=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return Ai=!1,function(e,t,n){switch(t.tag){case 3:zi(t),ml();break;case 5:Kl(t);break;case 1:Ta(t.type)&&Ma(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Na(xl,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Na(eo,1&eo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ri(e,t,n):(Na(eo,1&eo.current),null!==(e=Xi(e,t,n))?e.sibling:null);Na(eo,1&eo.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ui(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Na(eo,eo.current),r)break;return null;case 22:case 23:return t.lanes=0,Si(e,t,n)}return Xi(e,t,n)}(e,t,n);Ai=0!==(131072&e.flags)}else Ai=!1,ll&&0!==(1048576&t.flags)&&el(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wi(e,t),e=t.pendingProps;var l=La(t,Pa.current);zl(t,n),l=vo(null,t,r,e,l,n);var o=yo();return t.flags|=1,"object"===typeof l&&null!==l&&"function"===typeof l.render&&void 0===l.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ta(r)?(o=!0,Ma(t)):o=!1,t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,Ml(t),l.updater=li,t.stateNode=l,l._reactInternals=t,ui(t,r,e,n),t=Pi(null,t,r,!0,o,n)):(t.tag=0,ll&&o&&tl(t),ki(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wi(e,t),e=t.pendingProps,r=(l=r._init)(r._payload),t.type=r,l=t.tag=function(e){if("function"===typeof e)return Tu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===L)return 14}return 2}(r),e=ri(r,e),l){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=ji(null,t,r,e,n);break e;case 11:t=wi(null,t,r,e,n);break e;case 14:t=xi(null,t,r,ri(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,Ni(e,t,r,l=t.elementType===r?l:ri(r,l),n);case 1:return r=t.type,l=t.pendingProps,ji(e,t,r,l=t.elementType===r?l:ri(r,l),n);case 3:e:{if(zi(t),null===e)throw Error(a(387));r=t.pendingProps,l=(o=t.memoizedState).element,Rl(e,t),Ul(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ii(e,t,r,n,l=ci(Error(a(423)),t));break e}if(r!==l){t=Ii(e,t,r,n,l=ci(Error(a(424)),t));break e}for(al=ca(t.stateNode.containerInfo.firstChild),rl=t,ll=!0,ol=null,n=wl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ml(),r===l){t=Xi(e,t,n);break e}ki(e,t,r,n)}t=t.child}return t;case 5:return Kl(t),null===e&&cl(t),r=t.type,l=t.pendingProps,o=null!==e?e.memoizedProps:null,i=l.children,ra(r,l)?i=null:null!==o&&ra(r,o)&&(t.flags|=32),Ei(e,t),ki(e,t,i,n),t.child;case 6:return null===e&&cl(t),null;case 13:return Ri(e,t,n);case 4:return Gl(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=kl(t,null,r,n):ki(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,wi(e,t,r,l=t.elementType===r?l:ri(r,l),n);case 7:return ki(e,t,t.pendingProps,n),t.child;case 8:case 12:return ki(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,Na(xl,r._currentValue),r._currentValue=i,null!==o)if(sr(o.value,i)){if(o.children===l.children&&!za.current){t=Xi(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){i=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Jl(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var f=(c=c.shared).pending;null===f?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Pl(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)i=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(i=o.return))throw Error(a(341));i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),Pl(i,n,t),i=o.sibling}else i=o.child;if(null!==i)i.return=o;else for(i=o;null!==i;){if(i===t){i=null;break}if(null!==(o=i.sibling)){o.return=i.return,i=o;break}i=i.return}o=i}ki(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zl(t,n),r=r(l=Il(l)),t.flags|=1,ki(e,t,r,n),t.child;case 14:return l=ri(r=t.type,t.pendingProps),xi(e,t,r,l=ri(r.type,l),n);case 15:return Ci(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ri(r,l),Wi(e,t),t.tag=1,Ta(r)?(e=!0,Ma(t)):e=!1,zl(t,n),ii(t,r,l),ui(t,r,l,n),Pi(null,t,r,!0,e,n);case 19:return Ui(e,t,n);case 22:return Si(e,t,n)}throw Error(a(156,t.tag))};var Zu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ku(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function $u(){}function ec(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if("function"===typeof a){var i=a;a=function(){var e=Xu(o);i.call(e)}}Wu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var l=r;r=function(){var e=Xu(o);l.call(e)}}var o=Uu(t,r,e,0,null,!1,0,"",$u);return e._reactRootContainer=o,e[ha]=o.current,Ur(8===e.nodeType?e.parentNode:e),fu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var i=r;r=function(){var e=Xu(s);i.call(e)}}var s=Vu(e,0,!1,null,0,!1,0,"",$u);return e._reactRootContainer=s,e[ha]=s.current,Ur(8===e.nodeType?e.parentNode:e),fu(function(){Wu(t,s,n,r)}),s}(n,t,e,a,r);return Xu(o)}Gu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Wu(e,t,null,null)},Gu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;fu(function(){Wu(null,e,null,null)}),t[ha]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Rt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),au(t,Ke()),0===(6&Ps)&&(Us=Ke()+500,Ua()))}break;case 13:fu(function(){var t=_l(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}}),Hu(e,1)}},xt=function(e){if(13===e.tag){var t=_l(e,134217728);if(null!==t)ru(t,e,134217728,tu());Hu(e,134217728)}},Ct=function(e){if(13===e.tag){var t=nu(e),n=_l(e,t);if(null!==n)ru(n,e,t,tu());Hu(e,t)}},St=function(){return At},Et=function(e,t){var n=At;try{return At=e,t()}finally{At=n}},xe=function(e,t,n){switch(t){case"input":if($(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=wa(r);if(!l)throw Error(a(90));Z(r),$(r,l)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&re(e,!!n.multiple,t,!1)}},Pe=cu,ze=fu;var tc={usingClientEntryPoint:!1,Events:[Aa,ka,wa,Ne,je,cu]},nc={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Qe(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{lt=ac.inject(rc),ot=ac}catch(fe){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(a(299));var n=!1,r="",l=Zu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(l=t.onRecoverableError)),t=Vu(e,1,!1,null,0,n,0,r,l),e[ha]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Qe(t))?null:e.stateNode},t.flushSync=function(e){return fu(e)},t.hydrate=function(e,t,n){if(!Ku(t))throw Error(a(200));return ec(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,l=!1,o="",i=Zu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(l=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,l,0,o,i),e[ha]=t.current,Ur(e),r)for(e=0;e<r.length;e++)l=(l=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Gu(t)},t.render=function(e,t,n){if(!Ku(t))throw Error(a(200));return ec(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Ku(e))throw Error(a(40));return!!e._reactRootContainer&&(fu(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[ha]=null})}),!0)},t.unstable_batchedUpdates=cu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ku(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return ec(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"}),l=n.cw(function(e,t){var n=o();t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot}),o=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=a()}),i=()=>n(86),s=n.cw(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r=m(),a=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}}),u=n.cw(function(e,t){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=m(),o=g(l),i=g(y()),u=g(n(173)),d=g(s()),p=g(f()),h=c();function g(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,h.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,h.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,h.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),l=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.A=v,v.displayName="Toggle",v.defaultProps={icons:{checked:o.default.createElement(d.default,null),unchecked:o.default.createElement(p.default,null)}},v.propTypes={checked:u.default.bool,disabled:u.default.bool,defaultChecked:u.default.bool,onChange:u.default.func,onFocus:u.default.func,onBlur:u.default.func,className:u.default.string,name:u.default.string,value:u.default.string,id:u.default.string,"aria-labelledby":u.default.string,"aria-label":u.default.string,icons:u.default.oneOfType([u.default.bool,u.default.shape({checked:u.default.node,unchecked:u.default.node})])}}),c=n.cw(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}}),f=n.cw(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r=m(),a=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}}),d=n.cw(function(e,t){var n=m(),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,s={},u=null,c=null;for(a in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,a)&&!i.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:u,ref:c,props:s,_owner:o.current}}t.Fragment=a,t.jsx=s,t.jsxs=s}),p=n.cw(function(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var A=b.prototype=new y;A.constructor=b,h(A,v.prototype),A.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,l={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!C.hasOwnProperty(a)&&(l[a]=t[a]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:x.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(e,t,a,l,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===l?"."+j(s,0):l,k(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),P(o,t,a,"",function(e){return e})):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(s=0,l=""===l?".":l+":",k(e))for(var u=0;u<e.length;u++){var c=l+j(i=e[u],u);s+=P(i,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=P(i=i.value,t,a,c=l+j(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",function(e){return t.call(n,e,a++)}),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},T={transition:null},O={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};function _(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=l,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=_,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),l=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=x.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)w.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:l,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=_,t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,n){return L.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,n){return L.current.useReducer(e,t,n)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return L.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return L.current.useTransition()},t.version="18.3.1"}),m=n.cw(function(e,t){e.exports=p()}),h=n.cw(function(e,t){e.exports=d()}),g=n.cw(function(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<l(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>l(s,n))u<a&&0>l(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<a&&0>l(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function l(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],f=1,d=null,p=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function A(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,A(e),!h)if(null!==r(u))h=!0,T(w);else{var t=r(c);null!==t&&O(k,t.startTime-e)}}function w(e,n){h=!1,g&&(g=!1,y(E),E=-1),m=!0;var l=p;try{for(A(n),d=r(u);null!==d&&(!(d.expirationTime>n)||e&&!P());){var o=d.callback;if("function"===typeof o){d.callback=null,p=d.priorityLevel;var i=o(d.expirationTime<=n);n=t.unstable_now(),"function"===typeof i?d.callback=i:d===r(u)&&a(u),A(n)}else a(u);d=r(u)}if(null!==d)var s=!0;else{var f=r(c);null!==f&&O(k,f.startTime-n),s=!1}return s}finally{d=null,p=l,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,C=!1,S=null,E=-1,N=5,j=-1;function P(){return!(t.unstable_now()-j<N)}function z(){if(null!==S){var e=t.unstable_now();j=e;var n=!0;try{n=S(!0,e)}finally{n?x():(C=!1,S=null)}}else C=!1}if("function"===typeof b)x=function(){b(z)};else if("undefined"!==typeof MessageChannel){var I=new MessageChannel,L=I.port2;I.port1.onmessage=z,x=function(){L.postMessage(null)}}else x=function(){v(z,0)};function T(e){S=e,C||(C=!0,x())}function O(e,n){E=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,T(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,l){var o=t.unstable_now();switch("object"===typeof l&&null!==l?l="number"===typeof(l=l.delay)&&0<l?o+l:o:l=o,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:f++,callback:a,priorityLevel:e,startTime:l,expirationTime:i=l+i,sortIndex:-1},l>o?(e.sortIndex=l,n(c,e),null===r(u)&&e===r(c)&&(g?(y(E),E=-1):g=!0,O(k,l-o))):(e.sortIndex=i,n(u,e),h||m||(h=!0,T(w))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}}),v=n.cw(function(e,t){e.exports=g()}),y=()=>n(139);function b(){return b.c||(b.c=n.t(m(),2))}m(),l();u(),h();const A=[{key:"#home",value:"Home"},{key:"#about",value:"About"},{key:"#skills",value:"Skills"},{key:"#work",value:"Work"},{key:"#projects",value:"Projects"}],k=()=>{const[e,t]=(0,p().useState)(window.location.hash||"#home"),[n,r]=(0,p().useState)(!1);(0,p().useEffect)(()=>{var e,t,n;const a=localStorage.getItem("selected-theme"),l=null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-color-scheme: dark)"),o=e=>{r(e),document.body.classList.toggle("dark__theme",e)};if(o(a?"dark"===a:null!==(n=null===l||void 0===l?void 0:l.matches)&&void 0!==n&&n),!a&&l)return l.onchange=e=>{let{matches:t}=e;localStorage.getItem("selected-theme")||o(t)},()=>l.onchange=null},[]);const a=t=>t===e?"nav__link active":"nav__link";return(0,d().jsxs)("ul",{className:"nav__list",children:[A.map(e=>(0,d().jsx)("li",{className:"nav__item",children:(0,d().jsx)("a",{href:e.key,className:a(e.key),onClick:()=>t(e.key),children:e.value})},e.key)),(0,d().jsx)("li",{className:"toggle__item",children:(0,d().jsx)(u().A,{checked:n,className:"toggle__theme",icons:{checked:(0,d().jsx)("i",{className:"bx bxs-moon toggle__icon"}),unchecked:(0,d().jsx)("i",{className:"bx bxs-sun toggle__icon"})},onChange:()=>{return r(e=!n),document.body.classList.toggle("dark__theme",e),void localStorage.setItem("selected-theme",e?"dark":"light");var e}})})]})},w=e=>{const t=e.isMenuOpen?"nav__menu show":"nav__menu";return(0,d().jsxs)("nav",{className:"nav bd-container bd-grid","data-testid":"nav-bar",children:[(0,d().jsx)("div",{children:(0,d().jsx)("a",{href:".",className:"nav__logo",children:"Khang Le"})}),(0,d().jsx)("div",{className:t,"data-testid":"nav-list",children:(0,d().jsx)(k,{})}),(0,d().jsx)("div",{className:"nav__toggle",id:"nav-toggle","data-testid":"nav-toggle",onClick:()=>e.setIsMenuOpen(!e.isMenuOpen),children:(0,d().jsx)("i",{className:"bx bx-menu"})})]})};var x=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),C=Math.abs,S=String.fromCharCode,E=Object.assign;function N(e){return e.trim()}function j(e,t,n){return e.replace(t,n)}function P(e,t){return e.indexOf(t)}function z(e,t){return 0|e.charCodeAt(t)}function I(e,t,n){return e.slice(t,n)}function L(e){return e.length}function T(e){return e.length}function O(e,t){return t.push(e),e}var _=1,F=1,M=0,R=0,J=0,B="";function V(e,t,n,r,a,l,o){return{value:e,root:t,parent:n,type:r,props:a,children:l,line:_,column:F,length:o,return:""}}function D(e,t){return E(V("",null,null,"",null,null,0),e,{length:-e.length},t)}function U(){return J=R>0?z(B,--R):0,F--,10===J&&(F=1,_--),J}function W(){return J=R<M?z(B,R++):0,F++,10===J&&(F=1,_++),J}function X(){return z(B,R)}function Q(){return R}function H(e,t){return I(B,e,t)}function Z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y(e){return _=F=1,M=L(B=e),R=0,[]}function G(e){return B="",e}function q(e){return N(H(R-1,ee(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(J=X())&&J<33;)W();return Z(e)>2||Z(J)>3?"":" "}function $(e,t){for(;--t&&W()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return H(e,Q()+(t<6&&32==X()&&32==W()))}function ee(e){for(;W();)switch(J){case e:return R;case 34:case 39:34!==e&&39!==e&&ee(J);break;case 40:41===e&&ee(e);break;case 92:W()}return R}function te(e,t){for(;W()&&e+J!==57&&(e+J!==84||47!==X()););return"/*"+H(t,R-1)+"*"+S(47===e?e:W())}function ne(e){for(;!Z(X());)W();return H(e,R)}var re="-ms-",ae="-moz-",le="-webkit-",oe="comm",ie="rule",se="decl",ue="@keyframes";function ce(e,t){for(var n="",r=T(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function fe(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case se:return e.return=e.return||e.value;case oe:return"";case ue:return e.return=e.value+"{"+ce(e.children,r)+"}";case ie:e.value=e.props.join(",")}return L(n=ce(e.children,r))?e.return=e.value+"{"+n+"}":""}function de(e){return G(pe("",null,null,null,[""],e=Y(e),0,[0],e))}function pe(e,t,n,r,a,l,o,i,s){for(var u=0,c=0,f=o,d=0,p=0,m=0,h=1,g=1,v=1,y=0,b="",A=a,k=l,w=r,x=b;g;)switch(m=y,y=W()){case 40:if(108!=m&&58==z(x,f-1)){-1!=P(x+=j(q(y),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:x+=q(y);break;case 9:case 10:case 13:case 32:x+=K(m);break;case 92:x+=$(Q()-1,7);continue;case 47:switch(X()){case 42:case 47:O(he(te(W(),Q()),t,n),s);break;default:x+="/"}break;case 123*h:i[u++]=L(x)*v;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(x=j(x,/\f/g,"")),p>0&&L(x)-f&&O(p>32?ge(x+";",r,n,f-1):ge(j(x," ","")+";",r,n,f-2),s);break;case 59:x+=";";default:if(O(w=me(x,t,n,u,c,a,i,b,A=[],k=[],f),l),123===y)if(0===c)pe(x,t,w,w,A,l,f,i,k);else switch(99===d&&110===z(x,3)?100:d){case 100:case 108:case 109:case 115:pe(e,w,w,r&&O(me(e,w,w,0,0,a,i,b,a,A=[],f),k),a,k,f,i,r?A:k);break;default:pe(x,w,w,w,[""],k,0,i,k)}}u=c=p=0,h=v=1,b=x="",f=o;break;case 58:f=1+L(x),p=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==U())continue;switch(x+=S(y),y*h){case 38:v=c>0?1:(x+="\f",-1);break;case 44:i[u++]=(L(x)-1)*v,v=1;break;case 64:45===X()&&(x+=q(W())),d=X(),c=f=L(b=x+=ne(Q())),y++;break;case 45:45===m&&2==L(x)&&(h=0)}}return l}function me(e,t,n,r,a,l,o,i,s,u,c){for(var f=a-1,d=0===a?l:[""],p=T(d),m=0,h=0,g=0;m<r;++m)for(var v=0,y=I(e,f+1,f=C(h=o[m])),b=e;v<p;++v)(b=N(h>0?d[v]+" "+y:j(y,/&\f/g,d[v])))&&(s[g++]=b);return V(e,t,n,0===a?ie:i,s,u,c)}function he(e,t,n){return V(e,t,n,oe,S(J),I(e,2,-2),0)}function ge(e,t,n,r){return V(e,t,n,se,I(e,0,r),I(e,r+1,-1),r)}var ve=function(e,t,n){for(var r=0,a=0;r=a,a=X(),38===r&&12===a&&(t[n]=1),!Z(a);)W();return H(e,R)},ye=function(e,t){return G(function(e,t){var n=-1,r=44;do{switch(Z(r)){case 0:38===r&&12===X()&&(t[n]=1),e[n]+=ve(R-1,t,n);break;case 2:e[n]+=q(r);break;case 4:if(44===r){e[++n]=58===X()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=S(r)}}while(r=W());return e}(Y(e),t))},be=new WeakMap,Ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||be.get(n))&&!r){be.set(e,!0);for(var a=[],l=ye(t,a),o=n.props,i=0,s=0;i<l.length;i++)for(var u=0;u<o.length;u++,s++)e.props[s]=a[i]?l[i].replace(/&\f/g,o[u]):o[u]+" "+l[i]}}},ke=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function we(e,t){switch(function(e,t){return 45^z(e,0)?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+ae+e+re+e+e;case 6828:case 4268:return le+e+re+e+e;case 6165:return le+e+re+"flex-"+e+e;case 5187:return le+e+j(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return le+e+re+"flex-item-"+j(e,/flex-|-self/,"")+e;case 4675:return le+e+re+"flex-line-pack"+j(e,/align-content|flex-|-self/,"")+e;case 5548:return le+e+re+j(e,"shrink","negative")+e;case 5292:return le+e+re+j(e,"basis","preferred-size")+e;case 6060:return le+"box-"+j(e,"-grow","")+le+e+re+j(e,"grow","positive")+e;case 4554:return le+j(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return j(j(j(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+e+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(e)-1-t>6)switch(z(e,t+1)){case 109:if(45!==z(e,t+4))break;case 102:return j(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+ae+(108==z(e,t+3)?"$3":"$2-$3"))+e;case 115:return~P(e,"stretch")?we(j(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==z(e,t+1))break;case 6444:switch(z(e,L(e)-3-(~P(e,"!important")&&10))){case 107:return j(e,":",":"+le)+e;case 101:return j(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+le+(45===z(e,14)?"inline-":"")+"box$3$1"+le+"$2$3$1"+re+"$2box$3")+e}break;case 5936:switch(z(e,t+11)){case 114:return le+e+re+j(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+re+j(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+re+j(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return le+e+re+e+e}return e}var xe=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case se:e.return=we(e.value,e.length);break;case ue:return ce([D(e,{value:j(e.value,"@","@"+le)})],r);case ie:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ce([D(e,{props:[j(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return ce([D(e,{props:[j(t,/:(plac\w+)/,":"+le+"input-$1")]}),D(e,{props:[j(t,/:(plac\w+)/,":-moz-$1")]}),D(e,{props:[j(t,/:(plac\w+)/,re+"input-$1")]})],r)}return""})}}],Ce=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,a,l=e.stylisPlugins||xe,o={},i=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;i.push(e)});var s,u,c=[fe,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],f=function(e){var t=T(e);return function(n,r,a,l){for(var o="",i=0;i<t;i++)o+=e[i](n,r,a,l)||"";return o}}([Ae,ke].concat(l,c));a=function(e,t,n,r){s=n,function(e){ce(de(e),f)}(e?e+"{"+t.styles+"}":t.styles),r&&(d.inserted[t.name]=!0)};var d={key:t,sheet:new x({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return d.sheet.hydrate(i),d};function Se(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")}),r}var Ee=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},Ne=function(e,t,n){Ee(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var je={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Pe(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ze=/[A-Z]|^ms/g,Ie=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Le=function(e){return 45===e.charCodeAt(1)},Te=function(e){return null!=e&&"boolean"!==typeof e},Oe=Pe(function(e){return Le(e)?e:e.replace(ze,"-$&").toLowerCase()}),_e=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(Ie,function(e,t,n){return Me={name:t,styles:n,next:Me},t})}return 1===je[e]||Le(e)||"number"!==typeof t||0===t?t:t+"px"};function Fe(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return Me={name:a.name,styles:a.styles,next:Me},a.name;var l=n;if(void 0!==l.styles){var o=l.next;if(void 0!==o)for(;void 0!==o;)Me={name:o.name,styles:o.styles,next:Me},o=o.next;return l.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Fe(e,t,n[a])+";";else for(var l in n){var o=n[l];if("object"!==typeof o){var i=o;null!=t&&void 0!==t[i]?r+=l+"{"+t[i]+"}":Te(i)&&(r+=Oe(l)+":"+_e(l,i)+";")}else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=Fe(e,t,o);switch(l){case"animation":case"animationName":r+=Oe(l)+":"+s+";";break;default:r+=l+"{"+s+"}"}}else for(var u=0;u<o.length;u++)Te(o[u])&&(r+=Oe(l)+":"+_e(l,o[u])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=Me,s=n(e);return Me=i,Fe(e,t,s)}}var u=n;if(null==t)return u;var c=t[u];return void 0!==c?c:u}var Me,Re=/label:\s*([^\s;{]+)\s*(;|$)/g;function Je(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";Me=void 0;var l=e[0];null==l||void 0===l.raw?(r=!1,a+=Fe(n,t,l)):a+=l[0];for(var o=1;o<e.length;o++){if(a+=Fe(n,t,e[o]),r)a+=l[o]}Re.lastIndex=0;for(var i,s="";null!==(i=Re.exec(a));)s+="-"+i[1];var u=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:Me}}var Be=!!b().useInsertionEffect&&b().useInsertionEffect,Ve=Be||function(e){return e()},De=(Be||p().useLayoutEffect,p().createContext("undefined"!==typeof HTMLElement?Ce({key:"css"}):null)),Ue=(De.Provider,function(e){return(0,p().forwardRef)(function(t,n){var r=(0,p().useContext)(De);return e(t,r,n)})}),We=p().createContext({});var Xe={}.hasOwnProperty,Qe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",He=function(e,t){var n={};for(var r in t)Xe.call(t,r)&&(n[r]=t[r]);return n[Qe]=e,n},Ze=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ee(t,n,r),Ve(function(){return Ne(t,n,r)}),null},Ye=Ue(function(e,t,n){var r=e.css;"string"===typeof r&&void 0!==t.registered[r]&&(r=t.registered[r]);var a=e[Qe],l=[r],o="";"string"===typeof e.className?o=Se(t.registered,l,e.className):null!=e.className&&(o=e.className+" ");var i=Je(l,void 0,p().useContext(We));o+=t.key+"-"+i.name;var s={};for(var u in e)Xe.call(e,u)&&"css"!==u&&u!==Qe&&(s[u]=e[u]);return s.className=o,n&&(s.ref=n),p().createElement(p().Fragment,null,p().createElement(Ze,{cache:t,serialized:i,isStringTag:"string"===typeof a}),p().createElement(a,s))});e();var Ge=d().Fragment,qe=function(e,t,n){return Xe.call(t,"css")?d().jsx(Ye,He(e,t),n):d().jsx(e,t,n)},Ke=function(e,t){var n=arguments;if(null==t||!Xe.call(t,"css"))return p().createElement.apply(void 0,n);var r=n.length,a=new Array(r);a[0]=Ye,a[1]=He(e,t);for(var l=2;l<r;l++)a[l]=n[l];return p().createElement.apply(null,a)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(Ke||(Ke={}));function $e(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Je(t)}function et(){var e=$e.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var tt=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var l=t[r];if(null!=l){var o=void 0;switch(typeof l){case"boolean":break;case"object":if(Array.isArray(l))o=e(l);else for(var i in o="",l)l[i]&&i&&(o&&(o+=" "),o+=i);break;default:o=l}o&&(a&&(a+=" "),a+=o)}}return a};var nt=function(e){var t=e.cache,n=e.serializedArr;return Ve(function(){for(var e=0;e<n.length;e++)Ne(t,n[e],!1)}),null},rt=Ue(function(e,t){var n=[],r=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var l=Je(r,t.registered);return n.push(l),Ee(t,l,!1),t.key+"-"+l.name},a={css:r,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(e,t,n){var r=[],a=Se(e,r,n);return r.length<2?n:a+t(r)}(t.registered,r,tt(n))},theme:p().useContext(We)},l=e.children(a);return p().createElement(p().Fragment,null,p().createElement(nt,{cache:t,serializedArr:n}),l)}),at=Object.defineProperty,lt=(e,t,n)=>((e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),ot=new Map,it=new WeakMap,st=0,ut=void 0;function ct(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(n=e.root,n?(it.has(n)||(st+=1,it.set(n,st.toString())),it.get(n)):"0"):e[t]}`;var n}).toString()}function ft(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ut;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:l,elements:o}=function(e){const t=ct(e);let n=ot.get(t);if(!n){const r=new Map;let a;const l=new IntersectionObserver(t=>{t.forEach(t=>{var n;const l=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=l),null==(n=r.get(t.target))||n.forEach(e=>{e(l,t)})})},e);a=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},ot.set(t,n)}return n}(n),i=o.get(e)||[];return o.has(e)||o.set(e,i),i.push(t),l.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(o.delete(e),l.unobserve(e)),0===o.size&&(l.disconnect(),ot.delete(a))}}var dt=class extends p().Component{constructor(e){super(e),lt(this,"node",null),lt(this,"_unobserveCb",null),lt(this,"handleNode",e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),lt(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:l}=this.props;this._unobserveCb=ft(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:l,onChange:o,skip:i,trackVisibility:s,delay:u,initialInView:c,fallbackInView:f,...d}=this.props;return p().createElement(t||"div",{ref:this.handleNode,...d},e)}};function pt(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:l,skip:o,initialInView:i,fallbackInView:s,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var c;const[f,d]=p().useState(null),m=p().useRef(u),[h,g]=p().useState({inView:!!i,entry:void 0});m.current=u,p().useEffect(()=>{if(o||!f)return;let i;return i=ft(f,(e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&l&&i&&(i(),i=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,f,a,r,l,o,n,s,t]);const v=null==(c=h.entry)?void 0:c.target,y=p().useRef(void 0);f||!v||l||o||y.current===v||(y.current=v,g({inView:!!i,entry:void 0}));const b=[d,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}r();et`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,et`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,et`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,et`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,et`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,et`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,et`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,et`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,et`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,et`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,et`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,et`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,et`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const mt=et`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;et`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ht(e,t){return n=>n?e():t()}function gt(e){return ht(e,()=>null)}function vt(e){return gt(()=>({opacity:0}))(e)}const yt=e=>{const{cascade:n=!1,damping:r=.5,delay:a=0,duration:l=1e3,fraction:o=0,keyframes:i=mt,triggerOnce:s=!1,className:u,style:c,childClassName:f,childStyle:d,children:m,onVisibilityChange:h}=e,g=(0,p().useMemo)(()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:a=mt,iterationCount:l=1}=e;return $e`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${l};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:l}),[l,i]);return void 0==m?null:"string"===typeof(v=m)||"number"===typeof v||"boolean"===typeof v?qe(At,{...e,animationStyles:g,children:String(m)}):(0,t().isFragment)(m)?qe(kt,{...e,animationStyles:g}):qe(Ge,{children:p().Children.map(m,(t,i)=>{if(!(0,p().isValidElement)(t))return null;const m=a+(n?i*l*r:0);switch(t.type){case"ol":case"ul":return qe(rt,{children:n=>{let{cx:r}=n;return qe(t.type,{...t.props,className:r(u,t.props.className),style:Object.assign({},c,t.props.style),children:qe(yt,{...e,children:t.props.children})})}});case"li":return qe(dt,{threshold:o,triggerOnce:s,onChange:h,children:e=>{let{inView:n,ref:r}=e;return qe(rt,{children:e=>{let{cx:a}=e;return qe(t.type,{...t.props,ref:r,className:a(f,t.props.className),css:gt(()=>g)(n),style:Object.assign({},d,t.props.style,vt(!n),{animationDelay:m+"ms"})})}})}});default:return qe(dt,{threshold:o,triggerOnce:s,onChange:h,children:e=>{let{inView:n,ref:r}=e;return qe("div",{ref:r,className:u,css:gt(()=>g)(n),style:Object.assign({},c,vt(!n),{animationDelay:m+"ms"}),children:qe(rt,{children:e=>{let{cx:n}=e;return qe(t.type,{...t.props,className:n(f,t.props.className),style:Object.assign({},d,t.props.style)})}})})}})}})});var v},bt={display:"inline-block",whiteSpace:"pre"},At=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:l=1e3,fraction:o=0,triggerOnce:i=!1,className:s,style:u,children:c,onVisibilityChange:f}=e,{ref:d,inView:p}=pt({triggerOnce:i,threshold:o,onChange:f});return ht(()=>qe("div",{ref:d,className:s,style:Object.assign({},u,bt),children:c.split("").map((e,n)=>qe("span",{css:gt(()=>t)(p),style:{animationDelay:a+n*l*r+"ms"},children:e},n))}),()=>qe(kt,{...e,children:c}))(n)},kt=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:l,children:o,onVisibilityChange:i}=e,{ref:s,inView:u}=pt({triggerOnce:r,threshold:n,onChange:i});return qe("div",{ref:s,className:a,css:gt(()=>t)(u),style:Object.assign({},l,vt(!u)),children:o})};et`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,et`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,et`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,et`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,et`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,et`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,et`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,et`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,et`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,et`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,et`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,et`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,et`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,et`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;et`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,et`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,et`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,et`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,et`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;et`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,et`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,et`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;et`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,et`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,et`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,et`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,et`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,et`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const wt=et`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,xt=et`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ct=et`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,St=et`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Et=et`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Nt=et`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,jt=et`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Pt=et`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const zt=e=>{const{direction:t,reverse:n=!1,...r}=e,a=(0,p().useMemo)(()=>function(e,t){switch(t){case"down":return e?Et:wt;case"right":return e?jt:Ct;case"up":return e?Pt:St;default:return e?Nt:xt}}(n,t),[t,n]);return qe(yt,{keyframes:a,...r})};et`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,et`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,et`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,et`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,et`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,et`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,et`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,et`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,et`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,et`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const It=n.p+"static/media/home.c54f1134fa4e336fd6ce.png",Lt=()=>(0,d().jsxs)("section",{className:"home bd-container bd-grid",id:"home","data-testid":"home",children:[(0,d().jsxs)("div",{children:[(0,d().jsx)("div",{className:"home__data",children:(0,d().jsxs)(zt,{direction:"down",cascade:!0,triggerOnce:!0,children:[(0,d().jsx)("div",{className:"home__intro",children:(0,d().jsxs)(zt,{direction:"down",cascade:!0,triggerOnce:!0,children:[(0,d().jsxs)("h1",{className:"home__title",children:["Hi, I'm ",(0,d().jsx)("span",{className:"home__title-color",children:"Khang"})]}),(0,d().jsx)("p",{className:"home__content",children:"A Computer Science Enthusiast"})]})}),(0,d().jsx)("a",{href:"mailto:tkhang1999@gmail.com",className:"home__button",children:"Contact"})]})}),(0,d().jsx)("div",{className:"home__social",children:(0,d().jsxs)(zt,{direction:"down",cascade:!0,triggerOnce:!0,children:[(0,d().jsx)("a",{href:"https://www.linkedin.com/in/tan-khang-le/",className:"home__social-icon",children:(0,d().jsx)("i",{className:"bx bxl-linkedin"})}),(0,d().jsx)("a",{href:"https://github.com/tkhang1999",className:"home__social-icon",children:(0,d().jsx)("i",{className:"bx bxl-github"})})]})})]}),(0,d().jsx)("div",{className:"home__img",children:(0,d().jsx)("img",{src:It,alt:""})})]}),Tt=n.p+"static/media/about.02da6e71fa69c0273ef3.png",Ot=()=>(0,d().jsxs)("section",{className:"about section",id:"about","data-testid":"about",children:[(0,d().jsx)("h2",{className:"section-title",children:"About"}),(0,d().jsxs)("div",{className:"about__container bd-container bd-grid",children:[(0,d().jsx)("div",{className:"about__img",children:(0,d().jsx)("img",{src:Tt,alt:"about"})}),(0,d().jsxs)("div",{children:[(0,d().jsx)("h2",{className:"about__subtitle",children:"Hi there!"}),(0,d().jsxs)("p",{className:"about__text",children:["My name is Khang Le and I'm currently working as a Software Development Engineer at Amazon Web Services (AWS), where I build scalable systems and solve complex engineering challenges.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),"Previously, I earned my Master's from Simon Fraser University (SFU) and Bachelor's from Nanyang Technological University (NTU), both in Computer Science. When I'm not coding, I enjoy cooking, bouldering, and playing table tennis and badminton."]})]})]})]}),_t=()=>(0,d().jsxs)("section",{className:"skills section",id:"skills","data-testid":"skills",children:[(0,d().jsx)("h2",{className:"section-title",children:"Skills"}),(0,d().jsxs)("div",{className:"skills__container bd-container bd-grid",children:[(0,d().jsx)("h2",{className:"skills__subtitle",children:"Profesional Skills"}),(0,d().jsx)("p",{className:"skills__text",children:"The technology stack that I'm currently working on includes, but not limited to, Java, Python, TypeScript, React, and Docker."}),(0,d().jsxs)("div",{className:"skills__list",children:[(0,d().jsx)("div",{className:"skills__data",children:(0,d().jsxs)("div",{className:"skills__names",children:[(0,d().jsx)("i",{className:"bx bx-code skills__icon"}),(0,d().jsx)("span",{className:"skills__name",children:"Python"})]})}),(0,d().jsx)("div",{className:"skills__data",children:(0,d().jsxs)("div",{className:"skills__names",children:[(0,d().jsx)("i",{className:"bx bx-code skills__icon"}),(0,d().jsx)("span",{className:"skills__name",children:"Java"})]})}),(0,d().jsx)("div",{className:"skills__data",children:(0,d().jsxs)("div",{className:"skills__names",children:[(0,d().jsx)("i",{className:"bx bx-code skills__icon"}),(0,d().jsx)("span",{className:"skills__name",children:"JavaScript/TypeScript"})]})})]}),(0,d().jsxs)("div",{className:"skills__list",children:[(0,d().jsx)("div",{className:"skills__data",children:(0,d().jsxs)("div",{className:"skills__names",children:[(0,d().jsx)("i",{className:"bx bx-code skills__icon"}),(0,d().jsx)("span",{className:"skills__name",children:"Machine Learning/Deep Learning"})]})}),(0,d().jsx)("div",{className:"skills__data",children:(0,d().jsxs)("div",{className:"skills__names",children:[(0,d().jsx)("i",{className:"bx bx-code skills__icon"}),(0,d().jsx)("span",{className:"skills__name",children:"Full-stack Development"})]})}),(0,d().jsx)("div",{className:"skills__data",children:(0,d().jsxs)("div",{className:"skills__names",children:[(0,d().jsx)("i",{className:"bx bx-code skills__icon"}),(0,d().jsx)("span",{className:"skills__name",children:"DevOps"})]})})]})]})]}),Ft=n.p+"static/media/aws.d72e762cdfff26d7e4bf.png",Mt=n.p+"static/media/goldman-sachs.1d802e406a8c2f6fa41f.png",Rt=n.p+"static/media/paypal.04b3edb65b438fe60d98.png",Jt=()=>(0,d().jsxs)("section",{className:"work section",id:"work","data-testid":"work",children:[(0,d().jsx)("h2",{className:"section-title",children:"Work Experience"}),(0,d().jsxs)("div",{className:"work__list bd-container",children:[(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:Ft,alt:"aws-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Software Engineer @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://aws.amazon.com/",children:"AWS"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Jun 2025 - Present"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Designed and built high-performance microservices processing millions of payment collection transactions monthly, ensuring seamless operation and improved customer experience.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: AWS, Java, TypeScript, Spring"})]})]}),(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAPVUlEQVR42uyYPWgUQRTHNwE/gr3iByIYjDdvdmd25i7HnTezsxcbmxTaih8gIZdED1G0NE0asbO0sNBKrQKWloKdKFY2tjYGjUJULve85a4xJBx7N0lz7wd/hml/f+YxvIAgCIIgCIIg/ifSRoF0i0wmDztZ4cpdjqLqYTKzxwDUToYqfceEWe/kD0jTAmFaTJgNiJNvnfOp1nofmdoDQpVqHjtkwuwYrhzyOPk4FZ87RsZ2ES7sxVDXM+l9k5UGMvkEAPvJ3C5QkLYJ0m4V3/+liOQZ2fMME7XrvTJyB6RdOyPqx8miH8YgtrNRcSaTO2g2Iu2ukkoPgHQ3RPF8JrU9eCG1TSbsI7I5JFy5BxAnmdRhswnCPCajQwCxu++pjCx/QSb3yOpgjEdyptkbU55i15lOy6Q2J5OTFw5wla50y6i1fRXCdfqe7ObkRKUywWP3hHfHlLeEqo5cV0+T4Vwsj3PpnoP0W0ak6wgiSclvDrIFIBN2lavUaxkgbQtic4kM54Dz8hEmzJveorDtrxD7G2J7hQznoKDN0YKwb/OvQ/ovFLl0jgznHFMg7YdMoM+ATDCK0ikynPNry6T94vtlMGl+cGmrwQ7gcjCOtysTeDc6lJ3ZPRh1zkp3yn8ZFkGYNYjs7LZFBMEYLqk63io1cV6/xKXp1zinXuCCvoOLJRuMKrJTBkj72fNPKst3FtXK25YxF4bYLL/ChvqFzWnEBY3Y0N3zZglxXv3ERnEVr7mDIzemQCZffZfBpP1Hrvm7NhGGcTyg0EVUrIJIQa2hVa9J7sd7d+mlSS4mFJzEIYPiYFu53wktxboGoaN/gIODg4u4uHVwEAVHFbSD6NTWQTS2IYHYJrnHe/F1CXc2Td7Eog98AxnCQ/g89/y651s0mjrrC0PnYmDwa54A9D/I8FQUP4EmHPk/JvARbwJn0w2KMIhSaxN8MuoLwxRHQRfKYAjtAIKh2OgZ5EMH/vGNbfKiF8UVyp0UfjI+nOeUSX8YfPxXKiIwOpUhuGBLV0M92IadHd7SlHPlW+rI43x+f8Gd4FTEsKkvdGeMDIbxZjyaGPdPU+wV0PlNkqb2Jhvh2vKwm3pSN5UbTVt82rTEVy1dWG0Z6LXrSCtQVEr7AkwkMjWKXwrRH/jSLxlGPekLw0AJ0PmqJ+hGJL1twDx7NNShfSxcHtoxpFXQ+Xp7eiTfG1CIVxuFqdzfa21j2TFypuPSLOARXn0RdJEIJhoHG3UBok04zWnC8VAH9nU2capVkN/uWqc0TxZya6YyM3AYeLOKczxFGG6Ez0CUz6xwXPJEQAHPgSP2DIOoBbY0vGuKMuJnoCA9x347bxrEz9tW/MIAD9guTXswahTTlIsvTTwgD8KyfNgXhs3NgsFvU4GBI91E76CAfQXbDzs75jrS+z0HgYOgYUr3QBvAeSvDJhNkY0tNeB3vAb7PMOoh/yeDzZPiTUd4UHTEu1BSD4YCrGapLBTljW784t80dLRVmZs81t8Czqm5mJijuz5nUx4Q9QleQvquQixhGuYlajCIamBy6VCA7TgJ5DrSetdBoHm6MwVwGzclfbIol76GI5l2zYhw6UdBPsHgb8KCjP+gSwWERlreeankd6SHP6qanGla4jpYQm++FuJQsxS2X3PGHMOpdao1Q8ji1nY5EIaFlsjAR0cY6qIMUJRK0DYvAIHxXZu83jJQmcDoTUsK1G3lNP00FVN1fMRMec7AK/TlcDg85AvDESywEE0YAItxAAs5Qav4TV2ecQ2hQs2nI0F1hvvdLf5s78pi3LrK8C0PSNCW0EoFVZRFkUIykxnP2Hd37IknM0lTAk2QSNWkpJQsvuduniWJQtpQReGhIn1AhapFvERCSlUBVakEolCgKg9VgAgpCMQaUSjK0sxkMovta9/l5/zEvGR8Zzz2P5k4+JPO3JeRj3W+e875l+//TQP+Bh+u6Wwj4nzGqdjwuS3tBVy8POGdgeTa0mEhBkVD3R4yqUw2nymCb8o/ubQncSelGOEZfJPJPfC+gRfjyRCP1MiISMlwxWP15sNniWmPBEz2Ka24yJQiKGS2kqjP8U93MvNtbv1EtJqpQaxycoUYAJ7ttkS3M5DUcQ19gn2xZJjakdAQQ0oy0MepmurL6IOQkLG+L/MKdcqV63bRzziAc8RYUw/yEZKatuMqHh3bIGbOsr3hyYiJZdI5TU6Gpb5Fpw5JIBkbqXMZHifkaSEGgDlvU3oZLJH0LQWW3CPEILDVPfg/tGSkoGzoP/3fDiQorsw9wS/bkPjyRqfvKQER8yUxngS2WCFcnAiY5MSS4ap7waF1NJHcElNO05HRu+0efkydIU674vOLC5GBAFd9AA7rNKZtAWNO0nYhBqGtniQ1p3FYIhQN9TsYnicssNy4GUvBKKWdvLB/p9AAwEwlYFyliU9Z/bGecWCqz0eGGJARUXsBikyjLw5KSJt31fIaFGOuO5ljQoMAN3lfyzuEiUWwk3VlPn/cuf79FVM+VovY0g1bhrKpfW15IrjS4ONolhIcUXM8Grw/7piKvUOMVKk5IvApzoAj7hBiUGHyCRhVicmQKr6bPriM3RKGHkM5f4synSleW/6ZpZCBQHsdHPlZKMhNpGGTIVhyeoE747u1nUEUnExGUFAgcNMHljfHkcht5Qvrt0DIJFcTbhKaBFj9aWCpiSXsDBweGP1r4snQTpOatkjGQR0qdnr7TVGn80X9bZNO33vr+ga2CAsCA3oLKzLAlp8GI+U1tkDiJTBTolAHF/LiB31b/Qa4xKatI8OcFRsOoQf3GY5yUpYSl8LxN57P0GM/UxpI9oqDu3vE3AhWxvYqw7u7kplhzAzWC2WAnXoSTPE8Hl/8WdsJtVGThHLifgFG/Qv83Z36B6q28gJpDgWHJRcrtt6Qjos6uvu9XrGWhFqMjFTuNz2pga66O64re39vcvAlTvC//xvDwpHMAVpyXX3ZEvfef9XFs491SRlNdYEtjgMT3+SkTHAySvz5DjDxJbClPXCkvgz00p4td0au9hqSRpjQQkEdeG56y8qVnKUGT2Jl7AJqQgwSnkskcg/U72314L38GJtuZIclpMGHY8sJrPV3gZm5B60w1E9hiEWIwSQXK0Qj+uvAiBNaYxrM2hvWCyuNvr6swq2u3/MdM4WmLB9FlInyN/1qdyJ7VIgBNn1p3HzORH3yZkikNmhCC+BE3Ru5+qvkfoYpw8R+AikPLTH6x7p7Nz7UIw5vW9er9y6s08pkuA8SNWGhFUUx31SoupzPfCJy1NdhRKEL27MUhEyanjGVbPsW5ySzG/m9MHszW2FcNbOJ0JR/B45EadpCZMp+iUmK0CAIAoq0QIuJv+WVVmRACXn4tLAETOT1dT6T/4qLSEkGOCrMPD5UV81YHc2mKkx+DcbSV2BMuwyj+qTH1DeDAjrDtxA4GT9sMYeCRsIb2N1BaACo5PAM+V1KRQqOyJKnuIb3buEGzLrZ+0JbP40eOrA6DqolYYbw3BTLfeoWqJZSP0QhnOMSo5/r+s5FCSkyPVll8iWwiMkw5fNgZlbPOxbzem+FyX+GwiLhF0eC0Fb+VVlhiwyTWgbujpbV7uKmV4VF4Bnq5tCQLoBJmVhKQsCUi+DML5WbMtIDAZPeaXgnWiJEBfX8Sh9XzxPk3/1eTPEugOm8pnIyJmmzfCnwDOUa1EksoeKQk3GhmWRVxdKfbWdC0NG8go2ShRiAoa6pMikERktGlcl/h+PzW8p6vEwtMOSZZufDy34FS9k2mXxBW1K98wYAh4QY+FYmEzIZqMnwmXy2xPR5nUtLdlrn5HtgtpQsm5m0Mb63Ali9WlzV5KVea6c0cCxejJD+QmRKc8SJJRQjnC068ztgBzysHhjSNAH5xeBQ5nMreWz9iI8lKxi7+rOH4/q1g5sZBkJpZ80SQjHCGeAp3Xo7MTJoyI84Id5odpuwUli7dsPd/NgKGr8zslUeIzspxKBkKzq4KlAL2Dym/qxegU7FzXaDo1DKSK9dXGGf5A4eat/Id8nUQjuldteE/H9PCDGYPaA+CiPEZFgSBLb6g6nR3Ifn7wx963Xyk3SEFPRzt0jf3aEEX/TvJ6RhqJWo4bgeZheH0N94u7c/tyMu5+4xZQxMiTblOqZC1dFerOeBV5lu8Pl8JIMyxcs/NyncKtB5+KOPh+A5EVZ3cvCFBB89/ZnjXYlcTyKxJVaaH1jaE5Rk4EAy/EJ6XnEOomTou4BRz6eBb6ePCO0MjJKWmPJ5GNfJNVN+QT+Bn3/jfHP8mMLFo7beQlf/Vo389kXV1kwY13C7k9YQ+o76TL1jseqoXyafD8l3tefOYvlBO4Mv2gmwJGKZjgaeo43FaLSOks83riMZx9p9Z9xRcbSnwKZNueLiBAXtkXrHlGfro9Q1izXyGQDO16aA48ffFzr6IbRGqGsIq6a2v66U1OYkHdTITenQ0UeEdga2QuJWz9dJz3AcpgShpdaNh5WsgY/DGO18SAYef0I7AzVToaudApvU1IxwsStMe2yBSqlf0/o1GlRtfa/QzsALr2Jpr5AXyoxoUGaZXKwIIr9zVWTJVyn9DM/UHgKhje8MVLaXMYbkytQlZFXP0R5eUAhh6EORkZqjmU+CiqHsEtoZV/LZ+z1DeQujrBFl/ptJ5cDRdwuLIBjJfBbyqWJr8yVxvsAzNCa0M65xCWiFKT+mVYYkAWwFwxMDDUmFWFbBZFFL8zkqBPyYEtod5YL2JXAVamUIEvLpJcpMJyHffK8S4KF5od2BTYrBUv5CmXYNmDRdsvR0E6GZbzYnGZLmwMpkhNsB3siGtXA4TamzvTJtKk1m4Lgj6qqXwWx8PkzjVkx9h3C7YBbzDK5M01HHUCZ5/lsSWgDuLJ/JWGOy+HxM8lDoINxOmM6rX21ZAG2iTEe+jB1BBQIU81oqdLV/xvpCI2gsqOfK+7Dh2O0FfCN3QUFu8c6Q/3GVpXvIvxtTD/qmchEKygTY8lUYUa8EJpeA8u8s3K6Y2pf8JIzpTSd6fCb9aZrpirDMuLx/6KPC/wPAyt3lm8qZpfoguKt8SzkzbQys6fw2ETECpj4KlrQkzVTgaG/MsvRHOqu3TAgt9VRDHRSYCJGr/nKGF3d2Vm2Z4Vvqc6EhTkBBuaHu/HrNecQkPyhopyE/vKqzWjcJvpHWfUf/is/kt0NTei9k8mTVkP/g2+pJjzt8nRVaAeAPnaBYDevOcWATfAzNd1amgw466KCDDprHfwBd04+l8WMEsgAAAABJRU5ErkJggg==",alt:"leap-tools-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Software Developer @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://www.leaptools.com/",children:"Leap Tools"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Nov 2024 - June 2025"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Developed Roomvo PRO, a CRM platform tailored for flooring professionals to boost sales, streamline interactions, and improve customer decisions.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Python, TypeScript, Django, React, Bazel"})]})]}),(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR4nO3dT2xW573g8d8dFW8MDt44gtgL2LwRJnck6jTBml4pkChmA1LTGo2aTUKRwuoSoWR1Q5Vklw4qXSUSl3TDvSPcphLe4CgFpMkMJI0HaRSM4g0s7IDijanBG1jcWRBzyV8M/M5ffz7SVXoT5ZwHYt73e57znOf8w7+v+8f/CAAA0vyXqgcAANA2AgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsA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",alt:"sfu-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Research Assistant @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://www.sfu.ca/",children:"SFU"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Sep 2023 - June 2025"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Conducted research on concolic/symbolic execution for Rust, formal verification of the L2CAP state machine in Bluetooth, and automated program repair using LLMs.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Rust, Dafny, C++, Linux"})]})]}),(0,d().jsxs)("div",{className:"work__container ",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:Mt,alt:"goldman-sachs-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Software Engineer @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://www.goldmansachs.com/",children:"Goldman Sachs"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Jul 2021 - Aug 2023"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Developed full-stack web applications and microservices to streamline the post-trade lifecycle in the derivatives clearing business.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Java, TypeScript, Spring Boot, React, SQL, Kafka, Docker"})]})]}),(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:Mt,alt:"Goldman Sachs"}),(0,d().jsxs)("p",{className:"work__title",children:["Summer Analyst @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://www.goldmansachs.com/",children:"Goldman Sachs"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Jul 2020 - Aug 2020"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Built a full-stack web dashboard for memory usage monitoring of multiple applications and concurrent processes running in the firm.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Java, TypeScript, Spring Boot, React, Kafka"})]})]}),(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:Rt,alt:"paypal-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Software Engineering Intern @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://www.paypal.com/",children:"PayPal"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Aug 2019 - Dec 2019"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Developed multiple RESTful web services in the Compliance platform and built machine learning models to detect regulatory breaches.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Java, Python, Spring Boot, SQL"})]})]}),(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:"data:image/png;base64,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",alt:"noviscient-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Junior Engineer @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://noviscient.com/",children:"Noviscient"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"May 2019 - Aug 2019"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Built a full-stack web application that gives investors and alpha partners access to portfolio creation and investment management tools.",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Python, Django, jQuery, Docker"})]})]}),(0,d().jsxs)("div",{className:"work__container",children:[(0,d().jsxs)("div",{className:"work__grid",children:[(0,d().jsx)("img",{className:"work__img",src:"data:image/png;base64,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",alt:"ackcio-logo"}),(0,d().jsxs)("p",{className:"work__title",children:["Intern Software Engineer @"," ",(0,d().jsx)("a",{className:"external__link",href:"https://www.ackcio.com/",children:"Ackcio"})," ",(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"May 2018 - Aug 2018"})]})]}),(0,d().jsxs)("p",{className:"work__text",children:["Developed a multi-threaded software running on Raspberry Pi to concurrently read and transmit serial data for real-time construction monitoring. ",(0,d().jsx)("br",{}),(0,d().jsx)("br",{}),(0,d().jsx)("i",{children:"Tech stack: Python, SQL, Linux"})]})]})]})]}),Bt=()=>(0,d().jsxs)("section",{className:"projects section",id:"projects","data-testid":"projects",children:[(0,d().jsx)("h2",{className:"section-title",children:"Projects"}),(0,d().jsxs)("div",{className:"project__list",children:[(0,d().jsxs)("div",{className:"project__container bd-container",children:[(0,d().jsx)("div",{children:(0,d().jsx)("h3",{children:"Formalization, Implementation, and Verification of the Bluetooth L2CAP State Machine"})}),(0,d().jsxs)("p",{className:"project__text",children:[(0,d().jsx)("u",{children:"Tan Khang Le"}),", Mohammad Omidvar Tehrani, Yuepeng Wang, Jianliang Wu, and Steven Y. Ko; in"," ",(0,d().jsx)("i",{children:"Proceedings of the 31st Annual International Conference on Mobile Computing and Networking (MobiCom)"}),", Hong Kong, 2025. [",(0,d().jsx)("a",{className:"external__link",href:"https://doi.org/10.1145/3680207.3765254",children:"paper"}),"]"]})]}),(0,d().jsxs)("div",{className:"project__container bd-container",children:[(0,d().jsx)("div",{children:(0,d().jsx)("h3",{children:"A Study of Vulnerability Repair in JavaScript Programs with Large Language Models"})}),(0,d().jsxs)("p",{className:"project__text",children:[(0,d().jsx)("u",{children:"Tan Khang Le"}),", Saba Alimadadi, and Steven Y. Ko; in"," ",(0,d().jsx)("i",{children:"Companion Proceedings of the ACM Web Conference 2024 (WWW '24 Companion)"}),", Singapore, 2024. [",(0,d().jsx)("a",{className:"external__link",href:"https://arxiv.org/abs/2403.13193",children:"paper"}),"]"]})]}),(0,d().jsxs)("div",{className:"project__container bd-container",children:[(0,d().jsx)("div",{children:(0,d().jsx)("h3",{children:"Concolic Execution for Mid-level Intermediate Representation of Rust Programs"})}),(0,d().jsxs)("p",{className:"project__text",children:["Mohammad Omidvar Tehrani, ",(0,d().jsx)("u",{children:"Tan Khang Le"}),", Fr\xe9d\xe9ric Tuong, Marco Gaboardi, and Steven Y. Ko; in"," ",(0,d().jsx)("i",{children:"Fourth Rust Verification Workshop (RW2024)"}),", Luxembourg, 2024. [",(0,d().jsx)("a",{className:"external__link",href:"https://sites.google.com/view/rustverify2024",children:"link"}),"]"]})]}),(0,d().jsxs)("div",{className:"project__container bd-container",children:[(0,d().jsx)("div",{children:(0,d().jsx)("h3",{children:"Machine Learning for Food Review and Recommendation"})}),(0,d().jsxs)("p",{className:"project__text",children:[(0,d().jsx)("u",{children:"Tan Khang Le"})," and Siu Cheung Hui; in"," ",(0,d().jsx)("i",{children:"International Student Conference on Artificial Intelligence (STCAI)"}),", Singapore, 2021. [",(0,d().jsx)("a",{className:"external__link",href:"https://arxiv.org/abs/2201.10978",children:"paper"}),"] [",(0,d().jsx)("a",{className:"external__link",href:"https://github.com/tkhang1999/Solr-SBERT-semantic-search",children:"demo"}),"]"]})]})]})]}),Vt=()=>(0,d().jsxs)("footer",{className:"footer","data-testid":"footer",children:[(0,d().jsx)("p",{className:"footer__title",children:"Khang Le"}),(0,d().jsxs)("div",{className:"footer__social",children:[(0,d().jsx)("a",{href:"mailto:tkhang1999@gmail.com",className:"footer__icon",children:(0,d().jsx)("i",{className:"bx bxs-envelope"})}),(0,d().jsx)("a",{href:"https://www.linkedin.com/in/tan-khang-le/",className:"footer__icon",children:(0,d().jsx)("i",{className:"bx bxl-linkedin"})}),(0,d().jsx)("a",{href:"https://github.com/tkhang1999",className:"footer__icon",children:(0,d().jsx)("i",{className:"bx bxl-github"})})]}),(0,d().jsx)("p",{children:"\xa9 2021 handcrafted by Khang Le"})]}),Dt=()=>{const[e,t]=(0,p().useState)(!1);return(0,d().jsxs)("div",{children:[(0,d().jsx)("header",{className:"l-header",children:(0,d().jsx)(w,{isMenuOpen:e,setIsMenuOpen:t})}),(0,d().jsxs)("main",{className:"l-main",onClick:()=>{e&&t(!1)},children:[(0,d().jsx)(Lt,{}),(0,d().jsx)(Ot,{}),(0,d().jsx)(_t,{}),(0,d().jsx)(Jt,{}),(0,d().jsx)(Bt,{})]}),(0,d().jsx)(Vt,{})]})},Ut=e=>{e&&e instanceof Function&&n.e(488).then(()=>n(488)).then(t=>{let{onCLS:n,onINP:r,onFCP:a,onLCP:l,onTTFB:o}=t;n(e),r(e),a(e),l(e),o(e)})};l().createRoot(document.getElementById("root")).render((0,d().jsx)(p().StrictMode,{children:(0,d().jsx)(Dt,{})})),Ut()})()})();
//# sourceMappingURL=main.5b036eda.js.map