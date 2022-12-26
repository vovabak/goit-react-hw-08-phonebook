"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[301],{4301:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var r=t(885),o=t(2791),a=t(9434),i="NOT_FOUND";var l=function(e,n){return e===n};function u(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?l:r,a=t.maxSize,u=void 0===a?1:a,s=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),d=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return i}return{get:r,put:function(n,o){r(n)===i&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function h(){var n=d.get(arguments);if(n===i){if(n=e.apply(null,arguments),s){var t=d.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return h.clearCache=function(){return d.clear()},h}function s(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function c(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,l={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(l=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=l,d=c.memoizeOptions,h=void 0===d?t:d,p=Array.isArray(h)?h:[h],m=s(r),f=e.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return a=f.apply(null,e)}));return Object.assign(v,{resultFunc:u,memoizedResultFunc:f,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var d,h,p,m,f,v,b,x,g,y,Z=c(u),w=function(e){return e.filter},j=function(e){return e.contacts},C=Z([j,w],(function(e,n){return e.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())}))})),z=t(5162),k=t(168),S=t(7691),F=S.ZP.li(d||(d=(0,k.Z)(["\n    display: flex;\n    justify-content: space-between;\n        :not(:last-child){\n            margin-bottom: 15px;\n        }\n    "]))),A=S.ZP.p(h||(h=(0,k.Z)(["\n    margin: 0;       \n    "]))),P=S.ZP.button(p||(p=(0,k.Z)(["\n    margin: 0;\n    padding: 2px 5px;\n    width: 80px;\n    "]))),R=t(3329),N=function(e){var n=e.contact,t=(0,a.I0)(),i=(0,o.useState)(!1),l=(0,r.Z)(i,2),u=l[0],s=l[1],c=n.name,d=n.number,h=n.id;return(0,R.jsxs)(F,{children:[(0,R.jsxs)(A,{children:[(0,R.jsxs)("b",{children:[c,":"]})," ",(0,R.jsx)("br",{})," ",d]}),(0,R.jsx)(P,{type:"button",disabled:u,onClick:function(){s(!0),t((0,z.GK)(h))},children:u?"Deleting...":"Delete"})]})},I=S.ZP.ul(m||(m=(0,k.Z)(["\n    margin-top: 30px;\n    padding: 0;\n    "]))),M=S.ZP.p(f||(f=(0,k.Z)(["\n    color: red;\n    "]))),W=function(){var e=(0,a.I0)(),n=(0,a.v9)(C),t=(0,a.v9)(j),r=t.items,i=t.isLoading,l=t.error;return(0,o.useEffect)((function(){e((0,z.yF)())}),[e]),(0,R.jsxs)(R.Fragment,{children:[i&&(0,R.jsx)("b",{children:"Loading contacts..."}),l&&(0,R.jsx)(M,{children:l}),r.length>0&&0===n.length&&(0,R.jsx)(M,{children:"Sorry, there's no contacts matching your query"}),0===r.length&&!i&&!l&&(0,R.jsx)(M,{children:" There's no contacts in your Phonebook"}),n.length>0&&!l&&!i&&(0,R.jsx)(I,{children:n.slice(0).reverse().map((function(e){return(0,R.jsx)(N,{contact:e},e.id)}))})]})},q=t(1993),T=t(4004),V=function(){var e=(0,a.I0)(),n=(0,a.v9)(w);return(0,R.jsx)(T.Z,{sx:{mt:4},fullWidth:!0,id:"filter",label:"Find contacts by name",variant:"outlined",type:"text",name:"filter",value:n,onChange:function(n){return e((0,q.x)(n.currentTarget.value))}})},E=t(5705),L=t(7103),_=t(6151),B=(0,S.ZP)(E.l0)(v||(v=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;    \n    "]))),O=((0,S.ZP)(E.gN)(b||(b=(0,k.Z)(["\n    margin-top: 5px;\n    "]))),S.ZP.input(x||(x=(0,k.Z)(["\n    margin-top: 5px;\n    "]))),S.ZP.label(g||(g=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;    \n    margin-bottom: 10px;\n    "]))),S.ZP.button(y||(y=(0,k.Z)(["\n    max-width: 100px;\n    margin: 10px auto;\n    "]))),{name:"",number:""}),D=(0,L.Ry)({name:(0,L.Z_)().required(),number:(0,L.Z_)().required()}),H=function(e){var n=e.onModalClose,t=(0,a.I0)(),r=(0,a.v9)(j).items,o=(0,E.TA)({initialValues:O,validationSchema:D,onSubmit:function(e,o){var a=o.resetForm,i=e.name,l=e.number,u=i.toLowerCase().trim();r.find((function(e){return e.name.toLowerCase()===u}))?alert("".concat(i.trim()," is allready in contacts")):(t((0,z.uK)({name:i.trim(),number:l})),a(),n())}});return(0,R.jsx)(E.J9,{children:(0,R.jsxs)(B,{onSubmit:o.handleSubmit,children:[(0,R.jsx)(T.Z,{sx:{marginBottom:"10px"},fullWidth:!0,id:"name",label:"Name",variant:"outlined",type:"text",name:"name",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f ]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},required:!0,value:o.values.name,onChange:o.handleChange,error:o.touched.name&&Boolean(o.errors.name),helperText:o.touched.name&&o.errors.name}),(0,R.jsx)(T.Z,{sx:{marginBottom:"10px"},fullWidth:!0,id:"number",label:"Number",variant:"outlined",type:"tel",name:"number",inputProps:{pattern:"[+]?[0-9]*$",title:"Phone number must be digits only and can start with '+'"},required:!0,value:o.values.number,onChange:o.handleChange,error:o.touched.number&&Boolean(o.errors.number),helperText:o.touched.number&&o.errors.number}),(0,R.jsx)(_.Z,{type:"submit",variant:"contained",sx:{m:"0 auto",width:"50%"},children:"Add contact"})]})})},J=t(4942),K=t(3366),$=t(7462),G=t(8182),U=t(4419),Q=t(3701),X=t(4036),Y=t(1402),ee=t(5878),ne=t(1217);function te(e){return(0,ne.Z)("MuiFab",e)}var re=(0,ee.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),oe=t(6934),ae=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],ie=(0,oe.ZP)(Q.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,oe.FO)(e)||"classes"===e},overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["size".concat((0,X.Z)(t.size))],"inherit"===t.color&&n.colorInherit,n[(0,X.Z)(t.size)],n[t.color]]}})((function(e){var n,t,r=e.theme,o=e.ownerState;return(0,$.Z)({},r.typography.button,(0,J.Z)({minHeight:36,transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(r.vars||r).zIndex.fab,boxShadow:(r.vars||r).shadows[6],"&:active":{boxShadow:(r.vars||r).shadows[12]},color:r.vars?r.vars.palette.text.primary:null==(n=(t=r.palette).getContrastText)?void 0:n.call(t,r.palette.grey[300]),backgroundColor:(r.vars||r).palette.grey[300],"&:hover":{backgroundColor:(r.vars||r).palette.grey.A100,"@media (hover: none)":{backgroundColor:(r.vars||r).palette.grey[300]},textDecoration:"none"}},"&.".concat(re.focusVisible),{boxShadow:(r.vars||r).shadows[6]}),"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(function(e){var n=e.theme,t=e.ownerState;return(0,$.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(n.vars||n).palette[t.color]&&{color:(n.vars||n).palette[t.color].contrastText,backgroundColor:(n.vars||n).palette[t.color].main,"&:hover":{backgroundColor:(n.vars||n).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[t.color].main}}})}),(function(e){var n=e.theme;return(0,J.Z)({},"&.".concat(re.disabled),{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})})),le=o.forwardRef((function(e,n){var t=(0,Y.Z)({props:e,name:"MuiFab"}),r=t.children,o=t.className,a=t.color,i=void 0===a?"default":a,l=t.component,u=void 0===l?"button":l,s=t.disabled,c=void 0!==s&&s,d=t.disableFocusRipple,h=void 0!==d&&d,p=t.focusVisibleClassName,m=t.size,f=void 0===m?"large":m,v=t.variant,b=void 0===v?"circular":v,x=(0,K.Z)(t,ae),g=(0,$.Z)({},t,{color:i,component:u,disabled:c,disableFocusRipple:h,size:f,variant:b}),y=function(e){var n=e.color,t=e.variant,r=e.classes,o=e.size,a={root:["root",t,"size".concat((0,X.Z)(o)),"inherit"===n?"colorInherit":n]},i=(0,U.Z)(a,te,r);return(0,$.Z)({},r,i)}(g);return(0,R.jsx)(ie,(0,$.Z)({className:(0,G.Z)(y.root,o),component:u,disabled:c,focusRipple:!h,focusVisibleClassName:(0,G.Z)(y.focusVisible,p),ownerState:g,ref:n},x,{classes:y,children:r}))})),ue=t(4554),se=t(15),ce=(0,t(9201).Z)((0,R.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),de=function(){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,R.jsxs)(ue.Z,{sx:{p:2,pt:4},children:[(0,R.jsxs)(le,{color:"primary","aria-label":"add contact",size:"small",onClick:function(){return a(!0)},sx:{ml:"calc(50% - 80px)"},children:[(0,R.jsx)(ce,{fontSize:"small"}),(0,R.jsx)(ue.Z,{component:"span",sx:{position:"absolute",left:"60%",minWidth:"150px",color:"#1976d2"},children:"Add Contact"})]}),(0,R.jsx)(se.Z,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"add-contact-form",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,R.jsx)(ue.Z,{sx:{width:"80%",maxWidth:350,mt:"-100px",p:2,bgcolor:"#fff",borderRadius:1,outline:0},children:(0,R.jsx)(H,{id:"add-contact-form",onModalClose:function(){return a(!1)}})})}),(0,R.jsx)(V,{}),(0,R.jsx)(W,{})]})}}}]);
//# sourceMappingURL=301.725c3785.chunk.js.map