// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 *   
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 *   
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args12386 = [];
var len__7621__auto___12417 = arguments.length;
var i__7622__auto___12418 = (0);
while(true){
if((i__7622__auto___12418 < len__7621__auto___12417)){
args12386.push((arguments[i__7622__auto___12418]));

var G__12419 = (i__7622__auto___12418 + (1));
i__7622__auto___12418 = G__12419;
continue;
} else {
}
break;
}

var G__12388 = args12386.length;
switch (G__12388) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12386.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12389 = opts;
var map__12389__$1 = ((((!((map__12389 == null)))?((((map__12389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12389):map__12389);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12389__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12389__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12391 = cljs.core.count(refs);
switch (G__12391) {
case (1):
var vec__12392 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(0),null);
return ((function (vec__12392,a,G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_){
return (function (){
var G__12395 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12395) : f.call(null,G__12395));
});
;})(vec__12392,a,G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12396 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12396,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12396,(1),null);
return ((function (vec__12396,a,b,G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_){
return (function (){
var G__12399 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12400 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12399,G__12400) : f.call(null,G__12399,G__12400));
});
;})(vec__12396,a,b,G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12401 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(2),null);
return ((function (vec__12401,a,b,c,G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_){
return (function (){
var G__12404 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__12405 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__12406 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12404,G__12405,G__12406) : f.call(null,G__12404,G__12405,G__12406));
});
;})(vec__12401,a,b,c,G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__12391,map__12389,map__12389__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12407 = ref;
var G__12408_12422 = G__12407;
var G__12409_12423 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12408_12422,G__12409_12423) : cljs.core.reset_BANG_.call(null,G__12408_12422,G__12409_12423));

return G__12407;
})():(function (){var G__12410 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12410) : cljs.core.atom.call(null,G__12410));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12389,map__12389__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__12389,map__12389__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12389,map__12389__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__12411 = sink;
var G__12412 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12411,G__12412) : cljs.core.reset_BANG_.call(null,G__12411,G__12412));
});})(map__12389,map__12389__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12413_12424 = cljs.core.seq(refs);
var chunk__12414_12425 = null;
var count__12415_12426 = (0);
var i__12416_12427 = (0);
while(true){
if((i__12416_12427 < count__12415_12426)){
var ref_12428__$1 = chunk__12414_12425.cljs$core$IIndexed$_nth$arity$2(null,i__12416_12427);
cljs.core.add_watch(ref_12428__$1,key,watch);

var G__12429 = seq__12413_12424;
var G__12430 = chunk__12414_12425;
var G__12431 = count__12415_12426;
var G__12432 = (i__12416_12427 + (1));
seq__12413_12424 = G__12429;
chunk__12414_12425 = G__12430;
count__12415_12426 = G__12431;
i__12416_12427 = G__12432;
continue;
} else {
var temp__4425__auto___12433 = cljs.core.seq(seq__12413_12424);
if(temp__4425__auto___12433){
var seq__12413_12434__$1 = temp__4425__auto___12433;
if(cljs.core.chunked_seq_QMARK_(seq__12413_12434__$1)){
var c__7357__auto___12435 = cljs.core.chunk_first(seq__12413_12434__$1);
var G__12436 = cljs.core.chunk_rest(seq__12413_12434__$1);
var G__12437 = c__7357__auto___12435;
var G__12438 = cljs.core.count(c__7357__auto___12435);
var G__12439 = (0);
seq__12413_12424 = G__12436;
chunk__12414_12425 = G__12437;
count__12415_12426 = G__12438;
i__12416_12427 = G__12439;
continue;
} else {
var ref_12440__$1 = cljs.core.first(seq__12413_12434__$1);
cljs.core.add_watch(ref_12440__$1,key,watch);

var G__12441 = cljs.core.next(seq__12413_12434__$1);
var G__12442 = null;
var G__12443 = (0);
var G__12444 = (0);
seq__12413_12424 = G__12441;
chunk__12414_12425 = G__12442;
count__12415_12426 = G__12443;
i__12416_12427 = G__12444;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

