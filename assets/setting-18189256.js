import{ag as Ze,ah as ae,ai as Ge,i as be,c as z,a as Qe,d as D,J as c,b as le,a8 as O,a6 as H,aj as B,a7 as v,_ as te,r as E,j as xe,w as oe,a0 as X,a9 as A,$ as re,ak as et,al as Le,aa as Be,am as Pe,Y as He,af as Y,an as tt,ao as nt,ap as ot,aq as at,ar as lt,as as rt,t as it,at as we,au as st,a3 as dt,av as ct,V as ut,aw as ht,ax as ft,Z as mt,ay as Ee,az as gt,aA as pt,aB as vt,U as ye,aC as Ce,aD as _e,aE as ke,aF as bt,aG as ue,a2 as K,aH as q,aI as he,aJ as M,aK as xt,H as wt,I as yt,e as Se,v as f,x as C,u as m,o as fe,p as F,f as j,C as me,aL as ge,Q as G,L as ne,s as Ct,l as $e,F as _t,aM as Re,z as kt}from"./index-4ea25042.js";import{Z as pe,N as St}from"./ZoomQuestion-2f9a3cb4.js";import{N as Te,a as U}from"./FormItem-8706d53a.js";import{N as Ne}from"./Space-78fc94fc.js";var $t=/\s/;function Rt(e){for(var t=e.length;t--&&$t.test(e.charAt(t)););return t}var Tt=/^\s+/;function Nt(e){return e&&e.slice(0,Rt(e)+1).replace(Tt,"")}var je=0/0,jt=/^[-+]0x[0-9a-f]+$/i,zt=/^0b[01]+$/i,It=/^0o[0-7]+$/i,Lt=parseInt;function ze(e){if(typeof e=="number")return e;if(Ze(e))return je;if(ae(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ae(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Nt(e);var n=zt.test(e);return n||It.test(e)?Lt(e.slice(2),n?2:8):jt.test(e)?je:+e}var Bt=function(){return Ge.Date.now()};const ve=Bt;var Pt="Expected a function",Ht=Math.max,Et=Math.min;function Ft(e,t,n){var a,l,r,w,g,_,b=0,S=!1,d=!1,u=!0;if(typeof e!="function")throw new TypeError(Pt);t=ze(t)||0,ae(n)&&(S=!!n.leading,d="maxWait"in n,r=d?Ht(ze(n.maxWait)||0,t):r,u="trailing"in n?!!n.trailing:u);function i(h){var R=a,p=l;return a=l=void 0,b=h,w=e.apply(p,R),w}function o(h){return b=h,g=setTimeout(y,t),S?i(h):w}function x(h){var R=h-_,p=h-b,P=t-R;return d?Et(P,r-p):P}function s(h){var R=h-_,p=h-b;return _===void 0||R>=t||R<0||d&&p>=r}function y(){var h=ve();if(s(h))return k(h);g=setTimeout(y,x(h))}function k(h){return g=void 0,u&&a?i(h):(a=l=void 0,w)}function $(){g!==void 0&&clearTimeout(g),b=0,a=_=l=g=void 0}function T(){return g===void 0?w:k(ve())}function N(){var h=ve(),R=s(h);if(a=arguments,l=this,_=h,R){if(g===void 0)return o(_);if(d)return clearTimeout(g),g=setTimeout(y,t),i(_)}return g===void 0&&(g=setTimeout(y,t)),w}return N.cancel=$,N.flush=T,N}var Ot="Expected a function";function Dt(e,t,n){var a=!0,l=!0;if(typeof e!="function")throw new TypeError(Ot);return ae(n)&&(a="leading"in n?!!n.leading:a,l="trailing"in n?!!n.trailing:l),Ft(e,t,{leading:a,maxWait:t,trailing:l})}function Fe(e,t){const n=be(Qe,null);return z(()=>e.hljs||(n==null?void 0:n.mergedHljsRef.value))}const Mt=D({name:"ChevronLeft",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),Wt=e=>{const{textColor2:t,fontSize:n,fontWeightStrong:a,textColor3:l}=e;return{textColor:t,fontSize:n,fontWeightStrong:a,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:l}},Vt={name:"Code",common:le,self:Wt},Oe=Vt,Ut=O([H("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[B("show-line-numbers",`
 display: flex;
 `),v("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),B("word-wrap",[O("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),O("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),O("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),At=Object.assign(Object.assign({},A.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Kt=D({name:"Code",props:At,setup(e,{slots:t}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:a,inlineThemeDisabled:l}=te(),r=E(null),w=n?{value:void 0}:Fe(e),g=(i,o,x)=>{const{value:s}=w;return!s||!(i&&s.getLanguage(i))?null:s.highlight(x?o.trim():o,{language:i}).value},_=z(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),b=()=>{if(t.default)return;const{value:i}=r;if(!i)return;const{language:o}=e,x=e.uri?window.decodeURIComponent(e.code):e.code;if(o){const y=g(o,x,e.trim);if(y!==null){if(e.inline)i.innerHTML=y;else{const k=i.querySelector(".__code__");k&&i.removeChild(k);const $=document.createElement("pre");$.className="__code__",$.innerHTML=y,i.appendChild($)}return}}if(e.inline){i.textContent=x;return}const s=i.querySelector(".__code__");if(s)s.textContent=x;else{const y=document.createElement("pre");y.className="__code__",y.textContent=x,i.innerHTML="",i.appendChild(y)}};xe(b),oe(X(e,"language"),b),oe(X(e,"code"),b),n||oe(w,b);const S=A("Code","-code",Ut,Oe,e,a),d=z(()=>{const{common:{cubicBezierEaseInOut:i,fontFamilyMono:o},self:{textColor:x,fontSize:s,fontWeightStrong:y,lineNumberTextColor:k,"mono-3":$,"hue-1":T,"hue-2":N,"hue-3":h,"hue-4":R,"hue-5":p,"hue-5-2":P,"hue-6":L,"hue-6-2":I}}=S.value,{internalFontSize:Z}=e;return{"--n-font-size":Z?`${Z}px`:s,"--n-font-family":o,"--n-font-weight-strong":y,"--n-bezier":i,"--n-text-color":x,"--n-mono-3":$,"--n-hue-1":T,"--n-hue-2":N,"--n-hue-3":h,"--n-hue-4":R,"--n-hue-5":p,"--n-hue-5-2":P,"--n-hue-6":L,"--n-hue-6-2":I,"--n-line-number-text-color":k}}),u=l?re("code",z(()=>`${e.internalFontSize||"a"}`),d,e):void 0;return{mergedClsPrefix:a,codeRef:r,mergedShowLineNumbers:_,lineNumbers:z(()=>{let i=1;const o=[];let x=!1;for(const s of e.code)s===`
`?(x=!0,o.push(i++)):x=!1;return x||o.push(i++),o.join(`
`)}),cssVars:l?void 0:d,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e,t;const{mergedClsPrefix:n,wordWrap:a,mergedShowLineNumbers:l,onRender:r}=this;return r==null||r(),c("code",{class:[`${n}-code`,this.themeClass,a&&`${n}-code--word-wrap`,l&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},l?c("pre",{class:`${n}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),qt=e=>{const{fontWeight:t,textColor1:n,textColor2:a,textColorDisabled:l,dividerColor:r,fontSize:w}=e;return{titleFontSize:w,titleFontWeight:t,dividerColor:r,titleTextColor:n,titleTextColorDisabled:l,fontSize:w,textColor:a,arrowColor:a,arrowColorDisabled:l,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}},Jt={name:"Collapse",common:le,self:qt},Yt=Jt,Xt=H("collapse","width: 100%;",[H("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[B("disabled",[v("header","cursor: not-allowed;",[v("header-main",`
 color: var(--n-title-text-color-disabled);
 `),H("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),H("collapse-item","margin-left: 32px;"),O("&:first-child","margin-top: 0;"),O("&:first-child >",[v("header","padding-top: 0;")]),B("left-arrow-placement",[v("header",[H("collapse-item-arrow","margin-right: 4px;")])]),B("right-arrow-placement",[v("header",[H("collapse-item-arrow","margin-left: 4px;")])]),v("content-wrapper",[v("content-inner","padding-top: 16px;"),et({duration:"0.15s"})]),B("active",[v("header",[B("active",[H("collapse-item-arrow","transform: rotate(90deg);")])])]),O("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),v("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[v("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),v("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),H("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),Zt=Object.assign(Object.assign({},A.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),De=He("n-collapse"),Gt=D({name:"Collapse",props:Zt,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:l}=te(e),r=E(e.defaultExpandedNames),w=z(()=>e.expandedNames),g=Le(w,r),_=A("Collapse","-collapse",Xt,Yt,e,n);function b(x){const{"onUpdate:expandedNames":s,onUpdateExpandedNames:y,onExpandedNamesChange:k}=e;y&&Y(y,x),s&&Y(s,x),k&&Y(k,x),r.value=x}function S(x){const{onItemHeaderClick:s}=e;s&&Y(s,x)}function d(x,s,y){const{accordion:k}=e,{value:$}=g;if(k)x?(b([s]),S({name:s,expanded:!0,event:y})):(b([]),S({name:s,expanded:!1,event:y}));else if(!Array.isArray($))b([s]),S({name:s,expanded:!0,event:y});else{const T=$.slice(),N=T.findIndex(h=>s===h);~N?(T.splice(N,1),b(T),S({name:s,expanded:!1,event:y})):(T.push(s),b(T),S({name:s,expanded:!0,event:y}))}}Be(De,{props:e,mergedClsPrefixRef:n,expandedNamesRef:g,slots:t,toggleItem:d});const u=Pe("Collapse",l,n),i=z(()=>{const{common:{cubicBezierEaseInOut:x},self:{titleFontWeight:s,dividerColor:y,titlePadding:k,titleTextColor:$,titleTextColorDisabled:T,textColor:N,arrowColor:h,fontSize:R,titleFontSize:p,arrowColorDisabled:P,itemMargin:L}}=_.value;return{"--n-font-size":R,"--n-bezier":x,"--n-text-color":N,"--n-divider-color":y,"--n-title-padding":k,"--n-title-font-size":p,"--n-title-text-color":$,"--n-title-text-color-disabled":T,"--n-title-font-weight":s,"--n-arrow-color":h,"--n-arrow-color-disabled":P,"--n-item-margin":L}}),o=a?re("collapse",void 0,i,e):void 0;return{rtlEnabled:u,mergedTheme:_,mergedClsPrefix:n,cssVars:a?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Qt=D({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:tt(X(e,"show"))}},render(){return c(at,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:a}=this,l=t==="show"&&n,r=c("div",{class:`${a}-collapse-item__content-wrapper`},c("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return l?nt(r,[[ot,e]]):e?r:null}})}}),en={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},J=D({name:"CollapseItem",props:en,setup(e){const{mergedRtlRef:t}=te(e),n=lt(),a=rt(()=>{var d;return(d=e.name)!==null&&d!==void 0?d:n}),l=be(De);l||it("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:w,mergedClsPrefixRef:g,slots:_}=l,b=z(()=>{const{value:d}=r;if(Array.isArray(d)){const{value:u}=a;return!~d.findIndex(i=>i===u)}else if(d){const{value:u}=a;return u!==d}return!0});return{rtlEnabled:Pe("Collapse",t,g),collapseSlots:_,randomName:n,mergedClsPrefix:g,collapsed:b,mergedDisplayDirective:z(()=>{const{displayDirective:d}=e;return d||w.displayDirective}),arrowPlacement:z(()=>w.arrowPlacement),handleClick(d){l&&!e.disabled&&l.toggleItem(b.value,a.value,d)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:a,mergedDisplayDirective:l,mergedClsPrefix:r,disabled:w}=this,g=we(t.header,{collapsed:a},()=>[this.title]),_=t["header-extra"]||e["header-extra"],b=t.arrow||e.arrow;return c("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${n}-arrow-placement`,w&&`${r}-collapse-item--disabled`,!a&&`${r}-collapse-item--active`]},c("div",{class:[`${r}-collapse-item__header`,!a&&`${r}-collapse-item__header--active`]},c("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&g,c("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},we(b,{collapsed:a},()=>{var S;return[c(dt,{clsPrefix:r},{default:(S=e.expandIcon)!==null&&S!==void 0?S:()=>this.rtlEnabled?c(Mt,null):c(ct,null)})]})),n==="left"&&g),st(_,{collapsed:a},S=>c("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},S))),c(Qt,{clsPrefix:r,displayDirective:l,show:!a},t))}}),tn=e=>{const{textColor2:t,modalColor:n,borderColor:a,fontSize:l,primaryColor:r}=e;return{loaderFontSize:l,loaderTextColor:t,loaderColor:n,loaderBorder:`1px solid ${a}`,loadingColor:r}},nn=ut({name:"Log",common:le,peers:{Scrollbar:ht,Code:Oe},self:tn}),on=nn,an={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},ln=e=>{const{primaryColor:t,opacityDisabled:n,borderRadius:a,textColor3:l}=e,r="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},an),{iconColor:l,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:r,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:a,railBorderRadiusMedium:a,railBorderRadiusLarge:a,buttonBorderRadiusSmall:a,buttonBorderRadiusMedium:a,buttonBorderRadiusLarge:a,boxShadowFocus:`0 0 0 2px ${ft(t,{alpha:.2})}`})},rn={name:"Switch",common:le,self:ln},sn=rn,dn=D({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:mt("Log").localeRef}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-log-loader`},c(Ee,{clsPrefix:e,strokeWidth:24,scale:.85}),c("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),Me=He("n-log"),cn=D({props:{line:{type:String,default:""}},setup(e){const{trimRef:t,highlightRef:n,languageRef:a,mergedHljsRef:l}=be(Me),r=E(null),w=z(()=>t.value?e.line.trim():e.line);function g(){r.value&&(r.value.innerHTML=_(a.value,w.value))}function _(b,S){const{value:d}=l;return d&&b&&d.getLanguage(b)?d.highlight(S,{language:b}).value:S}return xe(()=>{n.value&&g()}),oe(X(e,"line"),()=>{n.value&&g()}),{highlight:n,selfRef:r,maybeTrimmedLines:w}},render(){const{highlight:e,maybeTrimmedLines:t}=this;return c("pre",{ref:"selfRef"},e?null:t)}}),un=H("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[O("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),H("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[gt(),v("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),H("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),hn=Object.assign(Object.assign({},A.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),fn=D({name:"Log",props:hn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=te(e),a=E(!1),l=z(()=>e.language!==void 0),r=z(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),w=z(()=>{const{log:k}=e;return k?k.split(`
`):e.lines}),g=E(null),_=A("Log","-log",un,on,e,t);function b(k){const $=k.target,T=$.firstElementChild;if(a.value){ye(()=>{a.value=!1});return}const N=$.offsetHeight,h=$.scrollTop,R=T.offsetHeight,p=h,P=R-h-N;if(p<=e.offsetTop){const{onReachTop:L,onRequireMore:I}=e;I&&I("top"),L&&L()}if(P<=e.offsetBottom){const{onReachBottom:L,onRequireMore:I}=e;I&&I("bottom"),L&&L()}}const S=Dt(d,300);function d(k){if(a.value){ye(()=>{a.value=!1});return}if(g.value){const{containerRef:$,contentRef:T}=g.value;if($&&T){const N=$.offsetHeight,h=$.scrollTop,R=T.offsetHeight,p=h,P=R-h-N,L=k.deltaY;if(p===0&&L<0){const{onRequireMore:I}=e;I&&I("top")}if(P<=0&&L>0){const{onRequireMore:I}=e;I&&I("bottom")}}}}function u(k){const{value:$}=g;if(!$)return;const{slient:T,top:N,position:h}=k;T&&(a.value=!0),N!==void 0?$.scrollTo({left:0,top:N}):(h==="bottom"||h==="top")&&$.scrollTo({position:h})}function i(k=!1){Ce("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),u({position:"top",slient:k})}function o(k=!1){Ce("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),u({position:"bottom",slient:k})}Be(Me,{languageRef:X(e,"language"),mergedHljsRef:Fe(e),trimRef:X(e,"trim"),highlightRef:l});const x={scrollTo:u},s=z(()=>{const{self:{loaderFontSize:k,loaderTextColor:$,loaderColor:T,loaderBorder:N,loadingColor:h},common:{cubicBezierEaseInOut:R}}=_.value;return{"--n-bezier":R,"--n-loader-font-size":k,"--n-loader-border":N,"--n-loader-color":T,"--n-loader-text-color":$,"--n-loading-color":h}}),y=n?re("log",void 0,s,e):void 0;return Object.assign(Object.assign({},x),{mergedClsPrefix:t,scrollbarRef:g,mergedTheme:_,styleHeight:r,mergedLines:w,scrollToTop:i,scrollToBottom:o,handleWheel:S,handleScroll:b,cssVars:n?void 0:s,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:t,onRender:n}=this;return n==null||n(),c("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[c(pt,{ref:"scrollbarRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>c(Kt,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:t.peers.Code,themeOverrides:t.peerOverrides.Code},{default:()=>this.mergedLines.map((a,l)=>c(cn,{key:l,line:a}))})}),c(vt,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?c(dn,{clsPrefix:e}):null})])}}),mn=H("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[v("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),v("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),v("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),H("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[_e({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),v("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),v("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),v("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),O("&:focus",[v("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),B("round",[v("rail","border-radius: calc(var(--n-rail-height) / 2);",[v("button","border-radius: calc(var(--n-button-height) / 2);")])]),ke("disabled",[ke("icon",[B("rubber-band",[B("pressed",[v("rail",[v("button","max-width: var(--n-button-width-pressed);")])]),v("rail",[O("&:active",[v("button","max-width: var(--n-button-width-pressed);")])]),B("active",[B("pressed",[v("rail",[v("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),v("rail",[O("&:active",[v("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),B("active",[v("rail",[v("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),v("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[v("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[_e()]),v("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),B("active",[v("rail","background-color: var(--n-rail-color-active);")]),B("loading",[v("rail",`
 cursor: wait;
 `)]),B("disabled",[v("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),gn=Object.assign(Object.assign({},A.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ee;const Ie=D({name:"Switch",props:gn,setup(e){ee===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ee=CSS.supports("width","max(1px)"):ee=!1:ee=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=te(e),a=A("Switch","-switch",mn,sn,e,t),l=bt(e),{mergedSizeRef:r,mergedDisabledRef:w}=l,g=E(e.defaultValue),_=X(e,"value"),b=Le(_,g),S=z(()=>b.value===e.checkedValue),d=E(!1),u=E(!1),i=z(()=>{const{railStyle:p}=e;if(p)return p({focused:u.value,checked:S.value})});function o(p){const{"onUpdate:value":P,onChange:L,onUpdateValue:I}=e,{nTriggerFormInput:Z,nTriggerFormChange:ie}=l;P&&Y(P,p),I&&Y(I,p),L&&Y(L,p),g.value=p,Z(),ie()}function x(){const{nTriggerFormFocus:p}=l;p()}function s(){const{nTriggerFormBlur:p}=l;p()}function y(){e.loading||w.value||(b.value!==e.checkedValue?o(e.checkedValue):o(e.uncheckedValue))}function k(){u.value=!0,x()}function $(){u.value=!1,s(),d.value=!1}function T(p){e.loading||w.value||p.key===" "&&(b.value!==e.checkedValue?o(e.checkedValue):o(e.uncheckedValue),d.value=!1)}function N(p){e.loading||w.value||p.key===" "&&(p.preventDefault(),d.value=!0)}const h=z(()=>{const{value:p}=r,{self:{opacityDisabled:P,railColor:L,railColorActive:I,buttonBoxShadow:Z,buttonColor:ie,boxShadowFocus:We,loadingColor:Ve,textColor:Ue,iconColor:Ae,[q("buttonHeight",p)]:W,[q("buttonWidth",p)]:Ke,[q("buttonWidthPressed",p)]:qe,[q("railHeight",p)]:V,[q("railWidth",p)]:Q,[q("railBorderRadius",p)]:Je,[q("buttonBorderRadius",p)]:Ye},common:{cubicBezierEaseInOut:Xe}}=a.value;let se,de,ce;return ee?(se=`calc((${V} - ${W}) / 2)`,de=`max(${V}, ${W})`,ce=`max(${Q}, calc(${Q} + ${W} - ${V}))`):(se=he((M(V)-M(W))/2),de=he(Math.max(M(V),M(W))),ce=M(V)>M(W)?Q:he(M(Q)+M(W)-M(V))),{"--n-bezier":Xe,"--n-button-border-radius":Ye,"--n-button-box-shadow":Z,"--n-button-color":ie,"--n-button-width":Ke,"--n-button-width-pressed":qe,"--n-button-height":W,"--n-height":de,"--n-offset":se,"--n-opacity-disabled":P,"--n-rail-border-radius":Je,"--n-rail-color":L,"--n-rail-color-active":I,"--n-rail-height":V,"--n-rail-width":Q,"--n-width":ce,"--n-box-shadow-focus":We,"--n-loading-color":Ve,"--n-text-color":Ue,"--n-icon-color":Ae}}),R=n?re("switch",z(()=>r.value[0]),h,e):void 0;return{handleClick:y,handleBlur:$,handleFocus:k,handleKeyup:T,handleKeydown:N,mergedRailStyle:i,pressed:d,mergedClsPrefix:t,mergedValue:b,checked:S,mergedDisabled:w,cssVars:n?void 0:h,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:a,onRender:l,$slots:r}=this;l==null||l();const{checked:w,unchecked:g,icon:_,"checked-icon":b,"unchecked-icon":S}=r,d=!(ue(_)&&ue(b)&&ue(S));return c("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,d&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:a},K(w,u=>K(g,i=>u||i?c("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),u),c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),i)):null)),c("div",{class:`${e}-switch__button`},K(_,u=>K(b,i=>K(S,o=>c(xt,null,{default:()=>this.loading?c(Ee,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(i||u)?c("div",{class:`${e}-switch__button-icon`,key:i?"checked-icon":"icon"},i||u):!this.checked&&(o||u)?c("div",{class:`${e}-switch__button-icon`,key:o?"unchecked-icon":"icon"},o||u):null})))),K(w,u=>u&&c("div",{key:"checked",class:`${e}-switch__checked`},u)),K(g,u=>u&&c("div",{key:"unchecked",class:`${e}-switch__unchecked`},u)))))}}),pn="/assets/aria2-tip-1-e9ebfae4.png",vn="/assets/aria2-tip-2-f3636f8d.png",bn={class:"list-page"},xn=j("p",null,null,-1),wn=j("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram机器人地址",-1),yn=j("img",{src:pn,alt:""},null,-1),Cn=j("br",null,null,-1),_n=j("br",null,null,-1),kn=j("img",{src:vn,alt:""},null,-1),Sn=j("p",null,null,-1),$n=j("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"官方网站",-1),Rn=j("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"官方交流群",-1),Tn=j("a",{href:"https://github.com/tjsky/pikpak",target:"_blank",class:"n-button"},"开源仓库",-1),Nn=j("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"部署教程",-1),jn=j("a",{href:"https://t.me/pikpak_userservice",target:"_blank"},"问题反馈",-1),zn=j("br",null,null,-1),In=j("a",{href:"https://github.com/MotooriKashin/ef2/releases",target:"_blank",class:"n-button"},"地址一：下载支持插件",-1),Ln=j("a",{href:"https://url71.ctfile.com/f/21226171-531688310-489b35",target:"_blank",class:"n-button"},"地址二：下载支持插件（密码pikpak）",-1),Bn=j("a",{href:"https://www.tjsky.net/?p=220#PCIDM",target:"_blank",class:"n-button"},"使用教程",-1),Pn=j("br",null,null,-1),Hn=j("br",null,null,-1),Mn=D({__name:"setting",setup(e){const t=E(["手机注册登陆","添加推广下载","绑定Telegram","直接分享功能（下线）","修改传输自动请求方式","传输只显示保存中","自定义菜单","资源库分页，分享秒传支持文件及","...."]),n=E({host:"",token:"",dir:!0}),a=()=>{let i={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};n.value.token&&i.params.splice(0,0,"token:"+n.value.token),fetch(n.value.host,{method:"POST",body:JSON.stringify(i),headers:new Headers({"Content-Type":"application/json"})}).then(o=>o.json()).then(o=>{o.error&&o.error.message?window.$message.error(o.error.message):o.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(n.value)),window.$message.success("保存成功"))}).catch(o=>console.error("Error:",o))},l=E(!1),r=E({username:"",password:""}),w=wt(),g=()=>{l.value?w.warning({title:"警告",content:"记住登陆是指浏览器本地明文保存用户名密码用于下次自动登陆，请勿在非信任设备选择",positiveText:"确定",negativeText:"不确定",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(r.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},_=E(""),b=()=>{let i=_.value.split(`
`).filter(o=>o!="");window.localStorage.setItem("proxy",JSON.stringify(i)),window.localStorage.setItem("isSettingProxy","true")},S=()=>{window.localStorage.setItem("proxy",JSON.stringify(Re)),window.localStorage.removeItem("isSettingProxy"),_.value=Re.join(`
`)};xe(()=>{let i=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");i.dir===void 0&&(i.dir=!0),i.host&&(n.value=i);let o=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");o.username&&o.password&&(r.value=o,l.value=!0);let x=JSON.parse(window.localStorage.getItem("proxy")||"[]");x.length&&(_.value=x.join(`
`))});const d=E(),u=()=>{let i=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!i&&!i.access_token)return window.$message.error("请先登陆"),!1;let o=d.value&&decodeURIComponent(d.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(o),!o||!o.length||o.length!=4)return window.$message.error("请输入正确链接"),!1;kt.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:i.access_token,thirdType:"TG",thirdToken:o[2]}).then(x=>{d.value="",x.data.bound?window.$message.success("绑定成功"):window.$message.error("绑定失败")})};return(i,o)=>{const x=yt("n-text");return fe(),Se("div",bn,[f(m(Gt),{"default-expanded-names":["-1","0","2","3","4"]},{default:C(()=>[f(m(J),{name:"-1"},{header:C(()=>[F(" 绑定telegram "),j("a",{href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank",onClick:o[0]||(o[0]=ge(()=>{},["stop"]))},[f(m(me),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:C(()=>[f(m(pe))]),_:1})])]),default:C(()=>[f(m(G),{value:d.value,"onUpdate:value":o[1]||(o[1]=s=>d.value=s),placeholder:"复制telegram绑定链接到这"},null,8,["value"]),xn,f(m(ne),{disabled:!d.value,type:"primary",onClick:u},{default:C(()=>[F("Telegram绑定")]),_:1},8,["disabled"]),wn]),_:1}),f(m(J),{name:"0",title:"aria2设置"},{header:C(()=>[F("aria2设置 "),j("a",{href:"https://www.tjsky.net/?p=220#arai2",target:"_blank",onClick:o[2]||(o[2]=ge(()=>{},["stop"]))},[f(m(me),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:C(()=>[f(m(pe))]),_:1})])]),default:C(()=>[f(m(Te),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:C(()=>[f(m(U),{label:"aria2链接："},{default:C(()=>[f(m(G),{value:n.value.host,"onUpdate:value":o[3]||(o[3]=s=>n.value.host=s),placeholder:"例如http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),f(m(U),{label:"aria2Token："},{default:C(()=>[f(m(G),{value:n.value.token,"onUpdate:value":o[4]||(o[4]=s=>n.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),f(m(U),{label:"文件夹设置："},{default:C(()=>[f(m(Ie),{value:n.value.dir,"onUpdate:value":o[5]||(o[5]=s=>n.value.dir=s)},{checked:C(()=>[F("选择文件夹时保存文件夹结构")]),unchecked:C(()=>[F("选择文件夹时仅保存文件")]),_:1},8,["value"])]),_:1}),n.value.host&&n.value.host.indexOf("https://")===-1&&n.value.host.indexOf("http://localhost")==-1&&n.value.host.indexOf("http://127.0.0.1")===-1?(fe(),Ct(m(St),{key:0,title:"由于浏览器限制，请按下图设置开始混合模式",type:"info"},{default:C(()=>[yn,Cn,_n,kn]),_:1})):$e("",!0),f(m(U),null,{default:C(()=>[f(m(ne),{type:"primary",onClick:a},{default:C(()=>[F("测试并保存")]),_:1})]),_:1})]),_:1})]),_:1}),f(m(J),{name:"1",title:"自动登录设置"},{header:C(()=>[F("自动登录设置 "),j("a",{href:"https://www.tjsky.net/?p=220#i-6",target:"_blank",onClick:o[6]||(o[6]=ge(()=>{},["stop"]))},[f(m(me),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:C(()=>[f(m(pe))]),_:1})])]),default:C(()=>[f(m(Te),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:C(()=>[f(m(U),{label:"是否开启"},{default:C(()=>[f(m(Ie),{value:l.value,"onUpdate:value":o[7]||(o[7]=s=>l.value=s)},null,8,["value"])]),_:1}),l.value?(fe(),Se(_t,{key:0},[f(m(U),{label:"用户名"},{default:C(()=>[f(m(G),{value:r.value.username,"onUpdate:value":o[8]||(o[8]=s=>r.value.username=s),placeholder:"用户名"},null,8,["value"])]),_:1}),f(m(U),{label:"密码"},{default:C(()=>[f(m(G),{value:r.value.password,"onUpdate:value":o[9]||(o[9]=s=>r.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):$e("",!0),f(m(U),null,{default:C(()=>[f(m(ne),{type:"primary",onClick:g},{default:C(()=>[F("保存")]),_:1})]),_:1})]),_:1})]),_:1}),f(m(J),{name:"3",title:"代理设置"},{default:C(()=>[f(m(G),{value:_.value,"onUpdate:value":o[10]||(o[10]=s=>_.value=s),type:"textarea",rows:"4",placeholder:"支持多个随机，一行一个，为空则不代理"},null,8,["value"]),Sn,f(m(ne),{type:"primary",onClick:b},{default:C(()=>[F("保存设置")]),_:1}),f(x,{onClick:S},{default:C(()=>[F("恢复默认")]),_:1})]),_:1}),f(m(J),{title:"关于",name:"2"},{default:C(()=>[f(m(Ne),null,{default:C(()=>[$n,Rn,Tn,Nn,jn]),_:1}),zn]),_:1}),f(m(J),{title:"PC端IDM支持",name:"4"},{default:C(()=>[f(m(Ne),null,{default:C(()=>[In,Ln,Bn,Pn,F("先用第一个下载地址，如果你实在无法访问github再使用第二个下载地址，调用IDM下载需要配合“自定义菜单”功能实现，请查看上方的使用教程 ")]),_:1}),Hn]),_:1}),f(m(J),{title:"功能列表",name:"3"},{default:C(()=>[f(m(fn),{lines:t.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{Mn as default};
