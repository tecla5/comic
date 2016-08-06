// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__16389_SHARP_,p2__16388_SHARP_){
return (p2__16388_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__16388_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__16389_SHARP_) : p2__16388_SHARP_.call(null,p1__16389_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var G__16419 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__16420 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16420) : cljs.core.deref.call(null,G__16420));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__16391_SHARP_,p2__16390_SHARP_){
return (p2__16390_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__16390_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__16391_SHARP_) : p2__16390_SHARP_.call(null,old_state,p1__16391_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_(next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__16421 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16421) : cljs.core.deref.call(null,G__16421));
})();
var new_state = (function (){var G__16422 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16422) : cljs.core.deref.call(null,G__16422));
})();
var or__6546__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__16392_SHARP_){
return (p1__16392_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__16392_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__16392_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__16423 = (function (){var G__16426 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__16426) : wrapped_render.call(null,G__16426));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__16427 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16427) : cljs.core.deref.call(null,G__16427));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__16393_SHARP_){
return (p1__16393_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16393_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__16393_SHARP_.call(null,state));
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((props[":rum/initial-state"]),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.array_seq([props], 0));
return {":rum/state": cljs.core.volatile_BANG_(state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props], 0))));
return React.createClass(G__16419);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__16428__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)};
return React.createElement(class$,props);
};
var G__16428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16429__i = 0, G__16429__a = new Array(arguments.length -  0);
while (G__16429__i < G__16429__a.length) {G__16429__a[G__16429__i] = arguments[G__16429__i + 0]; ++G__16429__i;}
  args = new cljs.core.IndexedSeq(G__16429__a,0);
} 
return G__16428__delegate.call(this,args);};
G__16428.cljs$lang$maxFixedArity = 0;
G__16428.cljs$lang$applyTo = (function (arglist__16430){
var args = cljs.core.seq(arglist__16430);
return G__16428__delegate(args);
});
G__16428.cljs$core$IFn$_invoke$arity$variadic = G__16428__delegate;
return G__16428;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__16431__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)};
return React.createElement(class$,props);
};
var G__16431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16432__i = 0, G__16432__a = new Array(arguments.length -  0);
while (G__16432__i < G__16432__a.length) {G__16432__a[G__16432__i] = arguments[G__16432__i + 0]; ++G__16432__i;}
  args = new cljs.core.IndexedSeq(G__16432__a,0);
} 
return G__16431__delegate.call(this,args);};
G__16431.cljs$lang$maxFixedArity = 0;
G__16431.cljs$lang$applyTo = (function (arglist__16433){
var args = cljs.core.seq(arglist__16433);
return G__16431__delegate(args);
});
G__16431.cljs$core$IFn$_invoke$arity$variadic = G__16431__delegate;
return G__16431;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__16438__delegate = function (args){
var G__16436 = class$;
var G__16437 = {":rum/args": args};
return React.createElement(G__16436,G__16437);
};
var G__16438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16439__i = 0, G__16439__a = new Array(arguments.length -  0);
while (G__16439__i < G__16439__a.length) {G__16439__a[G__16439__i] = arguments[G__16439__i + 0]; ++G__16439__i;}
  args = new cljs.core.IndexedSeq(G__16439__a,0);
} 
return G__16438__delegate.call(this,args);};
G__16438.cljs$lang$maxFixedArity = 0;
G__16438.cljs$lang$applyTo = (function (arglist__16440){
var args = cljs.core.seq(arglist__16440);
return G__16438__delegate(args);
});
G__16438.cljs$core$IFn$_invoke$arity$variadic = G__16438__delegate;
return G__16438;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__6546__auto__ = (function (){var and__6534__auto__ = typeof window !== 'undefined';
if(and__6534__auto__){
var or__6546__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var or__6546__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
var or__6546__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6546__auto____$2)){
return or__6546__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6534__auto__;
}
})();
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return ((function (or__6546__auto__){
return (function (p1__16441_SHARP_){
return setTimeout(p1__16441_SHARP_,(16));
});
;})(or__6546__auto__))
}
})();
rum.core.batch = (function (){var or__6546__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var or__6546__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
return ((function (or__6546__auto____$1,or__6546__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__6546__auto____$1,or__6546__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__16448 = cljs.core.seq(queue);
var chunk__16450 = null;
var count__16451 = (0);
var i__16452 = (0);
while(true){
if((i__16452 < count__16451)){
var comp = chunk__16450.cljs$core$IIndexed$_nth$arity$2(null,i__16452);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__16454 = seq__16448;
var G__16455 = chunk__16450;
var G__16456 = count__16451;
var G__16457 = (i__16452 + (1));
seq__16448 = G__16454;
chunk__16450 = G__16455;
count__16451 = G__16456;
i__16452 = G__16457;
continue;
} else {
var G__16458 = seq__16448;
var G__16459 = chunk__16450;
var G__16460 = count__16451;
var G__16461 = (i__16452 + (1));
seq__16448 = G__16458;
chunk__16450 = G__16459;
count__16451 = G__16460;
i__16452 = G__16461;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16448);
if(temp__4425__auto__){
var seq__16448__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16448__$1)){
var c__7357__auto__ = cljs.core.chunk_first(seq__16448__$1);
var G__16462 = cljs.core.chunk_rest(seq__16448__$1);
var G__16463 = c__7357__auto__;
var G__16464 = cljs.core.count(c__7357__auto__);
var G__16465 = (0);
seq__16448 = G__16462;
chunk__16450 = G__16463;
count__16451 = G__16464;
i__16452 = G__16465;
continue;
} else {
var comp = cljs.core.first(seq__16448__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__16466 = cljs.core.next(seq__16448__$1);
var G__16467 = null;
var G__16468 = (0);
var G__16469 = (0);
seq__16448 = G__16466;
chunk__16450 = G__16467;
count__16451 = G__16468;
i__16452 = G__16469;
continue;
} else {
var G__16470 = cljs.core.next(seq__16448__$1);
var G__16471 = null;
var G__16472 = (0);
var G__16473 = (0);
seq__16448 = G__16470;
chunk__16450 = G__16471;
count__16451 = G__16472;
i__16452 = G__16473;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
var G__16477 = component;
var G__16478 = {"key": key};
var G__16479 = null;
return React.cloneElement(G__16477,G__16478,G__16479);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__16483 = component;
var G__16484 = {"ref": ref};
var G__16485 = null;
return React.cloneElement(G__16483,G__16484,G__16485);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__16487 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__16487);
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
var G__16489 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__16489);
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args16490 = [];
var len__7621__auto___16493 = arguments.length;
var i__7622__auto___16494 = (0);
while(true){
if((i__7622__auto___16494 < len__7621__auto___16493)){
args16490.push((arguments[i__7622__auto___16494]));

var G__16495 = (i__7622__auto___16494 + (1));
i__7622__auto___16494 = G__16495;
continue;
} else {
}
break;
}

var G__16492 = args16490.length;
switch (G__16492) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16490.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_16497 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__16498 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16498,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16498,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__16501_16513 = cljs.core.seq(old_reactions);
var chunk__16502_16514 = null;
var count__16503_16515 = (0);
var i__16504_16516 = (0);
while(true){
if((i__16504_16516 < count__16503_16515)){
var ref_16517 = chunk__16502_16514.cljs$core$IIndexed$_nth$arity$2(null,i__16504_16516);
if(cljs.core.contains_QMARK_(new_reactions,ref_16517)){
} else {
cljs.core.remove_watch(ref_16517,key);
}

var G__16518 = seq__16501_16513;
var G__16519 = chunk__16502_16514;
var G__16520 = count__16503_16515;
var G__16521 = (i__16504_16516 + (1));
seq__16501_16513 = G__16518;
chunk__16502_16514 = G__16519;
count__16503_16515 = G__16520;
i__16504_16516 = G__16521;
continue;
} else {
var temp__4425__auto___16522 = cljs.core.seq(seq__16501_16513);
if(temp__4425__auto___16522){
var seq__16501_16523__$1 = temp__4425__auto___16522;
if(cljs.core.chunked_seq_QMARK_(seq__16501_16523__$1)){
var c__7357__auto___16524 = cljs.core.chunk_first(seq__16501_16523__$1);
var G__16525 = cljs.core.chunk_rest(seq__16501_16523__$1);
var G__16526 = c__7357__auto___16524;
var G__16527 = cljs.core.count(c__7357__auto___16524);
var G__16528 = (0);
seq__16501_16513 = G__16525;
chunk__16502_16514 = G__16526;
count__16503_16515 = G__16527;
i__16504_16516 = G__16528;
continue;
} else {
var ref_16529 = cljs.core.first(seq__16501_16523__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_16529)){
} else {
cljs.core.remove_watch(ref_16529,key);
}

var G__16530 = cljs.core.next(seq__16501_16523__$1);
var G__16531 = null;
var G__16532 = (0);
var G__16533 = (0);
seq__16501_16513 = G__16530;
chunk__16502_16514 = G__16531;
count__16503_16515 = G__16532;
i__16504_16516 = G__16533;
continue;
}
} else {
}
}
break;
}

var seq__16505_16534 = cljs.core.seq(new_reactions);
var chunk__16506_16535 = null;
var count__16507_16536 = (0);
var i__16508_16537 = (0);
while(true){
if((i__16508_16537 < count__16507_16536)){
var ref_16538 = chunk__16506_16535.cljs$core$IIndexed$_nth$arity$2(null,i__16508_16537);
if(cljs.core.contains_QMARK_(old_reactions,ref_16538)){
} else {
cljs.core.add_watch(ref_16538,key,((function (seq__16505_16534,chunk__16506_16535,count__16507_16536,i__16508_16537,ref_16538,comp,old_reactions,vec__16498,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16497){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__16505_16534,chunk__16506_16535,count__16507_16536,i__16508_16537,ref_16538,comp,old_reactions,vec__16498,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16497))
);
}

var G__16539 = seq__16505_16534;
var G__16540 = chunk__16506_16535;
var G__16541 = count__16507_16536;
var G__16542 = (i__16508_16537 + (1));
seq__16505_16534 = G__16539;
chunk__16506_16535 = G__16540;
count__16507_16536 = G__16541;
i__16508_16537 = G__16542;
continue;
} else {
var temp__4425__auto___16543 = cljs.core.seq(seq__16505_16534);
if(temp__4425__auto___16543){
var seq__16505_16544__$1 = temp__4425__auto___16543;
if(cljs.core.chunked_seq_QMARK_(seq__16505_16544__$1)){
var c__7357__auto___16545 = cljs.core.chunk_first(seq__16505_16544__$1);
var G__16546 = cljs.core.chunk_rest(seq__16505_16544__$1);
var G__16547 = c__7357__auto___16545;
var G__16548 = cljs.core.count(c__7357__auto___16545);
var G__16549 = (0);
seq__16505_16534 = G__16546;
chunk__16506_16535 = G__16547;
count__16507_16536 = G__16548;
i__16508_16537 = G__16549;
continue;
} else {
var ref_16550 = cljs.core.first(seq__16505_16544__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_16550)){
} else {
cljs.core.add_watch(ref_16550,key,((function (seq__16505_16534,chunk__16506_16535,count__16507_16536,i__16508_16537,ref_16550,seq__16505_16544__$1,temp__4425__auto___16543,comp,old_reactions,vec__16498,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16497){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__16505_16534,chunk__16506_16535,count__16507_16536,i__16508_16537,ref_16550,seq__16505_16544__$1,temp__4425__auto___16543,comp,old_reactions,vec__16498,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16497))
);
}

var G__16551 = cljs.core.next(seq__16505_16544__$1);
var G__16552 = null;
var G__16553 = (0);
var G__16554 = (0);
seq__16505_16534 = G__16551;
chunk__16506_16535 = G__16552;
count__16507_16536 = G__16553;
i__16508_16537 = G__16554;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_16497;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_16555 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__16509_16556 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__16510_16557 = null;
var count__16511_16558 = (0);
var i__16512_16559 = (0);
while(true){
if((i__16512_16559 < count__16511_16558)){
var ref_16560 = chunk__16510_16557.cljs$core$IIndexed$_nth$arity$2(null,i__16512_16559);
cljs.core.remove_watch(ref_16560,key_16555);

var G__16561 = seq__16509_16556;
var G__16562 = chunk__16510_16557;
var G__16563 = count__16511_16558;
var G__16564 = (i__16512_16559 + (1));
seq__16509_16556 = G__16561;
chunk__16510_16557 = G__16562;
count__16511_16558 = G__16563;
i__16512_16559 = G__16564;
continue;
} else {
var temp__4425__auto___16565 = cljs.core.seq(seq__16509_16556);
if(temp__4425__auto___16565){
var seq__16509_16566__$1 = temp__4425__auto___16565;
if(cljs.core.chunked_seq_QMARK_(seq__16509_16566__$1)){
var c__7357__auto___16567 = cljs.core.chunk_first(seq__16509_16566__$1);
var G__16568 = cljs.core.chunk_rest(seq__16509_16566__$1);
var G__16569 = c__7357__auto___16567;
var G__16570 = cljs.core.count(c__7357__auto___16567);
var G__16571 = (0);
seq__16509_16556 = G__16568;
chunk__16510_16557 = G__16569;
count__16511_16558 = G__16570;
i__16512_16559 = G__16571;
continue;
} else {
var ref_16572 = cljs.core.first(seq__16509_16566__$1);
cljs.core.remove_watch(ref_16572,key_16555);

var G__16573 = cljs.core.next(seq__16509_16566__$1);
var G__16574 = null;
var G__16575 = (0);
var G__16576 = (0);
seq__16509_16556 = G__16573;
chunk__16510_16557 = G__16574;
count__16511_16558 = G__16575;
i__16512_16559 = G__16576;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.array_seq([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
});
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__7628__auto__ = [];
var len__7621__auto___16583 = arguments.length;
var i__7622__auto___16584 = (0);
while(true){
if((i__7622__auto___16584 < len__7621__auto___16583)){
args__7628__auto__.push((arguments[i__7622__auto___16584]));

var G__16585 = (i__7622__auto___16584 + (1));
i__7622__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__16580){
var map__16581 = p__16580;
var map__16581__$1 = ((((!((map__16581 == null)))?((((map__16581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16581):map__16581);
var options = map__16581__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq16577){
var G__16578 = cljs.core.first(seq16577);
var seq16577__$1 = cljs.core.next(seq16577);
var G__16579 = cljs.core.first(seq16577__$1);
var seq16577__$2 = cljs.core.next(seq16577__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__16578,G__16579,seq16577__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7628__auto__ = [];
var len__7621__auto___16589 = arguments.length;
var i__7622__auto___16590 = (0);
while(true){
if((i__7622__auto___16590 < len__7621__auto___16589)){
args__7628__auto__.push((arguments[i__7622__auto___16590]));

var G__16591 = (i__7622__auto___16590 + (1));
i__7622__auto___16590 = G__16591;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq16586){
var G__16587 = cljs.core.first(seq16586);
var seq16586__$1 = cljs.core.next(seq16586);
var G__16588 = cljs.core.first(seq16586__$1);
var seq16586__$2 = cljs.core.next(seq16586__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__16587,G__16588,seq16586__$2);
});

