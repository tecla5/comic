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
var args14987 = [];
var len__7621__auto___15018 = arguments.length;
var i__7622__auto___15019 = (0);
while(true){
if((i__7622__auto___15019 < len__7621__auto___15018)){
args14987.push((arguments[i__7622__auto___15019]));

var G__15020 = (i__7622__auto___15019 + (1));
i__7622__auto___15019 = G__15020;
continue;
} else {
}
break;
}

var G__14989 = args14987.length;
switch (G__14989) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14987.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__14990 = opts;
var map__14990__$1 = ((((!((map__14990 == null)))?((((map__14990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14990):map__14990);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14990__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14990__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__14992 = cljs.core.count(refs);
switch (G__14992) {
case (1):
var vec__14993 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14993,(0),null);
return ((function (vec__14993,a,G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_){
return (function (){
var G__14996 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14996) : f.call(null,G__14996));
});
;})(vec__14993,a,G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__14997 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14997,(1),null);
return ((function (vec__14997,a,b,G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_){
return (function (){
var G__15000 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__15001 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15000,G__15001) : f.call(null,G__15000,G__15001));
});
;})(vec__14997,a,b,G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__15002 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,(2),null);
return ((function (vec__15002,a,b,c,G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_){
return (function (){
var G__15005 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__15006 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__15007 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15005,G__15006,G__15007) : f.call(null,G__15005,G__15006,G__15007));
});
;})(vec__15002,a,b,c,G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__14992,map__14990,map__14990__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__15008 = ref;
var G__15009_15023 = G__15008;
var G__15010_15024 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15009_15023,G__15010_15024) : cljs.core.reset_BANG_.call(null,G__15009_15023,G__15010_15024));

return G__15008;
})():(function (){var G__15011 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15011) : cljs.core.atom.call(null,G__15011));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__14990,map__14990__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__14990,map__14990__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__14990,map__14990__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__15012 = sink;
var G__15013 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15012,G__15013) : cljs.core.reset_BANG_.call(null,G__15012,G__15013));
});})(map__14990,map__14990__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__15014_15025 = cljs.core.seq(refs);
var chunk__15015_15026 = null;
var count__15016_15027 = (0);
var i__15017_15028 = (0);
while(true){
if((i__15017_15028 < count__15016_15027)){
var ref_15029__$1 = chunk__15015_15026.cljs$core$IIndexed$_nth$arity$2(null,i__15017_15028);
cljs.core.add_watch(ref_15029__$1,key,watch);

var G__15030 = seq__15014_15025;
var G__15031 = chunk__15015_15026;
var G__15032 = count__15016_15027;
var G__15033 = (i__15017_15028 + (1));
seq__15014_15025 = G__15030;
chunk__15015_15026 = G__15031;
count__15016_15027 = G__15032;
i__15017_15028 = G__15033;
continue;
} else {
var temp__4425__auto___15034 = cljs.core.seq(seq__15014_15025);
if(temp__4425__auto___15034){
var seq__15014_15035__$1 = temp__4425__auto___15034;
if(cljs.core.chunked_seq_QMARK_(seq__15014_15035__$1)){
var c__7357__auto___15036 = cljs.core.chunk_first(seq__15014_15035__$1);
var G__15037 = cljs.core.chunk_rest(seq__15014_15035__$1);
var G__15038 = c__7357__auto___15036;
var G__15039 = cljs.core.count(c__7357__auto___15036);
var G__15040 = (0);
seq__15014_15025 = G__15037;
chunk__15015_15026 = G__15038;
count__15016_15027 = G__15039;
i__15017_15028 = G__15040;
continue;
} else {
var ref_15041__$1 = cljs.core.first(seq__15014_15035__$1);
cljs.core.add_watch(ref_15041__$1,key,watch);

var G__15042 = cljs.core.next(seq__15014_15035__$1);
var G__15043 = null;
var G__15044 = (0);
var G__15045 = (0);
seq__15014_15025 = G__15042;
chunk__15015_15026 = G__15043;
count__15016_15027 = G__15044;
i__15017_15028 = G__15045;
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

