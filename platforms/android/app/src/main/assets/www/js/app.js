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

        setTimeout(function () {

            window.plugins.smsLog.hasReadPermission(function (){
                h.setText("successCallback : window.plugins.smsLog.hasReadPermission");
                footer.setColorText(vueApp.colorText.yellow[5]);

                setTimeout(function() {
                    window.plugins.smsLog.requestReadPermission(function (){
                        h.setText("successCallback : window.plugins.smsLog.requestReadPermission");
                        footer.setColorText(vueApp.colorText.green[5]);

                        let filters = [{
                            "name": "date",
                            "value": "1517266800000",
                            "operator": ">=",
                        }];
                        window.plugins.smsLog.getSmsLog(filters, true, function() {
                            h.setText("successCallback : window.plugins.smsLog.getSmsLog");
                        }, function() {
                            h.setText("errorCallback : window.plugins.smsLog.getSmsLog");
                            footer.setColorText(vueApp.colorText.red[5]);
                        });

                    },function (){
                        h.setText("errorCallback : window.plugins.smsLog.requestReadPermission");
                        footer.setColorText(vueApp.colorText.red[5]);
                    });

                }, 2000);

            },function (){
                h.setText("errorCallback : window.plugins.smsLog.hasReadPermission");
                footer.setColorText(vueApp.colorText.red[5]);
            });
        }, 2000);
    }
};

app.initialize();