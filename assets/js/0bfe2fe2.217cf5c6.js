"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,k=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7871:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={},o="Keyboard Shortcuts",s={unversionedId:"searching",id:"searching",isDocsHomePage:!1,title:"Keyboard Shortcuts",description:"Searching",source:"@site/docs/searching.md",sourceDirName:".",slug:"/searching",permalink:"/docs/searching",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/searching.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Authentication",permalink:"/docs/authentication"},next:{title:"Alternate Views & Opening Methods",permalink:"/docs/alternate-views"}},l=[{value:"Searching",id:"searching",children:[]},{value:"Navigating",id:"navigating",children:[]},{value:"Launching Apps",id:"launching-apps",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Custom Hotkeys",id:"custom-hotkeys",children:[]},{value:"Web Search",id:"web-search",children:[{value:"Setting Search Engine",id:"setting-search-engine",children:[]},{value:"Using Custom Search Engine",id:"using-custom-search-engine",children:[]},{value:"Setting Opening Method",id:"setting-opening-method",children:[]},{value:"Using Bangs",id:"using-bangs",children:[]},{value:"Disabling Web Search",id:"disabling-web-search",children:[]}]},{value:"Clearing Search",id:"clearing-search",children:[]}],p={toc:l},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyboard-shortcuts"},"Keyboard Shortcuts"),(0,r.kt)("h2",{id:"searching"},"Searching"),(0,r.kt)("p",null,"One of the primary purposes of Dashy is to allow you to quickly find and launch a given app. To make this as quick as possible, there is no need to touch the mouse, or press a certain key to begin searching - just start typing. Results will be filtered in real-time. No need to worry about case, special characters or small typos, these are taken care of, and your results should appear."),(0,r.kt)("h2",{id:"navigating"},"Navigating"),(0,r.kt)("p",null,"You can navigate through your items or search results using the keyboard. You can use ",(0,r.kt)("kbd",null,"Tab")," to cycle through results, and ",(0,r.kt)("kbd",null,"Shift")," + ",(0,r.kt)("kbd",null,"Tab")," to go backwards. Or use the arrow keys, ",(0,r.kt)("kbd",null,"\u2191"),", ",(0,r.kt)("kbd",null,"\u2192"),", ",(0,r.kt)("kbd",null,"\u2193")," and ",(0,r.kt)("kbd",null,"\u2190"),"."),(0,r.kt)("h2",{id:"launching-apps"},"Launching Apps"),(0,r.kt)("p",null,"You can launch a elected app by hitting ",(0,r.kt)("kbd",null,"Enter"),". This will open the app using your default opening method, specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," (either ",(0,r.kt)("inlineCode",{parentName:"p"},"newtab"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sametab"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"modal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace"),"). You can also use ",(0,r.kt)("kbd",null,"Alt")," + ",(0,r.kt)("kbd",null,"Enter")," to open the app in a pop-up modal, or ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"Enter")," to open it in a new tab. For all available opening methods, just right-click on an item, to bring up the context menu."),(0,r.kt)("h2",{id:"tags"},"Tags"),(0,r.kt)("p",null,"By default, items are filtered by the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," attribute, as well as the hostname (extracted from ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),"), the ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),". If you need to find results based on text which isn't included in these attributes, then you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," to a given item. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  items:\n  - title: Plex\n    description: Media library\n    icon: favicon\n    url: https://plex.lab.local\n    tags: [ movies, videos, music ]\n  - title: FreshRSS\n    description: RSS Reader\n    icon: favicon\n    url: https://freshrss.lab.local\n    tags: [ news, updates, blogs ]\n\n")),(0,r.kt)("p",null,"In the above example, Plex will be visible when searching for 'movies', and FreshRSS with 'news'"),(0,r.kt)("h2",{id:"custom-hotkeys"},"Custom Hotkeys"),(0,r.kt)("p",null,"For apps that you use regularly, you can set a custom keybinding. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hotkey")," parameter on a certain item to specify a numeric key, between ",(0,r.kt)("inlineCode",{parentName:"p"},"0 - 9"),". You can then launch that app, by just pressing that key, which is much quicker than searching for it, if it's an app you use frequently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Bookstack\n  icon: far fa-books\n  url: https://bookstack.lab.local/\n  hotkey: 2\n- title: Git Tea\n  icon: fab fa-git\n  url: https://git.lab.local/\n  target: workspace\n  hotkey: 3\n")),(0,r.kt)("p",null,"In the above example, pressing ",(0,r.kt)("kbd",null,"2")," will launch Bookstack. Or hitting ",(0,r.kt)("kbd",null,"3")," will open Git in the workspace view."),(0,r.kt)("h2",{id:"web-search"},"Web Search"),(0,r.kt)("p",null,"It's possible to search the web directly from Dashy, which might be useful if you're using Dashy as your start page. This can be done by typing your query as normal, and then pressing ",(0,r.kt)("kbd",null,"\u23ce"),". Web search options are configured under ",(0,r.kt)("inlineCode",{parentName:"p"},"appConfig.webSearch"),"."),(0,r.kt)("h3",{id:"setting-search-engine"},"Setting Search Engine"),(0,r.kt)("p",null,"Set your default search engine using the ",(0,r.kt)("inlineCode",{parentName:"p"},"webSearch.searchEngine")," property. This defaults to DuckDuckGo. Search engine must be referenced by their key, the following providers are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://duckduckgo.com"},(0,r.kt)("inlineCode",{parentName:"a"},"duckduckgo")),", ",(0,r.kt)("a",{parentName:"li",href:"https://google.com"},(0,r.kt)("inlineCode",{parentName:"a"},"google")),", ",(0,r.kt)("a",{parentName:"li",href:"https://whoogle.sdf.org"},(0,r.kt)("inlineCode",{parentName:"a"},"whoogle")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.qwant.com"},(0,r.kt)("inlineCode",{parentName:"a"},"qwant")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.startpage.com"},(0,r.kt)("inlineCode",{parentName:"a"},"startpage")),", ",(0,r.kt)("a",{parentName:"li",href:"https://searx.bar"},(0,r.kt)("inlineCode",{parentName:"a"},"searx-bar")),", ",(0,r.kt)("a",{parentName:"li",href:"https://searx.info"},(0,r.kt)("inlineCode",{parentName:"a"},"searx-info"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://searx.tiekoetter.com"},(0,r.kt)("inlineCode",{parentName:"a"},"searx-tiekoetter")),", ",(0,r.kt)("a",{parentName:"li",href:"https://searx.bissisoft.com"},(0,r.kt)("inlineCode",{parentName:"a"},"searx-bissisoft")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.ecosia.org"},(0,r.kt)("inlineCode",{parentName:"a"},"ecosia")),", ",(0,r.kt)("a",{parentName:"li",href:"https://metager.org/meta"},(0,r.kt)("inlineCode",{parentName:"a"},"metager")),", ",(0,r.kt)("a",{parentName:"li",href:"https://swisscows.com"},(0,r.kt)("inlineCode",{parentName:"a"},"swisscows")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.mojeek.com"},(0,r.kt)("inlineCode",{parentName:"a"},"mojeek"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org"},(0,r.kt)("inlineCode",{parentName:"a"},"wikipedia")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.wolframalpha.com"},(0,r.kt)("inlineCode",{parentName:"a"},"wolframalpha")),", ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com"},(0,r.kt)("inlineCode",{parentName:"a"},"stackoverflow")),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com"},(0,r.kt)("inlineCode",{parentName:"a"},"github")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com"},(0,r.kt)("inlineCode",{parentName:"a"},"reddit")),", ",(0,r.kt)("a",{parentName:"li",href:"https://youtube.com"},(0,r.kt)("inlineCode",{parentName:"a"},"youtube")),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.bbc.co.uk"},(0,r.kt)("inlineCode",{parentName:"a"},"bbc")))),(0,r.kt)("h3",{id:"using-custom-search-engine"},"Using Custom Search Engine"),(0,r.kt)("p",null,"You can also use a custom search engine, that isn't included in the above list (like a self-hosted instance of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/benbusby/whoogle-search"},"Whoogle")," or ",(0,r.kt)("a",{parentName:"p",href:"https://searx.github.io/searx/"},"Searx"),"). Set ",(0,r.kt)("inlineCode",{parentName:"p"},"searchEngine: custom"),", and then specify the URL (plus query params) to you're search engine under ",(0,r.kt)("inlineCode",{parentName:"p"},"customSearchEngine"),"."),(0,r.kt)("p",null,"For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  webSearch:\n    searchEngine: custom\n    customSearchEngine: 'https://searx.local/search?q='\n")),(0,r.kt)("h3",{id:"setting-opening-method"},"Setting Opening Method"),(0,r.kt)("p",null,"In a similar way to opening apps, you can specify where you would like search results to be opened. This is done under the ",(0,r.kt)("inlineCode",{parentName:"p"},"openingMethod")," attribute, and can be set to either  ",(0,r.kt)("inlineCode",{parentName:"p"},"newtab"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sametab")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace"),". By default results are opened in a new tab."),(0,r.kt)("h3",{id:"using-bangs"},"Using Bangs"),(0,r.kt)("p",null,"An insanely useful feature of DDG is ",(0,r.kt)("a",{parentName:"p",href:"https://duckduckgo.com/bang"},"Bangs"),", where you type a specific character combination at the start of your search query, and it will be redirected the that website, such as '!w Docker' will display the Docker wikipedia page. Dashy has a similar feature, enabling you to define your own custom bangs to redirect search results to a specific app, website or search engine."),(0,r.kt)("p",null,"This is done under the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchBangs")," property, with a list of key value pairs. The key is what you will type, and the value is the destination, either as an identifier or a URL with query parameters.  "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  webSearch:\n    searchEngine: 'duckduckgo'\n    openingMethod: 'newtab'\n    searchBangs:\n      /r: reddit\n      /w: wikipedia\n      /s: https://whoogle.local/search?q=\n      /a: https://www.amazon.co.uk/s?k=\n      ':wolf': wolframalpha\n      ':so': stackoverflow\n      ':git': github\n")),(0,r.kt)("p",null,"Note that bangs begging with ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," or ",(0,r.kt)("inlineCode",{parentName:"p"},":")," must be surrounded them in quotes"),(0,r.kt)("h3",{id:"disabling-web-search"},"Disabling Web Search"),(0,r.kt)("p",null,"Web search can be disabled, by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"disableWebSearch"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  webSearch: { disableWebSearch: true }\n")),(0,r.kt)("h2",{id:"clearing-search"},"Clearing Search"),(0,r.kt)("p",null,"You can clear your search term at any time, resting the UI to it's initial state, by pressing ",(0,r.kt)("kbd",null,"Esc"),".\nThis can also be used to close any open pop-up modals."))}h.isMDXComponent=!0}}]);