cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-smslog.SmsLog",
      "file": "plugins/cordova-plugin-smslog/www/smslog.js",
      "pluginId": "cordova-plugin-smslog",
      "merges": [
        "window.plugins.smsLog"
      ]
    },
    {
      "id": "cordova-plugin-smslog.SmsLogAndroid",
      "file": "plugins/cordova-plugin-smslog/www/android/smslog.js",
      "pluginId": "cordova-plugin-smslog",
      "merges": [
        "window.plugins.smsLog"
      ]
    },
    {
      "id": "com.darktalker.cordova.screenshot.screenshot",
      "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
      "pluginId": "com.darktalker.cordova.screenshot",
      "merges": [
        "navigator.screenshot"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-smslog": "1.0.0",
    "com.darktalker.cordova.screenshot": "0.1.6"
  };
});