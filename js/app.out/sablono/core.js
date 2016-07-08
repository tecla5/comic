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
var G__13143__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__13141 = cljs.core.seq(vec__13140);
var first__13142 = cljs.core.first(seq__13141);
var seq__13141__$1 = cljs.core.next(seq__13141);
var tag = first__13142;
var body = seq__13141__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13144__i = 0, G__13144__a = new Array(arguments.length -  0);
while (G__13144__i < G__13144__a.length) {G__13144__a[G__13144__i] = arguments[G__13144__i + 0]; ++G__13144__i;}
  args = new cljs.core.IndexedSeq(G__13144__a,0);
} 
return G__13143__delegate.call(this,args);};
G__13143.cljs$lang$maxFixedArity = 0;
G__13143.cljs$lang$applyTo = (function (arglist__13145){
var args = cljs.core.seq(arglist__13145);
return G__13143__delegate(args);
});
G__13143.cljs$core$IFn$_invoke$arity$variadic = G__13143__delegate;
return G__13143;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__13152(s__13153){
return (new cljs.core.LazySeq(null,(function (){
var s__13153__$1 = s__13153;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13153__$1);
if(temp__4425__auto__){
var s__13153__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13153__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__13153__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__13155 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__13154 = (0);
while(true){
if((i__13154 < size__7325__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__13154);
cljs.core.chunk_append(b__13155,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13158 = (i__13154 + (1));
i__13154 = G__13158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13155),sablono$core$update_arglists_$_iter__13152(cljs.core.chunk_rest(s__13153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13155),null);
}
} else {
var args = cljs.core.first(s__13153__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13152(cljs.core.rest(s__13153__$2)));
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
var len__7621__auto___13166 = arguments.length;
var i__7622__auto___13167 = (0);
while(true){
if((i__7622__auto___13167 < len__7621__auto___13166)){
args__7628__auto__.push((arguments[i__7622__auto___13167]));

var G__13168 = (i__7622__auto___13167 + (1));
i__7622__auto___13167 = G__13168;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__13160(s__13161){
return (new cljs.core.LazySeq(null,(function (){
var s__13161__$1 = s__13161;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13161__$1);
if(temp__4425__auto__){
var s__13161__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13161__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__13161__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__13163 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__13162 = (0);
while(true){
if((i__13162 < size__7325__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__13162);
cljs.core.chunk_append(b__13163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13169 = (i__13162 + (1));
i__13162 = G__13169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13163),sablono$core$iter__13160(cljs.core.chunk_rest(s__13161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13163),null);
}
} else {
var style = cljs.core.first(s__13161__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13160(cljs.core.rest(s__13161__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq13159){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13159));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13174 = goog.dom.getDocument().body;
var G__13175 = (function (){var G__13176 = "script";
var G__13177 = {"src": src};
return goog.dom.createDom(G__13176,G__13177);
})();
return goog.dom.appendChild(G__13174,G__13175);
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
sablono.core.link_to13178 = (function sablono$core$link_to13178(var_args){
var args__7628__auto__ = [];
var len__7621__auto___13181 = arguments.length;
var i__7622__auto___13182 = (0);
while(true){
if((i__7622__auto___13182 < len__7621__auto___13181)){
args__7628__auto__.push((arguments[i__7622__auto___13182]));

var G__13183 = (i__7622__auto___13182 + (1));
i__7622__auto___13182 = G__13183;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

sablono.core.link_to13178.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to13178.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13178.cljs$lang$applyTo = (function (seq13179){
var G__13180 = cljs.core.first(seq13179);
var seq13179__$1 = cljs.core.next(seq13179);
return sablono.core.link_to13178.cljs$core$IFn$_invoke$arity$variadic(G__13180,seq13179__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13178);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13184 = (function sablono$core$mail_to13184(var_args){
var args__7628__auto__ = [];
var len__7621__auto___13191 = arguments.length;
var i__7622__auto___13192 = (0);
while(true){
if((i__7622__auto___13192 < len__7621__auto___13191)){
args__7628__auto__.push((arguments[i__7622__auto___13192]));

var G__13193 = (i__7622__auto___13192 + (1));
i__7622__auto___13192 = G__13193;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13184.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

sablono.core.mail_to13184.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13187){
var vec__13188 = p__13187;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6546__auto__ = content;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13184.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13184.cljs$lang$applyTo = (function (seq13185){
var G__13186 = cljs.core.first(seq13185);
var seq13185__$1 = cljs.core.next(seq13185);
return sablono.core.mail_to13184.cljs$core$IFn$_invoke$arity$variadic(G__13186,seq13185__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13184);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13194 = (function sablono$core$unordered_list13194(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7326__auto__ = (function sablono$core$unordered_list13194_$_iter__13201(s__13202){
return (new cljs.core.LazySeq(null,(function (){
var s__13202__$1 = s__13202;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13202__$1);
if(temp__4425__auto__){
var s__13202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13202__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__13202__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__13204 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__13203 = (0);
while(true){
if((i__13203 < size__7325__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__13203);
cljs.core.chunk_append(b__13204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13207 = (i__13203 + (1));
i__13203 = G__13207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13204),sablono$core$unordered_list13194_$_iter__13201(cljs.core.chunk_rest(s__13202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13204),null);
}
} else {
var x = cljs.core.first(s__13202__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13194_$_iter__13201(cljs.core.rest(s__13202__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13194);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13208 = (function sablono$core$ordered_list13208(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7326__auto__ = (function sablono$core$ordered_list13208_$_iter__13215(s__13216){
return (new cljs.core.LazySeq(null,(function (){
var s__13216__$1 = s__13216;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13216__$1);
if(temp__4425__auto__){
var s__13216__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13216__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__13216__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__13218 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__13217 = (0);
while(true){
if((i__13217 < size__7325__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__13217);
cljs.core.chunk_append(b__13218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13221 = (i__13217 + (1));
i__13217 = G__13221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13218),sablono$core$ordered_list13208_$_iter__13215(cljs.core.chunk_rest(s__13216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13218),null);
}
} else {
var x = cljs.core.first(s__13216__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13208_$_iter__13215(cljs.core.rest(s__13216__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13208);
/**
 * Create an image element.
 */
sablono.core.image13222 = (function sablono$core$image13222(var_args){
var args13223 = [];
var len__7621__auto___13226 = arguments.length;
var i__7622__auto___13227 = (0);
while(true){
if((i__7622__auto___13227 < len__7621__auto___13226)){
args13223.push((arguments[i__7622__auto___13227]));

var G__13228 = (i__7622__auto___13227 + (1));
i__7622__auto___13227 = G__13228;
continue;
} else {
}
break;
}

var G__13225 = args13223.length;
switch (G__13225) {
case 1:
return sablono.core.image13222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13223.length)].join('')));

}
});

sablono.core.image13222.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13222.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13222.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13222);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13230_SHARP_,p2__13231_SHARP_){
return [cljs.core.str(p1__13230_SHARP_),cljs.core.str("["),cljs.core.str(p2__13231_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13232_SHARP_,p2__13233_SHARP_){
return [cljs.core.str(p1__13232_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13233_SHARP_)].join('');
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
sablono.core.color_field13234 = (function sablono$core$color_field13234(var_args){
var args13235 = [];
var len__7621__auto___13302 = arguments.length;
var i__7622__auto___13303 = (0);
while(true){
if((i__7622__auto___13303 < len__7621__auto___13302)){
args13235.push((arguments[i__7622__auto___13303]));

var G__13304 = (i__7622__auto___13303 + (1));
i__7622__auto___13303 = G__13304;
continue;
} else {
}
break;
}

var G__13237 = args13235.length;
switch (G__13237) {
case 1:
return sablono.core.color_field13234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13235.length)].join('')));

}
});

sablono.core.color_field13234.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.color_field13234.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.color_field13234.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.color_field13234.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13234);

/**
 * Creates a date input field.
 */
sablono.core.date_field13238 = (function sablono$core$date_field13238(var_args){
var args13239 = [];
var len__7621__auto___13306 = arguments.length;
var i__7622__auto___13307 = (0);
while(true){
if((i__7622__auto___13307 < len__7621__auto___13306)){
args13239.push((arguments[i__7622__auto___13307]));

var G__13308 = (i__7622__auto___13307 + (1));
i__7622__auto___13307 = G__13308;
continue;
} else {
}
break;
}

var G__13241 = args13239.length;
switch (G__13241) {
case 1:
return sablono.core.date_field13238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13239.length)].join('')));

}
});

sablono.core.date_field13238.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.date_field13238.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.date_field13238.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.date_field13238.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13238);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13242 = (function sablono$core$datetime_field13242(var_args){
var args13243 = [];
var len__7621__auto___13310 = arguments.length;
var i__7622__auto___13311 = (0);
while(true){
if((i__7622__auto___13311 < len__7621__auto___13310)){
args13243.push((arguments[i__7622__auto___13311]));

var G__13312 = (i__7622__auto___13311 + (1));
i__7622__auto___13311 = G__13312;
continue;
} else {
}
break;
}

var G__13245 = args13243.length;
switch (G__13245) {
case 1:
return sablono.core.datetime_field13242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13243.length)].join('')));

}
});

sablono.core.datetime_field13242.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.datetime_field13242.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.datetime_field13242.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.datetime_field13242.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13242);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13246 = (function sablono$core$datetime_local_field13246(var_args){
var args13247 = [];
var len__7621__auto___13314 = arguments.length;
var i__7622__auto___13315 = (0);
while(true){
if((i__7622__auto___13315 < len__7621__auto___13314)){
args13247.push((arguments[i__7622__auto___13315]));

var G__13316 = (i__7622__auto___13315 + (1));
i__7622__auto___13315 = G__13316;
continue;
} else {
}
break;
}

var G__13249 = args13247.length;
switch (G__13249) {
case 1:
return sablono.core.datetime_local_field13246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13247.length)].join('')));

}
});

sablono.core.datetime_local_field13246.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.datetime_local_field13246.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.datetime_local_field13246.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.datetime_local_field13246.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13246);

/**
 * Creates a email input field.
 */
sablono.core.email_field13250 = (function sablono$core$email_field13250(var_args){
var args13251 = [];
var len__7621__auto___13318 = arguments.length;
var i__7622__auto___13319 = (0);
while(true){
if((i__7622__auto___13319 < len__7621__auto___13318)){
args13251.push((arguments[i__7622__auto___13319]));

var G__13320 = (i__7622__auto___13319 + (1));
i__7622__auto___13319 = G__13320;
continue;
} else {
}
break;
}

var G__13253 = args13251.length;
switch (G__13253) {
case 1:
return sablono.core.email_field13250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13251.length)].join('')));

}
});

sablono.core.email_field13250.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.email_field13250.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.email_field13250.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.email_field13250.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13250);

/**
 * Creates a file input field.
 */
sablono.core.file_field13254 = (function sablono$core$file_field13254(var_args){
var args13255 = [];
var len__7621__auto___13322 = arguments.length;
var i__7622__auto___13323 = (0);
while(true){
if((i__7622__auto___13323 < len__7621__auto___13322)){
args13255.push((arguments[i__7622__auto___13323]));

var G__13324 = (i__7622__auto___13323 + (1));
i__7622__auto___13323 = G__13324;
continue;
} else {
}
break;
}

var G__13257 = args13255.length;
switch (G__13257) {
case 1:
return sablono.core.file_field13254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13255.length)].join('')));

}
});

sablono.core.file_field13254.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.file_field13254.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.file_field13254.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.file_field13254.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13254);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13258 = (function sablono$core$hidden_field13258(var_args){
var args13259 = [];
var len__7621__auto___13326 = arguments.length;
var i__7622__auto___13327 = (0);
while(true){
if((i__7622__auto___13327 < len__7621__auto___13326)){
args13259.push((arguments[i__7622__auto___13327]));

var G__13328 = (i__7622__auto___13327 + (1));
i__7622__auto___13327 = G__13328;
continue;
} else {
}
break;
}

var G__13261 = args13259.length;
switch (G__13261) {
case 1:
return sablono.core.hidden_field13258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13259.length)].join('')));

}
});

sablono.core.hidden_field13258.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.hidden_field13258.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.hidden_field13258.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.hidden_field13258.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13258);

/**
 * Creates a month input field.
 */
sablono.core.month_field13262 = (function sablono$core$month_field13262(var_args){
var args13263 = [];
var len__7621__auto___13330 = arguments.length;
var i__7622__auto___13331 = (0);
while(true){
if((i__7622__auto___13331 < len__7621__auto___13330)){
args13263.push((arguments[i__7622__auto___13331]));

var G__13332 = (i__7622__auto___13331 + (1));
i__7622__auto___13331 = G__13332;
continue;
} else {
}
break;
}

var G__13265 = args13263.length;
switch (G__13265) {
case 1:
return sablono.core.month_field13262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13263.length)].join('')));

}
});

sablono.core.month_field13262.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.month_field13262.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.month_field13262.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.month_field13262.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13262);

/**
 * Creates a number input field.
 */
sablono.core.number_field13266 = (function sablono$core$number_field13266(var_args){
var args13267 = [];
var len__7621__auto___13334 = arguments.length;
var i__7622__auto___13335 = (0);
while(true){
if((i__7622__auto___13335 < len__7621__auto___13334)){
args13267.push((arguments[i__7622__auto___13335]));

var G__13336 = (i__7622__auto___13335 + (1));
i__7622__auto___13335 = G__13336;
continue;
} else {
}
break;
}

var G__13269 = args13267.length;
switch (G__13269) {
case 1:
return sablono.core.number_field13266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13267.length)].join('')));

}
});

sablono.core.number_field13266.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.number_field13266.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.number_field13266.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.number_field13266.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13266);

/**
 * Creates a password input field.
 */
sablono.core.password_field13270 = (function sablono$core$password_field13270(var_args){
var args13271 = [];
var len__7621__auto___13338 = arguments.length;
var i__7622__auto___13339 = (0);
while(true){
if((i__7622__auto___13339 < len__7621__auto___13338)){
args13271.push((arguments[i__7622__auto___13339]));

var G__13340 = (i__7622__auto___13339 + (1));
i__7622__auto___13339 = G__13340;
continue;
} else {
}
break;
}

var G__13273 = args13271.length;
switch (G__13273) {
case 1:
return sablono.core.password_field13270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13271.length)].join('')));

}
});

