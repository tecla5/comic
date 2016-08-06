// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__15691__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15689 = cljs.core.seq(vec__15688);
var first__15690 = cljs.core.first(seq__15689);
var seq__15689__$1 = cljs.core.next(seq__15689);
var tag = first__15690;
var body = seq__15689__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__15691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15692__i = 0, G__15692__a = new Array(arguments.length -  0);
while (G__15692__i < G__15692__a.length) {G__15692__a[G__15692__i] = arguments[G__15692__i + 0]; ++G__15692__i;}
  args = new cljs.core.IndexedSeq(G__15692__a,0);
} 
return G__15691__delegate.call(this,args);};
G__15691.cljs$lang$maxFixedArity = 0;
G__15691.cljs$lang$applyTo = (function (arglist__15693){
var args = cljs.core.seq(arglist__15693);
return G__15691__delegate(args);
});
G__15691.cljs$core$IFn$_invoke$arity$variadic = G__15691__delegate;
return G__15691;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__15700(s__15701){
return (new cljs.core.LazySeq(null,(function (){
var s__15701__$1 = s__15701;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__15701__$1);
if(temp__4425__auto__){
var s__15701__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15701__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__15701__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__15703 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__15702 = (0);
while(true){
if((i__15702 < size__7325__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__15702);
cljs.core.chunk_append(b__15703,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__15706 = (i__15702 + (1));
i__15702 = G__15706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15703),sablono$core$update_arglists_$_iter__15700(cljs.core.chunk_rest(s__15701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15703),null);
}
} else {
var args = cljs.core.first(s__15701__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__15700(cljs.core.rest(s__15701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7628__auto__ = [];
var len__7621__auto___15714 = arguments.length;
var i__7622__auto___15715 = (0);
while(true){
if((i__7622__auto___15715 < len__7621__auto___15714)){
args__7628__auto__.push((arguments[i__7622__auto___15715]));

var G__15716 = (i__7622__auto___15715 + (1));
i__7622__auto___15715 = G__15716;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__15708(s__15709){
return (new cljs.core.LazySeq(null,(function (){
var s__15709__$1 = s__15709;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__15709__$1);
if(temp__4425__auto__){
var s__15709__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15709__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__15709__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__15711 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__15710 = (0);
while(true){
if((i__15710 < size__7325__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__15710);
cljs.core.chunk_append(b__15711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__15717 = (i__15710 + (1));
i__15710 = G__15717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15711),sablono$core$iter__15708(cljs.core.chunk_rest(s__15709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15711),null);
}
} else {
var style = cljs.core.first(s__15709__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__15708(cljs.core.rest(s__15709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq15707){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15707));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__15722 = goog.dom.getDocument().body;
var G__15723 = (function (){var G__15724 = "script";
var G__15725 = {"src": src};
return goog.dom.createDom(G__15724,G__15725);
})();
return goog.dom.appendChild(G__15722,G__15723);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to15726 = (function sablono$core$link_to15726(var_args){
var args__7628__auto__ = [];
var len__7621__auto___15729 = arguments.length;
var i__7622__auto___15730 = (0);
while(true){
if((i__7622__auto___15730 < len__7621__auto___15729)){
args__7628__auto__.push((arguments[i__7622__auto___15730]));

var G__15731 = (i__7622__auto___15730 + (1));
i__7622__auto___15730 = G__15731;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15726.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

sablono.core.link_to15726.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to15726.cljs$lang$maxFixedArity = (1);

sablono.core.link_to15726.cljs$lang$applyTo = (function (seq15727){
var G__15728 = cljs.core.first(seq15727);
var seq15727__$1 = cljs.core.next(seq15727);
return sablono.core.link_to15726.cljs$core$IFn$_invoke$arity$variadic(G__15728,seq15727__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to15726);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15732 = (function sablono$core$mail_to15732(var_args){
var args__7628__auto__ = [];
var len__7621__auto___15739 = arguments.length;
var i__7622__auto___15740 = (0);
while(true){
if((i__7622__auto___15740 < len__7621__auto___15739)){
args__7628__auto__.push((arguments[i__7622__auto___15740]));

var G__15741 = (i__7622__auto___15740 + (1));
i__7622__auto___15740 = G__15741;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15732.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

sablono.core.mail_to15732.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15735){
var vec__15736 = p__15735;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15736,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6546__auto__ = content;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to15732.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to15732.cljs$lang$applyTo = (function (seq15733){
var G__15734 = cljs.core.first(seq15733);
var seq15733__$1 = cljs.core.next(seq15733);
return sablono.core.mail_to15732.cljs$core$IFn$_invoke$arity$variadic(G__15734,seq15733__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to15732);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15742 = (function sablono$core$unordered_list15742(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7326__auto__ = (function sablono$core$unordered_list15742_$_iter__15749(s__15750){
return (new cljs.core.LazySeq(null,(function (){
var s__15750__$1 = s__15750;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__15750__$1);
if(temp__4425__auto__){
var s__15750__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15750__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__15750__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__15752 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__15751 = (0);
while(true){
if((i__15751 < size__7325__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__15751);
cljs.core.chunk_append(b__15752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__15755 = (i__15751 + (1));
i__15751 = G__15755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15752),sablono$core$unordered_list15742_$_iter__15749(cljs.core.chunk_rest(s__15750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15752),null);
}
} else {
var x = cljs.core.first(s__15750__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list15742_$_iter__15749(cljs.core.rest(s__15750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list15742);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15756 = (function sablono$core$ordered_list15756(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7326__auto__ = (function sablono$core$ordered_list15756_$_iter__15763(s__15764){
return (new cljs.core.LazySeq(null,(function (){
var s__15764__$1 = s__15764;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__15764__$1);
if(temp__4425__auto__){
var s__15764__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15764__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__15764__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__15766 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__15765 = (0);
while(true){
if((i__15765 < size__7325__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__15765);
cljs.core.chunk_append(b__15766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__15769 = (i__15765 + (1));
i__15765 = G__15769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15766),sablono$core$ordered_list15756_$_iter__15763(cljs.core.chunk_rest(s__15764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15766),null);
}
} else {
var x = cljs.core.first(s__15764__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list15756_$_iter__15763(cljs.core.rest(s__15764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list15756);
/**
 * Create an image element.
 */
sablono.core.image15770 = (function sablono$core$image15770(var_args){
var args15771 = [];
var len__7621__auto___15774 = arguments.length;
var i__7622__auto___15775 = (0);
while(true){
if((i__7622__auto___15775 < len__7621__auto___15774)){
args15771.push((arguments[i__7622__auto___15775]));

var G__15776 = (i__7622__auto___15775 + (1));
i__7622__auto___15775 = G__15776;
continue;
} else {
}
break;
}

var G__15773 = args15771.length;
switch (G__15773) {
case 1:
return sablono.core.image15770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15771.length)].join('')));

}
});

sablono.core.image15770.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image15770.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image15770.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image15770);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15778_SHARP_,p2__15779_SHARP_){
return [cljs.core.str(p1__15778_SHARP_),cljs.core.str("["),cljs.core.str(p2__15779_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15780_SHARP_,p2__15781_SHARP_){
return [cljs.core.str(p1__15780_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15781_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field15782 = (function sablono$core$color_field15782(var_args){
var args15783 = [];
var len__7621__auto___15850 = arguments.length;
var i__7622__auto___15851 = (0);
while(true){
if((i__7622__auto___15851 < len__7621__auto___15850)){
args15783.push((arguments[i__7622__auto___15851]));

var G__15852 = (i__7622__auto___15851 + (1));
i__7622__auto___15851 = G__15852;
continue;
} else {
}
break;
}

var G__15785 = args15783.length;
switch (G__15785) {
case 1:
return sablono.core.color_field15782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15783.length)].join('')));

}
});

sablono.core.color_field15782.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.color_field15782.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.color_field15782.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.color_field15782.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field15782);

/**
 * Creates a date input field.
 */
sablono.core.date_field15786 = (function sablono$core$date_field15786(var_args){
var args15787 = [];
var len__7621__auto___15854 = arguments.length;
var i__7622__auto___15855 = (0);
while(true){
if((i__7622__auto___15855 < len__7621__auto___15854)){
args15787.push((arguments[i__7622__auto___15855]));

var G__15856 = (i__7622__auto___15855 + (1));
i__7622__auto___15855 = G__15856;
continue;
} else {
}
break;
}

var G__15789 = args15787.length;
switch (G__15789) {
case 1:
return sablono.core.date_field15786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15787.length)].join('')));

}
});

sablono.core.date_field15786.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.date_field15786.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.date_field15786.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.date_field15786.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field15786);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15790 = (function sablono$core$datetime_field15790(var_args){
var args15791 = [];
var len__7621__auto___15858 = arguments.length;
var i__7622__auto___15859 = (0);
while(true){
if((i__7622__auto___15859 < len__7621__auto___15858)){
args15791.push((arguments[i__7622__auto___15859]));

var G__15860 = (i__7622__auto___15859 + (1));
i__7622__auto___15859 = G__15860;
continue;
} else {
}
break;
}

var G__15793 = args15791.length;
switch (G__15793) {
case 1:
return sablono.core.datetime_field15790.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15790.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15791.length)].join('')));

}
});

sablono.core.datetime_field15790.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.datetime_field15790.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.datetime_field15790.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.datetime_field15790.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field15790);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15794 = (function sablono$core$datetime_local_field15794(var_args){
var args15795 = [];
var len__7621__auto___15862 = arguments.length;
var i__7622__auto___15863 = (0);
while(true){
if((i__7622__auto___15863 < len__7621__auto___15862)){
args15795.push((arguments[i__7622__auto___15863]));

var G__15864 = (i__7622__auto___15863 + (1));
i__7622__auto___15863 = G__15864;
continue;
} else {
}
break;
}

var G__15797 = args15795.length;
switch (G__15797) {
case 1:
return sablono.core.datetime_local_field15794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15795.length)].join('')));

}
});

sablono.core.datetime_local_field15794.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.datetime_local_field15794.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.datetime_local_field15794.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.datetime_local_field15794.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field15794);

/**
 * Creates a email input field.
 */
sablono.core.email_field15798 = (function sablono$core$email_field15798(var_args){
var args15799 = [];
var len__7621__auto___15866 = arguments.length;
var i__7622__auto___15867 = (0);
while(true){
if((i__7622__auto___15867 < len__7621__auto___15866)){
args15799.push((arguments[i__7622__auto___15867]));

var G__15868 = (i__7622__auto___15867 + (1));
i__7622__auto___15867 = G__15868;
continue;
} else {
}
break;
}

var G__15801 = args15799.length;
switch (G__15801) {
case 1:
return sablono.core.email_field15798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15799.length)].join('')));

}
});

sablono.core.email_field15798.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.email_field15798.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.email_field15798.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.email_field15798.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field15798);

/**
 * Creates a file input field.
 */
sablono.core.file_field15802 = (function sablono$core$file_field15802(var_args){
var args15803 = [];
var len__7621__auto___15870 = arguments.length;
var i__7622__auto___15871 = (0);
while(true){
if((i__7622__auto___15871 < len__7621__auto___15870)){
args15803.push((arguments[i__7622__auto___15871]));

var G__15872 = (i__7622__auto___15871 + (1));
i__7622__auto___15871 = G__15872;
continue;
} else {
}
break;
}

var G__15805 = args15803.length;
switch (G__15805) {
case 1:
return sablono.core.file_field15802.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15802.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15803.length)].join('')));

}
});

sablono.core.file_field15802.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.file_field15802.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.file_field15802.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.file_field15802.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field15802);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15806 = (function sablono$core$hidden_field15806(var_args){
var args15807 = [];
var len__7621__auto___15874 = arguments.length;
var i__7622__auto___15875 = (0);
while(true){
if((i__7622__auto___15875 < len__7621__auto___15874)){
args15807.push((arguments[i__7622__auto___15875]));

var G__15876 = (i__7622__auto___15875 + (1));
i__7622__auto___15875 = G__15876;
continue;
} else {
}
break;
}

var G__15809 = args15807.length;
switch (G__15809) {
case 1:
return sablono.core.hidden_field15806.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15807.length)].join('')));

}
});

sablono.core.hidden_field15806.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.hidden_field15806.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.hidden_field15806.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.hidden_field15806.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field15806);

/**
 * Creates a month input field.
 */
sablono.core.month_field15810 = (function sablono$core$month_field15810(var_args){
var args15811 = [];
var len__7621__auto___15878 = arguments.length;
var i__7622__auto___15879 = (0);
while(true){
if((i__7622__auto___15879 < len__7621__auto___15878)){
args15811.push((arguments[i__7622__auto___15879]));

var G__15880 = (i__7622__auto___15879 + (1));
i__7622__auto___15879 = G__15880;
continue;
} else {
}
break;
}

var G__15813 = args15811.length;
switch (G__15813) {
case 1:
return sablono.core.month_field15810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15811.length)].join('')));

}
});

sablono.core.month_field15810.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.month_field15810.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.month_field15810.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.month_field15810.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field15810);

/**
 * Creates a number input field.
 */
sablono.core.number_field15814 = (function sablono$core$number_field15814(var_args){
var args15815 = [];
var len__7621__auto___15882 = arguments.length;
var i__7622__auto___15883 = (0);
while(true){
if((i__7622__auto___15883 < len__7621__auto___15882)){
args15815.push((arguments[i__7622__auto___15883]));

var G__15884 = (i__7622__auto___15883 + (1));
i__7622__auto___15883 = G__15884;
continue;
} else {
}
break;
}

var G__15817 = args15815.length;
switch (G__15817) {
case 1:
return sablono.core.number_field15814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15815.length)].join('')));

}
});

sablono.core.number_field15814.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.number_field15814.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.number_field15814.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.number_field15814.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field15814);

/**
 * Creates a password input field.
 */
sablono.core.password_field15818 = (function sablono$core$password_field15818(var_args){
var args15819 = [];
var len__7621__auto___15886 = arguments.length;
var i__7622__auto___15887 = (0);
while(true){
if((i__7622__auto___15887 < len__7621__auto___15886)){
args15819.push((arguments[i__7622__auto___15887]));

var G__15888 = (i__7622__auto___15887 + (1));
i__7622__auto___15887 = G__15888;
continue;
} else {
}
break;
}

var G__15821 = args15819.length;
switch (G__15821) {
case 1:
return sablono.core.password_field15818.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15819.length)].join('')));

}
});

sablono.core.password_field15818.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.password_field15818.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.password_field15818.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.password_field15818.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field15818);

/**
 * Creates a range input field.
 */
sablono.core.range_field15822 = (function sablono$core$range_field15822(var_args){
var args15823 = [];
var len__7621__auto___15890 = arguments.length;
var i__7622__auto___15891 = (0);
while(true){
if((i__7622__auto___15891 < len__7621__auto___15890)){
args15823.push((arguments[i__7622__auto___15891]));

var G__15892 = (i__7622__auto___15891 + (1));
i__7622__auto___15891 = G__15892;
continue;
} else {
}
break;
}

var G__15825 = args15823.length;
switch (G__15825) {
case 1:
return sablono.core.range_field15822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15823.length)].join('')));

}
});

