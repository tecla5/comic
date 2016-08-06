// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('comic.app');
goog.require('cljs.core');
goog.require('comic.states');
goog.require('rum.mdl');
goog.require('rum.core');
goog.require('comic.cards');
goog.require('dirac.runtime');
goog.require('cljs.reader');
(dirac.runtime.install_BANG_.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.install_BANG_.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.install_BANG_.call(null));
cljs.core.enable_console_print_BANG_();
if(typeof comic.app.app_state !== 'undefined'){
} else {
comic.app.app_state = (function (){var G__17573 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,(2016)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17573) : cljs.core.atom.call(null,G__17573));
})();
}
comic.app.el = (function comic$app$el(id){
return document.getElementById(id);
});
comic.app.foo_cljc = (function comic$app$foo_cljc(x){
return [cljs.core.str("Hello from cljs "),cljs.core.str(x),cljs.core.str("!")].join('');
});
comic.app.app = rum.core.build_defc((function (cards){
console.log("app",cards);

var attrs17574 = (comic.cards.cards.cljs$core$IFn$_invoke$arity$1 ? comic.cards.cards.cljs$core$IFn$_invoke$arity$1(cards) : comic.cards.cards.call(null,cards));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17574))?sablono.interpreter.attributes(attrs17574):null),((cljs.core.map_QMARK_(attrs17574))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs17575 = comic.app.foo_cljc(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs17575))?sablono.interpreter.attributes(attrs17575):null),((cljs.core.map_QMARK_(attrs17575))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17575)], null)));
})(),(function (){var attrs17576 = (function (){var G__17579 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs17574){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.inc);
});})(attrs17574))
], null);
var G__17580 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("add");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__17579,G__17580) : rum.mdl.button.call(null,G__17579,G__17580));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17576))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar"], null)], null),attrs17576], 0))):{"className": "btn-toolbar"}),((cljs.core.map_QMARK_(attrs17576))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__17581 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs17576,attrs17574){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(attrs17576,attrs17574))
], null);
var G__17582 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("remove");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__17581,G__17582) : rum.mdl.button.call(null,G__17581,G__17582));
})()),(function (){var G__17584 = "button";
var G__17585 = {"type": "button", "onClick": ((function (G__17584,attrs17576,attrs17574){
return (function (){
var G__17587 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__17587);
});})(G__17584,attrs17576,attrs17574))
, "className": "btn btn-default"};
var G__17586 = "Console.log";
return React.createElement(G__17584,G__17585,G__17586);
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17576),sablono.interpreter.interpret((function (){var G__17588 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs17576,attrs17574){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(attrs17576,attrs17574))
], null);
var G__17589 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("remove");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__17588,G__17589) : rum.mdl.button.call(null,G__17588,G__17589));
})()),(function (){var G__17591 = "button";
var G__17592 = {"type": "button", "onClick": ((function (G__17591,attrs17576,attrs17574){
return (function (){
var G__17594 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__17594);
});})(G__17591,attrs17576,attrs17574))
, "className": "btn btn-default"};
var G__17593 = "Console.log";
return React.createElement(G__17591,G__17592,G__17593);
})()], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17574),(function (){var attrs17577 = comic.app.foo_cljc(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs17577))?sablono.interpreter.attributes(attrs17577):null),((cljs.core.map_QMARK_(attrs17577))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17577)], null)));
})(),(function (){var attrs17578 = (function (){var G__17595 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs17574){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.inc);
});})(attrs17574))
], null);
var G__17596 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("add");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__17595,G__17596) : rum.mdl.button.call(null,G__17595,G__17596));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17578))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar"], null)], null),attrs17578], 0))):{"className": "btn-toolbar"}),((cljs.core.map_QMARK_(attrs17578))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__17597 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs17578,attrs17574){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(attrs17578,attrs17574))
], null);
var G__17598 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("remove");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__17597,G__17598) : rum.mdl.button.call(null,G__17597,G__17598));
})()),(function (){var G__17600 = "button";
var G__17601 = {"type": "button", "onClick": ((function (G__17600,attrs17578,attrs17574){
return (function (){
var G__17603 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__17603);
});})(G__17600,attrs17578,attrs17574))
, "className": "btn btn-default"};
var G__17602 = "Console.log";
return React.createElement(G__17600,G__17601,G__17602);
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17578),sablono.interpreter.interpret((function (){var G__17604 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fab,cljs.core.cst$kw$colored,cljs.core.cst$kw$ripple], null),cljs.core.cst$kw$on_DASH_click,((function (attrs17578,attrs17574){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(attrs17578,attrs17574))
], null);
var G__17605 = rum.mdl.icon.cljs$core$IFn$_invoke$arity$1("remove");
return (rum.mdl.button.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$2(G__17604,G__17605) : rum.mdl.button.call(null,G__17604,G__17605));
})()),(function (){var G__17607 = "button";
var G__17608 = {"type": "button", "onClick": ((function (G__17607,attrs17578,attrs17574){
return (function (){
var G__17610 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__17610);
});})(G__17607,attrs17578,attrs17574))
, "className": "btn btn-default"};
var G__17609 = "Console.log";
return React.createElement(G__17607,G__17608,G__17609);
})()], null)));
})()], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app");
comic.app.app_container = rum.core.build_defc((function (data){
console.log("app-container",data);

var G__17612 = "div";
var G__17613 = {"id": "box"};
var G__17614 = (function (){var attrs17611 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(rum.core.react(comic.app.app_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs17611))?sablono.interpreter.attributes(attrs17611):null),((cljs.core.map_QMARK_(attrs17611))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17611)], null)));
})();
var G__17615 = sablono.interpreter.interpret((comic.app.app.cljs$core$IFn$_invoke$arity$1 ? comic.app.app.cljs$core$IFn$_invoke$arity$1(data) : comic.app.app.call(null,data)));
return React.createElement(G__17612,G__17613,G__17614,G__17615);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app-container");
comic.app.init = (function comic$app$init(){
console.log("Starting the app");

var temp__4423__auto__ = (window["edn"]);
if(cljs.core.truth_(temp__4423__auto__)){
var edn = temp__4423__auto__;
return rum.core.mount((function (){var G__17617 = cljs.reader.read_string(edn);
return (comic.app.app_container.cljs$core$IFn$_invoke$arity$1 ? comic.app.app_container.cljs$core$IFn$_invoke$arity$1(G__17617) : comic.app.app_container.call(null,G__17617));
})(),comic.app.el("container"));
} else {
return null;
}
});
