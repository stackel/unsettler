(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(54)},35:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),o=(a(35),a(7)),s=a(8),l=a(10),u=a(9),m=a(11),d=a(27),h=a(6),f=a(17),p=a(26),b=a.n(p),w=[{id:"293490234",title:"Systemutvecklare s\xf6kes",employer:"Arbetsf\xf6rmedlingen",municipality:"Stockholm"},{id:"912912389",title:"Kock till en restaurang",employer:"Arbetsf\xf6rmedlingen",municipality:"J\xf6nk\xf6ping"},{id:"9812389234",title:"Klippa gr\xe4s",employer:"Arbetsf\xf6rmedlingen",municipality:"J\xf6nk\xf6ping"}],v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onThrowout=function(e){console.log(e);var t=a.state.stack,n=Object(f.a)(t),r=n.map(function(e){return e.id}).indexOf(e.target.id);-1!==r&&(n.splice(r,1),a.setState({stack:n}),a.setState(function(a){return{thrownCards:[].concat(Object(f.a)(a.thrownCards),[{vacancy:t[r],direction:e.throwDirection}])}}))},a.state={stack:w,thrownCards:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.stack,a=e.thrownCards;return r.a.createElement("div",null,r.a.createElement(b.a,{className:"relative center",throwout:this.onThrowout,config:{throwOutConfidence:function(e,t,a){var n=Math.min(Math.abs(e)/a.offsetWidth+.7,1),r=Math.min(Math.abs(t)/a.offsetHeight+.7,1);return Math.max(n,r)}}},t.map(function(e){return r.a.createElement("div",{id:e.id,className:"absolute w-100 ba bg-white pv6 ph4",key:e.id},r.a.createElement("span",{className:"db f3 sans-serif"},e.title),r.a.createElement("span",{className:"db f4 sans-serif"},e.employer),r.a.createElement("span",{className:"db f4 dark-gray sans-serif"},e.municipality))})),r.a.createElement("div",{className:"absolute bottom-0"},a.map(function(e){return r.a.createElement("div",{key:e.vacancy.id},r.a.createElement("span",{className:"f5 sans-serif"},e.vacancy.title),r.a.createElement("span",{className:"f5 sans-serif"},"  You Swiped ".concat(e.direction.toString().slice(-6))))})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pa3 mt4 mw6 center"},r.a.createElement(v,{onThrowout:this.onThrowout}))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/unsettler"},r.a.createElement(h.a,{path:"/",exact:!0,component:y}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.2cdfbfe5.chunk.js.map