sablono.core.range_field15822.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.range_field15822.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.range_field15822.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.range_field15822.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field15822);

/**
 * Creates a search input field.
 */
sablono.core.search_field15826 = (function sablono$core$search_field15826(var_args){
var args15827 = [];
var len__7621__auto___15894 = arguments.length;
var i__7622__auto___15895 = (0);
while(true){
if((i__7622__auto___15895 < len__7621__auto___15894)){
args15827.push((arguments[i__7622__auto___15895]));

var G__15896 = (i__7622__auto___15895 + (1));
i__7622__auto___15895 = G__15896;
continue;
} else {
}
break;
}

var G__15829 = args15827.length;
switch (G__15829) {
case 1:
return sablono.core.search_field15826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15827.length)].join('')));

}
});

sablono.core.search_field15826.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.search_field15826.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.search_field15826.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.search_field15826.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field15826);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15830 = (function sablono$core$tel_field15830(var_args){
var args15831 = [];
var len__7621__auto___15898 = arguments.length;
var i__7622__auto___15899 = (0);
while(true){
if((i__7622__auto___15899 < len__7621__auto___15898)){
args15831.push((arguments[i__7622__auto___15899]));

var G__15900 = (i__7622__auto___15899 + (1));
i__7622__auto___15899 = G__15900;
continue;
} else {
}
break;
}

var G__15833 = args15831.length;
switch (G__15833) {
case 1:
return sablono.core.tel_field15830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15831.length)].join('')));

}
});

