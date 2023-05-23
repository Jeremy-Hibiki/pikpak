import{b as se,ax as be,J as b,d as _,_ as j,aF as K,r as H,c as B,al as L,aa as ue,a0 as U,Y as he,af as i,a8 as m,a6 as c,a7 as R,aj as F,aD as fe,bN as ke,bO as ve,i as xe,as as me,a9 as O,am as ge,$ as pe,ar as Ce,aK as ye,b1 as ze,aH as N}from"./index-358107d7.js";const Re={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},we=o=>{const{baseColor:u,inputColorDisabled:h,cardColor:z,modalColor:w,popoverColor:d,textColorDisabled:k,borderColor:l,primaryColor:a,textColor2:n,fontSizeSmall:S,fontSizeMedium:f,fontSizeLarge:r,borderRadiusSmall:v,lineHeight:x}=o;return Object.assign(Object.assign({},Re),{labelLineHeight:x,fontSizeSmall:S,fontSizeMedium:f,fontSizeLarge:r,borderRadius:v,color:u,colorChecked:a,colorDisabled:h,colorDisabledChecked:h,colorTableHeader:z,colorTableHeaderModal:w,colorTableHeaderPopover:d,checkMarkColor:u,checkMarkColorDisabled:k,checkMarkColorDisabledChecked:k,border:`1px solid ${l}`,borderDisabled:`1px solid ${l}`,borderDisabledChecked:`1px solid ${l}`,borderChecked:`1px solid ${a}`,borderFocus:`1px solid ${a}`,boxShadowFocus:`0 0 0 2px ${be(a,{alpha:.3})}`,textColor:n,textColorDisabled:k})},Se={name:"Checkbox",common:se,self:we},De=Se,Te=b("svg",{viewBox:"0 0 64 64",class:"check-icon"},b("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),$e=b("svg",{viewBox:"0 0 100 100",class:"line-icon"},b("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),E=he("n-checkbox-group"),Me={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ie=_({name:"CheckboxGroup",props:Me,setup(o){const{mergedClsPrefixRef:u}=j(o),h=K(o),{mergedSizeRef:z,mergedDisabledRef:w}=h,d=H(o.defaultValue),k=B(()=>o.value),l=L(k,d),a=B(()=>{var f;return((f=l.value)===null||f===void 0?void 0:f.length)||0}),n=B(()=>Array.isArray(l.value)?new Set(l.value):new Set);function S(f,r){const{nTriggerFormInput:v,nTriggerFormChange:x}=h,{onChange:g,"onUpdate:value":p,onUpdateValue:C}=o;if(Array.isArray(l.value)){const t=Array.from(l.value),A=t.findIndex(I=>I===r);f?~A||(t.push(r),C&&i(C,t,{actionType:"check",value:r}),p&&i(p,t,{actionType:"check",value:r}),v(),x(),d.value=t,g&&i(g,t)):~A&&(t.splice(A,1),C&&i(C,t,{actionType:"uncheck",value:r}),p&&i(p,t,{actionType:"uncheck",value:r}),g&&i(g,t),d.value=t,v(),x())}else f?(C&&i(C,[r],{actionType:"check",value:r}),p&&i(p,[r],{actionType:"check",value:r}),g&&i(g,[r]),d.value=[r],v(),x()):(C&&i(C,[],{actionType:"uncheck",value:r}),p&&i(p,[],{actionType:"uncheck",value:r}),g&&i(g,[]),d.value=[],v(),x())}return ue(E,{checkedCountRef:a,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:n,disabledRef:w,mergedSizeRef:z,toggleCheckbox:S}),{mergedClsPrefix:u}},render(){return b("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Fe=m([c("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[m("&:hover",[c("checkbox-box",[R("border",{border:"var(--n-border-checked)"})])]),m("&:focus:not(:active)",[c("checkbox-box",[R("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),F("inside-table",[c("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),F("checked",[c("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[c("checkbox-icon",[m(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),F("indeterminate",[c("checkbox-box",[c("checkbox-icon",[m(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),m(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),F("checked, indeterminate",[m("&:focus:not(:active)",[c("checkbox-box",[R("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[R("border",{border:"var(--n-border-checked)"})])]),F("disabled",{cursor:"not-allowed"},[F("checked",[c("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[R("border",{border:"var(--n-border-disabled-checked)"}),c("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),c("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[R("border",{border:"var(--n-border-disabled)"}),c("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),R("label",{color:"var(--n-text-color-disabled)"})]),c("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),c("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[R("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),c("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[m(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),fe({left:"1px",top:"1px"})])]),R("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[m("&:empty",{display:"none"})])]),ke(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ve(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Ae=Object.assign(Object.assign({},O.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Pe=_({name:"Checkbox",props:Ae,setup(o){const u=H(null),{mergedClsPrefixRef:h,inlineThemeDisabled:z,mergedRtlRef:w}=j(o),d=K(o,{mergedSize(e){const{size:y}=o;if(y!==void 0)return y;if(a){const{value:s}=a.mergedSizeRef;if(s!==void 0)return s}if(e){const{mergedSize:s}=e;if(s!==void 0)return s.value}return"medium"},mergedDisabled(e){const{disabled:y}=o;if(y!==void 0)return y;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:s},checkedCountRef:D}=a;if(s!==void 0&&D.value>=s&&!r.value)return!0;const{minRef:{value:$}}=a;if($!==void 0&&D.value<=$&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:k,mergedSizeRef:l}=d,a=xe(E,null),n=H(o.defaultChecked),S=U(o,"checked"),f=L(S,n),r=me(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),v=O("Checkbox","-checkbox",Fe,De,o,h);function x(e){if(a&&o.value!==void 0)a.toggleCheckbox(!r.value,o.value);else{const{onChange:y,"onUpdate:checked":s,onUpdateChecked:D}=o,{nTriggerFormInput:$,nTriggerFormChange:P}=d,M=r.value?o.uncheckedValue:o.checkedValue;s&&i(s,M,e),D&&i(D,M,e),y&&i(y,M,e),$(),P(),n.value=M}}function g(e){k.value||x(e)}function p(e){if(!k.value)switch(e.key){case" ":case"Enter":x(e)}}function C(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=u.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=u.value)===null||e===void 0||e.blur()}},A=ge("Checkbox",w,h),I=B(()=>{const{value:e}=l,{common:{cubicBezierEaseInOut:y},self:{borderRadius:s,color:D,colorChecked:$,colorDisabled:P,colorTableHeader:M,colorTableHeaderModal:V,colorTableHeaderPopover:G,checkMarkColor:W,checkMarkColorDisabled:Y,border:J,borderFocus:q,borderDisabled:Q,borderChecked:X,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ne,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[N("fontSize",e)]:de,[N("size",e)]:te}}=v.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":te,"--n-bezier":y,"--n-border-radius":s,"--n-border":J,"--n-border-checked":X,"--n-border-focus":q,"--n-border-disabled":Q,"--n-border-disabled-checked":ne,"--n-box-shadow-focus":Z,"--n-color":D,"--n-color-checked":$,"--n-color-table":M,"--n-color-table-modal":V,"--n-color-table-popover":G,"--n-color-disabled":P,"--n-color-disabled-checked":ae,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":Y,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),T=z?pe("checkbox",B(()=>l.value[0]),I,o):void 0;return Object.assign(d,t,{rtlEnabled:A,selfRef:u,mergedClsPrefix:h,mergedDisabled:k,renderedChecked:r,mergedTheme:v,labelId:Ce(),handleClick:g,handleKeyUp:p,handleKeyDown:C,cssVars:z?void 0:I,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:u,renderedChecked:h,mergedDisabled:z,indeterminate:w,privateInsideTable:d,cssVars:k,labelId:l,label:a,mergedClsPrefix:n,focusable:S,handleKeyUp:f,handleKeyDown:r,handleClick:v}=this;return(o=this.onRender)===null||o===void 0||o.call(this),b("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,h&&`${n}-checkbox--checked`,z&&`${n}-checkbox--disabled`,w&&`${n}-checkbox--indeterminate`,d&&`${n}-checkbox--inside-table`],tabindex:z||!S?void 0:0,role:"checkbox","aria-checked":w?"mixed":h,"aria-labelledby":l,style:k,onKeyup:f,onKeydown:r,onClick:v,onMousedown:()=>{ze("selectstart",window,x=>{x.preventDefault()},{once:!0})}},b("div",{class:`${n}-checkbox-box-wrapper`}," ",b("div",{class:`${n}-checkbox-box`},b(ye,null,{default:()=>this.indeterminate?b("div",{key:"indeterminate",class:`${n}-checkbox-icon`},$e):b("div",{key:"check",class:`${n}-checkbox-icon`},Te)}),b("div",{class:`${n}-checkbox-box__border`}))),a!==null||u.default?b("span",{class:`${n}-checkbox__label`,id:l},u.default?u.default():a):null)}});export{Ie as N,Pe as a,De as c};
