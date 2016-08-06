// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('comic.cards');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('rum.mdl');
if(typeof comic.cards._STAR_typebox !== 'undefined'){
} else {
comic.cards._STAR_typebox = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("") : cljs.core.atom.call(null,""));
}
comic.cards.intro = (function comic$cards$intro(title){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$intro,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,title], null)], null);
});
comic.cards.snippet_demos = (function comic$cards$snippet_demos(demos){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$demos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$padding], null)], null),(function (){var iter__7326__auto__ = (function comic$cards$snippet_demos_$_iter__17260(s__17261){
return (new cljs.core.LazySeq(null,(function (){
var s__17261__$1 = s__17261;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17261__$1);
if(temp__4425__auto__){
var s__17261__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17261__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__17261__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__17263 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__17262 = (0);
while(true){
if((i__17262 < size__7325__auto__)){
var demo = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__17262);
cljs.core.chunk_append(b__17263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$demo,demo], null));

var G__17266 = (i__17262 + (1));
i__17262 = G__17266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17263),comic$cards$snippet_demos_$_iter__17260(cljs.core.chunk_rest(s__17261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17263),null);
}
} else {
var demo = cljs.core.first(s__17261__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$demo,demo], null),comic$cards$snippet_demos_$_iter__17260(cljs.core.rest(s__17261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(demos);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$padding], null));
});
comic.cards.snippet_captions = (function comic$cards$snippet_captions(captions){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$captions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$padding], null)], null),(function (){var iter__7326__auto__ = (function comic$cards$snippet_captions_$_iter__17273(s__17274){
return (new cljs.core.LazySeq(null,(function (){
var s__17274__$1 = s__17274;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17274__$1);
if(temp__4425__auto__){
var s__17274__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17274__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__17274__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__17276 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__17275 = (0);
while(true){
if((i__17275 < size__7325__auto__)){
var caption = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__17275);
cljs.core.chunk_append(b__17276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$caption,caption], null));

var G__17279 = (i__17275 + (1));
i__17275 = G__17279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17276),comic$cards$snippet_captions_$_iter__17273(cljs.core.chunk_rest(s__17274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17276),null);
}
} else {
var caption = cljs.core.first(s__17274__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$caption,caption], null),comic$cards$snippet_captions_$_iter__17273(cljs.core.rest(s__17274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(captions);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$padding], null));
});
comic.cards.snippet = rum.core.build_defc((function (p__17280){
var map__17281 = p__17280;
var map__17281__$1 = ((((!((map__17281 == null)))?((((map__17281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17281):map__17281);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17281__$1,cljs.core.cst$kw$sources);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17281__$1,cljs.core.cst$kw$components);
var captions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17281__$1,cljs.core.cst$kw$captions);
var G__17284 = "div";
var G__17285 = {"className": "snippet"};
var G__17286 = (function (){var attrs17283 = comic.cards.snippet_demos(components);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17283))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs17283], 0))):{"className": "header"}),((cljs.core.map_QMARK_(attrs17283))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(comic.cards.snippet_captions(captions))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17283),sablono.interpreter.interpret(comic.cards.snippet_captions(captions))], null)));
})();
var G__17287 = sablono.interpreter.interpret(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source], null),sources));
return React.createElement(G__17284,G__17285,G__17286,G__17287);
}),null,"snippet");
comic.cards.section = rum.core.build_defc((function() { 
var G__17290__delegate = function (contents){
return sablono.interpreter.interpret((function (){var G__17288 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["comic"], null),cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color_DASH_text_DASH__DASH_grey_DASH_600], null)], null);
var G__17289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rum.mdl.cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$12], null)], null),contents);
return (rum.mdl.grid.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.grid.cljs$core$IFn$_invoke$arity$2(G__17288,G__17289) : rum.mdl.grid.call(null,G__17288,G__17289));
})());
};
var G__17290 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__17291__i = 0, G__17291__a = new Array(arguments.length -  0);
while (G__17291__i < G__17291__a.length) {G__17291__a[G__17291__i] = arguments[G__17291__i + 0]; ++G__17291__i;}
  contents = new cljs.core.IndexedSeq(G__17291__a,0);
} 
return G__17290__delegate.call(this,contents);};
G__17290.cljs$lang$maxFixedArity = 0;
G__17290.cljs$lang$applyTo = (function (arglist__17292){
var contents = cljs.core.seq(arglist__17292);
return G__17290__delegate(contents);
});
G__17290.cljs$core$IFn$_invoke$arity$variadic = G__17290__delegate;
return G__17290;
})()
,null,"section");
comic.cards.cards = rum.core.build_defc((function (cards){
return sablono.interpreter.interpret((function (){var G__17293 = comic.cards.intro("Cards");
var G__17294 = (function (){var G__17356 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17387 = (function (){var iter__7326__auto__ = ((function (G__17293){
return (function comic$cards$iter__17388(s__17389){
return (new cljs.core.LazySeq(null,((function (G__17293){
return (function (){
var s__17389__$1 = s__17389;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17389__$1);
if(temp__4425__auto__){
var s__17389__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17389__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__17389__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__17391 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__17390 = (0);
while(true){
if((i__17390 < size__7325__auto__)){
var map__17406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__17390);
var map__17406__$1 = ((((!((map__17406 == null)))?((((map__17406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17406):map__17406);
var short_filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,cljs.core.cst$kw$short_DASH_filename);
var permalink = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,cljs.core.cst$kw$permalink);
cljs.core.chunk_append(b__17391,rum.mdl.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str(short_filename)].join(''),cljs.core.cst$kw$icon,"person",cljs.core.cst$kw$content,(function (){var G__17408 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shadow_DASH__DASH_2dp], null)], null);
var G__17409 = (function (){var G__17410 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$border], null)], null);
var G__17411 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,permalink], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$card_DASH_image__filename,short_filename], null),(rum.mdl.button.cljs$core$IFn$_invoke$arity$1 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$1("Get Started") : rum.mdl.button.call(null,"Get Started"))], null);
return (rum.mdl.card_action.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.card_action.cljs$core$IFn$_invoke$arity$2(G__17410,G__17411) : rum.mdl.card_action.call(null,G__17410,G__17411));
})();
return (rum.mdl.card.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.card.cljs$core$IFn$_invoke$arity$2(G__17408,G__17409) : rum.mdl.card.call(null,G__17408,G__17409));
})()], null)], 0)));

var G__17418 = (i__17390 + (1));
i__17390 = G__17418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17391),comic$cards$iter__17388(cljs.core.chunk_rest(s__17389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17391),null);
}
} else {
var map__17412 = cljs.core.first(s__17389__$2);
var map__17412__$1 = ((((!((map__17412 == null)))?((((map__17412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17412):map__17412);
var short_filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17412__$1,cljs.core.cst$kw$short_DASH_filename);
var permalink = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17412__$1,cljs.core.cst$kw$permalink);
return cljs.core.cons(rum.mdl.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str(short_filename)].join(''),cljs.core.cst$kw$icon,"person",cljs.core.cst$kw$content,(function (){var G__17414 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shadow_DASH__DASH_2dp], null)], null);
var G__17415 = (function (){var G__17416 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mdl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$border], null)], null);
var G__17417 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,permalink], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$card_DASH_image__filename,short_filename], null),(rum.mdl.button.cljs$core$IFn$_invoke$arity$1 ? rum.mdl.button.cljs$core$IFn$_invoke$arity$1("Get Started") : rum.mdl.button.call(null,"Get Started"))], null);
return (rum.mdl.card_action.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.card_action.cljs$core$IFn$_invoke$arity$2(G__17416,G__17417) : rum.mdl.card_action.call(null,G__17416,G__17417));
})();
return (rum.mdl.card.cljs$core$IFn$_invoke$arity$2 ? rum.mdl.card.cljs$core$IFn$_invoke$arity$2(G__17414,G__17415) : rum.mdl.card.call(null,G__17414,G__17415));
})()], null)], 0)),comic$cards$iter__17388(cljs.core.rest(s__17389__$2)));
}
} else {
return null;
}
break;
}
});})(G__17293))
,null,null));
});})(G__17293))
;
return iter__7326__auto__(cards);
})();
return (rum.mdl.list.cljs$core$IFn$_invoke$arity$1 ? rum.mdl.list.cljs$core$IFn$_invoke$arity$1(G__17387) : rum.mdl.list.call(null,G__17387));
})()], null),cljs.core.cst$kw$captions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Iteration"], null)], null);
return (comic.cards.snippet.cljs$core$IFn$_invoke$arity$1 ? comic.cards.snippet.cljs$core$IFn$_invoke$arity$1(G__17356) : comic.cards.snippet.call(null,G__17356));
})();
return (comic.cards.section.cljs$core$IFn$_invoke$arity$2 ? comic.cards.section.cljs$core$IFn$_invoke$arity$2(G__17293,G__17294) : comic.cards.section.call(null,G__17293,G__17294));
})());
}),null,"cards");