sablono.core.tel_field15830.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.tel_field15830.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.tel_field15830.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.tel_field15830.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field15830);

/**
 * Creates a text input field.
 */
sablono.core.text_field15834 = (function sablono$core$text_field15834(var_args){
var args15835 = [];
var len__7621__auto___15902 = arguments.length;
var i__7622__auto___15903 = (0);
while(true){
if((i__7622__auto___15903 < len__7621__auto___15902)){
args15835.push((arguments[i__7622__auto___15903]));

var G__15904 = (i__7622__auto___15903 + (1));
i__7622__auto___15903 = G__15904;
continue;
} else {
}
break;
}

var G__15837 = args15835.length;
switch (G__15837) {
case 1:
return sablono.core.text_field15834.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15834.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15835.length)].join('')));

}
});

sablono.core.text_field15834.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.text_field15834.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.text_field15834.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.text_field15834.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field15834);

/**
 * Creates a time input field.
 */
sablono.core.time_field15838 = (function sablono$core$time_field15838(var_args){
var args15839 = [];
var len__7621__auto___15906 = arguments.length;
var i__7622__auto___15907 = (0);
while(true){
if((i__7622__auto___15907 < len__7621__auto___15906)){
args15839.push((arguments[i__7622__auto___15907]));

var G__15908 = (i__7622__auto___15907 + (1));
i__7622__auto___15907 = G__15908;
continue;
} else {
}
break;
}

var G__15841 = args15839.length;
switch (G__15841) {
case 1:
return sablono.core.time_field15838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15839.length)].join('')));

}
});

