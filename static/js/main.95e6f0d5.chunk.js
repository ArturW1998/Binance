(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.909daf68.svg"},27:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l,m=a(8),u=a(44),d=a(45),v="UPDATE_MARKET_PAIRS",f="SET_ACTIVE_MARKET",p="TOGGLE_SOCKET_STREAMS",h={BASE_PATH:"wss://stream.binance.com",STREAM_PATH:"/stream",STREAM_PARAM:"streams="},k=["BNB","BTC","ETH","USDT"],b=[{id:1},{id:2},{id:3},{id:4}],g=[{title:"Pair"},{title:"Latest Price"},{title:"Open"},{title:"High"},{title:"Low"},{title:"Volume"}],E="/Binance/",w="markets",S=a(5),N=a(17),P=a.n(N),y=a(13),O=a(3),T={},A=v,j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case A:return Object(O.a)({},e,n);default:return e}},M={},x=f,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case x:return Object(O.a)({},n);default:return e}},L=p,_=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.status;switch(a){case L:return n;default:return e}},B=Object(S.c)({marketPairs:j,activeMarket:C,connectSocket:_}),R=w,W=S.d,H=Object(y.save)({namespace:R}),V=Object(y.load)({namespace:R})||{},q=(l=V,Object(S.e)(B,l,W(Object(S.a)(P.a,H)))),D=a(18),U=a(19),I=a(24),J=a(20),K=a(25),F=a(21),G=a.n(F),Q=f,$=v,z=p,X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach(function(e){var a=e.s,n=e.c,r=e.p,c=e.P,o=e.h,i=e.l,s=e.q,l=e.o;t[a]={symbol:a,latestPrice:n,priceChange:r,priceChangePercent:c,highPrice:o,lowPrice:i,quoteVolume:s,openPrice:l}}),t},Y=b,Z=function(){return r.a.createElement("div",{className:"text-center w-100"},r.a.createElement("div",{className:"lds-ellipsis"},Y.map(function(e){var t=e.id;return r.a.createElement("div",{key:"dot-".concat(t),className:"dot"})})))},ee=function(e){var t=function(e,t,a,n,r,c){return g.map(function(o){switch(o.title){case"Pair":return Object(O.a)({},o,{value:e,bold:!0});case"Latest Price":return Object(O.a)({},o,{value:t});case"Open":return Object(O.a)({},o,{value:a});case"High":return Object(O.a)({},o,{value:n});case"Low":return Object(O.a)({},o,{value:r});case"Volume":return Object(O.a)({},o,{value:c});default:return Object(O.a)({},o)}})}(e.symbol,e.latestPrice,e.highPrice,e.lowPrice,e.quoteVolume,e.openPrice);return r.a.createElement("li",{className:"table-item"},r.a.createElement("article",{className:"d-none d-md-inline"},r.a.createElement("div",{className:"row table-row small py-1"},t.map(function(e){var t=e.title,a=e.value,n=e.bold;return r.a.createElement("div",{key:t,className:"col d-flex align-items-center"},n?r.a.createElement("h3",{className:"title font-weight-normal mb-0"},a):r.a.createElement("span",null,a))}))),r.a.createElement("article",{className:"d-inline d-md-none"},r.a.createElement("div",{className:"row table-row small py-1"},t.map(function(e){var t=e.title,a=e.value,n=e.bold;return r.a.createElement("div",{key:t,className:"col-4"},r.a.createElement("h2",{className:"font-weight-light text-muted small mb-0"},t),r.a.createElement("span",{className:n?"font-weight-bold":"small"},a))}))))};ee.defaultProps={symbol:"",latestPrice:"",highPrice:"",lowPrice:"",quoteVolume:"",openPrice:""};var te=ee,ae=g,ne=k[1],re=function(e){var t=e.ticker,a=e.filter,n=Object.values(t);return r.a.createElement("ul",{className:"table"},r.a.createElement("li",{className:"d-none d-md-inline"},r.a.createElement("div",{className:"row table-header small py-1"},ae.map(function(e){var t=e.title;return r.a.createElement("div",{key:t,className:"col"},r.a.createElement("h2",{className:"title font-weight-bold mb-0"},t))}))),n.map(function(e){return e.symbol.endsWith(a)?r.a.createElement(te,Object.assign({key:e.symbol},e)):null}))};re.defaultProps={ticker:{},filter:ne};var ce=re,oe=k,ie=function(e){function t(e){var a;Object(D.a)(this,t),(a=Object(I.a)(this,Object(J.a)(t).call(this,e))).switchSocketStreams=function(){a.props.connectSocket?a.disconnectSocketStreams(a.streams):a.connectSocketStreams(a.streams)},a.connectSocketStreams=function(e){var t=h.BASE_PATH,n=h.STREAM_PATH,r=h.STREAM_PARAM,c=e.join("/"),o=btoa(c);a[o]=new WebSocket("".concat(t).concat(n,"?").concat(r).concat(c)),a[o].onopen=function(){(0,a.props.toggleSocketStreams)(!0)},a[o].onmessage=function(e){var t=e.data,n=void 0===t?{}:t,r=a.props,c=r.updateMarketPairs,o=r.activeMarket.market,i=X(JSON.parse(n).data)||{},s=oe[1];c(i),!o&&a.setActiveTab(s),a.setState({isLoaded:!0})},a[o].onerror=function(e){console.error(e)}},a.disconnectSocketStreams=function(e){var t=e.join("/"),n=btoa(t);a[n].readyState===WebSocket.OPEN&&a[n].close(),a[n].onclose=function(){(0,a.props.toggleSocketStreams)(!1)}},a.setActiveTab=function(e){(0,a.props.setActiveMarket)({market:e.currentTarget?e.currentTarget.getAttribute("data-tab"):e})};var n=e.marketPairs,r=e.activeMarket.market;return a.state={isLoaded:n&&r},a.streams=["!miniTicker@arr"],a}return Object(K.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.props.connectSocket&&this.connectSocketStreams(this.streams)}},{key:"componentWillUnmount",value:function(){this.props.connectSocket&&this.disconnectSocketStreams(this.streams)}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,c=this.props,o=c.activeMarket.market,i=c.marketPairs,s=c.connectSocket;return a?r.a.createElement("div",{className:"alert alert-danger"},a.message):n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center pt-2"},"The World's Leading Cryptocurrency Exchange"),r.a.createElement("div",{className:"d-flex justify-content-center pt-2"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.switchSocketStreams},s?"Disconnect":"Connect")),r.a.createElement("ul",{className:"nav nav-tabs pt-2"},oe.map(function(t){return r.a.createElement("li",{key:t,className:"nav-item"},r.a.createElement("button",{className:G()("nav-link",{active:o===t}),onClick:e.setActiveTab,"data-tab":t},t,r.a.createElement("span",{className:"d-none d-sm-inline"}," Markets")))})),i&&o&&r.a.createElement(ce,{ticker:i,filter:o})):r.a.createElement(Z,null)}}]),t}(n.Component);ie.defaultProps={marketPairs:{},activeMarket:{},connectSocket:!0,setActiveMarket:function(){},updateMarketPairs:function(){},toggleSocketStreams:function(){}};var se=Object(m.b)(function(e){return{marketPairs:e.marketPairs,activeMarket:e.activeMarket,connectSocket:e.connectSocket}},{setActiveMarket:function(e){return{type:Q,data:e}},updateMarketPairs:function(e){return{type:$,data:e}},toggleSocketStreams:function(e){return{type:z,status:e}}})(ie),le=a(43),me=a(22),ue=a.n(me),de=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(le.a,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:ue.a,height:"25",alt:"Binance Logo"})),r.a.createElement("div",{className:"navbar-text"},r.a.createElement("span",{className:"small text-white"},"Trade history viewer web app"))))},ve=E,fe=function(){return r.a.createElement(m.a,{store:q},r.a.createElement(u.a,{basename:ve},r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null),r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,{exact:!0,path:"/",component:se}))))))))};a(40);o.a.render(r.a.createElement(fe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Binance",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Binance","/service-worker.js");i?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.95e6f0d5.chunk.js.map