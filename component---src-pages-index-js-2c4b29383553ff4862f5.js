(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(146),s=a(152),o=a(161),l=a(162),d=a.n(l),c=function(){return r.a.createElement(n.b,{query:"172988401",render:function(e){return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(150);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react","Sid","Ali","Bentifraouine","Lille","France"]}),r.a.createElement("div",{style:{textAlign:"center",paddingTop:"100px"}},r.a.createElement("p",null,"Still working on this site... 🔨"),r.a.createElement("h1",null,"Hi people I'm Sid"),r.a.createElement("p",null,"I'm a Frontend Engineer who loves learning and sharing new things with love 👨‍💻❤️"),r.a.createElement("div",{style:{maxWidth:"600px",display:"grid",margin:"0 auto"}},r.a.createElement(c,null))))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(147);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){var i;e.exports=(i=a(149))&&i.default||i},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";var i=a(151),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(154),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var i=a(148),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(146),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};a(153);var c=function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("main",null,t),n.a.createElement("footer",{style:{backgroundColor:"#001f3f",width:"100vw",height:"10vh",padding:0,margin:0,display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("p",{style:{color:"white",margin:0,padding:0}},"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{style:{textDecoration:"none",color:"white",fontWeight:"bold"},href:"https://www.gatsbyjs.org"},"Gatsby")))))},data:i})};c.propTypes={children:o.a.node.isRequired};t.a=c},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAC4jAAAuIwF4pT92AAADoUlEQVQ4y21Ta2yTVRj+/puY+Bf/mGiMMZDpDxP/EKdxKEMygxtOOpUZ5qZhdg0uSHQKLLILlTh+qAljwyAONtiw3dgGdGNtBXq/d72s7VjHul7W9fb1O5fvnM/TduAlPsn5zvu9533Oeznvy0mPQKnEIykjSGubJBjDjhXxfkTSLNIZjzTrk6Yc4pwHuaO4AGjFmG0cLclSIk/nvOKZ6yutfXf2fz25p+PqzoPnqmq/e7Fa8UrtVwc6L52ZiP6qLV7QCVcMwPMQV1gcW7xAfJGsNZy9Pmu+oLJennH9pjb/+Mu1HuVwz+mh7t7BU8rhkSmLdSnvj4nuKHI8QJYIKkLKCZgagxDnNwhO0dz6VgL/B0opQKIkEUrJtAPOOiEXThC1lcfsjOedIxdH1dNEkhAmRQHyRZjnAYRIAAgijDEBiIgiYcJtNxw1AM4cAieHzAhC5s5w+NB003tZpzETj9q8q/bAumVxLZbM+UMxoz2SzRWZC0JK/FsucM0EOHu40Hl2HmMWj+RsbjS2txXSKVjkAYAAIoSwAOCkxnVx3BBPZplNKQBCNF4y70VcukB7h/Tsf35O90N1dSbol8r3P86U3as3hW7pFjM5npT1S6EVed/UWkbiInGkODkSCIZ2Nx1+68DnPF+02H0Gs8dk9fqDD0gZtAzmkzGXlx+2dii372x1B2PctCm1q+HY6MTkDY3uhPLnzUz+zTp5TV3Hsy/tlx06zjgVfoUZCITfb1Ve1QQbPju7YI5wfZd9ez7qFiHQaO9bHB6eB43N37Z19LOv4tgAy/mxT58/XNd8ekyfyAmwa2AymRG473/3y/unstms2WxmFsnUZuPBrk/lfW/sbW9p7xXLYProavyZHfXnx41MTm2kpxYWSx2msoAr+hSrf6UY6c3ctufrnny6hnvi1dr6L5mmol9dS0yoFyo1TCRSYzPOEnllg9zxiez1S+EhCIBwz+TW3XNo/7S5vEv/abLSebGQyxV0rjSt9HYBkEAM6wNkTBuTtfbs+6BT9knXhy3HZS0n9jYceadesauuffc+RVNbj/ybc8rBmypTdilZekWOPprHZI7YotJPE/6qmqNPvSDb/nbXy++eeu61I9uqPt7x+hfy3huDs/Hh+czwQvG2B0NMt6aK/mOkGdYL0sB4sKVfKx+4233Jd16zoXIQtVsaMxG1HbuiIha3GNzfQ7NFLu2YSNZlrLIhlY38YRXVNqjzgVBcFNC/SvAXsTVtzkYRAgkAAAAASUVORK5CYII=",aspectRatio:1.1269123033828916,src:"/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/59139/sid-the-builder.png",srcSet:"/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/d3809/sid-the-builder.png 150w,\n/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/fdbb0/sid-the-builder.png 300w,\n/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/59139/sid-the-builder.png 600w,\n/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/cb30f/sid-the-builder.png 900w,\n/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/ba299/sid-the-builder.png 1200w,\n/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/3e65a/sid-the-builder.png 1800w,\n/static/ea87a6ca94a70bb13bf4bbfb63ce0e71/34d38/sid-the-builder.png 10460w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},162:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(75)),l=i(a(76)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,w=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,A=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:E?1:0,transition:A?"opacity "+w+"ms":"none"},o),L="boolean"==typeof y?"lightgray":y,x={transitionDelay:w+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},A&&x,o,f),k={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(h){var T=h;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),L&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&x)}),T.base64&&d.default.createElement(m,(0,l.default)({src:T.base64},k)),T.tracedSVG&&d.default.createElement(m,(0,l.default)({src:T.tracedSVG},k)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(m,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t},T))}}))}if(g){var j=g,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},L&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:L,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},A&&x)}),j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},k)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},k)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t},j))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=y;t.default=v}}]);
//# sourceMappingURL=component---src-pages-index-js-2c4b29383553ff4862f5.js.map