sablono.core.password_field13270.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.password_field13270.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.password_field13270.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.password_field13270.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13270);

/**
 * Creates a range input field.
 */
sablono.core.range_field13274 = (function sablono$core$range_field13274(var_args){
var args13275 = [];
var len__7621__auto___13342 = arguments.length;
var i__7622__auto___13343 = (0);
while(true){
if((i__7622__auto___13343 < len__7621__auto___13342)){
args13275.push((arguments[i__7622__auto___13343]));

var G__13344 = (i__7622__auto___13343 + (1));
i__7622__auto___13343 = G__13344;
continue;
} else {
}
break;
}

var G__13277 = args13275.length;
switch (G__13277) {
case 1:
return sablono.core.range_field13274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13275.length)].join('')));

}
});

sablono.core.range_field13274.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.range_field13274.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.range_field13274.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.range_field13274.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13274);

/**
 * Creates a search input field.
 */
sablono.core.search_field13278 = (function sablono$core$search_field13278(var_args){
var args13279 = [];
var len__7621__auto___13346 = arguments.length;
var i__7622__auto___13347 = (0);
while(true){
if((i__7622__auto___13347 < len__7621__auto___13346)){
args13279.push((arguments[i__7622__auto___13347]));

var G__13348 = (i__7622__auto___13347 + (1));
i__7622__auto___13347 = G__13348;
continue;
} else {
}
break;
}

var G__13281 = args13279.length;
switch (G__13281) {
case 1:
return sablono.core.search_field13278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13279.length)].join('')));

}
});

