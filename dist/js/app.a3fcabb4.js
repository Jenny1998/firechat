(function(e){function t(t){for(var a,c,s=t[0],o=t[1],l=t[2],p=0,b=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);i&&i(t);while(b.length)b.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},u=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var i=o;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={key:0,class:"view login"},u={class:"form-inner"},c=Object(a["d"])("h1",null,"Login to FireChat",-1),s=Object(a["d"])("label",{for:"username"},"Username",-1),o=Object(a["d"])("input",{type:"submit",value:"Login"},null,-1),l={key:1,class:"view chat"},i={class:"chat-box"},p={class:"message-inner"},b={class:"username"},f={class:"content"},d=Object(a["d"])("input",{type:"submit",value:"Send"},null,-1);function m(e,t,n,m,j,O){return""===m.state.username||null===m.state.username?(Object(a["f"])(),Object(a["c"])("div",r,[Object(a["d"])("form",{class:"login-form",onSubmit:t[2]||(t[2]=Object(a["m"])((function(){return m.Login&&m.Login.apply(m,arguments)}),["prevent"]))},[Object(a["d"])("div",u,[c,s,Object(a["l"])(Object(a["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return m.inputUsername=e}),placeholder:"Please enter your username..."},null,512),[[a["k"],m.inputUsername]]),o])],32)])):(Object(a["f"])(),Object(a["c"])("div",l,[Object(a["d"])("header",null,[Object(a["d"])("button",{class:"logout",onClick:t[3]||(t[3]=function(){return m.Logout&&m.Logout.apply(m,arguments)})},"Logout"),Object(a["d"])("h1",null,"Welcome, "+Object(a["j"])(m.state.username),1)]),Object(a["d"])("section",i,[(Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["i"])(m.state.messages,(function(e){return Object(a["f"])(),Object(a["c"])("div",{key:e.key,class:e.username==m.state.username?"message current-user":"message"},[Object(a["d"])("div",p,[Object(a["d"])("div",b,Object(a["j"])(e.username),1),Object(a["d"])("div",f,Object(a["j"])(e.content),1)])],2)})),128))]),Object(a["d"])("footer",null,[Object(a["d"])("form",{onSubmit:t[5]||(t[5]=Object(a["m"])((function(){return m.SendMessage&&m.SendMessage.apply(m,arguments)}),["prevent"]))},[Object(a["l"])(Object(a["d"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return m.inputMessage=e}),placeholder:"Write a message..."},null,512),[[a["k"],m.inputMessage]]),d],32)])]))}n("4160"),n("b64b"),n("159b");var j=n("260b"),O=(n("66ce"),{apiKey:"AIzaSyBKPZQJNhvVp0ch3aRDvVWig9P0J8IVyGU",authDomain:"turtlechat-14427.firebaseapp.com",databaseURL:"https://turtlechat-14427-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"turtlechat-14427",storageBucket:"turtlechat-14427.appspot.com",messagingSenderId:"166594621661",appId:"1:166594621661:web:c38f682bb8f490c664ab34"}),v=j["a"].initializeApp(O),g=v,h={setup:function(){var e=Object(a["h"])(""),t=Object(a["h"])(""),n=Object(a["g"])({username:"",messages:[]}),r=function(){""==e.value&&null==e.value||(n.username=e.value,e.value="")},u=function(){n.username=""},c=function(){var e=g.database().ref("messages");if(""!==t.value&&null!==t.value){var a={username:n.username,content:t.value};e.push(a),t.value=""}};return Object(a["e"])((function(){var e=g.database().ref("messages");e.on("value",(function(e){var t=e.val(),a=[];Object.keys(t).forEach((function(e){a.push({id:e,username:t[e].username,content:t[e].content})})),n.messages=a}))})),{inputUsername:e,Login:r,state:n,inputMessage:t,SendMessage:c,Logout:u}}};n("6aee");h.render=m;var y=h;Object(a["b"])(y).mount("#app")},"6aee":function(e,t,n){"use strict";n("eb0f")},eb0f:function(e,t,n){}});
//# sourceMappingURL=app.a3fcabb4.js.map