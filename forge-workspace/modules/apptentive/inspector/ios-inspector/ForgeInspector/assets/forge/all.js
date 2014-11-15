/*! Copyright 2011 Trigger Corp. All rights reserved. */
(function(){var n={};var o={};n.config=window.forge.config;o.listeners={};o.eventQueue={};o.queueEvents=true;var s={};var j=[];var h=null;var a=false;var v=function(){if(j.length>0){if(!o.debug||window.catalystConnected){a=true;while(j.length>0){var w=j.shift();if(w[0]=="logging.log"){console.log(w[1].message)}o.priv.call.apply(o.priv,w)}a=false}else{h=setTimeout(v,500)}}};o.priv={call:function(D,C,B,x){if((!o.debug||window.catalystConnected||D==="internal.showDebugWarning")&&(j.length===0||a)){var w=n.tools.UUID();var z=true;if(D==="button.onClicked.addListener"||D==="message.toFocussed"){z=false}if(B||x){s[w]={success:B,error:x,onetime:z}}var y={callid:w,method:D,params:C};o.priv.send(y);if(window._forgeDebug){try{y.start=(new Date().getTime())/1000;window._forgeDebug.forge.APICall.apiRequest(y)}catch(A){}}}else{j.push(arguments);if(!h){h=setTimeout(v,500)}}},send:function(){throw new Error("Forge error: missing bridge to privileged code")},lastResult:undefined,receive:function(w,x){if(x!==undefined&&x===o.priv.lastResult){return"success"}o.priv.lastResult=x;if(w.callid){if(typeof s[w.callid]===undefined){n.log("Nothing stored for call ID: "+w.callid)}var y=s[w.callid];if(y&&y[w.status]){y[w.status](w.content)}if(y&&y.onetime){delete s[w.callid]}if(window._forgeDebug){try{w.end=(new Date().getTime())/1000;window._forgeDebug.forge.APICall.apiResponse(w)}catch(z){}}}else{if(w.event){if(o.listeners[w.event]){o.listeners[w.event].forEach(function(A){if(w.params){A(w.params)}else{A()}})}else{if(o.queueEvents){if(o.eventQueue[w.event]){o.eventQueue[w.event].push(w.params)}else{o.eventQueue[w.event]=[w.params]}}}if(o.listeners["*"]){o.listeners["*"].forEach(function(A){if(w.params){A(w.event,w.params)}else{A(w.event)}})}if(window._forgeDebug){try{w.start=(new Date().getTime())/1000;window._forgeDebug.forge.APICall.apiEvent(w)}catch(z){}}}}return"success"}};setTimeout(function(){o.queueEvents=false;o.eventQueue={}},30000);o.addEventListener=function(w,x){if(o.listeners[w]){o.listeners[w].push(x)}else{o.listeners[w]=[x]}if(o.eventQueue[w]){o.eventQueue[w].forEach(function(y){x(y)});delete o.eventQueue[w]}};o.generateQueryString=function(x){if(!x){return""}if(!(x instanceof Object)){return new String(x).toString()}var y=[];var w=function(D,C){if(D===null){return}else{if(D instanceof Array){var A=0;for(var z in D){var B=(C?C:"")+"["+A+"]";A+=1;if(!D.hasOwnProperty(z)){continue}w(D[z],B)}}else{if(D instanceof Object){for(var z in D){if(!D.hasOwnProperty(z)){continue}var B=z;if(C){B=C+"["+z+"]"}w(D[z],B)}}else{y.push(encodeURIComponent(C)+"="+encodeURIComponent(D))}}}};w(x);return y.join("&").replace("%20","+")};o.generateMultipartString=function(x,z){if(typeof x==="string"){return""}var y="";for(var w in x){if(!x.hasOwnProperty(w)){continue}if(x[w]===null){continue}y+="--"+z+"\r\n";y+='Content-Disposition: form-data; name="'+w.replace('"','\\"')+'"\r\n\r\n';y+=x[w].toString()+"\r\n"}return y};o.generateURI=function(x,w){var y="";if(x.indexOf("?")!==-1){y+=x.split("?")[1]+"&";x=x.split("?")[0]}y+=this.generateQueryString(w)+"&";y=y.substring(0,y.length-1);return x+(y?"?"+y:"")};o.disabledModule=function(w,x){var y="The '"+x+"' module is disabled for this app, enable it in your app config and rebuild in order to use this function";n.logging.error(y);w&&w({message:y,type:"UNAVAILABLE",subtype:"DISABLED_MODULE"})};n.enableDebug=function(){o.debug=true;o.priv.call("internal.showDebugWarning",{},null,null);o.priv.call("internal.hideDebugWarning",{},null,null)};setTimeout(function(){if(window.forge&&window.forge.debug){alert("Warning!\n\n'forge.debug = true;' is no longer supported\n\nUse 'forge.enableDebug();' instead.")}},3000);n.is={mobile:function(){return false},desktop:function(){return false},android:function(){return false},ios:function(){return false},chrome:function(){return false},firefox:function(){return false},safari:function(){return false},ie:function(){return false},web:function(){return false},orientation:{portrait:function(){return false},landscape:function(){return false}},connection:{connected:function(){return true},wifi:function(){return true}}};n.is["mobile"]=function(){return true};n.is["ios"]=function(){return true};n.is["orientation"]["portrait"]=function(){return o.currentOrientation=="portrait"};n.is["orientation"]["landscape"]=function(){return o.currentOrientation=="landscape"};n.is["connection"]["connected"]=function(){return o.currentConnectionState.connected};n.is["connection"]["wifi"]=function(){return o.currentConnectionState.wifi};var k=function(C,A,D){var y=[];stylize=function(F,E){return F};function w(E){return E instanceof RegExp||(typeof E==="object"&&Object.prototype.toString.call(E)==="[object RegExp]")}function x(E){return E instanceof Array||Array.isArray(E)||(E&&E!==Object.prototype&&x(E.__proto__))}function z(G){if(G instanceof Date){return true}if(typeof G!=="object"){return false}var E=Date.prototype&&Object.getOwnPropertyNames(Date.prototype);var F=G.__proto__&&Object.getOwnPropertyNames(G.__proto__);return JSON.stringify(F)===JSON.stringify(E)}function B(Q,N){try{if(Q&&typeof Q.inspect==="function"&&!(Q.constructor&&Q.constructor.prototype===Q)){return Q.inspect(N)}switch(typeof Q){case"undefined":return stylize("undefined","undefined");case"string":var E="'"+JSON.stringify(Q).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return stylize(E,"string");case"number":return stylize(""+Q,"number");case"boolean":return stylize(""+Q,"boolean")}if(Q===null){return stylize("null","null")}if(Q instanceof Document){return(new XMLSerializer()).serializeToString(Q)}var K=Object.keys(Q);var R=A?Object.getOwnPropertyNames(Q):K;if(typeof Q==="function"&&R.length===0){var F=Q.name?": "+Q.name:"";return stylize("[Function"+F+"]","special")}if(w(Q)&&R.length===0){return stylize(""+Q,"regexp")}if(z(Q)&&R.length===0){return stylize(Q.toUTCString(),"date")}var G,O,L;if(x(Q)){O="Array";L=["[","]"]}else{O="Object";L=["{","}"]}if(typeof Q==="function"){var J=Q.name?": "+Q.name:"";G=" [Function"+J+"]"}else{G=""}if(w(Q)){G=" "+Q}if(z(Q)){G=" "+Q.toUTCString()}if(R.length===0){return L[0]+G+L[1]}if(N<0){if(w(Q)){return stylize(""+Q,"regexp")}else{return stylize("[Object]","special")}}y.push(Q);var I=R.map(function(T){var S,U;if(Q.__lookupGetter__){if(Q.__lookupGetter__(T)){if(Q.__lookupSetter__(T)){U=stylize("[Getter/Setter]","special")}else{U=stylize("[Getter]","special")}}else{if(Q.__lookupSetter__(T)){U=stylize("[Setter]","special")}}}if(K.indexOf(T)<0){S="["+T+"]"}if(!U){if(y.indexOf(Q[T])<0){if(N===null){U=B(Q[T])}else{U=B(Q[T],N-1)}if(U.indexOf("\n")>-1){if(x(Q)){U=U.split("\n").map(function(V){return"  "+V}).join("\n").substr(2)}else{U="\n"+U.split("\n").map(function(V){return"   "+V}).join("\n")}}}else{U=stylize("[Circular]","special")}}if(typeof S==="undefined"){if(O==="Array"&&T.match(/^\d+$/)){return U}S=JSON.stringify(""+T);if(S.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){S=S.substr(1,S.length-2);S=stylize(S,"name")}else{S=S.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");S=stylize(S,"string")}}return S+": "+U});y.pop();var P=0;var H=I.reduce(function(S,T){P++;if(T.indexOf("\n")>=0){P++}return S+T.length+1},0);if(H>50){I=L[0]+(G===""?"":G+"\n ")+" "+I.join(",\n  ")+" "+L[1]}else{I=L[0]+G+" "+I.join(", ")+" "+L[1]}return I}catch(M){return"[No string representation]"}}return B(C,(typeof D==="undefined"?2:D))};var b=function(x,y){if("logging" in n.config){var w=n.config.logging.marker||"FORGE"}else{var w="FORGE"}x="["+w+"] "+(x.indexOf("\n")===-1?"":"\n")+x;o.priv.call("logging.log",{message:x,level:y});if(typeof console!=="undefined"){switch(y){case 10:if(console.debug!==undefined&&!(console.debug.toString&&console.debug.toString().match("alert"))){console.debug(x)}break;case 30:if(console.warn!==undefined&&!(console.warn.toString&&console.warn.toString().match("alert"))){console.warn(x)}break;case 40:case 50:if(console.error!==undefined&&!(console.error.toString&&console.error.toString().match("alert"))){console.error(x)}break;default:case 20:if(console.info!==undefined&&!(console.info.toString&&console.info.toString().match("alert"))){console.info(x)}break}}};var m=function(w,x){if(w in n.logging.LEVELS){return n.logging.LEVELS[w]}else{n.logging.__logMessage("Unknown configured logging level: "+w);return x}};var t=function(x){var A=function(B){if(B.message){return B.message}else{if(B.description){return B.description}else{return""+B}}};if(x){var z="\nError: "+A(x);try{if(x.lineNumber){z+=" on line number "+x.lineNumber}if(x.fileName){var w=x.fileName;z+=" in file "+w.substr(w.lastIndexOf("/")+1)}}catch(y){}if(x.stack){z+="\r\nStack trace:\r\n"+x.stack}return z}return""};n.logging={LEVELS:{ALL:0,DEBUG:10,INFO:20,WARNING:30,ERROR:40,CRITICAL:50},debug:function(x,w){n.logging.log(x,w,n.logging.LEVELS.DEBUG)},info:function(x,w){n.logging.log(x,w,n.logging.LEVELS.INFO)},warning:function(x,w){n.logging.log(x,w,n.logging.LEVELS.WARNING)},error:function(x,w){n.logging.log(x,w,n.logging.LEVELS.ERROR)},critical:function(x,w){n.logging.log(x,w,n.logging.LEVELS.CRITICAL)},log:function(x,w,A){if(typeof(A)==="undefined"){var A=n.logging.LEVELS.INFO}try{var y=m(n.config.core.general.logging.level,n.logging.LEVELS.ALL)}catch(z){var y=n.logging.LEVELS.ALL}if(A>=y){b(k(x,false,10)+t(w),A)}}};n.internal={ping:function(x,y,w){o.priv.call("internal.ping",{data:[x]},y,w)},call:o.priv.call,addEventListener:o.addEventListener,listeners:o.listeners,configForModule:function(w){return n.config.modules[n.module_mapping[w]].config}};var u={};o.currentOrientation=u;o.currentConnectionState=u;o.addEventListener("internal.orientationChange",function(w){if(o.currentOrientation!=w.orientation){o.currentOrientation=w.orientation;o.priv.receive({event:"event.orientationChange"})}});o.addEventListener("internal.connectionStateChange",function(w){if(w.connected!=o.currentConnectionState.connected||w.wifi!=o.currentConnectionState.wifi){o.currentConnectionState=w;o.priv.receive({event:"event.connectionStateChange"})}});n.event={menuPressed:{addListener:function(x,w){o.addEventListener("event.menuPressed",x)}},backPressed:{addListener:function(x,w){o.addEventListener("event.backPressed",function(){x(function(){o.priv.call("event.backPressed_closeApplication",{})})})},preventDefault:function(x,w){o.priv.call("event.backPressed_preventDefault",{},x,w)},restoreDefault:function(x,w){o.priv.call("event.backPressed_restoreDefault",{},x,w)}},messagePushed:{addListener:function(x,w){o.addEventListener("event.messagePushed",x)}},orientationChange:{addListener:function(x,w){o.addEventListener("event.orientationChange",x);if(typeof u!=="undefined"&&o.currentOrientation!==u){o.priv.receive({event:"event.orientationChange"})}}},connectionStateChange:{addListener:function(x,w){o.addEventListener("event.connectionStateChange",x)}},appPaused:{addListener:function(x,w){o.addEventListener("event.appPaused",x)}},appResumed:{addListener:function(x,w){o.addEventListener("event.appResumed",x)}},statusBarTapped:{addListener:function(x,w){o.addEventListener("event.statusBarTapped",x)}}};n.reload={updateAvailable:function(x,w){o.priv.call("reload.updateAvailable",{},x,w)},update:function(x,w){o.priv.call("reload.update",{},x,w)},pauseUpdate:function(x,w){o.priv.call("reload.pauseUpdate",{},x,w)},applyNow:function(x,w){n.logging.error("reload.applyNow has been disabled, please see docs.trigger.io for more information.");w({message:"reload.applyNow has been disabled, please see docs.trigger.io for more information.",type:"UNAVAILABLE"})},applyAndRestartApp:function(x,w){o.priv.call("reload.applyAndRestartApp",{},x,w)},switchStream:function(x,y,w){o.priv.call("reload.switchStream",{streamid:x},y,w)},updateReady:{addListener:function(x,w){o.addEventListener("reload.updateReady",x)}},updateProgress:{addListener:function(x,w){o.addEventListener("reload.updateProgress",x)}}};n.live={restartApp:function(x,w){o.priv.call("live.restartApp",{},x,w)}};var r=true;var p=function(){document.removeEventListener("DOMContentLoaded",p,false);if(typeof window.LiveReload!=="undefined"&&n.is.mobile()){var w=(function(){function x(z,y){this.window=z;this.host=y}x.prototype.reload=function(z,y){if(z.match(/\.css$/i)){return false}else{if(z.match(/\.(jpe?g|png|gif)$/i)){return false}}if(r){r=false;n.live.restartApp()}return true};x.identifier="forgelive";x.version="1.0";return x})();window.LiveReload.addPlugin(w)}};document.addEventListener("DOMContentLoaded",p,false);n.tools={UUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(y){var x=Math.random()*16|0;var w=y=="x"?x:(x&3|8);return w.toString(16)}).toUpperCase()},getURL:function(x,y,w){o.priv.call("tools.getURL",{name:x.toString()},y,w)}};var q=[];var g=false;o.priv.get=function(){var w=JSON.stringify(q);q=[];return w};var f=[],l="zero-timeout-message";function d(w){f.push(w);window.postMessage(l,"*")}function c(w){setTimeout(w,0)}function e(w){if(w.source==window&&w.data==l){if(w.stopPropagation){w.stopPropagation()}if(f.length){f.shift()()}}}if(window.postMessage){if(window.addEventListener){window.addEventListener("message",e,true)}else{if(window.attachEvent){window.attachEvent("onmessage",e)}}window.setZeroTimeout=d}else{window.setZeroTimeout=c}var i=function(){if(g&&!window.forge._flushing){window.forge._flushing=true;window.forge._flushingInterval=setInterval(function(){window.location.href="forge://go"},100);c(function(){window.location.href="forge://go"})}};o.priv.send=function(w){if(window.webkit&&g){window.webkit.messageHandlers.forge.postMessage(w)}else{q.push(w);i()}};document.addEventListener("DOMContentLoaded",function(){g=true;n.internal.call("internal.ping",{data:"hello"})},false);n._get=o.priv.get;n._receive=function(){var w=arguments;c(function(){o.priv.receive.apply(this,w)});return"success"};window.forge=n})();(function () {
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

	engage: function (success, error, event, customData, extendedData) {
		forge.logging.info("Event: " + event);
		forge.logging.info("customData: " + customData);
		forge.logging.info("extendedData: " + extendedData);
		forge.internal.call(
			'apptentive.engage', {
				event: event,
				customData: (!customData || customData == "") ? {} : customData,
				extendedData: (!extendedData || extendedData == "") ? [] : extendedData
			}, 
			success,
			error
		);
	},

	// ************************************************************************************************************************************************
	// Extended Data for Events
	// ************************************************************************************************************************************************

	makeExtendedDataTime: function (success, error, time) {
		forge.internal.call(
			'apptentive.makeExtendedDataTime',
			{
				time: (time / 1000)
			},
			success,
			error
		);
	},

	makeExtendedDataCommerce: function (success, error, id, affiliation, revenue, shipping, tax, currency, items) {
		forge.internal.call(
			'apptentive.makeExtendedDataCommerce',
			{
				success: success,
				error: error,
				id: id,
				affiliation: affiliation,
				revenue: revenue,
				shipping: shipping,
				tax: tax,
				currency: currency,
				items: items
			},
			success,
			error
		);
	},

	makextendedDataCommerceItem: function (success, error, id, name, category, price, quantity, currency) {
		forge.internal.call(
			'apptentive.makeExtendedDataCommerceItem',
			{
				id: id,
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