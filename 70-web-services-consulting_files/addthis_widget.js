/* (c) 2008-2014 AddThis, Inc */
var addthis_conf={ver:152};function addthis_onmouseover(b,f,d,c,h,a,g){if(h){addthis_config.username=h}if(a){addthis_language=a}addthis_content=g||"";return addthis_open(b,"share",d,c)}function addthis_onmouseout(){addthis_close()}function addthis_to(a){return addthis_sendto(a)}function addthis_invoke(e,c,d,f){addthis_config.username=f||_ate.pub();addthis_share.url=(c||b.addthis_url);addthis_share.title=(d||b.addthis_title);var b=window,g=addthis_share.url.toLowerCase(),a=addthis_share.title.toLowerCase();if(g===""||g==="[url]"){addthis_share.url=location.href}if(a===""||a==="[title]"){addthis_share.title=document.title}_ate.as(e);return false};if(!((window._atc||{}).ver)){var _atd="www.addthis.com/",_atr=window.addthis_cdn||"//web.archive.org/web/20140703055239/http://s7.addthis.com/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atc={dbg:0,rrev:1404218596,dr:0,ver:250,loc:0,enote:"",cwait:500,bamp:0.25,camp:1,csmp:0.0001,damp:1,famp:1,pamp:0.1,abmp:0.5,sfmp:-1,tamp:1,plmp:1,stmp:1,vamp:1,cscs:1,dtt:0.01,ohmp:0,ltj:1,xamp:1,abf:!!window.addthis_do_ab,qs:0,cdn:0,rsrcs:{bookmark:_atr+"static/r07/bookmark042.html",atimg:_atr+"static/r07/atimg042.html",countercss:_atr+"static/r07/counter015.css",counterIE67css:_atr+"static/r07/counterIE67004.css",counter:_atr+"static/r07/counter017.js",core:_atr+"static/r07/core142.js",wombat:_atr+"static/r07/bar026.js",wombatcss:_atr+"static/r07/bar012.css",qbarcss:_atr+"bannerQuirks.css",fltcss:_atr+"static/r07/floating010.css",barcss:_atr+"static/r07/banner006.css",barjs:_atr+"static/r07/banner004.js",contentcss:_atr+"static/r07/content009.css",contentjs:_atr+"static/r07/content023.js",layersjs:_atr+"static/r07/layers056.js",layerscss:_atr+"static/r07/layers046.css",layersiecss:_atr+"static/r07/layersIE6007.css",layersdroidcss:_atr+"static/r07/layersdroid004.css",warning:_atr+"static/r07/warning000.html",ssojs:_atr+"static/r07/ssi005.js",ssocss:_atr+"static/r07/ssi004.css",peekaboocss:_atr+"static/r07/peekaboo002.css",overlayjs:_atr+"static/r07/overlay005.js",widget32css:_atr+"static/r07/widgetbig060.css",widget32whitecss:_atr+"static/r07/widgetbigwhite016_32x32.css",widget20css:_atr+"static/r07/widgetmed010.css",widgetcss:_atr+"static/r07/widget120.css",widgetIE67css:_atr+"static/r07/widgetIE67006.css",widgetpng:"//web.archive.org/web/20140703055239/http://s7.addthis.com/static/r07/widget060.gif",embed:_atr+"static/r07/embed010.js",embedcss:_atr+"static/r07/embed004.css",lightbox:_atr+"static/r07/lightbox000.js",lightboxcss:_atr+"static/r07/lightbox000.css",link:_atr+"static/r07/link005.html",pinit:_atr+"static/r07/pinit021.html",linkedin:_atr+"static/r07/linkedin024.html",fbshare:_atr+"static/r07/fbshare004.html",tweet:_atr+"static/r07/tweet028.html",menujs:_atr+"static/r07/menu163.js",sh:_atr+"static/r07/sh164.html"}};}(function(){var i,q=window,C=document;var s=(window.location.protocol=="https:"),F,n,y,A=(navigator.userAgent||"unk").toLowerCase(),v=(/firefox/.test(A)),p=(/msie/.test(A)&&!(/opera/.test(A))),c={0:_atr,1:"//web.archive.org/web/20140703055239/http://ct1.addthis.com/",6:"//web.archive.org/web/20140703055239/http://ct6z.addthis.com/"},g={gb:"1",nl:"1",no:"1"},o={gr:"1",it:"1",cz:"1",ie:"1",es:"1",pt:"1",ro:"1",ca:"1",pl:"1",be:"1",fr:"1",dk:"1",hr:"1",de:"1",hu:"1",fi:"1",us:"1",ua:"1",mx:"1",se:"1",at:"1"},E={nz:"1"},h=(h=document.getElementsByTagName("script"))&&h[h.length-1].parentNode;_atc.cdn=0;if(!window.addthis||window.addthis.nodeType!==i){try{F=window.navigator?(navigator.userLanguage||navigator.language):"";n=F.split("-").pop().toLowerCase();y=F.substring(0,2);if(n.length!=2){n="unk";}if(_atr.indexOf("-")>-1){}else{if(window.addthis_cdn!==i){_atc.cdn=window.addthis_cdn;}else{if(E[n]){_atc.cdn=6;}else{if(g[n]){_atc.cdn=(v||p)?0:1;}else{if(o[n]){_atc.cdn=(p)?0:1;}}}}}if(_atc.cdn){for(var z in _atc.rsrcs){if(_atc.rsrcs.hasOwnProperty(z)){_atc.rsrcs[z]=_atc.rsrcs[z].replace(_atr,typeof(window.addthis_cdn)==="string"?window.addthis_cdn:c[_atc.cdn]).replace(/live\/([a-z])07/,"live/$107");}}_atr=c[_atc.cdn];}}catch(B){}function b(k,e,d,a){return function(){if(!this.qs){this.qs=0;}_atc.qs++;if(!((this.qs++>0&&a)||_atc.qs>1000)&&window.addthis){window.addthis.plo.push({call:k,args:arguments,ns:e,ctx:d});}};}function x(e){var d=this,a=this.queue=[];this.name=e;this.call=function(){a.push(arguments);};this.call.queuer=this;this.flush=function(w,r){this.flushed=1;for(var k=0;k<a.length;k++){w.apply(r||d,a[k]);}return w;};}window.addthis={ost:0,cache:{},plo:[],links:[],ems:[],timer:{load:((new Date()).getTime())},_Queuer:x,_queueFor:b,data:{getShareCount:b("getShareCount","data")},bar:{show:b("show","bar"),initialize:b("initialize","bar")},layers:b("layers"),login:{initialize:b("initialize","login"),connect:b("connect","login")},configure:function(e){if(!q.addthis_config){q.addthis_config={};}if(!q.addthis_share){q.addthis_share={};}for(var a in e){if(a=="share"&&typeof(e[a])=="object"){for(var d in e[a]){if(e[a].hasOwnProperty(d)){if(!addthis.ost){q.addthis_share[d]=e[a][d];}else{addthis.update("share",d,e[a][d]);}}}}else{if(e.hasOwnProperty(a)){if(!addthis.ost){q.addthis_config[a]=e[a];}else{addthis.update("config",a,e[a]);}}}}},box:b("box"),button:b("button"),counter:b("counter"),count:b("count"),lightbox:b("lightbox"),toolbox:b("toolbox"),update:b("update"),init:b("init"),ad:{menu:b("menu","ad","ad"),event:b("event","ad"),getPixels:b("getPixels","ad")},util:{getServiceName:b("getServiceName")},ready:b("ready"),addEventListener:b("addEventListener","ed","ed"),removeEventListener:b("removeEventListener","ed","ed"),user:{getID:b("getID","user"),getGeolocation:b("getGeolocation","user",null,true),getPreferredServices:b("getPreferredServices","user",null,true),getServiceShareHistory:b("getServiceShareHistory","user",null,true),ready:b("ready","user"),isReturning:b("isReturning","user"),isOptedOut:b("isOptedOut","user"),isUserOf:b("isUserOf","user"),hasInterest:b("hasInterest","user"),isLocatedIn:b("isLocatedIn","user"),interests:b("getInterests","user"),services:b("getServices","user"),location:b("getLocation","user")},session:{source:b("getSource","session"),isSocial:b("isSocial","session"),isSearch:b("isSearch","session")},_pmh:new x("pmh"),_pml:[]};function f(a){a.style.width=a.style.height="1px";a.style.position="absolute";a.style.zIndex=100000;}if(document.location.href.indexOf(_atr)==-1){var t=document.getElementById("_atssh");if(!t){t=document.createElement("div");t.style.visibility="hidden";t.id="_atssh";f(t);h.appendChild(t);}function j(a){if(a&&!(a.data||{})["addthisxf"]&&window.addthis){if(addthis._pmh.flushed){_ate.pmh(a);}else{addthis._pmh.call(a);}}}if(window.postMessage){if(window.attachEvent){window.attachEvent("onmessage",j);}else{if(window.addEventListener){window.addEventListener("message",j,false);}}addthis._pml.push(j);}if(!t.firstChild){var l,A=navigator.userAgent.toLowerCase(),u=Math.floor(Math.random()*1000);l=document.createElement("iframe");l.id="_atssh"+u;l.title="AddThis utility frame";t.appendChild(l);f(l);l.frameborder=l.style.border=0;l.style.top=l.style.left=0;_atc._atf=l;}}var D=document.createElement("script");D.type="text/javascript";D.src=(s?"https:":"http:")+_atc.rsrcs.core;h.appendChild(D);var m=10000;setTimeout(function(){if(!window.addthis.timer.core){if(Math.random()<_atc.ohmp){(new Image()).src="//web.archive.org/web/20140703055239/http://m.addthisedge.com/live/t00/oh.gif"+Math.floor(Math.random()*4294967295).toString(36)+"&cdn="+_atc.cdn+"&sr="+_atc.ohmp+"&rev="+_atc.rrev+"&to="+m;}if(_atc.cdn!==0){var d=document.createElement("script");d.type="text/javascript";d.src=(s?"https:":"http:")+_atr+"static/r07/core142.js";h.appendChild(d);}}},m);}})();
/*

*/