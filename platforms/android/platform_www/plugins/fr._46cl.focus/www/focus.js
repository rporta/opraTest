cordova.define("fr._46cl.focus.focus", function(require, exports, module) {
    var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

    var Focus = function() {
    };

    Focus.focus = function(element, dbug) {

        bodyRect = document.body.getBoundingClientRect(),
        rect = {
            top: 0 - bodyRect.top - window.pageYOffset,
            left: 0 - bodyRect.left - window.pageXOffset,
            right: element.x - bodyRect.left - window.pageXOffset,
            bottom: element.y - bodyRect.top - window.pageYOffset
        };
        dbug.setText(rect);
        exec(null, null, "Focus", "focus", [rect]);
    };

    module.exports = Focus;

});
