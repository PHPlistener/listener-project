(function(I){var d=I,f=document,A=d.location,C=d.performance;if(!d.TJ58){d.TJ58=!0;null==d.String.prototype.trim&&(d.String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")});d.TJ58Obj={};var e={curURL:A.href,referrer:f.referrer,protocol:A.protocol,window_size:f.documentElement.clientWidth+"x"+f.documentElement.clientHeight,screen_size:d.screen.width+","+d.screen.height,domain:function(){var b=A.host.toLowerCase(),a=/.*?([^\.]+\.(com|org|net|biz|edu|cc)(\.[^\.]+)?)/;
return a.test(b)?"."+b.replace(a,"$1"):""}(),navigation_type:function(){var b="-1";try{C&&C.navigation&&(b=C.navigation.type)}catch(a){return"-1"}return b}(),setCookie:function(){if(!f.cookie)return!1;var b=new Date;2<arguments.length?b.setTime(b.getTime()+864E5*arguments[2]):b.setTime(b.getTime()+18E5);2<=arguments.length&&(f.cookie=arguments[0]+"="+escape(arguments[1])+"; expires="+b.toGMTString()+"; domain="+e.domain+"; path=/")},getCookie:function(b){if(!f.cookie)return"";var a;return(a=f.cookie.match(RegExp("(^| )"+
b+"=([^;]*)(;|$)")))?unescape(a[2]):""},ajaxsend:function(b){(new Image).src=b},getGTID:function(b,a,c){function d(a,b,c){a=(""+a).length<b?(Array(b+1).join("0")+a).slice(-b):""+a;return-1==c?a:a.substring(0,c)+"-"+a.substring(c)}var e={home:"1",index:"2",list:"3",detail:"4",post:"5",special:"6"};b=e[b]?parseInt(e[b]).toString(16):0;a=a.split(",");a=a[a.length-1];a=parseInt(a)?parseInt(a).toString(16):0;c=c.split(",");c=c[c.length-1];c=parseInt(c)?parseInt(c).toString(16):0;e=(13).toString(16);return"llpccccc-tttt-txxx-xxxx-xxxxxxxxxxxx".replace(/x/g,
function(a){return(16*Math.random()|0).toString(16)}).replace(/ccccc/,d(a,5,-1)).replace(/tttt-t/,d(c,5,4)).replace(/p/,d(b,1,-1)).replace(/ll/,d(e,2,-1))},setLocalStorage:function(b,a){try{d.localStorage&&d.localStorage.setItem(b,a)}catch(c){}},getLocalStorage:function(b){try{return d.localStorage?d.localStorage.getItem(b):""}catch(a){return""}},getUUID:function(b){var a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*d.Math.random()|0;return("x"==a?b:b&3|8).toString(16)}),
a=this.getCookie(b)||this.getLocalStorage(b)||a;this.setCookie(b,a,365);this.setLocalStorage(b,a);return a},getRandom:function(){return d.Math.random()},bindElem:function(b,a,c,e,p){if(d.$&&"string"==typeof b&&"string"==typeof a&&"function"==typeof c)if("function"===typeof $(f).on)$(f).on(a,b,c);else"function"===typeof $(f).delegate?$(f).delegate(b,a,c):"function"===typeof $(b).bind&&$(b).bind(a,c)},loadScript:function(b,a){try{var c=f.createElement("script");c.type="text/javascript";c.readyState?
c.onreadystatechange=function(){if("loaded"==c.readyState||"complete"==c.readyState)c.onreadystatechange=null,a&&a()}:c.onload=function(){a&&a()};c.src=b;f.body.appendChild(c)}catch(d){}}},g={config:{trackLog:{server:"tracklog.58.com/pc/empty.js.gif",allParams:"site_name tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),uniqParams:["tag","rand_id"]},listShowLog:{server:"tracklog.58.com/PCv1/listshow/empty.js.gif",allParams:"tag bangbangid referrer site_name info_data trackURL rand_id".split(" "),
uniqParams:["tag","info_data","rand_id"]},listClickLog:{server:"tracklog.58.com/PCv1/listclick/empty.js.gif",allParams:"tag bangbangid referrer site_name info_data trackURL ClickID rand_id".split(" "),uniqParams:["tag","info_data","rand_id"]},clickLog:{server:"tracklog.58.com/pc/click/empty.js.gif",allParams:"site_name tag from trackURL ClickID bangbangid referrer rand".split(" "),uniqParams:["tag","from","rand"]},diaTrackLog:{server:"dialog.58.com/transfer",allParams:"DIATag tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),
uniqParams:["DIATag","tag","rand_id"]},diaClickLog:{server:"dialog.58.com/transfer",allParams:"DIATag from trackURL ClickID bangbangid referrer rand".split(" "),uniqParams:["DIATag","from","rand"]},diaShowLog:{server:"dialog.58.com/transfer",allParams:"DIATag trackURL ClickID bangbangid referrer rand".split(" "),uniqParams:["DIATag","rand"]},gdtTrackLog:{server:"gdt.cm.58.com/gdtcm",allParams:["city","cate","key","plat"],uniqParams:["city","key","plat"]},gdtTrackLog2:{server:"gdtcm.58.com/gdtcm",
allParams:["city","cate","key","plat"],uniqParams:["city","key","plat"]},actionLog:{server:"tracklog.58.com/PCv1/action/empty.js.gif",allParams:"site_name tag window_size action_data trackURL referrer rand_id".split(" "),uniqParams:["tag","action_data","rand_id"]}},filterList:function(b){var a=".58.com.cn portal.58.com faw-vw-dasweltauto.58.com 5858.com lieche.58.com dict.58.com/xiaoqu about.58.com m.58.com/city.html lieche.m.58.com".split(" "),c;for(c in a)if(-1!==b.indexOf(a[c]))return"YES";return"NO"},
getBaseInfo:function(){var b=d.site_name||"58",a=d.encodeURIComponent(e.referrer),c=e.curURL,n=e.getUUID("58tj_uuid"),p=e.getCookie("bangbangid"),h=e.window_size,l=e.navigation_type,m=e.screen_size,k=d.____json4fe?d.____json4fe:{},g=k._trackPagetype||"",f=k._trackURL||"",q=k._trackParams||[],J=k.GA_pageview||"",A=k.infoid||"",C=k.userid||"",O=k.smsc||"",k=k.sid||"",v=d._trackURL||f||"NA",t={};try{t="NA"===v?{}:eval("("+v+")")}catch(S){t={}}var g=t.pagetype||g||d.page_type||"NA",f=t.post_count||d.post_count||
-1,J=t.Ga_pageview||J||"",w=t.cate||"",P=""===w?"":w.split(",")[0],Q=""===w&&-1===w.indexOf(",")?"":w.split(",")[1],F=t.area||"",M=""===F?"":F.split(",")[0],N=e.getGTID(g,w,F),t=t.ROI||"",r=d._trackParams||q||[],x=[],q="";if(r instanceof Array){for(var q=0,K=r.length;q<K;q++)r[q]&&r[q].I&&r[q].V&&"string"===typeof r[q].V&&x.push(r[q].I+":"+r[q].V.replace(/\|/g,"*"));q=encodeURIComponent(x.join("@@"))}var x=(r=e.curURL.match(/[\?&]iuType=[a-z]*_[0-9]*/))?r[0].split("=")[1].split("_"):["",""],r=x[0],
x=x[1],K=e.getCookie("als"),D=e.getCookie("utm_source"),R=e.getCookie("utm_campaign"),E=e.getCookie("spm"),y,B,G;""!=e.getCookie("new_session")?(y=e.getCookie("init_refer"),B="0"):(y=d.encodeURIComponent(e.referrer),B="1");G=""!=e.getCookie("new_uv")?parseInt(e.getCookie("new_uv"))+("0"==B?0:1):1;e.setCookie("new_session",B);e.setCookie("new_uv",G,365);var z=e.referrer.split("/")[2]||"",s=this.getValByUrl(e.curURL,"utm_source"),u=this.getValByUrl(e.curURL,"spm");if(!e.referrer&&("NA"!=s||"NA"!=u))y=
"",D="NA"===s?"":s,E="NA"===u?"":u;else if(!e.referrer&&"NA"==s&&"NA"==u&&"1"===B)E=D=y="";else if(z){var L=!1;"cast.58.com"==z?L=!0:-1===z.indexOf(".58.com")&&-1===z.indexOf(".5858.com")&&-1===z.indexOf(".58cdn.com.cn")&&(L=!0);L&&(y=I.encodeURIComponent(e.referrer),D="NA"===s?"":s,E="NA"===u?"":u)}e.setCookie("utm_source",D);e.setCookie("spm",E);e.setCookie("init_refer",y);var z="1.1.1.1.1."+G,s=[],u=v.indexOf("{"),l={GTID:N,infoid:A,infotype:r,usertype:x,als:K,utm_source:D,utm_campaign:R,spm:E,
new_session:B,init_refer:y,new_uv:G,UUID:n,bangbangid:p,navtype:l,sc:m,sid:k},H;for(H in l)l.hasOwnProperty(H)&&s.push("'"+H+"':'"+l[H]+"'");s.join(",");v="NA"!==v&&-1!==u?v.substring(0,u+1)+s+","+v.substring(u+1):"{"+s+"}";return{site_name:b,referrer:a,UUID:n,bangbangid:p,pagetype:g,post_count:f,cate:w,cate1:P,cate2:Q,area:F,area1:M,city:M,GTID:N,ClickID:1,ROI:t,curURL:c,_trackParams:q,userid:C,smsc:O,window_size:h,trackURL:v,Ga_pageview:J,_ga_utma:z,ClickIDPlus:function(){this.ClickID+=1}}},getValByUrl:function(b,
a){var c;c=b.match(RegExp("[&?]"+a+"=([^&|^#]*)"));return c instanceof Array?c[1]:"NA"},sendLog:function(b,a){var c=this.baseInfo,d=this.config[b];if(b&&d&&a&&"object"===typeof a){for(var p=[],h=d.allParams,l=0,m=h.length;l<m;l++)p.push(h[l]+"="+(a[h[l]]||c[h[l]]||""));e.ajaxsend(e.protocol+"//"+d.server+"?"+p.join("&"))}},trackLog:function(){var b=this.baseInfo;this.sendLog("trackLog",{tag:"pvstatall",rand_id:e.getRandom()});if("list"===b.pagetype||"detail"===b.pagetype){var a=b.Ga_pageview.indexOf("?key="),
a=-1!==a?b.Ga_pageview.substring(a+5):"";"https:"==e.protocol?this.sendLog("gdtTrackLog2",{city:b.area,key:a,plat:"PC"}):this.sendLog("gdtTrackLog",{city:b.area,key:a,plat:"PC"})}},clickLog:function(b){var a="",a=null!=b&&"from="===b.substring(0,5)?b.replace("from=",""):"default&"+b;this.sendLog("clickLog",{tag:"pvsiters",from:a,rand:e.getRandom()});setTimeout("GCIDPlus()",300)},listClickLog:function(){var b=this,a=this.baseInfo;if(d.$&&"NA"!==a.pagetype&&"NA"!==a.trackURL){var c={list:1,jianli_list:1,
xiaoqu:1,qijiandian:1,item:1,xinchong:1},n=function(){if("function"==typeof $(this).parents){var c="",c=$(this).parents("[logr]"),d=[],m="",k=c.attr("logr").split("_"),p=c.attr("_pos"),n=c.attr("sortid"),g=c.attr("infoproperty"),f=k[k.length-1];d.push(k[0],k[1],k[2],k[3]);f&&(f=f.replace("ses^","ses:"),m+=f);f="";f="function"==typeof $("[logr]").index?$("[logr]").index(c)+1:c.attr("pos");m=m+(n?"@sortid:"+n:"")+(f?"@pos:"+f:"");m+=p?"@npos:"+p:"";m+=g?"@infoproperty:"+g:"";""!=m&&(0===m.indexOf("@")&&
(m=m.substring(1)),d.push(m));c=d.join("_");"NO"==b.filterList(a.curURL)&&-1!=a.curURL.indexOf(".58.com")&&(d=$(this).attr("href")||"#",-1!=d.indexOf("javascript:")||"#"==d.substring(0,1)||"NO"!=b.filterList(d)||"/"!=d.substring(0,1)&&-1==d.indexOf(".58.com")||d.match(/[\?&]iuType=/)||$(this).attr("href",d.trim()+(-1==d.indexOf("?")?"?":"&")+"iuType="+k[0]+"_"+k[1]));b.sendLog("listClickLog",{tag:"pclistclick",info_data:c,rand_id:e.getRandom()});setTimeout("GCIDPlus()",300)}},p=$("[tongji_label=listclick]");
p&&0<p.length?$("[logr] [tongji_label=listclick]").bind("click",n):1===c[a.pagetype]?($("[logr] a.t").bind("click",n),"12"===a.cate2?($("[logr] a.jjh_img").bind("click",n),$("[logr] .img a").bind("click",n)):"187"===a.cate1||"42270"===a.cate1?$("[logr]").find("a:first").bind("click",n):"9225"===a.cate1||"13952"===a.cate1?$("[logr] a.fl").bind("click",n):$("[logr] .img a").bind("click",n)):"chexing"===a.pagetype&&($("[logr] a.at").bind("click",n),$("[logr] .tdimg a").bind("click",n))}},listShowLog:function(){var b=
this.baseInfo;if(d.$&&"list"===b.pagetype){for(var b=[],a=$("[logr]"),c=0,n=a.length;c<n;c++)if($(a[c]).attr("logr")&&"function"==typeof $(a[c]).attr){var p=[],h="",l=$(a[c]).attr("logr").split("_"),m=$(a[c]).attr("_pos"),k=c+1,f=$(a[c]).attr("sortid"),g=$(a[c]).attr("infoproperty"),q=l[l.length-1];p.push(l[0],l[1],l[2],l[3]);q&&(q=q.replace("ses^","ses:"),h+=q);h+=f?"@sortid:"+f:"";h+=k?"@pos:"+k:"";h+=m?"@npos:"+m:"";h+=g?"@infoproperty:"+g:"";""!=h&&(0===h.indexOf("@")&&(h=h.substring(1)),p.push(h));
b.push(p.join("_"))}this.sendLog("listShowLog",{tag:"pclistshow",info_data:b.join(","),rand_id:e.getRandom()})}},bindTongji_tag:function(){if(d.$){var b=this;e.bindElem("[tongji_tag]","click",function(){var a=$(this).attr("tongji_tag"),c=$(this).text().trim();b.clickLog("from="+a+"&text="+encodeURIComponent(c)+"&tongji_type=tongji_tag")},b)}},bindTongji_id:function(){if(d.$){var b=this;e.bindElem("[tongji_id]","click",function(a){var c=a.srcElement?a.srcElement:a.target;"A"==c.tagName.toUpperCase()&&
(a=$(c).attr("href")||"#",c=$(c).text(),-1==a.indexOf("javascript:")&&"#"!=a.substring(0,1)&&b.clickLog("from="+$(this).attr("tongji_id")+"&text="+encodeURIComponent(c)+"&to="+encodeURIComponent(a)+"&tongji_type=tongji_id"))},b)}},diaShowLog:function(b){},bindAlsTag:function(){if(!e.getCookie("als")&&d.$&&"function"===typeof $("body").one)$("body").one("mouseover",function(){e.setCookie("als","0",365)});e.getCookie("isSpider")&&e.setCookie("isSpider","",0)},bindHomeHeatMap:function(){var b=this,a=
this.baseInfo;d.$&&"home"===a.pagetype&&e.bindElem("[href]","click",function(a){var d=$(this).attr("href"),e=$(this).text().trim(),f=$(this).attr("tongji_tag")||"NA",l=$(this).offset().top,m=$(this).offset().left,k=a.pageX;a=a.pageY;b.clickLog("from=heatmap:"+encodeURIComponent(d)+"&tagX="+m+"&tagY="+l+"&mouseX="+k+"&mouseY="+a+"&text="+encodeURIComponent(e)+"&tongji_tag="+f)},b)},insertMiGuan:function(){try{var b="default";switch(this.baseInfo.cate1){case "9224":case "9225":case "13941":case "13952":b=
"yewu";break;case "1":b="ershoufang";break;case "5":b="shouji";break;case "832":b="dog";break;case "4":b="ershouche";break;default:b="shenghuo"}var a=Math.ceil(1E14*Math.random()),c=document.getElementsByTagName("body")[0],d=document.createElement("div");d.id="addInfo";d.style.display="none";var f=document.createElement("a");f.href=e.protocol+"//tracklog.58.com/detail/pc/"+b+"/"+a+"x.shtml";f.text="\u63a8\u8350\u4fe1\u606f";d.appendChild(f);c.appendChild(d)}catch(h){}},bindAddGTIDtoURL:function(){var b=
this,a=this.baseInfo;d.$&&e.bindElem("a","click",function(c){if("NO"==b.filterList(a.curURL)&&-1!=a.curURL.indexOf(".58.com")&&(c=$(this).attr("href")||"#",-1==c.indexOf("javascript:")&&"#"!=c.substring(0,1)&&"NO"==b.filterList(c)&&("/"==c.substring(0,1)||-1!=c.indexOf(".58.com"))))if(c.match(/[\?&]ClickID=\d*/))$(this).attr("href",c.replace(/ClickID=\d*/,"ClickID="+a.ClickID));else{var d=c.indexOf("?");-1!=d&&-1!=c.substring(d).indexOf("statmark=t")&&-1!=c.substring(d).indexOf("#")?(d=c.indexOf("statmark=t"),
$(this).attr("href",c.substring(0,d+10)+"&PGTID="+a.GTID+"&ClickID="+a.ClickID+c.substring(d+10))):$(this).attr("href",c.trim()+(-1==d?"?":"&")+"PGTID="+a.GTID+"&ClickID="+a.ClickID)}},b,a)},ActionObj:{data:[]},actionFilter:function(){pagetypeArr="home index list special jianli_index jianli_list reg PC_regist_sj".split(" ");var b=this.baseInfo,a=!1,d;for(d in pagetypeArr)if(b.pagetype==pagetypeArr[d]){a=!0;break}return a?!0:!1},actionLog:function(){var b=this;b.actionFilter()&&(e.bindElem("body",
"click",function(a){var c=b.ActionObj.data,n=f.body.scrollWidth||"",p=f.body.scrollHeight||"";a=a||d.event;var h=f.documentElement.scrollLeft||f.body.scrollLeft,l=f.documentElement.scrollTop||f.body.scrollTop,h=a.pageX||a.clientX+h||"-1";a=a.pageY||a.clientY+l||"-1";h=Math.floor(h);a=Math.floor(a);c.push("CLICK_"+n+"_"+p+"_"+h+"_"+a);c instanceof Array&&5<=c.length&&(c=c.join(","),g.ActionObj.data=[],b.sendLog("actionLog",{tag:"pcaction",action_data:c,rand_id:e.getRandom()}))}),$(d).unload(function(){var a=
b.ActionObj;(a=a?a.data:"")&&a instanceof Array&&0<a.length&&(a=a.join(","),g.ActionObj.data=[],b.sendLog("actionLog",{tag:"pcaction",action_data:a,rand_id:e.getRandom()}))}))},performanceLog:function(){var b=this.baseInfo,a=!1,c="home index list special post detail".split(" "),e;for(e in c)if(b.pagetype==c[e]){a=!0;break}a&&d.$&&d.performance&&d.performance.timing&&$(function(){function a(b,d,c){return"number"===typeof b&&"number"===typeof d?(b-=d,b=Math.floor(0>b?-1:b),-1==b&&c?c:b):-1}function b(c){var e=
d.performance.timing,f={loadPage:0==e.navigationStart?a(e.loadEventEnd,e.fetchStart,c):a(e.loadEventEnd,e.navigationStart,c),domReady:a(e.domComplete,e.responseEnd,c),redirect:a(e.redirectEnd,e.redirectStart,c),lookupDomain:a(e.domainLookupEnd,e.domainLookupStart,c),ttfb:0==e.navigationStart?a(e.responseStart,e.fetchStart,c):a(e.responseStart,e.navigationStart,c),request:a(e.responseEnd,e.requestStart,c),loadEvent:a(e.loadEventEnd,e.loadEventStart,c),appcache:a(e.domainLookupStart,e.fetchStart,c),
unloadEvent:a(e.unloadEventEnd,e.unloadEventStart,c),connect:a(e.connectEnd,e.connectStart,c),DOMContentLoaded:a(e.domContentLoadedEventEnd,e.fetchStart,c)};d.chrome&&d.chrome.loadTimes()&&(f.firstPaint=a(1E3*d.chrome.loadTimes().firstPaintTime,e.fetchStart,c));c=[];for(var g in f)f.hasOwnProperty(g)&&c.push("'"+g+"':'"+f[g]+"'");c.join(",");f=getTrackURL();g=f.indexOf("{");f="NA"!==f&&-1!==g?f.substring(0,g+1)+c+","+f.substring(g+1):"{"+c+"}";c=[];c.push("site_name=58");c.push("tag=performance");
c.push("referrer="+I.encodeURIComponent(document.referrer));c.push("trackURL="+f);c.push("rand_id="+d.Math.random());f=A.protocol+"//tracklog.58.com/PCv1/performance/empty.js.gif?"+c.join("&");(new Image).src=f;d.TJ58Obj.send=!0;clearInterval(d.TJ58Obj.PFORMINTERVAL)}d.TJ58Obj.PFORMCOUNT=-1;d.TJ58Obj.send=!1;$(d).unload(function(){d.TJ58Obj.send||b("close_"+Math.floor(d.performance.now()))});d.TJ58Obj.PFORMINTERVAL=setInterval(function(){d.TJ58Obj.PFORMCOUNT++;6<d.TJ58Obj.PFORMCOUNT&&clearInterval(d.TJ58Obj.PFORMINTERVAL);
try{0<d.performance.timing.loadEventEnd?b():6<=d.TJ58Obj.PFORMCOUNT&&b("TIMEOUT_"+Math.floor(d.performance.now()))}catch(a){clearInterval(d.TJ58Obj.PFORMINTERVAL)}},500)})},DMloadByTag:function(){try{var b=this.getValByUrl(e.curURL,"dm-statistic-detect"),a=e.getCookie("dm-statistic-detect");if(b=("NA"==b?"":b)||a||"")switch(d.TJ58ecdata={},d.TJ58ecdata.platform="58PC",b){case "2":e.loadScript("http://stat.58corp.com/static/js/referrer_alert.js");break;case "3":e.loadScript("http://stat.58corp.com/static/js/referrer_visual.js")}}catch(c){}}};
g.baseInfo=g.getBaseInfo();g.trackLog();g.listShowLog();g.listClickLog();g.bindAlsTag();g.bindTongji_tag();g.bindTongji_id();g.bindHomeHeatMap();g.bindAddGTIDtoURL();g.insertMiGuan();g.actionLog();d.clickLog=function(b){g.clickLog(b)};d.showLog=function(b){g.diaShowLog(b)};d.GCIDPlus=function(){g.baseInfo.ClickIDPlus()};d.ajaxlogr=function(b){};d.getGTID=function(){return g.baseInfo.GTID};d.getTrackURL=function(){return g.baseInfo.trackURL};d._gaq=d._gaq||[];g.performanceLog();g.DMloadByTag()}})(window);
