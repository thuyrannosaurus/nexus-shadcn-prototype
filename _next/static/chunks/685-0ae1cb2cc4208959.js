"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[685],{6394:function(e,r,t){t.d(r,{f:function(){return l}});var n=t(2265),o=t(6840),a=t(7437),i=n.forwardRef((e,r)=>(0,a.jsx)(o.WV.label,{...e,ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var l=i},7312:function(e,r,t){t.d(r,{VY:function(){return S},ee:function(){return Z},fC:function(){return L},h_:function(){return B},xz:function(){return q}});var n=t(2265),o=t(6741),a=t(8575),i=t(3966),l=t(5278),u=t(6097),s=t(9103),d=t(9255),c=t(6008),p=t(3832),f=t(1599),v=t(6840),h=t(7053),g=t(886),x=t(5478),b=t(703),C=t(7437),m="Popover",[w,j]=(0,i.b)(m,[c.D7]),y=(0,c.D7)(),[P,R]=w(m),D=e=>{let{__scopePopover:r,children:t,open:o,defaultOpen:a,onOpenChange:i,modal:l=!1}=e,u=y(r),s=n.useRef(null),[p,f]=n.useState(!1),[v=!1,h]=(0,g.T)({prop:o,defaultProp:a,onChange:i});return(0,C.jsx)(c.fC,{...u,children:(0,C.jsx)(P,{scope:r,contentId:(0,d.M)(),triggerRef:s,open:v,onOpenChange:h,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),hasCustomAnchor:p,onCustomAnchorAdd:n.useCallback(()=>f(!0),[]),onCustomAnchorRemove:n.useCallback(()=>f(!1),[]),modal:l,children:t})})};D.displayName=m;var M="PopoverAnchor",F=n.forwardRef((e,r)=>{let{__scopePopover:t,...o}=e,a=R(M,t),i=y(t),{onCustomAnchorAdd:l,onCustomAnchorRemove:u}=a;return n.useEffect(()=>(l(),()=>u()),[l,u]),(0,C.jsx)(c.ee,{...i,...o,ref:r})});F.displayName=M;var k="PopoverTrigger",V=n.forwardRef((e,r)=>{let{__scopePopover:t,...n}=e,i=R(k,t),l=y(t),u=(0,a.e)(r,i.triggerRef),s=(0,C.jsx)(v.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Y(i.open),...n,ref:u,onClick:(0,o.M)(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,C.jsx)(c.ee,{asChild:!0,...l,children:s})});V.displayName=k;var A="PopoverPortal",[N,E]=w(A,{forceMount:void 0}),O=e=>{let{__scopePopover:r,forceMount:t,children:n,container:o}=e,a=R(A,r);return(0,C.jsx)(N,{scope:r,forceMount:t,children:(0,C.jsx)(f.z,{present:t||a.open,children:(0,C.jsx)(p.h,{asChild:!0,container:o,children:n})})})};O.displayName=A;var _="PopoverContent",I=n.forwardRef((e,r)=>{let t=E(_,e.__scopePopover),{forceMount:n=t.forceMount,...o}=e,a=R(_,e.__scopePopover);return(0,C.jsx)(f.z,{present:n||a.open,children:a.modal?(0,C.jsx)(T,{...o,ref:r}):(0,C.jsx)(W,{...o,ref:r})})});I.displayName=_;var T=n.forwardRef((e,r)=>{let t=R(_,e.__scopePopover),i=n.useRef(null),l=(0,a.e)(r,i),u=n.useRef(!1);return n.useEffect(()=>{let e=i.current;if(e)return(0,x.Ry)(e)},[]),(0,C.jsx)(b.Z,{as:h.g7,allowPinchZoom:!0,children:(0,C.jsx)(z,{...e,ref:l,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var r;e.preventDefault(),u.current||null===(r=t.triggerRef.current)||void 0===r||r.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let r=e.detail.originalEvent,t=0===r.button&&!0===r.ctrlKey,n=2===r.button||t;u.current=n},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),W=n.forwardRef((e,r)=>{let t=R(_,e.__scopePopover),o=n.useRef(!1),a=n.useRef(!1);return(0,C.jsx)(z,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var n,i;null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,r),r.defaultPrevented||(o.current||null===(i=t.triggerRef.current)||void 0===i||i.focus(),r.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:r=>{var n,i;null===(n=e.onInteractOutside)||void 0===n||n.call(e,r),r.defaultPrevented||(o.current=!0,"pointerdown"!==r.detail.originalEvent.type||(a.current=!0));let l=r.target;(null===(i=t.triggerRef.current)||void 0===i?void 0:i.contains(l))&&r.preventDefault(),"focusin"===r.detail.originalEvent.type&&a.current&&r.preventDefault()}})}),z=n.forwardRef((e,r)=>{let{__scopePopover:t,trapFocus:n,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:f,onInteractOutside:v,...h}=e,g=R(_,t),x=y(t);return(0,u.EW)(),(0,C.jsx)(s.M,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,C.jsx)(l.XB,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:v,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:f,onDismiss:()=>g.onOpenChange(!1),children:(0,C.jsx)(c.VY,{"data-state":Y(g.open),role:"dialog",id:g.contentId,...x,...h,ref:r,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),K="PopoverClose";function Y(e){return e?"open":"closed"}n.forwardRef((e,r)=>{let{__scopePopover:t,...n}=e,a=R(K,t);return(0,C.jsx)(v.WV.button,{type:"button",...n,ref:r,onClick:(0,o.M)(e.onClick,()=>a.onOpenChange(!1))})}).displayName=K,n.forwardRef((e,r)=>{let{__scopePopover:t,...n}=e,o=y(t);return(0,C.jsx)(c.Eh,{...o,...n,ref:r})}).displayName="PopoverArrow";var L=D,Z=F,q=V,B=O,S=I},271:function(e,r,t){t.d(r,{VY:function(){return A},aV:function(){return k},fC:function(){return F},xz:function(){return V}});var n=t(2265),o=t(6741),a=t(3966),i=t(1353),l=t(1599),u=t(6840),s=t(9114),d=t(886),c=t(9255),p=t(7437),f="Tabs",[v,h]=(0,a.b)(f,[i.Pc]),g=(0,i.Pc)(),[x,b]=v(f),C=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,onValueChange:o,defaultValue:a,orientation:i="horizontal",dir:l,activationMode:f="automatic",...v}=e,h=(0,s.gm)(l),[g,b]=(0,d.T)({prop:n,onChange:o,defaultProp:a});return(0,p.jsx)(x,{scope:t,baseId:(0,c.M)(),value:g,onValueChange:b,orientation:i,dir:h,activationMode:f,children:(0,p.jsx)(u.WV.div,{dir:h,"data-orientation":i,...v,ref:r})})});C.displayName=f;var m="TabsList",w=n.forwardRef((e,r)=>{let{__scopeTabs:t,loop:n=!0,...o}=e,a=b(m,t),l=g(t);return(0,p.jsx)(i.fC,{asChild:!0,...l,orientation:a.orientation,dir:a.dir,loop:n,children:(0,p.jsx)(u.WV.div,{role:"tablist","aria-orientation":a.orientation,...o,ref:r})})});w.displayName=m;var j="TabsTrigger",y=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,disabled:a=!1,...l}=e,s=b(j,t),d=g(t),c=D(s.baseId,n),f=M(s.baseId,n),v=n===s.value;return(0,p.jsx)(i.ck,{asChild:!0,...d,focusable:!a,active:v,children:(0,p.jsx)(u.WV.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":f,"data-state":v?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...l,ref:r,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(n)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(n)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==s.activationMode;v||a||!e||s.onValueChange(n)})})})});y.displayName=j;var P="TabsContent",R=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:o,forceMount:a,children:i,...s}=e,d=b(P,t),c=D(d.baseId,o),f=M(d.baseId,o),v=o===d.value,h=n.useRef(v);return n.useEffect(()=>{let e=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.jsx)(l.z,{present:a||v,children:t=>{let{present:n}=t;return(0,p.jsx)(u.WV.div,{"data-state":v?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":c,hidden:!n,id:f,tabIndex:0,...s,ref:r,style:{...e.style,animationDuration:h.current?"0s":void 0},children:n&&i})}})});function D(e,r){return"".concat(e,"-trigger-").concat(r)}function M(e,r){return"".concat(e,"-content-").concat(r)}R.displayName=P;var F=C,k=w,V=y,A=R}}]);