(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);a(166);var i=a(7),n=a.n(i),l=a(49),r=a.n(l),c=a(0),s=a.n(c),o=a(146),m=a(4),u=a.n(m),d=function(e){return s.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",null,"Alexander Comerford"),s.a.createElement("p",null,s.a.createElement("pre",null,"I am a data scientist with a background in nanoscale engineering I enjoy machine learning, data visualisations, parallel computing, physics, chemistry, and all things data science."))),s.a.createElement("div",null,s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://twitter.com/4l3x_c0m3rf0rd",className:"icon fa-twitter"},s.a.createElement("span",{className:"label"},"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.linkedin.com/in/ajcomerford/",className:"icon fa-linkedin"},s.a.createElement("span",{className:"label"},"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.instagram.com/cmrfrd/",className:"icon fa-instagram"},s.a.createElement("span",{className:"label"},"Instagram"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/cmrfrd",className:"icon fa-github"},s.a.createElement("span",{className:"label"},"GitHub")))))))};d.propTypes={onOpenArticle:u.a.func,timeout:u.a.bool};var p=d,h=function(e){return s.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},s.a.createElement("p",{className:"copyright"},"© Alexander Comerford | Made with ","<3"))};h.propTypes={timeout:u.a.bool};var f=h,E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(r()(r()(a))),a.handleCloseArticle=a.handleCloseArticle.bind(r()(r()(a))),a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.render=function(){return s.a.createElement(o.a,{location:this.props.location},s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},s.a.createElement("div",{id:"wrapper"},s.a.createElement(p,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),s.a.createElement(f,{timeout:this.state.timeout})),s.a.createElement("div",{id:"bg"})))},t}(s.a.Component);t.default=E},166:function(e,t,a){var i=a(6);i(i.P,"Function",{bind:a(167)})},167:function(e,t,a){"use strict";var i=a(16),n=a(10),l=a(76),r=[].slice,c={};e.exports=Function.bind||function(e){var t=i(this),a=r.call(arguments,1),s=function(){var i=a.concat(r.call(arguments));return this instanceof s?function(e,t,a){if(!(t in c)){for(var i=[],n=0;n<t;n++)i[n]="a["+n+"]";c[t]=Function("F,a","return new F("+i.join(",")+")")}return c[t](e,a)}(t,i.length,i):l(t,i,e)};return n(t.prototype)&&(s.prototype=t.prototype),s}}}]);
//# sourceMappingURL=component---src-pages-index-js-28deb6323d6455fab14c.js.map