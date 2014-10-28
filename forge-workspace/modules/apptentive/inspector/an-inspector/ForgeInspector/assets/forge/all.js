/*! Copyright 2011 Trigger Corp. All rights reserved. */
(function(){var l={};var h={};l.config=window.forge.config;h.listeners={};h.eventQueue={};h.queueEvents=true;var c={};var g=[];var f=null;var k=false;var n=function(){if(g.length>0){if(!h.debug||window.catalystConnected){k=true;while(g.length>0){var o=g.shift();if(o[0]=="logging.log"){console.log(o[1].message)}h.priv.call.apply(h.priv,o)}k=false}else{f=setTimeout(n,500)}}};h.priv={call:function(v,u,t,p){if((!h.debug||window.catalystConnected||v==="internal.showDebugWarning")&&(g.length===0||k)){var o=l.tools.UUID();var r=true;if(v==="button.onClicked.addListener"||v==="message.toFocussed"){r=false}if(t||p){c[o]={success:t,error:p,onetime:r}}var q={callid:o,method:v,params:u};h.priv.send(q);if(window._forgeDebug){try{q.start=(new Date().getTime())/1000;window._forgeDebug.forge.APICall.apiRequest(q)}catch(s){}}}else{g.push(arguments);if(!f){f=setTimeout(n,500)}}},send:function(){throw new Error("Forge error: missing bridge to privileged code")},lastResult:undefined,receive:function(o,p){if(p!==undefined&&p===h.priv.lastResult){return"success"}h.priv.lastResult=p;if(o.callid){if(typeof c[o.callid]===undefined){l.log("Nothing stored for call ID: "+o.callid)}var q=c[o.callid];if(q&&q[o.status]){q[o.status](o.content)}if(q&&q.onetime){delete c[o.callid]}if(window._forgeDebug){try{o.end=(new Date().getTime())/1000;window._forgeDebug.forge.APICall.apiResponse(o)}catch(r){}}}else{if(o.event){if(h.listeners[o.event]){h.listeners[o.event].forEach(function(s){if(o.params){s(o.params)}else{s()}})}else{if(h.queueEvents){if(h.eventQueue[o.event]){h.eventQueue[o.event].push(o.params)}else{h.eventQueue[o.event]=[o.params]}}}if(h.listeners["*"]){h.listeners["*"].forEach(function(s){if(o.params){s(o.event,o.params)}else{s(o.event)}})}if(window._forgeDebug){try{o.start=(new Date().getTime())/1000;window._forgeDebug.forge.APICall.apiEvent(o)}catch(r){}}}}return"success"}};setTimeout(function(){h.queueEvents=false;h.eventQueue={}},30000);h.addEventListener=function(o,p){if(h.listeners[o]){h.listeners[o].push(p)}else{h.listeners[o]=[p]}if(h.eventQueue[o]){h.eventQueue[o].forEach(function(q){p(q)});delete h.eventQueue[o]}};h.generateQueryString=function(p){if(!p){return""}if(!(p instanceof Object)){return new String(p).toString()}var q=[];var o=function(v,u){if(v===null){return}else{if(v instanceof Array){var s=0;for(var r in v){var t=(u?u:"")+"["+s+"]";s+=1;if(!v.hasOwnProperty(r)){continue}o(v[r],t)}}else{if(v instanceof Object){for(var r in v){if(!v.hasOwnProperty(r)){continue}var t=r;if(u){t=u+"["+r+"]"}o(v[r],t)}}else{q.push(encodeURIComponent(u)+"="+encodeURIComponent(v))}}}};o(p);return q.join("&").replace("%20","+")};h.generateMultipartString=function(p,r){if(typeof p==="string"){return""}var q="";for(var o in p){if(!p.hasOwnProperty(o)){continue}if(p[o]===null){continue}q+="--"+r+"\r\n";q+='Content-Disposition: form-data; name="'+o.replace('"','\\"')+'"\r\n\r\n';q+=p[o].toString()+"\r\n"}return q};h.generateURI=function(p,o){var q="";if(p.indexOf("?")!==-1){q+=p.split("?")[1]+"&";p=p.split("?")[0]}q+=this.generateQueryString(o)+"&";q=q.substring(0,q.length-1);return p+(q?"?"+q:"")};h.disabledModule=function(o,p){var q="The '"+p+"' module is disabled for this app, enable it in your app config and rebuild in order to use this function";l.logging.error(q);o&&o({message:q,type:"UNAVAILABLE",subtype:"DISABLED_MODULE"})};l.enableDebug=function(){h.debug=true;h.priv.call("internal.showDebugWarning",{},null,null);h.priv.call("internal.hideDebugWarning",{},null,null)};setTimeout(function(){if(window.forge&&window.forge.debug){alert("Warning!\n\n'forge.debug = true;' is no longer supported\n\nUse 'forge.enableDebug();' instead.")}},3000);l.is={mobile:function(){return false},desktop:function(){return false},android:function(){return false},ios:function(){return false},chrome:function(){return false},firefox:function(){return false},safari:function(){return false},ie:function(){return false},web:function(){return false},orientation:{portrait:function(){return false},landscape:function(){return false}},connection:{connected:function(){return true},wifi:function(){return true}}};l.is["mobile"]=function(){return true};l.is["android"]=function(){return true};l.is["orientation"]["portrait"]=function(){return h.currentOrientation=="portrait"};l.is["orientation"]["landscape"]=function(){return h.currentOrientation=="landscape"};l.is["connection"]["connected"]=function(){return h.currentConnectionState.connected};l.is["connection"]["wifi"]=function(){return h.currentConnectionState.wifi};var d=function(u,s,v){var q=[];stylize=function(x,w){return x};function o(w){return w instanceof RegExp||(typeof w==="object"&&Object.prototype.toString.call(w)==="[object RegExp]")}function p(w){return w instanceof Array||Array.isArray(w)||(w&&w!==Object.prototype&&p(w.__proto__))}function r(y){if(y instanceof Date){return true}if(typeof y!=="object"){return false}var w=Date.prototype&&Object.getOwnPropertyNames(Date.prototype);var x=y.__proto__&&Object.getOwnPropertyNames(y.__proto__);return JSON.stringify(x)===JSON.stringify(w)}function t(I,F){try{if(I&&typeof I.inspect==="function"&&!(I.constructor&&I.constructor.prototype===I)){return I.inspect(F)}switch(typeof I){case"undefined":return stylize("undefined","undefined");case"string":var w="'"+JSON.stringify(I).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return stylize(w,"string");case"number":return stylize(""+I,"number");case"boolean":return stylize(""+I,"boolean")}if(I===null){return stylize("null","null")}if(I instanceof Document){return(new XMLSerializer()).serializeToString(I)}var C=Object.keys(I);var J=s?Object.getOwnPropertyNames(I):C;if(typeof I==="function"&&J.length===0){var x=I.name?": "+I.name:"";return stylize("[Function"+x+"]","special")}if(o(I)&&J.length===0){return stylize(""+I,"regexp")}if(r(I)&&J.length===0){return stylize(I.toUTCString(),"date")}var y,G,D;if(p(I)){G="Array";D=["[","]"]}else{G="Object";D=["{","}"]}if(typeof I==="function"){var B=I.name?": "+I.name:"";y=" [Function"+B+"]"}else{y=""}if(o(I)){y=" "+I}if(r(I)){y=" "+I.toUTCString()}if(J.length===0){return D[0]+y+D[1]}if(F<0){if(o(I)){return stylize(""+I,"regexp")}else{return stylize("[Object]","special")}}q.push(I);var A=J.map(function(L){var K,M;if(I.__lookupGetter__){if(I.__lookupGetter__(L)){if(I.__lookupSetter__(L)){M=stylize("[Getter/Setter]","special")}else{M=stylize("[Getter]","special")}}else{if(I.__lookupSetter__(L)){M=stylize("[Setter]","special")}}}if(C.indexOf(L)<0){K="["+L+"]"}if(!M){if(q.indexOf(I[L])<0){if(F===null){M=t(I[L])}else{M=t(I[L],F-1)}if(M.indexOf("\n")>-1){if(p(I)){M=M.split("\n").map(function(N){return"  "+N}).join("\n").substr(2)}else{M="\n"+M.split("\n").map(function(N){return"   "+N}).join("\n")}}}else{M=stylize("[Circular]","special")}}if(typeof K==="undefined"){if(G==="Array"&&L.match(/^\d+$/)){return M}K=JSON.stringify(""+L);if(K.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){K=K.substr(1,K.length-2);K=stylize(K,"name")}else{K=K.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");K=stylize(K,"string")}}return K+": "+M});q.pop();var H=0;var z=A.reduce(function(K,L){H++;if(L.indexOf("\n")>=0){H++}return K+L.length+1},0);if(z>50){A=D[0]+(y===""?"":y+"\n ")+" "+A.join(",\n  ")+" "+D[1]}else{A=D[0]+y+" "+A.join(", ")+" "+D[1]}return A}catch(E){return"[No string representation]"}}return t(u,(typeof v==="undefined"?2:v))};var i=function(p,q){if("logging" in l.config){var o=l.config.logging.marker||"FORGE"}else{var o="FORGE"}p="["+o+"] "+(p.indexOf("\n")===-1?"":"\n")+p;h.priv.call("logging.log",{message:p,level:q});if(typeof console!=="undefined"){switch(q){case 10:if(console.debug!==undefined&&!(console.debug.toString&&console.debug.toString().match("alert"))){console.debug(p)}break;case 30:if(console.warn!==undefined&&!(console.warn.toString&&console.warn.toString().match("alert"))){console.warn(p)}break;case 40:case 50:if(console.error!==undefined&&!(console.error.toString&&console.error.toString().match("alert"))){console.error(p)}break;default:case 20:if(console.info!==undefined&&!(console.info.toString&&console.info.toString().match("alert"))){console.info(p)}break}}};var a=function(o,p){if(o in l.logging.LEVELS){return l.logging.LEVELS[o]}else{l.logging.__logMessage("Unknown configured logging level: "+o);return p}};var b=function(p){var s=function(t){if(t.message){return t.message}else{if(t.description){return t.description}else{return""+t}}};if(p){var r="\nError: "+s(p);try{if(p.lineNumber){r+=" on line number "+p.lineNumber}if(p.fileName){var o=p.fileName;r+=" in file "+o.substr(o.lastIndexOf("/")+1)}}catch(q){}if(p.stack){r+="\r\nStack trace:\r\n"+p.stack}return r}return""};l.logging={LEVELS:{ALL:0,DEBUG:10,INFO:20,WARNING:30,ERROR:40,CRITICAL:50},debug:function(p,o){l.logging.log(p,o,l.logging.LEVELS.DEBUG)},info:function(p,o){l.logging.log(p,o,l.logging.LEVELS.INFO)},warning:function(p,o){l.logging.log(p,o,l.logging.LEVELS.WARNING)},error:function(p,o){l.logging.log(p,o,l.logging.LEVELS.ERROR)},critical:function(p,o){l.logging.log(p,o,l.logging.LEVELS.CRITICAL)},log:function(p,o,s){if(typeof(s)==="undefined"){var s=l.logging.LEVELS.INFO}try{var q=a(l.config.core.general.logging.level,l.logging.LEVELS.ALL)}catch(r){var q=l.logging.LEVELS.ALL}if(s>=q){i(d(p,false,10)+b(o),s)}}};l.internal={ping:function(p,q,o){h.priv.call("internal.ping",{data:[p]},q,o)},call:h.priv.call,addEventListener:h.addEventListener,listeners:h.listeners,configForModule:function(o){return l.config.modules[l.module_mapping[o]].config}};var j={};h.currentOrientation=j;h.currentConnectionState=j;h.addEventListener("internal.orientationChange",function(o){if(h.currentOrientation!=o.orientation){h.currentOrientation=o.orientation;h.priv.receive({event:"event.orientationChange"})}});h.addEventListener("internal.connectionStateChange",function(o){if(o.connected!=h.currentConnectionState.connected||o.wifi!=h.currentConnectionState.wifi){h.currentConnectionState=o;h.priv.receive({event:"event.connectionStateChange"})}});l.event={menuPressed:{addListener:function(p,o){h.addEventListener("event.menuPressed",p)}},backPressed:{addListener:function(p,o){h.addEventListener("event.backPressed",function(){p(function(){h.priv.call("event.backPressed_closeApplication",{})})})},preventDefault:function(p,o){h.priv.call("event.backPressed_preventDefault",{},p,o)},restoreDefault:function(p,o){h.priv.call("event.backPressed_restoreDefault",{},p,o)}},messagePushed:{addListener:function(p,o){h.addEventListener("event.messagePushed",p)}},orientationChange:{addListener:function(p,o){h.addEventListener("event.orientationChange",p);if(typeof j!=="undefined"&&h.currentOrientation!==j){h.priv.receive({event:"event.orientationChange"})}}},connectionStateChange:{addListener:function(p,o){h.addEventListener("event.connectionStateChange",p)}},appPaused:{addListener:function(p,o){h.addEventListener("event.appPaused",p)}},appResumed:{addListener:function(p,o){h.addEventListener("event.appResumed",p)}},statusBarTapped:{addListener:function(p,o){h.addEventListener("event.statusBarTapped",p)}}};l.reload={updateAvailable:function(p,o){h.priv.call("reload.updateAvailable",{},p,o)},update:function(p,o){h.priv.call("reload.update",{},p,o)},pauseUpdate:function(p,o){h.priv.call("reload.pauseUpdate",{},p,o)},applyNow:function(p,o){l.logging.error("reload.applyNow has been disabled, please see docs.trigger.io for more information.");o({message:"reload.applyNow has been disabled, please see docs.trigger.io for more information.",type:"UNAVAILABLE"})},applyAndRestartApp:function(p,o){h.priv.call("reload.applyAndRestartApp",{},p,o)},switchStream:function(p,q,o){h.priv.call("reload.switchStream",{streamid:p},q,o)},updateReady:{addListener:function(p,o){h.addEventListener("reload.updateReady",p)}},updateProgress:{addListener:function(p,o){h.addEventListener("reload.updateProgress",p)}}};l.live={restartApp:function(p,o){h.priv.call("live.restartApp",{},p,o)}};var e=true;var m=function(){document.removeEventListener("DOMContentLoaded",m,false);if(typeof window.LiveReload!=="undefined"&&l.is.mobile()){var o=(function(){function p(r,q){this.window=r;this.host=q}p.prototype.reload=function(r,q){if(r.match(/\.css$/i)){return false}else{if(r.match(/\.(jpe?g|png|gif)$/i)){return false}}if(e){e=false;l.live.restartApp()}return true};p.identifier="forgelive";p.version="1.0";return p})();window.LiveReload.addPlugin(o)}};document.addEventListener("DOMContentLoaded",m,false);l.tools={UUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(q){var p=Math.random()*16|0;var o=q=="x"?p:(p&3|8);return o.toString(16)}).toUpperCase()},getURL:function(p,q,o){h.priv.call("tools.getURL",{name:p.toString()},q,o)}};h.priv.send=function(p){if(window.__forge["callJavaFromJavaScript"]===undefined){return}var o=((p.params!==undefined)?JSON.stringify(p.params):"");window.__forge["callJavaFromJavaScript"](p.callid,p.method,o)};h.priv.send({callid:"ready",method:""});l._receive=h.priv.receive;window.forge=l})();(function () {
forge.apptentive = {
	
	// ************************************************************************************************************************************************
	// Presenting UI
	// ************************************************************************************************************************************************

	showMessageCenter: function (success, error) {
		forge.internal.call('apptentive.showMessageCenter', {}, success, error);
	},
		
	showMessageCenterWithCustomData: function (success, error, customData) {
		forge.internal.call(
			'apptentive.showMessageCenterWithCustomData',
			{
				customData: customData
			},
			success,
			error
		);
	},
	
	getUnreadMessageCount: function (success, error) {
		forge.internal.call('apptentive.getUnreadMessageCount', {}, success, error);
	},

// iOS Only?
	didReceiveRemoteNotification: function (success, error, notificationUserInfo) {
		forge.internal.call(
			'apptentive.didReceiveRemoteNotification',
			{
				notificationUserInfo: notificationUserInfo
			},
			success,
			error
		);
	},

	engage: function (success, error, event) {
		forge.internal.call(
			'apptentive.engage', {
				event: event
			},
			success,
			error
		);
	},
	
	engage: function (success, error, event, customData) {
		forge.internal.call(
			'apptentive.engage', {
				event: event,
				customData: customData
			},
			success,
			error
		);
	},
	
	engage: function (success, error, event, customData, extendedData) {
		forge.internal.call(
			'apptentive.engage', {
				event: event,
				customData: customData,
				extendedData: extendedData
			}, 
			success,
			error
		);
	},
	

	// ************************************************************************************************************************************************
	// Extended Data for Events
	// ************************************************************************************************************************************************

	makeExtendedDataDate: function (success, error, date) {
		forge.internal.call(
			'apptentive.extendedDataDate',
			{
				date: date.getTime() / 1000
			},
			success,
			error
		);
	},
	
	makeExtendedDataCommerce: function (success, error, transactionID, affiliation, revenue, shipping, tax, currency, commerceItems) {
		forge.internal.call(
			'apptentive.makeExtendedDataCommerce',
			{
				success: success,
				error: error,
				transactionID: transactionID,
				affiliation: affiliation,
				revenue: revenue,
				shipping: shipping,
				tax: tax,
				currency: currency,
				commerceItems: commerceItems
			},
			success,
			error
		);
	},

	makeExtendedDataCommerceItem: function (success, error, itemID, name, category, price, quantity, currency) {
		forge.internal.call(
			'apptentive.makeExtendedDataCommerceItem',
			{
				itemID: itemID,
				name: name,
				category: category,
				price: price,
				quantity: quantity,
				currency: currency
			},
			success,
			error
		);
	},

	makeExtendedDataLocation: function (success, error, longitude, latitude) {
		forge.internal.call(
			'apptentive.makeExtendedDataLocation',
			{
				longitude: longitude,
				latitude: latitude
			},
			success,
			error
		);
	},


	// ************************************************************************************************************************************************
	// Attach Text, Images, and Files
	// ************************************************************************************************************************************************
	
	// TODO: Figure out what trigger devs will have access to in regards to files.
	
	sendAttachment: function (success, error, text) {
		forge.internal.call(
			'apptentive.sendAttachment',
			{
				text: text
			},
			success,
			error
		);
	},
		
	sendAttachment: function (success, error, imagePath) {
		forge.internal.call(
			'apptentive.sendAttachment',
			{
				imagePath: imagePath
			},
			success,
			error
		);
	},
		
	sendAttachment: function (success, error, filePath, mimeType) {
		forge.internal.call(
			'apptentive.sendAttachment',
			{
				filePath: filePath,
				mimeType: mimeType
			},
			success,
			error
		);
	},

	// ************************************************************************************************************************************************
	// Add Custom Device or Person Data
	// ************************************************************************************************************************************************

	setInitialUserName: function (success, error, initialUserName) {
		forge.internal.call(
			'apptentive.setInitialUserName',
			{
				initialUserName: initialUserName
			},
			success,
			error
		);
	},

	setInitialUserEmailAddress: function (success, error, initialUserEmailAddress) {
		forge.internal.call(
			'apptentive.setInitialUserEmailAddress',
			{
				initialUserEmailAddress: initialUserEmailAddress
			},
			success,
			error
		);
	},

	addCustomDeviceData: function (success, error, key, value) {
		forge.internal.call(
			'apptentive.addCustomDeviceData', {
				key: key,
				value: value
			},
			success,
			error
		);
	},

	removeCustomDeviceData: function (success, error, key) {
		forge.internal.call('apptentive.removeCustomDeviceData', {
			key: key
		}, success, error);
	},

	addCustomPersonData: function (success, error, key, value) {
		forge.internal.call('apptentive.addCustomPersonData', {
			key: key,
			value: value
		}, success, error);
	},

	removeCustomPersonData: function (success, error, key) {
		forge.internal.call('apptentive.removeCustomPersonData', {
			key: key
		}, success, error);
	},
	
	// ************************************************************************************************************************************************
	// Open App Store
	// ************************************************************************************************************************************************

/*
	openAppStore: function (success, error) {
		forge.internal.call(
			'apptentive.openAppStore',
			{},
			success,
			error
		);
	},
*/

	// ************************************************************************************************************************************************
	// SDK Events
	// ************************************************************************************************************************************************

	addUnreadMessageCountChangedListener: function (listener) {
		forge.logging.info("Added unreadMessageCountChanged Listener.");
		forge.internal.addEventListener("apptentive.unreadMessageCountChanged", listener);
	},

	addSurveyFinishedListener: function (listener) {
		forge.logging.info("Added surveyFinished Listener.");
		forge.internal.addEventListener("apptentive.surveyFinished", listener);
	},
	
	// ************************************************************************************************************************************************
	// Integrate With Other Services
	// ************************************************************************************************************************************************

	addIntegration: function (success, error, integration, configuration) {
		forge.internal.call(
			'apptentive.addIntegration',
			{
				integration: integration,
				configuration: configuration
			},
			success,
			error
		);
	},
	
	addIntegration: function (success, error, integration, deviceToken) {
		forge.internal.call(
			'apptentive.addIntegration',
			{
				integration: integration,
				deviceToken: deviceToken
			},
			success,
			error
		);
	},
	
	removeIntegration: function (success, error, integration) {
		forge.internal.call(
			'apptentive.removeIntegration',
			{
				integration: integration
			},
			success,
			error
		);
	},

// Maybe 
	addUrbanAirshipIntegration: function (success, error, deviceToken) {
		forge.internal.call(
			'apptentive.addUrbanAirshipIntegration',
			{
				deviceToken: deviceToken
			},
			success,
			error
		);
	},

	addAmazonSNSIntegration: function (success, error, deviceToken) {
		forge.internal.call(
			'apptentive.addAmazonSNSIntegration',
			{
				deviceToken: deviceToken
			},
			success,
			error
		);
	},
	
	addParseIntegration: function (success, error, deviceToken) {
		forge.internal.call(
			'apptentive.addParseIntegration',
			{
				deviceToken: deviceToken
			},
			success,
			error
		);
	},

	// ************************************************************************************************************************************************
	// Debug only
	// ************************************************************************************************************************************************

	// Add setDebugMode()
};

})();