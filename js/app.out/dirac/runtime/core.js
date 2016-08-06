// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('dirac.runtime.prefs');
goog.require('goog.labs.userAgent.platform');
goog.require('goog.labs.userAgent.browser');
goog.require('dirac.runtime.repl');
goog.require('dirac.project');
goog.require('dirac.runtime.util');
dirac.runtime.core.known_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repl], null);
dirac.runtime.core.default_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repl], null);
dirac.runtime.core.feature_groups = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$all,dirac.runtime.core.known_features,cljs.core.cst$kw$default,dirac.runtime.core.default_features], null);
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__14947 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__14947) {
case "repl":
return (dirac.runtime.repl.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.repl.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.repl.available_QMARK_.call(null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
dirac.runtime.core.available_QMARK_ = (function dirac$runtime$core$available_QMARK_(var_args){
var args14949 = [];
var len__7621__auto___14952 = arguments.length;
var i__7622__auto___14953 = (0);
while(true){
if((i__7622__auto___14953 < len__7621__auto___14952)){
args14949.push((arguments[i__7622__auto___14953]));

var G__14954 = (i__7622__auto___14953 + (1));
i__7622__auto___14953 = G__14954;
continue;
} else {
}
break;
}

var G__14951 = args14949.length;
switch (G__14951) {
case 0:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14949.length)].join('')));

}
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$default);
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_(features_desc,dirac.runtime.core.feature_groups);
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(dirac.runtime.core.is_feature_available_QMARK_,features);
}
});

dirac.runtime.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.is_feature_installed_QMARK_ = (function dirac$runtime$core$is_feature_installed_QMARK_(feature){
var G__14957 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__14957) {
case "repl":
return dirac.runtime.repl.installed_QMARK_();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
dirac.runtime.core.installed_QMARK_ = (function dirac$runtime$core$installed_QMARK_(var_args){
var args14959 = [];
var len__7621__auto___14962 = arguments.length;
var i__7622__auto___14963 = (0);
while(true){
if((i__7622__auto___14963 < len__7621__auto___14962)){
args14959.push((arguments[i__7622__auto___14963]));

var G__14964 = (i__7622__auto___14963 + (1));
i__7622__auto___14963 = G__14964;
continue;
} else {
}
break;
}

var G__14961 = args14959.length;
switch (G__14961) {
case 0:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14959.length)].join('')));

}
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$default);
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_(features_desc,dirac.runtime.core.feature_groups);
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(dirac.runtime.core.is_feature_installed_QMARK_,features);
}
});

dirac.runtime.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var args14966 = [];
var len__7621__auto___14969 = arguments.length;
var i__7622__auto___14970 = (0);
while(true){
if((i__7622__auto___14970 < len__7621__auto___14969)){
args14966.push((arguments[i__7622__auto___14970]));

var G__14971 = (i__7622__auto___14970 + (1));
i__7622__auto___14970 = G__14971;
continue;
} else {
}
break;
}

var G__14968 = args14966.length;
switch (G__14968) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14966.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$default);
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_(features_desc,dirac.runtime.core.feature_groups);
dirac.runtime.util.display_banner_if_needed_BANG_(features,dirac.runtime.core.feature_groups);

return dirac.runtime.util.install_feature_BANG_(cljs.core.cst$kw$repl,features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_();
});
dirac.runtime.core.part_str = (function dirac$runtime$core$part_str(val,placeholder){
if(cljs.core.empty_QMARK_(val)){
return placeholder;
} else {
return val;
}
});
dirac.runtime.core.combo_str = (function dirac$runtime$core$combo_str(name,name_placeholder,version,version_placeholder){
return [cljs.core.str(dirac.runtime.core.part_str(name,name_placeholder)),cljs.core.str("/"),cljs.core.str(dirac.runtime.core.part_str(version,version_placeholder))].join('');
});
dirac.runtime.core.get_tag_data = (function dirac$runtime$core$get_tag_data(){
var tag = dirac.runtime.prefs.pref(cljs.core.cst$kw$runtime_DASH_tag);
var url = [cljs.core.str(location)].join('');
var browser_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.browser.isOpera())?"Opera":null),(cljs.core.truth_(goog.labs.userAgent.browser.isIE())?"IE":null),(cljs.core.truth_(goog.labs.userAgent.browser.isEdge())?"Edge":null),(cljs.core.truth_(goog.labs.userAgent.browser.isFirefox())?"Firefox":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSafari())?"Safari":null),(cljs.core.truth_(goog.labs.userAgent.browser.isCoast())?"Coast":null),(cljs.core.truth_(goog.labs.userAgent.browser.isChrome())?"Chrome":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSilk())?"Silk":null)], null)));
var browser_version = goog.labs.userAgent.browser.getVersion();
var browser = dirac.runtime.core.combo_str(browser_name,"unknown-browser",browser_version,"unknown-version");
var platform_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.platform.isAndroid())?"Android":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpod())?"iPod":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIphone())?"iPhone":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpad())?"iPad":null),(cljs.core.truth_(goog.labs.userAgent.platform.isMacintosh())?"Mac":null),(cljs.core.truth_(goog.labs.userAgent.platform.isLinux())?"Linux":null),(cljs.core.truth_(goog.labs.userAgent.platform.isWindows())?"Windows":null),(cljs.core.truth_(goog.labs.userAgent.platform.isChromeOS())?"ChromeOS":null)], null)));
var platform_version = goog.labs.userAgent.platform.getVersion();
var platform = dirac.runtime.core.combo_str(platform_name,"unknown-platform",platform_version,"unknown-version");
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$url,url,cljs.core.cst$kw$browser,browser,cljs.core.cst$kw$platform,platform], null);
});
dirac.runtime.core.get_tag = (function dirac$runtime$core$get_tag(){
var map__14975 = dirac.runtime.core.get_tag_data();
var map__14975__$1 = ((((!((map__14975 == null)))?((((map__14975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14975):map__14975);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$tag);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$url);
var browser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$browser);
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$platform);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" | ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,url,browser,platform], null)));
});