sablono.core.search_field13278.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.search_field13278.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.search_field13278.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.search_field13278.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13278);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13282 = (function sablono$core$tel_field13282(var_args){
var args13283 = [];
var len__7621__auto___13350 = arguments.length;
var i__7622__auto___13351 = (0);
while(true){
if((i__7622__auto___13351 < len__7621__auto___13350)){
args13283.push((arguments[i__7622__auto___13351]));

var G__13352 = (i__7622__auto___13351 + (1));
i__7622__auto___13351 = G__13352;
continue;
} else {
}
break;
}

var G__13285 = args13283.length;
switch (G__13285) {
case 1:
return sablono.core.tel_field13282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13283.length)].join('')));

}
});

sablono.core.tel_field13282.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.tel_field13282.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.tel_field13282.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.tel_field13282.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13282);

/**
 * Creates a text input field.
 */
sablono.core.text_field13286 = (function sablono$core$text_field13286(var_args){
var args13287 = [];
var len__7621__auto___13354 = arguments.length;
var i__7622__auto___13355 = (0);
while(true){
if((i__7622__auto___13355 < len__7621__auto___13354)){
args13287.push((arguments[i__7622__auto___13355]));

var G__13356 = (i__7622__auto___13355 + (1));
i__7622__auto___13355 = G__13356;
continue;
} else {
}
break;
}

var G__13289 = args13287.length;
switch (G__13289) {
case 1:
return sablono.core.text_field13286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13287.length)].join('')));

}
});

