




/*

*/
(function(){var g=void 0,h=!0,i=null,j=!1,aa=encodeURIComponent,ba=Infinity,ca=setTimeout,da=decodeURIComponent,k=Math;function ea(a,b){return a.onload=b}function fa(a,b){return a.name=b}
var m="push",ga="slice",ha="replace",ia="load",ja="floor",n="charAt",ka="value",p="indexOf",la="match",q="name",ma="host",t="toString",u="length",v="prototype",na="clientWidth",w="split",pa="stopPropagation",qa="scope",x="location",y="getString",ra="clientHeight",sa="href",z="substring",ta="navigator",A="join",C="toLowerCase",D;function ua(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function E(a,b){return g==a||"-"==a&&!b||""==a}function va(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[p](a[n](0));)a=a[z](1);for(;a&&-1<" \n\r\t"[p](a[n](a[u]-1));)a=a[z](0,a[u]-1);return a}function wa(a){var b=1,c=0,d;if(!E(a)){b=0;for(d=a[u]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b}
function xa(){return k.round(2147483647*k.random())}function ya(){}function za(a,b){if(aa instanceof Function)return b?encodeURI(a):aa(a);F(68);return escape(a)}function G(a){a=a[w]("+")[A](" ");if(da instanceof Function)try{return da(a)}catch(b){F(17)}else F(68);return unescape(a)}
var Aa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ba=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};function H(a){return a&&0<a[u]?a[0]:""}function Ca(a){var b=a?a[u]:0;return 0<b?a[b-1]:""}var Da=function(){this.prefix="ga.";this.I={}};Da[v].set=function(a,b){this.I[this.prefix+a]=b};Da[v].get=function(a){return this.I[this.prefix+a]};
Da[v].contains=function(a){return this.get(a)!==g};function Ea(a){0==a[p]("www.")&&(a=a[z](4));return a[C]()}function Fa(a,b){var c,d={url:a,protocol:"http",host:"",path:"",d:new Da,anchor:""};if(!a)return d;c=a[p]("://");0<=c&&(d.protocol=a[z](0,c),a=a[z](c+3));c=a.search("/|\\?|#");if(0<=c)d.host=a[z](0,c)[C](),a=a[z](c);else return d.host=a[C](),d;c=a[p]("#");0<=c&&(d.anchor=a[z](c+1),a=a[z](0,c));c=a[p]("?");0<=c&&(Ga(d.d,a[z](c+1)),a=a[z](0,c));d.anchor&&b&&Ga(d.d,d.anchor);a&&"/"==a[n](0)&&(a=a[z](1));d.path=a;return d}
function Ga(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[m](c)}for(var d=va(b)[w]("&"),e=0;e<d[u];e++)if(d[e]){var f=d[e][p]("=");0>f?c(d[e],"1"):c(d[e][z](0,f),d[e][z](f+1))}}function Ha(a,b){if(E(a)||"["==a[n](0)&&"]"==a[n](a[u]-1))return"-";var c=I.domain;return a[p](c+(b&&"/"!=b?b:""))==(0==a[p]("http://")?7:0==a[p]("https://")?8:0)?"0":a};var Ia=0;function Ja(a,b,c){!(1<=Ia)&&!(1<=100*k.random())&&(a=["utmt=error","utmerr="+a,"utmwv=5.2.5","utmn="+xa(),"utmsp=1"],b&&a[m]("api="+b),c&&a[m]("msg="+za(c[z](0,100))),J.q&&a[m]("aip=1"),Ka(a[A]("&")),Ia++)};var La=0,Ma={};function K(a){return Na("x"+La++,a)}function Na(a,b){Ma[a]=!!b;return a}
var Oa=K(),Pa=K(),Qa=K(),Ra=K(),Sa=K(),L=K(),M=K(),Ta=K(),Ua=K(),Va=K(),Wa=K(),Xa=K(),Ya=K(),Za=K(),$a=K(),ab=K(),bb=K(),cb=K(),db=K(),eb=K(),fb=K(),gb=K(),hb=K(),ib=K(),jb=K(),kb=K(),lb=K(),mb=K(),nb=K(),ob=K(),pb=K(),qb=K(),rb=K(),sb=K(),tb=K(),N=K(h),ub=Na("page"),vb=Na("title"),wb=K(),xb=K(),yb=K(),zb=K(),Ab=K(),Bb=K(),Cb=K(),Db=K(),O=K(h),Eb=K(h),Fb=K(h),Hb=K(h),Ib=K(h),Jb=K(h),Kb=K(h),Lb=K(h),Mb=K(h),Nb=K(h),Ob=K(h),P=K(h),Pb=K(h),Qb=K(h),Rb=K(h),Sb=K(h),Tb=K(h),Ub=K(h),Vb=K(h),Wb=K(h),Xb=K(h),
Yb=K(h),Zb=K(h),$b=K(h),ac=K(h),bc=Na("campaignParams"),cc=K(),dc=Na("hitCallback"),ec=K();K();var fc=K(),gc=K(),hc=K(),ic=K(),jc=K(),kc=K(),lc=K(),mc=K(),nc=K(),rc=K(),sc=K();K();var tc=K(),uc=K(),vc=K();var wc=function(){function a(a,c,d){Q(R[v],a,c,d)}S("_getName",Qa,58);S("_getAccount",Oa,64);S("_visitCode",O,54);S("_getClientInfo",Za,53,1);S("_getDetectTitle",bb,56,1);S("_getDetectFlash",$a,65,1);S("_getLocalGifPath",lb,57);S("_getServiceMode",mb,59);T("_setClientInfo",Za,66,2);T("_setAccount",Oa,3);T("_setNamespace",Pa,48);T("_setAllowLinker",Wa,11,2);T("_setDetectFlash",$a,61,2);T("_setDetectTitle",bb,62,2);T("_setLocalGifPath",lb,46,0);T("_setLocalServerMode",mb,92,g,0);T("_setRemoteServerMode",
mb,63,g,1);T("_setLocalRemoteServerMode",mb,47,g,2);T("_setSampleRate",kb,45,1);T("_setCampaignTrack",ab,36,2);T("_setAllowAnchor",Xa,7,2);T("_setCampNameKey",db,41);T("_setCampContentKey",ib,38);T("_setCampIdKey",cb,39);T("_setCampMediumKey",gb,40);T("_setCampNOKey",jb,42);T("_setCampSourceKey",fb,43);T("_setCampTermKey",hb,44);T("_setCampCIdKey",eb,37);T("_setCookiePath",M,9,0);T("_setMaxCustomVariables",nb,0,1);T("_setVisitorCookieTimeout",Ta,28,1);T("_setSessionCookieTimeout",Ua,26,1);T("_setCampaignCookieTimeout",
Va,29,1);T("_setReferrerOverride",wb,49);T("_setSiteSpeedSampleRate",nc,132);a("_trackPageview",R[v].oa,1);a("_trackEvent",R[v].v,4);a("_trackPageLoadTime",R[v].na,100);a("_trackSocial",R[v].pa,104);a("_trackTrans",R[v].qa,18);a("_sendXEvent",R[v].u,78);a("_createEventTracker",R[v].W,74);a("_getVersion",R[v].aa,60);a("_setDomainName",R[v].t,6);a("_setAllowHash",R[v].fa,8);a("_getLinkerUrl",R[v].$,52);a("_link",R[v].link,101);a("_linkByPost",R[v].ea,102);a("_setTrans",R[v].ia,20);a("_addTrans",R[v].P,
21);a("_addItem",R[v].N,19);a("_setTransactionDelim",R[v].ja,82);a("_setCustomVar",R[v].ga,10);a("_deleteCustomVar",R[v].Y,35);a("_getVisitorCustomVar",R[v].ba,50);a("_setXKey",R[v].la,83);a("_setXValue",R[v].ma,84);a("_getXKey",R[v].ca,76);a("_getXValue",R[v].da,77);a("_clearXKey",R[v].T,72);a("_clearXValue",R[v].U,73);a("_createXObj",R[v].X,75);a("_addIgnoredOrganic",R[v].L,15);a("_clearIgnoredOrganic",R[v].Q,97);a("_addIgnoredRef",R[v].M,31);a("_clearIgnoredRef",R[v].R,32);a("_addOrganic",R[v].O,
14);a("_clearOrganic",R[v].S,70);a("_cookiePathCopy",R[v].V,30);a("_get",R[v].Z,106);a("_set",R[v].ha,107);a("_addEventListener",R[v].addEventListener,108);a("_removeEventListener",R[v].removeEventListener,109);a("_addDevId",R[v].K);a("_initData",R[v].m,2);a("_setVar",R[v].ka,22);T("_setSessionTimeout",Ua,27,3);T("_setCookieTimeout",Va,25,3);T("_setCookiePersistence",Ta,24,1);a("_setAutoTrackOutbound",ya,79);a("_setTrackOutboundSubdomains",ya,81);a("_setHrefExamineLimit",ya,80)},Q=function(a,b,c,
d){a[b]=function(){try{return d!=g&&F(d),c.apply(this,arguments)}catch(a){throw Ja("exc",b,a&&a[q]),a;}}},S=function(a,b,c,d){R[v][a]=function(){try{return F(c),ua(this.a.get(b),d)}catch(e){throw Ja("exc",a,e&&e[q]),e;}}},T=function(a,b,c,d,e){R[v][a]=function(f){try{F(c),e==g?this.a.set(b,ua(f,d)):this.a.set(b,e)}catch(l){throw Ja("exc",a,l&&l[q]),l;}}},xc=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted";}}};var yc=function(a,b){return"/"!==b?j:(0==a[p]("www.google.")||0==a[p](".google.")||0==a[p]("google."))&&!(-1<a[p]("google.org"))?h:j},zc=function(a){var b=a.get(Sa),c=a[y](M,"/");yc(b,c)&&a[pa]()};var Ec=function(){var a={},b={},c=new Ac;this.g=function(a,b){c.add(a,b)};var d=new Ac;this.c=function(a,b){d.add(a,b)};var e=j,f=j,l=h;this.J=function(){e=h};this.f=function(a){this[ia]();this.set(cc,a,h);a=new Bc(this);e=j;d.execute(this);e=h;b={};this.i();a.ra()};this.load=function(){e&&(e=j,this.ta(),Cc(this),f||(f=h,c.execute(this),Dc(this),Cc(this)),e=h)};this.i=function(){if(e)if(f)e=j,Dc(this),e=h;else this[ia]()};this.get=function(c){Ma[c]&&this[ia]();return b[c]!==g?b[c]:a[c]};this.set=
function(c,d,e){Ma[c]&&this[ia]();e?b[c]=d:a[c]=d;Ma[c]&&this.i()};this.n=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||""===c?b:1*c};this.getString=function(a,b){var c=this.get(a);return c==g?b:c+""};this.ta=function(){if(l){var b=this[y](Sa,""),c=this[y](M,"/");yc(b,c)||(a[L]=a[Ya]&&""!=b?wa(b):1,l=j)}}};Ec[v].stopPropagation=function(){throw"aborted";};
var Bc=function(a){var b=this;this.j=0;var c=a.get(dc);this.Ba=function(){0<b.j&&c&&(b.j--,b.j||c())};this.ra=function(){!b.j&&c&&ca(c,10)};a.set(ec,b,h)};function Fc(a,b){for(var b=b||[],c=0;c<b[u];c++){var d=b[c];if(""+a==d||0==d[p](a+"."))return d}return"-"}
var Hc=function(a,b,c){c=c?"":a[y](L,"1");b=b[w](".");if(6!==b[u]||Gc(b[0],c))return j;var c=1*b[1],d=1*b[2],e=1*b[3],f=1*b[4],b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return F(110),j;a.set(O,c);a.set(Ib,d);a.set(Jb,e);a.set(Kb,f);a.set(Lb,b);return h},Ic=function(a){var b=a.get(O),c=a.get(Ib),d=a.get(Jb),e=a.get(Kb),f=a.b(Lb,1);b==g?F(113):NaN==b&&F(114);0<=b&&0<c&&0<d&&0<e&&0<=f||F(115);return[a.b(L,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][A](".")},Jc=function(a){return[a.b(L,1),a.b(Ob,0),a.b(P,1),
a.b(Pb,0)][A](".")},Kc=function(a,b,c){var c=c?"":a[y](L,"1"),d=b[w](".");if(4!==d[u]||Gc(d[0],c))d=i;a.set(Ob,d?1*d[1]:0);a.set(P,d?1*d[2]:10);a.set(Pb,d?1*d[3]:a.get(Ra));return d!=i||!Gc(b,c)},Lc=function(a,b){var c=za(a[y](Fb,"")),d=[],e=a.get(N);if(!b&&e){for(var f=0;f<e[u];f++){var l=e[f];l&&1==l[qa]&&d[m](f+"="+za(l[q])+"="+za(l[ka])+"=1")}0<d[u]&&(c+="|"+d[A]("^"))}return c?a.b(L,1)+"."+c:i},Mc=function(a,b,c){c=c?"":a[y](L,"1");b=b[w](".");if(2>b[u]||Gc(b[0],c))return j;b=b[ga](1)[A](".")[w]("|");
0<b[u]&&a.set(Fb,G(b[0]));if(1>=b[u])return h;for(var c=b[1][w](-1==b[1][p](",")?"^":","),d=0;d<c[u];d++){var e=c[d][w]("=");if(4==e[u]){var f={};fa(f,G(e[1]));f.value=G(e[2]);f.scope=1;a.get(N)[e[0]]=f}}0<=b[1][p]("^")&&F(125);return h},Oc=function(a,b){var c=Nc(a,b);return c?[a.b(L,1),a.b(Qb,0),a.b(Rb,1),a.b(Sb,1),c][A]("."):""},Nc=function(a){function b(b,e){if(!E(a.get(b))){var f=a[y](b,""),f=f[w](" ")[A]("%20"),f=f[w]("+")[A]("%20");c[m](e+"="+f)}}var c=[];b(Ub,"utmcid");b(Yb,"utmcsr");b(Wb,
"utmgclid");b(Xb,"utmdclid");b(Vb,"utmccn");b(Zb,"utmcmd");b($b,"utmctr");b(ac,"utmcct");return c[A]("|")},Qc=function(a,b,c){c=c?"":a[y](L,"1");b=b[w](".");if(5>b[u]||Gc(b[0],c))return a.set(Qb,g),a.set(Rb,g),a.set(Sb,g),a.set(Ub,g),a.set(Vb,g),a.set(Yb,g),a.set(Zb,g),a.set($b,g),a.set(ac,g),a.set(Wb,g),a.set(Xb,g),j;a.set(Qb,1*b[1]);a.set(Rb,1*b[2]);a.set(Sb,1*b[3]);Pc(a,b[ga](4)[A]("."));return h},Pc=function(a,b){function c(a){return(a=b[la](a+"=(.*?)(?:\\|utm|$)"))&&2==a[u]?a[1]:g}function d(b,
c){c&&(c=e?G(c):c[w]("%20")[A](" "),a.set(b,c))}-1==b[p]("=")&&(b=G(b));var e="2"==c("utmcvr");d(Ub,c("utmcid"));d(Vb,c("utmccn"));d(Yb,c("utmcsr"));d(Zb,c("utmcmd"));d($b,c("utmctr"));d(ac,c("utmcct"));d(Wb,c("utmgclid"));d(Xb,c("utmdclid"))},Gc=function(a,b){return b?a!=b:!/^\d+$/.test(a)};var Ac=function(){this.s=[]};Ac[v].add=function(a,b){this.s[m]({name:a,Fa:b})};Ac[v].execute=function(a){try{for(var b=0;b<this.s[u];b++)this.s[b].Fa.call(U,a)}catch(c){}};function Rc(a){100!=a.get(kb)&&a.get(O)%1E4>=100*a.get(kb)&&a[pa]()}function Sc(a){Tc()&&a[pa]()}function Uc(a){"file:"==I[x].protocol&&a[pa]()}function Vc(a){a.get(vb)||a.set(vb,I.title,h);a.get(ub)||a.set(ub,I[x].pathname+I[x].search,h)};var Wc=new function(){var a=[];this.set=function(b){a[b]=h};this.Ga=function(){for(var b=[],c=0;c<a[u];c++)a[c]&&(b[k[ja](c/6)]=b[k[ja](c/6)]^1<<c%6);for(c=0;c<b[u];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[n](b[c]||0);return b[A]("")+"~"}};function F(a){Wc.set(a)};var U=window,I=document,Tc=function(){var a=U._gaUserPrefs;return a&&a.ioo&&a.ioo()},Xc=function(a,b){ca(a,b)},V=function(a){for(var b=[],c=I.cookie[w](";"),a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),d=0;d<c[u];d++){var e=c[d][la](a);e&&b[m](e[1])}return b},W=function(a,b,c,d,e){var f;f=Tc()?j:yc(d,c)?j:h;if(f){if(b&&0<=U[ta].userAgent[p]("Firefox")){b=b[ha](/\n|\r/g," ");f=0;for(var l=b[u];f<l;++f){var o=b.charCodeAt(f)&255;if(10==o||13==o)b=b[z](0,f)+"?"+b[z](f+1)}}b&&2E3<b[u]&&(b=b[z](0,2E3),F(69));
a=a+"="+b+"; path="+c+"; ";e&&(a+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");d&&(a+="domain="+d+";");I.cookie=a}};var Yc,Zc,$c=function(){if(!Yc){var a={},b=U[ta],c=U.screen;a.H=c?c.width+"x"+c.height:"-";a.G=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[C]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=I.characterSet||I.charset||"-";try{var d=I.documentElement,e=I.body,f=e&&e[na]&&e[ra],b=[];d&&d[na]&&d[ra]&&("CSS1Compat"===I.compatMode||!f)?b=[d[na],d[ra]]:f&&(b=[e[na],e[ra]]);a.Ca=b[A]("x")}catch(l){F(135)}Yc=a}},ad=function(){$c();for(var a=Yc,b=U[ta],a=b.appName+b.version+
a.language+b.platform+b.userAgent+a.javaEnabled+a.H+a.G+(I.cookie?I.cookie:"")+(I.referrer?I.referrer:""),b=a[u],c=U.history[u];0<c;)a+=c--^b++;return wa(a)},bd=function(a){$c();var b=Yc;a.set(yb,b.H);a.set(zb,b.G);a.set(Cb,b.language);a.set(Db,b.characterSet);a.set(Ab,b.javaEnabled);a.set(vc,b.Ca);if(a.get(Za)&&a.get($a)){if(!(b=Zc)){var c,d,e;d="ShockwaveFlash";if((b=(b=U[ta])?b.plugins:g)&&0<b[u])for(c=0;c<b[u]&&!e;c++)d=b[c],-1<d[q][p]("Shockwave Flash")&&(e=d.description[w]("Shockwave Flash ")[1]);
else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(l){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(o){}e&&(e=e[w](" ")[1][w](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}Zc=b;a.set(Bb,Zc)}else a.set(Bb,"-")};var X=function(){Q(X[v],"push",X[v][m],5);Q(X[v],"_createAsyncTracker",X[v].Da,33);Q(X[v],"_getAsyncTracker",X[v].Ea,34);this.r=0};X[v].Da=function(a,b){return J.l(a,b||"")};X[v].Ea=function(a){return J.p(a)};X[v].push=function(a){0<this.r&&F(105);this.r++;for(var b=arguments,c=0,d=0;d<b[u];d++)try{if("function"===typeof b[d])b[d]();else{var e="",f=b[d][0],l=f.lastIndexOf(".");0<l&&(e=f[z](0,l),f=f[z](l+1));var o="_gat"==e?J:"_gaq"==e?cd:J.p(e);o[f].apply(o,b[d][ga](1))}}catch(r){c++}this.r--;return c};var gd=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=h,d;for(d=0;d<l[u];d++)if(g!=f[a][l[d]]){c=j;break}c&&(f[a]=g)}}function d(a){var b="",c=j,d,e;for(d=0;d<l[u];d++)if(e=a[l[d]],g!=e){c&&(b+=l[d]);for(var c=[],f=g,Y=g,Y=0;Y<e[u];Y++)if(g!=e[Y]){f="";Y!=Z&&g==e[Y-1]&&(f+=Y[t]()+oa);for(var ed=e[Y],oc="",Gb=g,pc=g,qc=g,Gb=0;Gb<ed[u];Gb++)pc=ed[n](Gb),
qc=B[pc],oc+=g!=qc?qc:pc;f+=oc;c[m](f)}b+=o+c[A](s)+r;c=j}else c=h;return b}var e=this,f=[],l=["k","v"],o="(",r=")",s="*",oa="!",B={"'":"'0"};B[r]="'1";B[s]="'2";B[oa]="'3";var Z=1;e.wa=function(a){return g!=f[a]};e.o=function(){for(var a="",b=0;b<f[u];b++)g!=f[b]&&(a+=b[t]()+d(f[b]));return a};e.va=function(a){if(a==g)return e.o();for(var b=a.o(),c=0;c<f[u];c++)g!=f[c]&&!a.wa(c)&&(b+=c[t]()+d(f[c]));return b};e.e=function(b,c,d){if(!dd(d))return j;a(b,"k",c,d);return h};e.k=function(b,c,d){if(!fd(d))return j;
a(b,"v",c,d[t]());return h};e.getKey=function(a,c){return b(a,"k",c)};e.C=function(a,c){return b(a,"v",c)};e.A=function(a){c(a,"k")};e.B=function(a){c(a,"v")};Q(e,"_setKey",e.e,89);Q(e,"_setValue",e.k,90);Q(e,"_getKey",e.getKey,87);Q(e,"_getValue",e.C,88);Q(e,"_clearKey",e.A,85);Q(e,"_clearValue",e.B,86)};function dd(a){return"string"==typeof a}function fd(a){return"number"!=typeof a&&(g==Number||!(a instanceof Number))||k.round(a)!=a||NaN==a||a==ba?j:h};var hd=function(a){var b=U.gaGlobal;a&&!b&&(U.gaGlobal=b={});return b},id=function(){var a=hd(h).hid;a==i&&(a=xa(),hd(h).hid=a);return a},jd=function(a){a.set(xb,id());var b=hd();if(b&&b.dh==a.get(L)){var c=b.sid;c&&("0"==c&&F(112),a.set(Kb,c),a.get(Eb)&&a.set(Jb,c));b=b.vid;a.get(Eb)&&b&&(b=b[w]("."),1*b[1]||F(112),a.set(O,1*b[0]),a.set(Ib,1*b[1]))}};var kd,ld=function(a,b,c){var d=a[y](Sa,""),e=a[y](M,"/"),a=a.b(Ta,0);W(b,c,e,d,a)},Dc=function(a){var b=a[y](Sa,"");a.b(L,1);var c=a[y](M,"/");W("__utma",Ic(a),c,b,a.get(Ta));W("__utmb",Jc(a),c,b,a.get(Ua));W("__utmc",""+a.b(L,1),c,b);var d=Oc(a,h);d?W("__utmz",d,c,b,a.get(Va)):W("__utmz","",c,b,-1);(d=Lc(a,j))?W("__utmv",d,c,b,a.get(Ta)):W("__utmv","",c,b,-1)},Cc=function(a){var b=a.b(L,1);if(!Hc(a,Fc(b,V("__utma"))))return a.set(Hb,h),j;var c=!Kc(a,Fc(b,V("__utmb")));a.set(Nb,c);Qc(a,Fc(b,V("__utmz")));
Mc(a,Fc(b,V("__utmv")));kd=!c;return h},md=function(a){kd||0<V("__utmb")[u]||(W("__utmd","1",a[y](M,"/"),a[y](Sa,""),1E4),0==V("__utmd")[u]&&a[pa]())};var pd=function(a){a.get(O)==g?nd(a):a.get(Hb)&&!a.get(tc)?nd(a):a.get(Nb)&&od(a)},qd=function(a){a.get(Tb)&&!a.get(Mb)&&(od(a),a.set(Rb,a.get(Lb)))},nd=function(a){var b=a.get(Ra);a.set(Eb,h);a.set(O,xa()^ad(a)&2147483647);a.set(Fb,"");a.set(Ib,b);a.set(Jb,b);a.set(Kb,b);a.set(Lb,1);a.set(Mb,h);a.set(Ob,0);a.set(P,10);a.set(Pb,b);a.set(N,[]);a.set(Hb,j);a.set(Nb,j)},od=function(a){a.set(Jb,a.get(Kb));a.set(Kb,a.get(Ra));a.n(Lb);a.set(Mb,h);a.set(Ob,0);a.set(P,10);a.set(Pb,a.get(Ra));a.set(Nb,j)};var rd="daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,rakuten:qt,biglobe:q,goo.ne:MT,wp:szukaj,onet:qt,yam:k,kvasir:q,ozu:q,terra:query,rambler:query,conduit:q,babylon:q,search-results:q,avg:q,comcast:q,incredimail:q,startsiden:q".split(","),xd=function(a){if(a.get(ab)&&!a.get(tc)){for(var b=
!E(a.get(Ub))||!E(a.get(Yb))||!E(a.get(Wb))||!E(a.get(Xb)),c={},d=0;d<sd[u];d++){var e=sd[d];c[e]=a.get(e)}(d=a.get(bc))?(F(149),e=new Da,Ga(e,d),d=e):d=Fa(I[x][sa],a.get(Xa)).d;if(!("1"==Ca(d.get(a.get(jb)))&&b)&&(d=td(a,d)||ud(a),!d&&!b&&a.get(Mb)&&(vd(a,g,"(direct)",g,g,"(direct)","(none)",g,g),d=h),d&&(a.set(Tb,wd(a,c)),b="(direct)"==a.get(Yb)&&"(direct)"==a.get(Vb)&&"(none)"==a.get(Zb),a.get(Tb)||a.get(Mb)&&!b)))a.set(Qb,a.get(Ra)),a.set(Rb,a.get(Lb)),a.n(Sb)}},td=function(a,b){function c(c,
d){var d=d||"-",e=Ca(b.get(a.get(c)));return e&&"-"!=e?G(e):d}var d=Ca(b.get(a.get(cb)))||"-",e=Ca(b.get(a.get(fb)))||"-",f=Ca(b.get(a.get(eb)))||"-",l=Ca(b.get("dclid"))||"-",o=c(db,"(not set)"),r=c(gb,"(not set)"),s=c(hb),oa=c(ib);if(E(d)&&E(f)&&E(l)&&E(e))return j;if(E(s)){var B=Ha(a.get(wb),a.get(M)),B=Fa(B,h);(B=yd(a,B))&&!E(B[1]&&!B[2])&&(s=B[1])}vd(a,d,e,f,l,o,r,s,oa);return h},ud=function(a){var b=Ha(a.get(wb),a.get(M)),c=Fa(b,h);if(!(b!=g&&b!=i&&""!=b&&"0"!=b&&"-"!=b&&0<=b[p]("://"))||c&&
-1<c[ma][p]("google")&&c.d.contains("q")&&"cse"==c.path)return j;if((b=yd(a,c))&&!b[2])return vd(a,g,b[0],g,g,"(organic)","organic",b[1],g),h;if(b)return j;if(a.get(Mb))a:{for(var b=a.get(qb),d=Ea(c[ma]),e=0;e<b[u];++e)if(-1<d[p](b[e])){a=j;break a}vd(a,g,d,g,g,"(referral)","referral",g,"/"+c.path);a=h}else a=j;return a},yd=function(a,b){for(var c=a.get(ob),d=0;d<c[u];++d){var e=c[d][w](":");if(-1<b[ma][p](e[0][C]())){var f=b.d.get(e[1]);if(f&&(f=H(f),!f&&-1<b[ma][p]("google.")&&(f="(not provided)"),
!e[3]||-1<b.url[p](e[3]))){a:{for(var c=f,d=a.get(pb),c=G(c)[C](),l=0;l<d[u];++l)if(c==d[l]){c=h;break a}c=j}return[e[2]||e[0],f,c]}}}return i},vd=function(a,b,c,d,e,f,l,o,r){a.set(Ub,b);a.set(Yb,c);a.set(Wb,d);a.set(Xb,e);a.set(Vb,f);a.set(Zb,l);a.set($b,o);a.set(ac,r)},sd=[Vb,Ub,Wb,Xb,Yb,Zb,$b,ac],wd=function(a,b){function c(a){a=(""+a)[w]("+")[A]("%20");return a=a[w](" ")[A]("%20")}function d(c){var d=""+(a.get(c)||""),c=""+(b[c]||"");return 0<d[u]&&d==c}if(d(Wb)||d(Xb))return F(131),j;for(var e=
0;e<sd[u];e++){var f=sd[e],l=b[f]||"-",f=a.get(f)||"-";if(c(l)!=c(f))return h}return j};var Ad=function(a){zd(a,I[x][sa])?(a.set(tc,h),F(12)):a.set(tc,j)},zd=function(a,b){if(!a.get(Wa))return j;var c=Fa(b,a.get(Xa)),d=H(c.d.get("__utma")),e=H(c.d.get("__utmb")),f=H(c.d.get("__utmc")),l=H(c.d.get("__utmx")),o=H(c.d.get("__utmz")),r=H(c.d.get("__utmv")),c=H(c.d.get("__utmk"));if(wa(""+d+e+f+l+o+r)!=c){d=G(d);e=G(e);f=G(f);l=G(l);a:{for(var f=d+e+f+l,s=0;3>s;s++){for(var oa=0;3>oa;oa++){if(c==wa(f+o+r)){F(127);c=[o,r];break a}var B=o[ha](/ /g,"%20"),Z=r[ha](/ /g,"%20");if(c==wa(f+B+Z)){F(128);
c=[B,Z];break a}B=B[ha](/\+/g,"%20");Z=Z[ha](/\+/g,"%20");if(c==wa(f+B+Z)){F(129);c=[B,Z];break a}o=G(o)}r=G(r)}c=g}if(!c)return j;o=c[0];r=c[1]}if(!Hc(a,d,h))return j;Kc(a,e,h);Qc(a,o,h);Mc(a,r,h);Bd(a,l,h);return h},Dd=function(a,b,c){var d;d=Ic(a)||"-";var e=Jc(a)||"-",f=""+a.b(L,1)||"-",l=Cd(a)||"-",o=Oc(a,j)||"-",a=Lc(a,j)||"-",r=wa(""+d+e+f+l+o+a),s=[];s[m]("__utma="+d);s[m]("__utmb="+e);s[m]("__utmc="+f);s[m]("__utmx="+l);s[m]("__utmz="+o);s[m]("__utmv="+a);s[m]("__utmk="+r);d=s[A]("&");if(!d)return b;
e=b[p]("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b[p]("?");0<e&&(c=b[z](e),b=b[z](0,e));return 0>f?b+"?"+d+c:b+"&"+d+c};var Ed="|",Gd=function(a,b,c,d,e,f,l,o,r){var s=Fd(a,b);s||(s={},a.get(rb)[m](s));s.id_=b;s.affiliation_=c;s.total_=d;s.tax_=e;s.shipping_=f;s.city_=l;s.state_=o;s.country_=r;s.items_=s.items_||[];return s},Hd=function(a,b,c,d,e,f,l){var a=Fd(a,b)||Gd(a,b,"",0,0,0,"","",""),o;a:{if(a&&a.items_){o=a.items_;for(var r=0;r<o[u];r++)if(o[r].sku_==c){o=o[r];break a}}o=i}r=o||{};r.transId_=b;r.sku_=c;r.name_=d;r.category_=e;r.price_=f;r.quantity_=l;o||a.items_[m](r);return r},Fd=function(a,b){for(var c=
a.get(rb),d=0;d<c[u];d++)if(c[d].id_==b)return c[d];return i};var Id,Jd=function(a){if(!Id){var b;b=I[x].hash;var c=U[q],d=/^#?gaso=([^&]*)/;if(c=(b=(b=b&&b[la](d)||c&&c[la](d))?b[1]:H(V("GASO")))&&b[la](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i))if(ld(a,"GASO",""+b),J._gasoDomain=a.get(Sa),J._gasoCPath=a.get(M),a=c[1],b="/web/20120315140828/https://www.google.com/analytics/web/inpage/s/inpage.js?"+(a?"prefix="+a+"&":"")+xa())a=I.createElement("script"),a.type="text/javascript",a.async=h,a.src=b,a.id="_gasojs",ea(a,g),b=I.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,
b);Id=h}};var Bd=function(a,b,c){c&&(b=G(b));c=a.b(L,1);b=b[w](".");!(2>b[u])&&/^\d+$/.test(b[0])&&(b[0]=""+c,ld(a,"__utmx",b[A](".")))},Cd=function(a,b){var c=Fc(a.get(L),V("__utmx"));"-"==c&&(c="");return b?za(c):c};var Od=function(a,b){var c=k.min(a.b(nc,0),100);if(a.b(O,0)%100>=c)return j;c=Kd()||Ld();if(c==g)return j;var d=c[0];if(d==g||d==ba||isNaN(d))return j;0<d?Md(c)?b(Nd(c)):b(Nd(c[ga](0,1))):Aa(U,"load",function(){Od(a,b)},j);return h},Md=function(a){for(var b=1;b<a[u];b++)if(isNaN(a[b])||a[b]==ba||0>a[b])return j;return h},Nd=function(a){for(var b=new gd,c=0;c<a[u];c++)b.e(14,c+1,(isNaN(a[c])||0>a[c]?0:5E3>a[c]?10*k[ja](a[c]/10):45E4>a[c]?100*k[ja](a[c]/100):45E4)+""),b.k(14,c+1,a[c]);return b},Kd=
function(){var a=U.performance||U.webkitPerformance;if(a=a&&a.timing){var b=a.navigationStart;if(0==b)F(133);else return[a.loadEventStart-b,a.domainLookupEnd-a.domainLookupStart,a.connectEnd-a.connectStart,a.responseStart-a.requestStart,a.responseEnd-a.responseStart,a.fetchStart-b]}},Ld=function(){if(U.top==U){var a=U.external,b=a&&a.onloadT;a&&!a.isValidLoadTime&&(b=g);2147483648<b&&(b=g);0<b&&a.setPageReadyTime();return b==g?g:[b]}};var R=function(a,b,c){function d(a){return function(b){if((b=b.get(uc)[a])&&b[u])for(var c=xc(e,a),d=0;d<b[u];d++)b[d].call(e,c)}}var e=this;this.a=new Ec;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(Oa,b||"UA-XXXXX-X");this.set(Qa,a||"");this.set(Pa,c||"");this.set(Ra,k.round((new Date).getTime()/1E3));this.set(M,"/");this.set(Ta,63072E6);this.set(Va,15768E6);this.set(Ua,18E5);this.set(Wa,j);this.set(nb,50);this.set(Xa,j);this.set(Ya,h);this.set(Za,
h);this.set($a,h);this.set(ab,h);this.set(bb,h);this.set(db,"utm_campaign");this.set(cb,"utm_id");this.set(eb,"gclid");this.set(fb,"utm_source");this.set(gb,"utm_medium");this.set(hb,"utm_term");this.set(ib,"utm_content");this.set(jb,"utm_nooverride");this.set(kb,100);this.set(nc,1);this.set(rc,j);this.set(lb,"/__utm.gif");this.set(mb,1);this.set(rb,[]);this.set(N,[]);this.set(ob,rd[ga](0));this.set(pb,[]);this.set(qb,[]);this.t("auto");this.set(wb,this.sa());this.set(uc,{hit:[],load:[]});this.a.g("0",
Ad);this.a.g("1",pd);this.a.g("2",xd);this.a.g("3",qd);this.a.g("4",d("load"));this.a.g("5",Jd);this.a.c("A",Sc);this.a.c("B",Uc);this.a.c("C",pd);this.a.c("D",Rc);this.a.c("E",zc);this.a.c("F",Pd);this.a.c("G",md);this.a.c("H",Vc);this.a.c("I",bd);this.a.c("J",jd);this.a.c("K",d("hit"));this.a.c("L",Qd);this.a.c("M",Rd);0===this.get(Ra)&&F(111);this.a.J();this.w=g};D=R[v];D.h=function(){var a=this.get(sb);a||(a=new gd,this.set(sb,a));return a};
D.ua=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,h)}};D.z=function(a){if(this.get(rc))return j;var b=this,c=Od(this.a,function(c){b.set(ub,a,h);b.u(c)});this.set(rc,c);return c};D.oa=function(a){a&&a!=g&&-1<(a.constructor+"")[p]("String")?(F(13),this.set(ub,a,h)):"object"===typeof a&&a!==i&&this.ua(a);this.w=a=this.get(ub);1>=1E3*k.random()&&(F(137),U.ga_disable_tracking!==g&&F(147),U.ga_disabled!==g&&F(148));this.a.f("page");this.z(a)};
D.v=function(a,b,c,d,e){if(""==a||!dd(a)||""==b||!dd(b)||c!=g&&!dd(c)||d!=g&&!fd(d))return j;this.set(gc,a,h);this.set(hc,b,h);this.set(ic,c,h);this.set(jc,d,h);this.set(fc,!!e,h);this.a.f("event");return h};D.pa=function(a,b,c,d){if(!a||!b)return j;this.set(kc,a,h);this.set(lc,b,h);this.set(mc,c||I[x][sa],h);d&&this.set(ub,d,h);this.a.f("social");return h};D.na=function(){this.set(nc,10);this.z(this.w)};D.qa=function(){this.a.f("trans")};D.u=function(a){this.set(tb,a,h);this.a.f("event")};
D.W=function(a){this.m();var b=this;return{_trackEvent:function(c,d,e){F(91);b.v(a,c,d,e)}}};D.Z=function(a){return this.get(a)};D.ha=function(a,b){if(a)if(a!=g&&-1<(a.constructor+"")[p]("String"))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};D.addEventListener=function(a,b){var c=this.get(uc)[a];c&&c[m](b)};D.removeEventListener=function(a,b){for(var c=this.get(uc)[a],d=0;c&&d<c[u];d++)if(c[d]==b){c.splice(d,1);break}};D.aa=function(){return"5.2.5"};
D.t=function(a){this.get(Ya);a="auto"==a?Ea(I.domain):!a||"-"==a||"none"==a?"":a[C]();this.set(Sa,a)};D.fa=function(a){this.set(Ya,!!a)};D.$=function(a,b){return Dd(this.a,a,b)};D.link=function(a,b){if(this.a.get(Wa)&&a){var c=Dd(this.a,a,b);I[x].href=c}};D.ea=function(a,b){this.a.get(Wa)&&a&&a.action&&(a.action=Dd(this.a,a.action,b))};
D.ia=function(){this.m();var a=this.a,b=I.getElementById?I.getElementById("utmtrans"):I.utmform&&I.utmform.utmtrans?I.utmform.utmtrans:i;if(b&&b[ka]){a.set(rb,[]);for(var b=b[ka][w]("UTM:"),c=0;c<b[u];c++){b[c]=va(b[c]);for(var d=b[c][w](Ed),e=0;e<d[u];e++)d[e]=va(d[e]);"T"==d[0]?Gd(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&Hd(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};D.P=function(a,b,c,d,e,f,l,o){return Gd(this.a,a,b,c,d,e,f,l,o)};D.N=function(a,b,c,d,e,f){return Hd(this.a,a,b,c,d,e,f)};
D.ja=function(a){Ed=a||"|"};D.ga=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(nb)||!b||!c||128<b[u]+c[u])a=j;else{1!=d&&2!=d&&(d=3);var f={};fa(f,b);f.value=c;f.scope=d;e.get(N)[a]=f;a=h}a&&this.a.i();return a};D.Y=function(a){this.a.get(N)[a]=g;this.a.i()};D.ba=function(a){return(a=this.a.get(N)[a])&&1==a[qa]?a[ka]:g};D.la=function(a,b,c){this.h().e(a,b,c)};D.ma=function(a,b,c){this.h().k(a,b,c)};D.ca=function(a,b){return this.h().getKey(a,b)};D.da=function(a,b){return this.h().C(a,b)};D.T=function(a){this.h().A(a)};
D.U=function(a){this.h().B(a)};D.X=function(){return new gd};D.L=function(a){a&&this.get(pb)[m](a[C]())};D.Q=function(){this.set(pb,[])};D.M=function(a){a&&this.get(qb)[m](a[C]())};D.R=function(){this.set(qb,[])};D.O=function(a,b,c,d,e){if(a&&b){a=[a,b[C]()][A](":");if(d||e)a=[a,d,e][A](":");d=this.get(ob);d.splice(c?0:d[u],0,a)}};D.S=function(){this.set(ob,[])};D.V=function(a){this.a[ia]();var b=this.get(M),c=Cd(this.a);this.set(M,a);this.a.i();Bd(this.a,c);this.set(M,b)};
D.K=function(a){a=""+a;if(a[la](/^[A-Za-z0-9]{1,5}$/)){var b=this.get(sc)||[];b[m](a);this.set(sc,b)}};D.sa=function(){var a="";try{var b=Fa(I[x][sa],j),a=da(Ca(b.d.get("utm_referrer")))||""}catch(c){F(146)}return a||I.referrer};D.m=function(){this.a[ia]()};D.ka=function(a){a&&""!=a&&(this.set(Fb,a),this.a.f("var"))};var Pd=function(a){"trans"!==a.get(cc)&&500<=a.b(Ob,0)&&a[pa]();if("event"===a.get(cc)){var b=(new Date).getTime(),c=a.b(Pb,0),d=a.b(Kb,0),c=k[ja](1*((b-(c!=d?c:1E3*c))/1E3));0<c&&(a.set(Pb,b),a.set(P,k.min(10,a.b(P,0)+c)));0>=a.b(P,0)&&a[pa]()}},Rd=function(a){"event"===a.get(cc)&&a.set(P,k.max(0,a.b(P,10)-1))};var Sd=function(){var a=[];this.add=function(b,c,d){d&&(c=za(""+c));a[m](b+"="+c)};this.toString=function(){return a[A]("&")}},Td=function(a,b){(b||2!=a.get(mb))&&a.n(Ob)},Ud=function(a,b){b.add("utmwv","5.2.5");b.add("utms",a.get(Ob));b.add("utmn",xa());var c=I[x].hostname;E(c)||b.add("utmhn",c,h);c=a.get(kb);100!=c&&b.add("utmsp",c,h)},Wd=function(a,b){b.add("utmac",va(a.get(Oa)));a.get(fc)&&b.add("utmni",1);var c=a.get(sc);c&&0<c[u]&&b.add("utmdid",c[A]("."));Vd(a,b);J.q&&b.add("aip",1);b.add("utmu",
Wc.Ga())},Vd=function(a,b){function c(a,b){b&&d[m](a+"="+b+";")}var d=[];c("__utma",Ic(a));c("__utmz",Oc(a,j));c("__utmv",Lc(a,h));c("__utmx",Cd(a));b.add("utmcc",d[A]("+"),h)},Xd=function(a,b){a.get(Za)&&(b.add("utmcs",a.get(Db),h),b.add("utmsr",a.get(yb)),a.get(vc)&&b.add("utmvp",a.get(vc)),b.add("utmsc",a.get(zb)),b.add("utmul",a.get(Cb)),b.add("utmje",a.get(Ab)),b.add("utmfl",a.get(Bb),h))},Yd=function(a,b){a.get(bb)&&a.get(vb)&&b.add("utmdt",a.get(vb),h);b.add("utmhid",a.get(xb));b.add("utmr",
Ha(a.get(wb),a.get(M)),h);b.add("utmp",za(a.get(ub),h),h)},Zd=function(a,b){for(var c=a.get(sb),d=a.get(tb),e=a.get(N)||[],f=0;f<e[u];f++){var l=e[f];l&&(c||(c=new gd),c.e(8,f,l[q]),c.e(9,f,l[ka]),3!=l[qa]&&c.e(11,f,""+l[qa]))}!E(a.get(gc))&&!E(a.get(hc),h)&&(c||(c=new gd),c.e(5,1,a.get(gc)),c.e(5,2,a.get(hc)),e=a.get(ic),e!=g&&c.e(5,3,e),e=a.get(jc),e!=g&&c.k(5,1,e));c?b.add("utme",c.va(d),h):d&&b.add("utme",d.o(),h)},$d=function(a,b,c){var d=new Sd;Td(a,c);Ud(a,d);d.add("utmt","tran");d.add("utmtid",
b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",b.total_,h);d.add("utmttx",b.tax_,h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);!c&&Wd(a,d);return d[t]()},ae=function(a,b,c){var d=new Sd;Td(a,c);Ud(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);!c&&Wd(a,d);return d[t]()},be=function(a,
b){var c=a.get(cc);if("page"==c)c=new Sd,Td(a,b),Ud(a,c),Zd(a,c),Xd(a,c),Yd(a,c),b||Wd(a,c),c=[c[t]()];else if("event"==c)c=new Sd,Td(a,b),Ud(a,c),c.add("utmt","event"),Zd(a,c),Xd(a,c),Yd(a,c),!b&&Wd(a,c),c=[c[t]()];else if("var"==c)c=new Sd,Td(a,b),Ud(a,c),c.add("utmt","var"),!b&&Wd(a,c),c=[c[t]()];else if("trans"==c)for(var c=[],d=a.get(rb),e=0;e<d[u];++e){c[m]($d(a,d[e],b));for(var f=d[e].items_,l=0;l<f[u];++l)c[m](ae(a,f[l],b))}else"social"==c?b?c=[]:(c=new Sd,Td(a,b),Ud(a,c),c.add("utmt","social"),
c.add("utmsn",a.get(kc),h),c.add("utmsa",a.get(lc),h),c.add("utmsid",a.get(mc),h),Zd(a,c),Xd(a,c),Yd(a,c),Wd(a,c),c=[c[t]()]):c=[];return c},Qd=function(a){var b,c=a.get(mb),d=a.get(ec),e=d&&d.Ba,f=0;if(0==c||2==c){var l=a.get(lb)+"?";b=be(a,h);for(var o=0,r=b[u];o<r;o++)Ka(b[o],e,l,h),f++}if(1==c||2==c){b=be(a);o=0;for(r=b[u];o<r;o++)try{Ka(b[o],e),f++}catch(s){s&&Ja(s[q],g,s.message)}}d&&(d.j=f)};var ce="https:"==I[x].protocol?"/web/20120315140828/https://ssl.google-analytics.com":"/web/20120315140828/http://www.google-analytics.com",de=function(a){fa(this,"len");this.message=a+"-8192"},ee=function(a){fa(this,"ff2post");this.message=a+"-2036"},Ka=function(a,b,c,d){b=b||ya;if(d||2036>=a[u])fe(a,b,c);else if(8192>=a[u]){if(0<=U[ta].userAgent[p]("Firefox")&&![].reduce)throw new ee(a[u]);ge(a,b)||he(a,b)}else throw new de(a[u]);},fe=function(a,b,c){var c=c||ce+"/__utm.gif?",d=new Image(1,1);d.src=c+a;ea(d,function(){ea(d,i);d.onerror=
i;b()});d.onerror=function(){ea(d,i);d.onerror=i;b()}},ge=function(a,b){var c,d=ce+"/p/__utm.gif",e=U.XDomainRequest;if(e)c=new e,c.open("POST",d);else if(e=U.XMLHttpRequest)e=new e,"withCredentials"in e&&(c=e,c.open("POST",d,h),c.setRequestHeader("Content-Type","text/plain"));if(c)return c.onreadystatechange=function(){4==c.readyState&&(b(),c=i)},c.send(a),h},he=function(a,b){if(I.body){a=aa(a);try{var c=I.createElement('<iframe name="'+a+'"></iframe>')}catch(d){c=I.createElement("iframe"),fa(c,
a)}c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var e=I[x],e=ce+"/u/post_iframe.html#"+aa(e.protocol+"//"+e[ma]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};Aa(U,"beforeunload",f);var l=j,o=0,r=function(){if(!l){try{if(9<o||c.contentWindow[x][ma]==I[x][ma]){l=h;f();Ba(U,"beforeunload",f);b();return}}catch(a){}o++;ca(r,200)}};Aa(c,"load",r);I.body.appendChild(c);c.src=e}else Xc(function(){he(a,b)},100)};var $=function(){this.q=j;this.D={};this.F=[];this.xa=0;this._gasoCPath=this._gasoDomain=g;Q($[v],"_createTracker",$[v].l,55);Q($[v],"_getTracker",$[v].za,0);Q($[v],"_getTrackerByName",$[v].p,51);Q($[v],"_getTrackers",$[v].Aa,130);Q($[v],"_anonymizeIp",$[v].ya,16);wc()};D=$[v];D.za=function(a,b){return this.l(a,g,b)};D.l=function(a,b,c){b&&F(23);c&&F(67);b==g&&(b="~"+J.xa++);a=new R(b,a,c);J.D[b]=a;J.F[m](a);return a};D.p=function(a){a=a||"";return J.D[a]||J.l(g,a)};D.Aa=function(){return J.F[ga](0)};
D.ya=function(){this.q=h};var ie=function(a){if("prerender"==I.webkitVisibilityState)return j;a();return h};var J=new $;var je=U._gat;je&&"function"==typeof je._getTracker?J=je:U._gat=J;var cd=new X;(function(a){if(!ie(a)){F(123);var b=j,c=function(){!b&&ie(a)&&(b=h,Ba(I,"webkitvisibilitychange",c))};Aa(I,"webkitvisibilitychange",c)}})(function(){var a=U._gaq,b=j;if(a&&"function"==typeof a[m]&&(b="[object Array]"==Object[v][t].call(Object(a)),!b)){cd=a;return}U._gaq=cd;b&&cd[m].apply(cd,a)});})();
