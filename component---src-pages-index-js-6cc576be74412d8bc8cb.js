(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(189),o=a(212),l=a.n(o),c=a(195),d=a(221),s=a(194),m=a(213),u=a(187),p=a(214),f=a.n(p),g=function(){return i.a.createElement(u.b,{query:"172988401",render:function(e){return i.a.createElement(f.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:m})},b=a(192),h=r.b.div.withConfig({displayName:"pages__Container",componentId:"sc-1mkgj7p-0"})(["display:grid;justify-items:center;align-items:center;max-width:50vw;padding:1rem 0;@media screen and (max-width:720px){max-width:80vw;}.balloon-enter,.balloon-appear{opacity:0;}.balloon-enter-active,.balloon-appear-active{opacity:1;transition:opacity 2s;}"]),y=r.b.div.withConfig({displayName:"pages__Greetings",componentId:"sc-1mkgj7p-1"})(["text-align:center;.Typist{color:",";display:block;font-size:3rem;font-weight:bold;margin:0.5em 0em;line-height:1.5;}"],function(e){return e.theme.black}),w=r.b.div.withConfig({displayName:"pages__ImageContainer",componentId:"sc-1mkgj7p-2"})(["min-width:100%;div{height:100% !important;}img{margin:0 auto;}"]),E=r.b.div.withConfig({displayName:"pages__LogoWrapper",componentId:"sc-1mkgj7p-3"})(["img{max-width:100px;}"]);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(b.a,{title:"Home",keywords:["gatsby","application","react","Sid Bentifraouine"]}),i.a.createElement(h,null,i.a.createElement(d.a,{classNames:"balloon",in:!0,appear:!0,timeout:2e3},i.a.createElement(E,null,i.a.createElement("img",{src:a(218)}))),i.a.createElement(y,null,i.a.createElement(l.a,{className:"Greetings",cursor:{show:!0,blink:!0,startDelay:5e3,hideWhenDone:!0,hideWhenDoneDelay:3e3,element:"_"}},"Hi, I'm Sid"),i.a.createElement("p",null,"A Frontend Engineer who loves learning and sharing new things with love ",i.a.createElement(c.b,{size:25,color:"red"}))),i.a.createElement(d.a,{classNames:"balloon",in:!0,appear:!0,timeout:2e3},i.a.createElement(w,null,i.a.createElement(g,{name:"sid-the-builder"})))))}},187:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(188);var d=i.a.createContext({}),s=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},188:function(e,t,a){var n;e.exports=(n=a(191))&&n.default||n},190:function(e){e.exports={data:{site:{siteMetadata:{title:"Sid Bentifraouine Website"}}}}},191:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(60),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},192:function(e,t,a){"use strict";var n=a(193),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(197),d=a.n(c);function s(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Sid Bentifraouine Website",description:"Get to know me better with this website",author:"sidbentifraouine@gmail.com"}}}}},194:function(e,t,a){"use strict";var n=a(190),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(187),d=a(189),s=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};a(196),a(17);var m=a(195),u=d.b.footer.withConfig({displayName:"Footer__Container",componentId:"b1yde4-0"})(["align-self:end;background-color:",";width:100vw;padding-top:1rem;margin:0;display:grid;align-items:center;justify-items:center;grid-row-gap:0.5rem;box-shadow:0px -1px 1px rgba(0,0,0,0.1);color:",";p{margin:0;padding:0;a{text-decoration:none;font-weight:bold;}}"],function(e){return e.theme.white},function(e){return e.theme.black}),p=d.b.div.withConfig({displayName:"Footer__SocialLinks",componentId:"b1yde4-1"})(["display:grid;grid-template:none / repeat(4,1fr);grid-gap:0 50px;align-items:center;justify-items:center;& > a{transition:0.5s;text-decoration:none;&:hover{transform:scale(1.2);cursor:pointer;}}"]),f={url:"https://medium.com/@sidbentifraouine",color:"#12100E"},g={url:"https://twitter.com/sbentifraouine",color:"#1E9EED"},b={url:"https://www.linkedin.com/in/sidbentifraouine",color:"#0077B5"},h={url:"https://dev.to/sidbentifraouine",color:"#0D0E0F"},y=function(){return r.a.createElement(u,null,r.a.createElement(p,null,r.a.createElement("a",{href:b.url,target:"_blank"},r.a.createElement(m.c,{size:25,color:b.color})),r.a.createElement("a",{href:g.url,target:"_blank"},r.a.createElement(m.e,{size:25,color:g.color})),r.a.createElement("a",{href:h.url,target:"_blank"},r.a.createElement(m.a,{size:25,color:h.color})),r.a.createElement("a",{href:f.url,target:"_blank"},r.a.createElement(m.d,{size:25,color:f.color}))),r.a.createElement("small",null,"© 2019, Sid Bentifraouine"))},w={white:"#FDFDFF",black:"#393D3F",red:"#BE3A31"},E=d.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1a9884f-0"})(["display:grid;justify-items:center;height:100vh;width:100vw;grid-gap:4rem 0;"]),A=function(e){var t=e.children;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(d.a,{theme:w},r.a.createElement(E,null,r.a.createElement("main",null,t),r.a.createElement(y,null)))},data:n})};A.propTypes={children:l.a.node.isRequired};t.a=A},213:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAC4jAAAuIwF4pT92AAADoUlEQVQ4y21Ta2yTVRj+/puY+Bf/mGiMMZDpDxP/EKdxKEMygxtOOpUZ5qZhdg0uSHQKLLILlTh+qAljwyAONtiw3dgGdGNtBXq/d72s7VjHul7W9fb1O5fvnM/TduAlPsn5zvu9533Oeznvy0mPQKnEIykjSGubJBjDjhXxfkTSLNIZjzTrk6Yc4pwHuaO4AGjFmG0cLclSIk/nvOKZ6yutfXf2fz25p+PqzoPnqmq/e7Fa8UrtVwc6L52ZiP6qLV7QCVcMwPMQV1gcW7xAfJGsNZy9Pmu+oLJennH9pjb/+Mu1HuVwz+mh7t7BU8rhkSmLdSnvj4nuKHI8QJYIKkLKCZgagxDnNwhO0dz6VgL/B0opQKIkEUrJtAPOOiEXThC1lcfsjOedIxdH1dNEkhAmRQHyRZjnAYRIAAgijDEBiIgiYcJtNxw1AM4cAieHzAhC5s5w+NB003tZpzETj9q8q/bAumVxLZbM+UMxoz2SzRWZC0JK/FsucM0EOHu40Hl2HmMWj+RsbjS2txXSKVjkAYAAIoSwAOCkxnVx3BBPZplNKQBCNF4y70VcukB7h/Tsf35O90N1dSbol8r3P86U3as3hW7pFjM5npT1S6EVed/UWkbiInGkODkSCIZ2Nx1+68DnPF+02H0Gs8dk9fqDD0gZtAzmkzGXlx+2dii372x1B2PctCm1q+HY6MTkDY3uhPLnzUz+zTp5TV3Hsy/tlx06zjgVfoUZCITfb1Ve1QQbPju7YI5wfZd9ez7qFiHQaO9bHB6eB43N37Z19LOv4tgAy/mxT58/XNd8ekyfyAmwa2AymRG473/3y/unstms2WxmFsnUZuPBrk/lfW/sbW9p7xXLYProavyZHfXnx41MTm2kpxYWSx2msoAr+hSrf6UY6c3ctufrnny6hnvi1dr6L5mmol9dS0yoFyo1TCRSYzPOEnllg9zxiez1S+EhCIBwz+TW3XNo/7S5vEv/abLSebGQyxV0rjSt9HYBkEAM6wNkTBuTtfbs+6BT9knXhy3HZS0n9jYceadesauuffc+RVNbj/ybc8rBmypTdilZekWOPprHZI7YotJPE/6qmqNPvSDb/nbXy++eeu61I9uqPt7x+hfy3huDs/Hh+czwQvG2B0NMt6aK/mOkGdYL0sB4sKVfKx+4233Jd16zoXIQtVsaMxG1HbuiIha3GNzfQ7NFLu2YSNZlrLIhlY38YRXVNqjzgVBcFNC/SvAXsTVtzkYRAgkAAAAASUVORK5CYII=",aspectRatio:1.127019748653501,src:"/static/9b82ba8f22025988d8ee67ffa2a7dff4/59139/sid-the-builder.png",srcSet:"/static/9b82ba8f22025988d8ee67ffa2a7dff4/d3809/sid-the-builder.png 150w,\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/fdbb0/sid-the-builder.png 300w,\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/59139/sid-the-builder.png 600w,\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/cb30f/sid-the-builder.png 900w,\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/ba299/sid-the-builder.png 1200w,\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/3e65a/sid-the-builder.png 1800w,\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/571ba/sid-the-builder.png 2511w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},218:function(e,t,a){e.exports=a.p+"static/sid-logo-ff530640e4a86b0fb4458a9c5484cbe1.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-6cc576be74412d8bc8cb.js.map