sablono.core.text_field13286.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.text_field13286.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.text_field13286.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.text_field13286.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13286);

/**
 * Creates a time input field.
 */
sablono.core.time_field13290 = (function sablono$core$time_field13290(var_args){
var args13291 = [];
var len__7621__auto___13358 = arguments.length;
var i__7622__auto___13359 = (0);
while(true){
if((i__7622__auto___13359 < len__7621__auto___13358)){
args13291.push((arguments[i__7622__auto___13359]));

var G__13360 = (i__7622__auto___13359 + (1));
i__7622__auto___13359 = G__13360;
continue;
} else {
}
break;
}

var G__13293 = args13291.length;
switch (G__13293) {
case 1:
return sablono.core.time_field13290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13291.length)].join('')));

}
});

sablono.core.time_field13290.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.time_field13290.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.time_field13290.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.time_field13290.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13290);

/**
 * Creates a url input field.
 */
sablono.core.url_field13294 = (function sablono$core$url_field13294(var_args){
var args13295 = [];
var len__7621__auto___13362 = arguments.length;
var i__7622__auto___13363 = (0);
while(true){
if((i__7622__auto___13363 < len__7621__auto___13362)){
args13295.push((arguments[i__7622__auto___13363]));

var G__13364 = (i__7622__auto___13363 + (1));
i__7622__auto___13363 = G__13364;
continue;
} else {
}
break;
}

var G__13297 = args13295.length;
switch (G__13297) {
case 1:
return sablono.core.url_field13294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13295.length)].join('')));

}
});

