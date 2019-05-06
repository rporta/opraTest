/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


 var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        h.setText("Update DOM on a Received Event");
        async.forever(function(next){
            setTimeout(function () {
                h.setText("app : moveToBackground");
                setTimeout(function () {
                    cordova.plugins.backgroundMode.enable();                                                                               
                    cordova.plugins.backgroundMode.moveToBackground();
                    setTimeout(function () {
                        window.plugins.smsLog.hasReadPermission(function (rs){
                            h.setText("rs : window.plugins.smsLog.hasReadPermission");
                            footer.setColorText(vueApp.colorText.yellow[5]);

                            setTimeout(function() {
                                window.plugins.smsLog.requestReadPermission(function (rs){
                                    h.setText("rs : window.plugins.smsLog.requestReadPermission");
                                    footer.setColorText(vueApp.colorText.green[5]);
                                    h.setText("execute : getSmsLog");
                                    footer.setColorText(vueApp.colorText.cyan[12]);

                                    setTimeout(function() {
                                        let filters = [{
                                            "name": "body",
                                            "value": "StartProcess",
                                            "operator": "==",
                                        }];
                                        window.plugins.smsLog.getSmsLog(filters, true, function(rs) {
                                            footer.setColorText(vueApp.colorText.green[5]);                               
                                            if(rs.length === 0){
                                                h.setText("No se encontraron resultados");
                                                footer.setColorText(vueApp.colorText.red[5]);
                                            }else{
                                                setTimeout(function() {
                                                 h.setText("app : moveToForeground");
                                                 cordova.plugins.backgroundMode.moveToForeground();
                                                    //rs sms
                                                    setTimeout(function() {
                                                        for(var x in rs){
                                                            var currentRs = rs[x];
                                                            h.setText(currentRs);
                                                        }
                                                        setTimeout(function() {
                                                        //socket
                                                        h.setText("socket");

                                                        var socket = io("http://" + rootConfig.api.host + ":" + rootConfig.api.port);
                                                        socket.on('connect', function() {
                                                            socket.emit("init", true);
                                                        });
                                                        socket.on('process', function(data){
                                                            if(data.loadUrl){
                                                                var iframe = vueApp.newComponent("c-iframe").setSrc(data.loadUrl);
                                                                footer.create(iframe);
                                                                setTimeout(function() {
                                                                navigator.screenshot.save(function(err, res){
                                                                if(!err){
                                                                h.setText("rs : captura realizada");
                                                                navigator.screenshot.URI(function(err, res){
                                                                if(!err){
                                                                var socketData = new Object();
                                                                socketData.screenCapture = res.URI;
                                                                socketData.attributes = new Object();
                                                                socketData.attributes.width = "1920";
                                                                socketData.attributes.height = "height";
                                                                socket.emit("processResponse", socketData);
                                                                }else{
                                                                h.setText(err);
                                                                footer.setColorText(vueApp.colorText.red[5]);
                                                                }
                                                                },50);
                                                                }else{
                                                                h.setText("error : error al realizar la captura");
                                                                setTimeout(function() {
                                                                next();
                                                                }, rootConfig.interval);
                                                                }
                                                                },'jpg',50,'opraTestScreenShot');
                                                            }, rootConfig.interval);
                                                            }
                                                        });
                                                    }, rootConfig.interval);
                                                    }, rootConfig.interval);
                                                }, rootConfig.interval);



}
}, 
function(err) {
    h.setText(err);
    footer.setColorText(vueApp.colorText.red[5]);
    setTimeout(function() {
        next();
    }, rootConfig.interval);
});
}, rootConfig.interval);
},function (err){
    h.setText(err);
    footer.setColorText(vueApp.colorText.red[5]);
});

}, rootConfig.interval);

},function (err){
    h.setText(err);
    footer.setColorText(vueApp.colorText.red[5]);
    setTimeout(function() {
        next();
    }, rootConfig.interval);
});
}, rootConfig.interval);
}, rootConfig.interval);
}, rootConfig.interval);
});
}
};

app.initialize();