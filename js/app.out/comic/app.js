// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('comic.app');
goog.require('cljs.core');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_();
if(typeof comic.app.app_state !== 'undefined'){
} else {
comic.app.app_state = (function (){var G__14046 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,(2016)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14046) : cljs.core.atom.call(null,G__14046));
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

var G__14064 = "div";
var G__14065 = null;
var G__14066 = (function (){var attrs14047 = comic.app.foo_cljc(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs14047))?sablono.interpreter.attributes(attrs14047):null),((cljs.core.map_QMARK_(attrs14047))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs14047)], null)));
})();
var G__14067 = (function (){var G__14068 = "div";
var G__14069 = {"className": "btn-toolbar"};
var G__14070 = (function (){var G__14073 = "button";
var G__14074 = {"type": "button", "onClick": ((function (G__14073,G__14068,G__14069,G__14064,G__14065,G__14066){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.inc);
});})(G__14073,G__14068,G__14069,G__14064,G__14065,G__14066))
, "className": "btn btn-danger"};
var G__14075 = "+";
return React.createElement(G__14073,G__14074,G__14075);
})();
var G__14071 = (function (){var G__14076 = "button";
var G__14077 = {"type": "button", "onClick": ((function (G__14076,G__14068,G__14069,G__14070,G__14064,G__14065,G__14066){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comic.app.app_state,cljs.core.update,cljs.core.cst$kw$y,cljs.core.dec);
});})(G__14076,G__14068,G__14069,G__14070,G__14064,G__14065,G__14066))
, "className": "btn btn-success"};
var G__14078 = "-";
return React.createElement(G__14076,G__14077,G__14078);
})();
var G__14072 = (function (){var G__14080 = "button";
var G__14081 = {"type": "button", "onClick": ((function (G__14080,G__14068,G__14069,G__14070,G__14071,G__14064,G__14065,G__14066){
return (function (){
var G__14083 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(comic.app.app_state) : cljs.core.deref.call(null,comic.app.app_state));
return console.log(G__14083);
});})(G__14080,G__14068,G__14069,G__14070,G__14071,G__14064,G__14065,G__14066))
, "className": "btn btn-default"};
var G__14082 = "Console.log";
return React.createElement(G__14080,G__14081,G__14082);
})();
return React.createElement(G__14068,G__14069,G__14070,G__14071,G__14072);
})();
return React.createElement(G__14064,G__14065,G__14066,G__14067);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app");
comic.app.app_container = rum.core.build_defc((function (){
var G__14085 = "div";
var G__14086 = {"id": "box"};
var G__14087 = (function (){var attrs14084 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(rum.core.react(comic.app.app_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs14084))?sablono.interpreter.attributes(attrs14084):null),((cljs.core.map_QMARK_(attrs14084))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs14084)], null)));
})();
var G__14088 = sablono.interpreter.interpret((comic.app.app.cljs$core$IFn$_invoke$arity$0 ? comic.app.app.cljs$core$IFn$_invoke$arity$0() : comic.app.app.call(null)));
return React.createElement(G__14085,G__14086,G__14087,G__14088);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app-container");
comic.app.init = (function comic$app$init(){
console.log("Starting the app");

return rum.core.mount((comic.app.app_container.cljs$core$IFn$_invoke$arity$0 ? comic.app.app_container.cljs$core$IFn$_invoke$arity$0() : comic.app.app_container.call(null)),comic.app.el("container"));
});
