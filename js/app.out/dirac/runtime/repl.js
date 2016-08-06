// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('dirac.runtime.prefs');
goog.require('clojure.string');
goog.require('goog.labs.userAgent.browser');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var and__6534__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__6534__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__6534__auto__;
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14816 = arguments.length;
var i__7622__auto___14817 = (0);
while(true){
if((i__7622__auto___14817 < len__7621__auto___14816)){
args__7628__auto__.push((arguments[i__7622__auto___14817]));

var G__14818 = (i__7622__auto___14817 + (1));
i__7622__auto___14817 = G__14818;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq14814){
var G__14815 = cljs.core.first(seq14814);
var seq14814__$1 = cljs.core.next(seq14814);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__14815,seq14814__$1);
});

dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14821 = arguments.length;
var i__7622__auto___14822 = (0);
while(true){
if((i__7622__auto___14822 < len__7621__auto___14821)){
args__7628__auto__.push((arguments[i__7622__auto___14822]));

var G__14823 = (i__7622__auto___14822 + (1));
i__7622__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((1) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7629__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args(name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq14819){
var G__14820 = cljs.core.first(seq14819);
var seq14819__$1 = cljs.core.next(seq14819);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__14820,seq14819__$1);
});

dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14827 = arguments.length;
var i__7622__auto___14828 = (0);
while(true){
if((i__7622__auto___14828 < len__7621__auto___14827)){
args__7628__auto__.push((arguments[i__7622__auto___14828]));

var G__14829 = (i__7622__auto___14828 + (1));
i__7622__auto___14828 = G__14829;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq14824){
var G__14825 = cljs.core.first(seq14824);
var seq14824__$1 = cljs.core.next(seq14824);
var G__14826 = cljs.core.first(seq14824__$1);
var seq14824__$2 = cljs.core.next(seq14824__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__14825,G__14826,seq14824__$2);
});

dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14833 = arguments.length;
var i__7622__auto___14834 = (0);
while(true){
if((i__7622__auto___14834 < len__7621__auto___14833)){
args__7628__auto__.push((arguments[i__7622__auto___14834]));

var G__14835 = (i__7622__auto___14834 + (1));
i__7622__auto___14834 = G__14835;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq14830){
var G__14831 = cljs.core.first(seq14830);
var seq14830__$1 = cljs.core.next(seq14830);
var G__14832 = cljs.core.first(seq14830__$1);
var seq14830__$2 = cljs.core.next(seq14830__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__14831,G__14832,seq14830__$2);
});

dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14839 = arguments.length;
var i__7622__auto___14840 = (0);
while(true){
if((i__7622__auto___14840 < len__7621__auto___14839)){
args__7628__auto__.push((arguments[i__7622__auto___14840]));

var G__14841 = (i__7622__auto___14840 + (1));
i__7622__auto___14840 = G__14841;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((2) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7629__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq14836){
var G__14837 = cljs.core.first(seq14836);
var seq14836__$1 = cljs.core.next(seq14836);
var G__14838 = cljs.core.first(seq14836__$1);
var seq14836__$2 = cljs.core.next(seq14836__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__14837,G__14838,seq14836__$2);
});

dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14846 = arguments.length;
var i__7622__auto___14847 = (0);
while(true){
if((i__7622__auto___14847 < len__7621__auto___14846)){
args__7628__auto__.push((arguments[i__7622__auto___14847]));

var G__14848 = (i__7622__auto___14847 + (1));
i__7622__auto___14847 = G__14848;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((3) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7629__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq14842){
var G__14843 = cljs.core.first(seq14842);
var seq14842__$1 = cljs.core.next(seq14842);
var G__14844 = cljs.core.first(seq14842__$1);
var seq14842__$2 = cljs.core.next(seq14842__$1);
var G__14845 = cljs.core.first(seq14842__$2);
var seq14842__$3 = cljs.core.next(seq14842__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__14843,G__14844,G__14845,seq14842__$3);
});

dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14850 = arguments.length;
var i__7622__auto___14851 = (0);
while(true){
if((i__7622__auto___14851 < len__7621__auto___14850)){
args__7628__auto__.push((arguments[i__7622__auto___14851]));

var G__14852 = (i__7622__auto___14851 + (1));
i__7622__auto___14851 = G__14852;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq14849){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14849));
});

dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14854 = arguments.length;
var i__7622__auto___14855 = (0);
while(true){
if((i__7622__auto___14855 < len__7621__auto___14854)){
args__7628__auto__.push((arguments[i__7622__auto___14855]));

var G__14856 = (i__7622__auto___14855 + (1));
i__7622__auto___14855 = G__14856;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq14853){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14853));
});

dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count(prefix);
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),prefix_len);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,prefix)){
return clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__4423__auto__ = cljs.core.re_find(/^([ ]+)/,line);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.count(cljs.core.second(m));
} else {
return (0);
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace(text,"\t","  ");
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__14857_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__14857_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\n/);
var first_line = cljs.core.first(lines);
var rest_content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.rest(lines));
if(cljs.core.empty_QMARK_(rest_content)){
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.cst$kw$stderr,cljs.core.array_seq([first_line], 0));
} else {
dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([request_id,cljs.core.cst$kw$stderr,"%c%s",dirac.runtime.prefs.pref(cljs.core.cst$kw$java_DASH_trace_DASH_header_DASH_style),first_line], 0));

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.cst$kw$stderr,cljs.core.array_seq([dirac.runtime.repl.remove_common_whitespace_prefix(rest_content)], 0));

return dirac.runtime.repl.group_end();
}
});
dirac.runtime.repl.should_silence_warning_QMARK_ = (function dirac$runtime$repl$should_silence_warning_QMARK_(message){
if(cljs.core.truth_((function (){var and__6534__auto__ = dirac.runtime.prefs.pref(cljs.core.cst$kw$silence_DASH_use_DASH_of_DASH_undeclared_DASH_var_DASH_warnings);
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.re_find(/^Use of undeclared Var/,message);
} else {
return and__6534__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__6534__auto__ = dirac.runtime.prefs.pref(cljs.core.cst$kw$silence_DASH_no_DASH_such_DASH_namespace_DASH_warnings);
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.re_find(/^No such namespace/,message);
} else {
return and__6534__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
dirac.runtime.repl.should_silence_error_QMARK_ = (function dirac$runtime$repl$should_silence_error_QMARK_(_message){
return false;

});
dirac.runtime.repl.emit_warning_BANG_ = (function dirac$runtime$repl$emit_warning_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_warning_QMARK_(message))){
return null;
} else {
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(request_id,"warning",cljs.core.array_seq([message], 0));
}
});
dirac.runtime.repl.emit_error_BANG_ = (function dirac$runtime$repl$emit_error_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_error_QMARK_(message))){
return null;
} else {
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(request_id,"error",cljs.core.array_seq([message], 0));
}
});
dirac.runtime.repl.api_version = (3);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js(dirac.runtime.prefs.get_prefs());
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(request_id,"result",cljs.core.array_seq([value], 0));

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(request_id,"exception",cljs.core.array_seq([exception], 0));
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,text){
var G__14859 = kind;
switch (G__14859) {
case "java-trace":
return dirac.runtime.repl.present_java_trace(request_id,text);

break;
default:
var temp__4423__auto__ = dirac.runtime.repl.detect_and_strip("WARNING:",text);
if(cljs.core.truth_(temp__4423__auto__)){
var warning_msg = temp__4423__auto__;
return dirac.runtime.repl.emit_warning_BANG_(request_id,warning_msg);
} else {
var temp__4423__auto____$1 = dirac.runtime.repl.detect_and_strip("ERROR:",text);
if(cljs.core.truth_(temp__4423__auto____$1)){
var error_msg = temp__4423__auto____$1;
return dirac.runtime.repl.emit_error_BANG_(request_id,error_msg);
} else {
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(request_id,kind,cljs.core.array_seq([text], 0));
}
}

}
});
goog.exportSymbol('dirac.runtime.repl.present_output', dirac.runtime.repl.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length via with-safe-printing.
 */
dirac.runtime.repl.postprocess_successful_eval = (function dirac$runtime$repl$postprocess_successful_eval(value){
var _STAR_print_level_STAR_14863 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_14864 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref(cljs.core.cst$kw$safe_DASH_print_DASH_level);

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref(cljs.core.cst$kw$safe_DASH_print_DASH_length);

try{return {"status": "success", "value": [cljs.core.str(value)].join('')};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_14864;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14863;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

var _STAR_print_level_STAR_14867 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_14868 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref(cljs.core.cst$kw$safe_DASH_print_DASH_level);

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref(cljs.core.cst$kw$safe_DASH_print_DASH_length);

try{return {"status": "exception", "value": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ex], 0)), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_14868;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14867;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_unsuccessful_eval', dirac.runtime.repl.postprocess_unsuccessful_eval);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.not(dirac.runtime.repl.installed_QMARK_())){
clojure.browser.repl.bootstrap();

dirac.runtime.repl._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
dirac.runtime.repl.uninstall_BANG_ = (function dirac$runtime$repl$uninstall_BANG_(){
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_())){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