sablono.core.url_field13294.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.url_field13294.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.url_field13294.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.url_field13294.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13294);

/**
 * Creates a week input field.
 */
sablono.core.week_field13298 = (function sablono$core$week_field13298(var_args){
var args13299 = [];
var len__7621__auto___13366 = arguments.length;
var i__7622__auto___13367 = (0);
while(true){
if((i__7622__auto___13367 < len__7621__auto___13366)){
args13299.push((arguments[i__7622__auto___13367]));

var G__13368 = (i__7622__auto___13367 + (1));
i__7622__auto___13367 = G__13368;
continue;
} else {
}
break;
}

var G__13301 = args13299.length;
switch (G__13301) {
case 1:
return sablono.core.week_field13298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13299.length)].join('')));

}
});

sablono.core.week_field13298.cljs$core$IFn$_invoke$arity$1 = (function (name__13127__auto__){
return sablono.core.week_field13298.cljs$core$IFn$_invoke$arity$2(name__13127__auto__,null);
});

sablono.core.week_field13298.cljs$core$IFn$_invoke$arity$2 = (function (name__13127__auto__,value__13128__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__13127__auto__,value__13128__auto__);
});

sablono.core.week_field13298.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13298);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13370 = (function sablono$core$check_box13370(var_args){
var args13371 = [];
var len__7621__auto___13374 = arguments.length;
var i__7622__auto___13375 = (0);
while(true){
if((i__7622__auto___13375 < len__7621__auto___13374)){
args13371.push((arguments[i__7622__auto___13375]));

var G__13376 = (i__7622__auto___13375 + (1));
i__7622__auto___13375 = G__13376;
continue;
} else {
}
break;
}

var G__13373 = args13371.length;
switch (G__13373) {
case 1:
return sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13371.length)].join('')));

}
});

sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13370.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13370.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13370);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13378 = (function sablono$core$radio_button13378(var_args){
var args13379 = [];
var len__7621__auto___13382 = arguments.length;
var i__7622__auto___13383 = (0);
while(true){
if((i__7622__auto___13383 < len__7621__auto___13382)){
args13379.push((arguments[i__7622__auto___13383]));

var G__13384 = (i__7622__auto___13383 + (1));
i__7622__auto___13383 = G__13384;
continue;
} else {
}
break;
}

var G__13381 = args13379.length;
switch (G__13381) {
case 1:
return sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13379.length)].join('')));

}
});

sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13378.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13378.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13378);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13387 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13387);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13388 = (function sablono$core$select_options13388(coll){
var iter__7326__auto__ = (function sablono$core$select_options13388_$_iter__13407(s__13408){
return (new cljs.core.LazySeq(null,(function (){
var s__13408__$1 = s__13408;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13408__$1);
if(temp__4425__auto__){
var s__13408__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13408__$2)){
var c__7324__auto__ = cljs.core.chunk_first(s__13408__$2);
var size__7325__auto__ = cljs.core.count(c__7324__auto__);
var b__13410 = cljs.core.chunk_buffer(size__7325__auto__);
if((function (){var i__13409 = (0);
while(true){
if((i__13409 < size__7325__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7324__auto__,i__13409);
cljs.core.chunk_append(b__13410,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13419 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13388(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13425 = (i__13409 + (1));
i__13409 = G__13425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13410),sablono$core$select_options13388_$_iter__13407(cljs.core.chunk_rest(s__13408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13410),null);
}
} else {
var x = cljs.core.first(s__13408__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13422 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13422,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13422,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13422,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13388(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13388_$_iter__13407(cljs.core.rest(s__13408__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13388);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13426 = (function sablono$core$drop_down13426(var_args){
var args13427 = [];
var len__7621__auto___13430 = arguments.length;
var i__7622__auto___13431 = (0);
while(true){
if((i__7622__auto___13431 < len__7621__auto___13430)){
args13427.push((arguments[i__7622__auto___13431]));

var G__13432 = (i__7622__auto___13431 + (1));
i__7622__auto___13431 = G__13432;
continue;
} else {
}
break;
}

var G__13429 = args13427.length;
switch (G__13429) {
case 2:
return sablono.core.drop_down13426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13426.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13427.length)].join('')));

}
});

sablono.core.drop_down13426.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13426.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13426.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13426.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13426);
/**
 * Creates a text area element.
 */
sablono.core.text_area13434 = (function sablono$core$text_area13434(var_args){
var args13435 = [];
var len__7621__auto___13438 = arguments.length;
var i__7622__auto___13439 = (0);
while(true){
if((i__7622__auto___13439 < len__7621__auto___13438)){
args13435.push((arguments[i__7622__auto___13439]));

var G__13440 = (i__7622__auto___13439 + (1));
i__7622__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var G__13437 = args13435.length;
switch (G__13437) {
case 1:
return sablono.core.text_area13434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13435.length)].join('')));

}
});

sablono.core.text_area13434.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13434.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13434.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6546__auto__ = value;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area13434.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13434);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13442 = (function sablono$core$label13442(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13442);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13443 = (function sablono$core$submit_button13443(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13443);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13444 = (function sablono$core$reset_button13444(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13444);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13445 = (function sablono$core$form_to13445(var_args){
var args__7628__auto__ = [];
var len__7621__auto___13455 = arguments.length;
var i__7622__auto___13456 = (0);
while(true){
if((i__7622__auto___13456 < len__7621__auto___13455)){
args__7628__auto__.push((arguments[i__7622__auto___13456]));

var G__13457 = (i__7622__auto___13456 + (1));
i__7622__auto___13456 = G__13457;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13445.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

sablono.core.form_to13445.cljs$core$IFn$_invoke$arity$variadic = (function (p__13448,body){
var vec__13449 = p__13448;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13449,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13449,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13452 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13453 = "_method";
var G__13454 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13452,G__13453,G__13454) : sablono.core.hidden_field.call(null,G__13452,G__13453,G__13454));
})()], null)),body));
});

sablono.core.form_to13445.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13445.cljs$lang$applyTo = (function (seq13446){
var G__13447 = cljs.core.first(seq13446);
var seq13446__$1 = cljs.core.next(seq13446);
return sablono.core.form_to13445.cljs$core$IFn$_invoke$arity$variadic(G__13447,seq13446__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13445);
