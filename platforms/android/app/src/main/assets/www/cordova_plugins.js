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
    },
    {
      "id": "cz.blocshop.socketsforcordova.Socket",
      "file": "plugins/cz.blocshop.socketsforcordova/socket.js",
      "pluginId": "cz.blocshop.socketsforcordova",
      "clobbers": [
        "window.Socket"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-smslog": "1.0.0",
    "com.darktalker.cordova.screenshot": "0.1.6",
    "cz.blocshop.socketsforcordova": "1.1.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-background-mode": "0.7.2"
  };
});