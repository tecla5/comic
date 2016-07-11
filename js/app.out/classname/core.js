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
var G__14047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([x,true], true, false));
var G__14048 = rest;
res = G__14047;
xs__$1 = G__14048;
continue;
} else {
if((x instanceof cljs.core.Keyword)){
var G__14049 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([x,true], true, false));
var G__14050 = rest;
res = G__14049;
xs__$1 = G__14050;
continue;
} else {
if((x instanceof cljs.core.Symbol)){
var G__14051 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([x,true], true, false));
var G__14052 = rest;
res = G__14051;
xs__$1 = G__14052;
continue;
} else {
if(typeof x === 'number'){
var G__14053 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(x)].join(''),true], true, false));
var G__14054 = rest;
res = G__14053;
xs__$1 = G__14054;
continue;
} else {
if(cljs.core.map_QMARK_(x)){
var G__14055 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,x);
var G__14056 = rest;
res = G__14055;
xs__$1 = G__14056;
continue;
} else {
if(cljs.core.sequential_QMARK_(x)){
var G__14057 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,classname$core$parse_args(x));
var G__14058 = rest;
res = G__14057;
xs__$1 = G__14058;
continue;
} else {
if(cljs.core.set_QMARK_(x)){
var G__14059 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,classname$core$parse_args(cljs.core.seq(x)));
var G__14060 = rest;
res = G__14059;
xs__$1 = G__14060;
continue;
} else {
if(cljs.core.empty_QMARK_(rest)){
return res;
} else {
var G__14061 = res;
var G__14062 = rest;
res = G__14061;
xs__$1 = G__14062;
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
var len__7621__auto___14065 = arguments.length;
var i__7622__auto___14066 = (0);
while(true){
if((i__7622__auto___14066 < len__7621__auto___14065)){
args__7628__auto__.push((arguments[i__7622__auto___14066]));

var G__14067 = (i__7622__auto___14066 + (1));
i__7622__auto___14066 = G__14067;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return classname.core.classname.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

classname.core.classname.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14063_SHARP_){
if(cljs.core.truth_(cljs.core.second(p1__14063_SHARP_))){
return cljs.core.name(cljs.core.first(p1__14063_SHARP_));
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,classname.core.parse_args(xs)))));
});

classname.core.classname.cljs$lang$maxFixedArity = (0);

classname.core.classname.cljs$lang$applyTo = (function (seq14064){
return classname.core.classname.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14064));
});

