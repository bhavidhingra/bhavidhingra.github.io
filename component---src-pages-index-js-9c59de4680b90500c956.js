(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var c=/([A-Z])/g;var o=/^ms-/;function u(e){return function(e){return e.replace(c,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var i=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(u(t))||a(e).getPropertyValue(u(t));Object.keys(t).forEach((function(a){var c=t[a];c||0===c?!function(e){return!(!e||!i.test(e))}(a)?n+=u(a)+": "+c+";":r+=a+"("+c+") ":e.style.removeProperty(u(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"9fPl":function(e,t,n){e.exports=n.p+"static/kickstart2020-4bbf32d54f975a004cc7a574d5a2f89b.jpg"},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,c=!1;try{var o={get passive(){return a=!0},get once(){return c=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(s){}var u=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!c){var o=r.once,u=r.capture,i=n;!c&&o&&(i=n.__once||function e(r){this.removeEventListener(t,e,u),n.call(this,r)},n.__once=i),e.addEventListener(t,i,a?r:u)}e.addEventListener(t,n,r)};var i=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return u(e,t,n,r),function(){i(e,t,n,r)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("wx14"),a=n("zLVn"),c=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function i(e,t){return Object.keys(t).reduce((function(n,i){var s,l=n,f=l[o(i)],d=l[i],v=Object(a.a)(l,[o(i),i].map(u)),p=t[i],b=function(e,t,n){var r=Object(c.useRef)(void 0!==e),a=Object(c.useState)(t),o=a[0],u=a[1],i=void 0!==e,s=r.current;return r.current=i,!i&&s&&o!==t&&u(t),[i?e:o,Object(c.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(d,f,e[p]),m=b[0],h=b[1];return Object(r.a)({},v,((s={})[i]=m,s[p]=h,s))}),e)}n("dI71"),n("94VI")},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return U}));var r=n("q1tI"),a=n.n(r),c=n("Kvkj"),o=n("wx14"),u=n("zLVn"),i=n("ZCiN");var s=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},l=n("XcHJ"),f=n("i52p"),d=Math.pow(2,31)-1;function v(){var e=Object(l.a)(),t=Object(r.useRef)();return Object(f.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=d?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=d?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),d)}(t,r,Date.now()+a))},clear:n}}),[])}var p=n("TSYQ"),b=n.n(p),m=n("SJxq"),h=n("7j6X"),y=n("GEtZ");m.a&&window;function j(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),c=Object(y.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),c()}}var O=function(e,t,n){var r,a,c;null==n&&(r=e,a=Object(h.a)(r,"transitionDuration")||"",c=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*c||0);var o=j(e,n),u=Object(y.a)(e,"transitionend",t);return function(){o(),u()}},E=n("dRu9"),w=n("17x9"),g=n.n(w),x=n("JCAc"),C=/-(.)/g;var S=a.a.createContext({});S.Consumer,S.Provider;function k(e,t){var n=Object(r.useContext)(S);return e||n[t]||t}var N=function(e){return e[0].toUpperCase()+(t=e,t.replace(C,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function I(e,t){var n=void 0===t?{}:t,r=n.displayName,c=void 0===r?N(e):r,i=n.Component,s=n.defaultProps,l=a.a.forwardRef((function(t,n){var r=t.className,c=t.bsPrefix,s=t.as,l=void 0===s?i||"div":s,f=Object(u.a)(t,["className","bsPrefix","as"]),d=k(c,e);return a.a.createElement(l,Object(o.a)({ref:n,className:b()(r,d)},f))}));return l.defaultProps=s,l.displayName=c,l}var T=I("carousel-caption"),L=I("carousel-item");function P(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function A(e){return!e||"#"===e.trim()}var D=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,c=e.disabled,i=e.onKeyDown,s=Object(u.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(c||A(t))&&e.preventDefault(),c?e.stopPropagation():n&&n(e)};return A(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),c&&(s.tabIndex=-1,s["aria-disabled"]=!0),a.a.createElement(r,Object(o.a)({ref:t},s,{onClick:l,onKeyDown:R((function(e){" "===e.key&&(e.preventDefault(),l(e))}),i)}))}));D.displayName="SafeAnchor";var M=D;var J={bsPrefix:g.a.string,as:g.a.elementType,slide:g.a.bool,fade:g.a.bool,controls:g.a.bool,indicators:g.a.bool,activeIndex:g.a.number,onSelect:g.a.func,onSlide:g.a.func,onSlid:g.a.func,interval:g.a.number,keyboard:g.a.bool,pause:g.a.oneOf(["hover",!1]),wrap:g.a.bool,touch:g.a.bool,prevIcon:g.a.node,prevLabel:g.a.string,nextIcon:g.a.node,nextLabel:g.a.string},_={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var X=a.a.forwardRef((function(e,t){var n=Object(x.a)(e,{activeIndex:"onSelect"}),c=n.as,l=void 0===c?"div":c,f=n.bsPrefix,d=n.slide,p=n.fade,m=n.controls,h=n.indicators,y=n.activeIndex,j=n.onSelect,w=n.onSlide,g=n.onSlid,C=n.interval,S=n.keyboard,N=n.onKeyDown,I=n.pause,T=n.onMouseOver,L=n.onMouseOut,R=n.wrap,A=n.touch,D=n.onTouchStart,J=n.onTouchMove,_=n.onTouchEnd,X=n.prevIcon,q=n.prevLabel,V=n.nextIcon,Z=n.nextLabel,K=n.className,H=n.children,Q=Object(u.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Y=k(f,"carousel"),z=Object(r.useRef)(null),U=Object(r.useState)("next"),F=U[0],G=U[1],$=Object(r.useState)(!1),B=$[0],W=$[1],ee=Object(r.useState)(y||0),te=ee[0],ne=ee[1];B||y===te||(z.current?(G(z.current),z.current=null):G((y||0)>te?"next":"prev"),d&&W(!0),ne(y||0));var re=a.a.Children.toArray(H).filter(a.a.isValidElement).length,ae=Object(r.useCallback)((function(e){if(!B){var t=te-1;if(t<0){if(!R)return;t=re-1}z.current="prev",j&&j(t,e)}}),[B,te,j,R,re]),ce=Object(i.a)((function(e){if(!B){var t=te+1;if(t>=re){if(!R)return;t=0}z.current="next",j&&j(t,e)}})),oe=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:oe.current,prev:ae,next:ce}}));var ue=Object(i.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&ce()})),ie="next"===F?"left":"right";s((function(){d||(w&&w(te,ie),g&&g(te,ie))}),[te]);var se=Y+"-item-"+F,le=Y+"-item-"+ie,fe=Object(r.useCallback)((function(e){!function(e){e.offsetHeight}(e),w&&w(te,ie)}),[w,te,ie]),de=Object(r.useCallback)((function(){W(!1),g&&g(te,ie)}),[g,te,ie]),ve=Object(r.useCallback)((function(e){if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ae(e);case"ArrowRight":return e.preventDefault(),void ce(e)}N&&N(e)}),[S,N,ae,ce]),pe=Object(r.useState)(!1),be=pe[0],me=pe[1],he=Object(r.useCallback)((function(e){"hover"===I&&me(!0),T&&T(e)}),[I,T]),ye=Object(r.useCallback)((function(e){me(!1),L&&L(e)}),[L]),je=Object(r.useRef)(0),Oe=Object(r.useRef)(0),Ee=Object(r.useState)(!1),we=Ee[0],ge=Ee[1],xe=v(),Ce=Object(r.useCallback)((function(e){je.current=e.touches[0].clientX,Oe.current=0,A&&ge(!0),D&&D(e)}),[A,D]),Se=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Oe.current=0:Oe.current=e.touches[0].clientX-je.current,J&&J(e)}),[J]),ke=Object(r.useCallback)((function(e){if(A){var t=Oe.current;if(Math.abs(t)<=40)return;t>0?ae(e):ce(e)}xe.set((function(){ge(!1)}),C||void 0),_&&_(e)}),[A,ae,ce,xe,C,_]),Ne=null!=C&&!be&&!we&&!B,Ie=Object(r.useRef)();Object(r.useEffect)((function(){if(Ne)return Ie.current=window.setInterval(document.visibilityState?ue:ce,C||void 0),function(){null!==Ie.current&&clearInterval(Ie.current)}}),[Ne,ce,C,ue]);var Te=Object(r.useMemo)((function(){return h&&Array.from({length:re},(function(e,t){return function(e){j&&j(t,e)}}))}),[h,re,j]);return a.a.createElement(l,Object(o.a)({ref:oe},Q,{onKeyDown:ve,onMouseOver:he,onMouseOut:ye,onTouchStart:Ce,onTouchMove:Se,onTouchEnd:ke,className:b()(K,Y,d&&"slide",p&&Y+"-fade")}),h&&a.a.createElement("ol",{className:Y+"-indicators"},P(H,(function(e,t){return a.a.createElement("li",{key:t,className:t===te?"active":void 0,onClick:Te?Te[t]:void 0})}))),a.a.createElement("div",{className:Y+"-inner"},P(H,(function(e,t){var n=t===te;return d?a.a.createElement(E.a,{in:n,onEnter:n?fe:void 0,onEntered:n?de:void 0,addEndListener:O},(function(t){return a.a.cloneElement(e,{className:b()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&le)})})):a.a.cloneElement(e,{className:b()(e.props.className,n&&"active")})}))),m&&a.a.createElement(a.a.Fragment,null,(R||0!==y)&&a.a.createElement(M,{className:Y+"-control-prev",onClick:ae},X,q&&a.a.createElement("span",{className:"sr-only"},q)),(R||y!==re-1)&&a.a.createElement(M,{className:Y+"-control-next",onClick:ce},V,Z&&a.a.createElement("span",{className:"sr-only"},Z))))}));X.displayName="Carousel",X.propTypes=J,X.defaultProps=_,X.Caption=T,X.Item=L;var q=X,V=n("vOnD"),Z=n("InJ6"),K=(n("9eSz"),n("dSCR")),H=n.n(K),Q=n("9fPl"),Y=n.n(Q),z=Object(V.c)(Z.d).withConfig({displayName:"pages__StyledMainContainer",componentId:"sc-1ppsr5x-0"})(["counter-reset:section;"]),U=(t.default=function(e){var t=e.location,n=e.data;return a.a.createElement(c.i,{location:t},a.a.createElement(z,{className:"fillHeight"},a.a.createElement(c.g,{data:n.hero.edges}),a.a.createElement(q,{interval:4e3,controls:!1,fade:!1},a.a.createElement(q.Item,null,a.a.createElement("img",{src:H.a,alt:"This is the leetcode slide"})),a.a.createElement(q.Item,null,a.a.createElement("img",{src:Y.a,alt:"This is the kickstart slide"}))),a.a.createElement(c.a,{data:n.about.edges}),a.a.createElement(c.h,{data:n.jobs.edges}),a.a.createElement(c.d,{data:n.featured.edges}),a.a.createElement(c.m,{data:n.projects.edges}),a.a.createElement(c.b,{data:n.contact.edges})))},"1984481472")},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function c(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},dSCR:function(e,t,n){e.exports=n.p+"static/leetcode2020-b8197e4eadb819c90cfbc66b6cd96333.jpg"},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}}}]);
//# sourceMappingURL=component---src-pages-index-js-9c59de4680b90500c956.js.map