"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{4156:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]])},2489:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9027:function(e,t,n){n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return er},fC:function(){return J},h_:function(){return $},x8:function(){return eo},xz:function(){return Q}});var r=n(2265),o=n(6741),a=n(8575),i=n(3966),l=n(9255),s=n(886),u=n(5278),c=n(9103),d=n(3832),f=n(1599),p=n(6840),g=n(6097),h=n(703),v=n(5478),m=n(7053),b=n(7437),y="Dialog",[x,D]=(0,i.b)(y),[w,j]=x(y),k=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:u=!0}=e,c=r.useRef(null),d=r.useRef(null),[f=!1,p]=(0,s.T)({prop:o,defaultProp:a,onChange:i});return(0,b.jsx)(w,{scope:t,triggerRef:c,contentRef:d,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:u,children:n})};k.displayName=y;var C="DialogTrigger",R=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=j(C,n),l=(0,a.e)(t,i.triggerRef);return(0,b.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":q(i.open),...r,ref:l,onClick:(0,o.M)(e.onClick,i.onOpenToggle)})});R.displayName=C;var I="DialogPortal",[E,N]=x(I,{forceMount:void 0}),M=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=j(I,t);return(0,b.jsx)(E,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,b.jsx)(f.z,{present:n||i.open,children:(0,b.jsx)(d.h,{asChild:!0,container:a,children:e})}))})};M.displayName=I;var _="DialogOverlay",O=r.forwardRef((e,t)=>{let n=N(_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=j(_,e.__scopeDialog);return a.modal?(0,b.jsx)(f.z,{present:r||a.open,children:(0,b.jsx)(F,{...o,ref:t})}):null});O.displayName=_;var F=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(_,n);return(0,b.jsx)(h.Z,{as:m.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,b.jsx)(p.WV.div,{"data-state":q(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),P="DialogContent",W=r.forwardRef((e,t)=>{let n=N(P,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=j(P,e.__scopeDialog);return(0,b.jsx)(f.z,{present:r||a.open,children:a.modal?(0,b.jsx)(V,{...o,ref:t}):(0,b.jsx)(T,{...o,ref:t})})});W.displayName=P;var V=r.forwardRef((e,t)=>{let n=j(P,e.__scopeDialog),i=r.useRef(null),l=(0,a.e)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,v.Ry)(e)},[]),(0,b.jsx)(A,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),T=r.forwardRef((e,t)=>{let n=j(P,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,b.jsx)(A,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),A=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,...s}=e,d=j(P,n),f=r.useRef(null),p=(0,a.e)(t,f);return(0,g.EW)(),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,b.jsx)(u.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":q(d.open),...s,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Y,{titleId:d.titleId}),(0,b.jsx)(G,{contentRef:f,descriptionId:d.descriptionId})]})]})}),S="DialogTitle",Z=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(S,n);return(0,b.jsx)(p.WV.h2,{id:o.titleId,...r,ref:t})});Z.displayName=S;var z="DialogDescription",B=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(z,n);return(0,b.jsx)(p.WV.p,{id:o.descriptionId,...r,ref:t})});B.displayName=z;var U="DialogClose",X=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=j(U,n);return(0,b.jsx)(p.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>a.onOpenChange(!1))})});function q(e){return e?"open":"closed"}X.displayName=U;var H="DialogTitleWarning",[K,L]=(0,i.k)(H,{contentName:P,titleName:S,docsSlug:"dialog"}),Y=e=>{let{titleId:t}=e,n=L(H),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},G=e=>{let{contentRef:t,descriptionId:n}=e,o=L("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},J=k,Q=R,$=M,ee=O,et=W,en=Z,er=B,eo=X},721:function(e,t,n){n.d(t,{bU:function(){return j},fC:function(){return w}});var r=n(2265),o=n(6741),a=n(8575),i=n(3966),l=n(886),s=n(6718),u=n(420),c=n(6840),d=n(7437),f="Switch",[p,g]=(0,i.b)(f),[h,v]=p(f),m=r.forwardRef((e,t)=>{let{__scopeSwitch:n,name:i,checked:s,defaultChecked:u,required:f,disabled:p,value:g="on",onCheckedChange:v,form:m,...b}=e,[y,w]=r.useState(null),j=(0,a.e)(t,e=>w(e)),k=r.useRef(!1),C=!y||m||!!y.closest("form"),[R=!1,I]=(0,l.T)({prop:s,defaultProp:u,onChange:v});return(0,d.jsxs)(h,{scope:n,checked:R,disabled:p,children:[(0,d.jsx)(c.WV.button,{type:"button",role:"switch","aria-checked":R,"aria-required":f,"data-state":D(R),"data-disabled":p?"":void 0,disabled:p,value:g,...b,ref:j,onClick:(0,o.M)(e.onClick,e=>{I(e=>!e),C&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),C&&(0,d.jsx)(x,{control:y,bubbles:!k.current,name:i,value:g,checked:R,required:f,disabled:p,form:m,style:{transform:"translateX(-100%)"}})]})});m.displayName=f;var b="SwitchThumb",y=r.forwardRef((e,t)=>{let{__scopeSwitch:n,...r}=e,o=v(b,n);return(0,d.jsx)(c.WV.span,{"data-state":D(o.checked),"data-disabled":o.disabled?"":void 0,...r,ref:t})});y.displayName=b;var x=e=>{let{control:t,checked:n,bubbles:o=!0,...a}=e,i=r.useRef(null),l=(0,s.D)(n),c=(0,u.t)(t);return r.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==n&&t){let r=new Event("click",{bubbles:o});t.call(e,n),e.dispatchEvent(r)}},[l,n,o]),(0,d.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...a,tabIndex:-1,ref:i,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function D(e){return e?"checked":"unchecked"}var w=m,j=y}}]);