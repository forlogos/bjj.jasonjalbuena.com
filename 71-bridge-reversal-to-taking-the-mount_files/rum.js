(function(){var aa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},m=this,ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p=ba:p=ca;return p.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ea=Date.now||function(){return+new Date};var q=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},t=function(a,b){return a<b?-1:a>b?1:0};var u=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};var v;a:{var x=m.navigator;if(x){var y=x.userAgent;if(y){v=y;break a}}v=""};var z=function(a){z[" "](a);return a};z[" "]=function(){};var ga=function(a,b){var c=fa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var ha=-1!=v.indexOf("Opera"),A=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),ia=-1!=v.indexOf("Edge"),B=-1!=v.indexOf("Gecko")&&!(-1!=v.toLowerCase().indexOf("webkit")&&-1==v.indexOf("Edge"))&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"))&&-1==v.indexOf("Edge"),ja=-1!=v.toLowerCase().indexOf("webkit")&&-1==v.indexOf("Edge"),C=function(){var a=m.document;return a?a.documentMode:void 0},D;a:{var E="",F=function(){var a=v;if(B)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ia)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ja)return/WebKit\/(\S+)/.exec(a);if(ha)return/(?:Version)[ \/]?(\S+)/.exec(a)}();F&&(E=F?F[1]:"");if(A){var G=C();if(null!=G&&G>parseFloat(E)){D=String(G);break a}}D=E}var ka=D,fa={},la=function(a){ga(a,function(){for(var b=0,c=q(String(ka)).split("."),d=q(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=t(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||t(0==g[2].length,0==h[2].length)||t(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},ma;var na=m.document;ma=na&&A?C()||("CSS1Compat"==na.compatMode?parseInt(ka,10):5):void 0;var oa=function(a,b,c,d){this.label=a;this.type=b;this.value=c;this.duration=d||0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()};var H=function(a,b){this.b=[];this.a=b||m;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.b=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.c=null!=c?c:Math.random()<a},pa=function(){var a=m.performance;return a&&a.now?a.now():ea()};H.prototype.g=function(){u(this.b,this.j,this);this.b.length=0;this.c=!1};H.prototype.h=function(a){this.c&&this.b.push(a)};H.prototype.j=function(a){var b=this.a.performance;a&&b&&b.clearMarks&&(b.clearMarks("goog_"+a.uniqueId+"_start"),b.clearMarks("goog_"+a.uniqueId+"_end"))};var I=function(a,b,c,d){a.c&&a.h(new oa(b,c,d,void 0))};H.prototype.start=function(a,b){if(!this.c)return null;a=new oa(a,b,pa());(b=this.a.performance)&&b.mark&&b.mark("goog_"+a.uniqueId+"_start");return a};var qa=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(c){}return a}(),J=function(a,b,c){a.addEventListener?a.addEventListener(b,c,qa?void 0:!1):a.attachEvent&&a.attachEvent("on"+b,c)},ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,qa?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};var K=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{z(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},L=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var sa=function(a,b){this.a=a;this.b=b},ta=function(a,b){this.url=a;this.o=!!b;this.depth=null};var M=function(a,b,c,d,e){this.h=c||4E3;this.c=a||"&";this.i=b||",$";this.f=void 0!==d?d:"trn";this.l=e||null;this.g=!1;this.b={};this.j=0;this.a=[]},ua=function(a,b){var c={};c[a]=b;return[c]},N=function(a,b,c,d){a.a.push(b);a.b[b]=ua(c,d)},O=function(a,b,c){var d=a.j++;b=ua(b,c);a.a.push(d);a.b[d]=b},xa=function(a,b,c,d){b=b+"//"+c+d;var e=va(a)-d.length-0;if(0>e)return"";a.a.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.a.length;f++)for(var g=a.a[f],h=a.b[g],k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}var l=wa(h[k],a.c,a.i);if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.c;break}else a.g&&(c=e,l[c-1]==a.c&&--c,b+=l.substr(0,c),c=a.c,e=0);d=null==d?g:d}}f="";a.f&&null!=d&&(f=c+a.f+"="+(a.l||d));return b+f+""},va=function(a){if(!a.f)return a.h;var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return a.h-a.f.length-b-a.c.length-1},wa=function(a,b,c,d,e){var f=[];L(a,function(a,h){(a=ya(a,b,c,d,e))&&f.push(h+"="+a)});return f.join(b)},ya=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(ya(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(wa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var Aa=function(a,b,c,d){if(Math.random()<(d||a.a))try{var e;c instanceof M?e=c:(e=new M,L(c,function(a,b){O(e,b,a)}));var f=xa(e,a.f,a.b,a.c+b+"&");f&&za(m,f)}catch(g){}},za=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var Ba=function(a,b,c,d){this.c=a;this.h=b;this.f=c;this.g=this.b;this.a=d},Ea=function(a){return new Ca(Da(a),a.fileName,a.lineNumber)},Da=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Fa=function(a,b,c,d){var e,f;try{if(a.a&&a.a.c){f=a.a.start(b.toString(),3);e=c();var g=a.a;c=f;if(g.c){c.duration=pa()-c.value;var h=g.a.performance;h&&h.mark&&h.mark("goog_"+c.uniqueId+"_end");g.h(c)}}else e=c()}catch(n){var k=a.f;try{a.a&&f&&a.a.j(f);var l=Ea(n),k=(d||a.g).call(a,b,l,void 0,void 0)}catch(r){a.b(217,r)}if(!k)throw n;}finally{}return e},Ga=function(a){var b=P;return function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return Fa(b,113,function(){return a.apply(void 0,c)},void 0)}};Ba.prototype.b=function(a,b,c,d,e){try{var f=e||this.h,g=new M;g.g=!0;N(g,1,"context",a);b instanceof Ca||(b=Ea(b));N(g,2,"msg",b.message.substring(0,512));b.a&&N(g,3,"file",b.a);0<b.b&&N(g,4,"line",b.b.toString());b={};if(d)try{d(b)}catch(R){}d=[b];g.a.push(5);g.b[5]=d;var h;e=m;d=[];var k,l=null;do{b=e;K(b)?(k=b.location.href,l=b.document&&b.document.referrer||null):(k=l,l=null);d.push(new ta(k||""));try{e=b.parent}catch(R){e=null}}while(e&&b!=e);k=0;for(var n=d.length-1;k<=n;++k)d[k].depth=n-k;b=m;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var r=d[k];r.url||(r.url=b.location.ancestorOrigins[k-1]||"",r.o=!0)}for(var S=new ta(m.location.href,!1),T=d.length-1,n=T;0<=n;--n){var w=d[n];if(w.url&&!w.o){S=w;break}}var w=null,La=d.length&&d[T].url;0!=S.depth&&La&&(w=d[T]);h=new sa(S,w);h.b&&N(g,6,"top",h.b.url||"");N(g,7,"url",h.a.url||"");Aa(this.c,f,g,c)}catch(R){try{Aa(this.c,f,{context:"ecmserr",rctx:a,msg:Da(R),url:h.a.url},c)}catch(Va){}}return this.f};var Ca=function(a,b,c){this.message=a;this.a=b||"";this.b=c||-1};var Q;if(!(Q=!B&&!A)){var U;if(U=A)U=9<=Number(ma);Q=U}Q||B&&la("1.9.1");A&&la("9");var Ha=document,Ia=window;var Ja=!!window.google_async_iframe_id,V=Ja&&window.parent||window;var P,W;if(Ja&&!K(V)){var X="."+Ha.domain;try{for(;2<X.split(".").length&&!K(V);)Ha.domain=X=X.substr(X.indexOf(".")+1),V=window.parent}catch(a){}K(V)||(V=window)}W=V;var Y=new H(1,W);P=new Ba(new function(){this.f="http:"===Ia.location.protocol?"http:":"https:";this.b="pagead2.googlesyndication.com";this.c="/pagead/gen_204?id=";this.a=.01},"jserror",!0,Y);"complete"==W.document.readyState?W.google_measure_js_timing||Y.g():Y.c&&J(W,"load",function(){W.google_measure_js_timing||Y.g()});var Ka=P.b;var Ma=function(a,b){var c=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.msRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;if(c){var d,e=[],f,g,h,k,l,n=a.requestIdleCallback;n&&(g=[],l=function(a){h=a.timeRemaining();k=0});var r=function(a){d||(e.push(a-f),f=a,n&&(g.push(h||0),k||(h=0,k=n(l))),c(r))};c(function(a){f=a;n&&(k=n(l));c(r)});a.setTimeout(function(){b(e,g);d=!0},1E4)}else b(void 0,void 0)};var Z=function(a,b,c,d,e,f,g){f=void 0===f?Infinity:f;g=void 0===g?!1:g;H.call(this,a);this.m=0;this.u=f;this.A=b;this.v=c;this.H=d;this.B=e;this.D=!("csi.gstatic.com"!==this.v||!this.a.navigator||!this.a.navigator.sendBeacon);this.l={};this.a.performance&&this.a.performance.now||(this.l.dat=1);this.C=!g;this.f=p(this.w,this);this.s=da(this.a.setTimeout,this.f,1100);this.i=0;this.i=this.a.setTimeout(this.f,1E4);"complete"===this.a.document.readyState?this.a.setTimeout(this.f,0):J(this.a,"load",this.s);J(this.a,"unload",this.f)};aa(Z,H);var Na=function(a){var b=a.label+"."+Math.round(a.value).toString(36);a=Math.round(a.duration);0<a&&(b+="_"+a.toString(36));return b};Z.prototype.w=function(){if(this.c&&this.C&&this.b.length){var a={};200<this.b.length&&(this.b.length=200);u(this.b,function(b){var c="met."+b.type;a[c]?a[c].push(Na(b)):a[c]=[Na(b)]});Oa(this,a);this.m++;this.m===this.u?this.g():(this.b.length=0,this.a.clearTimeout(this.i),this.i=0)}};var Oa=function(a,b){var c=new M(void 0,"~");L(a.l,function(a,b){O(c,b,a)});L(b,function(a,b){O(c,b,a)});b=xa(c,a.A,a.v,""+a.H+a.B+"&");a.D&&a.a.navigator.sendBeacon(b,null)||za(a.a,b)},Pa=function(a,b){var c="5";L(b,function(a,b){null!=a&&(c+="."+b+"_"+a)});b={};b=(b["met.5"]=c,b);Oa(a,b)};Z.prototype.h=function(a){this.m<this.u&&(H.prototype.h.call(this,a),200<=this.b.length&&this.w())};Z.prototype.g=function(){H.prototype.g.call(this);this.a.clearTimeout(this.i);this.i=0;ra(this.a,"unload",this.f);ra(this.a,"load",this.s)};var Qa={unloadEventStart:2,unloadEventEnd:3,redirectStart:4,redirectEnd:5,fetchStart:6,domainLookupStart:7,domainLookupEnd:8,connectStart:9,connectEnd:10,secureConnectionStart:11,requestStart:12,responseStart:13,responseEnd:14,domLoading:15,domInteractive:16,domContentLoadedEventStart:17,domContentLoadedEventEnd:18,domComplete:19,loadEventStart:20,loadEventEnd:21},Sa=function(a){L(m.google_timing_params,function(b,c){a.l[c]=b});m.google_timing_params=null;var b=m.google_js_reporting_queue;if(b){var c=function(b){a.h(b);a.j(b)};b.push=c;u(b,c);b.length=0}Ra(a)},Ra=function(a){var b=window,c=Ga(function(){var c;if(b.performance&&b.performance.getEntriesByType){c=b.performance.getEntriesByType("resource");var e=c.length,f=0;if(e&&"number"==typeof c[0].transferSize)for(var g=0;g<e;g++)f+=c[g].transferSize||0;c={F:e,G:f}}else c=null;c&&(I(a,"15",2,c.F),I(a,"16",2,c.G));Ta(a,b);b.google_enable_frame_timing_measurement&&Ua(a,b)});"complete"!=b.document.readyState?J(b,"load",function(){b.setTimeout(c,0)}):c()},Ua=function(a,b){Ma(b,function(b,d){if(b||d){var c={};b&&(c[1]=b.map(function(a){a=Math.min(Math.max(a,0),4095);return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[a>>6]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[a&63]}).join(""));d&&(c[2]=d.map(function(a){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[Math.min(Math.max(a,0),63)|0]}).join(""));Pa(a,c)}})},Ta=function(a,b){var c=b.performance&&b.performance.timing;if(c){var d=c.navigationStart;0<d&&(I(a,"1",1,d),L(Qa,function(b,f){f=c[f];0<f&&I(a,String(b),1,f-d)}))}};Fa(P,112,function(){var a=new Z(1,"https:","csi.gstatic.com","/csi?v=2&s=pagead&action=","csi_pagead",5);a.c=!0;Sa(a)},Ka);}).call(this);
