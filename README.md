# opraTest
Aplicacion mobile de uso intero

## requisitos

1- Correr en modo servicio
2- Detectar sms con contenido "StartProcess", y una vez detectado este KW, conectarse a un server para informar que esta online y a la espera de instrucciones, ej: http://200.110.137.84:10001/
3- Una vez recibido el request de la app, responderle con una instruccion, ej: cargar la url www.tulandia.
net
4- La app recibe esta respuesta y procede con la carga de la URL
recibida
5- Toma una captura de pantalla y se la envia al server, junto con un listado de IDs de botones que se encuentren en el documento.
6- El server renderea esta captura y le pregunta al usuario que boton desea ejecutar (de la lista recibida)
7- El server ejecuta el boton seleccionado y se lo pasa como instruccion al cliente (la app)
8- La app ejecuta el boton y avanza a la siguiente pantalla, donde repite el flujo (items 5 a 7)


--
ANTE EL INCONVENIENTE DEL IFRAME ME VI FORZADO A MODIFICAR EL FRAMEWORK :

    /*
    * RAMIRO PORTAS
    * MainActivity.sarasa() SE LLAMA CUANDO SE DISPARA EL EVENTO AL CARGAR UNA NUEVA PAGINA
    * SE LLEGA A ESTE METHOD REALIZANDO Override DE CordovaActivity.sarasa()
    * EN CordovaWebViewImpl SE CREA EL CAMPO contextCordovaActivity
    * CUANDO SE EJECUTA CordovaWebViewImpl.init() - (@Override) se instancia CordovaWebViewImpl.EngineClient()
    * EN EL MISMO METHOD luego de la instancia CordovaWebViewImpl.EngineClient(), se ejecuta CordovaWebViewImpl.EngineClient.addContextCordovaActivity()
    * Y LE PASA EL CONTEXTO CordovaActivity.
    *
    * LOS CAMBIOS REALIZADOS SON
    * +CordovaWebViewImpl.EngineClient.addContextCordovaActivity() (NUEVO)
    * +CordovaWebViewImpl.EngineClient.contextCordovaActivity:CordovaActivity (NUEVO)
    * +CordovaWebViewImpl.contextCordovaActivity:CordovaActivity (NUEVO)
    * +CordovaWebViewImpl.CordovaWebViewImpl(CordovaActivity context, CordovaWebViewEngine cordovaWebViewEngine) (SE MODIFICO)
    * +CordovaActivity.makeWebView() (SE MODIFICO), //aca recien se pasa el contexto CordovaActivity
    * +CordovaActivity.sarasa() (NUEVO)
    * +MainActivity.sarasa() (NUEVO)
    *
    *
    * */