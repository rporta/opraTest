//aca trabajo con la instancia
//example:
vueApp.setColor(vueApp.color.bwt[0]);
var preloaderFull = vueApp.newComponent('c-preloader-circle-full').setSectionColor(vueApp.color.bwt[0]);

setTimeout(() => {
	preloaderFull.setShow(false);
}, 1000);

vueApp.create(preloaderFull);

var footer = vueApp.newComponent('c-footer').setColor(vueApp.color.bwt[0]).setColorText(vueApp.colorText.cyan[12]);
var main = vueApp.newComponent('c-main').setColor(vueApp.color.bwt[0]);
var header = vueApp.newComponent('c-header').setColor(vueApp.color.bwt[0]);
var nav = vueApp.newComponent('c-nav-bar').setColorM(vueApp.color.cyan[12]);
logo = vueApp.newComponent("c-icon").setIcon('import_export').setSize(vueApp.sizeIcon.m).setColorText(vueApp.colorText.bwt[1]);
var spanLogo = vueApp.newComponent("c-span").setText("Opratel").setColorText(vueApp.colorText.cyan[12]);
nav.addLogo(spanLogo);
spanLogo.create(logo);
vueApp.create(nav);
vueApp.create(header);
vueApp.create(main);
vueApp.create(footer);

var h = vueApp.newComponent("c-h").setText("soy H").setSize(6);
footer.create(h);
