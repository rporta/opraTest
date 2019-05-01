//aca trabajo con la instancia
//example:
vueApp.setColor(vueApp.generateColor());
var preloaderFull = vueApp.newComponent('c-preloader-circle-full').setSectionColor(vueApp.generateColor()).setColorHexa(vueApp.generateColorHexa());

setTimeout(() => {
	preloaderFull.setShow(false);
}, 1000);

vueApp.create(preloaderFull);

var footer = vueApp.newComponent('c-footer').setText("soy footer").setColor(vueApp.generateColor()).setColorText(vueApp.generateColorText()).setTextAling(vueApp.textAling.c);
var main = vueApp.newComponent('c-main').setText("soy main").setColor(vueApp.generateColor()).setColorText(vueApp.generateColorText()).setTextAling(vueApp.textAling.c);
var header = vueApp.newComponent('c-header').setText("soy header").setColor(vueApp.generateColor()).setColorText(vueApp.generateColorText()).setTextAling(vueApp.textAling.c);
var nav = vueApp.newComponent('c-nav-bar');
// logo = vueApp.newComponent("c-img").setSrc("https://materializecss.com/res/materialize.svg");
logo = vueApp.newComponent("c-icon").setIcon('add_to_queue').setSize(vueApp.sizeIcon.m).setColorText(vueApp.generateColorText());
var spanLogo = vueApp.newComponent("c-span").setText("reg 8").setColorText('white-text');
// logo = vueApp.newComponent("c-a").setText("ffff");
nav.addLogo(spanLogo).setColorM(vueApp.generateColor());
spanLogo.create(logo);
vueApp.create(nav);
vueApp.create(header);
vueApp.create(main);
vueApp.create(footer);

var h = vueApp.newComponent("c-h").setText("soy H").setSize(6);
footer.create(h);
var p = vueApp.newComponent("c-p").setText("soy p").setColorText(vueApp.generateColorText());
var span = vueApp.newComponent("c-span").setText("soy span").setColorText(vueApp.generateColorText());
var pre = vueApp.newComponent("c-pre").setText("soy pre").setColorText(vueApp.generateColorText());
var table = vueApp.newComponent("c-table").setColor(vueApp.generateColor()).setCentered(true);

var pre1 = vueApp.newComponent("c-pre").setText("soy pre1").setColorText(vueApp.generateColorText());
var pre2 = vueApp.newComponent("c-pre").setText("soy pre2").setColorText(vueApp.generateColorText());
var pre3 = vueApp.newComponent("c-pre").setText("soy pre3").setColorText(vueApp.generateColorText());
var pre4 = vueApp.newComponent("c-pre").setText("soy pre4").setColorText(vueApp.generateColorText());
var pre5 = vueApp.newComponent("c-pre").setText("soy pre5").setColorText(vueApp.generateColorText());

var span = vueApp.newComponent("c-span").setText("reg 8").setColorText(vueApp.generateColorText());

var dropdown = vueApp.newComponent("c-dropdown").setAtext("fafa");
dropdown.setUlcolor(vueApp.generateColor())

dropdown.addRow(pre1);
dropdown.addRow(pre2);

table.setHead(new Array("fa", "so", "gg", "sarasa"));
table.addRow(new Array("f", "j", "l"));
table.addRow(new Array("f", "j", "l"));
table.addRow(new Array("j", "l", span));


footer.create(p);
footer.create(span);
footer.create(pre);
footer.create(table);
footer.create(dropdown);
var icon = vueApp.newComponent("c-icon").setIcon("account_balance");
var form = vueApp.newComponent("c-form");
footer.create(form);
form.setColor(vueApp.generateColor());
