var languages=new Array("cz","de","en","es","fr","it","pl","pt");var json_status_ok=1;var json_status_error=500;var system_error_text="System error, try again later";var guest_stream_channel="guest_channel";var BASE_DOMAIN="miracletele.com";var STREAM_TYPE_DID_PRIMARY="didPrimary";var STREAM_TYPE_DID_ATTACHED="didAttached";var STREAM_TYPE_DID_DETACHED="didDetached";var STREAM_TYPE_SIM_BALANCE="simBalance";var STREAM_TYPE_MESSAGE_BOX="messageBox";var STREAM_TYPE_TOKEN_COUNT="tokenCount";var STREAM_TYPE_PAYMENT_UPDATED="paymentUpdated";var STREAM_TYPE_PDF_UPDATED="reportReady";var STREAM_TYPE_TOKEN_TRANSACTION_UPDATED="tokenTransactionUpdated";var STREAM_TYPE_TYPE_NEW_SMS="newSms";var STREAM_TYPE_TOKEN_CONTRIBUTION_UPDATED="tokenContributionUpdated";var STREAM_TYPE_SIM_TOP_UP_UPDATED="simTopUpUpdated";var CHART_MODE_SIMPLE="1";var CHART_MODE_GROUP="2";var TOKEN_RATE=.2;var PAYMENT_SYSTEM_WIRE=3;var PAYMENT_SYSTEM_LOCAL=1;var PAYMENT_SYSTEM_TELE=20;var TOKEN_TRANSACTION_STATUS_WAIT=1;var TOKEN_TRANSACTION_STATUS_FAIL=3;var TOKEN_TRANSACTION_STATUS_SUCCESS=2;var TOKEN_TRANSACTION_STATUS_CONFIRMATION=4;var TOKEN_TRANSACTION_STATUS_PENDING=5;var TOKEN_TRANSACTION_STATUS_HOLD=7;var TOKEN_CONTRIBUTION_STATUS_FAIL=4;var TOKEN_CONTRIBUTION_STATUS_DONE=2;var TOKEN_CONTRIBUTION_STATUS_PROCESS=1;var TOKEN_CONTRIBUTION_STATUS_PREPARE=3;var ETHEREUM_CONF_MIN=12;var CONTRIBUTION_RE_ON=1;var CONTRIBUTION_RE_OFF=0;var CONTRIBUTION_RE_ON_DESCRIPTION="Status On";var CONTRIBUTION_RE_OFF_DESCRIPTION="Status Off";(function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t={},n=e.createElement,r=e.createDocumentFragment,o=r();e.createElement=function(e){m.shivMethods||n(e);var i;return i=t[e]?t[e].cloneNode():g.test(e)?(t[e]=n(e)).cloneNode():n(e),i.canHaveChildren&&!f.test(e)?o.appendChild(i):i},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t[e]=n(e),o.createElement(e),'c("'+e+'")'})+");return n}")(m,o)}function o(e){var t;return e.documentShived?e:(m.shivCSS&&!d&&(t=!!n(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),h||(t=!r(e)),t&&(e.documentShived=t),e)}function a(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),a=[];r--;)t=n[r],o.test(t.nodeName)&&a.push(t.applyElement(s(t)));return a}function s(e){for(var t,n=e.attributes,i=n.length,r=e.ownerDocument.createElement(b+":"+e.nodeName);i--;)t=n[i],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function l(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+b+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[r]=t.join("}");return n.join("{")}function c(e){for(var t=e.length;t--;)e[t].removeNode()}function u(e){var t,i,r=e.namespaces,o=e.parentWindow;return!y||e.printShived?e:(r[b]===void 0&&r.add(b),o.attachEvent("onbeforeprint",function(){for(var r,o,s,c=e.styleSheets,u=[],d=c.length,h=Array(d);d--;)h[d]=c[d];for(;s=h.pop();)if(!s.disabled&&v.test(s.media)){for(r=s.imports,d=0,o=r.length;o>d;d++)h.push(r[d]);try{u.push(s.cssText)}catch(p){}}u=l(u.reverse().join("")),i=a(e),t=n(e,u)}),o.attachEvent("onafterprint",function(){c(i),t.removeNode(!0)}),e.printShived=!0,e)}var d,h,p=e.html5||{},f=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,g=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;(function(){var n=t.createElement("a");n.innerHTML="<xyz></xyz>",d="hidden"in n,d&&"function"==typeof injectElementWithStyles&&injectElementWithStyles("#modernizr{}",function(t){t.hidden=!0,d="none"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).display}),h=1==n.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var n=t.createDocumentFragment();return n.cloneNode===void 0||n.createDocumentFragment===void 0||n.createElement===void 0}()})();var m={elements:p.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:p.shivCSS!==!1,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:o};e.html5=m,o(t);var v=/^$|\b(?:all|print)\b/,b="html5shiv",y=!h&&function(){var n=t.documentElement;return t.namespaces!==void 0&&t.parentWindow!==void 0&&n.applyElement!==void 0&&n.removeNode!==void 0&&e.attachEvent!==void 0}();m.type+=" print",m.shivPrint=u,u(t)})(this,document);function redirect(href){top.location.href=href}function reload(){top.location.reload()}function $_GET(key){var s=window.location.search;s=s.match(new RegExp(key+"=([^&=]+)"));return s?s[1]:undefined}function $_META(key){var v=$("meta[name="+key+"]");return v.length?v.attr("content"):undefined}var friend;function affiliateTracking(type,ssl){friend=Cookies.get("friend");var newFriend=$_GET("friend");if(/[^\w]/.test(newFriend))newFriend="";if(newFriend&&friend!==newFriend){if(friend)Cookies.remove("friend");friend=newFriend;Cookies.set("friend",friend,{expires:30,path:"/",secure:ssl})}var unique=undefined===Cookies.get("u");if(friend&&unique){Cookies.set("u",1,{expires:1,path:"/",secure:ssl});$("body").append('<img src="https://'+BASE_DOMAIN+"/"+type+".gif?friend="+encodeURIComponent(friend)+"&rand="+Math.random()+'"/>')}}function disableButton(selector){return $(selector).text($(selector).data("loading-text")).addClass("disabled")}function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==="[object Function]"}function ajaxGet(url,doneFunc,failFunc,alwaysFunc){$.get(url).done(function(response){if(response.status===undefined||response.result===undefined){messageBox("alert-danger","System error!",30);return true}if(response.status!=json_status_ok){messageBox("alert-danger",response.message!==undefined&&response.message.length>0?response.message:"Unknown error",30);return false}if(isFunction(doneFunc))doneFunc(response)}).fail(function(response){messageBox("alert-danger","System error!",30);if(isFunction(failFunc))failFunc(response)}).always(function(){if(isFunction(alwaysFunc))alwaysFunc()})}function ajaxPost(url,data,doneFunc,failFunc,alwaysFunc){$.post(url,data).done(function(response){if(response.status===undefined||response.result===undefined){messageBox("alert-danger","System error!",30);return true}if(response.status!=json_status_ok){messageBox("alert-danger",response.message!==undefined&&response.message.length>0?response.message:"Unknown error",30);return false}if(isFunction(doneFunc))doneFunc(response)}).fail(function(response){messageBox("alert-danger","System error!",30);if(isFunction(failFunc))failFunc(response)}).always(function(){if(isFunction(alwaysFunc))alwaysFunc()})}function setLanguage(language){if(Cookies.get("language")){Cookies.remove("language");Cookies.remove("language",{path:"/",domain:"."+BASE_DOMAIN})}Cookies.set("language",language,{expires:400,path:"/",secure:true})}function ChannelPushStream(channel,callback){var ourPushStream=new PushStream({host:window.location.hostname,port:window.location.port,modes:"websocket",channelsByArgument:true,channelsArgument:"id",useSSL:true});ourPushStream.onmessage=function(text,id,channel){var json=window.JSON&&window.JSON.parse?JSON.parse(text):jQuery.parseJSON(text);callback(json,id,channel)};ourPushStream.addChannel(channel);ourPushStream.connect()}function clipBoard(){var clipboard=new Clipboard(".js-clipboard",{text:function(trigger){return trigger.getAttribute("data-aria-label")}});clipboard.on("success",function(e){if(e.trigger&&e.trigger.hasAttribute("data-title")){$(e.trigger).tooltip("show");setTimeout(function(){$(e.trigger).tooltip("hide")},3e3)}else{messageBox("alert-success","Successfully copied to clipboard!",15)}})}var controller,action;function friendField(){if($("#registration-form").length){if(friend){$("#code").val(friend);$("#friend").prop("checked",true).change()}}}function getDateAgo(first,second,hours,minutes,seconds){var result="";var interval=second-first;var d=Math.floor(interval/86400);interval-=d*86400;if(d>0)result+=d+" day"+(d>1?"s":"")+" ";var h=Math.floor(interval/3600);interval-=h*3600;if(hours&&h>0)result+=h+" hour"+(h>1?"s":"")+" ";var m=Math.floor(interval/60);interval-=m*60;if(hours&&minutes&&m>0)result+=m+" minute"+(m>1?"s":"")+" ";if(hours&&minutes&&seconds&&interval>0)result+=interval+" second"+(interval>1?"s":"")+" ";return result!==""?result+" ago":"now"}function smsReceivedAddGuest(list){for(var i=0;i<list.length;i++){var sms=list[i];if($("#online-sms-"+sms.id).length===0){if(0===i){reload();break}else{var interval=getDateAgo(sms.time);$("#online-sms-container").prepend('<div class="alert alert-success sms-message clearfix">\n'+'\t<div class="phone-answer"><div class="phone-icon"><i class="fas fa-phone-square"></i></div>+'+sms.from+"</div>\n"+'\t<div class="received-sms-ago" data-moment="'+sms.time+'">'+interval+"</div>\n"+'\t<div class="sms-text">'+sms.text+"</div>\n"+"</div>")}}}}function smsReceivedRecalc(){var time=Math.floor(Date.now()/1e3);$(".received-sms-ago").each(function(){var t=$(this).data("moment");var interval=getDateAgo(t,time,true,true,false);$(this).text(interval)})}function openPushStreamGuest(){var pushChannel=$_META("push-stream-channel");if(pushChannel!==undefined){ChannelPushStream(pushChannel,function(json){if(json.type!==undefined&&json.content!==undefined){if(STREAM_TYPE_TYPE_NEW_SMS===json.type){if("sms"===controller&&"receive"===action&&typeof online_sms_number!==undefined&&json.content.number===online_sms_number){smsReceivedAddGuest(json.content.last)}}}})}}var teleTokenRate=0;function recountTeleTokens(){if(0===teleTokenRate)return false;var eth=parseFloat($("#crowdsale-eth-amount").val());$("#crowdsale-tele-amount").val(eth>0?Math.floor(eth/teleTokenRate):0);redrawQrCode()}function recountEthTokens(){math.config({number:"BigNumber",precision:64});var tele=parseInt($("#crowdsale-tele-amount").val());$("#crowdsale-eth-amount").val(tele>0&&teleTokenRate>0?math.multiply(math.bignumber(tele),math.bignumber(teleTokenRate)).toString():0);redrawQrCode()}function redrawQrCode(){$("#crowdsale-qr-code").attr("src","/index/crowdsale/?value="+$("#crowdsale-eth-amount").val())}function updateRate(){$.ajax({type:"GET",url:"/json/tokenStat.json?r="+Math.random(),success:function(data){if(typeof data.result.ethRate!==undefined){if($("#eth-token-rate").length)$("#eth-token-rate").text(data.result.ethRate);teleTokenRate=parseFloat(data.result.ethRate);if($("#crowdsale-tele-amount").length)recountEthTokens()}}})}function messageBox(alertClass,text,timeout){if(timeout===undefined)timeout=60;var id="message_box_"+Date.now();var html='<div class="alert message-box alert-dismissible fade show '+alertClass+'" role="alert" id="'+id+'">'+text+'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+'<span aria-hidden="true">&times;</span>'+"</button></div>";$(html).appendTo(".alert-message-area");setTimeout(function(){$("#"+id).remove()},1e3*timeout)}$(document).ready(function(){controller=$_META("controller");action=$_META("action");if($(".js-clipboard").length)clipBoard();$(".upload-file-field").change(function(event){$(event.target.form).submit();return true})});(function(window){"use strict";function CountDown(date,selector){this.date=date;this.selector=selector;this.dfp="";this.dsp="";this.hfp="";this.hsp="";this.mfp="";this.msp="";this.sfp="";this.init()}CountDown.prototype.init=function(){var min=1e9;var max=9999999999;var rand=parseInt(Math.random()*1e5*max+min);this.counter_days_second="counter-days-second-"+rand;this.counter_days_first="counter-days-first-"+rand;this.counter_hours_second="counter-hours-second-"+rand;this.counter_hours_first="counter-hours-first-"+rand;this.counter_minutes_second="counter-minutes-second-"+rand;this.counter_minutes_first="counter-minutes-first-"+rand;this.counter_seconds_second="counter-seconds-second-"+rand;this.counter_seconds_first="counter-seconds-first-"+rand;$(this.selector+" .num-count-days .count-wrap-second .top").attr("id",this.counter_days_second);$(this.selector+" .num-count-days .count-wrap-first .top").attr("id",this.counter_days_first);$(this.selector+" .num-count-hours .count-wrap-second .top").attr("id",this.counter_hours_second);$(this.selector+" .num-count-hours .count-wrap-first .top").attr("id",this.counter_hours_first);$(this.selector+" .num-count-minutes .count-wrap-second .top").attr("id",this.counter_minutes_second);$(this.selector+" .num-count-minutes .count-wrap-first .top").attr("id",this.counter_minutes_first);$(this.selector+" .num-count-seconds .count-wrap-second .top").attr("id",this.counter_seconds_second);$(this.selector+" .num-count-seconds .count-wrap-first .top").attr("id",this.counter_seconds_first);this.step(false);var that=this;this.interval=setInterval(function(){that.step()},1e3)};CountDown.prototype.step=function(animate){if(typeof animate==="undefined")animate=true;var distance=this.date-(new Date).getTime()/1e3;if(distance<0){clearInterval(this.interval);return false}var vDistance=this.getValueSet(distance);this.animate(this.counter_seconds_second,vDistance.ss,animate);if(vDistance.sf!==this.sfp){this.sfp=vDistance.sf;this.animate(this.counter_seconds_first,vDistance.sf,animate)}if(vDistance.mf!==this.mfp){this.mfp=vDistance.mf;this.animate(this.counter_minutes_first,vDistance.mf,animate)}if(vDistance.ms!==this.msp){this.msp=vDistance.ms;this.animate(this.counter_minutes_second,vDistance.ms,animate)}if(vDistance.hf!==this.hfp){this.hfp=vDistance.hf;this.animate(this.counter_hours_first,vDistance.hf,animate)}if(vDistance.hs!==this.hsp){this.hsp=vDistance.hs;this.animate(this.counter_hours_second,vDistance.hs,animate)}if(vDistance.df!==this.dfp){this.dfp=vDistance.df;this.animate(this.counter_days_first,vDistance.df,animate)}if(vDistance.ds!==this.dsp){this.dsp=vDistance.ds;this.animate(this.counter_days_second,vDistance.ds,animate)}};CountDown.prototype.getValueSet=function(distance){var days=("0"+Math.floor(distance/(60*60*24))).slice(-2);var hours=("0"+Math.floor(distance%(60*60*24)/(60*60))).slice(-2);var minutes=("0"+Math.floor(distance%(60*60)/60)).slice(-2);var seconds=("0"+Math.floor(distance%60)).slice(-2);return{df:days.substr(0,1),ds:days.substr(1,1),hf:hours.substr(0,1),hs:hours.substr(1,1),mf:minutes.substr(0,1),ms:minutes.substr(1,1),sf:seconds.substr(0,1),ss:seconds.substr(1,1)}};CountDown.prototype.animate=function(selector,value,animate){if(typeof animate==="undefined")animate=false;var object=$("#"+selector);var bottom=object.siblings(".bottom");if(false===animate){bottom.text(value)}else{object.text(value).css({transform:"translate3d(0px, -50%, 0px) rotateX(90deg)"}).animate({opacity:1},{step:function(now,fx){$(this).css({transform:"translate3d(0px, -"+(50-50*now)+"%, 0px) rotateX("+(90-90*now)+"deg)",opacity:1*now});bottom.css({transform:"translate3d(0px, "+50*now+"%, 0px) rotateX("+90*now+"deg)",opacity:1-1*now})},duration:400,easing:"linear",queue:false,complete:function(){bottom.text(value).css({transform:"",opacity:""});object.css({opacity:0}).css({transform:"translate3d(0px, -100%, 0px)"})}})}};window.CountDown=CountDown})(window);jQuery(document).ready(function(){if(!$.cookie("referrer"))$.cookie("referrer",document.referrer,{expires:400,path:"/",secure:true});if(undefined===$_META("account")){affiliateTracking("affiliate",true);friendField()}var defaultLanguage=$_META("default-language");var currentUrl=$_META("current-url");$(".language-selector-guest").click(function(){var language=$(this).data("language");setLanguage(language);redirect((defaultLanguage!==undefined&&language!==defaultLanguage?"/"+language:"")+currentUrl);return false});$(".language-guest-dropdown").click(function(){$(this).siblings(".language-guest-menu").each(function(){if($(this).is(":visible")){$(this).hide()}else{$(this).show()}});return false});if($(".navbar").hasClass("fixed-top")){$(window).scroll(function(){if($(this).scrollTop()>20){$(".navbar").addClass("nav-bg")}else{$(".navbar").removeClass("nav-bg")}});$(window).scroll()}$(".hamburger").click(function(){if($(this).hasClass("is-active")){$(this).removeClass("is-active")}else{$(this).addClass("is-active")}});$(".nav-link").click(function(){if($(".hamburger").is(":visible")){$(".hamburger").removeClass("is-active");$(".navbar-collapse").collapse("hide")}return true});$('a[href*="#scroll-"]').click(function(event){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){$(".nav-item.active").removeClass("active");if($(this).hasClass("nav-link")){$(this).parent(".nav-item").addClass("active")}var target=$("#"+this.hash.substring(8));if(target.length){event.preventDefault();$("html, body").animate({scrollTop:target.offset().top-120},1e3);window.history.pushState({},"",this.pathname+this.hash)}}});if("#scroll-"==window.location.hash.substring(0,8)){var element=$("#"+window.location.hash.substring(8));if(element.length){var a_element=$('.nav-link[href*="'+window.location.hash+'"]');if(a_element.length>0){a_element.parent(".nav-item").addClass("active")}$("html, body").animate({scrollTop:element.offset().top-120},1e3)}}$(".founder-list").click(function(e){e.preventDefault();var team=$(this).data("team");$(".founder-item").hide();$("."+team).fadeIn();$(".founder-list").removeClass("active");$(this).addClass("active");$("html, body").animate({scrollTop:$("."+team).offset().top},200)});$(".faq-item").click(function(e){e.preventDefault();$(".faq-item").not($(this)).removeClass("active");$(this).toggleClass("active")});ajaxGet("/index/meet/",function(response){$(".meet-from").html(response.result)});$(".meet-from").on("submit","#meet-form",function(){ajaxPost($(this).attr("action"),$("#meet-form").serialize(),function(response){$(".meet-from").html(response.result)});return false});if($(".received-sms-ago").length>0){smsReceivedRecalc();setInterval(smsReceivedRecalc,1e4)}if($("#crowdsale-tele-amount").length){setInterval(function(){updateRate()},60*1e3);updateRate()}if($("#crowdsale-eth-amount").length){$("#crowdsale-eth-amount").change(recountTeleTokens).keyup(recountTeleTokens).click(recountTeleTokens);$("#crowdsale-tele-amount").change(recountEthTokens).keyup(recountEthTokens).click(recountEthTokens).val(1e3)}if(typeof next_stage_data!=="undefined"){if($("#counter-top").length>0)new CountDown(next_stage_data,"#counter-top");if($("#counter-stages").length>0)new CountDown(next_stage_data,"#counter-stages")}function reCountQuarterBiWeeklyReward(){var q=$("#quarter-biweekly-rewards-range-selector").val();reCountTokenProfitReward();$("#quarter-biweekly-reward-rate").html("&euro; "+avgQuarterProfit[q].toFixed(2))}function reCountTokenProfitReward(){var c=$("#token-profit-range-selector").val();var q=$("#quarter-biweekly-rewards-range-selector").val();$("#token-profit-monthly-token-count").text(c+" TELE");$("#token-profit-monthly-value").html("&euro; "+(c*avgQuarterProfit[q].toFixed(2)*2/100).toFixed(2))}function quarterBiweeklySelector(){var selector=$("#quarter-biweekly-rewards-range-selector");if(selector.length>0){selector.rangeslider({polyfill:false,onInit:function(){this.$range.prepend($('<div class="rangeslider__ruler" />').html($("#quarter-biweekly-rewards-ruler").html()))},onSlide:reCountQuarterBiWeeklyReward});reCountQuarterBiWeeklyReward()}}quarterBiweeklySelector();function monthlyEarningsSelector(){var selector=$("#token-profit-range-selector");if(selector.length>0){selector.rangeslider({polyfill:false,onInit:function(){var ruler=$('<div class="rangeslider__ruler" />').html('<span class="range-selector-label">'+selector.attr("min")+"</span>"+' <span class="range-selector-label">'+selector.attr("max")+"</span>");this.$range.prepend(ruler)},onSlide:reCountTokenProfitReward});reCountTokenProfitReward()}}monthlyEarningsSelector()});function preloader(){if($("#preloader").length){setTimeout(function(){$("#preloader").fadeOut("slow",function(){$("body").removeClass("overflow-hidden").css("padding","")})},1e3)}}var tokenChartMode,tokenChartReward,tokenChartFuture;function reloadEarningChartData(){$(".chart-loading").show();$(".chart-progress").hide();$.ajax({type:"GET",url:"/token/chart/?mode="+tokenChartMode,success:function(data){if(typeof data.result.earnings!==undefined&&typeof data.result.stack!==undefined){tokenChartReward=data.result.earnings;tokenChartFuture=data.result.stack;redrawEarningChart();$(".chart-loading").hide();$(".chart-progress").show()}}})}function redrawEarningChart(){var colSize=60;var firstMargin=5;var width,margin,i,offset,maxCount;$(".earning-chart").removeClass("blur");$(".earning-chart .chart-empty").remove();$("#earning-chart-completed-cols").html("");if(tokenChartReward.length>0){width=$("#chart-progress-left").width();maxCount=Math.floor((width-firstMargin)/colSize);offset=tokenChartReward.length>maxCount?tokenChartReward.length-maxCount:0;margin=(width-firstMargin-(tokenChartReward.length-offset)*(colSize+1))/(tokenChartReward.length-offset-1);margin=margin>1?Math.floor(margin):0;for(i=offset;i<tokenChartReward.length;i++){$("#earning-chart-completed-cols").append('<div class="bar-item" style="margin-left:'+(i>offset?margin:firstMargin)+'px;">\n'+'\t<div class="bubble">\n'+"\t\t<span>€"+tokenChartReward[i].amount+"</span>\n"+'\t\t<div class="arrow"></div>'+"\t</div>"+'\t<div class="bar" style="height:'+tokenChartReward[i].height+'px;">\n'+'\t\t<img src="/image/design/tele-icon.png" />\n'+"\t\t<span>"+tokenChartReward[i].count+" TELE</span>\n"+"\t</div>\n"+'\t<div class="date">\n'+"\t\t<span>"+tokenChartReward[i].date+"</span>\n"+"\t</div>\n"+"</div>")}}$("#earning-chart-future-cols").html("");if(tokenChartFuture.length>0){width=$("#chart-progress-right").width();maxCount=Math.floor((width-firstMargin)/colSize);offset=tokenChartFuture.length>maxCount?tokenChartFuture.length-maxCount:0;margin=(width-firstMargin-(tokenChartFuture.length-offset)*(colSize+1))/(tokenChartFuture.length-offset-1);margin=margin>1?Math.floor(margin):0;for(i=0;i<tokenChartFuture.length-offset;i++){$("#earning-chart-future-cols").append('<div class="bar-item" style="margin-left:'+(i>0?margin:firstMargin)+'px;">\n'+'\t<div class="plus" style="height:20px;">\n'+"\t\t+\n"+"\t</div>\n"+'\t<div class="bar" style="height:'+tokenChartFuture[i].height+'px;">\n'+'\t\t<img src="/image/design/tele-icon.png" class="fa-spin" />\n'+"\t\t<span"+(CHART_MODE_GROUP===tokenChartMode?' style="display:block;"':"")+">"+tokenChartFuture[i].count+" TELE</span>\n"+(CHART_MODE_SIMPLE===tokenChartMode?'\t\t<div class="forecast-progress" style="height:'+tokenChartFuture[i].progress+'px;">\n'+"\t\t\t<i>"+tokenChartFuture[i].percent+"%</i>\n"+"\t\t</div>\n":"")+"\t</div>\n"+'\t<div class="date">\n'+"\t\t<span>"+tokenChartFuture[i].date+"</span>\n"+"\t</div>\n"+"</div>")}}if(0===tokenChartReward.length&&0===tokenChartFuture.length){$(".earning-chart").addClass("blur").prepend('<div class="chart-empty">\n'+'\t<div class="inline-block">\n'+'\t\t<a href="/token/buy/" class="btn btn-lg">Buy tele tokens</a>\n'+'\t\t<span>and <a href="/token/contribute/">stack them</a></span>\n'+'\t</div><div class="v-helper"></div>\n'+"</div>")}}function smsReceivedAddMember(list){for(var i=0;i<list.length;i++){var sms=list[i];if($("#online-sms-"+sms.id).length===0){if(0===i){reload();break}else{var interval=getDateAgo(sms.time);$("#online-sms-container table tbody").prepend('<tr><td><div class="alert alert-success sms-message clearfix" id="online-sms-'+sms.id+'">\n'+'\t<div class="phone-answer"><div class="phone-icon"><i class="fas fa-phone-square"></i></div>+'+sms.from+"</div>\n"+'\t<div class="received-sms-ago" data-moment="'+sms.time+'">'+(interval!==""?interval+" ago":"now")+"</div>\n"+'\t<div class="sms-text">'+sms.text+"</div>\n"+"</div></td></tr>")}}}}function openPushStreamMember(){var pushChannelPrivate=$_META("push-stream-channel");if(pushChannelPrivate!==undefined){ChannelPushStream(pushChannelPrivate,function(json){if(json.type!==undefined&&json.content!==undefined){if(STREAM_TYPE_MESSAGE_BOX===json.type){if(json.content.text!==undefined&&json.content.class!==undefined)messageBox(json.content.class,json.content.text,30)}else if(STREAM_TYPE_DID_PRIMARY===json.type){if(json.content.did_id!==undefined&&json.content.old_did_id!==undefined){$("#virtual-number-"+json.content.did_id+" .did-active-icon").hide();$("#virtual-number-"+json.content.did_id+" .did-process-icon").hide();$("#virtual-number-"+json.content.did_id+" .did-primary-icon").show();$("#virtual-number-"+json.content.old_did_id+" .did-hide-icon").hide();$("#virtual-number-"+json.content.old_did_id+" .did-primary-icon").hide();$("#virtual-number-"+json.content.old_did_id+" .did-active-icon").show();$("#did-primary-form-"+json.content.did_id).hide();$("#did-detach-form-"+json.content.did_id).css("display","inline");$("#did-primary-form-"+json.content.old_did_id).css("display","inline");$("#did-detach-form-"+json.content.old_did_id).css("display","inline")}}else if(STREAM_TYPE_DID_ATTACHED===json.type){if(json.content.did_id!==undefined&&json.content.result!==undefined){if(true==json.content.result){$("#virtual-number-"+json.content.did_id+" .did-active-icon").show();$("#virtual-number-"+json.content.did_id+" .did-process-icon").hide();$("#virtual-number-"+json.content.did_id+" .did-primary-icon").hide();$("#did-primary-form-"+json.content.did_id).css("display","inline");$("#did-detach-form-"+json.content.did_id).css("display","inline")}else{$("#virtual-number-"+json.content.did_id).hide()}}}else if(STREAM_TYPE_DID_DETACHED===json.type){if(json.content.did_id!==undefined){$("#virtual-number-"+json.content.did_id).hide()}}else if(STREAM_TYPE_SIM_BALANCE===json.type){if(json.content.sim_id!==undefined&&json.content.value!==undefined){$(".sim-balance-"+json.content.sim_id).html("&euro; "+json.content.value)}}else if(STREAM_TYPE_TOKEN_COUNT===json.type){if(json.content.sim_id!==undefined&&json.content.value!==undefined){$(".sim-balance-"+json.content.sim_id).html("&euro; "+json.content.value)}}else if(STREAM_TYPE_PAYMENT_UPDATED===json.type){if("payment"===controller&&"view"===action&&typeof payment_id!==undefined&&json.content.payment_id===payment_id){reload()}}else if(STREAM_TYPE_PDF_UPDATED===json.type){if("index"===controller&&"pdf"===action&&typeof report_id!==undefined&&json.content.report_id===report_id){reload()}}else if(STREAM_TYPE_TOKEN_TRANSACTION_UPDATED===json.type){var block=$("#token-transaction-status-"+json.content.transaction_id);if(block.length){renderTokenTransactionStatus(block,json.content.status,json.content.confirm_count)}var txId=$("#token-transaction-txid-"+json.content.transaction_id);if(txId.length&&typeof json.content.tx_id!=="undefined"&&json.content.tx_id.length){txId.children("a").attr("href","https://etherscan.io/tx/"+json.content.tx_id).text(json.content.tx_id)}var progress=$("#token-transaction-progress-"+json.content.transaction_id);if(progress.length&&typeof json.content.confirm_count!=="undefined"){renderTokenTransactionProgress(progress,json.content.confirm_count)}}else if(STREAM_TYPE_TOKEN_CONTRIBUTION_UPDATED===json.type){var block=$("#token-contribution-status-"+json.content.id);if(block.length){renderTokenContributionStatus(block,json.content.status,json.content.confirm_count,json.content.transaction_status)}}else if(STREAM_TYPE_TYPE_NEW_SMS===json.type){if("sms"===controller&&"messages"===action&&typeof online_sms_number!==undefined&&json.content.number===online_sms_number){smsReceivedAddMember(json.content.last)}}else if(STREAM_TYPE_SIM_TOP_UP_UPDATED===json.type){if("topUp"===controller&&typeof top_up_id!="undefined"&&json.content.id===top_up_id){reload()}}}})}}function earningChart(){tokenChartMode=Cookies.get("tokenChartMode");if(CHART_MODE_GROUP===tokenChartMode){$("#earning-chart-switcher-button-plus").show();tokenChartMode=CHART_MODE_GROUP}else{$("#earning-chart-switcher-button-minus").show();tokenChartMode=CHART_MODE_SIMPLE}$(window).resize(function(){redrawEarningChart()});$(".earning-chart-switcher-button").click(function(){if(CHART_MODE_GROUP===tokenChartMode){$("#earning-chart-switcher-button-plus").hide();$("#earning-chart-switcher-button-minus").show();tokenChartMode=CHART_MODE_SIMPLE}else{$("#earning-chart-switcher-button-minus").hide();$("#earning-chart-switcher-button-plus").show();tokenChartMode=CHART_MODE_GROUP}Cookies.set("tokenChartMode",tokenChartMode,{expires:365,path:"/",secure:true});reloadEarningChartData();return false});reloadEarningChartData()}function renderTokenTransactionProgress(block,confirm_count){var text=confirm_count+" of "+ETHEREUM_CONF_MIN+" confirmations";block.find(".progress-text").text(text);var percent=Math.min(100,Math.ceil(confirm_count*100/ETHEREUM_CONF_MIN));block.find(".progress-bar").attr("aria-valuenow",percent).css("width",percent+"%")}function renderTokenTransactionStatus(block,status){if(typeof status==="undefined"){status=block.data("status")}block.children(".token-transaction-status-item").hide();var tr=block.closest("tr");if(TOKEN_TRANSACTION_STATUS_WAIT===status){block.children(".token-transaction-status-wait").show();if(!tr.hasClass("row-confirmation"))tr.addClass("row-confirmation")}if(TOKEN_TRANSACTION_STATUS_HOLD===status){block.children(".token-transaction-status-hold").show();if(!tr.hasClass("row-confirmation"))tr.addClass("row-confirmation")}if(TOKEN_TRANSACTION_STATUS_PENDING===status){block.children(".token-transaction-status-pending").show();if(tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation")}else if(TOKEN_TRANSACTION_STATUS_FAIL===status){block.children(".token-transaction-status-fail").show();if(tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation")}else if(TOKEN_TRANSACTION_STATUS_SUCCESS===status){block.children(".token-transaction-status-success").show();if(tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation")}else if(TOKEN_TRANSACTION_STATUS_CONFIRMATION===status){if(!tr.hasClass("row-confirmation"))tr.addClass("row-confirmation");block.children(".token-transaction-status-confirmation").show()}}function renderTokenContributionStatus(block,status,confirm_count,transaction_status){if(typeof status==="undefined")status=block.data("status");if(typeof confirm_count==="undefined")confirm_count=block.data("confirm-count");if(typeof transaction_status==="undefined")transaction_status=block.data("transaction-status");block.children(".token-transaction-status-item").hide();var tr=block.closest("tr");var re=tr.find(".token-contribution-re");if(TOKEN_CONTRIBUTION_STATUS_FAIL===status){block.children(".token-transaction-status-fail").show();if(!tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation");re.hide()}else if(TOKEN_CONTRIBUTION_STATUS_PROCESS===status){block.children(".token-transaction-status-process").show();if(tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation");re.show()}else if(TOKEN_CONTRIBUTION_STATUS_DONE===status){block.children(".token-transaction-status-done").show();if(tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation");re.hide()}else if(TOKEN_CONTRIBUTION_STATUS_PREPARE===status){if(!tr.hasClass("row-confirmation"))tr.addClass("row-confirmation");if(TOKEN_TRANSACTION_STATUS_CONFIRMATION===transaction_status){var id=block.data("transaction-id");var progress=$("#token-transaction-progress-"+id);if(progress.length)renderTokenTransactionProgress(progress,confirm_count);block.children(".token-transaction-status-confirmation").show()}else{block.children(".token-transaction-status-wait").show();if(tr.hasClass("row-confirmation"))tr.removeClass("row-confirmation")}re.hide()}}function renderTransactionStatuses(){var blocks=$(".token-transaction-status");if(blocks.length){blocks.each(function(index,element){var el=$(element);var confirm_count=el.data("confirm-count");renderTokenTransactionStatus(el,el.data("status"),confirm_count);var id=el.data("id");var progress=$("#token-transaction-progress-"+id);if(progress.length)renderTokenTransactionProgress(progress,confirm_count)})}}$(document).ready(function(){if($_META("account")!==undefined){$.fn.equalHeights=function(){var maxHeight=0,$this=$(this);$this.each(function(){var height=$(this).innerHeight();if(height>maxHeight){maxHeight=height}});return $this.css("height",maxHeight)};$("[data-equal]").each(function(){var $this=$(this),target=$this.data("equal");$this.find(target).equalHeights()});$(window).on("load",preloader);$.reject({reject:{all:false,msie:9,chrome:40,firefox:30,safari4:4},display:[],browserShow:true,browserInfo:{chrome:{text:"Google Chrome",url:"http://www.google.com/chrome/"},firefox:{text:"Mozilla Firefox",url:"http://www.mozilla.com/firefox/"},safari:{text:"Safari",url:"http://www.apple.com/safari/download/"},opera:{text:"Opera",url:"http://www.opera.com/download/"},msie:{text:"Microsoft Edge",url:"http://www.microsoft.com/"}},header:"Did you know that your Internet Browser is out of date?",paragraph1:"Your browser is out of date, and may not be compatible with "+"our website. A list of the most popular web browsers can be "+"found below.",paragraph2:"Just click on the icons to get to the download page",close:true,closeMessage:"By closing this window you acknowledge that your experience "+"on this website may be degraded",closeLink:"Close This Window",closeURL:"#",closeESC:true,closeCookie:false,cookieSettings:{path:"/",expires:0},imagePath:"/image/browsers/",overlayBgColor:"#000",overlayOpacity:.8,fadeInTime:"fast",fadeOutTime:"fast",analytics:false});if(BASE_DOMAIN===window.location.hostname)openPushStreamMember();renderTransactionStatuses();function navOpen(){var $btn=$(".js-nav-btn"),$sidebar=$(".js-sidebar"),flag=false;function init(){if(window.innerWidth<1024){if(!flag){$btn.on("click",function(e){e.preventDefault();$btn.toggleClass("active");$sidebar.toggleClass("active")});$(document).on("click.mob",function(e){var target=$(e.target);if(!target.closest($btn).length&&!target.closest($sidebar).length){$btn.removeClass("active");$sidebar.removeClass("active")}});flag=true}}else{if(flag){$btn.off("click").removeClass("active");$sidebar.removeClass("active");$(document).off("click.mob");flag=false}}}if($btn.length){init();$(window).on("resize",init)}}navOpen();

function jsNavLink2(){
    var $link=$(".js-nav-link"),$subNav=$(".js-subnav");
    if($link.length){
        $link.on("click",function(e){
            e.preventDefault();
            var self=$(this), thisNav=self.siblings(".js-subnav"), li=self.closest("li");
            if(li.hasClass("active")){
                if(!li.hasClass("current")){
                    li.removeClass("active");
                    thisNav.slideUp(300)
                }
            }else{
                $subNav.each(function(){
                    var sli=$(this).closest("li");
                    if(sli.hasClass("active")&&!sli.hasClass("current")){
                        $(this).slideUp(300);
                        sli.removeClass("active");
                    }
                });
                li.addClass("active");
                thisNav.slideDown(300);
            }
        });
    }
}
jsNavLink2();

function selectCustom(){var $select=$(".js-select-image");if($select.length){$select.each(function(){$(this).selectric({disableOnMobile:true,nativeOnMobile:true,preventWindowScroll:false,optionsItemBuilder:function(itemData,element,index){return!!itemData.element.data("image")?'<span class="selectric__icon"><img src="'+itemData.element.data("image")+'">'+"</span>"+itemData.text:itemData.text},labelBuilder:function(currItem){return!!currItem.element.data("image")?'<span class="selectric__icon"><img src="'+currItem.element.data("image")+'">'+"</span>"+currItem.text:currItem.text}})})}}selectCustom();function tabs(){var $wrap=$(".js-tabs-wrap");if($wrap.length){$wrap.each(function(){var $that=$(this),$tab=$that.find(".js-tab"),$content=$that.find(".js-tab-content");$tab.on("click",function(e){e.preventDefault();var self=$(this),index=self.index();self.addClass("active").siblings().removeClass("active");$content.eq(index).addClass("active").siblings().removeClass("active")})})}}tabs();function accordeon(){var $link=$(".js-accordeon-link"),$content=$(".js-accordeon-content");if($link.length){$link.on("click",function(e){e.preventDefault();$(this).toggleClass("active");$(this).next($content).slideToggle()})}}accordeon();function contentScroll(){var $scroll=$(".js-content-scroll"),flag=false;function init(){if(window.innerWidth>=1024){if(!flag){$scroll.mCustomScrollbar({scrollbarPosition:"outside",scrollInertia:150});flag=true}}else{if(flag){$scroll.mCustomScrollbar("destroy");$scroll.removeAttr("style");flag=false}}}if($scroll.length){init();$(window).on("resize",init)}}contentScroll();function scrollBugFix(){$(".selectric-items").mouseenter(function(){var cs=$(".js-content-scroll");if(cs.length){cs.mCustomScrollbar("disable")}}).mouseleave(function(){var cs=$(".js-content-scroll");if(cs.length){cs.mCustomScrollbar("update")}})}scrollBugFix();function infoBox(){var $box=$(".js-info-box"),$close=$(".js-info-box-close");if($close.length){$close.on("click",function(){$(this).parent($box).slideUp()})}}infoBox();$(".language-selector-member").click(function(){setLanguage($(this).data("language"));reload();return false});if($(".earning-chart").length){earningChart()}}if($("#sim-top-up-form").length){function redrawSimFillCurrency(){var system=parseInt($("#"+system_field_id).val());if(PAYMENT_SYSTEM_TELE===system){$("#"+amount_field_id).prop("readonly",true);calcSimFillAmount();$("#sim-card-fill-tokens").show()}else{$("#"+amount_field_id).val(trade_balance).prop("readonly",false);$("#sim-card-fill-tokens").hide()}}function calcSimFillAmount(){var tokens=parseInt($("#"+tokens_field_id).val());$("#"+amount_field_id).val(tokens>0&&TOKEN_RATE>0?math.multiply(math.bignumber(tokens),math.bignumber(TOKEN_RATE)).toString():0)}$("#sim-top-up-form").submit(function(){disableButton("#sim-fill-form-button");return true});$("#"+system_field_id).change(redrawSimFillCurrency).keyup(redrawSimFillCurrency).click(redrawSimFillCurrency);redrawSimFillCurrency();$("#"+tokens_field_id).change(calcSimFillAmount).keyup(calcSimFillAmount).click(calcSimFillAmount)}function renderTokenStatus(){var blocks=$(".token-transaction-status");if(blocks.length>0){blocks.each(function(){renderTokenTransactionStatus($(this))})}blocks=$(".token-contribution-status");if(blocks.length>0){blocks.each(function(){renderTokenContributionStatus($(this))})}}renderTokenStatus();function mobileSelect(){var mobileSelectBoxes=$(".mobile-select");if(mobileSelectBoxes.length){$(".mobile-select").change(function(){var selected=$(this).children("option:selected");var label=selected.data("label");$(this).siblings(".data").text(label?label:selected.text());var src=selected.data("image");var image=$(this).siblings(".icon").children("img");if(typeof src!=="undefined"&&src.length&&typeof image!=="undefined"&&image.length)image.attr("src",src)}).change()}}mobileSelect()});