sablono.core.time_field15838.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.time_field15838.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.time_field15838.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.time_field15838.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field15838);

/**
 * Creates a url input field.
 */
sablono.core.url_field15842 = (function sablono$core$url_field15842(var_args){
var args15843 = [];
var len__7621__auto___15910 = arguments.length;
var i__7622__auto___15911 = (0);
while(true){
if((i__7622__auto___15911 < len__7621__auto___15910)){
args15843.push((arguments[i__7622__auto___15911]));

var G__15912 = (i__7622__auto___15911 + (1));
i__7622__auto___15911 = G__15912;
continue;
} else {
}
break;
}

var G__15845 = args15843.length;
switch (G__15845) {
case 1:
return sablono.core.url_field15842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15843.length)].join('')));

}
});

sablono.core.url_field15842.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.url_field15842.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.url_field15842.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.url_field15842.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field15842);

/**
 * Creates a week input field.
 */
sablono.core.week_field15846 = (function sablono$core$week_field15846(var_args){
var args15847 = [];
var len__7621__auto___15914 = arguments.length;
var i__7622__auto___15915 = (0);
while(true){
if((i__7622__auto___15915 < len__7621__auto___15914)){
args15847.push((arguments[i__7622__auto___15915]));

var G__15916 = (i__7622__auto___15915 + (1));
i__7622__auto___15915 = G__15916;
continue;
} else {
}
break;
}

var G__15849 = args15847.length;
switch (G__15849) {
case 1:
return sablono.core.week_field15846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15847.length)].join('')));

}
});

