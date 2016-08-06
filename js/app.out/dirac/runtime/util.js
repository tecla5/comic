// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('dirac.project');
goog.require('dirac.runtime.prefs');
dirac.runtime.util.make_version_info = (function dirac$runtime$util$make_version_info(version){
return [cljs.core.str("v"),cljs.core.str(version)].join('');
});
dirac.runtime.util.make_lib_info = (function dirac$runtime$util$make_lib_info(version){
return [cljs.core.str("Dirac Runtime "),cljs.core.str((dirac.runtime.util.make_version_info.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.make_version_info.cljs$core$IFn$_invoke$arity$1(version) : dirac.runtime.util.make_version_info.call(null,version)))].join('');
});
dirac.runtime.util.unknown_feature_msg = (function dirac$runtime$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(lib_info),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([known_features], 0)))].join('');
});
dirac.runtime.util.feature_not_available_msg = (function dirac$runtime$util$feature_not_available_msg(feature){
return [cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. "),cljs.core.str("Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join('');
});
dirac.runtime.util.get_lib_info = (function dirac$runtime$util$get_lib_info(){
return (dirac.runtime.util.make_lib_info.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.make_lib_info.cljs$core$IFn$_invoke$arity$1(dirac.project.get_current_version()) : dirac.runtime.util.make_lib_info.call(null,dirac.project.get_current_version()));
});
dirac.runtime.util.feature_for_display = (function dirac$runtime$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str(feature)].join('')], null)], null);
});
dirac.runtime.util.feature_list_display = (function dirac$runtime$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dirac.runtime.util.feature_for_display,installed_features),cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first(accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});})(labels))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
dirac.runtime.util.display_banner_BANG_ = (function dirac$runtime$util$display_banner_BANG_(var_args){
var args__7628__auto__ = [];
var len__7621__auto___14895 = arguments.length;
var i__7622__auto___14896 = (0);
while(true){
if((i__7622__auto___14896 < len__7621__auto___14895)){
args__7628__auto__.push((arguments[i__7622__auto___14896]));

var G__14897 = (i__7622__auto___14896 + (1));
i__7622__auto___14896 = G__14897;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((3) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((3)),(0),null)):null);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7629__auto__);
});

dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__14892 = dirac.runtime.util.feature_list_display(installed_features,feature_groups);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892,(0),null);
var fmt_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892,(1),null);
var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str)].join('')], null),params,cljs.core.array_seq([fmt_params], 0));
return console.info.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(items));
});

dirac.runtime.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

dirac.runtime.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq14888){
var G__14889 = cljs.core.first(seq14888);
var seq14888__$1 = cljs.core.next(seq14888);
var G__14890 = cljs.core.first(seq14888__$1);
var seq14888__$2 = cljs.core.next(seq14888__$1);
var G__14891 = cljs.core.first(seq14888__$2);
var seq14888__$3 = cljs.core.next(seq14888__$2);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14889,G__14890,G__14891,seq14888__$3);
});

dirac.runtime.util.display_banner_if_needed_BANG_ = (function dirac$runtime$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.truth_(dirac.runtime.prefs.pref(cljs.core.cst$kw$dont_DASH_display_DASH_banner))){
return null;
} else {
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(features_to_install,feature_groups,banner,cljs.core.array_seq([lib_info_style,dirac.runtime.util.get_lib_info(),reset_style], 0));
}
});
dirac.runtime.util.report_unknown_features_BANG_ = (function dirac$runtime$util$report_unknown_features_BANG_(features,known_features){
var lib_info = dirac.runtime.util.get_lib_info();
var seq__14902 = cljs.core.seq(features);
var chunk__14903 = null;
var count__14904 = (0);
var i__14905 = (0);
while(true){
if((i__14905 < count__14904)){
var feature = chunk__14903.cljs$core$IIndexed$_nth$arity$2(null,i__14905);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn((dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__14906 = seq__14902;
var G__14907 = chunk__14903;
var G__14908 = count__14904;
var G__14909 = (i__14905 + (1));
seq__14902 = G__14906;
chunk__14903 = G__14907;
count__14904 = G__14908;
i__14905 = G__14909;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14902);
if(temp__4425__auto__){
var seq__14902__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14902__$1)){
var c__7357__auto__ = cljs.core.chunk_first(seq__14902__$1);
var G__14910 = cljs.core.chunk_rest(seq__14902__$1);
var G__14911 = c__7357__auto__;
var G__14912 = cljs.core.count(c__7357__auto__);
var G__14913 = (0);
seq__14902 = G__14910;
chunk__14903 = G__14911;
count__14904 = G__14912;
i__14905 = G__14913;
continue;
} else {
var feature = cljs.core.first(seq__14902__$1);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn((dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__14914 = cljs.core.next(seq__14902__$1);
var G__14915 = null;
var G__14916 = (0);
var G__14917 = (0);
seq__14902 = G__14914;
chunk__14903 = G__14915;
count__14904 = G__14916;
i__14905 = G__14917;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.util.is_known_feature_QMARK_ = (function dirac$runtime$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),known_features));
});
dirac.runtime.util.sanititze_features_BANG_ = (function dirac$runtime$util$sanititze_features_BANG_(features,feature_groups){
var known_features = cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups);
dirac.runtime.util.report_unknown_features_BANG_(features,known_features);

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dirac.runtime.util.is_known_feature_QMARK_,known_features),features);
});
dirac.runtime.util.resolve_features_BANG_ = (function dirac$runtime$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__6534__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__6534__auto__){
return (features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups));
} else {
return and__6534__auto__;
}
})())?(features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups)):(((features_desc == null))?cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_(features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return dirac.runtime.util.sanititze_features_BANG_(features,feature_groups);
});
dirac.runtime.util.install_feature_BANG_ = (function dirac$runtime$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),features_to_install))){
if(cljs.core.truth_((available_fn.cljs$core$IFn$_invoke$arity$1 ? available_fn.cljs$core$IFn$_invoke$arity$1(feature) : available_fn.call(null,feature)))){
return (install_fn.cljs$core$IFn$_invoke$arity$0 ? install_fn.cljs$core$IFn$_invoke$arity$0() : install_fn.call(null));
} else {
return console.warn((dirac.runtime.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1(feature) : dirac.runtime.util.feature_not_available_msg.call(null,feature)));
}
} else {
return null;
}
});
