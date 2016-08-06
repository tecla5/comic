// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.prefs');
goog.require('cljs.core');
dirac.runtime.prefs.default_prefs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$weasel_DASH_auto_DASH_reconnect,cljs.core.cst$kw$java_DASH_trace_DASH_header_DASH_style,cljs.core.cst$kw$eval_DASH_time_DASH_limit,cljs.core.cst$kw$agent_DASH_verbose,cljs.core.cst$kw$agent_DASH_response_DASH_timeout,cljs.core.cst$kw$context_DASH_availability_DASH_total_DASH_time_DASH_limit,cljs.core.cst$kw$context_DASH_availability_DASH_next_DASH_trial_DASH_waiting_DASH_time,cljs.core.cst$kw$safe_DASH_print_DASH_level,cljs.core.cst$kw$silence_DASH_no_DASH_such_DASH_namespace_DASH_warnings,cljs.core.cst$kw$agent_DASH_host,cljs.core.cst$kw$weasel_DASH_verbose,cljs.core.cst$kw$runtime_DASH_tag,cljs.core.cst$kw$nrepl_DASH_config,cljs.core.cst$kw$safe_DASH_print_DASH_length,cljs.core.cst$kw$weasel_DASH_pre_DASH_eval_DASH_delay,cljs.core.cst$kw$silence_DASH_use_DASH_of_DASH_undeclared_DASH_var_DASH_warnings,cljs.core.cst$kw$install_DASH_check_DASH_next_DASH_trial_DASH_waiting_DASH_time,cljs.core.cst$kw$install_DASH_check_DASH_eval_DASH_time_DASH_limit,cljs.core.cst$kw$agent_DASH_port,cljs.core.cst$kw$dont_DASH_display_DASH_banner,cljs.core.cst$kw$agent_DASH_auto_DASH_reconnect,cljs.core.cst$kw$install_DASH_check_DASH_total_DASH_time_DASH_limit],[false,"color:red",(10000),false,(5000),(3000),(10),(1),true,"localhost",false,"unidentified",null,(10),(100),true,(500),(300),"8231",false,true,(3000)]);
dirac.runtime.prefs.static_prefs = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$runtime_DASH_tag,"comic"], null);
dirac.runtime.prefs.current_prefs = (function (){var G__14783 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dirac.runtime.prefs.default_prefs,dirac.runtime.prefs.static_prefs], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14783) : cljs.core.atom.call(null,G__14783));
})();
dirac.runtime.prefs.get_prefs = (function dirac$runtime$prefs$get_prefs(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dirac.runtime.prefs.current_prefs) : cljs.core.deref.call(null,dirac.runtime.prefs.current_prefs));
});
dirac.runtime.prefs.pref = (function dirac$runtime$prefs$pref(key){
var G__14785 = dirac.runtime.prefs.get_prefs();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14785) : key.call(null,G__14785));
});
dirac.runtime.prefs.set_prefs_BANG_ = (function dirac$runtime$prefs$set_prefs_BANG_(new_prefs){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dirac.runtime.prefs.current_prefs,new_prefs) : cljs.core.reset_BANG_.call(null,dirac.runtime.prefs.current_prefs,new_prefs));
});
dirac.runtime.prefs.set_pref_BANG_ = (function dirac$runtime$prefs$set_pref_BANG_(key,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dirac.runtime.prefs.current_prefs,cljs.core.assoc,key,val);
});
dirac.runtime.prefs.merge_prefs_BANG_ = (function dirac$runtime$prefs$merge_prefs_BANG_(m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dirac.runtime.prefs.current_prefs,cljs.core.merge,m);
});
dirac.runtime.prefs.update_pref_BANG_ = (function dirac$runtime$prefs$update_pref_BANG_(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14789 = arguments.length;
var i__7622__auto___14790 = (0);
while(true){
if((i__7622__auto___14790 < len__7621__auto___14789)){
args__7628__auto__.push((arguments[i__7622__auto___14790]));

var G__14791 = (i__7622__auto___14790 + (1));
i__7622__auto___14790 = G__14791;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,dirac.runtime.prefs.current_prefs,cljs.core.update,key,f,cljs.core.array_seq([args], 0));
});

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq14786){
var G__14787 = cljs.core.first(seq14786);
var seq14786__$1 = cljs.core.next(seq14786);
var G__14788 = cljs.core.first(seq14786__$1);
var seq14786__$2 = cljs.core.next(seq14786__$1);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14787,G__14788,seq14786__$2);
});

