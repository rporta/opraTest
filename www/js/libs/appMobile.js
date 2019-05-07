var appMobile = {
	"background" : {
		enable : function(){
			cordova.plugins.backgroundMode.enable();
		},
		disable : function(){
			cordova.plugins.backgroundMode.disable();
		},
		moveToBackground : function(){
			cordova.plugins.backgroundMode.moveToBackground();
		},
		moveToForeground : function(){
			cordova.plugins.backgroundMode.moveToForeground();
		},
	},
	"sms" : {
		hasReadPermission : function(cbRs, cbErr){
			window.plugins.smsLog.hasReadPermission(cbRs, cbErr);
		},
		requestReadPermission : function(cbRs, cbErr){
			window.plugins.smsLog.requestReadPermission(cbRs, cbErr);
		},
		getSmsLog : function(filters, withBody, cbRs, cbErr){
			window.plugins.smsLog.getSmsLog(filters, withBody, cbRs, cbErr);
		},
	},
	"screenshot" : {
		save : function(cb, format, quality, filename){
			navigator.screenshot.save(cb, format, quality, filename);
		},
		URI : function(cb, quality){
			navigator.screenshot.URI(cb, quality);
		},
	},
	"socket" : {
		newSocket : function (host, port){
			return io("http://" + host + ":" + port);
		}
	}
};