sablono.core.week_field15846.cljs$core$IFn$_invoke$arity$1 = (function (name__15675__auto__){
return sablono.core.week_field15846.cljs$core$IFn$_invoke$arity$2(name__15675__auto__,null);
});

sablono.core.week_field15846.cljs$core$IFn$_invoke$arity$2 = (function (name__15675__auto__,value__15676__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__15675__auto__,value__15676__auto__);
});

sablono.core.week_field15846.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field15846);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15918 = (function sablono$core$check_box15918(var_args){
var args15919 = [];
var len__7621__auto___15922 = arguments.length;
var i__7622__auto___15923 = (0);
while(true){
if((i__7622__auto___15923 < len__7621__auto___15922)){
args15919.push((arguments[i__7622__auto___15923]));

var G__15924 = (i__7622__auto___15923 + (1));
i__7622__auto___15923 = G__15924;
continue;
} else {
}
break;
}

var G__15921 = args15919.length;
switch (G__15921) {
case 1:
return sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15919.length)].join('')));

}
});

sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box15918.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box15918.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15918);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15926 = (function sablono$core$radio_button15926(var_args){
var args15927 = [];
var len__7621__auto___15930 = arguments.length;
var i__7622__auto___15931 = (0);
while(true){
if((i__7622__auto___15931 < len__7621__auto___15930)){
args15927.push((arguments[i__7622__auto___15931]));

var G__15932 = (i__7622__auto___15931 + (1));
i__7622__auto___15931 = G__15932;
continue;
} else {
}
break;
}

var G__15929 = args15927.length;
switch (G__15929) {
case 1:
return sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15927.length)].join('')));

}
});

sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button15926.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button15926.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15926);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__15935 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__15935);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15936 = (function sablono$core$select_options15936(coll){
var iter__7326__auto__ = (function sablono$core$select_options15936_$_iter__15955(s__15956){
return (new cljs.core.LazySeq(null,(function (){
var s__15956__$1 = s__15956;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__15956__$1);
if(temp__4425__auto__){
var s__15956__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15956__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__15956__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__15958 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__15957 = (0);
while(true){
if((i__15957 < size__7325__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__15957);
cljs.core.chunk_append(b__15958,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15967 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options15936(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__15973 = (i__15957 + (1));
i__15957 = G__15973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15958),sablono$core$select_options15936_$_iter__15955(cljs.core.chunk_rest(s__15956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15958),null);
}
} else {
var x = cljs.core.first(s__15956__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15970 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options15936(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options15936_$_iter__15955(cljs.core.rest(s__15956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15936);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15974 = (function sablono$core$drop_down15974(var_args){
var args15975 = [];
var len__7621__auto___15978 = arguments.length;
var i__7622__auto___15979 = (0);
while(true){
if((i__7622__auto___15979 < len__7621__auto___15978)){
args15975.push((arguments[i__7622__auto___15979]));

var G__15980 = (i__7622__auto___15979 + (1));
i__7622__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var G__15977 = args15975.length;
switch (G__15977) {
case 2:
return sablono.core.drop_down15974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15974.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15975.length)].join('')));

}
});

sablono.core.drop_down15974.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15974.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down15974.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down15974.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15974);
/**
 * Creates a text area element.
 */
sablono.core.text_area15982 = (function sablono$core$text_area15982(var_args){
var args15983 = [];
var len__7621__auto___15986 = arguments.length;
var i__7622__auto___15987 = (0);
while(true){
if((i__7622__auto___15987 < len__7621__auto___15986)){
args15983.push((arguments[i__7622__auto___15987]));

var G__15988 = (i__7622__auto___15987 + (1));
i__7622__auto___15987 = G__15988;
continue;
} else {
}
break;
}

var G__15985 = args15983.length;
switch (G__15985) {
case 1:
return sablono.core.text_area15982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15983.length)].join('')));

}
});

sablono.core.text_area15982.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15982.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area15982.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area15982.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15982);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15990 = (function sablono$core$label15990(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15990);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15991 = (function sablono$core$submit_button15991(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15991);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15992 = (function sablono$core$reset_button15992(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15992);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15993 = (function sablono$core$form_to15993(var_args){
var args__7628__auto__ = [];
var len__7621__auto___16003 = arguments.length;
var i__7622__auto___16004 = (0);
while(true){
if((i__7622__auto___16004 < len__7621__auto___16003)){
args__7628__auto__.push((arguments[i__7622__auto___16004]));

var G__16005 = (i__7622__auto___16004 + (1));
i__7622__auto___16004 = G__16005;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15993.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

sablono.core.form_to15993.cljs$core$IFn$_invoke$arity$variadic = (function (p__15996,body){
var vec__15997 = p__15996;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__16000 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__16001 = "_method";
var G__16002 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__16000,G__16001,G__16002) : sablono.core.hidden_field.call(null,G__16000,G__16001,G__16002));
})()], null)),body));
});

sablono.core.form_to15993.cljs$lang$maxFixedArity = (1);

sablono.core.form_to15993.cljs$lang$applyTo = (function (seq15994){
var G__15995 = cljs.core.first(seq15994);
var seq15994__$1 = cljs.core.next(seq15994);
return sablono.core.form_to15993.cljs$core$IFn$_invoke$arity$variadic(G__15995,seq15994__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15993);
