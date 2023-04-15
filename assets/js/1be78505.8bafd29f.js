"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[514,608],{3616:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(7294),i=a(3905),o=a(2263),l=a(6291),r=a(6402),s=a(7462),c=a(6010),d=a(9306),m=a(1839),u=a(3783),b=a(7898),p=a(6742),h=a(3919),E=a(5537);const f=e=>n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var v=a(4478),g=a(8617),C=a(4973);const k={sidebar:"sidebar_a3j0",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_VlPv",sidebarHidden:"sidebarHidden_OqfG",sidebarLogo:"sidebarLogo_hmkv",menu:"menu_cyFh",menuLinkText:"menuLinkText_lRH+",menuWithAnnouncementBar:"menuWithAnnouncementBar_+O1J",collapseSidebarButton:"collapseSidebarButton_eoK2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_e+kA",sidebarMenuIcon:"sidebarMenuIcon_iZzd",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_6kU2"},_=24,S=(e,t)=>"link"===e.type?(0,d.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>S(e,t))),I=(0,n.memo)((function(e){let{items:t,...a}=e;return t.map(((e,t)=>n.createElement(N,(0,s.Z)({key:t,item:e},a))))}));function N(e){return"category"===e.item.type?n.createElement(Z,e):n.createElement(M,e)}function Z(e){let{item:t,onItemClick:a,collapsible:i,activePath:o,...l}=e;const{items:r,label:m}=t,u=S(t,o),b=(0,d.D9)(u),[p,h]=(0,n.useState)((()=>!!i&&(!u&&t.collapsed))),E=(0,n.useRef)(null),[f,v]=(0,n.useState)(void 0),g=function(e){void 0===e&&(e=!0),v(e?`${E.current?.scrollHeight}px`:void 0)};(0,n.useEffect)((()=>{u&&!b&&p&&h(!1)}),[u,b,p]);const C=(0,n.useCallback)((e=>{e.preventDefault(),f||g(),setTimeout((()=>h((e=>!e))),100)}),[f]);return 0===r.length?null:n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":p})},n.createElement("a",(0,s.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":i,"menu__link--active":i&&u,[k.menuLinkText]:!i}),onClick:i?C:void 0,href:i?"#!":void 0},l),m),n.createElement("ul",{className:"menu__list",ref:E,style:{height:f},onTransitionEnd:()=>{p||g(!1)}},n.createElement(I,{items:r,tabIndex:p?"-1":"0",onItemClick:a,collapsible:i,activePath:o})))}function M(e){let{item:t,onItemClick:a,activePath:i,collapsible:o,...l}=e;const{href:r,label:d}=t,m=S(t,i);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(p.Z,(0,s.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":m}),to:r},(0,h.Z)(r)&&{isNavLink:!0,exact:!0,onClick:a},l),(0,h.Z)(r)?d:n.createElement("span",null,d,n.createElement(g.Z,null))))}function T(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",k.collapseSidebarButton),onClick:t},n.createElement(f,{className:k.collapseSidebarButtonIcon}))}function y(e){let{responsiveSidebarOpened:t,onClick:a}=e;return n.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,c.Z)(k.sidebarMenuIcon,k.sidebarMenuCloseIcon)},"\xd7"):n.createElement(v.Z,{className:k.sidebarMenuIcon,height:_,width:_}))}const x=function(e){let{path:t,sidebar:a,sidebarCollapsible:i=!0,onCollapse:o,isHidden:l}=e;const r=function(){const{isClosed:e}=(0,d.nT)(),[t,a]=(0,n.useState)(!e);return(0,b.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:p}=(0,d.LU)(),{isClosed:h}=(0,d.nT)(),{showResponsiveSidebar:f,closeResponsiveSidebar:v,toggleResponsiveSidebar:g}=function(){const[e,t]=(0,n.useState)(!1);(0,m.Z)(e);const a=(0,u.Z)();return(0,n.useEffect)((()=>{a===u.D.desktop&&t(!1)}),[a]),{showResponsiveSidebar:e,closeResponsiveSidebar:(0,n.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:(0,n.useCallback)((()=>{t((e=>!e))}),[t])}}();return n.createElement("div",{className:(0,c.Z)(k.sidebar,{[k.sidebarWithHideableNavbar]:s,[k.sidebarHidden]:l})},s&&n.createElement(E.Z,{tabIndex:-1,className:k.sidebarLogo}),n.createElement("nav",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",k.menu,{"menu--show":f,[k.menuWithAnnouncementBar]:!h&&r}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(y,{responsiveSidebarOpened:f,onClick:g}),n.createElement("ul",{className:"menu__list"},n.createElement(I,{items:a,onItemClick:v,collapsible:i,activePath:t}))),p&&n.createElement(T,{onClick:o}))};var B=a(7933),R=a(4608),A=a(6550);const L={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainer:"docSidebarContainer_0YBq",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};function w(e){let{currentDocRoute:t,versionMetadata:a,children:l}=e;const{siteConfig:s,isClient:m}=(0,o.Z)(),{pluginId:u,version:b}=a,{sidebarName:p,sidebar:h}=function(e){let{versionMetadata:t,currentDocRoute:a}=e;const{permalinkToSidebar:n,docsSidebars:i}=t,o=n[a.path]||n[(l=a.path,l.endsWith("/")?l:`${l}/`)]||n[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];var l;return{sidebar:i[o],sidebarName:o}}({versionMetadata:a,currentDocRoute:t}),[E,v]=(0,n.useState)(!1),[g,k]=(0,n.useState)(!1),_=(0,n.useCallback)((()=>{g&&k(!1),v(!E)}),[g]);return n.createElement(r.Z,{key:m,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:b,tag:(0,d.os)(u,b)}},n.createElement("div",{className:L.docPage},h&&n.createElement("aside",{className:(0,c.Z)(L.docSidebarContainer,{[L.docSidebarContainerHidden]:E}),onTransitionEnd:e=>{e.currentTarget.classList.contains(L.docSidebarContainer)&&E&&k(!0)}},n.createElement(x,{key:p,sidebar:h,path:t.path,sidebarCollapsible:s.themeConfig?.sidebarCollapsible??!0,onCollapse:_,isHidden:g}),g&&n.createElement("div",{className:L.collapsedDocSidebar,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(f,{className:L.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(L.docMainContainer,{[L.docMainContainerEnhanced]:E||!h})},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",L.docItemWrapper,{[L.docItemWrapperEnhanced]:E})},n.createElement(i.Zo,{components:B.Z},l)))))}const H=function(e){const{route:{routes:t},versionMetadata:a,location:i}=e,o=t.find((e=>(0,A.LX)(i.pathname,e)));return o?n.createElement(w,{currentDocRoute:o,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a})):n.createElement(R.default,e)}},4608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(7294),i=a(6402),o=a(4973);const l=function(){return n.createElement(i.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);