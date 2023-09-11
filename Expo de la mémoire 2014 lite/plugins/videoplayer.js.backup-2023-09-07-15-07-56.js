/* krpano 1.16.8 videoplayer plugin (build 2013-09-27) */
var krpanoplugin=function(){function n(){b&&(k?(b.airplay="allow",b["x-webkit-airplay"]="allow"):(b.airplay="deny",b["x-webkit-airplay"]="deny",b.airplay="disallow",b["x-webkit-airplay"]="disallow"))}function p(c){if(!(void 0==c||null==c||""==c||"null"==String(c).toLowerCase())){var f=c.split("|");if(1<f.length){if(null==h){h="";var g=document.createElement("video");if(!(null===g||void 0===g))if(void 0!==g.canPlayType){var e=g.canPlayType("video/ogg");e.match(/maybe|probably/i)&&(h+="ogg");e=g.canPlayType("video/webm");
e.match(/maybe|probably/i)&&(h+="webm");e=g.canPlayType("video/mp4");e.match(/maybe|probably/i)&&(h+="mp4")}else h+="mp4"}g=f.length;if(0<=h.indexOf("mp4"))for(e=0;e<g;e++){var j=String(f[e]).toLowerCase();if(0<j.indexOf(".mp4")||0<j.indexOf(".m4v")||0<j.indexOf(".mpeg4")||0<j.indexOf(".mpeg")||0<j.indexOf(".mpg")){c=f[e];break}}else if(0<=h.indexOf("webm"))for(e=0;e<g;e++){if(j=String(f[e]).toLowerCase(),0<j.indexOf(".webm")){c=f[e];break}}else if(0<=h.indexOf("ogg"))for(e=0;e<g;e++){if(j=String(f[e]).toLowerCase(),
0<j.indexOf(".ogg")||0<j.indexOf(".ogv")){c=f[e];break}}else c=f[0]}f=unescape(d.parsePath(c));if(a&&b){a.havevideosize=!1;a.isvideoready=!1;a.iscomplete=!1;a.ispaused=!0;a.videourl=c;a.parsedurl=f;if(a.posterurl){var k=unescape(d.parsePath(a.posterurl)),l=document.createElement("img");l.addEventListener("error",function(){d.trace(3,"loading of "+k+" failed!")},!1);l.addEventListener("load",function(){m(l.naturalWidth,l.naturalHeight);l=null},!1);l.src=k;b.poster=k}else(d.isphone||d.ispad)&&m(320,
240);b.src=f;a.pausedonstart?b.pause():(b.autoplay="autoplay",b.play());a.loop&&(!1==d._isrealdesktop&&"5">d.iosversion?a._simulateloop=!0:b.loop="loop");a.html5controls&&(b.controls="controls");b.load()}}}function q(){if(a&&b){if(a.iscomplete)try{b.currentTime=0}catch(c){}b.play();a.ispaused=!1}}function r(){a&&b&&(b.pause(),a.ispaused=!0)}function s(){if(a&&b){try{b.currentTime=0,b.pause()}catch(c){}a.ispaused=!0}}function t(){if(a&&b){a.havevideosize=!1;a.isvideoready=!1;a.iscomplete=!1;a.ispaused=
!0;try{a.videourl=null,a.parsedurl=null,b.src=null}catch(c){}}}function u(){a&&b&&(!0==b.playing||void 0===b.playing&&!1==a.ispaused?(b.pause(),a.ispaused=!0):(b.play(),a.ispaused=!1))}function v(c){if(a&&b)try{b.currentTime=c}catch(d){}}function w(){b&&0<b.videoWidth&&0<b.videoHeight&&m()}function x(){b&&0<b.videoWidth&&0<b.videoHeight&&m()}function m(c,f){if(a&&b&&!1==a.havevideosize){var g=b.duration;a.totaltime=isNaN(g)?0:g;c&&f?a.registercontentsize(c,f):a.registercontentsize(b.videoWidth,b.videoHeight);
a.havevideosize=!0;a.isvideoready=!0;d.call(a.onvideoready,a)}}function y(){a&&b&&(a.ispaused=!1,d.view.haschanged=!0)}function z(){a&&b&&(a.ispaused=!0,d.call(a.onvideopaused,a))}function A(){a&&b&&(a.time=b.currentTime,a.totaltime=b.duration)}function B(){d&&a&&(b&&a.loop&&a._simulateloop?b.play():(a.iscomplete=!0,d.call(a.onvideocomplete,a)))}function C(){if(d&&a&&b){var c=b.error?b.error.code:0;d.trace(3,a.parsedurl+" - "+(1==c?"video loading aborted":2==c?"network loading error":3==c?"video decoding failed":
4==c?"loading video failed":"unknown error")+"!")}}var d=null,a=null,b=null,k=!1;this.registerplugin=function(c,f,g){d=c;a=g;"1.0.8.14">d.version||"2011-07-25">d.build?d.trace(3,"videoplayer plugin - too old krpano version (min. 1.0.8.14)"):(a.registerattribute("videourl",null),a.registerattribute("altvideourl",null),a.registerattribute("posterurl",null),a.registerattribute("pausedonstart",!1),a.registerattribute("loop",!1),a.registerattribute("html5controls",!1),a.registerattribute("volume",1),a.registerattribute("airplay",
k,function(a){k="boolean"==typeof a?a:0<="yesontrue1".indexOf(String(a).toLowerCase());n()},function(){return k}),a.registerattribute("ispaused",!1),a.registerattribute("iscomplete",!1),a.registerattribute("isvideoready",!1),a.registerattribute("havevideosize",!1),a.registerattribute("time",0),a.registerattribute("totaltime",0),a.registerattribute("loadedbytes",0),a.registerattribute("totalbytes",0),a.registerattribute("onvideoready",null),a.registerattribute("onvideocomplete",null),a.registerattribute("onvideopaused",
null),a.registerattribute("onunsupported",null),a.registerattribute("playvideo",p),a.registerattribute("closevideo",t),a.registerattribute("stop",s),a.registerattribute("pause",r),a.registerattribute("play",q),a.registerattribute("resume",q),a.registerattribute("togglepause",u),a.registerattribute("seek",v),b=document.createElement("video"),n(),b.playsInline="playsInline",b.webKitPlaysInline="webKitPlaysInline",b.WebKitPlaysInline="WebKitPlaysInline",b["webkit-playsinline"]="webkit-playsinline",!b||
!b.play||!b.pause?(b=null,c=a.onunsupported,null==c||""==c||"null"==String(c).toLowerCase()?d.trace(2,"videoplayer plugin - HTML5 video is not supported by this browser!"):d.call(c,a)):(b.style.backgroundColor="#000000",b.style.width="100%",b.style.height="100%",b.onselectstart=function(){return!1},b.addEventListener("loadedmetadata",w,!1),b.addEventListener("loadeddata",x,!1),b.addEventListener("timeupdate",A,!1),b.addEventListener("play",y,!1),b.addEventListener("pause",z,!1),b.addEventListener("ended",
B,!1),b.addEventListener("error",C,!1),b.addEventListener("touchstart",function(a){a.preventDefault()},!0),p(a.altvideourl?a.altvideourl:a.videourl),a.sprite.appendChild(b)))};this.unloadplugin=function(){try{a&&(a.sprite&&b)&&a.sprite.removeChild(b)}catch(c){}d=a=b=null};var h=null};
