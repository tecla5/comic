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
return (function (p1__13841_SHARP_,p2__13840_SHARP_){
return (p2__13840_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__13840_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__13841_SHARP_) : p2__13840_SHARP_.call(null,p1__13841_SHARP_));
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
var G__13871 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
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
var old_state = (function (){var G__13872 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13872) : cljs.core.deref.call(null,G__13872));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__13843_SHARP_,p2__13842_SHARP_){
return (p2__13842_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__13842_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__13843_SHARP_) : p2__13842_SHARP_.call(null,old_state,p1__13843_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_(next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__13873 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13873) : cljs.core.deref.call(null,G__13873));
})();
var new_state = (function (){var G__13874 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13874) : cljs.core.deref.call(null,G__13874));
})();
var or__6546__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__13844_SHARP_){
return (p1__13844_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__13844_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__13844_SHARP_.call(null,old_state,new_state));
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
var vec__13875 = (function (){var G__13878 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__13878) : wrapped_render.call(null,G__13878));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13875,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13875,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__13879 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13879) : cljs.core.deref.call(null,G__13879));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__13845_SHARP_){
return (p1__13845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13845_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__13845_SHARP_.call(null,state));
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
return React.createClass(G__13871);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__13880__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)};
return React.createElement(class$,props);
};
var G__13880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13881__i = 0, G__13881__a = new Array(arguments.length -  0);
while (G__13881__i < G__13881__a.length) {G__13881__a[G__13881__i] = arguments[G__13881__i + 0]; ++G__13881__i;}
  args = new cljs.core.IndexedSeq(G__13881__a,0);
} 
return G__13880__delegate.call(this,args);};
G__13880.cljs$lang$maxFixedArity = 0;
G__13880.cljs$lang$applyTo = (function (arglist__13882){
var args = cljs.core.seq(arglist__13882);
return G__13880__delegate(args);
});
G__13880.cljs$core$IFn$_invoke$arity$variadic = G__13880__delegate;
return G__13880;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__13883__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)};
return React.createElement(class$,props);
};
var G__13883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13884__i = 0, G__13884__a = new Array(arguments.length -  0);
while (G__13884__i < G__13884__a.length) {G__13884__a[G__13884__i] = arguments[G__13884__i + 0]; ++G__13884__i;}
  args = new cljs.core.IndexedSeq(G__13884__a,0);
} 
return G__13883__delegate.call(this,args);};
G__13883.cljs$lang$maxFixedArity = 0;
G__13883.cljs$lang$applyTo = (function (arglist__13885){
var args = cljs.core.seq(arglist__13885);
return G__13883__delegate(args);
});
G__13883.cljs$core$IFn$_invoke$arity$variadic = G__13883__delegate;
return G__13883;
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
var G__13890__delegate = function (args){
var G__13888 = class$;
var G__13889 = {":rum/args": args};
return React.createElement(G__13888,G__13889);
};
var G__13890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13891__i = 0, G__13891__a = new Array(arguments.length -  0);
while (G__13891__i < G__13891__a.length) {G__13891__a[G__13891__i] = arguments[G__13891__i + 0]; ++G__13891__i;}
  args = new cljs.core.IndexedSeq(G__13891__a,0);
} 
return G__13890__delegate.call(this,args);};
G__13890.cljs$lang$maxFixedArity = 0;
G__13890.cljs$lang$applyTo = (function (arglist__13892){
var args = cljs.core.seq(arglist__13892);
return G__13890__delegate(args);
});
G__13890.cljs$core$IFn$_invoke$arity$variadic = G__13890__delegate;
return G__13890;
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
return (function (p1__13893_SHARP_){
return setTimeout(p1__13893_SHARP_,(16));
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
var seq__13900 = cljs.core.seq(queue);
var chunk__13902 = null;
var count__13903 = (0);
var i__13904 = (0);
while(true){
if((i__13904 < count__13903)){
var comp = chunk__13902.cljs$core$IIndexed$_nth$arity$2(null,i__13904);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__13906 = seq__13900;
var G__13907 = chunk__13902;
var G__13908 = count__13903;
var G__13909 = (i__13904 + (1));
seq__13900 = G__13906;
chunk__13902 = G__13907;
count__13903 = G__13908;
i__13904 = G__13909;
continue;
} else {
var G__13910 = seq__13900;
var G__13911 = chunk__13902;
var G__13912 = count__13903;
var G__13913 = (i__13904 + (1));
seq__13900 = G__13910;
chunk__13902 = G__13911;
count__13903 = G__13912;
i__13904 = G__13913;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13900);
if(temp__4425__auto__){
var seq__13900__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13900__$1)){
var c__7357__auto__ = cljs.core.chunk_first(seq__13900__$1);
var G__13914 = cljs.core.chunk_rest(seq__13900__$1);
var G__13915 = c__7357__auto__;
var G__13916 = cljs.core.count(c__7357__auto__);
var G__13917 = (0);
seq__13900 = G__13914;
chunk__13902 = G__13915;
count__13903 = G__13916;
i__13904 = G__13917;
continue;
} else {
var comp = cljs.core.first(seq__13900__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__13918 = cljs.core.next(seq__13900__$1);
var G__13919 = null;
var G__13920 = (0);
var G__13921 = (0);
seq__13900 = G__13918;
chunk__13902 = G__13919;
count__13903 = G__13920;
i__13904 = G__13921;
continue;
} else {
var G__13922 = cljs.core.next(seq__13900__$1);
var G__13923 = null;
var G__13924 = (0);
var G__13925 = (0);
seq__13900 = G__13922;
chunk__13902 = G__13923;
count__13903 = G__13924;
i__13904 = G__13925;
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
var G__13929 = component;
var G__13930 = {"key": key};
var G__13931 = null;
return React.cloneElement(G__13929,G__13930,G__13931);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__13935 = component;
var G__13936 = {"ref": ref};
var G__13937 = null;
return React.cloneElement(G__13935,G__13936,G__13937);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__13939 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__13939);
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
var G__13941 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__13941);
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
var args13942 = [];
var len__7621__auto___13945 = arguments.length;
var i__7622__auto___13946 = (0);
while(true){
if((i__7622__auto___13946 < len__7621__auto___13945)){
args13942.push((arguments[i__7622__auto___13946]));

var G__13947 = (i__7622__auto___13946 + (1));
i__7622__auto___13946 = G__13947;
continue;
} else {
}
break;
}

var G__13944 = args13942.length;
switch (G__13944) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13942.length)].join('')));

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
var _STAR_reactions_STAR_13949 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__13950 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13950,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__13953_13965 = cljs.core.seq(old_reactions);
var chunk__13954_13966 = null;
var count__13955_13967 = (0);
var i__13956_13968 = (0);
while(true){
if((i__13956_13968 < count__13955_13967)){
var ref_13969 = chunk__13954_13966.cljs$core$IIndexed$_nth$arity$2(null,i__13956_13968);
if(cljs.core.contains_QMARK_(new_reactions,ref_13969)){
} else {
cljs.core.remove_watch(ref_13969,key);
}

var G__13970 = seq__13953_13965;
var G__13971 = chunk__13954_13966;
var G__13972 = count__13955_13967;
var G__13973 = (i__13956_13968 + (1));
seq__13953_13965 = G__13970;
chunk__13954_13966 = G__13971;
count__13955_13967 = G__13972;
i__13956_13968 = G__13973;
continue;
} else {
var temp__4425__auto___13974 = cljs.core.seq(seq__13953_13965);
if(temp__4425__auto___13974){
var seq__13953_13975__$1 = temp__4425__auto___13974;
if(cljs.core.chunked_seq_QMARK_(seq__13953_13975__$1)){
var c__7357__auto___13976 = cljs.core.chunk_first(seq__13953_13975__$1);
var G__13977 = cljs.core.chunk_rest(seq__13953_13975__$1);
var G__13978 = c__7357__auto___13976;
var G__13979 = cljs.core.count(c__7357__auto___13976);
var G__13980 = (0);
seq__13953_13965 = G__13977;
chunk__13954_13966 = G__13978;
count__13955_13967 = G__13979;
i__13956_13968 = G__13980;
continue;
} else {
var ref_13981 = cljs.core.first(seq__13953_13975__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_13981)){
} else {
cljs.core.remove_watch(ref_13981,key);
}

var G__13982 = cljs.core.next(seq__13953_13975__$1);
var G__13983 = null;
var G__13984 = (0);
var G__13985 = (0);
seq__13953_13965 = G__13982;
chunk__13954_13966 = G__13983;
count__13955_13967 = G__13984;
i__13956_13968 = G__13985;
continue;
}
} else {
}
}
break;
}

