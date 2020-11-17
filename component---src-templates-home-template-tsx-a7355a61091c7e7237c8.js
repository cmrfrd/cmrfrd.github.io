/*! For license information please see component---src-templates-home-template-tsx-a7355a61091c7e7237c8.js.LICENSE.txt */
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[14],{IzBv:function(t,e,n){},Mj6V:function(t,e,n){var r,o;void 0===(o="function"==typeof(r=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=o(t,r.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(r.barSelector),l=r.speed,d=r.easing;return u.offsetWidth,a((function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),s(c,function(t,e,n){var o;return(o="translate3d"===r.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+e+"ms "+n,o}(t,l,d)),1===t?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),l)}),l)):setTimeout(e,l)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){return n.status||n.set(0),r.trickle&&function t(){setTimeout((function(){n.status&&(n.trickle(),t())}),r.trickleSpeed)}(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*o(Math.random()*e,.1,.95)),e=o(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always((function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var o,a=e.querySelector(r.barSelector),u=t?"-100":i(n.status||0),l=document.querySelector(r.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(o=e.querySelector(r.spinnerSelector))&&p(o),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&p(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var a=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,o=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((r=t[o]+i)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,o,i=arguments;if(2==i.length)for(n in e)void 0!==(o=e[n])&&e.hasOwnProperty(n)&&r(t,n,o);else r(t,i[1],i[2])}}();function u(t,e){return("string"==typeof t?t:d(t)).indexOf(" "+e+" ")>=0}function c(t,e){var n=d(t),r=n+e;u(n,e)||(t.className=r.substring(1))}function l(t,e){var n,r=d(t);u(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function d(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function p(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?r.call(e,n,e,t):r)||(t.exports=o)},Zgdg:function(t,e,n){"use strict";n.r(e);var r,o=n("wTIg"),i=n("MUpH"),a=n("zIkO"),s=n("Wbzz"),u=n("q1tI"),c=n("qKvR"),l=function(){return Object(s.useStaticQuery)("3555769986").site.siteMetadata.siteName},d=function(t){return{color:""+t.theme.colors.primary,fontFamily:""+t.theme.fonts.serif,marginTop:"20px",overflow:"auto",display:"inline",padding:"0 0px !important"}},p=function(){var t=Object(o.a)(a.a.h1,{target:"e13inszh0"})(d,"");return Object(c.d)(t,null,l())},f=n("ijqZ"),m=n("2yN9");function b(){var t=Object(i.a)(["\ndisplay: none;\n"]);return b=function(){return t},t}function g(){var t=Object(i.a)(["\ndisplay: none;\n"]);return g=function(){return t},t}function v(){var t=Object(i.a)(["\nmargin-bottom: 60px;\n"]);return v=function(){return t},t}function h(){var t=Object(i.a)(["\nmargin-bottom: 80px;\n"]);return h=function(){return t},t}var y,O=function(){var t=Object(s.useStaticQuery)("2200830765").home.edges[0].node.home.hero;return Object(c.d)(f.a,{relative:!0,id:"Posts__Hero"},Object(c.d)(j,{style:{maxWidth:t.maxWidth+"px"}},Object(c.d)(S,null,Object(c.d)(p,null)),Object(c.d)(S,null,t.heading)),Object(c.d)(x,null))},x=Object(o.a)("div",{target:"e1fu8bpe0"})("position:relative;margin:20px auto 20px;border-bottom:1px solid ",(function(t){return t.theme.colors.horizontalNav}),";"),j=(Object(o.a)("div",{target:"e1fu8bpe1"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",m.a.desktop(h()),";",m.a.tablet(v()),";",m.a.phablet(g()),";"),Object(o.a)("div",{target:"e1fu8bpe2"})("display:flex;align-items:center;",m.a.tablet(b()),";"),Object(o.a)("div",{target:"e1fu8bpe3"})(((r={margin:"100px auto",paddingTop:"150px",paddingBottom:"150px",position:"relative"})[m.b.desktop()]={width:"95%",paddingTop:"120px",paddingBottom:"120px"},r[m.b.tablet()]={width:"100%"},r[m.b.phablet()]={width:"100%",paddingTop:"100px",paddingBottom:"100px"},r[m.b.phone_large()]={width:"100%",paddingTop:"115px",paddingBottom:"115px"},r[m.b.phone()]={width:"100%",paddingTop:"90px",paddingBottom:"90px"},r),"")),S=Object(o.a)(a.a.h2,{target:"e1fu8bpe4"})("font-family:",(function(t){return t.theme.fonts.serif}),";font-style:normal;font-weight:600;line-height:1.15;margin-top:20px;font-size:26px;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}",m.b.desktop(),"{font-size:26px;}",m.b.tablet(),"{font-size:18px;}",m.b.phablet(),"{font-size:18px;};"),w=n("VgSH"),T=n("AaJB"),k=n("ytpH"),z=(n("IzBv"),n("Mj6V")),_=n.n(z);e.default=function(t){var e=t.location,n=t.pageContext;"undefined"!=typeof window&&function(t){var e=void 0===t?{mountOnly:!0}:t,n=e.mountOnly,r=void 0===n||n,o=e.configure,i=void 0===o?{}:o,a=Object(u.useState)(!1),s=a[0],c=a[1];s||(_.a.configure(i),_.a.start()),Object(u.useEffect)((function(){c(!0),s&&r&&_.a.done()})),_.a.status,_.a.done}();var r=n.homePageData.edges[0].node.home,o=r.numberOfPosts,i=r.morePostsText,a=r.postsHeadingText,l=n.posts.slice(0,o);return Object(c.d)("span",null,Object(c.d)(k.a,{pathname:e.pathname}),Object(c.d)(O,null),Object(c.d)(f.a,{narrow:!0},Object(c.d)(B,null,Object(c.d)(M,null,a),Object(c.d)(w.a,{posts:l}),Object(c.d)(q,null,Object(c.d)(s.Link,{to:"/posts"},Object(c.d)(T.b,{text:i}))))))};var B=Object(o.a)("div",{target:"e1qsnmff0"})((function(t){return{position:"relative",bottom:0,left:0,zIndex:1,width:"100%",transition:t.theme.colorModeTransition}}),""),M=Object(o.a)(a.a.h2,{target:"e1qsnmff1"})((function(t){var e;return(e={fontStyle:"normal",fontSize:"30px",lineHeight:"1.15",color:""+t.theme.colors.primary,paddingBottom:"20px",a:{color:""+t.theme.colors.accent}})[m.b.desktop()]={fontSize:"20px"},e[m.b.phablet()]={padding:"0 10px"},e}),""),q=Object(o.a)("div",{target:"e1qsnmff2"})(((y={marginTop:"100px",display:"flex",flexDirection:"row"})[m.b.phablet()]={position:"relative",display:"block",textAlign:"center"},y),"")}}]);
//# sourceMappingURL=component---src-templates-home-template-tsx-a7355a61091c7e7237c8.js.map