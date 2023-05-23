import{b as P,a6 as m,a8 as s,aj as T,a7 as u,d as g,_ as j,a9 as C,aa as y,a0 as H,c as p,$,J as v,Y as S,r as _,j as E,m as I,aU as O,i as w,a1 as A}from"./index-4ea25042.js";const N={fontWeightActive:"400"},V=e=>{const{fontSize:o,textColor3:r,textColor2:a,borderRadius:n,buttonColor2Hover:t,buttonColor2Pressed:c}=e;return Object.assign(Object.assign({},N),{fontSize:o,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:a,itemTextColorPressed:a,itemTextColorActive:a,itemBorderRadius:n,itemColorHover:t,itemColorPressed:c,separatorColor:r})},K={name:"Breadcrumb",common:P,self:V},M=K,U=m("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[s("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),s("a",`
 color: inherit;
 text-decoration: inherit;
 `),m("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[m("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),s("&:not(:last-child)",[T("clickable",[u("link",`
 cursor: pointer;
 `,[s("&:hover",`
 background-color: var(--n-item-color-hover);
 `),s("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),u("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[s("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[m("icon",`
 color: var(--n-item-text-color-hover);
 `)]),s("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[m("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),u("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),s("&:last-child",[u("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[m("icon",`
 color: var(--n-item-text-color-active);
 `)]),u("separator",`
 display: none;
 `)])])]),x=S("n-breadcrumb"),D=Object.assign(Object.assign({},C.props),{separator:{type:String,default:"/"}}),q=g({name:"Breadcrumb",props:D,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=j(e),a=C("Breadcrumb","-breadcrumb",U,M,e,o);y(x,{separatorRef:H(e,"separator"),mergedClsPrefixRef:o});const n=p(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:d,itemTextColor:i,itemTextColorHover:l,itemTextColorPressed:b,itemTextColorActive:h,fontSize:f,fontWeightActive:R,itemBorderRadius:k,itemColorHover:B,itemColorPressed:z,itemLineHeight:L}}=a.value;return{"--n-font-size":f,"--n-bezier":c,"--n-item-text-color":i,"--n-item-text-color-hover":l,"--n-item-text-color-pressed":b,"--n-item-text-color-active":h,"--n-separator-color":d,"--n-item-color-hover":B,"--n-item-color-pressed":z,"--n-item-border-radius":k,"--n-font-weight-active":R,"--n-item-line-height":L}}),t=r?$("breadcrumb",void 0,n,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},v("ul",null,this.$slots))}}),F=(e=O?window:null)=>{const o=()=>{const{hash:n,host:t,hostname:c,href:d,origin:i,pathname:l,port:b,protocol:h,search:f}=(e==null?void 0:e.location)||{};return{hash:n,host:t,hostname:c,href:d,origin:i,pathname:l,port:b,protocol:h,search:f}},r=()=>{a.value=o()},a=_(o());return E(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),I(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),a},J={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},G=g({name:"BreadcrumbItem",props:J,setup(e,{slots:o}){const r=w(x,null);if(!r)return()=>null;const{separatorRef:a,mergedClsPrefixRef:n}=r,t=F(),c=p(()=>e.href?"a":"span"),d=p(()=>t.value.href===e.href?"location":null);return()=>{const{value:i}=n;return v("li",{class:[`${i}-breadcrumb-item`,e.clickable&&`${i}-breadcrumb-item--clickable`]},v(c.value,{class:`${i}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},o),v("span",{class:`${i}-breadcrumb-item__separator`,"aria-hidden":"true"},A(o.separator,()=>{var l;return[(l=e.separator)!==null&&l!==void 0?l:a.value]})))}}});export{G as N,q as a};
