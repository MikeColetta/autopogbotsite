(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),c=(a(63),a(46)),i=a(47),u=a(55),s=a(48),m=a(56),p=(a(64),a(27)),f=a(49),d=a.n(f),E=(a(85),function(e){var t=e.url;return r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(d.a,{className:"react-player",url:t,width:"100%",height:"100%",playsinline:!0,controls:!0}))});a(86);var y=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"featuredPlays"},"Featured Plays of the Game!"),r.a.createElement(p.a,{interval:null,indicators:!1},r.a.createElement(p.a.Item,null,r.a.createElement(E,{url:"https://vimeo.com/559811687"})),r.a.createElement(p.a.Item,null,r.a.createElement(E,{url:"https://vimeo.com/559851440"})),r.a.createElement(p.a.Item,null,r.a.createElement(E,{url:"https://vimeo.com/559302602"}))))},h=a(104),g=a(102),v=a(53),b=a(108);a(105),a(103),a(87);var w=a(28),N=a(106),O=a(57);a(89);var j=function(e){return r.a.createElement(b.a,{className:"playCard p-2"},r.a.createElement("h3",null,e.player," ",e.playType," as ",e.champ),r.a.createElement(E,{url:e.url}))},P=a(39);P.a.initializeApp({apiKey:"AIzaSyD5_l0VRPSzUjoD-rO9FPNDu4J_wvkwloA",authDomain:"autopogbot.firebaseapp.com",projectId:"autopogbot",storageBucket:"autopogbotsite.appspot.com",messagingSenderId:"390083144786",appId:"1:390083144786:web:5798ac76f20511d1fc438b",measurementId:"G-HLZ3R2E6F8"});var k=P.a,A=a(40),I=(a(95),function(e){for(var t=e.playsPerPage,a=e.totalPlays,n=e.paginate,o=[],l=1;l<=Math.ceil(a/t);l++)o.push(l);return r.a.createElement(A.a,{className:"paginationStyle flex-wrap"},o.map(function(e){return r.a.createElement(A.a.Item,{onClick:function(){return n(e)}},e)}))});a(96),a(97);var S=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(w.a)(l,2),i=c[0],u=(c[1],Object(n.useState)(1)),s=Object(w.a)(u,2),m=s[0],p=s[1],f=Object(n.useState)(5),d=Object(w.a)(f,1)[0];k.database().ref("sickplays");var E=m*d,y=E-d,h=a.slice(y,E);return Object(n.useEffect)(function(){k.database().ref("sickplays").orderByChild("Time").on("value",function(e){var t=[];console.log(t),e.forEach(function(e){t.push(e.val()),t.reverse()}),o(t)})},[]),i?r.a.createElement("h1",null,"Loading..."):r.a.createElement(b.a,{className:"categoryCard"},r.a.createElement("h2",{style:{color:"white"}},"Recent Plays"),r.a.createElement(N.a,{className:"playList"},h.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O.a,{className:"listItems"},r.a.createElement(j,{champ:e.ChampionPlayed,url:e.VideoURL,player:e.Summoner,playType:e.PlayType})))})),r.a.createElement(I,{playsPerPage:d,totalPlays:a.length,paginate:function(e){return p(e)}}))},C=a(54),B=a.n(C);a(98);var G=function(){return r.a.createElement(h.a,{className:"aboutContainer"},r.a.createElement(g.a,{className:"inputRow"},r.a.createElement(v.a,null,r.a.createElement(g.a,null,r.a.createElement("h2",{style:{margin:"auto",color:"white"}},"About AutoPOGBot")),r.a.createElement(g.a,null,r.a.createElement(b.a,{style:{margin:"auto"},className:"pt-3 inputCard"},r.a.createElement("img",{src:B.a,className:"App-logo m-auto",alt:"logo"}),r.a.createElement("br",null),r.a.createElement("p",null,"AutoPOGBot was created by Tyler Ostby to capture all of your Triple, Quadra, and Pentakills. Once you set AutoPOGBot to monitor your game, they'll tune in and push any of your multikills up to Vimeo."))))))};a(99);var L=function(){return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(G,{className:"mt-5"})),r.a.createElement(g.a,{className:"mt-5"},r.a.createElement(v.a,{className:"col-12"},r.a.createElement(S,null))))},R=a(107),T=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R.a,{className:"customNavbar"},r.a.createElement("h1",{className:"m-auto",style:{fontSize:"72px"}},"AutoPOGBot"),r.a.createElement("br",null)),r.a.createElement(y,{className:"mb-5"}),r.a.createElement("br",null),r.a.createElement(L,null))}}]),t}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/autopogbotsite",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/autopogbotsite","/service-worker.js");x?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):z(e)})}}()},54:function(e,t,a){e.exports=a.p+"static/media/tyler-circle.df7286c5.png"},58:function(e,t,a){e.exports=a(100)},63:function(e,t,a){},64:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.2959c65f.chunk.js.map