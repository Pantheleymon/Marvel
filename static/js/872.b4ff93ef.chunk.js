"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[872],{613:(e,t,n)=>{n.d(t,{Z:()=>a});const s=n.p+"static/media/error.30c120f04986e346ac9a.gif";var r=n(184);const a=()=>(0,r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"error"})},151:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var s=n(791),r=n(394),a=n(613),i=n(304);const o=n.p+"static/media/mjolnir.61f31e1809f12183a524.png";var c=n(184);const l=e=>{let{char:t}=e;const{name:n,description:s,thumbnail:r,homepage:a,wiki:i}=t;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),(0,c.jsxs)("div",{className:"randomchar__block",children:[(0,c.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:o}),(0,c.jsxs)("div",{className:"randomchar__info",children:[(0,c.jsx)("p",{className:"randomchar__name",children:n}),(0,c.jsx)("p",{className:"randomchar__descr",children:s}),(0,c.jsxs)("div",{className:"randomchar__btns",children:[(0,c.jsx)("a",{href:a,className:"button button__main",children:(0,c.jsx)("div",{className:"inner",children:"homepage"})}),(0,c.jsx)("a",{href:i,className:"button button__secondary",children:(0,c.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},u=()=>{const[e,t]=(0,s.useState)({}),{loading:n,error:u,getCharacter:d,clearError:h}=(0,i.Z)();(0,s.useEffect)((()=>{m()}),[]);const p=e=>{t(e)},m=()=>{h();const e=Math.floor(400*Math.random()+1011e3);d(e).then(p)},f=u?(0,c.jsx)(a.Z,{}):null,x=n?(0,c.jsx)(r.Z,{}):null,v=n||u?null:(0,c.jsx)(l,{char:e});return(0,c.jsxs)("div",{className:"randomchar",children:[f,x,v,(0,c.jsxs)("div",{className:"randomchar__static",children:[(0,c.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,c.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,c.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,c.jsx)("button",{onClick:m,className:"button button__main",children:(0,c.jsx)("div",{className:"inner",children:"try it"})}),(0,c.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},d.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function f(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var x=n(164);const v=!1,E=s.createContext(null);var g=function(e){return e.scrollTop},b="unmounted",j="exited",_="entering",N="entered",C="exiting",k=function(e){function t(t,n){var s;s=e.call(this,t,n)||this;var r,a=n&&!n.isMounting?t.enter:t.appear;return s.appearStatus=null,t.in?a?(r=j,s.appearStatus=_):r=N:r=t.unmountOnExit||t.mountOnEnter?b:j,s.state={status:r},s.nextCallback=null,s}m(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===b?{status:j}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==_&&n!==N&&(t=_):n!==_&&n!==N||(t=C)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,s=this.props.timeout;return e=t=n=s,null!=s&&"number"!==typeof s&&(e=s.exit,t=s.enter,n=void 0!==s.appear?s.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===_){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this);n&&g(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===j&&this.setState({status:b})},n.performEnter=function(e){var t=this,n=this.props.enter,s=this.context?this.context.isMounting:e,r=this.props.nodeRef?[s]:[x.findDOMNode(this),s],a=r[0],i=r[1],o=this.getTimeouts(),c=s?o.appear:o.enter;!e&&!n||v?this.safeSetState({status:N},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:_},(function(){t.props.onEntering(a,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:N},(function(){t.props.onEntered(a,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:x.findDOMNode(this);t&&!v?(this.props.onExit(s),this.safeSetState({status:C},(function(){e.props.onExiting(s),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:j},(function(){e.props.onExited(s)}))}))}))):this.safeSetState({status:j},(function(){e.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this),s=null==e&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],i=r[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===b)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,h(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(E.Provider,{value:null},"function"===typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function y(){}k.contextType=E,k.propTypes={},k.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y},k.UNMOUNTED=b,k.EXITED=j,k.ENTERING=_,k.ENTERED=N,k.EXITING=C;const S=k;var O=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.remove(s):"string"===typeof n.className?n.className=f(n.className,s):n.setAttribute("class",f(n.className&&n.className.baseVal||"",s)));var n,s}))},w=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var s=t.resolveArguments(e,n),r=s[0],a=s[1];t.removeClasses(r,"exit"),t.addClass(r,a?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var s=t.resolveArguments(e,n),r=s[0],a=s[1]?"appear":"enter";t.addClass(r,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var s=t.resolveArguments(e,n),r=s[0],a=s[1]?"appear":"enter";t.removeClasses(r,a),t.addClass(r,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,s="string"===typeof n,r=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:s?r+"-active":n[e+"Active"],doneClassName:s?r+"-done":n[e+"Done"]}},t}m(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(s+=" "+r),"active"===n&&e&&g(e),s&&(this.appliedClasses[t][n]=s,function(e,t){e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.add(s):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(e,s))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,r=n.active,a=n.done;this.appliedClasses[t]={},s&&O(e,s),r&&O(e,r),a&&O(e,a)},n.render=function(){var e=this.props,t=(e.classNames,h(e,["classNames"]));return s.createElement(S,d({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);w.defaultProps={classNames:""},w.propTypes={};const R=w;function T(e,t){var n=Object.create(null);return e&&s.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,s.isValidElement)(e)?t(e):e}(e)})),n}function F(e,t,n){return null!=n[t]?n[t]:e.props[t]}function I(e,t,n){var r=T(e.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var s,r=Object.create(null),a=[];for(var i in e)i in t?a.length&&(r[i]=a,a=[]):a.push(i);var o={};for(var c in t){if(r[c])for(s=0;s<r[c].length;s++){var l=r[c][s];o[r[c][s]]=n(l)}o[c]=n(c)}for(s=0;s<a.length;s++)o[a[s]]=n(a[s]);return o}(t,r);return Object.keys(a).forEach((function(i){var o=a[i];if((0,s.isValidElement)(o)){var c=i in t,l=i in r,u=t[i],d=(0,s.isValidElement)(u)&&!u.props.in;!l||c&&!d?l||!c||d?l&&c&&(0,s.isValidElement)(u)&&(a[i]=(0,s.cloneElement)(o,{onExited:n.bind(null,o),in:u.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)})):a[i]=(0,s.cloneElement)(o,{in:!1}):a[i]=(0,s.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)})}})),a}var D=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},A=function(e){function t(t,n){var s,r=(s=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(s));return s.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},s}m(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,a=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,T(n.children,(function(e){return(0,s.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:F(e,"appear",n),enter:F(e,"enter",n),exit:F(e,"exit",n)})}))):I(e,a,i),firstRender:!1}},n.handleExited=function(e,t){var n=T(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=d({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=h(e,["component","childFactory"]),a=this.state.contextValue,i=D(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?s.createElement(E.Provider,{value:a},i):s.createElement(E.Provider,{value:a},s.createElement(t,r,i))},t}(s.Component);A.propTypes={},A.defaultProps={component:"div",childFactory:function(e){return e}};const M=A,P=e=>{const[t,n]=(0,s.useState)([]),[o,l]=(0,s.useState)(!1),[u,d]=(0,s.useState)(210),[h,p]=(0,s.useState)(!1),[m,f]=(0,s.useState)(null),{loading:x,error:v,getAllCharacters:E}=(0,i.Z)();(0,s.useEffect)((()=>{g(u,!0)}),[]);const g=(e,t)=>{l(!t),E(e).then(b)},b=e=>{let t=!1;e.length<9&&(t=!0),n((t=>[...t,...e])),l((e=>!1)),d((e=>e+9)),p((e=>t))},j=t=>{f(t),e.onCharSelected(t),e.charInfoFocus()};const _=function(e,t){const n=e.map((e=>{let n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(n={objectFit:"unset"}),(0,c.jsx)(R,{timeout:500,classNames:"alert",children:(0,c.jsxs)("li",{className:e.id===t?"char__item char__item_selected":"char__item",onClick:()=>j(e.id),onKeyDown:t=>"Enter"===t.code||"Space"===t.code?j(e.id):"",tabIndex:"0",children:[(0,c.jsx)("img",{src:e.thumbnail,alt:e.name,style:n}),(0,c.jsx)("div",{className:"char__name",children:e.name})]})},e.id)}));return(0,c.jsx)("ul",{className:"char__grid",children:(0,c.jsx)(M,{component:null,children:n})})}(t,m),N=v?(0,c.jsx)(a.Z,{}):null,C=x&&!o?(0,c.jsx)(r.Z,{}):null;return(0,c.jsxs)("div",{className:"char__list",children:[N,C,_,(0,c.jsx)("button",{className:"button button__main button__long",disabled:o,style:{display:h?"none":"block"},onClick:()=>g(u),children:(0,c.jsx)("div",{className:"inner",children:"load more"})})]})};var L=n(87);const Z=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]}),V=e=>{let{char:t}=e;const{name:n,description:s,thumbnail:r,homepage:a,wiki:i,comics:o}=t;let l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"contain"}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"char__basics",children:[(0,c.jsx)("img",{src:r,alt:n,style:l}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"char__info-name",children:n}),(0,c.jsxs)("div",{className:"char__btns",children:[(0,c.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"button button__main",children:(0,c.jsx)("div",{className:"inner",children:"homepage"})}),(0,c.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:"button button__secondary",children:(0,c.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,c.jsx)("div",{className:"char__descr",children:s}),(0,c.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,c.jsxs)("ul",{className:"char__comics-list",children:[o.length>0?null:"There is no comics with this character",o.map(((e,t)=>{if(t<=9){let n=e.resourceURI.slice(e.resourceURI.lastIndexOf("/")+1);return(0,c.jsx)(L.rU,{to:"/comics/".concat(n),className:"char__comics-item",children:(0,c.jsx)("li",{children:e.name})},t)}}))]})]})},U=e=>{const[t,n]=(0,s.useState)(null),{loading:o,error:l,getCharacter:u,clearError:d}=(0,i.Z)();(0,s.useEffect)((()=>{h()}),[]),(0,s.useEffect)((()=>{h()}),[e.charId]);const h=()=>{const{charId:t}=e;t&&(d(),u(t).then(p))},p=e=>{n(e)},m=t||o||l?null:(0,c.jsx)(Z,{}),f=l?(0,c.jsx)(a.Z,{}):null,x=o?(0,c.jsx)(r.Z,{}):null,v=o||l||!t?null:(0,c.jsx)(V,{char:t});return(0,c.jsxs)("div",{className:"char__info",ref:e.charInfoRef,tabIndex:"0",children:[m,f,x,v]})};class W extends s.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,t){console.log(e,t),this.setState({error:!0})}render(){return this.state.error?(0,c.jsx)("h2",{children:"Something went wrong"}):this.props.children}}const $=W,G=()=>{const[e,t]=(0,s.useState)(null),n=(0,s.useRef)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)($,{children:(0,c.jsx)(u,{})}),(0,c.jsxs)("div",{className:"char__content",children:[(0,c.jsx)($,{children:(0,c.jsx)(P,{onCharSelected:e=>{t(e)},charId:e,charInfoFocus:function(){n.current&&n.current.focus()}})}),(0,c.jsx)($,{children:(0,c.jsx)(U,{charId:e,charInfoRef:n})})]})]})}},304:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(791);const r=()=>{const{loading:e,request:t,error:n,clearError:r}=(()=>{const[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(null);return{loading:e,request:(0,s.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t(!0);try{const r=await fetch(e,{method:n,body:s,headers:a});if(!r.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(r.status));const i=await r.json();return t(!1),i}catch(i){throw t(!1),r(i.message),i}}),[]),error:n,clearError:(0,s.useCallback)((()=>r(null)),[])}})(),a="https://gateway.marvel.com:443/v1/public/",i="apikey=c5d6fc8b83116d92ed468ce36bac6c62",o=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),c=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:n,clearError:r,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await t("".concat(a,"characters?limit=9&offset=").concat(e,"&").concat(i))).data.results.map(o)},getCharacter:async e=>{const n=await t("".concat(a,"characters/").concat(e,"?").concat(i));return o(n.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await t("".concat(a,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(i))).data.results.map(c)},getComic:async e=>{const n=await t("".concat(a,"comics/").concat(e,"?").concat(i));return c(n.data.results[0])}}}}}]);
//# sourceMappingURL=872.b4ff93ef.chunk.js.map