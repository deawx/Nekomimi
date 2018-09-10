!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!j[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===g&&O()}(e,n),t&&t(e,n)};var n,i=!0,r="bbed237c7fa4a7b1c773",o=1e4,a={},c=[],s=[];function l(e){var t=$[e];if(!t)return H;var i=function(i){return t.hot.active?($[i]?-1===$[i].parents.indexOf(e)&&$[i].parents.push(e):(c=[e],n=i),-1===t.children.indexOf(i)&&t.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+e),c=[]),H(i)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var o in H)Object.prototype.hasOwnProperty.call(H,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(i,o,r(o));return i.e=function(e){return"ready"===p&&u("prepare"),g++,H.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(y[e]||k(e),0===g&&0===m&&O())}},i.t=function(e,t){return 1&t&&(e=i(e)),H.t(e,-2&t)},i}var d=[],p="idle";function u(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var f,h,v,m=0,g=0,y={},b={},j={};function w(e){return+e+""===e?+e:e}function S(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,u("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,o=H.p+""+r+".hot-update.json";i.open("GET",o,!0),i.timeout=e,i.send(null)}catch(e){return n(e)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===i.status)t();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(i.responseText)}catch(e){return void n(e)}t(e)}}})}(o).then(function(e){if(!e)return u("idle"),null;b={},y={},j=e.c,v=e.h,u("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});h={};return k(0),"prepare"===p&&0===g&&0===m&&O(),t})}function k(e){j[e]?(b[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+r+".hot-update.js",t.appendChild(n)}(e)):y[e]=!0}function O(){u("ready");var e=f;if(f=null,e)if(i)Promise.resolve().then(function(){return _(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function _(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,i,o,s,l;function d(e){for(var t=[e],n={},i=t.slice().map(function(e){return{chain:[e],id:e}});i.length>0;){var r=i.pop(),o=r.id,a=r.chain;if((s=$[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],d=$[l];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),f(n[l],[o])):(delete n[l],t.push(l),i.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];-1===e.indexOf(i)&&e.push(i)}}t=t||{};var m={},g=[],y={},b=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var k;l=w(S);var O=!1,_=!1,A=!1,x="";switch((k=h[S]?d(l):{type:"disposed",moduleId:S}).chain&&(x="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+k.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(k),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),A=!0;break;default:throw new Error("Unexception type "+k.type)}if(O)return u("abort"),Promise.reject(O);if(_)for(l in y[l]=h[l],f(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,l)&&(m[l]||(m[l]=[]),f(m[l],k.outdatedDependencies[l]));A&&(f(g,[k.moduleId]),y[l]=b)}var D,E=[];for(i=0;i<g.length;i++)l=g[i],$[l]&&$[l].hot._selfAccepted&&E.push({module:l,errorHandler:$[l].hot._selfAccepted});u("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete installedChunks[e]}(e)});for(var P,R,I=g.slice();I.length>0;)if(l=I.pop(),s=$[l]){var T={},M=s.hot._disposeHandlers;for(o=0;o<M.length;o++)(n=M[o])(T);for(a[l]=T,s.hot.active=!1,delete $[l],delete m[l],o=0;o<s.children.length;o++){var C=$[s.children[o]];C&&((D=C.parents.indexOf(l))>=0&&C.parents.splice(D,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=$[l]))for(R=m[l],o=0;o<R.length;o++)P=R[o],(D=s.children.indexOf(P))>=0&&s.children.splice(D,1);for(l in u("apply"),r=v,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var L=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=$[l])){R=m[l];var G=[];for(i=0;i<R.length;i++)if(P=R[i],n=s.hot._acceptedDependencies[P]){if(-1!==G.indexOf(n))continue;G.push(n)}for(i=0;i<G.length;i++){n=G[i];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[i],error:e}),t.ignoreErrored||L||(L=e)}}}for(i=0;i<E.length;i++){var B=E[i];l=B.module,c=[l];try{H(l)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||L||(L=e)}}return L?(u("fail"),Promise.reject(L)):(u("idle"),new Promise(function(e){e(g)}))}var $={};function H(t){if($[t])return $[t].exports;var i=$[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var i=0;i<e.length;i++)t._acceptedDependencies[e[i]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:_,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(s=c,c=[],s),children:[]};return e[t].call(i.exports,i,i.exports,l(t)),i.l=!0,i.exports}H.m=e,H.c=$,H.d=function(e,t,n){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(H.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)H.d(n,i,function(t){return e[t]}.bind(null,i));return n},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="",H.h=function(){return r},l(0)(H.s=0)}([function(e,t,n){"use strict";var i=n(1),r=n(2);$(document).ready(function(){(0,r.header)(),$("main").empty().append('<div class="container"></div>'),(0,r.leftSection)(),$("nav li:nth-child(1) a").addClass("active"),(0,r.rightSection)(),(0,r.rightSectionHome)(),$("section.right *").addClass("animated fadeIn"),(0,i.setHitokoto)(),$("a#Home").click(function(){$("section.right").empty(),$("nav li a").removeClass("active"),(0,r.rightSectionHome)(),$("a#Home").addClass("active"),$("section.right *").addClass("animated fadeIn")}),$("a#Archives").click(function(){$("section.right").empty(),$("nav li a").removeClass("active"),(0,r.rightSectionArchives)(),$("a#Archives").addClass("active"),$("section.right *").addClass("animated fadeIn")}),$("a#Game").click(function(){$("section.right").empty(),$("nav li a").removeClass("active"),(0,r.rightSectionGames)(),$("a#Game").addClass("active"),$("section.right *").addClass("animated fadeIn")}),$("a#About").click(function(){$("section.right").empty(),$("nav li a").removeClass("active"),(0,r.rightSectionAbout)(),$("a#About").addClass("active"),$("section.right *").addClass("animated fadeIn")})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setHitokoto=function(){$("main").append('<p id="hitokoto">获取中...</p>'),fetch("https://v1.hitokoto.cn").then(function(e){return e.json()}).then(function(e){document.getElementById("hitokoto").innerText=e.hitokoto}).catch(function(e){console.error(e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rightSectionAbout=t.rightSectionGames=t.rightSectionArchives=t.rightSectionHome=t.rightSection=t.leftSection=t.header=void 0;var i=n(3);t.header=function(){var e=Math.ceil(Math.random()*i.setHeader.background.length-1),t="url('"+i.setHeader.background[e]+"')";$("body").css("background-image",t)},t.leftSection=function(){var e='<div class="icon"><img src="'+i.setLeftSection.icon+'" alt="avatar"></div>';$("div.container").append('<section class="left"></section>'),$("section.left").append(e,"<nav></nav>");for(var t=0;t<i.setLeftSection.links.length;t++)$("nav").append('<li><a href="#" id="'+i.setLeftSection.links[t]+'">'+i.setLeftSection.links[t]+"</a></li>")},t.rightSection=function(){$("div.container").append('<section class="right"></section>')},t.rightSectionHome=function(){$("section.right").append('<header class="title"><h2>'+i.setRightSection.homeTitle+"</h2></header>").append('<div class="items"></div>');for(var e=0;e<i.setRightSectionHome.length;e++)$("div.items").append('<a href="'+i.setRightSectionHome[e].link+'"   target="_blank" id=""><i class="fa fa-3x fa-home"></i><p>'+i.setRightSectionHome[e].value+"</p></a>")},t.rightSectionArchives=function(){$("section.right").append('<header class="title"><h2>'+i.setRightSection.archivesTitle+"</h2></header>").append('<ul class="items archives"></ul>');for(var e=0;e<i.setRightSectionArchives.length;e++)$("ul.items").append('<li><a href="'+i.setRightSectionArchives[e].link+'"><span class="archives-text">'+i.setRightSectionArchives[e].value+'</span><span class="archives-date"> / '+i.setRightSectionArchives[e].date+"</span></a></li>")},t.rightSectionGames=function(){$("section.right").append('<header class="title"><h2>'+i.setRightSection.gamesTitle+"</h2></header>").append('<ul class="items archives"></ul>');for(var e=0;e<i.setRightSectionArchives.length;e++)$("ul.items").append('<li><span class="games-text">'+i.setRightSectionGames[e].name+'</span><span class="games-date"> / '+i.setRightSectionGames[e].value+"</span></li>")},t.rightSectionAbout=function(){$("section.right").append('<header class="title"><h2>'+i.setRightSection.about.title+"</h2></header>").append('<p class="about-text">'+i.setRightSection.about.text+"</p>")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setHeader={background:["https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi896lfbj31hc0u079s.jpg","https://ww2.sinaimg.cn/large/0060lm7Tly1fjfivy5o6zj31hc0u0wli.jpg","https://ww1.sinaimg.cn/large/0060lm7Tly1fjfivzadbwj31kw0w0k4s.jpg","https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi88qcdpj31hc0u00xy.jpg","https://ww2.sinaimg.cn/large/0060lm7Tly1fji5691db2j31hc0u0n5v.jpg","https://ww4.sinaimg.cn/large/0060lm7Tly1fji5688e62j31hc0u0wjg.jpg","https://ww4.sinaimg.cn/large/0060lm7Tly1fjfi87rzn0j31hc0u0djp.jpg","https://ws3.sinaimg.cn/large/007giGeVly1fuvsdqd6duj31hc0u0aea.jpg","https://ws2.sinaimg.cn/large/0065BpO8gy1fuhnokeop1j31hc0u0too.jpg","https://ws4.sinaimg.cn/large/007giGeVly1fuvsgpyiplj31hc0u0adj.jpg"],avatar:"avatar.png"},t.setLeftSection={icon:"./assets/avatar.jpg",links:["Home","Archives","Game","About"]},t.setRightSection={homeTitle:"Miya Neko House",archivesTitle:"Archives",gamesTitle:"Kacha",about:{title:"测试用标题",text:"热闹是她们的,我什么都没有"}},t.setRightSectionHome=[{icon:"fa fa-home",link:"https://miya.moe",value:"Blog"},{icon:"fa fa-home",link:"https://miya.moe",value:"Blog"},{icon:"fa fa-home",link:"https://miya.moe",value:"Blog"},{icon:"fa fa-home",link:"https://miya.moe",value:"Blog"},{icon:"fa fa-home",link:"https://miya.moe",value:"Blog"},{icon:"fa fa-home",link:"https://miya.moe",value:"Blog"}],t.setRightSectionArchives=[{link:"https://miya.moe",value:"测试项目",date:"8102/9/9"},{link:"https://miya.moe",value:"测试项目",date:"8102/9/9"},{link:"https://miya.moe",value:"测试项目",date:"8102/9/9"},{link:"https://miya.moe",value:"测试项目",date:"8102/9/9"},{link:"https://miya.moe",value:"测试项目",date:"8102/9/9"}],t.setRightSectionGames=[{name:"Lovelive",value:"123 456 789"},{name:"Lovelive",value:"123 456 789"},{name:"Lovelive",value:"123 456 789"},{name:"Lovelive",value:"123 456 789"},{name:"Lovelive",value:"123 456 789"},{name:"Lovelive",value:"123 456 789"}]}]);