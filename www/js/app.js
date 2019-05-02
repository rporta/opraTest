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
                                    for(var x in rs){
                                        var currentRs = rs[x];
                                        h.setText(currentRs);
                                    }
                                    if(rs.length === 0){
                                        h.setText("No se encontraron resultados");
                                        footer.setColorText(vueApp.colorText.red[5]);   
                                    }
                                    setTimeout(function() {
                                        navigator.screenshot.save(function(error,res){
                                            if(error){
                                                h.setText("error : error al realizar la captura");
                                                setTimeout(function() {
                                                    next();
                                                }, 3000);
                                            }else{
                                                h.setText("rs : captura realizada");
                                            }
                                        },'jpg',50,'opraTestScreenShot');
                                    }, 3000);
                                }, 
                                function(err) {
                                    h.setText(err);
                                    footer.setColorText(vueApp.colorText.red[5]);
                                    setTimeout(function() {
                                        next();
                                    }, 3000);
                                });
                            }, 3000);
                        },function (err){
                            h.setText(err);
                            footer.setColorText(vueApp.colorText.red[5]);
                        });

                    }, 3000);

                },function (err){
                    h.setText(err);
                    footer.setColorText(vueApp.colorText.red[5]);
                    setTimeout(function() {
                        next();
                    }, 3000);
                });
            }, 3000);
        });
    }
};

app.initialize();