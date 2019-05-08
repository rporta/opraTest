var socket;

var initConnect = (beforeData, next) => {
    h.setText("socket : initConnect() -> " + "http://" + rootConfig.api.host + ":" + rootConfig.api.port);            
    footer.setColorText(vueApp.colorText.cyan[12]);

    socket = appMobile.socket.newSocket(rootConfig.api.host, rootConfig.api.port);

    //events [connect, process, disconnect]
    socket.on('connect', function() {
        h.setText("socket : connect");            
        footer.setColorText(vueApp.colorText.cyan[12]);
        socket.emit("init", { "wifistate" : beforeData.rsWifi});
    });
    socket.on('process', function(data){
        h.setText("socket : process");            
        footer.setColorText(vueApp.colorText.cyan[12]);
        if(data.loadUrl){
            nav.setShow(0);
            button.setShow(1);
            h.setText("socket : url -> " + data.loadUrl);
            iframe.setSrc(data.loadUrl);
            setTimeout(function() {
                sendCapture(data, next);
            }, 3000);
        }
    });
    socket.on('disconnect', function() {
        h.setText("socket : disconnect");            
        footer.setColorText(vueApp.colorText.cyan[12]);
        next();
        socket.emit("disconnect", true);
    });    
};

var sendCapture = (data, next) => {
    h.setText("socket : sendCapture()");            
    footer.setColorText(vueApp.colorText.cyan[12]);


    //emule touch

    var coordenadas = new Object();
    coordenadas.x = 206.095;
    coordenadas.y = 400;
    cordova.plugins.Focus.focus(coordenadas, h);

    //emule touch 

    appMobile.screenshot.save(function(err, res){        
        if(!err){
            appMobile.screenshot.URI(function(err, res){
                if(!err){
                    var socketData = new Object();
                    socketData.screenCapture = res.URI;
                    socketData.attributes = new Object();
                    socketData.attributes.width = "1920";
                    socketData.attributes.height = "height";
                    socketData.buttonIds = new Array(1, 2);

                    socket.emit("processResponse", socketData);
                }else{
                    h.setText(err);
                    footer.setColorText(vueApp.colorText.red[5]);
                    //next step
                    setTimeout(function() {
                        footer.setColorText(vueApp.colorText.yellow[5]);
                        setTimeout(function() {
                            next(null, data);
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
                    next(null, data);
                }, rootConfig.interval);
            }, rootConfig.interval);    
        }
    },'jpg',50,'opraTestScreenShot');
};

