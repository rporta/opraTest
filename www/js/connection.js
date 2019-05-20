var socket;

var initConnect = (beforeData, next) => {
    // async.forever(function(next){
    //     // //emule touch
    //     setTimeout(function() {
    //         var coordenadas = new Object();
    //         coordenadas.x = (document.body.getBoundingClientRect().right - 20) / 2;
    //         coordenadas.y = 5;
    //         cordova.plugins.Focus.focus(coordenadas, h, touch);

<<<<<<< HEAD
=======
    // // //emule touch
    // setTimeout(function() {
    //     var coordenadas = new Object();
    //     coordenadas.x = 200;
    //     coordenadas.y = 40;
    //     cordova.plugins.Focus.focus(coordenadas, h, touch);
>>>>>>> 230af88d9eb03b499f7199caf1936d5949f2c7bc

    //         //emule touch
    //         setTimeout(function() {
    //             coordenadas.x = (document.body.getBoundingClientRect().right - 20) / 2;
    //             coordenadas.y = 163;
    //             cordova.plugins.Focus.focus(coordenadas, h, touch);
    //             next();
    //         }, 3000);

<<<<<<< HEAD
    //     }, 3000);

    // });
=======
    //     //emule touch
    //     setTimeout(function() {
    //         coordenadas.x = 257;
    //         coordenadas.y = 597;
    //         cordova.plugins.Focus.focus(coordenadas, h, touch);
    //     }, 3000);

    // }, 3000);
>>>>>>> 230af88d9eb03b499f7199caf1936d5949f2c7bc


    //create instance socket
<<<<<<< HEAD
    socket = appMobile.socket.newSocket(rootConfig.api.host, rootConfig.api.port);     
    footer.setColorText(vueApp.colorText.cyan[12]);
    
=======
    socket = appMobile.socket.newSocket(rootConfig.api.shost, rootConfig.api.port);


    h.setText("socket connect : " + socket.connected);
    !socket.connected
    ? footer.setColorText(vueApp.colorText.red[5])
    : null;

    setTimeout(function() {

        var ref = window.open("http://www.google.com/", '_self', 'location=no');
    }, 3000);

>>>>>>> 230af88d9eb03b499f7199caf1936d5949f2c7bc
    //register events socket [connect, processUrl, processEvent, disconnect]
    socket.on('connect', function() {
        h.setText("socket : connect");            
        footer.setColorText(vueApp.colorText.cyan[12]);
        socket.emit("init", { "wifistate" : beforeData.rsWifi});
    });
    socket.on('processUrl', function(data){
        h.setText("socket : processUrl");            
        footer.setColorText(vueApp.colorText.cyan[12]);
        h.setText(data);            
        /**
        * processUrl
        * 
<<<<<<< HEAD
        * 1) socket envia loadUrl 
        * 2) app carga url en iframe
=======
        * 1) socket envia url
        * 2) app carga la url
>>>>>>> 230af88d9eb03b499f7199caf1936d5949f2c7bc
        * 4) app realiza una captura de la pantalla
        * 5) app envia captura al socket
        */

<<<<<<< HEAD
        // //emule touch
        // setTimeout(function() {
        //     var coordenadas = new Object();
        //     coordenadas.x = (document.body.getBoundingClientRect().right - 20) / 2;
        //     coordenadas.y = 5;
        //     cordova.plugins.Focus.focus(coordenadas, h, touch);
        // }, 3000);

        //carga de iframe
        h.setText("socket : url -> " + data.loadUrl);
        iframe.setSrc(data.loadUrl);

        setTimeout(function() {
            //sendCapture() realiza step (4, 5)
            sendCapture(next);
        }, 3000);       
=======
        // var ref = cordova.InAppBrowser.open(data.loadUrl, '_self', 'location=no');        
        setTimeout(function() {
            //sendCapture() realiza step (4, 5)
            sendCapture(next);
        }, 3000);         
>>>>>>> 230af88d9eb03b499f7199caf1936d5949f2c7bc

    });

    socket.on('processEvent', function(data){
        h.setText("socket : processEvent");            
        footer.setColorText(vueApp.colorText.cyan[12]);

        /**
        * processEvent
        * 
        * 1) socket envia coordenadas (x, y) || socket envia coordenadas (x, y), text 
        * 2) app ejecuta touch en coordenadas (x, y)
        * 3) inyectar un valor en input
        * 4) app realiza una captura de la pantalla
        * 5) app envia captura al socket
        */

        if(data.text.constructor.name = "String" && data.text.length > 0 ){

            //case (2) : socket envia coordenadas (x, y), text 

            //emule touch
            var coordenadas = new Object();
            coordenadas.x = data.coordenadas.x;
            coordenadas.y = data.coordenadas.y;
            cordova.plugins.Focus.focus(coordenadas, h, touch);

            //hay que pensar como inyectar un valor en input...para realiza step (4, 5)
            h.setText("hay que pensar como inyectar un valor en input...");

            setTimeout(function() {
                //sendCapture() realiza step (4, 5)
                sendCapture(next);
            }, 3000);

        }else{

            //case (1) : socket envia coordenadas (x, y)

            //emule touch
            var coordenadas = new Object();
            coordenadas.x = data.coordenadas.x;
            coordenadas.y = data.coordenadas.y;
            cordova.plugins.Focus.focus(coordenadas, h, touch);

            setTimeout(function() {
                //sendCapture() realiza step (4, 5)
                sendCapture(next);
            }, 3000);       
        }
    });

    socket.on('disconnect', function() {
        h.setText("socket : disconnect");            
        footer.setColorText(vueApp.colorText.cyan[12]);
        socket.emit("disconnect", true);

        //next step
        setTimeout(function() {
            footer.setColorText(vueApp.colorText.yellow[5]);
            setTimeout(function() {
                next();
            }, rootConfig.interval);
        }, rootConfig.interval);
    });  
    // h.setText("socket : load events");            
};

var sendCapture = (next) => {
    h.setText("socket : sendCapture()");            
    footer.setColorText(vueApp.colorText.cyan[12]);

    setTimeout(function() {
        appMobile.screenshot.save(function(err, res){        
            if(!err){
                appMobile.screenshot.URI(function(err, res){
                    if(!err){
                        //envio captura al socket luego de 5000 ms
                        setTimeout(function() {
                            var socketData = new Object();
                            socketData.screenCapture = res.URI;
                            socketData.attributes = new Object();
                            socketData.attributes.width = "1920";
                            socketData.attributes.height = "1080";
                            socket.emit("processResponse", socketData);
                            
                            return true;                           
                        }, 5000);                    
                    }else{
                        h.setText(err);
                        footer.setColorText(vueApp.colorText.red[5]);
                        //next step
                        setTimeout(function() {
                            footer.setColorText(vueApp.colorText.yellow[5]);
                            setTimeout(function() {
                                next();
                            }, rootConfig.interval);
                        }, rootConfig.interval);                    
                    }
                },50);
            }else{
                h.setText("error : error al realizar la captura");
                //next step
                setTimeout(function() {
                    footer.setColorText(vueApp.colorText.yellow[5]);
                    setTimeout(function() {
                        next();
                    }, rootConfig.interval);
                }, rootConfig.interval);    
            }
        },'jpg',50,'opraTestScreenShot');
    }, rootConfig.interval);                    
};