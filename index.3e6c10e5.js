!function(){function t(){switch(q.getState().forEach(function(t,e){t.forEach(function(t,n){var r="field-cell";r+=t>=2?" field-cell--".concat(t):"",R[e][n].innerText=t||"",R[e][n].className=r})}),C.innerText=q.getScore(),q.getStatus().toUpperCase()){case"WIN":n("WIN");break;case"LOSE":n("LOSE")}}function e(t){j.classList.toggle("start"),j.classList.toggle("restart"),j.innerText=t.toUpperCase()}function n(t){var e;switch(t.toUpperCase()){case"WIN":e=".message-win";break;case"LOSE":e=".message-lose";break;case"START":e=".message-start";break;default:throw Error("unkown type")}O.querySelector(":not(.hidden)").classList.toggle("hidden"),O.querySelector(e).classList.toggle("hidden")}function r(t,e,n){if(!e.has(t))throw TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function a(t,e){var n=r(t,e,"get");return n.get?n.get.call(t):n.value}function i(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function o(t,e,n){i(t,e),e.set(t,n)}function s(t,e,n){var a=r(t,e,"set");return!function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=n}}(t,a,n),n}function l(t,e,n){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return n}function u(t,e){i(t,e),e.add(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function f(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=new WeakMap,d=new WeakMap,m=new WeakMap,p=new WeakMap,y=new WeakMap,g=new WeakSet,w=new WeakSet,S=new WeakSet,k=new WeakSet,b=new WeakSet,A=new WeakSet,E=function(){var t,e;function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.deafultInitialState,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),u(this,g),u(this,w),u(this,S),u(this,k),u(this,b),u(this,A),o(this,v,{writable:!0,value:"idle"}),o(this,d,{writable:!0,value:0}),o(this,m,{writable:!0,value:!1}),o(this,p,{writable:!0,value:void 0}),o(this,y,{writable:!0,value:void 0}),s(this,y,t.map(function(t){return f(t)})),l(this,g,L).call(this),s(this,m,e)}return t=[{key:"moveLeft",value:function(){var t=this,e=!1;return("playing"===a(this,v)||a(this,m))&&(a(this,p).forEach(function(n){for(var r=new Set,i=[],o=0;o<n.length;o++){if(0===n[o]){i.push(o);continue}var l=o;i.length&&(l=i.shift(),i.push(o),n[l]=n[o],n[o]=0,e=!0);var u=l-1;u>=0&&n[u]===n[l]&&!r.has(u)&&(r.add(u),n[u]*=2,n[l]=0,i.unshift(l),s(t,d,a(t,d)+n[u]),e=!0,n[u]>=2048&&s(t,v,"win"))}}),e&&l(this,S,T).call(this),a(this,m)||l(this,w,W).call(this)||s(this,v,"lose")),e}},{key:"moveRight",value:function(){l(this,b,I).call(this);var t=this.moveLeft();return l(this,b,I).call(this),t}},{key:"moveUp",value:function(){l(this,A,U).call(this);var t=this.moveLeft();return l(this,A,U).call(this),t}},{key:"moveDown",value:function(){l(this,A,U).call(this);var t=this.moveRight();return l(this,A,U).call(this),t}},{key:"getScore",value:function(){return a(this,d)}},{key:"getState",value:function(){return a(this,p).map(function(t){return f(t)})}},{key:"getStatus",value:function(){return a(this,v)}},{key:"start",value:function(){l(this,S,T).call(this),l(this,S,T).call(this),s(this,v,"playing")}},{key:"restart",value:function(){l(this,g,L).call(this),s(this,d,0),s(this,v,"idle")}}],e=[{key:"deafultSize",get:function(){return 4}},{key:"deafultInitialState",get:function(){return Array(n.deafultSize).fill(null).map(function(t){return Array(n.deafultSize).fill(0)})}}],t&&c(n.prototype,t),e&&c(n,e),n}();function L(){s(this,p,a(this,y).map(function(t){return f(t)}))}function W(){var t=new E(this.getState(),!0);return t.moveLeft()||t.moveRight()||t.moveUp()||t.moveDown()}function T(){var t=l(this,k,M).call(this);if(!t.length)return!1;var e=Math.floor(Math.random()*t.length),n=t[e],r=n.x,i=n.y;return a(this,p)[i][r]=Math.random()>.1?2:4,!0}function M(){var t=[];return a(this,p).forEach(function(e,n){e.forEach(function(e,r){0===e&&t.push({x:r,y:n})})}),t}function I(){a(this,p).forEach(function(t){return t.reverse()})}function U(){var t=this;s(this,p,a(this,p).map(function(e,n){for(var r=[],i=0;i<e.length;i++)r.push(a(t,p)[i][n]);return r}))}var q=new E,R=Array.from(document.querySelector(".game-field").querySelectorAll(".field-row")).map(function(t){return Array.from(t.children)}),C=document.querySelector(".game-score"),O=document.querySelector(".message-container"),j=document.querySelector(".button.start");document.addEventListener("keydown",function(e){if("playing"===q.getStatus()){switch(e.key){case"ArrowDown":q.moveDown();break;case"ArrowLeft":q.moveLeft();break;case"ArrowRight":q.moveRight();break;case"ArrowUp":q.moveUp()}t()}}),j.addEventListener("click",function(){switch(q.getStatus()){case"idle":q.start(),e("restart");break;case"playing":case"win":case"lose":q.restart(),e("start"),n("START")}t()})}();
//# sourceMappingURL=index.3e6c10e5.js.map
