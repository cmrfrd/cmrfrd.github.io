(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[3],{"0xIW":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("q1tI");t.default=function(e){n.useEffect(e,[])}},"9+Sh":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isClient="object"==typeof window,t.on=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.removeEventListener.apply(e,t)},t.isDeepEqual=r("nkPT")},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var i,a=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),d=n(r("q1tI")),u=n(r("17x9")),c=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),r=p(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,O=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&d.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function j(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:n})}))}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:n})}))}function x(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),O.set(e,t)),function(){r.unobserve(e),O.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+o+l+r+n+t+a+i+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(R,(0,s.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?d.default.createElement("picture",null,i(n),l):l})),R=d.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:i},g,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,O=e.itemProp,S=e.loading,x=e.draggable,L=h||m;if(!L)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:I?1:0,transition:P?"opacity "+v+"ms":"none"},l),T="boolean"==typeof b?"lightgray":b,_={transitionDelay:v+"ms"},D=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&_,l,f),M={title:t,alt:this.state.isVisible?"":r,style:D,className:p,itemProp:O},H=this.state.isHydrated?g(L):L[0];if(h)return d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&_)}),H.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:L,generateSources:E}),H.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:L,generateSources:j}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(R,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:r,title:t,loading:S},H,{imageVariants:L}))}}));if(m){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},a);return"inherit"===a.display&&delete W.display,d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:T,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&_)}),H.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:L,generateSources:E}),H.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:L,generateSources:j}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(R,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:r,title:t,loading:S},H,{imageVariants:L}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}I.propTypes={resolutions:P,sizes:k,fixed:T(u.default.oneOfType([P,u.default.arrayOf(P)])),fluid:T(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var _=I;t.default=_},CvMP:function(e,t,r){"use strict";r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return T})),r.d(t,"a",(function(){return M}));var n=r("rePB"),i=r("zLVn"),a=r("wTIg"),o=r("2yN9"),l=Object(a.a)("span",{target:"e7uzbb10"})((function(e){var t;return(t={display:"inline-block",textAlign:"center",lineHeight:"1.756",fontSize:"14px",color:e.theme.colors.grey,fontFamily:e.theme.fonts.sansSerif,transition:e.theme.colorModeTransition,margin:"0 auto 25px",width:"100%",maxWidth:"780px",b:{fontWeight:800}})[o.b.desktop()]={maxWidth:"607px"},t[o.b.tablet()]={maxWidth:"586px",margin:"0 auto 25px"},t[o.b.phablet()]={padding:"0 20px"},t}),""),s=r("9eSz"),d=r.n(s),u=r("q1tI"),c=r.n(u),f=r("qKvR");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=Object(a.a)(d.a,{target:"efmq1hu0"})({name:"133qvua",styles:"& > img{filter:blur(8px);}"}),h=function(e){var t=e.src,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({alt:e.alt},Object(i.a)(e,["src","alt"]));if(!t)return null;var a="string"!=typeof t;r[(a&&t.width&&t.height?"fixed":a&&"fluid")||"src"]=t;var o=t.tracedSVG?d.a:g;return a?r.title?Object(f.d)("div",null,Object(f.d)(o,r),Object(f.d)(l,null,r.title)):Object(f.d)(o,r):r.title?Object(f.d)("div",null,Object(f.d)("img",r),Object(f.d)(l,null,r.title)):Object(f.d)("img",r)},m=(r("XseE"),r("i8i4")),b=r("TTI7"),v=r.n(b),y=r("pW3x"),O=r.n(y);Object.create;function w(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var a=arguments[t],o=0,l=a.length;o<l;o++,i++)n[i]=a[o];return n}Object.create;var S=function(e){return e+"ms"},j=function(e){var t=e.height,r=e.innerHeight,n=e.innerWidth,i=e.isLoaded,a=e.isUnloading,o=e.left,l=e.originalTransform,s=e.top,d=e.transitionDuration,u=e.width,c=e.zoomMargin,f=S(d);if(!i||a){var p=w(["scale(1)","translate(0, 0)"],l?[l]:[]).join(" ");return{height:t,left:o,top:s,transform:p,WebkitTransform:p,transitionDuration:f,width:u}}var g=function(e){var t=e.height,r=e.innerHeight,n=e.innerWidth,i=e.width,a=e.zoomMargin,o=n/(i+a),l=r/(t+a);return Math.min(o,l)}({height:t,innerWidth:n,innerHeight:r,width:u,zoomMargin:c}),h=w(["scale("+g+")","translate("+(n/2-(o+u/2))/g+"px, "+(r/2-(s+t/2))/g+"px)"],l?[l]:[]).join(" ");return{height:t,left:o,top:s,transform:h,WebkitTransform:h,transitionDuration:f,width:u}},E={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},x=r("xBDI"),L=r.n(x),C=Object(u.memo)((function(e){var t=e.children,r=e.closeText,n=void 0===r?"Unzoom Image":r,i=e.isActive,a=e.onLoad,o=e.onUnload,l=e.onZoomChange,s=e.overlayBgColorEnd,d=void 0===s?"rgba(255, 255, 255, 0.95)":s,f=e.overlayBgColorStart,p=void 0===f?"rgba(255, 255, 255, 0)":f,g=e.parentRef,h=e.portalEl,b=void 0===h?document.body:h,y=e.scrollableEl,w=void 0===y?window:y,x=e.transitionDuration,C=void 0===x?300:x,z=e.zoomMargin,R=void 0===z?0:z,I=e.zoomZindex,P=void 0===I?2147483647:I,k=Object(u.useRef)(null),T=Object(u.useState)(0)[1],_=Object(u.useState)(i),D=_[0],M=_[1],H=Object(u.useState)(!1),W=H[0],V=H[1],q=Object(u.useState)(!1),B=q[0],A=q[1],N=L()(D),U=L()(i),Z=L()(W),F=O()(),G=F.width,K=F.height,X=Object(u.useCallback)((function(e){e.preventDefault(),l&&l(!1)}),[l]),J=Object(u.useCallback)((function(e){!D||"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),l&&l(!1))}),[D,l]),Y=Object(u.useCallback)((function(){T((function(e){return e+1})),!B&&l&&l(!1)}),[B,l]);v()("keydown",J,document),v()("scroll",Y,w),Object(u.useEffect)((function(){!N&&D&&(V(!0),k.current&&k.current.focus({preventScroll:!0}))}),[D,N]),Object(u.useEffect)((function(){U&&!i&&A(!0),!U&&i&&M(!0)}),[i,U]),Object(u.useEffect)((function(){var e;return B&&(e=setTimeout((function(){V(!1),M(!1),A(!1)}),C)),function(){clearTimeout(e)}}),[B,C]),Object(u.useEffect)((function(){!Z&&W&&a(),Z&&!W&&o()}),[W,a,o,Z]);var $=g.current||E,Q=$.getBoundingClientRect(),ee=Q.height,te=Q.left,re=Q.top,ne=Q.width,ie=function(e){var t=e.isLoaded,r=e.isUnloading,n=e.overlayBgColorEnd,i=e.overlayBgColorStart,a=e.transitionDuration,o=e.zoomZindex,l={backgroundColor:i,transitionDuration:S(a),zIndex:o};return t&&!r&&(l.backgroundColor=n),l}({isLoaded:W,isUnloading:B,overlayBgColorEnd:d,overlayBgColorStart:p,transitionDuration:C,zoomZindex:P}),ae=j({height:ee,isLoaded:W,innerHeight:K,innerWidth:G,isUnloading:B,left:te,originalTransform:$.style.transform,top:re,transitionDuration:C,width:ne,zoomMargin:R});return D?Object(m.createPortal)(c.a.createElement("div",{"aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:ie},c.a.createElement("div",{"data-rmiz-modal-content":!0,style:ae},t),c.a.createElement("button",{"aria-label":n,"data-rmiz-btn-close":!0,onClick:X,ref:k,type:"button"})),b):null})),z=Object(u.memo)((function(e){var t=e.children,r=e.closeText,n=void 0===r?"Unzoom image":r,i=e.isZoomed,a=e.overlayBgColorEnd,o=void 0===a?"rgba(255, 255, 255, 0.95)":a,l=e.overlayBgColorStart,s=void 0===l?"rgba(255, 255, 255, 0)":l,d=e.portalEl,f=e.onZoomChange,p=e.openText,g=void 0===p?"Zoom image":p,h=e.scrollableEl,m=e.transitionDuration,b=void 0===m?300:m,v=e.wrapElement,y=void 0===v?"div":v,O=e.wrapStyle,w=e.zoomMargin,S=void 0===w?0:w,j=e.zoomZindex,E=void 0===j?2147483647:j,x=Object(u.useState)(!1),L=x[0],z=x[1],R=Object(u.useRef)(null),I=Object(u.useRef)(null),P=Object(u.useCallback)((function(e){!i&&f&&(e.preventDefault(),f(!0))}),[i,f]),k=Object(u.useCallback)((function(){z(!0)}),[]),T=Object(u.useCallback)((function(){z(!1),I.current&&I.current.focus({preventScroll:!0})}),[]),_=L?"hidden":"visible";return c.a.createElement(u.StrictMode,null,c.a.createElement(y,{"data-rmiz-wrap":_,ref:R,style:O},t,c.a.createElement("button",{"aria-label":g,"data-rmiz-btn-open":!0,onClick:P,ref:I,type:"button"}),"undefined"!=typeof window&&c.a.createElement(C,{closeText:n,isActive:i,onLoad:k,onUnload:T,onZoomChange:f,overlayBgColorEnd:o,overlayBgColorStart:s,parentRef:R,portalEl:d,scrollableEl:h,transitionDuration:b,zoomMargin:S,zoomZindex:E},t)))})),R=r("txSG");r("Ehpq");function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,T=function(e){var t=e.title,r=Object(i.a)(e,["title"]),n=Object(u.useState)(!1),a=n[0],o=n[1],s=Object(R.f)().theme,d=P(P({},r),{},{className:"Image__Zoom",style:{display:"block",margin:"0 auto",width:"100%",borderRadius:a?"5px":"0px"}}),c=Object(u.useCallback)((function(e){o(e)}),[]);return Object(f.d)("span",null,Object(f.d)(z,{wrapElement:"span",isZoomed:a,onZoomChange:c,zoomMargin:40,overlayBgColorEnd:s.colors.background},Object(f.d)("img",d)),Object(f.d)(l,null,t))},_=r("wx14"),D=Object(a.a)("div",{target:"e17ndwi0"})(((k={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"#ccc",color:"#898989",fontSize:"32px",fontWeight:600})[o.a.phablet()]={fontSize:"28px"},k),""),M=function(e){var t=Object(u.useRef)(null),r=Object(u.useState)({width:0,height:0}),n=r[0],i=r[1];return Object(u.useEffect)((function(){i(t.current.getBoundingClientRect());var e=function(){return i(t.current.getBoundingClientRect())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(f.d)(D,Object(_.a)({ref:t},e),Object(f.d)("div",null,n.width," x ",n.height))}},Ehpq:function(e,t,r){},TTI7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("q1tI"),i=r("9+Sh").isClient?window:null,a=function(e){return!!e.addEventListener},o=function(e){return!!e.on};t.default=function(e,t,r,l){void 0===r&&(r=i),n.useEffect((function(){if(t&&r)return a(r)?r.addEventListener(e,t,l):o(r)&&r.on(e,t,l),function(){a(r)?r.removeEventListener(e,t,l):o(r)&&r.off(e,t,l)}}),[e,t,r,JSON.stringify(l)])}},XseE:function(e,t){!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){e=!0}}))}catch(r){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(e){var t=window.scrollY||window.pageYOffset;this.nativeFocus(),e&&e.preventScroll&&setTimeout((function(){window.scroll(window.scrollX||window.pageXOffset,t)}),0)}}}}()},eM9k:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i=r("q1tI"),a=n.__importDefault(r("n5OK"));t.default=function(e){var t=i.useRef(0),r=i.useState(e),n=r[0],o=r[1],l=i.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){o(e)}))}),[]);return a.default((function(){cancelAnimationFrame(t.current)})),[n,l]}},n5OK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i=r("q1tI"),a=n.__importDefault(r("0xIW"));t.default=function(e){var t=i.useRef(e);t.current=e,a.default((function(){return function(){return t.current()}}))}},nkPT:function(e,t,r){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,i,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=n;0!=i--;){var o=a[i];if(("_owner"!==o||!t.$$typeof)&&!e(t[o],r[o]))return!1}return!0}return t!=t&&r!=r}},pW3x:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i=r("q1tI"),a=n.__importDefault(r("eM9k")),o=r("9+Sh");t.default=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var r=a.default({width:o.isClient?window.innerWidth:e,height:o.isClient?window.innerHeight:t}),n=r[0],l=r[1];return i.useEffect((function(){if(o.isClient){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),n}},xBDI:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("q1tI");t.default=function(e){var t=n.useRef();return n.useEffect((function(){t.current=e})),t.current}}}]);
//# sourceMappingURL=65a00deca04a3c402a5595b947498ec1c4c3a37b-1436e52e9c289f22f1fd.js.map