!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AWN=e():t.AWN=e()}(window,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const s={maxNotifications:10,animationDuration:300,position:"bottom-right",labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required",confirmOk:"OK",confirmCancel:"Cancel"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:null,info:null,success:null,warning:null,alert:null,async:null,"async-block":null,modal:null,confirm:null,general:{"<script>":"","<\/script>":""}},messages:{tip:"",info:"",success:"Action has been succeeded",warning:"",alert:"Action has been failed",confirm:"This action can't be undone. Continue?",async:"Please, wait...","async-block":"Loading"},formatError(t){if(t.response){if(!t.response.data)return"500 API Server Error";if(t.response.data.errors)return t.response.data.errors.map(t=>t.detail).join("<br>");if(t.response.statusText)return"".concat(t.response.status," ").concat(t.response.statusText,": ").concat(t.response.data)}return t.message?t.message:t},durations:{global:5e3,success:null,info:null,tip:null,warning:null,alert:null},minDurations:{async:1e3,"async-block":1e3}};class i{constructor(t={},e=s){Object.assign(this,this.defaultsDeep(e,t))}icon(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}label(t){return this.labels[t]}duration(t){let e=this.durations[t];return null===e?this.durations.global:e}toSecs(t){return"".concat(t/1e3,"s")}applyReplacements(t,e){if(!t)return this.messages[e]||"";for(const n of["general",e])if(this.replacements[n])for(const e in this.replacements[n])t=t.replace(e,this.replacements[n][e]);return t}override(t){return t?new i(t,this):this}defaultsDeep(t,e){let n={};for(const s in t)e.hasOwnProperty(s)?n[s]="object"==typeof t[s]&&null!==t[s]?this.defaultsDeep(t[s],e[s]):e[s]:n[s]=t[s];return n}}const o={popup:"".concat("awn","-popup"),toast:"".concat("awn","-toast"),btn:"".concat("awn","-btn"),confirm:"".concat("awn","-confirm")},a={prefix:o.toast,klass:{label:"".concat(o.toast,"-label"),content:"".concat(o.toast,"-content"),icon:"".concat(o.toast,"-icon"),progressBar:"".concat(o.toast,"-progress-bar"),progressBarPause:"".concat(o.toast,"-progress-bar-paused")},ids:{container:"".concat(o.toast,"-container")}},r={prefix:o.popup,klass:{buttons:"".concat("awn","-buttons"),button:o.btn,successBtn:"".concat(o.btn,"-success"),cancelBtn:"".concat(o.btn,"-cancel"),title:"".concat(o.popup,"-title"),body:"".concat(o.popup,"-body"),content:"".concat(o.popup,"-content"),dotAnimation:"".concat(o.popup,"-loading-dots")},ids:{wrapper:"".concat(o.popup,"-wrapper"),confirmOk:"".concat(o.confirm,"-ok"),confirmCancel:"".concat(o.confirm,"-cancel")}},c={klass:{hiding:"".concat("awn","-hiding")},lib:"awn"};var l=class{constructor(t,e,n,s,i){this.newNode=document.createElement("div"),e&&(this.newNode.id=e),n&&(this.newNode.className=n),s&&(this.newNode.style.cssText=s),this.parent=t,this.options=i}beforeInsert(){}afterInsert(){}insert(){return this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert(),this}replace(t){if(this.getElement())return this.beforeDelete().then(()=>(this.updateType(t.type),this.parent.replaceChild(t.newNode,this.el),this.el=this.getElement(t.newNode),this.afterInsert(),this))}beforeDelete(t=this.el){let e=0;return this.start&&(e=this.options.minDurations[this.type]+this.start-Date.now())<0&&(e=0),new Promise(n=>{setTimeout(()=>{t.classList.add(c.klass.hiding),setTimeout(n,this.options.animationDuration)},e)})}delete(t=this.el){return this.getElement(t)?this.beforeDelete(t).then(()=>t.remove()):null}getElement(t=this.el){return document.getElementById(t.id)}addEvent(t,e){this.el.addEventListener(t,e)}toggleClass(t){this.el.classList.toggle(t)}updateType(t){this.type=t,this.duration=this.options.duration(this.type)}},u=class extends l{constructor(t,e,n,s){super(s,"".concat(a.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(a.prefix," ").concat(a.prefix,"-").concat(e),"animation-duration: ".concat(n.toSecs(n.animationDuration),";"),n),this.updateType(e),this.setInnerHtml(t)}setInnerHtml(t){"alert"===this.type&&(t=this.options.formatError(t)),t=this.options.applyReplacements(t,this.type),this.newNode.innerHTML="".concat(this.progressBar).concat(this.label,'<div class="').concat(a.klass.content,'">').concat(t,'</div><span class="').concat(a.klass.icon,'">').concat(this.options.icon(this.type),"</span>")}beforeInsert(){if(this.parent.childElementCount>=this.options.maxNotifications){let t=Array.from(this.parent.getElementsByClassName(a.prefix));this.delete(t.find(t=>!this.isDeleted(t)))}}afterInsert(){if("async"==this.type)return this.start=Date.now();if(this.addEvent("click",()=>this.delete()),!(this.duration<=0)){this.timer=new class{constructor(t,e){this.callback=t,this.remaining=e,this.resume()}pause(){this.paused=!0,window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}resume(){this.paused=!1,this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout(()=>{window.clearTimeout(this.timerId),this.callback()},this.remaining)}toggle(){this.paused?this.resume():this.pause()}}(()=>this.delete(),this.duration);for(const t of["mouseenter","mouseleave"])this.addEvent(t,()=>{this.isDeleted()||(this.toggleClass(a.klass.progressBarPause),this.timer.toggle())})}}isDeleted(t=this.el){return t.classList.contains(c.klass.hiding)}get progressBar(){return this.duration<=0||"async"===this.type?"":"<div class='".concat(a.klass.progressBar,"' style=\"animation-duration:").concat(this.options.toSecs(this.duration),';"></div>')}get label(){return'<b class="'.concat(a.klass.label,'">').concat(this.options.label(this.type),"</b>")}},d=class extends l{constructor(t,e="modal",n,s,i){let o="animation-duration: ".concat(n.toSecs(n.animationDuration),";");super(document.body,r.ids.wrapper,null,o,n),this[r.ids.confirmOk]=s,this[r.ids.confirmCancel]=i,this.className=e,["confirm","async-block","modal"].includes(e)||(e="modal"),this.updateType(e),this.setInnerHtml(t),this.insert()}setInnerHtml(t){let e=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":e="".concat(this.options.icon(this.type),"<div class='").concat(r.klass.title,"'>").concat(this.options.label(this.type),'</div><div class="').concat(r.klass.content,'">').concat(e,"</div><div class='").concat(r.klass.buttons,"'><button class='").concat(r.klass.button," ").concat(r.klass.successBtn,"'id='").concat(r.ids.confirmOk,"'>").concat(this.options.labels.confirmOk,"</button><button class='").concat(r.klass.button," ").concat(r.klass.cancelBtn,"'id='").concat(r.ids.confirmCancel,"'>").concat(this.options.labels.confirmCancel,"</button></div>");break;case"async-block":e="".concat(e,'<div class="').concat(r.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='<div class="'.concat(r.klass.body," ").concat(r.prefix,"-").concat(this.className,'">').concat(e,"</div>")}afterInsert(){switch(this.type){case"async-block":this.start=Date.now();break;case"confirm":this.addEvent("click",t=>{if("BUTTON"!==t.target.nodeName)return!1;this.delete(),this[t.target.id]&&this[t.target.id]()});break;default:this.addEvent("click",t=>{t.target.id===this.newNode.id&&this.delete()})}}};n.d(e,"default",function(){return p});class p{constructor(t={}){this.options=new i(t)}tip(t,e){return this._addToast(t,"tip",e).el}info(t,e){return this._addToast(t,"info",e).el}success(t,e){return this._addToast(t,"success",e).el}warning(t,e){return this._addToast(t,"warning",e).el}alert(t,e){return this._addToast(t,"alert",e).el}async(t,e,n,s,i){let o=this._addToast(s,"async",i);return this._afterAsync(t,e,n,i,o)}confirm(t,e,n,s){return this._addPopup(t,"confirm",s,e,n)}asyncBlock(t,e,n,s,i){let o=this._addPopup(s,"async-block",i);return this._afterAsync(t,e,n,i,o)}modal(t,e,n){return this._addPopup(t,e,n)}_addPopup(t,e,n,s,i){return new d(t,e,this.options.override(n),s,i)}_addToast(t,e,n,s){n=this.options.override(n);let i=new u(t,e,n,this.container);if(s){if(s instanceof d)return s.delete().then(()=>i.insert());return s.replace(i)}return i.insert()}_afterAsync(t,e,n,s,i){return t.then(this._responseHandler(e,"success",s,i),this._responseHandler(n,"alert",s,i))}_responseHandler(t,e,n,s){return i=>{switch(typeof t){case"undefined":case"string":let o="alert"===e?t||i:t;this._addToast(o,e,n,s);break;default:s.delete().then(()=>{t&&t(i)})}return"alert"===e?Promise.reject(i):i}}_createContainer(){return new l(document.body,a.ids.container,this.options.position).insert().el}get container(){return document.getElementById(a.ids.container)||this._createContainer()}}}])});