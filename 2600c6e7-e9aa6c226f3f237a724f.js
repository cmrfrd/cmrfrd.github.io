(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[9],{Jnt7:function(t,e,a){"use strict";var o=a("MUpH"),n=a("wTIg"),r=a("IwoV"),i=a("Orq+"),c=a("zIkO"),s=a("0zKf"),l=a("ijqZ"),d=a("E5eu"),p=a("0ieP"),b=a("2yN9"),u=a("0lfv"),g=a("ZMKu"),h=a("Wbzz"),m=a("q1tI"),f=a.n(m),x=a("txSG"),v=a("qKvR");function O(){var t=Object(o.a)(["\n    transform: scale(",");\n    "]);return O=function(){return t},t}var j=function(t){var e=t.active,a=Object(m.useContext)(r.a),o=a.gridLayout,n=void 0===o?"tiles":o,i=a.setGridLayout,c="tiles"===n,s=Object(m.useState)(!0),l=s[0],d=s[1],b=function(){var t=Object(u.f)().width,e=Object(u.b)("tablet");d(t>e)};return Object(m.useEffect)((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}}),[]),Object(v.d)(I,{isDark:!1},c?Object(v.d)(U,{onClick:function(){e&&l&&i("rows")},active:e&&l,"data-a11y":!1,title:"Show posts in Row grid","aria-label":"Show posts in Row grid"},Object(v.d)(p.a.Rows,null)):Object(v.d)(U,{onClick:function(){e&&l&&i("tiles")},active:e&&l,"data-a11y":!1,title:"Show posts in Tile grid","aria-label":"Show posts in Tile grid"},Object(v.d)(p.a.Tiles,null)))},w=function(){var t=Object(x.e)(),e=t[0],a=t[1],o="dark"===e;return Object(v.d)(I,{isDark:o,onClick:function(t){t.preventDefault(),a(o?"light":"dark")},"data-a11y":!1,"aria-label":o?"Activate light mode":"Activate dark mode",title:o?"Activate light mode":"Activate dark mode"},Object(v.d)(B,{isDark:o}))},y=function(){var t=Object(m.useState)(!1),e=t[0],a=t[1],o="dark"===Object(x.e)()[0],n=o?"#fff":"#000";return Object(v.d)(I,{isDark:o,onClick:function(){e||(Object(u.a)(window.location.href),a(!0),setTimeout((function(){a(!1)}),1e3))},"data-a11y":!1,"aria-label":"Copy URL to clipboard",title:"Copy URL to clipboard"},Object(v.d)(p.a.Link,{fill:n}),Object(v.d)(A,{isDark:o,hasCopied:e},"Copied"))};e.a=function(t){var e=t.enableGridRow,a=t.initialArrowUp,o=Object(m.useState)(a),n=o[0],r=o[1],c=Object(u.f)().width,p=Object(u.b)("phablet"),b=Object(m.useState)(+(c<=p)),h=b[0],x=b[1],O=function(){var t=Object(u.f)().width<=Object(u.b)("phablet");t||r(!1),x(+t)};Object(m.useEffect)((function(){return window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}}),[]);var A=Object(m.useRef)(null),I=Object(m.useRef)(null);Object(m.useEffect)((function(){var t=function(t){I.current&&!I.current.contains(t.target)&&r(!1)};return window.addEventListener("mousedown",t),function(){window.removeEventListener("mousedown",t)}}),[I,A]);var U=Object(d.a)();return Object(v.d)(k,{sticky:U},Object(v.d)(l.a,null,Object(v.d)(C,null,Object(v.d)(N,{to:"/","data-a11y":!1,title:"Navigate back to the homepage","aria-label":"Navigate back to the homepage",state:{arrowUp:n}},Object(v.d)(s.a,null)),h?Object(v.d)("div",{ref:I},Object(v.d)(L,{"data-a11y":!1,title:"Hide/Display menu","aria-label":"Hide/Display menu",ref:A,onClick:function(){r(!n)}},Object(v.d)(i.a,{isOpen:n})),Object(v.d)(g.a,{initial:!1},n&&Object(v.d)(g.b.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:10},exit:{opacity:0,y:-10},transition:{duration:.2}},Object(v.d)(D,null,Object(v.d)(R,null,Object(v.d)(T,{arrow:h},Object(v.d)(S,{to:"/",arrow:h,state:{arrowUp:n},"data-a11y":!1,title:"Navigate back to the homepage","aria-label":"Navigate back to the homepage"},Object(v.d)(_,{arrow:h},"Home")),Object(v.d)(S,{to:"/about",arrow:h,state:{arrowUp:n},"data-a11y":!1,title:"Navigate to the about page","aria-label":"Navigate to the about page"},Object(v.d)(_,{arrow:h},"About")),Object(v.d)(S,{to:"/posts",arrow:h,state:{arrowUp:n},"data-a11y":!1,title:"Navigate to the posts page","aria-label":"Navigate to the posts page"},Object(v.d)(_,{arrow:h},"Posts"))),Object(v.d)(z,null),Object(v.d)(E,null,Object(v.d)(f.a.Fragment,null,Object(v.d)(j,{active:!1}),Object(v.d)(y,null),Object(v.d)(w,null)))))))):Object(v.d)(f.a.Fragment,null,Object(v.d)(T,{arrow:h},Object(v.d)(S,{to:"/",arrow:h,state:{arrowUp:n},"data-a11y":!1,title:"Navigate back to the homepage","aria-label":"Navigate back to the homepage"},Object(v.d)(_,{arrow:h},"Home")),Object(v.d)(S,{to:"/about",arrow:h,state:{arrowUp:n},"data-a11y":!1,title:"Navigate to the about page","aria-label":"Navigate to the about page"},Object(v.d)(_,{arrow:h},"About")),Object(v.d)(S,{to:"/posts",arrow:h,state:{arrowUp:n},"data-a11y":!1,title:"Navigate to the posts page","aria-label":"Navigate to the posts page"},Object(v.d)(_,{arrow:h},"Posts"))),Object(v.d)(E,null,Object(v.d)(f.a.Fragment,null,Object(v.d)(j,{active:e}),Object(v.d)(y,null),Object(v.d)(w,null)))))))};var k=Object(n.a)("div",{target:"em86z8c0"})((function(t){var e;return t.sticky?((e={width:"100%",position:"fixed",top:0,left:0,right:0,opacity:1,zIndex:100,transition:u.h.colorModeTransition,paddingTop:"12px",paddingBottom:"12px",boxShadow:"3px 5px 2px 0px "+t.theme.colors.tintHover,backgroundColor:t.theme.colors.tintBackground})[b.b.desktop()]={paddingTop:"10px",paddingBottom:"10px"},e[b.b.tablet()]={paddingTop:"8px",paddingBottom:"8px"},e[b.b.phablet()]={paddingTop:"8px",paddingBottom:"8px"},e):{width:"100%",position:"fixed",top:0,left:0,right:0,opacity:1,zIndex:100,paddingTop:"16px",paddingBottom:"16px",transition:u.h.colorModeTransition,backgroundColor:t.theme.colors.background}}),""),z=Object(n.a)("div",{target:"em86z8c1"})((function(t){var e;return(e={position:"relative",margin:"5px 15px 50px",borderBottom:"1px solid "+t.theme.colors.horizontalNav,zIndex:0})[b.b.tablet()]={margin:"10px 15px 5px"},e}),""),L=Object(n.a)("div",{target:"em86z8c2"})((function(){return{position:"relative",display:"flex"}}),""),D=Object(n.a)("div",{target:"em86z8c3"})({name:"h99767",styles:"top:15px;right:calc((40px + 2rem) - (1rem + 60px));width:calc(2 * (1rem + 60px));position:absolute;display:flex;flex-direction:column;align-items:center;"}),R=Object(n.a)("nav",{target:"em86z8c4"})((function(t){return{backgroundColor:t.theme.colors.tintBackground,borderRadius:"5px",boxShadow:"rgba(0,0,0,.11) 0 0 0 1px, rgba(0,0,0,.05) 0 10px 10px -5px",border:"0px",paddingBottom:"5px",transition:t.theme.colorModeTransition}}),""),C=Object(n.a)("div",{target:"em86z8c5"})({name:"1h0eplx",styles:"z-index:100;display:flex;justify-content:space-between;"}),N=Object(n.a)(h.Link,{target:"em86z8c6"})((function(t){var e;return(e={position:"relative",display:"flex",alignItems:"center"})[b.b.desktop_medium()]={left:0},e['&[data-a11y="true"]:focus::after']={content:'""',position:"absolute",left:"-10%",top:"-30%",width:"120%",height:"160%",border:"2px solid "+t.theme.colors.accent,background:"rgba(255, 255, 255, 0.01)",borderRadius:"5px"},e["&:hover"]={},e}),""),T=Object(n.a)("div",{target:"em86z8c7"})((function(t){var e;return(e={position:"relative",display:"flex",align:t.arrow?"none":"left",flexDirection:t.arrow?"column":"row",marginRight:"auto"})[b.b.phablet()]={marginLeft:"0%",right:"-1px"},e}),""),E=Object(n.a)("div",{target:"em86z8c8"})((function(){return{position:"relative",display:"flex",alignItems:"center"}}),""),S=Object(n.a)(h.Link,{target:"em86z8c9"})((function(t){var e;return(e={position:"relative",display:"flex",alignItems:"center",marginLeft:"20px",marginRight:"5px",paddingBottom:t.arrow?"6px":"0px",paddingTop:t.arrow?"5px":"0px"})[b.b.phablet()]={marginLeft:"auto",marginRight:"auto"},e}),""),_=Object(n.a)(c.a.h2,{target:"em86z8c10"})((function(t){return"\n    font-family: "+t.theme.fonts.serif+";\n    transition: "+t.theme.colorModeTransition+";\n    font-size: 26px;\n    font-weight: 600;\n\n    "+b.b.desktop_large()+" {\n        font-size: 26px;\n    };\n\n    "+b.b.desktop()+" {\n        font-size: 26px;\n    };\n\n    "+b.b.tablet()+" {\n        font-size: 18px;\n    };\n\n    "+b.b.phablet()+" {\n        font-size: 18px;\n    };\n\n    &::before {\n        content: ' ';\n        display: block;\n        position: relative;\n        width: 100%;\n        height: "+(t.arrow?"2px":"3px")+";\n        top: 1.4em;\n        left: 0;\n        background-color: "+t.theme.colors.primary+";\n        visibility: visible;\n        -webkit-transform: scaleX(1);\n        transform: scaleX(1);\n        -webkit-transition: all 0.25s ease-in-out 0s;\n        transition: all 0.25s ease-in-out 0s;\n    }\n\n    &:hover:before {\n        height: "+(t.arrow?"2px":"3px")+";\n        color: "+t.theme.colors.grey+";\n        visibility: none;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n    }\n    "}),""),A=Object(n.a)("div",{target:"em86z8c11"})((function(t){return{position:"absolute",padding:"3px 10px",background:t.isDark?"#000":t.theme.colors.background,color:t.isDark?"#fff":"#000",borderRadius:"3px",fontSize:"10px",top:"-20px",opacity:t.hasCopied?1:0,transform:t.hasCopied?"translateY(-3px)":"none",transition:t.theme.colorModeTransition,zIndex:100,"&::after":{content:'""',position:"absolute",left:0,right:0,bottom:"-6px",margin:"0 auto",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid "+(t.isDark?"#000":t.theme.colors.background)}}}),""),I=Object(n.a)("div",{target:"em86z8c12"})((function(t){var e;return(e={opacity:.5,position:"relative",borderRadius:"5px",width:"45px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",marginLeft:"25px"})[b.b.phone()]={marginLeft:"2px"},e[b.b.phablet()]={marginLeft:"10px"},e[b.b.tablet()]={marginLeft:"2px",display:"inline-flex",transform:"scale(0.708)","&:hover":{opacity:.5}},e["&:hover"]={opacity:1},e["&[data-a11y='true']:focus::after"]={content:'""',position:"absolute",left:0,top:"-30%",width:"100%",height:"160%",border:"2px solid "+t.theme.colors.accent,background:"rgba(255, 255, 255, 0.01)",borderRadius:"5px"},e}),""),U=Object(n.a)("button",{target:"em86z8c13"})((function(t){return{outline:0,border:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:"36px",width:"36px",borderRadius:"50%",background:"transparent",transition:"background 0.25s","&:not(:last-child)":{marginRight:"30px"},"&:hover":{background:t.theme.colors.hover},"&[data-a11y='true']:focus::after":{content:'""',position:"absolute",left:"-10%",top:"-10%",width:"120%",height:"120%",border:"2px solid p.theme.colors.accent",background:"rgba(255, 255, 255, 0.01)",borderRadius:"50%"},svg:{opacity:t.active?1:.25,transition:"opacity 0.2s",path:{fill:t.theme.colors.primary}}}}),""),B=Object(n.a)("div",{target:"em86z8c14"})((function(t){return"\n    position: relative;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    border: "+(t.isDark?"4px":"2px")+" solid "+t.theme.colors.primary+";\n    background: "+t.theme.colors.primary+";\n    transform: scale("+(t.isDark?.55:1)+");\n    transition: all 0.45s ease;\n    overflow: "+(t.isDark?"visible":"hidden")+";\n\n                            &::before {\n                                outline: 0;\n                                border: 0;\n                                content: ' ';\n                                position: absolute;\n                                right: -9px;\n                                top: -9px;\n                                height: 24px;\n                                width: 24px;\n                                border: 2px solid "+t.theme.colors.primary+";\n                                border-radius: 50%;\n                                transform: translate("+(t.isDark?"14px, -14px":"0, 0")+");\n                                opacity: "+(t.isDark?0:1)+";\n                                transition: transform 0.45s ease;\n                                background: radial-gradient(\n                                    ellipse farthest-corner at 33% 100%,\n                                    "+t.theme.colors.secondary+" 50%,\n                                    "+t.theme.colors.secondary+" 50%\n                                );\n                            }\n\n                            &::after {\n                                content: ' ';\n                                width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    margin: -4px 0 0 -4px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    box-shadow: 0 -23px 0 "+t.theme.colors.primary+", 0 23px 0 "+t.theme.colors.primary+",\n      23px 0 0 "+t.theme.colors.primary+", -23px 0 0 "+t.theme.colors.primary+",\n      15px 15px 0 "+t.theme.colors.primary+", -15px 15px 0 "+t.theme.colors.primary+",\n      15px -15px 0 "+t.theme.colors.primary+", -15px -15px 0 "+t.theme.colors.primary+";\n    transform: scale("+(t.isDark?1:0)+");\n    transition: all 0.35s ease;\n\n    "+b.a.tablet(O(),t.isDark?.92:0)+"\n  }\n    "}),"")}}]);
//# sourceMappingURL=2600c6e7-e9aa6c226f3f237a724f.js.map