




/*

*/
/* (c) 2008, 2009 Add This, LLC */
var addthis_conf={ver:152};function addthis_onmouseover(b,f,d,c,h,a,g){if(h){addthis_config.username=h}if(a){addthis_language=a}addthis_content=g||"";return addthis_open(b,"share",d,c)}function addthis_onmouseout(){addthis_close()}function addthis_to(a){return addthis_sendto(a)}function addthis_invoke(e,c,d,f){addthis_config.username=f||_ate.pub();addthis_share.url=(c||b.addthis_url);addthis_share.title=(d||b.addthis_title);var b=window,g=addthis_share.url.toLowerCase(),a=addthis_share.title.toLowerCase();if(g===""||g==="[url]"){addthis_share.url=location.href}if(a===""||a==="[title]"){addthis_share.title=document.title}_ate.as(e);return false};if(!window._ate){var _atd="www.addthis.com/",_atr="//s7.addthis.com/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atu="undefined",_atc={dr:0,ver:250,loc:0,enote:"",cwait:500,tamp:-1,samp:0.01,camp:1,vamp:1,addr:-1,addt:1,xfl:!!window.addthis_disable_flash,abf:!!window.addthis_do_ab};(function(){try{var I=window.location;if(I.protocol.indexOf("file")===0){_atr="http:"+_atr}if(I.hostname.indexOf("localhost")!=-1){_atc.loc=1}}catch(N){}var L=navigator.userAgent.toLowerCase(),O=document,u=window,t=u.addEventListener,h=u.attachEvent,J=O.location,Q={win:/windows/.test(L),xp:/windows nt 5.1/.test(L)||/windows nt 5.2/.test(L),chr:/chrome/.test(L),iph:/iphone/.test(L),saf:/safari/.test(L),web:/webkit/.test(L),opr:/opera/.test(L),msi:(/msie/.test(L))&&!(/opera/.test(L)),ffx:/firefox/.test(L),ff2:/firefox\/2/.test(L),ie6:/msie 6.0/.test(L),ie7:/msie 7.0/.test(L),mod:-1},n={isBound:false,isReady:false,readyList:window.addthis_onload||[],onReady:function(){if(!n.isReady){n.isReady=true;var a=n.readyList;for(var b=0;b<a.length;b++){a[b].call(window)}n.readyList=[]}},addLoad:function(a){var b=u.onload;if(typeof u.onload!="function"){u.onload=a}else{u.onload=function(){if(b){b()}a()}}},bindReady:function(){if(A.isBound){return}A.isBound=true;if(O.addEventListener&&!Q.opr){O.addEventListener("DOMContentLoaded",A.onReady,false)}var a=window.addthis_product;if(a&&a.indexOf("f")>-1){A.onReady();return}if(Q.msi&&window==top){(function(){if(A.isReady){return}try{O.documentElement.doScroll("left")}catch(c){setTimeout(arguments.callee,0);return}A.onReady()})()}if(Q.opr){O.addEventListener("DOMContentLoaded",function(){if(A.isReady){return}for(var c=0;c<O.styleSheets.length;c++){if(O.styleSheets[c].disabled){setTimeout(arguments.callee,0);return}}A.onReady()},false)}if(Q.saf){var b;(function(){if(A.isReady){return}if(O.readyState!="loaded"&&O.readyState!="complete"){setTimeout(arguments.callee,0);return}if(b===undefined){var c=O.gn("link");for(var d=0;d<c.length;d++){if(c[d].getAttribute("rel")=="stylesheet"){b++}}var e=O.gn("style");b+=e.length}if(O.styleSheets.length!=b){setTimeout(arguments.callee,0);return}A.onReady()})()}A.addLoad(A.onReady)},append:function(b,a){A.bindReady();if(A.isReady){b.call(window,[])}else{A.readyList.push(function(){return b.call(window,[])})}}},A=n,v=function(q,l,p,c){if(!q){return p}if(q instanceof Array){for(var e=0,a=q.length,b=q[0];e<a;b=q[++e]){p=l.call(c||q,p,b,e,q)}}else{for(var d in q){p=l.call(c||q,p,q[d],d,q)}}return p},D=Array.prototype.slice,F=function(b){return D.apply(b,D.call(arguments,1))},E=function(a){return a.replace(/(^\s+|\s+$)/g,"")},M=function(a,b){return v(F(arguments,1),function(d,c){return v(c,function(l,i,e){l[e]=i;return l},d)},a)},j=function(b,a){return v(b,function(e,d,c){c=E(c);if(c){e.push(_euc(c)+"="+_euc(E(d)))}return e},[]).join(a||"&")},g=function(b,a){return v((b||"").split(a||"&"),function(i,l){var e=l.split("="),d=E(_duc(e[0])),c=E(_duc(e.slice(1).join("=")));if(d){i[d]=c}return i},{})},f={vst:[],rev:"$Rev: 72087 $",_euc:_euc,_duc:_duc,reduce:v,slice:F,strip:E,extend:M,toKV:j,fromKV:g,bro:Q,clck:1,show:1,dl:J,camp:_atc.camp-Math.random(),samp:_atc.samp-Math.random(),vamp:_atc.vamp-Math.random(),tamp:_atc.tamp-Math.random(),ab:"-",scnt:1,seq:1,inst:1,wait:500,tmo:null,cvt:[],svt:[],sttm:new Date().getTime(),max:4294967295,pix:"tev",sid:0,sub:!!window.at_sub,dbm:0,uid:null,oot:null,swf:"//bin.clearspring.com/at/v/1/button1.6.swf",evu:"//o.addthis.com/at/",spt:"static/r07/widget13.png",ifpp:null,gat:function(){},com:function(a){if(window.parent&&window.postMessage){window.parent.postMessage(a,"*")}else{f.ifm(a)}},ifwn:function(){var b=f;try{b.rec(b.sifr.contentWindow.name)}catch(c){}},ifm:function(b){if(addthis_wpl){var c=(addthis_wpl.split("#"))[0];window.parent.location.href=c+"#at"+b}return false},hash:window.location.hash,ifp:function(){var c=f,b=window.location.hash,i=0;if(b&&b.indexOf("#at")>-1){b=b.substr(3).split(";");for(var e in b){var d=b[e].length>3?b[e].substr(0,3):null;switch(d){case"ssh":i=1;c.ssh(b[e].substr(4));break;case"uid":i=1;c.asetup(b[e].substr(4));break}}if(i){if(!c.hash.length||c.hash==""){c.hash="#"}window.location.hash=c.hash}}if(c.gssh&&c.guid){clearInterval(c.ifpp)}},pmh:function(a){if(a.origin.slice(-12)==".addthis.com"){f.rec(a.data)}},_rec:[],rec:function(d){if(!d){return}var l=g(d),b=f,c=b.sifr,e=b._rec;if(l.ssh){b.ssh(l.ssh)}if(l.uid){b.asetup(l.uid)}if(l.dbm){b.dbm=l.dbm}if(c&&c.parentNode){c.parentNode.removeChild(c);b.sifr=null}for(var p=0;p<e.length;p++){e[p](l)}},ssh:function(b){f.gssh=1;var a=window.addthis_ssh=_duc(b);f._ssh=a.split(",")},mun:function(c){var a=291;if(c){for(var b=0;b<c.length;b++){a=(a*(c.charCodeAt(b)+b)+3)&1048575}}return(a&16777215).toString(32)},ibt:function(){if(f.bti){return f.bti}var a=(window.addthis_product||"men").substr(0,3),b=a=="bkm"||a=="fct"||a=="fxe";if(b){f.bti=b}return b},off:function(){return Math.floor((new Date().getTime()-f.sttm)/100).toString(16)},ran:function(){return Math.floor(Math.random()*4294967295).toString(36)},srd:function(){if(f.dr){return"&pre="+_euc(f.dr)}else{return""}},cst:function(a){return"CXNID=2000001.521545608054043907"+(a||2)+"NXC"},imgz:[],hrr:function(c){if(c&&c.urls&&c.urls instanceof Array){for(var b=0;b<c.urls.length;b++){var a=new Image();f.imgz.push(a);a.src=c.urls[b]}}},img:function(l,q){if(!window.at_sub&&!_atc.xtr){var d=f,p=d.dr,b=((d.rev||"").split(" "));if(p){p=p.split("?").shift().split("http://").pop().split("https://").pop();if(p.length>25){p=p.substr(0,25)}}var e=new Image();d.imgz.push(e);e.src=_atr+"live/t00/"+l+".gif?"+(d.uid!==null?"uid="+d.uid+"&":"")+d.ran()+"&"+d.cst(q)+(d.pub()?"&pub="+d.pub():"")+(p?"&dr="+_euc(p):"")+(b.length>1?"&rev="+b[1]:"")}},cuid:function(){return((f.sttm/1000)&f.max).toString(16)+("00000000"+(Math.floor(Math.random()*(f.max+1))).toString(16)).slice(-8)},ssid:function(){if(f.sid===0){f.sid=f.cuid()}return f.sid},sev:function(b,a){f.pix="sev-"+(typeof(b)!=="number"?_euc(b):b);f.svt.push(b+";"+f.off());if(a===1){f.xmi(true)}else{f.sxm(true)}},cev:function(b,a){f.pix="cev-"+_euc(b);f.cvt.push(_euc(b)+"="+_euc(a)+";"+f.off());f.sxm(true)},sxm:function(a){if(f.tmo!==null){clearTimeout(f.tmo)}if(a){f.tmo=f.sto("_ate.xmi(false)",f.wait)}},sto:function(b,a){return setTimeout(b,a)},sta:function(){var b=f;return"AT-"+(b.pub()?b.pub():"unknown")+"/-/"+b.ab+"/"+b.ssid()+"/"+(b.seq++)+(b.uid!==null?"/"+b.uid:"")},xred:function(){var q=window,p=f,r=0,d=O.referer||O.referrer||"",b=J?J.href:null,l=0;if(p.camp>=0&&b&&J&&J.protocol&&(d.indexOf(".com")>-1)&&(J.protocol.indexOf("https")==-1)){if(d&&d.match(/ws\/results\/(Web|Images|Video|News)/)){l=1}else{if(d.indexOf(".com/search")>-1){var s=d.split("?").pop().split("&");for(var e=0;e<s.length;e++){if(s[e].indexOf("q=")===0||s[e].indexOf("p=")===0||s[e].indexOf("query")===0||s[e].indexOf("qry")===0||s[e].indexOf("text")===0){l=1;break}}}}if(!_atc.xtr&&!_atc.xck&&l&&p.mun(p.pub())!=="mu2r"){var c=O.ce("script");c.src="//cf.addthis.com/red/p.json?callback=_ate.hrr"+(p.pub()?"&pub="+p.pub():"")+(p.uid&&p.uid!=="anonymous"?"&uid="+_euc(p.uid):"")+"&url="+_euc(b)+"&ref="+_euc((O.referer||O.referrer));O.gn("head")[0].appendChild(c)}}},xld:function(){var b=f;if(!b.xld_p){b.xld_p=1;if(b.samp>=0&&!b.sub){b.sev("20");b.cev("plo",Math.round(1/_atc.samp));if(b.dr){b.cev("pre",b.dr)}}b.xred();b.img(_atc.ver+"lo","2")}},xmi:function(r){var b=f,p=b.dl?b.dl.hostname:"";if(!b.uid){b.dck("X"+b.cuid())}else{b.coo()}if(b.cvt.length+b.svt.length>0){b.sxm(false);if(b.seq===1){b.cev("pin",b.inst)}if(_atc.xtr){return}if(p.indexOf(".gov")>-1||p.indexOf(".mil")>-1){_atc.xck=1}var s=b.pix+"-"+b.ran()+".png?ev="+f.sta()+"&se="+b.svt.join(",")+"&ce="+b.cvt.join(",")+(_atc.xck?"&xck=1":""),e=b.evu+s;b.cvt=[];b.svt=[];if(r){var q=document,l=q.ce("iframe");l.id="_atf";l.src=e;f.opp(l.style);q.body.appendChild(l);l=q.getElementById("_atf")}else{var c=new Image();b.imgz.push(c);c.src=e}}},loc:function(){return _atc.loc},opp:function(a){a.width=a.height="1px";a.position="absolute";a.zIndex=100000},pub:function(){return _euc(window.addthis_config&&addthis_config.username?addthis_config.username:(window.addthis_pub||""))},plo:[],lad:function(a){f.plo.push(a)},lng:function(){return window.addthis_language||(window.addthis_config||{}).ui_language||(f.bro.msi?navigator.userLanguage:navigator.language)},alg:function(a){var b=document;if(a&&(a.toLowerCase()).indexOf("en")!==0&&!f.pll){f.pll=f.ajs("static/r07/lang04.js")}},jlr:{},ajs:function(a){if(!f.jlr[a]){var b=O.ce("script");b.src=_atr+a;O.gn("head")[0].appendChild(b);f.jlr[a]=1;return b}return 1},jlo:function(){try{var p=document,b=f,l=b.lng();b.alg(l);if(!b.pld){if(b.bro.ie6){var c=new Image();b.imgz.push(c);c.src=_atr+b.spt;if(window.addthis_feed){c=new Image();b.imgz.push(c);c.src=_atr+"static/r05/feed00.gif"}}b.pld=b.ajs("static/r07/menu42.js")}}catch(i){}},igv:function(a,b){if(!u.addthis_share){u.addthis_share={}}if(!addthis_share.url){u.addthis_share.url=u.addthis_url||a}if(!addthis_share.title){u.addthis_share.title=u.addthis_title||b}if(!u.addthis_config){u.addthis_config={username:u.addthis_pub}}else{if(addthis_config.data_use_flash===false){_atc.xfl=1}if(addthis_config.data_use_cookies===false){_atc.xck=1}}},lod:function(S){try{var U=window,ak=f,x=ak.bro.msi,d=0,Z=O.referer||O.referrer||"",X=J?J.href:null,ag=J.hostname,aj=X?X.indexOf("sms_ss"):-1,ah=((S===1||U.addthis_load_flash)&&!_atc.abf),ac=((U.addthis_language||(U.addthis_config?U.addthis_config.ui_language:null)||(ak.bro.msi?navigator.userLanguage:navigator.language)).split("-")).shift(),s=(J.href.indexOf(_atr)==-1)&&!ak.bro.ie6&&!ak.bro.ie7,ad=O.gn("link"),q=_atr+"static/r07/sh10.html",y="_ate.ifwn()",r,T;if(!U.postMessage){var W=O.gn("img");for(var ae=0;ae<W.length;ae++){if(W[ae].src.split("//").pop().indexOf(ag)==0){r=W[ae].src;break}}}if(s&&(!_atc.xic||(U.postMessage||ak.bro.msi))){if(!x){T=O.ce("iframe")}else{var V=O.ce("div");V.style.visibility="hidden";ak.opp(V.style);O.body.insertBefore(V,O.body.firstChild);V.innerHTML='<iframe id="_atssh" width="1" height="1" name="_atssh" '+(!U.postMessage?'onload="'+y+'" ':"")+">";T=O.getElementById("_atssh")}}for(var ae=0;ae<ad.length;ae++){var ab=ad[ae];if(ab.rel&&ab.rel=="canonical"&&ab.href){X=ab.href}}ak.igv(X,O.title||"");ak.gov();ak.dr=Z;var p=(ak.swf&&!_atc.xfl&&!(ak.loc())&&!_atc.abf&&(ah||ak.uid===null||(ak.uid!=="anonymous"&&ak.oot&&((new Date()).getTime()-ak.oot>60480000))));q+="#swfp="+(p&&x?1:0);if(!x&&p){var c=function(e,l,a){var i=O.ce("param");i.name=l;i.value=a;e.appendChild(i)},V=O.ce("div"),Y="atff",b=Y+"c",aa=O.ce("object");V.id=b;O.body.insertBefore(V,O.body.firstChild);setTimeout(function(){var a=O.getElementById(b);aa.id=Y;aa.data=ak.swf;aa.width=aa.height="1px";aa.type="application/x-shockwave-flash";c(aa,"wmode","transparent");c(aa,"allowScriptAccess","always");a.appendChild(aa)},10)}if(s&&T){T.id="_atssh";ak.opp(T.style);T.frameborder=T.style.border=0;T.style.top=T.style.left=0;if(U.postMessage){T.src=q;if(x){U.attachEvent("onmessage",ak.pmh)}else{U.addEventListener("message",ak.pmh,false)}T=O.body.appendChild(T)}else{if(r&&!_atc.xic&&ak.bro.msi&&window==top){T.onload=y;T.src=r;T=O.body.appendChild(T);T.src=q+"&wpl="+_euc(r)}}ak.sifr=T}if(!ah){if(p){ak.uoo();if(ak.bro.ie6||ak.bro.ie7){ak.sto("if (_ate.xld) _ate.xld()",5000)}else{ak.sto("_ate.xld()",5000)}}else{ak.guid=1;ak.xld()}if(aj>-1&&X.indexOf(_atd+"book")==-1){var af=X.substr(aj);af=af.split("&").shift().split("#").shift().split("=").pop();if(ak.vamp>=0&&!ak.sub&&af.length){ak.cev("plv",Math.round(1/_atc.vamp));ak.cev("rsc",af)}}}if(ak.plo.length>0){ak.jlo()}}catch(ai){}},kck:function(a){var b=document;if(b.cookie){b.cookie=a+"= ; expires=Tue, 31 Mar 2009 05:47:11 UTC; path=/"}},rck:function(e){var p=document;if(p.cookie){var b=p.cookie.split(";");for(var l=0;l<b.length;l++){var q=b[l],a=q.indexOf(e+"=");if(a>=0){return q.substring(a+(e.length+1))}}}return},uoo:function(){f.sck("_csoot",(new Date().getTime()))},coo:function(a){if(f.uid=="anonymous"&&!f.oot){f.xck=1;f.uoo()}},dck:function(a){f.uid=a;f.sck("_csuid",a);f.coo()},gov:function(){var b=f.dl?f.dl.hostname:"";if(b.indexOf(".gov")>-1||b.indexOf(".mil")>-1){_atc.xck=1;_atc.xfl=1}var c=f.pub(),a=["usarmymedia","govdelivery"];for(K in a){if(c==a[K]){_atc.xck=1;_atc.xfl=1;break}}},sck:function(b,a,c){f.gov();if(!_atc.xck){O.cookie=b+"="+a+(!c?"; expires=Wed, 04 Oct 2028 03:19:53 GMT":"")+"; path=/"}},asetup:function(b){var c=f;try{if(!c.guid){c.guid=1;if(b!==null&&b!==_atu){c.dck(b)}c.xld()}}catch(d){}return b},ao:function(b,i,e,c,d,a){f.lad(["open",b,i,e,c,d,a]);f.jlo();return false},ac:function(){},as:function(b,c,a){f.lad(["send",b,c,a]);f.jlo()}},R=f;u._ate=R;u._adr=A;O.ce=O.createElement;O.gn=O.getElementsByTagName;A.bindReady();if(!_atc.ost){if(!u.addthis_conf){u.addthis_conf={}}for(var K in addthis_conf){_atc[K]=addthis_conf[K]}_atc.ost=1}A.append(R.lod);if(O.cookie){var m=O.cookie.split(";");for(var K=0;K<m.length;K++){var P=m[K],o=P.indexOf("_csuid="),k=P.indexOf("_csoot=");if(o>=0){f.uid=P.substring(o+7)}else{if(k>=0){f.oot=P.substring(k+7)}}}}try{if(!_atc.xcs){var I=O.ce("link");I.rel="stylesheet";I.type="text/css";I.href=_atr+"static/r07/widget26.css";I.media="all";O.gn("head")[0].appendChild(I)}}catch(N){}var H=O.gn("script"),z=H[H.length-1],B=z.src.indexOf("#")>-1?z.src.replace(/^[^\#]+\#?/,""):z.src.replace(/^[^\?]+\??/,""),C=g(B);if(C.pub){u.addthis_pub=_duc(C.pub)}else{if(C.username){u.addthis_pub=_duc(C.username)}}if(u.addthis_pub&&u.addthis_config){u.addthis_config.username=u.addthis_pub}if(C.domready){_atc.dr=1}try{if(_atc.ver===120){var G="atb"+u._ate.cuid();O.write('<span id="'+G+'"></span>');u._ate.igv();u._ate.lad(["span",G,addthis_share.url||"[url]",addthis_share.title||"[title]"])}if(u.addthis_clickout){f.lad(["cout"])}}catch(N){}})();function addthis_open(b,f,e,c,d,a){if(typeof d=="string"){d=null}return _ate.ao(b,f,e,c,d,a)}function addthis_close(){_ate.ac()}function addthis_sendto(b,c,a){_ate.as(b,c,a);return false}if(_atc.dr){_adr.onReady()}}else{_ate.inst++}if(_atc.abf){addthis_open(document.getElementById("ab"),"emailab",window.addthis_url||"[URL]",window.addthis_title||"[TITLE]")};