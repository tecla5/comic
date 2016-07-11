// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('comic.app');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('rum.mdl');
cljs.core.enable_console_print_BANG_();
if(typeof comic.app.app_state !== 'undefined'){
} else {
comic.app.app_state = (function (){var G__14704 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,(2016)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14704) : cljs.core.atom.call(null,G__14704));
})();
}
comic.app.el = (function comic$app$el(id){
return document.getElementById(id);
});
comic.app.foo_cljc = (function comic$app$foo_cljc(x){
return [cljs.core.str("Hello from cljs "),cljs.core.str(x),cljs.core.str("!")].join('');
});
comic.app.app = rum.core.build_defc((function (){
console.log("home");

var G__14723 = "div";
var G__14724 = null;
var G__14725 = (function (){var attrs14705 = comic.app.foo_cljc(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs14705))?sablono.interpreter.attributes(attrs14705):null),((cljs.core.map_QMARK_(attrs14705))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs14705)], null)));
})();
var G__14726 = (function (){var attrs14706 = (function (){var G__14727 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (G__14723,G__14724,G__14725){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.inc);
});})(G__14723,G__14724,G__14725))
], null);
var G__14728 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("add");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__14727,G__14728) : rum.mdl.button.call(null,G__14727,G__14728));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs14706))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar"], null)], null),attrs14706], 0))):{"className": "btn-toolbar"}),((cljs.core.map_QMARK_(attrs14706))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__14729 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs14706,G__14723,G__14724,G__14725){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(attrs14706,G__14723,G__14724,G__14725))
], null);
var G__14730 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("remove");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__14729,G__14730) : rum.mdl.button.call(null,G__14729,G__14730));
})()),(function (){var G__14732 = "button";
var G__14733 = {"type": "button", "onClick": ((function (G__14732,attrs14706,G__14723,G__14724,G__14725){
return (function (){
var G__14735 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__14735);
});})(G__14732,attrs14706,G__14723,G__14724,G__14725))
, "className": "btn btn-default"};
var G__14734 = "Console.log";
return React.createElement(G__14732,G__14733,G__14734);
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs14706),sablono.interpreter.interpret((function (){var G__14736 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs14706,G__14723,G__14724,G__14725){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(attrs14706,G__14723,G__14724,G__14725))
], null);
var G__14737 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("remove");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__14736,G__14737) : rum.mdl.button.call(null,G__14736,G__14737));
})()),(function (){var G__14739 = "button";
var G__14740 = {"type": "button", "onClick": ((function (G__14739,attrs14706,G__14723,G__14724,G__14725){
return (function (){
var G__14742 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__14742);
});})(G__14739,attrs14706,G__14723,G__14724,G__14725))
, "className": "btn btn-default"};
var G__14741 = "Console.log";
return React.createElement(G__14739,G__14740,G__14741);
})()], null)));
})();
return React.createElement(G__14723,G__14724,G__14725,G__14726);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app");
comic.app.app_container = rum.core.build_defc((function (){
var G__14744 = "div";
var G__14745 = {"id": "box"};
var G__14746 = (function (){var attrs14743 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(rum.core.react(comic.app.app_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs14743))?sablono.interpreter.attributes(attrs14743):null),((cljs.core.map_QMARK_(attrs14743))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs14743)], null)));
})();
var G__14747 = sablono.interpreter.interpret((comic.app.app.cljs$core$IFn$_invoke$arity$0 ? comic.app.app.cljs$core$IFn$_invoke$arity$0() : comic.app.app.call(null)));
return React.createElement(G__14744,G__14745,G__14746,G__14747);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app-container");
comic.app.init = (function comic$app$init(){
console.log("Starting the app");

return rum.core.mount((comic.app.app_container.cljs$core$IFn$_invoke$arity$0 ? comic.app.app_container.cljs$core$IFn$_invoke$arity$0() : comic.app.app_container.call(null)),comic.app.el("container"));
});
