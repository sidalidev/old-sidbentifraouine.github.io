(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(194),o=n(192);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},187:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},188:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a});n(187);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},190:function(e){e.exports={data:{site:{siteMetadata:{title:"Sid Bentifraouine's Website"}}}}},191:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(60),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},192:function(e,t,n){"use strict";var a=n(193),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(197),u=n.n(s);function l(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,s=a.data.site,l=t||s.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Sid Bentifraouine's Website",description:"Get to know me better with this website",author:"sidbentifraouine@gmail.com"}}}}},194:function(e,t,n){"use strict";var a=n(190),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(188),u=n(189),l=(n(196),n(195)),d=u.b.footer.withConfig({displayName:"footer__Container",componentId:"sc-7dhpj3-0"})(["align-self:end;background-color:",";width:100%;padding-top:1rem;margin:0;display:grid;align-items:center;justify-items:center;grid-row-gap:0.5rem;box-shadow:0px -1px 1px rgba(0,0,0,0.1);color:",";p{margin:0;padding:0;a{text-decoration:none;font-weight:bold;}}"],function(e){return e.theme.white},function(e){return e.theme.black}),m=u.b.div.withConfig({displayName:"footer__SocialLinks",componentId:"sc-7dhpj3-1"})(["display:grid;grid-template:none / repeat(",",1fr);grid-gap:0 50px;align-items:center;justify-items:center;& > a{transition:all 0.3s ease-out;text-decoration:none;&:hover{transform:scale(1.2);cursor:pointer;}}"],function(e){return e.columnsNumber}),p=[{url:"https://medium.com/@sidbentifraouine",icon:function(){return i.a.createElement(l.e,{size:35,color:"#12100E"})}},{url:"https://twitter.com/sbentifraouine",icon:function(){return i.a.createElement(l.f,{size:35,color:"#1E9EED"})}},{url:"https://github.com/sidbentifraouine",icon:function(){return i.a.createElement(l.b,{size:35,color:"#23282E"})}},{url:"https://www.linkedin.com/in/sidbentifraouine",icon:function(){return i.a.createElement(l.d,{size:35,color:"#0077B5"})}},{url:"https://dev.to/sidbentifraouine",icon:function(){return i.a.createElement(l.a,{size:35,color:"#0D0E0F"})}}],f=function(){return i.a.createElement(d,null,i.a.createElement(m,{columnsNumber:Object.getOwnPropertyNames(p).length-1},p.map(function(e){return i.a.createElement("a",{key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(e.icon,null))})),i.a.createElement("small",null,"© 2019, Sid Bentifraouine"))},g={white:"#FDFDFF",black:"#393D3F",red:"#BE3A31"},h=u.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1a9884f-0"})(["display:grid;justify-items:center;grid-gap:4rem 0;width:100%;height:100%;"]),b=function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(u.a,{theme:g},i.a.createElement(h,null,i.a.createElement("main",null,t),i.a.createElement(f,null)))},data:a})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-63a7bd588edd4e8c0f1b.js.map