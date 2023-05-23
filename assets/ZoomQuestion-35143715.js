import{b as O,aN as u,ax as v,a6 as S,a7 as i,aj as y,ak as F,a8 as V,d as _,_ as Q,a9 as $,am as Z,c as R,$ as q,r as D,J as s,aq as J,aO as K,aH as d,aP as G,aQ as U,a1 as X,a3 as Y,aR as oo,a4 as eo,aS as ro,aT as no,a2 as to,o as so,e as lo,g as io}from"./index-358107d7.js";const ao={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},co=r=>{const{lineHeight:o,borderRadius:a,fontWeightStrong:b,baseColor:l,dividerColor:f,actionColor:w,textColor1:g,textColor2:t,closeColorHover:h,closeColorPressed:C,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,infoColor:e,successColor:x,warningColor:I,errorColor:z,fontSize:P}=r;return Object.assign(Object.assign({},ao),{fontSize:P,lineHeight:o,titleFontWeight:b,borderRadius:a,border:`1px solid ${f}`,color:w,titleTextColor:g,iconColor:t,contentTextColor:t,closeBorderRadius:a,closeColorHover:h,closeColorPressed:C,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${u(l,v(e,{alpha:.25}))}`,colorInfo:u(l,v(e,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:e,contentTextColorInfo:t,closeColorHoverInfo:h,closeColorPressedInfo:C,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${u(l,v(x,{alpha:.25}))}`,colorSuccess:u(l,v(x,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:x,contentTextColorSuccess:t,closeColorHoverSuccess:h,closeColorPressedSuccess:C,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${u(l,v(I,{alpha:.33}))}`,colorWarning:u(l,v(I,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:I,contentTextColorWarning:t,closeColorHoverWarning:h,closeColorPressedWarning:C,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${u(l,v(z,{alpha:.25}))}`,colorError:u(l,v(z,{alpha:.08})),titleTextColorError:g,iconColorError:z,contentTextColorError:t,closeColorHoverError:h,closeColorPressedError:C,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:n})},go={name:"Alert",common:O,self:co},ho=go,uo=S("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),y("closable",[S("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),S("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),F({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),y("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),vo=Object.assign(Object.assign({},$.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),mo=_({name:"Alert",inheritAttrs:!1,props:vo,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:a,inlineThemeDisabled:b,mergedRtlRef:l}=Q(r),f=$("Alert","-alert",uo,ho,r,o),w=Z("Alert",l,o),g=R(()=>{const{common:{cubicBezierEaseInOut:n},self:e}=f.value,{fontSize:x,borderRadius:I,titleFontWeight:z,lineHeight:P,iconSize:E,iconMargin:T,iconMarginRtl:H,closeIconSize:k,closeBorderRadius:A,closeSize:B,closeMargin:W,closeMarginRtl:M,padding:L}=e,{type:c}=r,{left:j,right:N}=K(T);return{"--n-bezier":n,"--n-color":e[d("color",c)],"--n-close-icon-size":k,"--n-close-border-radius":A,"--n-close-color-hover":e[d("closeColorHover",c)],"--n-close-color-pressed":e[d("closeColorPressed",c)],"--n-close-icon-color":e[d("closeIconColor",c)],"--n-close-icon-color-hover":e[d("closeIconColorHover",c)],"--n-close-icon-color-pressed":e[d("closeIconColorPressed",c)],"--n-icon-color":e[d("iconColor",c)],"--n-border":e[d("border",c)],"--n-title-text-color":e[d("titleTextColor",c)],"--n-content-text-color":e[d("contentTextColor",c)],"--n-line-height":P,"--n-border-radius":I,"--n-font-size":x,"--n-title-font-weight":z,"--n-icon-size":E,"--n-icon-margin":T,"--n-icon-margin-rtl":H,"--n-close-size":B,"--n-close-margin":W,"--n-close-margin-rtl":M,"--n-padding":L,"--n-icon-margin-left":j,"--n-icon-margin-right":N}}),t=b?q("alert",R(()=>r.type[0]),g,r):void 0,h=D(!0),C=()=>{const{onAfterLeave:n,onAfterHide:e}=r;n&&n(),e&&e()};return{rtlEnabled:w,mergedClsPrefix:o,mergedBordered:a,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:f,cssVars:b?void 0:g,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:a}=this,b={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},G(this.$attrs,b)),this.closable&&s(U,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${o}-alert__border`}),this.showIcon&&s("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},X(a.icon,()=>[s(Y,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return s(no,null);case"info":return s(ro,null);case"warning":return s(eo,null);case"error":return s(oo,null);default:return null}}})])),s("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},to(a.header,l=>{const f=l||this.title;return f?s("div",{class:`${o}-alert-body__title`},f):null}),a.default&&s("div",{class:`${o}-alert-body__content`},a))):null}})}}),fo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Co=io('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"></circle><path d="M21 21l-6-6"></path><path d="M10 13v.01"></path><path d="M10 10a1.5 1.5 0 1 0-1.14-2.474"></path></g>',1),bo=[Co],xo=_({name:"ZoomQuestion",render:function(o,a){return so(),lo("svg",fo,bo)}});export{mo as N,xo as Z};
