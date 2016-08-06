// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

/**
 * @interface
 */
clojure.browser.event.IEventType = function(){};

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$event$IEventType$event_types$arity$1 == null)))){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__7209__auto__ = (((this$ == null))?null:this$);
var m__7210__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7210__auto__.call(null,this$));
} else {
var m__7210__auto____$1 = (clojure.browser.event.event_types["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7210__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__13820){
var vec__13821 = p__13820;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13821,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__13824){
var vec__13825 = p__13824;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13825,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(var_args){
var args13828 = [];
var len__7621__auto___13835 = arguments.length;
var i__7622__auto___13836 = (0);
while(true){
if((i__7622__auto___13836 < len__7621__auto___13835)){
args13828.push((arguments[i__7622__auto___13836]));

var G__13837 = (i__7622__auto___13836 + (1));
i__7622__auto___13836 = G__13837;
continue;
} else {
}
break;
}

var G__13830 = args13828.length;
switch (G__13830) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13828.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__13831 = src;
var G__13832 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__13833 = fn;
var G__13834 = capture_QMARK_;
return goog.events.listen(G__13831,G__13832,G__13833,G__13834);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;

clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(var_args){
var args13839 = [];
var len__7621__auto___13846 = arguments.length;
var i__7622__auto___13847 = (0);
while(true){
if((i__7622__auto___13847 < len__7621__auto___13846)){
args13839.push((arguments[i__7622__auto___13847]));

var G__13848 = (i__7622__auto___13847 + (1));
i__7622__auto___13847 = G__13848;
continue;
} else {
}
break;
}

var G__13841 = args13839.length;
switch (G__13841) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13839.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__13842 = src;
var G__13843 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__13844 = fn;
var G__13845 = capture_QMARK_;
return goog.events.listenOnce(G__13842,G__13843,G__13844,G__13845);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;

clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(var_args){
var args13850 = [];
var len__7621__auto___13857 = arguments.length;
var i__7622__auto___13858 = (0);
while(true){
if((i__7622__auto___13858 < len__7621__auto___13857)){
args13850.push((arguments[i__7622__auto___13858]));

var G__13859 = (i__7622__auto___13858 + (1));
i__7622__auto___13858 = G__13859;
continue;
} else {
}
break;
}

var G__13852 = args13850.length;
switch (G__13852) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13850.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__13853 = src;
var G__13854 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__13855 = fn;
var G__13856 = capture_QMARK_;
return goog.events.unlisten(G__13853,G__13854,G__13855,G__13856);
});

clojure.browser.event.unlisten.cljs$lang$maxFixedArity = 4;

clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
