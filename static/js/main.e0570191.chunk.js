(this.webpackJsonpuberpage=this.webpackJsonpuberpage||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports=o(17)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),r=o(7),a=o.n(r),c=(o(13),o(14),o(2)),s=o(3),l=o(5),g=o(4),u=(o(15),o(1)),d=(o(16),function(e){Object(l.a)(o,e);var t=Object(g.a)(o);function o(){return Object(c.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.item,t=this.props.settings,o=this.props.height,n=this.props.width||100,r={width:"".concat(n,"vw"),minWidth:"".concat(n,"vw"),maxWidth:"".concat(n,"vw")},a={height:"".concat(o,"vh"),minHeight:"".concat(o,"vh"),maxHeight:"".concat(o,"vh")},c={gridColumnStart:this.props.gridColumnStart,gridColumnEnd:this.props.gridColumnEnd,gridRowStart:this.props.gridRow,gridRowEnd:this.props.gridRow+1},s=Object(u.a)({},r,{},a,{},c),l=Object(u.a)({},r,{},a,{},c),g=Object(u.a)({},r,{},a,{},c,{lineHeight:"".concat(o,"vh"),marginTop:"-".concat(o,"vh"),fontSize:"".concat(o/7,"vh")}),d=Object(u.a)({},r,{},a,{},c,{lineHeight:"".concat(o,"vh"),marginTop:"-".concat(o,"vh"),fontSize:"".concat(o/15,"vh")});if(e.background_color&&(l.backgroundColor=e.background_color),e.text_color&&(g.color=e.text_color),e.background_logo&&(l.backgroundImage="url(/img/".concat(e.background_logo,")"),l.backgroundSize=e.background_logo_size?e.background_logo_size:"50%"),e.background_picture){var h="",p="";e.background_logo&&(h="".concat(l.backgroundImage,", "),p="".concat(l.backgroundSize,", ")),l.backgroundImage="".concat(h,"url(/img/").concat(e.background_picture,")");var b=e.background_picture_size?e.background_picture_size:"cover";l.backgroundSize="".concat(p).concat(b)}return e.title&&(e.background_logo||e.background_picture)&&(l.opacity="0.2"),i.a.createElement("div",{className:"UberTile".concat(e.link?" withLink":""),style:s},i.a.createElement("a",Object.assign({className:"UberTile-link"},e.link?{href:e.link}:{},{target:t.default_link_target}),i.a.createElement("div",{className:"UberTile-background-image",style:l}),e.description&&i.a.createElement("div",{className:"UberTile-description",style:d},i.a.createElement("span",null,e.description)),i.a.createElement("div",{className:"UberTile-title",style:g},i.a.createElement("span",null,e.title))))}}]),o}(i.a.Component)),h=function(e){Object(l.a)(o,e);var t=Object(g.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={pageWidth:window.innerWidth},e}return Object(s.a)(o,[{key:"render",value:function(){var e=this,t=this.props.items,o=this.props.settings;window.onresize=function(){return e.setState({pageWidth:window.innerWidth})};var n=t.length<=3||window.innerWidth<450?1:t.length<=8||window.innerWidth<800?2:3,r=Math.ceil(t.length/n),a=100/r,c=100/n,s={gridTemplateColumns:"auto ".repeat(n)},l=n*r-t.length;return i.a.createElement("div",{className:"UberPage",style:s},t.map((function(e,r){var s=r%n+1,g=Math.floor(r/n+1),u=r+1===t.length,h=u?s+(l+1):s+1;return c=u?c*(l+1):c,i.a.createElement(d,{key:r,item:e,settings:o,height:a,width:c,gridColumnStart:s,gridColumnEnd:h,gridRow:g})})))}}]),o}(i.a.Component),p={items:[{link:"https://github.com/StegSchreck/AngularCV",description:"Angular based online-CV",background_logo:"AngularCV_white_transparent.svg"},{link:"https://github.com/StegSchreck/RatS",text_color:"#FFFFFF",description:"Python script for syncing movie ratings",background_logo:"RatS_inverted.png",background_color:"#6D08A6"},{link:"https://github.com/StegSchreck/uberpage",text_color:"#FFFFFF",description:"React based overview page for several links",background_logo:"UberPage_white.svg",background_color:"#4A86E8"},{link:"https://github.com/StegSchreck/is24-price-per-area",text_color:"#FFFFFF",description:"Chrome extension for displaying the price per m\xb2 on ImmobilienScout24 result lists",background_logo:"is24-price-per-area_white.svg",background_logo_size:"25%",background_color:"#FF7300"},{link:"https://github.com/StegSchreck/PP-Auxmoney-Parser",text_color:"#FFFFFF",description:"Python script for parsing the received interests from Auxmoney to a CSV to be imported to Portfolio Perfomance",background_logo:"PP-Auxmoney-Parser_white.svg",background_logo_size:"75%",background_color:"#275170"},{link:"https://github.com/StegSchreck/AWSreCalendar",description:"Python script for planning my stay at AWS re:Invent 2018",background_logo:"AWSreCalendar.png",background_logo_size:"contain",background_color:"#FF9900"},{link:"https://github.com/StegSchreck/RecodingAviation",description:"Angular app for hackathon reCoding Aviation 2017",background_logo:"ReCodingAviation.png",background_logo_size:"contain",background_color:"#E30613"},{link:"https://github.com/WiSchLabs/Kicktipper",description:"Calculating tips for football predictions games on Kicktipp",background_logo:"Kicktipper.png",background_color:"#999999"},{link:"https://github.com/WiSchLabs/ofm_helper",text_color:"#FFFFFF",description:"Django based helper tool for onlinefussballmanager.de",background_logo:"OFM_Helper_sw.png",background_color:"#239123"},{link:"https://github.com/StegSchreck",text_color:"#FFFFFF",description:"My profile page on GitHub",background_logo:"GitHub_white.svg",background_color:"#000000"}],settings:{default_link_target:"_blank",default_item:!1}};var b=function(){return(void 0===p.settings.default_item||p.settings.default_item)&&p.items.push({link:"https://github.com/StegSchreck/uberpage",title:"About this page",description:"This page was created using the UberPage project.",background_logo:"UberPage.svg",background_logo_size:"75%"}),i.a.createElement("div",{className:"App"},i.a.createElement(h,{items:p.items,settings:p.settings}))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(i.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.e0570191.chunk.js.map