var DISQUS=function(f){var l=f.DISQUS||{};l.AssertionError=function(h){this.message=h};l.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};l.assert=function(h,c,e){if(!h)if(e)f.console&&f.console.log("DISQUS assertion failed: "+c);else throw new l.AssertionError(c);};var c=[];l.define=function(h,k){typeof h==="function"&&(k=h,h="");for(var e=h.split("."),i=e.shift(),b=l,a=(k||function(){return{}}).call({overwrites:function(a){a.__overwrites__=!0;
return a}},f);i;)b=b[i]?b[i]:b[i]={},i=e.shift();for(var d in a)a.hasOwnProperty(d)&&(!a.__overwrites__&&b[d]!==null&&l.assert(!b.hasOwnProperty(d),"Unsafe attempt to redefine existing module: "+d,!0),b[d]=a[d],c.push(function(a,b){return function(){delete a[b]}}(b,d)));return b};l.use=function(c){return l.define(c)};l.cleanup=function(){for(var h=0;h<c.length;h++)c[h]()};return l}(window);
DISQUS.define(function(f,l){var c=f.DISQUS,h=f.document,k=h.getElementsByTagName("head")[0]||h.body,e={running:!1,timer:null,queue:[]},i=0;c.getUid=function(b){var a=++i+"";return b?b+a:a};c.defer=function(b,a){function d(){var a=e.queue;if(a.length===0)e.running=!1,clearInterval(e.timer);for(var b=0,d;d=a[b];b++)d[0]()&&(a.splice(b--,1),d[1]())}e.queue.push([b,a]);d();if(!e.running)e.running=!0,e.timer=setInterval(d,100)};c.each=function(b,a){var d=b.length,g=Array.prototype.forEach;if(isNaN(d))for(var m in b)b.hasOwnProperty(m)&&
a(b[m],m,b);else if(g)g.call(b,a);else for(g=0;g<d;g++)a(b[g],g,b)};c.extend=function(b){c.each(Array.prototype.slice.call(arguments,1),function(a){for(var d in a)b[d]=a[d]});return b};c.serializeArgs=function(b){var a=[];c.each(b,function(b,g){b!==l&&a.push(g+(b!==null?"="+encodeURIComponent(b):""))});return a.join("&")};c.isString=function(b){return Object.prototype.toString.call(b)==="[object String]"};c.serialize=function(b,a,d){a&&(b+=~b.indexOf("?")?b.charAt(b.length-1)=="&"?"":"&":"?",b+=c.serializeArgs(a));
if(d)return a={},a[(new Date).getTime()]=null,c.serialize(b,a);a=b.length;return b.charAt(a-1)=="&"?b.slice(0,a-1):b};c.require=function(b,a,d,g,m){function e(a){if(a.type=="load"||/^(complete|loaded)$/.test(a.target.readyState))g&&g(),p&&clearTimeout(p),c.bean.remove(a.target,l,e)}var i=h.createElement("script"),l=i.addEventListener?"load":"readystatechange",p=null;i.src=c.serialize(b,a,d);i.async=!0;i.charset="UTF-8";(g||m)&&c.bean.add(i,l,e);m&&(p=setTimeout(function(){m()},2E4));k.appendChild(i);
return c};c.requireStylesheet=function(b,a,d){var g=h.createElement("link");g.rel="stylesheet";g.type="text/css";g.href=c.serialize(b,a,d);k.appendChild(g);return c};c.requireSet=function(b,a,d){var g=b.length;c.each(b,function(b){c.require(b,{},a,function(){--g===0&&d()})})};c.injectCss=function(b){var a=h.createElement("style");a.setAttribute("type","text/css");b=b.replace(/\}/g,"}\n");f.location.href.match(/^https/)&&(b=b.replace(/http:\/\//g,"https://"));a.styleSheet?a.styleSheet.cssText=b:a.appendChild(h.createTextNode(b));
k.appendChild(a)};c.isString=function(b){return Object.prototype.toString.call(b)==="[object String]"}});
DISQUS.define("JSON",function(){function f(a){return a<10?"0"+a:a}function l(a){i.lastIndex=0;return i.test(a)?'"'+a.replace(i,function(a){var b=d[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(d,m){var j,o,e,h,i=b,f,n=m[d];n&&typeof n==="object"&&typeof n.toJSON==="function"&&!k&&(n=n.toJSON(d));typeof g==="function"&&(n=g.call(m,d,n));switch(typeof n){case "string":return l(n);case "number":return isFinite(n)?String(n):"null";case "boolean":case "null":return String(n);
case "object":if(!n)return"null";b+=a;f=[];if(Object.prototype.toString.apply(n)==="[object Array]"){h=n.length;for(j=0;j<h;j+=1)f[j]=c(j,n)||"null";e=f.length===0?"[]":b?"[\n"+b+f.join(",\n"+b)+"\n"+i+"]":"["+f.join(",")+"]";b=i;return e}if(g&&typeof g==="object"){h=g.length;for(j=0;j<h;j+=1)o=g[j],typeof o==="string"&&(e=c(o,n))&&f.push(l(o)+(b?": ":":")+e)}else for(o in n)Object.hasOwnProperty.call(n,o)&&(e=c(o,n))&&f.push(l(o)+(b?": ":":")+e);e=f.length===0?"{}":b?"{\n"+b+f.join(",\n"+b)+"\n"+
i+"}":"{"+f.join(",")+"}";b=i;return e}}var h={},k=!1;if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b,a,d={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},g;h.stringify=function(d,e,j){var m;a=b="";if(typeof j==="number")for(m=0;m<j;m+=1)a+=" ";else typeof j==="string"&&(a=j);if((g=e)&&typeof e!=="function"&&(typeof e!=="object"||typeof e.length!=="number"))throw Error("JSON.stringify");return c("",{"":d})};h.parse=function(a,b){function d(a,
g){var e,m,c=a[g];if(c&&typeof c==="object")for(e in c)Object.hasOwnProperty.call(c,e)&&(m=d(c,e),m!==void 0?c[e]=m:delete c[e]);return b.call(a,g,c)}var g,a=String(a);e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return g=eval("("+a+")"),
typeof b==="function"?d({"":g},""):g;throw new SyntaxError("JSON.parse");};var m={a:[1,2,3]},n,q;if(Object.toJSON&&Object.toJSON(m).replace(/\s/g,"")==='{"a":[1,2,3]}')n=Object.toJSON;typeof String.prototype.evalJSON==="function"&&(m='{"a":[1,2,3]}'.evalJSON(),m.a&&m.a.length===3&&m.a[2]===3&&(q=function(a){return a.evalJSON()}));(function(){var a=[1,2,3];typeof a.toJSON==="function"&&(a=a.toJSON(),k=!(a&&a.length===3&&a[2]===3))})();if(k||!n||!q)return{stringify:h.stringify,parse:h.parse};return{stringify:n,
parse:q}});
DISQUS.define(function(){function f(a){for(i=1;a=l.shift();)a()}var l=[],c,h=document,k=h.documentElement,e=k.doScroll,i=/^loade|c/.test(h.readyState),b;h.addEventListener&&h.addEventListener("DOMContentLoaded",c=function(){h.removeEventListener("DOMContentLoaded",c,!1);f()},!1);e&&h.attachEvent("onreadystatechange",c=function(){/^c/.test(h.readyState)&&(h.detachEvent("onreadystatechange",c),f())});b=e?function(a){self!=top?i?a():l.push(a):function(){try{k.doScroll("left")}catch(d){return setTimeout(function(){b(a)},50)}a()}()}:
function(a){i?a():l.push(a)};return{domready:b}});
DISQUS.define("Events",function(){var f=function(b){var a=!1,d;return function(){if(a)return d;a=!0;d=b.apply(this,arguments);b=null;return d}},l=Object.keys||function(b){if(b!==Object(b))throw new TypeError("Invalid object");var a=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(a[a.length]=d);return a},c=[].slice,h={on:function(b,a,d){if(!e(this,"on",b,[a,d])||!a)return this;this._events=this._events||{};(this._events[b]||(this._events[b]=[])).push({callback:a,context:d,ctx:d||this});
return this},once:function(b,a,d){if(!e(this,"once",b,[a,d])||!a)return this;var g=this,m=f(function(){g.off(b,m);a.apply(this,arguments)});m._callback=a;return this.on(b,m,d)},off:function(b,a,d){var g,m,c,h,i,p,j,o;if(!this._events||!e(this,"off",b,[a,d]))return this;if(!b&&!a&&!d)return this._events={},this;h=b?[b]:l(this._events);i=0;for(p=h.length;i<p;i++)if(b=h[i],c=this._events[b]){this._events[b]=g=[];if(a||d){j=0;for(o=c.length;j<o;j++)m=c[j],(a&&a!==m.callback&&a!==m.callback._callback||
d&&d!==m.context)&&g.push(m)}g.length||delete this._events[b]}return this},trigger:function(b){if(!this._events)return this;var a=c.call(arguments,1);if(!e(this,"trigger",b,a))return this;var d=this._events[b],g=this._events.all;d&&i(d,a);g&&i(g,arguments);return this},stopListening:function(b,a,d){var g=this._listeners;if(!g)return this;var e=!a&&!d;typeof a==="object"&&(d=this);b&&((g={})[b._listenerId]=b);for(var c in g)g[c].off(a,d,this),e&&delete this._listeners[c];return this}},k=/\s+/,e=function(b,
a,d,g){if(!d)return!0;if(typeof d==="object"){for(var e in d)b[a].apply(b,[e,d[e]].concat(g));return!1}if(k.test(d)){d=d.split(k);e=0;for(var c=d.length;e<c;e++)b[a].apply(b,[d[e]].concat(g));return!1}return!0},i=function(b,a){var d,g=-1,e=b.length,c=a[0],h=a[1],i=a[2];switch(a.length){case 0:for(;++g<e;)(d=b[g]).callback.call(d.ctx);break;case 1:for(;++g<e;)(d=b[g]).callback.call(d.ctx,c);break;case 2:for(;++g<e;)(d=b[g]).callback.call(d.ctx,c,h);break;case 3:for(;++g<e;)(d=b[g]).callback.call(d.ctx,
c,h,i);break;default:for(;++g<e;)(d=b[g]).callback.apply(d.ctx,a)}};DISQUS.each({listenTo:"on",listenToOnce:"once"},function(b,a){h[a]=function(a,g,e){var c=this._listeners||(this._listeners={}),h=a._listenerId||(a._listenerId=DISQUS.getUid("l"));c[h]=a;typeof g==="object"&&(e=this);a[b](g,e,this);return this}});h.bind=h.on;h.unbind=h.off;return h});
DISQUS.define(function(f){function l(){throw Error(Array.prototype.join.call(arguments," "));}function c(a,b,d){if(a.addEventListener)a.addEventListener(b,d,!1);else if(a.attachEvent)a.attachEvent("on"+b,d);else throw Error("No event support.");}function h(a,b,d){d||(d=0);var g,e,c,h,m=0,i=function(){m=new Date;c=null;h=a.apply(g,e)};return function(){var f=new Date,k=b-(f-m);g=this;e=arguments;k<=0?(clearTimeout(c),c=null,m=f,h=a.apply(g,e)):c||(c=setTimeout(i,k+d));return h}}var k=f.document,e=
DISQUS.use("JSON"),i={},b={};if(!(DISQUS.version&&DISQUS.version()==="2")){c(f,"message",function(a){var d,g;for(g in b)if(Object.prototype.hasOwnProperty.call(b,g)&&a.origin==b[g].origin){d=!0;break}if(d)switch(d=e.parse(a.data),(g=b[d.sender])||l("Message from our server but with invalid sender UID:",d.sender),d.scope){case "host":g.trigger(d.name,d.data);break;case "global":DISQUS.trigger(d.name,d.data);break;default:l("Message",d.scope,"not supported. Sender:",a.origin)}},!1);c(f,"hashchange",
function(){DISQUS.trigger("window.hashchange",{hash:f.location.hash})},!1);c(f,"resize",function(){DISQUS.trigger("window.resize")},!1);c(f,"scroll",h(function(){DISQUS.trigger("window.scroll")},250,50));c(k,"click",function(){DISQUS.trigger("window.click")});var a=function(){this.uid=DISQUS.getUid();i[this.uid]=this};DISQUS.extend(a.prototype,DISQUS.Events);a.prototype.destroy=function(){this.stopListening();delete i[this.uid]};DISQUS.extend(a,{listByKey:function(){var a={},b;for(b in i)Object.prototype.hasOwnProperty.call(i,
b)&&(a[b]=i[b]);return a},list:function(){var a=[],b;for(b in i)Object.prototype.hasOwnProperty.call(i,b)&&a.push(i[b]);return a},get:function(a){if(Object.prototype.hasOwnProperty.call(i,a))return i[a];return null}});var d=function(a){a=a||{};this.state=d.INIT;this.uid=a.uid||DISQUS.getUid();this.origin=a.origin;this.target=a.target;this.window=null;b[this.uid]=this;this.on("ready",function(){this.state=d.READY},this);this.on("die",function(){this.state=d.KILLED},this)};DISQUS.extend(d,{INIT:0,READY:1,
KILLED:2});DISQUS.extend(d.prototype,DISQUS.Events);d.prototype.sendMessage=function(a,b){var d=function(a,b,d){return function(){DISQUS.postMessage(d.window,a,b)}}(e.stringify({scope:"client",name:a,data:b}),this.origin,this);if(this.isReady())d();else this.on("ready",d)};d.prototype.hide=function(){};d.prototype.show=function(){};d.prototype.url=function(){return DISQUS.serialize(this.target,{disqus_version:"1372380899"})+"#"+this.uid};d.prototype.destroy=function(){this.state=d.KILLED;this.off()};
d.prototype.isReady=function(){return this.state===d.READY};d.prototype.isKilled=function(){return this.state===d.KILLED};var g=function(a){d.call(this,a);this.windowName=a.windowName};DISQUS.extend(g.prototype,d.prototype);g.prototype.load=function(){this.window=f.open("",this.windowName||"_blank");this.window.location=this.url()};g.prototype.isKilled=function(){return d.prototype.isKilled()||this.window.closed};var m=function(a){d.call(this,a);this.styles=a.styles||{};this.role=a.role||"application";
this.container=a.container;this.elem=null};DISQUS.extend(m.prototype,d.prototype);m.prototype.load=function(){var a=this.elem=k.createElement("iframe");a.setAttribute("id","dsq"+this.uid);a.setAttribute("data-disqus-uid",this.uid);a.setAttribute("allowTransparency","true");a.setAttribute("frameBorder","0");this.role&&a.setAttribute("role",this.role);DISQUS.extend(a.style,this.styles)};m.prototype.getOffset=function(){for(var a=this.elem,b=a,d=0,g=0;b;)d+=b.offsetLeft,g+=b.offsetTop,b=b.offsetParent;
return{top:g,left:d,height:a.offsetHeight,width:a.offsetWidth}};m.prototype.hide=function(){this.elem.style.display="none"};m.prototype.show=function(){this.elem.style.display=""};m.prototype.destroy=function(){d.prototype.destroy.call(this);this.elem&&this.elem.parentNode&&this.elem.parentNode.removeChild(this.elem)};var n=function(a){m.call(this,a);this.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden",height:"0"},a.styles||{})};DISQUS.extend(n.prototype,m.prototype);n.prototype.load=
function(a){var b=this;m.prototype.load.call(b);var d=b.elem;d.setAttribute("width","100%");d.setAttribute("src",this.url());c(d,"load",function(){b.window=d.contentWindow;a&&a()});(DISQUS.isString(this.container)?k.getElementById(this.container)||k.body:this.container).appendChild(d)};var q=function(a){m.call(this,a);this.contents=a.contents;this.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden"},a.styles||{})};DISQUS.extend(q.prototype,m.prototype);q.prototype.load=function(){m.prototype.load.call(this);
var a=this.elem;a.setAttribute("scrolling","no");(DISQUS.isString(this.container)?k.getElementById(this.container)||k.body:this.container).appendChild(a);this.window=a.contentWindow;try{this.window.document.open()}catch(b){a.src="javascript:var d=document.open();d.domain='"+k.domain+"';void(0);"}this.document=this.window.document;this.document.write(this.contents);this.document.close();if(a=this.document.body){var d=this.elem.style;d.height=d.minHeight=d.maxHeight=a.offsetHeight+"px"}};q.prototype.show=
function(){this.elem.style.display="block"};q.prototype.click=function(a){c(this.document.body,"click",function(b){a(b)})};var r=DISQUS.extend({},DISQUS.Events);return{log:function(a){var b=k.getElementById("messages");if(b){var d=k.createElement("p");d.innerHTML=a;b.appendChild(d)}},version:function(){return"2"},on:r.on,off:r.off,trigger:r.trigger,throttle:h,postMessage:function(a,b,d){a.postMessage(b,d)},WindowBase:d,Popup:g,Iframe:m,Channel:n,Sandbox:q,App:a}}});
DISQUS.define("next.host.utils",function(f,l){function c(a){if(!a||a.substring(a.length-8)!=="embed.js")return null;for(var b=[/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/(https?:)?\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i,/(https?:)?\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i],g,e=b.length,c=0;c<e;c++)if((g=a.match(b[c]))&&g.length&&g.length===4)return g[3];return null}function h(a,d,g){var e,g=g||d;if(a===b)return"";f.getComputedStyle?
e=b.defaultView.getComputedStyle(a,null).getPropertyValue(d):a.currentStyle&&(e=a.currentStyle[d]?a.currentStyle[d]:a.currentStyle[g]);return e=="transparent"||e===""||e=="rgba(0, 0, 0, 0)"?h(a.parentNode,d,g):e||null}function k(a){function b(a){a=Number(a).toString(16);return a.length==1?"0"+a:a}if(a.substr(0,1)==="#")return a;var g=/.*?rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(a);if(!g||g.length!==4)return"";var a=b(g[1]),e=b(g[2]),g=b(g[3]);return"#"+a+e+g}function e(a,d,g,e){DISQUS.isString(d)&&(d=
b.createElement(d));var c=null;d.style.visibility="hidden";a.appendChild(d);c=h(d,g,e);a.removeChild(d);return c}function i(a){return a.toLowerCase().replace(/^\s+|\s+$/g,"").replace(/['"]/g,"")}var b=f.document;return{getShortnameFromUrl:c,getForum:function(a,b){var g=a.getElementsByTagName("script"),e=g.length,h,b=b||c;for(e-=1;e>=0;e--)if(h=g[e],h=h.getAttribute?h.getAttribute("src"):h.src,h=b(h),h!==null)return h.toLowerCase();return null},isSSL:function(a){return a.toLowerCase()==="https:"},
guessThreadTitle:function(){for(var a=b.getElementsByTagName("h1"),d=b.title,g=d.length,e=d,c=0.6,h=0;h<a.length;h++)(function(a){var a=a.textContent||a.innerText,b;if(!(a===null||a===l)){b=0;for(var h=Array(d.length),i=0;i<=d.length;i++){h[i]=Array(a.length);for(var f=0;f<=a.length;f++)h[i][f]=0}for(i=0;i<d.length;i++)for(f=0;f<a.length;f++)d[i]==a[f]&&(h[i+1][f+1]=h[i][f]+1,h[i+1][f+1]>b&&(b=h[i+1][f+1]));b/=g;b>c&&(c=b,e=a)}})(a[h]);return e},getContrastYIQ:function(a){a.match("^rgb")&&(a=k(a).substr(1));
var b=parseInt(a.substr(0,2),16),g=parseInt(a.substr(2,2),16),a=parseInt(a.substr(4,2),16);return(b*299+g*587+a*114)/1E3},colorToHex:k,getElementStyle:e,getAnchorColor:function(a){var d=b.createElement("a");d.href=+new Date;return e(a,d,"color")},normalizeFontValue:i,isSerif:function(a){for(var a=e(a,"span","font-family","fontFamily").split(","),b={courier:1,times:1,"times new roman":1,georgia:1,palatino:1,serif:1},g,c=0;c<a.length;c++)if(g=i(a[c]),b.hasOwnProperty(g))return!0;return!1},getBrowserSupport:function(a){if(a.postMessage){if(!a.JSON)return a.navigator.appName===
"Microsoft Internet Explorer"?2:1}else return 1;return 0},getPermalink:function(){var a=f.location.hash;return(a=a&&a.match(/comment\-([0-9]+)/))&&a[1]}}});
DISQUS.define("next.host.switches",function(){function f(f){DISQUS.App.call(this);this.switches={};this.settings=f;this.url=f.useSSL?"https://securecdn.disqus.com/1372380899/build/next-switches/client_ssl.html":"http://mediacdn.disqus.com/1372380899/build/next-switches/client.html";this.origin=f.useSSL?"https://securecdn.disqus.com":"http://mediacdn.disqus.com"}f.prototype=DISQUS.extend({init:function(){this.frame=new DISQUS.Channel({target:this.url,origin:this.origin,container:this.settings.container,
styles:{display:"none"}});this.frame.load()},fetch:function(f){var c=this,f=f||{},h=f.success;delete f.success;this.frame.on("switches.received",function(f){c.switches=f;DISQUS.trigger("switches.changed",f);h&&h(f)});this.frame.sendMessage("fetch",f)},enabled:function(f){return this.switches[f]?this.switches[f]:!1}},DISQUS.App.prototype);return{Switches:function(l){return new f(l)}}});
DISQUS.define("next.host.profile",function(f){var l=function(c){DISQUS.App.call(this);c=c||{};c.fullscreen=c.fullscreen!==!1;this.frame=null;this.settings=c;c.useSSL?(this.url="https://disqus.com/embed/profile/",this.origin="https://disqus.com"):(this.url="http://disqus.com/embed/profile/",this.origin="http://disqus.com");this.url=DISQUS.serialize(this.url,{f:c.forum,language:c.language})};DISQUS.extend(l.prototype,DISQUS.App.prototype);l.prototype.init=function(){var c=this.settings,h={uid:this.uid,
target:this.url,origin:this.origin},k=c.fullscreen?{height:"100%",position:"fixed",top:0,left:0,zIndex:999999}:{height:"100%",padding:0},e=this.frame=c.windowName?new DISQUS.Popup(DISQUS.extend(h,{windowName:c.windowName})):new DISQUS.Channel(DISQUS.extend(h,{container:c.container||document.body,styles:k,role:"dialog"}));e.once("ready",function(){e.sendMessage("init",{referrer:f.location.href,fullscreen:c.fullscreen,switches:c.switches&&c.switches.switches,forumId:c.forumId,threadId:c.threadId});
this.trigger("loading.init")},this);e.on("close",function(){e.hide();f.focus()},this);e.on("renderProfile",function(e){this.trigger("renderProfile",e)},this);e.load();this.trigger("loading.start")};l.prototype.destroy=function(){this.frame&&this.frame.destroy()};l.prototype.show=function(c){DISQUS.isString(c)&&(c={username:c});var h=this.frame;if(!h.isReady())return void h.once("ready",function(){this.show(c)},this);h.sendMessage("showProfile",c);h.show()};return{Profile:function(c){return new l(c)}}});
DISQUS.define("next.host.backplane",function(){var f;try{localStorage.setItem("disqus.localStorageTest","disqus"),localStorage.removeItem("disqus.localStorageTest"),f=!0}catch(l){f=!1}var c=function(c){this.frame=c;this.credentials="unset";var k=this;typeof Backplane==="function"&&typeof Backplane.version==="string"&&typeof Backplane.subscribe==="function"&&f&&Backplane(function(){k.initialize()})};DISQUS.extend(c.prototype,{frameEvents:{invalidate:"clearCredentials"},initialize:function(){var c=
this;DISQUS.each(this.frameEvents,function(f,e){c.frame.on("backplane."+e,typeof f==="function"?f:c[f],c)});this.credentialsFromLocalStorage()&&this.frame.sendMessage("login",{backplane:this.credentials});this.subscribe()},subscribe:function(){var c=this;Backplane.subscribe(function(f){var e=c.handlers[f.type];e&&e.call(c,f)})},handlers:{"identity/login":function(c){var f=c.messageURL,c=c.channel;this.credentials!=="unset"&&this.credentials!==null&&this.credentials.channel===c&&this.credentials.messageUrl===
f||(this.setCredentials(c,f),this.frame.sendMessage("login",{backplane:this.getCredentials()}))}},credentialsFromLocalStorage:function(){var c=localStorage.getItem("disqus.backplane.channel"),f=localStorage.getItem("disqus.backplane.messageUrl");this.setCredentials(c,f,!0);return this.credentials},setCredentials:function(c,f,e){if(!c||!f)return void this.clearCredentials();e||(localStorage.setItem("disqus.backplane.channel",c),localStorage.setItem("disqus.backplane.messageUrl",f));this.credentials=
{channel:c,messageUrl:f}},getCredentials:function(){if(this.credentials!=="unset")return this.credentials;return this.credentialsFromLocalStorage()},clearCredentials:function(c){c=c||{};this.credentials=null;localStorage.removeItem("disqus.backplane.channel");localStorage.removeItem("disqus.backplane.messageUrl");if(c.redirectUrl)window.location=c.redirectUrl}});return{BackplaneIntegration:c}});
DISQUS.define("next.host.lounge",function(f,l){function c(b){for(var a=DISQUS.App.list(),d,c=0,f=a.length;c<f;c++)d=a[c],d instanceof e&&b(d)}var h=DISQUS.use("next.host.profile"),k=f.document,e=function(b){DISQUS.App.call(this);this.settings=b;this.container=b.container;this.indicators={north:null,south:null};this.frame=null;this.wasNearViewport=this.wasInViewport=!1};e.EVENTS_MAPPING={onReady:"loading.done",onNewComment:"posts.create",onPaginate:"posts.paginate",onIdentify:"session.identify"};var i=
e.prototype;DISQUS.extend(i,DISQUS.App.prototype);i.init=function(){function b(a,b,d){j.on("affiliateLink",function(c){var e=DISQUS.vglnk.$;if(!e)return void j.sendMessage("affiliateLink");e.request(a+"/click",{format:"jsonp",out:c.url,key:b,loc:j.target,subId:d},{fn:function(a){return function(b){var d={token:a};if(b)d.url=b;j.sendMessage("affiliateLink",d)}}(c.token),timeout:DISQUS.vglnk.opt("click_timeout")})})}var a=this,d=a.container,c=a.settings,e="http://disqus.com/embed/comments/",i="http://disqus.com";
c.useSSL&&(e="https://disqus.com/embed/comments/",i="https://disqus.com");var k=c.unsupported,r=!!c.windowName,p={f:c.forum,t_i:c.identifier,t_u:c.url||f.location.href,t_s:c.slug,t_t:c.title||c.documentTitle,t_e:c.title,t_d:c.documentTitle,t_c:c.category,s_o:c.sortOrder,c:c.useConman||l};if(k)p.n_s=c.unsupported;var d={origin:i,target:DISQUS.serialize(e,p),container:d,uid:a.uid,role:"complementary",windowName:c.windowName},j;r&&!k?j=a.frame=new DISQUS.Popup(d):(j=this.frame=new DISQUS.Channel(d),
k||a.addLoadingAnim());k||a.bindCallbacks();r||(a.listenTo(DISQUS,"window.resize",function(){j.sendMessage("window.resize")}),a.listenTo(DISQUS,"window.scroll",a.scrollListener),a.listenTo(DISQUS,"window.click",function(){j.sendMessage("window.click")}),j.on("resize",function(b){if(a.rendered)j.elem.style.height=b.height+"px",j.sendMessage("embed.resized"),a.scrollListener()}),j.on("scrollTo",function(b){var d=j.getOffset(),d=b.relative==="window"?b.top:d.top+b.top,c=a.getWindowYCoords();(b.force||
!(d>c.pageYOffset&&d<c.pageYOffset+c.innerHeight))&&f.scrollTo(0,d)}),j.on("realtime.init",function(b){var d=["north","south"],c,e;e=j.getOffset().width+"px";for(var g={width:e,minWidth:e,maxWidth:e,position:"fixed"},f={north:{top:"0"},south:{bottom:"0"}},h=0;h<d.length;h++)e=d[h],c=new DISQUS.Sandbox({uid:"-indicator-"+e,container:a.container,contents:b[e].contents,styles:DISQUS.extend(f[e],g),role:"alert"}),c.load(),c.hide(),function(a){c.click(function(){j.sendMessage("realtime.click",a)})}(e),
a.indicators[e]=c}),j.on("realtime.showNorth",function(b){var d=a.indicators.north;d.document.getElementById("message").innerHTML=b;d.show()}),j.on("realtime.hideNorth",function(){a.indicators.north.hide()}),j.on("realtime.showSouth",function(b){var d=a.indicators.south;d.document.getElementById("message").innerHTML=b;d.show()}),j.on("realtime.hideSouth",function(){a.indicators.south.hide()}),j.on("fail",function(b){a.removeLoadingAnim();j.elem.style.height="75px";a.trigger("fail",b)}),j.on("mainViewRendered",
function(b){a.rendered=!0;a.removeLoadingAnim();j.trigger("resize",b);j.sendMessage("embed.rendered");a.trigger("loading.done")}));a.listenTo(DISQUS,"window.hashchange",function(a){j.sendMessage("window.hashchange",a.hash)});a.listenTo(DISQUS,"switches.changed",function(a){j.sendMessage("switches.changed",a)});j.on("ready",function(){var b={permalink:c.permalink,anchorColor:c.anchorColor,referrer:f.location.href,colorScheme:c.colorScheme,language:c.language,typeface:c.typeface,remoteAuthS3:c.remoteAuthS3,
apiKey:c.apiKey,sso:c.sso,parentWindowHash:f.location.hash};if(j.elem&&f.navigator.userAgent.match(/(iPad|iPhone|iPod)/))b.width=j.elem.offsetWidth;j.sendMessage("init",b);a.trigger("loading.init")});j.on("reload",function(){f.location.reload()});j.on("reset",function(){DISQUS.reset({reload:!0})});j.on("session.identify",function(b){a.trigger("session.identify",b)});j.on("posts.paginate",function(){a.trigger("posts.paginate")});j.on("posts.create",function(b){a.trigger("posts.create",{id:b.id,text:b.raw_message})});
j.on("profile.show",function(b){if(!a.profile||a.profile.frame.isKilled())a.profile=h.Profile({windowName:b.windowName,language:b.language,useSSL:c.useSSL,forum:c.forum,forumId:b.forumId,threadId:b.threadId,switches:c.switches}),a.profile.init();a.profile.show({id:b.userId})});j.once("loadLinkAffiliator",function(a){if(!f.vglnk_self&&!f.vglnk&&!function(){for(var a in f)if(a.indexOf("skimlinks")===0||a.indexOf("skimwords")===0)return!0;return!1}()){var d=a.apiUrl,c=a.key,e=String(a.id);if(!(a.clientUrl==
null||d==null||c==null||a.id==null))DISQUS.define("vglnk",function(){return{api_url:d,key:c,sub_id:e}}),f.vglnk_self="DISQUS.vglnk",DISQUS.require(a.clientUrl),DISQUS.defer(function(){return DISQUS.vglnk.opt},function(){j.sendMessage("affiliationOptions",{timeout:DISQUS.vglnk.opt("click_timeout")})}),b(d,c,e)}});j.once("loadBackplane",function(){a.backplane=new DISQUS.next.host.backplane.BackplaneIntegration(j)});j.load(function(){c.unsupported?(j.elem.style.height="500px",j.elem.setAttribute("scrolling",
"yes"),j.elem.setAttribute("horizontalscrolling","no"),j.elem.setAttribute("verticalscrolling","yes"),j.show()):r||(j.elem.setAttribute("scrolling","no"),j.elem.setAttribute("horizontalscrolling","no"),j.elem.setAttribute("verticalscrolling","no"))});a.trigger("loading.start")};i.bindCallbacks=function(){var b=this,a=e.EVENTS_MAPPING,d=b.settings.callbacks;d&&DISQUS.each(d,function(d,c){a[c]&&DISQUS.each(d,function(d){b.on(a[c],d)})})};i.addLoadingAnim=function(){var b,a,d,c=this.container,e=k.createElement("style");
e.type="text/css";e.styleSheet?e.styleSheet.cssText=".disqus-loader{animation:disqus-embed-spinner .7s infinite linear;-webkit-animation:disqus-embed-spinner .7s infinite linear}@keyframes disqus-embed-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes disqus-embed-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}":e.appendChild(k.createTextNode(".disqus-loader{animation:disqus-embed-spinner .7s infinite linear;-webkit-animation:disqus-embed-spinner .7s infinite linear}@keyframes disqus-embed-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes disqus-embed-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}"));
b=k.createElement("div");a=k.createElement("div");d=k.createElement("div");a.appendChild(e);a.appendChild(d);b.appendChild(a);b.style.overflow="hidden";a.style.height=a.style.width="54px";a.style.margin="0 auto";a.style.overflow="hidden";d.style.height=d.style.width="29px";d.style.margin="11px 14px";d.className="disqus-loader";d.style.backgroundImage=a.style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABmCAMAAACA210sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAlhQTFRFMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtMzY63+TtWDj2BwAAAMh0Uk5TAAABAQICAwMEBAUFBgYHBwgICQkKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFhcXGBgZGRoaGxscHB0dHh4fHyAgISEjIyQkJSUmJigoKSkqKisrLCwtLS4uLy8wMDExMjIzMzQ0NTU2Njc3ODg5OTo6Ozs8PD09Pj4/P0BAQUFCQkNDRERFRUZGR0dISElJS0tMTE1NTk5PT1BQUVFSUlNTVFRVVVZWV1dYWFlZWlpbW1xcXV1eXl9fYGBhYWJiY2NkZGVlZmaMInkiAAAFVklEQVRo3u2Yf0hbVxTHP/flmYYQxFoXghMJzkpXQmszCd0ma7eKKyKuSOlKGaV0RaRzsIHIGDK2MqSsXVvKcKWIG6V0ItI5Z1tXZBsiIkWciC0iYsMIIbisC1mWhpDG/RFjfpvr4O2vnH+Se+/J575z3z3n5n4F2Uy12aotpUY1HFp1OecXo+S00vo6q9kYXF2ZnfLG+0QWYH2jw5jcEZi6P50dW33qoBL//sl4TqbpyPHSzB97bo2GMjr1bcfUjcbcWXIwlZb24uxBenvH0sM+b0s0om2PAJPBC+hS3KxfvrUtx8IZD+z9LZDcUfL1zqTWj98DtLVP/JP2nIc74+vonplfWQ2EDcZya22deb3T1zOZtOq9saf0jMy6vSarywdU3tAvdIRTmGdOxz5Dd8cWkqeyNzXG1i16ZWijs+MEQPjaUCTh+EU9DFxNZna2AhAZvPUkPXDLqebY++3rj7/xfhXwfTyX5LX/EhA9tZxYz/bjACx0/vQ0YzEDk9O27QD2vx/Gej6oBiKdcylub24DsWN8g9ncAcDAp39mfUV/jJp3Aux//Big9CMF+Go8xcfveR14/k6cuatHB0Qvf5MrZ55NiH0Ajl/8wKEDgOezNOeVV8tAca8z9Zd3AFy4nTsLmRX7AP2Ld9bgxAvA4Ey6S9HLwNP11HrHCnBjmM2sbwTA1gJUAWQgmQKwxpiWkwAz19ncriwBtJugDMCZ4eAOAeYY84QeCPZE8zBDn0eA4qOgAvgzPQKASQEobQbo85DPlgcBjhkIA2SpNSVAQAFoMADeYfLbzSBQ8hpPACwZw2YV8CoATQCDIQmmbwTgMCsA9oxhO4BTASw1QGQMGRsBqDPNADSr6aPNADNKnD7rlWI6lwG1bioCVDSlDb5iB6ITClAL8AA5mwbY9eTXjaRPWs1ugEmvEt/AjySZjwCs9EcAQ3tK8bpUAkT7UYBKgGVJphOgAucAwI2kgfq+KoChJVRQTYA/IMl0AZTB9Vob9+cBSn1RxeJorAVg6RqoYIwngJRFQgYwQqSr19ILUH6LkCl+Iru6QglmEGkosdT0nXWsApzVo4+PLXZ5Y6NBWAdLmbrOxXcfoO6NxHk81BsmiVksjTSkRKV0bBAnvl3amDXiLwZTsV+OWQmQyA/9UF2V2Rj0OmcnvMmROPcAVXNbYLoS5W90NMNFAX4HsEnGvjt7NU5nLgA4JJn78yedEj9XasukkDXVQGQ2L9O9DKhNUswmgJlAXiZjAEdUCWRJC8Bd8jP9AOGIBPOkAfBNSjBbAW7LrOZRgIFQfubuXUBI4uwwdKuAL9/sCnAE4GeJPIrV9WuB/MziBgCJk7i9BWB+VKLKHDYAiwuo5RUW9/QmyJMAgXNRCWYrgP5qhVmBQHeus87Y1QhAjztvPDocbwNsLzcJQN+oPsy6p2wXXgLg4j0kmO9Zk9ui9tBfzrV0r/L3P9wOwPXvJHacKLudkT/O4fHkW4Jib2pYv3dclPlPhTh9Jl6nPW7vQcP698W5RddqMGQyVpbb7fHqEjg3KVUTxLA56Ha7XB63OwKV3ZuU0QfnPXLlUOxxpcTZ0laS4755dVz2yMq4Fxtbj2WppO6bd8P8Zyao9Q0OU8q9Z3p8Koq8CZF1h9lqaixlRn0w5HWtLCytsSVTc8y0rahIpxNFz3S6Ip1Y26J2ITTQLoQG2oXQQLsQGmgXQgPtQmigXQgNtAuhgXYhNNAuhAbahShoFwXtoqBdFLSLgnZR0C4K2kVBuyhoFwXtIofOIDTQLoQG2sVzGmgX72qgXfyggXaxVwPtQmigXYj/S7tQU7WLrQCBfwFnft8xK3413wAAAABJRU5ErkJggg==)";
d.style.backgroundRepeat=a.style.backgroundRepeat="no-repeat";d.style.backgroundPosition="-54px 0";if(this.settings.colorScheme==="dark")a.style.backgroundPosition="0 -51px",d.style.backgroundPosition="-54px -51px";c.appendChild(b);this.loadingElem=b;this.timeout=setTimeout(function(){if(b)(new Image).src=DISQUS.serialize("//juggler.services.disqus.com/stat.gif",{event:"slow_embed"}),a.insertAdjacentHTML("afterend",'<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>')},
15E3)};i.removeLoadingAnim=function(){var b=this.loadingElem,a=this.container;if(this.timeout)f.clearTimeout(this.timeout),this.timeout=null;b&&b.parentNode===a&&a.removeChild(b)};i.destroy=function(){var b=this.indicators;this.off();this.removeLoadingAnim();this.frame&&this.frame.destroy();this.profile&&this.profile.destroy();if(b.north)b.north.destroy(),b.north=null;if(b.south)b.south.destroy(),b.south=null;DISQUS.App.prototype.destroy.call(this)};i.getWindowYCoords=function(){if(typeof f.pageYOffset==
"number")this.getWindowScroll=function(){return f.pageYOffset},this.getWindowHeight=function(){return f.innerHeight};else{var b=f.document,b=b.documentElement.clientHeight||b.documentElement.clientWidth?b.documentElement:b.body;this.getWindowScroll=function(){return b.scrollTop};this.getWindowHeight=function(){return b.clientHeight}}this.getWindowYCoords=function(){return{pageYOffset:this.getWindowScroll(),innerHeight:this.getWindowHeight()}};return this.getWindowYCoords()};i.scrollListener=function(){var b=
this.frame,a=b.getOffset(),d=a.top,c=d+a.height,e=this.getWindowYCoords(),f=e.pageYOffset,e=e.innerHeight,h=f+e,i=!1,k=!1;d<=h+e&&(k=(i=c>=f)&&d<=h);i&&(b.sendMessage("window.scroll",{frameOffset:a,pageOffset:f,height:e}),this.wasNearViewport||b.sendMessage("window.nearViewport"));this.wasNearViewport=i;if(k!==this.wasInViewport)b.sendMessage(k?"window.inViewport":"window.scrollOffViewport"),this.wasInViewport=k};i=function(b){return new e(b)};DISQUS.extend(i,{listByKey:function(){var b={};c(function(a){b[a.uid]=
a});return b},list:function(){var b=[];c(function(a){b.push(a)});return b},get:function(b){b=DISQUS.App.get(b);return b instanceof e&&b}});return{Lounge:i}});
DISQUS.define("next.host.ignition",function(f){function l(c){for(var f=DISQUS.App.list(),b,a=0,d=f.length;a<d;a++)b=f[a],b instanceof h&&c(b)}var c=DISQUS.use("next.host.lounge"),h=function(c){DISQUS.App.call(this);this.settings=c;this.container=c.container;this.frame=null},k=h.prototype;DISQUS.extend(k,DISQUS.App.prototype);k.init=function(){var e=this,h=e.container,b=e.settings,a="http://disqus.com/embed/ignition/",d="http://disqus.com";b.useSSL&&(a="https://disqus.com/embed/ignition/",d="https://disqus.com");
var g=e.frame=new DISQUS.Channel({origin:d,target:DISQUS.serialize(a,{f:b.forum,t_i:b.identifier,t_u:b.url||f.location.href,t_s:b.slug,t_t:b.title||b.documentTitle,t_e:b.title,t_d:b.documentTitle,t_c:b.category}),container:h,uid:e.uid,role:"complementary"});g.on("ready",function(){g.sendMessage("init",{anchorColor:b.anchorColor,referrer:f.location.href,colorScheme:b.colorScheme,language:b.language,typeface:b.typeface})});g.on("resize",function(a){g.elem.style.height=a.height+"px";g.sendMessage("embed.resized")});
g.on("fail",function(a){g.elem.style.height="75px";e.trigger("fail",a)});g.on("ignite",function(a){if(!e.lounge||e.lounge.frame.isKilled())a=DISQUS.extend({windowName:a.windowName},e.settings),e.lounge=c.Lounge(a),e.lounge.init()});g.load(function(){g.elem.setAttribute("scrolling","no");g.elem.setAttribute("horizontalscrolling","no");g.elem.setAttribute("verticalscrolling","no")});e.listenTo(DISQUS,"switches.changed",function(a){g.sendMessage("switches.changed",a)})};k.destroy=function(){this.off();
this.frame&&this.frame.destroy();DISQUS.App.prototype.destroy.call(this)};k=function(c){return new h(c)};DISQUS.extend(k,{listByKey:function(){var c={};l(function(f){c[f.uid]=f});return c},list:function(){var c=[];l(function(f){c.push(f)});return c},get:function(c){c=DISQUS.App.get(c);return c instanceof h&&c}});return{Ignition:k}});
DISQUS.define("next.host.config",function(f,l){var c=DISQUS.use("next.host.utils"),h=function(c,f){this.win=c;this.configurator=f;this.config={page:{url:l,title:l,slug:l,category_id:l,identifier:l,language:l,api_key:l,remote_auth_s3:l,author_s3:l},strings:l,sso:{},callbacks:{preData:[],preInit:[],onInit:[],afterRender:[],onReady:[],onNewComment:[],preReset:[],onPaginate:[],onIdentify:[]}}};h.DISQUS_GLOBALS=["shortname","identifier","url","title","category_id","slug"];var k=h.prototype;k.getContainer=
function(){var c=this.win;return c.document.getElementById(c.disqus_container_id||"disqus_thread")};k.runConfigurator=function(){var c=this.configurator||this.win.disqus_config;if(typeof c==="function")try{c.call(this.config)}catch(f){}};k.getValuesFromGlobals=function(){var e=this.win,f=this.config,b=f.page,a;DISQUS.each(h.DISQUS_GLOBALS,function(a){var c=e["disqus_"+a];typeof c!=="undefined"&&(b[a]=c)});this.runConfigurator();if(!f.forum)a=b.shortname,f.forum=a?a.toLowerCase():c.getForum(e.document);
f.demo=e.disqus_demo};k.toJSON=function(){var e=this.win,f=this.config,b=f.page,a=this.getContainer();this.getValuesFromGlobals();return{container:a,forum:f.forum,sortOrder:"default",permalink:c.getPermalink(),useSSL:c.isSSL(e.location.protocol),language:f.language,typeface:c.isSerif(a)?"serif":"sans-serif",anchorColor:c.getAnchorColor(a),colorScheme:128<c.getContrastYIQ(c.getElementStyle(a,"span","color"))?"dark":"light",url:b.url||e.location.href.replace(/#.*$/,""),title:b.title,documentTitle:c.guessThreadTitle(),
slug:b.slug,category:b.category_id,identifier:b.identifier,apiKey:b.api_key,remoteAuthS3:b.remote_auth_s3,sso:f.sso,useConman:f.demo,unsupported:c.getBrowserSupport(e),callbacks:f.callbacks}};return{HostConfig:h}});
(function(f,l){function c(a){k.configurator=a;a=k.toJSON();if(!b)a.container.innerHTML="",b=!0;if(!i)i=h.switches.Switches({container:a.container,useSSL:a.useSSL}),a.switches=i,i.init();e=!a.unsupported&&f.disqus_ignition?h.ignition.Ignition(a):h.lounge.Lounge(a);e.init();a.unsupported||i.fetch({data:{forum:a.forum}})}var h=DISQUS.use("next.host"),k=new h.config.HostConfig(f),e,i,b=!1;c();DISQUS.domready(function(){if(l.getElementsByClassName){var a=l.getElementsByClassName("dsq-brlink");a&&a.length&&
a[0].parentNode.removeChild(a[0])}});DISQUS.request={get:function(a,b,c){DISQUS.require(a,b,c)}};DISQUS.reset=function(a){a=a||{};e&&(e.destroy(),e=null);a.reload&&c(a.config)}})(this,this.document);