var seq__13957_13986 = cljs.core.seq(new_reactions);
var chunk__13958_13987 = null;
var count__13959_13988 = (0);
var i__13960_13989 = (0);
while(true){
if((i__13960_13989 < count__13959_13988)){
var ref_13990 = chunk__13958_13987.cljs$core$IIndexed$_nth$arity$2(null,i__13960_13989);
if(cljs.core.contains_QMARK_(old_reactions,ref_13990)){
} else {
cljs.core.add_watch(ref_13990,key,((function (seq__13957_13986,chunk__13958_13987,count__13959_13988,i__13960_13989,ref_13990,comp,old_reactions,vec__13950,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13949){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__13957_13986,chunk__13958_13987,count__13959_13988,i__13960_13989,ref_13990,comp,old_reactions,vec__13950,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13949))
);
}

var G__13991 = seq__13957_13986;
var G__13992 = chunk__13958_13987;
var G__13993 = count__13959_13988;
var G__13994 = (i__13960_13989 + (1));
seq__13957_13986 = G__13991;
chunk__13958_13987 = G__13992;
count__13959_13988 = G__13993;
i__13960_13989 = G__13994;
continue;
} else {
var temp__4425__auto___13995 = cljs.core.seq(seq__13957_13986);
if(temp__4425__auto___13995){
var seq__13957_13996__$1 = temp__4425__auto___13995;
if(cljs.core.chunked_seq_QMARK_(seq__13957_13996__$1)){
var c__7357__auto___13997 = cljs.core.chunk_first(seq__13957_13996__$1);
var G__13998 = cljs.core.chunk_rest(seq__13957_13996__$1);
var G__13999 = c__7357__auto___13997;
var G__14000 = cljs.core.count(c__7357__auto___13997);
var G__14001 = (0);
seq__13957_13986 = G__13998;
chunk__13958_13987 = G__13999;
count__13959_13988 = G__14000;
i__13960_13989 = G__14001;
continue;
} else {
var ref_14002 = cljs.core.first(seq__13957_13996__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14002)){
} else {
cljs.core.add_watch(ref_14002,key,((function (seq__13957_13986,chunk__13958_13987,count__13959_13988,i__13960_13989,ref_14002,seq__13957_13996__$1,temp__4425__auto___13995,comp,old_reactions,vec__13950,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13949){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__13957_13986,chunk__13958_13987,count__13959_13988,i__13960_13989,ref_14002,seq__13957_13996__$1,temp__4425__auto___13995,comp,old_reactions,vec__13950,dom,next_state,new_reactions,key,_STAR_reactions_STAR_13949))
);
}

var G__14003 = cljs.core.next(seq__13957_13996__$1);
var G__14004 = null;
var G__14005 = (0);
var G__14006 = (0);
seq__13957_13986 = G__14003;
chunk__13958_13987 = G__14004;
count__13959_13988 = G__14005;
i__13960_13989 = G__14006;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_13949;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14007 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__13961_14008 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__13962_14009 = null;
var count__13963_14010 = (0);
var i__13964_14011 = (0);
while(true){
if((i__13964_14011 < count__13963_14010)){
var ref_14012 = chunk__13962_14009.cljs$core$IIndexed$_nth$arity$2(null,i__13964_14011);
cljs.core.remove_watch(ref_14012,key_14007);

var G__14013 = seq__13961_14008;
var G__14014 = chunk__13962_14009;
var G__14015 = count__13963_14010;
var G__14016 = (i__13964_14011 + (1));
seq__13961_14008 = G__14013;
chunk__13962_14009 = G__14014;
count__13963_14010 = G__14015;
i__13964_14011 = G__14016;
continue;
} else {
var temp__4425__auto___14017 = cljs.core.seq(seq__13961_14008);
if(temp__4425__auto___14017){
var seq__13961_14018__$1 = temp__4425__auto___14017;
if(cljs.core.chunked_seq_QMARK_(seq__13961_14018__$1)){
var c__7357__auto___14019 = cljs.core.chunk_first(seq__13961_14018__$1);
var G__14020 = cljs.core.chunk_rest(seq__13961_14018__$1);
var G__14021 = c__7357__auto___14019;
var G__14022 = cljs.core.count(c__7357__auto___14019);
var G__14023 = (0);
seq__13961_14008 = G__14020;
chunk__13962_14009 = G__14021;
count__13963_14010 = G__14022;
i__13964_14011 = G__14023;
continue;
} else {
var ref_14024 = cljs.core.first(seq__13961_14018__$1);
cljs.core.remove_watch(ref_14024,key_14007);

var G__14025 = cljs.core.next(seq__13961_14018__$1);
var G__14026 = null;
var G__14027 = (0);
var G__14028 = (0);
seq__13961_14008 = G__14025;
chunk__13962_14009 = G__14026;
count__13963_14010 = G__14027;
i__13964_14011 = G__14028;
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
var len__7621__auto___14035 = arguments.length;
var i__7622__auto___14036 = (0);
while(true){
if((i__7622__auto___14036 < len__7621__auto___14035)){
args__7628__auto__.push((arguments[i__7622__auto___14036]));

var G__14037 = (i__7622__auto___14036 + (1));
i__7622__auto___14036 = G__14037;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14032){
var map__14033 = p__14032;
var map__14033__$1 = ((((!((map__14033 == null)))?((((map__14033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14033):map__14033);
var options = map__14033__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq14029){
var G__14030 = cljs.core.first(seq14029);
var seq14029__$1 = cljs.core.next(seq14029);
var G__14031 = cljs.core.first(seq14029__$1);
var seq14029__$2 = cljs.core.next(seq14029__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__14030,G__14031,seq14029__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14041 = arguments.length;
var i__7622__auto___14042 = (0);
while(true){
if((i__7622__auto___14042 < len__7621__auto___14041)){
args__7628__auto__.push((arguments[i__7622__auto___14042]));

var G__14043 = (i__7622__auto___14042 + (1));
i__7622__auto___14042 = G__14043;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq14038){
var G__14039 = cljs.core.first(seq14038);
var seq14038__$1 = cljs.core.next(seq14038);
var G__14040 = cljs.core.first(seq14038__$1);
var seq14038__$2 = cljs.core.next(seq14038__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__14039,G__14040,seq14038__$2);
});

