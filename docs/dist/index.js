!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.AWN=n():t.AWN=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n);var r={labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:"",info:"",success:"",warning:"",alert:"",async:"","async-block":"",modal:"",confirm:"",general:{"<script>":"","<\/script>":""}},modal:{okLabel:"OK",cancelLabel:"Cancel",maxWidth:"500px"},messages:{async:"Please, wait...","async-block":"Loading"},handleReject:function(t){if("string"!=typeof t)throw Error("promise.reject() returning value should be a string, Given ".concat(i(t)," ").concat(t));return t},maxNotifications:10,animationDuration:300,asyncBlockMinDuration:500,position:"bottom-right",duration:5e3},a=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,function t(n,e){var o={};for(var r in n)e.hasOwnProperty(r)?"object"===i(n[r])?o[r]=t(n[r],e[r]):o[r]=e[r]:o[r]=n[r];return o}(r,n))}var n,e,a;return n=t,(e=[{key:"icon",value:function(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}},{key:"label",value:function(t){return this.labels[t]}},{key:"getSecs",value:function(t){return"".concat(this[t]/1e3,"s")}},{key:"applyReplacements",value:function(t,n){if(!t)return this.messages[n]||"";for(var e in this.replacements.general)t=t.replace(e,this.replacements.general[e]);if(this.replacements[n])for(var o in this.replacements[n])t=t.replace(o,this.replacements[n][o]);return t}}])&&o(n.prototype,e),a&&o(n,a),t}();var c={modal:"".concat("awn","-modal"),toast:"".concat("awn","-toast"),btn:"".concat("awn","-btn"),confirm:"".concat("awn","-confirm")},s={prefix:c.toast,klass:{label:"".concat(c.toast,"-label"),content:"".concat(c.toast,"-content"),icon:"".concat(c.toast,"-icon"),progressBar:"".concat(c.toast,"-progress-bar"),progressBarPause:"".concat(c.toast,"-progress-bar-paused")},ids:{container:"".concat(c.toast,"-container")}},l={prefix:c.modal,klass:{buttons:"".concat("awn","-buttons"),button:c.btn,successBtn:"".concat(c.btn,"-success"),cancelBtn:"".concat(c.btn,"-cancel"),title:"".concat(c.modal,"-title"),body:"".concat(c.modal,"-body"),content:"".concat(c.modal,"-content"),dotAnimation:"".concat(c.modal,"-loading-dots")},ids:{wrapper:"".concat(c.modal,"-wrapper"),confirmOk:"".concat(c.confirm,"-ok"),confirmCancel:"".concat(c.confirm,"-cancel")}},u={klass:{hiding:"".concat("awn","-hiding")},lib:"awn"};function f(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var p=function(){function t(n,e,o,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"div";!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.newNode=document.createElement(a),e&&(this.newNode.id=e),o&&(this.newNode.className=o),r&&(this.newNode.innerHTML=r),i&&(this.newNode.style.cssText=i),this.parent=n,this.options={}}var n,e,o;return n=t,(e=[{key:"fire",value:function(t){return t?t.replace(this.newNode,this.type):this.insert()}},{key:"beforeInsert",value:function(){}},{key:"insert",value:function(){this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert()}},{key:"replace",value:function(t,n){var e=this;if(this.getElement())return this.beforeDelete().then(function(){e.type=n,e.parent.replaceChild(t,e.el),e.el=document.getElementById(t.id),e.afterInsert()})}},{key:"afterInsert",value:function(){}},{key:"beforeDelete",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return new Promise(function(e,o){n.classList.add(u.klass.hiding),setTimeout(e,t.options.animationDuration||300)})}},{key:"delete",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(n)?this.beforeDelete(n).then(function(){return t.parent.removeChild(n)}):null}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return document.getElementById(t.id)}},{key:"addEvent",value:function(t,n){this.el.addEventListener(t,n)}},{key:"addClass",value:function(t){this.el.classList.add(t)}},{key:"removeClass",value:function(t){this.el.classList.remove(t)}}])&&f(n.prototype,e),o&&f(n,o),t}();function h(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=n,this.remaining=e,this.resume()}var n,e,o;return n=t,(e=[{key:"pause",value:function(){window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var t=this;this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout(function(){window.clearTimeout(t.timerId),t.callback()},this.remaining)}}])&&h(n.prototype,e),o&&h(n,o),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,n){return!n||"object"!==y(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,n){return(g=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var w=function(t){function n(t,e,o,i){var r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(r=v(this,b(n).call(this,i,"".concat(s.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(s.prefix," ").concat(s.prefix,"-").concat(e),"animation-duration: ".concat(o.getSecs("animationDuration"),";")))).options=o,r.type=e,r.setInnerHtml(t),r}var e,o,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}(n,p),e=n,(o=[{key:"setInnerHtml",value:function(t){t=this.options.applyReplacements(t,this.type);var n="";"async"!==this.type&&(n="<div class='".concat(s.klass.progressBar,"' style=\"animation-duration:").concat(this.options.getSecs("duration"),';"></div>')),this.newNode.innerHTML="\n    ".concat(n,"\n    ").concat(this.getLabel(),'\n    <div class="').concat(s.klass.content,'">').concat(t,'</div>\n    <span class="').concat(s.klass.icon,'">').concat(this.options.icon(this.type),"</span>\n    ")}},{key:"beforeInsert",value:function(){var t=this;if(this.parent.childElementCount>=this.options.maxNotifications){var n=Array.from(this.parent.getElementsByClassName(s.prefix));this.delete(n.find(function(n){return!t.isDeleted(n)}))}}},{key:"afterInsert",value:function(){var t=this;"async"!=this.type&&(this.timer=new d(function(){return t.delete()},this.options.duration),this.addEvent("click",function(){return t.delete()}),this.addEvent("mouseenter",function(){t.isDeleted()||(t.addClass(s.klass.progressBarPause),t.timer.pause())}),this.addEvent("mouseleave",function(){t.isDeleted()||(t.removeClass(s.klass.progressBarPause),t.timer.resume())}))}},{key:"isDeleted",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el).classList.contains(u.klass.hiding)}},{key:"getLabel",value:function(){return'<b class="'.concat(s.klass.label,'">').concat(this.options.label(this.type),"</b>")}}])&&m(e.prototype,o),i&&m(e,i),n}();function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,n){return(x=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var S=function(t){function n(t,e,o){var i;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(i=O(this,j(n).call(this,document.body,l.ids.wrapper,null,"animation-duration: ".concat(o.getSecs("animationDuration"),";")))).options=o,i.type=e,i.setInnerHtml(t),i.insert(),i}var e,o,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&x(t,n)}(n,p),e=n,(o=[{key:"setInnerHtml",value:function(t){var n=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":n="\n          ".concat(this.options.icon(this.type),"\n          <div class='").concat(l.klass.title,"'>\n            ").concat(this.options.label(this.type),'\n          </div>\n          <div class="').concat(l.klass.content,'">').concat(n,"</div>\n          <div class='").concat(l.klass.buttons,"'>\n            <button class='").concat(l.klass.button," ").concat(l.klass.successBtn,"' id='").concat(l.ids.confirmOk,"'>").concat(this.options.modal.okLabel,"</button>\n            <button class='").concat(l.klass.button," ").concat(l.klass.cancelBtn,"' id='").concat(l.ids.confirmCancel,"'>").concat(this.options.modal.cancelLabel,"</button>\n          </div>\n       ");break;case"async-block":n="".concat(n,'<div class="').concat(l.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='\n      <div class="'.concat(l.klass.body," ").concat(l.prefix,"-").concat(this.type,'" style="max-width: ').concat(this.options.modal.maxWidth,';">\n        ').concat(n,"\n      </div>\n     ")}},{key:"hideAsync",value:function(t){var n=this,e=Date.now()-t;return new Promise(function(t,o){e>=n.options.asyncBlockMinDuration?(n.delete(),t()):setTimeout(function(){n.delete(),t()},n.options.asyncBlockMinDuration-e)})}}])&&_(e.prototype,o),i&&_(e,i),n}();function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}e.d(n,"default",function(){return C});var C=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=new a(n)}var n,e,o;return n=t,(e=[{key:"_err",value:function(t){throw Error(t)}},{key:"tip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(t,"tip")}},{key:"info",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(t,"info")}},{key:"success",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(t,"success")}},{key:"warning",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(t,"warning")}},{key:"alert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(t,"alert")}},{key:"async",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'promise' parameter"),e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=this.notify(i,"async");return n.then(function(n){return t._runFunction(!0,e,n,r)},function(n){return Promise.reject(t._runFunction(!1,o,n,r))})}},{key:"notify",value:function(t,n,e){var o=new w(t,n,this.options,this._getContainer());return o.fire(e),o}},{key:"confirm",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter"),e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=new S(n,"confirm",this.options);i.addEvent("click",function(n){if("BUTTON"!==n.target.nodeName)return!1;switch(i.delete(),n.target.id){case l.ids.confirmOk:return t._runFunction(!0,e);case l.ids.confirmCancel:return t._runFunction(!0,o)}})}},{key:"asyncBlock",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'promise' parameter"),e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=new S(i,"async-block",this.options),a=Date.now();return n.then(function(n){return r.hideAsync(a).then(function(){return t._runFunction(!0,e,n)})},function(n){return r.hideAsync(a).then(function(){return Promise.reject(t._runFunction(!1,o,n))})})}},{key:"modal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._err("missing className parameter"),e=new S(t,n,this.options);e.addEvent("click",function(t){t.target.id===e.el.id&&e.delete()})}},{key:"_getContainer",value:function(){return this.container||(this.container=document.getElementById(s.ids.container)||this._createContainer()),this.container}},{key:"_createContainer",value:function(){var t=this.options.position.split("-"),n="top"===t[0]?"".concat(u.lib,"-top"):"";"left"===t[1]&&(n="".concat(n," ").concat(u.lib,"-left"));var e=new p(document.body,s.ids.container,n);return e.insert(),e.el}},{key:"_runFunction",value:function(t,n,e,o){switch(E(n)){case"function":return o&&o.delete(),n(e);case"string":return this.notify(n,t?"success":"alert",o),e}return t?o&&o.delete():this.notify(this.options.handleReject(e),"alert",o),e}}])&&P(n.prototype,e),o&&P(n,o),t}()}])});