(this.webpackJsonpuberpage=this.webpackJsonpuberpage||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(8),a=n.n(r),c=(n(14),n(15),n(2)),s=n(3),l=n(5),g=n(4),u=n(6),d=(n(16),n(1)),h=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.item,t=this.props.settings,n=this.props.height,o=this.props.width||100,r={width:"".concat(o,"vw"),minWidth:"".concat(o,"vw"),maxWidth:"".concat(o,"vw")},a={height:"".concat(n,"vh"),minHeight:"".concat(n,"vh"),maxHeight:"".concat(n,"vh")},c={gridColumnStart:this.props.gridColumnStart,gridColumnEnd:this.props.gridColumnEnd,gridRowStart:this.props.gridRow,gridRowEnd:this.props.gridRow+1},s=Object(d.a)({},r,{},a,{},c),l=Object(d.a)({},r,{},a,{},c),g=Object(d.a)({},r,{},a,{},c,{lineHeight:"".concat(n,"vh"),marginTop:"-".concat(n,"vh"),fontSize:"".concat(n/7,"vh")}),u=Object(d.a)({},r,{},a,{},c,{lineHeight:"".concat(n,"vh"),marginTop:"-".concat(n,"vh"),fontSize:"".concat(n/15,"vh")});if(e.background_color&&(l.backgroundColor=e.background_color),e.text_color&&(g.color=e.text_color),e.background_logo&&(l.backgroundImage="url(/img/".concat(e.background_logo,")"),l.backgroundSize=e.background_logo_size?e.background_logo_size:"50%"),e.background_picture){var h="",p="";e.background_logo&&(h="".concat(l.backgroundImage,", "),p="".concat(l.backgroundSize,", ")),l.backgroundImage="".concat(h,"url(/img/").concat(e.background_picture,")");var b=e.background_picture_size?e.background_picture_size:"cover";l.backgroundSize="".concat(p).concat(b)}return e.title&&(e.background_logo||e.background_picture)&&(l.opacity="0.2"),i.a.createElement("div",{className:"UberTile".concat(e.link?" withLink":""),style:s},i.a.createElement("a",Object.assign({className:"UberTile-link"},e.link?{href:e.link}:{},{target:t.default_link_target}),i.a.createElement("div",{className:"UberTile-background-image",style:l}),e.description&&i.a.createElement("div",{className:"UberTile-description",style:u},i.a.createElement("span",null,e.description)),i.a.createElement("div",{className:"UberTile-title",style:g},i.a.createElement("span",null,e.title))))}}]),t}(i.a.Component)),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={pageWidth:window.innerWidth},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items,n=this.props.settings;window.onresize=function(){return e.setState({pageWidth:window.innerWidth})};var o=t.length<=3||window.innerWidth<450?1:t.length<=8||window.innerWidth<800?2:3,r=Math.ceil(t.length/o),a=100/r,c=100/o,s={gridTemplateColumns:"auto ".repeat(o)},l=o*r-t.length;return i.a.createElement("div",{className:"UberPage",style:s},t.map((function(e,r){var s=r%o+1,g=Math.floor(r/o+1),u=r+1===t.length,d=u?s+(l+1):s+1;return c=u?c*(l+1):c,i.a.createElement(h,{key:r,item:e,settings:n,height:a,width:c,gridColumnStart:s,gridColumnEnd:d,gridRow:g})})))}}]),t}(i.a.Component),b={items:[{link:"https://github.com/StegSchreck",text_color:"#FFFFFF",description:"My profile page on GitHub",background_logo:"GitHub_white.svg",background_color:"#000000"},{link:"https://github.com/StegSchreck/AngularCV",description:"Angular based online-CV",background_logo:"AngularCV_white_transparent.svg"},{link:"https://github.com/StegSchreck/RatS",text_color:"#FFFFFF",description:"Python script for syncing movie ratings",background_logo:"RatS_inverted.png",background_color:"#6D08A6"},{link:"https://github.com/StegSchreck/uberpage",text_color:"#FFFFFF",description:"React based overview page for several links",background_logo:"UberPage_white.svg",background_color:"#4A86E8"},{link:"https://github.com/StegSchreck/AWSreCalendar",description:"Python script for planning my stay at AWS re:Invent 2018",background_logo:"AWSreCalendar.png",background_logo_size:"contain",background_color:"#FF9900"},{link:"https://github.com/StegSchreck/RecodingAviation",description:"Angular app for hackathon reCoding Aviation 2017",background_logo:"ReCodingAviation.png",background_logo_size:"contain",background_color:"#E30613"},{link:"https://github.com/WiSchLabs/Kicktipper",description:"Calculating tips for football predictions games on Kicktipp",background_logo:"Kicktipper.png",background_color:"#999999"},{link:"https://github.com/WiSchLabs/ofm_helper",text_color:"#FFFFFF",description:"Django based helper tool for onlinefussballmanager.de",background_logo:"OFM_Helper_sw.png",background_color:"#239123"}],settings:{default_link_target:"_blank",default_item:!1}};var k=function(){return(void 0===b.settings.default_item||b.settings.default_item)&&b.items.push({link:"https://github.com/StegSchreck/uberpage",title:"About this page",description:"This page was created using the UberPage project.",background_logo:"UberPage.svg",background_logo_size:"75%"}),i.a.createElement("div",{className:"App"},i.a.createElement(p,{items:b.items,settings:b.settings}))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(i.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");m?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.18804807.chunk.js.map