(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152),o=n(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a});n(147);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Sid Bentifraouine Website"}}}}},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(155),s=n.n(l);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,l=a.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Sid Bentifraouine Website",description:"Get to know me better with this website",author:"sidbentifraouine@gmail.com"}}}}},152:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(146),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};n(153);var u=n(154).a.footer.withConfig({displayName:"Footer__Container",componentId:"b1yde4-0"})(["background-color:#001f3f;width:100vw;height:10vh;padding:0;margin:0;display:flex;align-items:center;justify-content:center;p{color:white;margin:0;padding:0;a{text-decoration:none;color:white;font-weight:bold;}}"]),d=function(){return i.a.createElement(u,null,i.a.createElement("p",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},p=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement(d,null)))},data:a})};p.propTypes={children:c.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-c1814c92841ea287949a.js.map