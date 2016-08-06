// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime');
goog.require('cljs.core');
goog.require('dirac.project');
goog.require('dirac.runtime.core');
goog.require('dirac.runtime.prefs');
dirac.runtime.get_version = dirac.project.get_current_version;
goog.exportSymbol('dirac.runtime.get_version', dirac.runtime.get_version);
dirac.runtime.available_QMARK_ = dirac.runtime.core.available_QMARK_;
goog.exportSymbol('dirac.runtime.available_QMARK_', dirac.runtime.available_QMARK_);
dirac.runtime.installed_QMARK_ = dirac.runtime.core.installed_QMARK_;
goog.exportSymbol('dirac.runtime.installed_QMARK_', dirac.runtime.installed_QMARK_);
dirac.runtime.install_BANG_ = dirac.runtime.core.install_BANG_;
goog.exportSymbol('dirac.runtime.install_BANG_', dirac.runtime.install_BANG_);
dirac.runtime.uninstall_BANG_ = dirac.runtime.core.uninstall_BANG_;
goog.exportSymbol('dirac.runtime.uninstall_BANG_', dirac.runtime.uninstall_BANG_);
dirac.runtime.get_tag = dirac.runtime.core.get_tag;
goog.exportSymbol('dirac.runtime.get_tag', dirac.runtime.get_tag);
dirac.runtime.get_prefs = dirac.runtime.prefs.get_prefs;
goog.exportSymbol('dirac.runtime.get_prefs', dirac.runtime.get_prefs);
dirac.runtime.set_prefs_BANG_ = dirac.runtime.prefs.set_prefs_BANG_;
goog.exportSymbol('dirac.runtime.set_prefs_BANG_', dirac.runtime.set_prefs_BANG_);
dirac.runtime.set_pref_BANG_ = dirac.runtime.prefs.set_pref_BANG_;
goog.exportSymbol('dirac.runtime.set_pref_BANG_', dirac.runtime.set_pref_BANG_);
dirac.runtime.is_feature_available_QMARK_ = (function dirac$runtime$is_feature_available_QMARK_(var_args){
var args__7628__auto__ = [];
var len__7621__auto___17422 = arguments.length;
var i__7622__auto___17423 = (0);
while(true){
if((i__7622__auto___17423 < len__7621__auto___17422)){
args__7628__auto__.push((arguments[i__7622__auto___17423]));

var G__17424 = (i__7622__auto___17423 + (1));
i__7622__auto___17423 = G__17424;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return dirac.runtime.is_feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});
goog.exportSymbol('dirac.runtime.is_feature_available_QMARK_', dirac.runtime.is_feature_available_QMARK_);

dirac.runtime.is_feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.warn("dirac.runtime/is-feature-available? is deprecated, use dirac.runtime/available? instead");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dirac.runtime.core.is_feature_available_QMARK_,args);
});

dirac.runtime.is_feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

dirac.runtime.is_feature_available_QMARK_.cljs$lang$applyTo = (function (seq17421){
return dirac.runtime.is_feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17421));
});

