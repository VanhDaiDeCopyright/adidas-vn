"use strict";(self.webpackChunk_portals_adidas_all=self.webpackChunk_portals_adidas_all||[]).push([[78],{936:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(2061),o=r(4041),s=r(8913),i=r(2470),l=r(7277),c=r(8694),a=r(1085);function u(e){var t=e.children,r=e.arrowsMode,u=e.scrollIndicatorMode,d=e.scrollIndicatorColor,f=e.disableScrollIntoView;r||(r=c.y.Default);var h=(0,o.useRef)(0),v=(0,o.useState)(null),p=(0,n.A)(v,2),x=p[0],g=p[1],w=(0,o.useState)(!0),m=(0,n.A)(w,2),b=m[0],L=m[1],j=(0,o.useState)(!1),k=(0,n.A)(j,2),C=k[0],S=k[1],y=(0,o.useState)(!1),E=(0,n.A)(y,2),N=E[0],R=E[1],T=(0,o.useState)(null),X=(0,n.A)(T,2),A=X[0],D=X[1],H=(0,o.useState)(!1),M=(0,n.A)(H,2),_=M[0],I=M[1];(0,o.useEffect)((function(){if(x){if(!A){if(f)return;var e=new ResizeObserver((function(){var e=x.getBoundingClientRect();if(b)for(var t=x.children.length-1;t>=0;--t){var r=x.children[t];if(r.getBoundingClientRect().x<=e.x){var n=void 0;n=1===t?0:r.offsetLeft,x.scrollTo({behavior:"smooth",left:n});break}}else for(var o=0;o<x.children.length;++o){var s=x.children[o],i=s.getBoundingClientRect();if(i.x+i.width>=e.x+e.width){o==x.children.length-2&&(s=x.children[x.children.length-1]),x.scrollTo({behavior:"smooth",left:s.offsetLeft-(e.width-i.width)});break}}}));return e.observe(x),function(){return e.disconnect()}}var t=function(e){var t="touchmove"===e.type?e.touches[0].pageX:e.pageX,r=A.startScrollLeft-t+A.startX;r!==x.scrollLeft&&(x.scrollLeft=r)},r=function(){D(null),setTimeout((function(){return I(!1)}))};return window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",r),window.addEventListener("touchend",r),function(){window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",r),window.removeEventListener("touchend",r)}}}),[A,x,b,f]),(0,o.useEffect)((function(){if(x){var e=function(){var e=x.scrollLeft,t=x.offsetWidth,r=x.scrollWidth,n=e>0;N!==n&&R(n);var o=e+t<r;if(C!==o&&S(o),A&&(e!==A.startScrollLeft&&I(!0),e!==h.current)){var s=e<h.current;b!==s&&L(s),h.current=e}};x.addEventListener("scroll",e);var t=new ResizeObserver(e);return t.observe(x),function(){x.removeEventListener("scroll",e),t.disconnect()}}}),[A,b,x,N,C]);var O=function(e,t){e.stopPropagation();var r=(0,s.fd)(x);null==x||x.scrollTo({left:(r+(t?1:-1))*x.offsetWidth,behavior:"smooth"})};return(0,a.jsxs)("div",{className:"flex flex-col relative",children:[(0,a.jsx)("div",{className:"scrollable-content whitespace-nowrap ".concat(A?"cursor-grabbing":"cursor-grab"),ref:g,onMouseDown:function(e){0===e.button&&(e.preventDefault(),D({startScrollLeft:e.currentTarget.scrollLeft,startX:e.pageX}))},onTouchStart:function(e){D({startScrollLeft:e.currentTarget.scrollLeft,startX:e.touches[0].pageX})},onClick:function(e){_&&(e.preventDefault(),e.stopPropagation())},children:t}),r===c.y.OnTop&&(0,a.jsxs)("div",{className:"hidden sm:flex absolute -top-[66px] right-0 gap-[24px]",children:[(0,a.jsx)("svg",{className:"w-[40px] h-[40px] cursor-pointer ".concat(N?"":"opacity-40"),onClick:function(e){return O(e)},children:(0,a.jsx)("use",{xlinkHref:"public/icons/icons.svg#arrow-left"})}),(0,a.jsx)("svg",{className:"w-[40px] h-[40px] cursor-pointer ".concat(C?"":"opacity-40"),onClick:function(e){return O(e,!0)},children:(0,a.jsx)("use",{xlinkHref:"public/icons/icons.svg#arrow-right"})})]}),N&&(0,a.jsxs)(a.Fragment,{children:[r===c.y.Default&&(0,a.jsx)(i.U,{onClick:O}),r===c.y.HideOnMobile&&(0,a.jsx)("div",{className:"hidden sm:block",children:(0,a.jsx)(i.U,{onClick:O})}),r===c.y.Small&&(0,a.jsx)("svg",{className:"fill-current w-[20px] h-[20px] pr-[5px] absolute top-1/2 left-0 translate-y-[-50%] bg-white",children:(0,a.jsx)("use",{xlinkHref:"public/icons/icons.svg#arrow-left"})})]}),C&&(0,a.jsxs)(a.Fragment,{children:[r===c.y.Default&&(0,a.jsx)(i.U,{isRight:!0,onClick:function(e){return O(e,!0)}}),r===c.y.HideOnMobile&&(0,a.jsx)("div",{className:"hidden sm:block",children:(0,a.jsx)(i.U,{isRight:!0,onClick:function(e){return O(e,!0)}})}),r===c.y.Small&&(0,a.jsx)("svg",{className:"fill-current w-[20px] h-[20px] pl-[5px] absolute top-1/2 right-0 translate-y-[-50%] bg-white",children:(0,a.jsx)("use",{xlinkHref:"public/icons/icons.svg#arrow-right"})})]}),(0,a.jsx)(l.P,{scrollElement:x,scrollIndicatorMode:u,scrollIndicatorColor:d})]})}}}]);