// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
return x;

}
}
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$__$1){
if((class$__$1 == null)){
return null;
} else {
if(cljs.core.list_QMARK_(class$__$1)){
if((cljs.core.first(class$__$1) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$__$1);
}
} else {
if((class$__$1 instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if(typeof class$__$1 === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if((class$__$1 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name(class$__$1)], null);
} else {
if(((cljs.core.set_QMARK_(class$__$1)) || (cljs.core.sequential_QMARK_(class$__$1))) && (cljs.core.every_QMARK_((function (p1__15138_SHARP_){
return ((p1__15138_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__15138_SHARP_ === 'string');
}),class$__$1))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$__$1);
} else {
if((cljs.core.set_QMARK_(class$__$1)) || (cljs.core.sequential_QMARK_(class$__$1))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$__$1);
} else {
return class$__$1;

}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__15140 = attrs;
var G__15140__$1 = (cljs.core.truth_(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__15140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),sablono.normalize.class$):G__15140);
return G__15140__$1;
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__7628__auto__ = [];
var len__7621__auto___15143 = arguments.length;
var i__7622__auto___15144 = (0);
while(true){
if((i__7622__auto___15144 < len__7621__auto___15143)){
args__7628__auto__.push((arguments[i__7622__auto___15144]));

var G__15145 = (i__7622__auto___15144 + (1));
i__7622__auto___15144 = G__15145;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.attributes,maps);
var classes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,maps__$1);
var classes__$1 = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,classes));
var G__15142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,maps__$1);
var G__15142__$1 = ((!(cljs.core.empty_QMARK_(classes__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15142,cljs.core.cst$kw$class,classes__$1):G__15142);
return G__15142__$1;
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq15141){
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15141));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));
var vec__15151 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst(matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15151,(0),null);
var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15151,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__15151,tag_name,names){
return (function (p1__15146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__15146_SHARP_));
});})(matches,vec__15151,tag_name,names))
,names))),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__15151,tag_name,names){
return (function (p1__15147_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__15147_SHARP_));
});})(matches,vec__15151,tag_name,names))
,names)))], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((typeof x === 'string')?(function (){var x__7380__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})():(cljs.core.truth_(sablono.util.element_QMARK_(x))?(function (){var x__7380__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})():(((cljs.core.list_QMARK_(x)) && ((x instanceof cljs.core.Symbol)))?(function (){var x__7380__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})():((cljs.core.list_QMARK_(x))?x:(((cljs.core.sequential_QMARK_(x)) && (cljs.core.sequential_QMARK_(cljs.core.first(x))) && (!(typeof cljs.core.first(x) === 'string')) && (cljs.core.not(sablono.util.element_QMARK_(cljs.core.first(x)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(1))))?sablono$normalize$children(cljs.core.first(x)):((cljs.core.sequential_QMARK_(x))?x:(function (){var x__7380__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})()
)))))));
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__15155){
var vec__15162 = p__15155;
var seq__15163 = cljs.core.seq(vec__15162);
var first__15164 = cljs.core.first(seq__15163);
var seq__15163__$1 = cljs.core.next(seq__15163);
var tag = first__15164;
var content = seq__15163__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$content,content], null));
} else {
}

var vec__15165 = sablono.normalize.match_tag(tag);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(2),null);
var tag_attrs = sablono.normalize.compact_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$class,class$], null));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),sablono.normalize.children(cljs.core.next(content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes(tag_attrs),sablono.normalize.children(content)], null);
}
});
