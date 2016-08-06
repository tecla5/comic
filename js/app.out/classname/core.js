// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('classname.core');
goog.require('cljs.core');
goog.require('clojure.string');
classname.core.parse_args = (function classname$core$parse_args(xs){
var res = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var x = cljs.core.first(xs__$1);
var rest = cljs.core.rest(xs__$1);
if(typeof x === 'string'){
var G__16595 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([x,true], true, false));
var G__16596 = rest;
res = G__16595;
xs__$1 = G__16596;
continue;
} else {
if((x instanceof cljs.core.Keyword)){
var G__16597 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([x,true], true, false));
var G__16598 = rest;
res = G__16597;
xs__$1 = G__16598;
continue;
} else {
if((x instanceof cljs.core.Symbol)){
var G__16599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([x,true], true, false));
var G__16600 = rest;
res = G__16599;
xs__$1 = G__16600;
continue;
} else {
if(typeof x === 'number'){
var G__16601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(x)].join(''),true], true, false));
var G__16602 = rest;
res = G__16601;
xs__$1 = G__16602;
continue;
} else {
if(cljs.core.map_QMARK_(x)){
var G__16603 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,x);
var G__16604 = rest;
res = G__16603;
xs__$1 = G__16604;
continue;
} else {
if(cljs.core.sequential_QMARK_(x)){
var G__16605 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,classname$core$parse_args(x));
var G__16606 = rest;
res = G__16605;
xs__$1 = G__16606;
continue;
} else {
if(cljs.core.set_QMARK_(x)){
var G__16607 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,classname$core$parse_args(cljs.core.seq(x)));
var G__16608 = rest;
res = G__16607;
xs__$1 = G__16608;
continue;
} else {
if(cljs.core.empty_QMARK_(rest)){
return res;
} else {
var G__16609 = res;
var G__16610 = rest;
res = G__16609;
xs__$1 = G__16610;
continue;
}

}
}
}
}
}
}
}
break;
}
});
classname.core.classname = (function classname$core$classname(var_args){
var args__7628__auto__ = [];
var len__7621__auto___16613 = arguments.length;
var i__7622__auto___16614 = (0);
while(true){
if((i__7622__auto___16614 < len__7621__auto___16613)){
args__7628__auto__.push((arguments[i__7622__auto___16614]));

var G__16615 = (i__7622__auto___16614 + (1));
i__7622__auto___16614 = G__16615;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return classname.core.classname.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

classname.core.classname.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16611_SHARP_){
if(cljs.core.truth_(cljs.core.second(p1__16611_SHARP_))){
return cljs.core.name(cljs.core.first(p1__16611_SHARP_));
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,classname.core.parse_args(xs)))));
});

classname.core.classname.cljs$lang$maxFixedArity = (0);

classname.core.classname.cljs$lang$applyTo = (function (seq16612){
return classname.core.classname.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16612));
});

