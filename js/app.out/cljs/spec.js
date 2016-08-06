// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__7209__auto__ = (((spec == null))?null:spec);
var m__7210__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__7210__auto__.call(null,spec,x));
} else {
var m__7210__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__7210__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__7209__auto__ = (((spec == null))?null:spec);
var m__7210__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__7210__auto__.call(null,spec,y));
} else {
var m__7210__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__7210__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__7209__auto__ = (((spec == null))?null:spec);
var m__7210__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$5 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__7210__auto__.call(null,spec,path,via,in$,x));
} else {
var m__7210__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__7210__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__7209__auto__ = (((spec == null))?null:spec);
var m__7210__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__7210__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__7210__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__7210__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__7209__auto__ = (((spec == null))?null:spec);
var m__7210__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__7210__auto__.call(null,spec,gfn));
} else {
var m__7210__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__7210__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__7209__auto__ = (((spec == null))?null:spec);
var m__7210__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__7209__auto__)]);
if(!((m__7210__auto__ == null))){
return (m__7210__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7210__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__7210__auto__.call(null,spec));
} else {
var m__7210__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__7210__auto____$1 == null))){
return (m__7210__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7210__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__7210__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = (function (){var G__12974 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12974) : cljs.core.atom.call(null,G__12974));
})();
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec_SLASH_name,name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_(k))){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec))){
var G__12979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__12979;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name(spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__6546__auto__ = cljs.spec.reg_resolve(k);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__6534__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__6534__auto__){
return x;
} else {
return and__6534__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__6534__auto__ = cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__6534__auto__)){
return x;
} else {
return and__6534__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__6546__auto__ = cljs.spec.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var or__6546__auto____$1 = cljs.spec.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
var or__6546__auto____$2 = (function (){var and__6534__auto__ = cljs.spec.named_QMARK_(spec_or_k);
if(cljs.core.truth_(and__6534__auto__)){
return cljs.spec.reg_resolve(spec_or_k);
} else {
return and__6534__auto__;
}
})();
if(cljs.core.truth_(or__6546__auto____$2)){
return or__6546__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_(s))){
return cljs.spec.with_name((cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.regex_spec_impl.call(null,s,null)),cljs.spec.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__6546__auto__ = cljs.spec.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__6546__auto__ = cljs.spec.the_spec(s);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$spec_SLASH_unknown,s,null,null) : cljs.spec.spec_impl.call(null,cljs.core.cst$kw$cljs$spec_SLASH_unknown,s,null,null));
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_(cljs.spec.specize(spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__6534__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__6534__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__6534__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__6534__auto__ = (form instanceof cljs.core.Symbol);
if(and__6534__auto__){
return cljs.core.namespace(form);
} else {
return and__6534__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev(cljs.spec.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_(cljs.spec.specize(spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4425__auto__ = cljs.spec.explain_STAR_(cljs.spec.specize(spec),path,via,in$,x);
if(cljs.core.truth_(temp__4425__auto__)){
var probs = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4423__auto__ = cljs.spec.spec_name(spec);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13030_13076 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13031_13077 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13030_13076,_STAR_print_fn_STAR_13031_13077,sb__7532__auto__){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_13030_13076,_STAR_print_fn_STAR_13031_13077,sb__7532__auto__))
;

try{var seq__13032_13078 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
var chunk__13033_13079 = null;
var count__13034_13080 = (0);
var i__13035_13081 = (0);
while(true){
if((i__13035_13081 < count__13034_13080)){
var vec__13036_13082 = chunk__13033_13079.cljs$core$IIndexed$_nth$arity$2(null,i__13035_13081);
var path_13083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036_13082,(0),null);
var map__13039_13084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036_13082,(1),null);
var map__13039_13085__$1 = ((((!((map__13039_13084 == null)))?((((map__13039_13084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13039_13084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13039_13084):map__13039_13084);
var prob_13086 = map__13039_13085__$1;
var pred_13087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13039_13085__$1,cljs.core.cst$kw$pred);
var val_13088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13039_13085__$1,cljs.core.cst$kw$val);
var reason_13089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13039_13085__$1,cljs.core.cst$kw$reason);
var via_13090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13039_13085__$1,cljs.core.cst$kw$via);
var in_13091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13039_13085__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_13091)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_13091], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_13088], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_13090)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_13090)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_13083)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_13083], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred_13087], 0));

if(cljs.core.truth_(reason_13089)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_13089], 0));
} else {
}

var seq__13041_13092 = cljs.core.seq(prob_13086);
var chunk__13042_13093 = null;
var count__13043_13094 = (0);
var i__13044_13095 = (0);
while(true){
if((i__13044_13095 < count__13043_13094)){
var vec__13045_13096 = chunk__13042_13093.cljs$core$IIndexed$_nth$arity$2(null,i__13044_13095);
var k_13097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13045_13096,(0),null);
var v_13098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13045_13096,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_13097))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_13097], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_13098], 0));
}

var G__13099 = seq__13041_13092;
var G__13100 = chunk__13042_13093;
var G__13101 = count__13043_13094;
var G__13102 = (i__13044_13095 + (1));
seq__13041_13092 = G__13099;
chunk__13042_13093 = G__13100;
count__13043_13094 = G__13101;
i__13044_13095 = G__13102;
continue;
} else {
var temp__4425__auto___13103 = cljs.core.seq(seq__13041_13092);
if(temp__4425__auto___13103){
var seq__13041_13104__$1 = temp__4425__auto___13103;
if(cljs.core.chunked_seq_QMARK_(seq__13041_13104__$1)){
var c__7357__auto___13105 = cljs.core.chunk_first(seq__13041_13104__$1);
var G__13106 = cljs.core.chunk_rest(seq__13041_13104__$1);
var G__13107 = c__7357__auto___13105;
var G__13108 = cljs.core.count(c__7357__auto___13105);
var G__13109 = (0);
seq__13041_13092 = G__13106;
chunk__13042_13093 = G__13107;
count__13043_13094 = G__13108;
i__13044_13095 = G__13109;
continue;
} else {
var vec__13048_13110 = cljs.core.first(seq__13041_13104__$1);
var k_13111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048_13110,(0),null);
var v_13112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048_13110,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_13111))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_13111], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_13112], 0));
}

var G__13113 = cljs.core.next(seq__13041_13104__$1);
var G__13114 = null;
var G__13115 = (0);
var G__13116 = (0);
seq__13041_13092 = G__13113;
chunk__13042_13093 = G__13114;
count__13043_13094 = G__13115;
i__13044_13095 = G__13116;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__13117 = seq__13032_13078;
var G__13118 = chunk__13033_13079;
var G__13119 = count__13034_13080;
var G__13120 = (i__13035_13081 + (1));
seq__13032_13078 = G__13117;
chunk__13033_13079 = G__13118;
count__13034_13080 = G__13119;
i__13035_13081 = G__13120;
continue;
} else {
var temp__4425__auto___13121 = cljs.core.seq(seq__13032_13078);
if(temp__4425__auto___13121){
var seq__13032_13122__$1 = temp__4425__auto___13121;
if(cljs.core.chunked_seq_QMARK_(seq__13032_13122__$1)){
var c__7357__auto___13123 = cljs.core.chunk_first(seq__13032_13122__$1);
var G__13124 = cljs.core.chunk_rest(seq__13032_13122__$1);
var G__13125 = c__7357__auto___13123;
var G__13126 = cljs.core.count(c__7357__auto___13123);
var G__13127 = (0);
seq__13032_13078 = G__13124;
chunk__13033_13079 = G__13125;
count__13034_13080 = G__13126;
i__13035_13081 = G__13127;
continue;
} else {
var vec__13051_13128 = cljs.core.first(seq__13032_13122__$1);
var path_13129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13051_13128,(0),null);
var map__13054_13130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13051_13128,(1),null);
var map__13054_13131__$1 = ((((!((map__13054_13130 == null)))?((((map__13054_13130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13054_13130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13054_13130):map__13054_13130);
var prob_13132 = map__13054_13131__$1;
var pred_13133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054_13131__$1,cljs.core.cst$kw$pred);
var val_13134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054_13131__$1,cljs.core.cst$kw$val);
var reason_13135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054_13131__$1,cljs.core.cst$kw$reason);
var via_13136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054_13131__$1,cljs.core.cst$kw$via);
var in_13137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054_13131__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_13137)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_13137], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_13134], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_13136)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_13136)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_13129)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_13129], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred_13133], 0));

if(cljs.core.truth_(reason_13135)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_13135], 0));
} else {
}

var seq__13056_13138 = cljs.core.seq(prob_13132);
var chunk__13057_13139 = null;
var count__13058_13140 = (0);
var i__13059_13141 = (0);
while(true){
if((i__13059_13141 < count__13058_13140)){
var vec__13060_13142 = chunk__13057_13139.cljs$core$IIndexed$_nth$arity$2(null,i__13059_13141);
var k_13143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060_13142,(0),null);
var v_13144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060_13142,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_13143))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_13143], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_13144], 0));
}

var G__13145 = seq__13056_13138;
var G__13146 = chunk__13057_13139;
var G__13147 = count__13058_13140;
var G__13148 = (i__13059_13141 + (1));
seq__13056_13138 = G__13145;
chunk__13057_13139 = G__13146;
count__13058_13140 = G__13147;
i__13059_13141 = G__13148;
continue;
} else {
var temp__4425__auto___13149__$1 = cljs.core.seq(seq__13056_13138);
if(temp__4425__auto___13149__$1){
var seq__13056_13150__$1 = temp__4425__auto___13149__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13056_13150__$1)){
var c__7357__auto___13151 = cljs.core.chunk_first(seq__13056_13150__$1);
var G__13152 = cljs.core.chunk_rest(seq__13056_13150__$1);
var G__13153 = c__7357__auto___13151;
var G__13154 = cljs.core.count(c__7357__auto___13151);
var G__13155 = (0);
seq__13056_13138 = G__13152;
chunk__13057_13139 = G__13153;
count__13058_13140 = G__13154;
i__13059_13141 = G__13155;
continue;
} else {
var vec__13063_13156 = cljs.core.first(seq__13056_13150__$1);
var k_13157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063_13156,(0),null);
var v_13158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063_13156,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_13157))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_13157], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_13158], 0));
}

var G__13159 = cljs.core.next(seq__13056_13150__$1);
var G__13160 = null;
var G__13161 = (0);
var G__13162 = (0);
seq__13056_13138 = G__13159;
chunk__13057_13139 = G__13160;
count__13058_13140 = G__13161;
i__13059_13141 = G__13162;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__13163 = cljs.core.next(seq__13032_13122__$1);
var G__13164 = null;
var G__13165 = (0);
var G__13166 = (0);
seq__13032_13078 = G__13163;
chunk__13033_13079 = G__13164;
count__13034_13080 = G__13165;
i__13035_13081 = G__13166;
continue;
}
} else {
}
}
break;
}

var seq__13066_13167 = cljs.core.seq(ed);
var chunk__13067_13168 = null;
var count__13068_13169 = (0);
var i__13069_13170 = (0);
while(true){
if((i__13069_13170 < count__13068_13169)){
var vec__13070_13171 = chunk__13067_13168.cljs$core$IIndexed$_nth$arity$2(null,i__13069_13170);
var k_13172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13070_13171,(0),null);
var v_13173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13070_13171,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_13172))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_13172], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_13173], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__13174 = seq__13066_13167;
var G__13175 = chunk__13067_13168;
var G__13176 = count__13068_13169;
var G__13177 = (i__13069_13170 + (1));
seq__13066_13167 = G__13174;
chunk__13067_13168 = G__13175;
count__13068_13169 = G__13176;
i__13069_13170 = G__13177;
continue;
} else {
var temp__4425__auto___13178 = cljs.core.seq(seq__13066_13167);
if(temp__4425__auto___13178){
var seq__13066_13179__$1 = temp__4425__auto___13178;
if(cljs.core.chunked_seq_QMARK_(seq__13066_13179__$1)){
var c__7357__auto___13180 = cljs.core.chunk_first(seq__13066_13179__$1);
var G__13181 = cljs.core.chunk_rest(seq__13066_13179__$1);
var G__13182 = c__7357__auto___13180;
var G__13183 = cljs.core.count(c__7357__auto___13180);
var G__13184 = (0);
seq__13066_13167 = G__13181;
chunk__13067_13168 = G__13182;
count__13068_13169 = G__13183;
i__13069_13170 = G__13184;
continue;
} else {
var vec__13073_13185 = cljs.core.first(seq__13066_13179__$1);
var k_13186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073_13185,(0),null);
var v_13187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073_13185,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_13186))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_13186], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_13187], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__13188 = cljs.core.next(seq__13066_13179__$1);
var G__13189 = null;
var G__13190 = (0);
var G__13191 = (0);
seq__13066_13167 = G__13188;
chunk__13067_13168 = G__13189;
count__13068_13169 = G__13190;
i__13069_13170 = G__13191;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13031_13077;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13030_13076;
}
return [cljs.core.str(sb__7532__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out(cljs.spec.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13194_13196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13195_13197 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13194_13196,_STAR_print_fn_STAR_13195_13197,sb__7532__auto__){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_13194_13196,_STAR_print_fn_STAR_13195_13197,sb__7532__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13195_13197;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13194_13196;
}
return [cljs.core.str(sb__7532__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = (function (){var or__6546__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,spec);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return spec;
}
})();
var spec__$2 = cljs.spec.specize(spec__$1);
var temp__4423__auto__ = (function (){var or__6546__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.spec.gen_STAR_(spec__$2,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var g = temp__4423__auto__;
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4423__auto__,spec__$1,spec__$2){
return (function (p1__13198_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$2,p1__13198_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$2,p1__13198_SHARP_));
});})(g,temp__4423__auto__,spec__$1,spec__$2))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to
 *   generators. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args13199 = [];
var len__7621__auto___13202 = arguments.length;
var i__7622__auto___13203 = (0);
while(true){
if((i__7622__auto___13203 < len__7621__auto___13202)){
args13199.push((arguments[i__7622__auto___13203]));

var G__13204 = (i__7622__auto___13203 + (1));
i__7622__auto___13203 = G__13204;
continue;
} else {
}
break;
}

var G__13201 = args13199.length;
switch (G__13201) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13199.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit,cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__6534__auto__ = cljs.spec.named_QMARK_(k);
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.namespace(k);
} else {
return and__6534__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__6546__auto__ = cljs.spec.spec_QMARK_(spec);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var or__6546__auto____$1 = cljs.spec.regex_QMARK_(spec);
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym(k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__6546__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,conformed)){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),cljs.core.cst$kw$cljs$spec_SLASH_args,args);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v__$1], 0))),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13212_13218 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13213_13219 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13212_13218,_STAR_print_fn_STAR_13213_13219,sb__7532__auto__,ed,conformed){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_13212_13218,_STAR_print_fn_STAR_13213_13219,sb__7532__auto__,ed,conformed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13213_13219;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13212_13218;
}
return [cljs.core.str(sb__7532__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__13214 = ((function (conform_BANG_){
return (function() { 
var G__13220__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_13215 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec(v);
if(cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_(v,cljs.core.cst$kw$args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_13216 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_13216;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_13215;
}} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__13220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13221__i = 0, G__13221__a = new Array(arguments.length -  0);
while (G__13221__i < G__13221__a.length) {G__13221__a[G__13221__i] = arguments[G__13221__i + 0]; ++G__13221__i;}
  args = new cljs.core.IndexedSeq(G__13221__a,0);
} 
return G__13220__delegate.call(this,args);};
G__13220.cljs$lang$maxFixedArity = 0;
G__13220.cljs$lang$applyTo = (function (arglist__13222){
var args = cljs.core.seq(arglist__13222);
return G__13220__delegate(args);
});
G__13220.cljs$core$IFn$_invoke$arity$variadic = G__13220__delegate;
return G__13220;
})()
;})(conform_BANG_))
;
var G__13214__$1 = ((!((f instanceof cljs.core.MultiFn)))?(function (){var G__13217 = G__13214;
goog.object.extend(G__13217,f);

return G__13217;
})():G__13214);
return G__13214__$1;
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec(v);
var temp__4425__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4425__auto__)){
var arg_spec = temp__4425__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.conform(arg_spec,args))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__4423__auto__ = cljs.spec.spec_name(arg_spec);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec_SLASH_args,args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym(v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13225_13227 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13226_13228 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13225_13227,_STAR_print_fn_STAR_13226_13228,sb__7532__auto__,ed,arg_spec,temp__4425__auto__,specs){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_13225_13227,_STAR_print_fn_STAR_13226_13228,sb__7532__auto__,ed,arg_spec,temp__4425__auto__,specs))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13226_13228;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13225_13227;
}
return [cljs.core.str(sb__7532__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$var,v,cljs.core.cst$kw$specs,specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = (function (){var G__13229 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13229) : cljs.core.atom.call(null,G__13229));
})();
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec(v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_(spec))){
var map__13232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.instrumented_vars) : cljs.core.deref.call(null,cljs.spec.instrumented_vars)),v);
var map__13232__$1 = ((((!((map__13232 == null)))?((((map__13232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13232):map__13232);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13232__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13232__$1,cljs.core.cst$kw$wrapped);
var current = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn(v,current);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$raw,current,cljs.core.cst$kw$wrapped,checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec(v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.instrumented_vars) : cljs.core.deref.call(null,cljs.spec.instrumented_vars)),v);
if(cljs.core.truth_(temp__4425__auto__)){
var map__13236 = temp__4425__auto__;
var map__13236__$1 = ((((!((map__13236 == null)))?((((map__13236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13236):map__13236);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13236__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13236__$1,cljs.core.cst$kw$wrapped);
var current = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__6546__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args13238 = [];
var len__7621__auto___13241 = arguments.length;
var i__7622__auto___13242 = (0);
while(true){
if((i__7622__auto___13242 < len__7621__auto___13241)){
args13238.push((arguments[i__7622__auto___13242]));

var G__13243 = (i__7622__auto___13242 + (1));
i__7622__auto___13242 = G__13243;
continue;
} else {
}
break;
}

var G__13240 = args13238.length;
switch (G__13240) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13238.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4423__auto__ = cljs.spec.the_spec(pred);
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return cljs.spec.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args13245 = [];
var len__7621__auto___13248 = arguments.length;
var i__7622__auto___13249 = (0);
while(true){
if((i__7622__auto___13249 < len__7621__auto___13248)){
args13245.push((arguments[i__7622__auto___13249]));

var G__13250 = (i__7622__auto___13249 + (1));
i__7622__auto___13249 = G__13250;
continue;
} else {
}
break;
}

var G__13247 = args13245.length;
switch (G__13247) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13245.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,cljs.core.cst$kw$cljs$spec_SLASH_unknown));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred__$1))){
return cljs.spec.explain_STAR_(pred__$1,path,(function (){var temp__4423__auto__ = cljs.spec.spec_name(pred__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.spec.abbrev(form),cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__13254){
var map__13286 = p__13254;
var map__13286__$1 = ((((!((map__13286 == null)))?((((map__13286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13286):map__13286);
var argm = map__13286__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$pred_DASH_exprs);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$pred_DASH_forms);
var keys_pred = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__13252_SHARP_){
var or__6546__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__13252_SHARP_) : k__GT_s.call(null,p1__13252_SHARP_));
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return p1__13252_SHARP_;
}
});})(keys_pred,k__GT_s,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec13288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13288 = (function (p__13254,opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__13286,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta13289){
this.p__13254 = p__13254;
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__13286 = map__13286;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta13289 = meta13289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_13290,meta13289__$1){
var self__ = this;
var _13290__$1 = this;
return (new cljs.spec.t_cljs$spec13288(self__.p__13254,self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__13286,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta13289__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_13290){
var self__ = this;
var _13290__$1 = this;
return self__.meta13289;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__13294 = cljs.core.keys(m);
var vec__13295 = G__13294;
var seq__13296 = cljs.core.seq(vec__13295);
var first__13297 = cljs.core.first(seq__13296);
var seq__13296__$1 = cljs.core.next(seq__13296);
var k = first__13297;
var ks = seq__13296__$1;
var keys = vec__13295;
var ret__$1 = ret;
var G__13294__$1 = G__13294;
while(true){
var ret__$2 = ret__$1;
var vec__13298 = G__13294__$1;
var seq__13299 = cljs.core.seq(vec__13298);
var first__13300 = cljs.core.first(seq__13299);
var seq__13299__$1 = cljs.core.next(seq__13299);
var k__$1 = first__13300;
var ks__$1 = seq__13299__$1;
var keys__$1 = vec__13298;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var cv = cljs.spec.conform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cv,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__13317 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__13318 = ks__$1;
ret__$1 = G__13317;
G__13294__$1 = G__13318;
continue;
}
} else {
var G__13319 = ret__$2;
var G__13320 = ks__$1;
ret__$1 = G__13319;
G__13294__$1 = G__13320;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry();
var ret = m;
var G__13304 = cljs.core.keys(m);
var vec__13305 = G__13304;
var seq__13306 = cljs.core.seq(vec__13305);
var first__13307 = cljs.core.first(seq__13306);
var seq__13306__$1 = cljs.core.next(seq__13306);
var k = first__13307;
var ks = seq__13306__$1;
var keys = vec__13305;
var ret__$1 = ret;
var G__13304__$1 = G__13304;
while(true){
var ret__$2 = ret__$1;
var vec__13308 = G__13304__$1;
var seq__13309 = cljs.core.seq(vec__13308);
var first__13310 = cljs.core.first(seq__13309);
var seq__13309__$1 = cljs.core.next(seq__13309);
var k__$1 = first__13310;
var ks__$1 = seq__13309__$1;
var keys__$1 = vec__13308;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.unform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),cv);
var G__13321 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__13322 = ks__$1;
ret__$1 = G__13321;
G__13304__$1 = G__13322;
continue;
} else {
var G__13323 = ret__$2;
var G__13324 = ks__$1;
ret__$1 = G__13323;
G__13304__$1 = G__13324;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,(function (){var temp__4425__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4425__auto__){
var probs = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.vec(probs),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__13311){
var vec__13312 = p__13311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13312,(1),null);
if(cljs.core.truth_((function (){var or__6546__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k))));
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__13253_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__13253_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__13315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__13315) : self__.map_spec_impl.call(null,G__13315));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_keys,(function (){var G__13316 = cljs.core.PersistentVector.EMPTY;
var G__13316__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__13316,cljs.core.cst$kw$req,cljs.core.array_seq([self__.req], 0)):G__13316);
var G__13316__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__13316__$1,cljs.core.cst$kw$opt,cljs.core.array_seq([self__.opt], 0)):G__13316__$1);
var G__13316__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__13316__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.array_seq([self__.req_un], 0)):G__13316__$2);
var G__13316__$4 = (cljs.core.truth_(self__.opt_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__13316__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.array_seq([self__.opt_un], 0)):G__13316__$3);
return G__13316__$4;
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__13254,cljs.core.cst$sym$opt,cljs.core.with_meta(cljs.core.cst$sym$map_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$opt,cljs.core.cst$sym$gfn], null),cljs.core.cst$kw$as,cljs.core.cst$sym$argm], null)], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec' with a map argument"], null)),cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$map__13286,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$keys_DASH__GT_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta13289], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec13288.cljs$lang$type = true;

cljs.spec.t_cljs$spec13288.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13288";

cljs.spec.t_cljs$spec13288.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13288");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec13288 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec13288(p__13254__$1,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__13286__$2,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta13289){
return (new cljs.spec.t_cljs$spec13288(p__13254__$1,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__13286__$2,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta13289));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__13286,map__13286__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec13288(p__13254,opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__13286__$1,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args13325 = [];
var len__7621__auto___13333 = arguments.length;
var i__7622__auto___13334 = (0);
while(true){
if((i__7622__auto___13334 < len__7621__auto___13333)){
args13325.push((arguments[i__7622__auto___13334]));

var G__13335 = (i__7622__auto___13334 + (1));
i__7622__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var G__13327 = args13325.length;
switch (G__13327) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13325.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__13328 = pred;
var G__13328__$1 = (cljs.core.truth_(gfn)?cljs.spec.with_gen(G__13328,gfn):G__13328);
return G__13328__$1;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(pred))){
var G__13329 = cljs.spec.the_spec(pred);
var G__13329__$1 = (cljs.core.truth_(gfn)?cljs.spec.with_gen(G__13329,gfn):G__13329);
return G__13329__$1;
} else {
if(typeof cljs.spec.t_cljs$spec13330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13330 = (function (form,pred,gfn,cpred_QMARK_,unc,meta13331){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta13331 = meta13331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13332,meta13331__$1){
var self__ = this;
var _13332__$1 = this;
return (new cljs.spec.t_cljs$spec13330(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta13331__$1));
});

cljs.spec.t_cljs$spec13330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13332){
var self__ = this;
var _13332__$1 = this;
return self__.meta13331;
});

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec13330.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec13330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta13331], null);
});

cljs.spec.t_cljs$spec13330.cljs$lang$type = true;

cljs.spec.t_cljs$spec13330.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13330";

cljs.spec.t_cljs$spec13330.cljs$lang$ctorPrWriter = (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13330");
});

cljs.spec.__GT_t_cljs$spec13330 = (function cljs$spec$__GT_t_cljs$spec13330(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta13331){
return (new cljs.spec.t_cljs$spec13330(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta13331));
});

}

return (new cljs.spec.t_cljs$spec13330(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args13342 = [];
var len__7621__auto___13356 = arguments.length;
var i__7622__auto___13357 = (0);
while(true){
if((i__7622__auto___13357 < len__7621__auto___13356)){
args13342.push((arguments[i__7622__auto___13357]));

var G__13358 = (i__7622__auto___13357 + (1));
i__7622__auto___13357 = G__13358;
continue;
} else {
}
break;
}

var G__13344 = args13342.length;
switch (G__13344) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13342.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__13337_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__6534__auto__ = cljs.core.contains_QMARK_(cljs.core.methods$(mm),cljs.core._dispatch_fn(mm).call(null,p1__13337_SHARP_));
if(and__6534__auto__){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__13337_SHARP_) : mm.call(null,p1__13337_SHARP_));
} else {
return and__6534__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__13338_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__13338_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__13339_SHARP_,p2__13340_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13339_SHARP_,retag,p2__13340_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec13345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13345 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta13346){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta13346 = meta13346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_13347,meta13346__$1){
var self__ = this;
var _13347__$1 = this;
return (new cljs.spec.t_cljs$spec13345(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta13346__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_13347){
var self__ = this;
var _13347__$1 = this;
return self__.meta13346;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.unform(pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__4423__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__13348){
var vec__13349 = p__13348;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__13349,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__13349,k,f,___$1,id,predx,dval,tag){
return (function (p1__13341_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__13341_SHARP_,k) : self__.tag.call(null,p1__13341_SHARP_,k));
});})(rmap__$1,p,vec__13349,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__7380__auto__ = self__.form;
return cljs.core._conj((function (){var x__7380__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__13349,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__13352){
var vec__13353 = p__13352;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13353,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mmvar) : cljs.core.deref.call(null,self__.mmvar))))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_multi_DASH_spec),(function (){var x__7380__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta13346], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec13345.cljs$lang$type = true;

cljs.spec.t_cljs$spec13345.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13345";

cljs.spec.t_cljs$spec13345.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13345");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec13345 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec13345(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta13346){
return (new cljs.spec.t_cljs$spec13345(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta13346));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec13345(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args13360 = [];
var len__7621__auto___13366 = arguments.length;
var i__7622__auto___13367 = (0);
while(true){
if((i__7622__auto___13367 < len__7621__auto___13366)){
args13360.push((arguments[i__7622__auto___13367]));

var G__13368 = (i__7622__auto___13367 + (1));
i__7622__auto___13367 = G__13368;
continue;
} else {
}
break;
}

var G__13362 = args13360.length;
switch (G__13362) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13360.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec13363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13363 = (function (forms,preds,gfn,meta13364){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta13364 = meta13364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13365,meta13364__$1){
var self__ = this;
var _13365__$1 = this;
return (new cljs.spec.t_cljs$spec13363(self__.forms,self__.preds,self__.gfn,meta13364__$1));
});

cljs.spec.t_cljs$spec13363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13365){
var self__ = this;
var _13365__$1 = this;
return self__.meta13364;
});

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),v,(self__.forms.cljs$core$IFn$_invoke$arity$1 ? self__.forms.cljs$core$IFn$_invoke$arity$1(i) : self__.forms.call(null,i)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cv)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__13370 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__13371 = (i + (1));
ret = G__13370;
i = G__13371;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__13372 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__13373 = (i + (1));
ret = G__13372;
i = G__13373;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7380__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.array_seq([(function (){var x__7380__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec13363.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_tuple),self__.forms)));
});

cljs.spec.t_cljs$spec13363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta13364], null);
});

cljs.spec.t_cljs$spec13363.cljs$lang$type = true;

cljs.spec.t_cljs$spec13363.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13363";

cljs.spec.t_cljs$spec13363.cljs$lang$ctorPrWriter = (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13363");
});

cljs.spec.__GT_t_cljs$spec13363 = (function cljs$spec$__GT_t_cljs$spec13363(forms__$1,preds__$1,gfn__$1,meta13364){
return (new cljs.spec.t_cljs$spec13363(forms__$1,preds__$1,gfn__$1,meta13364));
});

}

return (new cljs.spec.t_cljs$spec13363(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x13375 = v;
x13375.cljs$core$IMapEntry$ = true;

x13375.cljs$core$IMapEntry$_key$arity$1 = ((function (x13375){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x13375))
;

x13375.cljs$core$IMapEntry$_val$arity$1 = ((function (x13375){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x13375))
;

return x13375;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count(preds))){
var pred = (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(i) : preds.call(null,i));
var ret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms,i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret)){
var G__13390 = (i + (1));
i = G__13390;
continue;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec13383 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13383 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta13384){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta13384 = meta13384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_13385,meta13384__$1){
var self__ = this;
var _13385__$1 = this;
return (new cljs.spec.t_cljs$spec13383(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta13384__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_13385){
var self__ = this;
var _13385__$1 = this;
return self__.meta13384;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__13386){
var self__ = this;
var vec__13387 = p__13386;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13387,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13387,(1),null);
var ___$1 = this;
return cljs.spec.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$or_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'or'"], null)),cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta13384], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec13383.cljs$lang$type = true;

cljs.spec.t_cljs$spec13383.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13383";

cljs.spec.t_cljs$spec13383.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13383");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec13383 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec13383(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta13384){
return (new cljs.spec.t_cljs$spec13383(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta13384));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec13383(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__13417 = preds;
var vec__13419 = G__13417;
var seq__13420 = cljs.core.seq(vec__13419);
var first__13421 = cljs.core.first(seq__13420);
var seq__13420__$1 = cljs.core.next(seq__13420);
var pred = first__13421;
var preds__$1 = seq__13420__$1;
var G__13418 = forms;
var vec__13422 = G__13418;
var seq__13423 = cljs.core.seq(vec__13422);
var first__13424 = cljs.core.first(seq__13423);
var seq__13423__$1 = cljs.core.next(seq__13423);
var form = first__13424;
var forms__$1 = seq__13423__$1;
var ret__$1 = ret;
var G__13417__$1 = G__13417;
var G__13418__$1 = G__13418;
while(true){
var ret__$2 = ret__$1;
var vec__13425 = G__13417__$1;
var seq__13426 = cljs.core.seq(vec__13425);
var first__13427 = cljs.core.first(seq__13426);
var seq__13426__$1 = cljs.core.next(seq__13426);
var pred__$1 = first__13427;
var preds__$2 = seq__13426__$1;
var vec__13428 = G__13418__$1;
var seq__13429 = cljs.core.seq(vec__13428);
var first__13430 = cljs.core.first(seq__13429);
var seq__13429__$1 = cljs.core.next(seq__13429);
var form__$1 = first__13430;
var forms__$2 = seq__13429__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,nret)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__13431 = nret;
var G__13432 = preds__$2;
var G__13433 = forms__$2;
ret__$1 = G__13431;
G__13417__$1 = G__13432;
G__13418__$1 = G__13433;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__13460 = forms;
var vec__13462 = G__13460;
var seq__13463 = cljs.core.seq(vec__13462);
var first__13464 = cljs.core.first(seq__13463);
var seq__13463__$1 = cljs.core.next(seq__13463);
var form = first__13464;
var forms__$1 = seq__13463__$1;
var G__13461 = preds;
var vec__13465 = G__13461;
var seq__13466 = cljs.core.seq(vec__13465);
var first__13467 = cljs.core.first(seq__13466);
var seq__13466__$1 = cljs.core.next(seq__13466);
var pred = first__13467;
var preds__$1 = seq__13466__$1;
var ret__$1 = ret;
var G__13460__$1 = G__13460;
var G__13461__$1 = G__13461;
while(true){
var ret__$2 = ret__$1;
var vec__13468 = G__13460__$1;
var seq__13469 = cljs.core.seq(vec__13468);
var first__13470 = cljs.core.first(seq__13469);
var seq__13469__$1 = cljs.core.next(seq__13469);
var form__$1 = first__13470;
var forms__$2 = seq__13469__$1;
var vec__13471 = G__13461__$1;
var seq__13472 = cljs.core.seq(vec__13471);
var first__13473 = cljs.core.first(seq__13472);
var seq__13472__$1 = cljs.core.next(seq__13472);
var pred__$1 = first__13473;
var preds__$2 = seq__13472__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,nret)){
var G__13474 = nret;
var G__13475 = forms__$2;
var G__13476 = preds__$2;
ret__$1 = G__13474;
G__13460__$1 = G__13475;
G__13461__$1 = G__13476;
continue;
} else {
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec13482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13482 = (function (and_spec_impl,forms,preds,gfn,meta13483){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta13483 = meta13483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13484,meta13483__$1){
var self__ = this;
var _13484__$1 = this;
return (new cljs.spec.t_cljs$spec13482(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta13483__$1));
});

cljs.spec.t_cljs$spec13482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13484){
var self__ = this;
var _13484__$1 = this;
return self__.meta13483;
});

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds(x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__13478_SHARP_,p2__13477_SHARP_){
return cljs.spec.unform(p2__13477_SHARP_,p1__13478_SHARP_);
});})(___$1))
,x,cljs.core.reverse(self__.preds));
});

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec13482.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_and),self__.forms)));
});

cljs.spec.t_cljs$spec13482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$and_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'and'"], null)),cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta13483], null);
});

cljs.spec.t_cljs$spec13482.cljs$lang$type = true;

cljs.spec.t_cljs$spec13482.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13482";

cljs.spec.t_cljs$spec13482.cljs$lang$ctorPrWriter = (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13482");
});

cljs.spec.__GT_t_cljs$spec13482 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec13482(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta13483){
return (new cljs.spec.t_cljs$spec13482(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta13483));
});

}

return (new cljs.spec.t_cljs$spec13482(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args13487 = [];
var len__7621__auto___13497 = arguments.length;
var i__7622__auto___13498 = (0);
while(true){
if((i__7622__auto___13498 < len__7621__auto___13497)){
args13487.push((arguments[i__7622__auto___13498]));

var G__13499 = (i__7622__auto___13498 + (1));
i__7622__auto___13498 = G__13499;
continue;
} else {
}
break;
}

var G__13489 = args13487.length;
switch (G__13489) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13487.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__13490,gfn){
var map__13491 = p__13490;
var map__13491__$1 = ((((!((map__13491 == null)))?((((map__13491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13491):map__13491);
var opts = map__13491__$1;
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13491__$1,cljs.core.cst$kw$count);
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13491__$1,cljs.core.cst$kw$max_DASH_count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13491__$1,cljs.core.cst$kw$min_DASH_count);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13491__$1,cljs.core.cst$kw$distinct);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,cljs.core.cst$kw$gen_DASH_into,cljs.core.PersistentVector.EMPTY);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13491__$1,cljs.core.cst$kw$cljs$spec_SLASH_kfn);
var check_QMARK_ = ((function (map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__13485_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,p1__13485_SHARP_);
});})(map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;
var kfn__$1 = (function (){var or__6546__auto__ = kfn;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return ((function (or__6546__auto__,check_QMARK_,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
return i;
});
;})(or__6546__auto__,check_QMARK_,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
}
})();
if(typeof cljs.spec.t_cljs$spec13493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13493 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,p__13490,map__13491,distinct,kfn,gen_into,count,min_count,opts,meta13494){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.p__13490 = p__13490;
this.map__13491 = map__13491;
this.distinct = distinct;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.meta13494 = meta13494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_13495,meta13494__$1){
var self__ = this;
var _13495__$1 = this;
return (new cljs.spec.t_cljs$spec13493(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.p__13490,self__.map__13491,self__.distinct,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,meta13494__$1));
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_13495){
var self__ = this;
var _13495__$1 = this;
return self__.meta13494;
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__6546__auto__ = !(cljs.core.seqable_QMARK_(x));
if(or__6546__auto__){
return or__6546__auto__;
} else {
var or__6546__auto____$1 = (function (){var and__6534__auto__ = self__.distinct;
if(cljs.core.truth_(and__6534__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__6534__auto__;
}
})();
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
var or__6546__auto____$2 = (function (){var and__6534__auto__ = self__.count;
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.count,cljs.core.bounded_count((self__.count + (1)),x));
} else {
return and__6534__auto__;
}
})();
if(cljs.core.truth_(or__6546__auto____$2)){
return or__6546__auto____$2;
} else {
var and__6534__auto__ = (function (){var or__6546__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__6546__auto____$3)){
return or__6546__auto____$3;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__6534__auto__)){
return !((((function (){var or__6546__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__6546__auto____$3)){
return or__6546__auto____$3;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__6546__auto____$3 = self__.max_count;
if(cljs.core.truth_(or__6546__auto____$3)){
return or__6546__auto____$3;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__6534__auto__;
}
}
}
}
})())){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__6877__auto__ = (1);
var y__6878__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__6877__auto__ > y__6878__auto__) ? x__6877__auto__ : y__6878__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_((function (){var G__13496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i);
return (self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13496) : self__.check_QMARK_.call(null,G__13496));
})())){
var G__13501 = (i + step);
i = G__13501;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
} else {
var or__6546__auto__ = (function (){var and__6534__auto__ = cljs.core.every_QMARK_(self__.check_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__6534__auto__){
return x;
} else {
return and__6534__auto__;
}
})();
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}

}
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.seqable_QMARK_(x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$seqable_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__6534__auto__ = self__.distinct;
if(cljs.core.truth_(and__6534__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__6534__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__6534__auto__ = self__.count;
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.count,cljs.core.bounded_count(self__.count,x));
} else {
return and__6534__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7380__auto__ = self__.count;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.array_seq([(function (){var x__7380__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__6534__auto__ = (function (){var or__6546__auto__ = self__.min_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__6534__auto__)){
return !((((function (){var or__6546__auto__ = self__.min_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__6546__auto__ = self__.max_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__6534__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__7380__auto__ = (function (){var or__6546__auto__ = self__.min_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.array_seq([(function (){var x__7380__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = (function (){var or__6546__auto__ = self__.max_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.core.cst$sym$js_SLASH_Number$MAX_SAFE_INTEGER;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.spec._STAR_coll_error_limit_STAR_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1,check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(___$1,check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));

}
}
}
}
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var init = cljs.core.empty(self__.gen_into);
var pgen = cljs.spec.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (init,pgen,___$1,check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__13486_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__13486_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__13486_SHARP_);
}
});})(init,pgen,___$1,check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__6546__auto__ = self__.min_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__6546__auto__ = self__.max_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var x__6877__auto__ = self__.gen_max;
var y__6878__auto__ = ((2) * (function (){var or__6546__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
return (0);
}
})());
return ((x__6877__auto__ > y__6878__auto__) ? x__6877__auto__ : y__6878__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__6546__auto__ = self__.min_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(function (){var or__6546__auto__ = self__.min_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return (0);
}
})(),(function (){var or__6546__auto__ = self__.max_count;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var x__6877__auto__ = self__.gen_max;
var y__6878__auto__ = ((2) * (function (){var or__6546__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
return (0);
}
})());
return ((x__6877__auto__ > y__6878__auto__) ? x__6877__auto__ : y__6878__auto__);
}
})()], 0)):cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(0),self__.gen_max], 0))
)))], 0));
}
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_every),(function (){var x__7380__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.getBasis = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$p__13490,cljs.core.cst$sym$map__13491,cljs.core.cst$sym$distinct,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta13494], null);
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec13493.cljs$lang$type = true;

cljs.spec.t_cljs$spec13493.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13493";

cljs.spec.t_cljs$spec13493.cljs$lang$ctorPrWriter = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13493");
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.__GT_t_cljs$spec13493 = ((function (check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function cljs$spec$__GT_t_cljs$spec13493(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__13490__$1,map__13491__$2,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,meta13494){
return (new cljs.spec.t_cljs$spec13493(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__13490__$1,map__13491__$2,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,meta13494));
});})(check_QMARK_,kfn__$1,map__13491,map__13491__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

}

return (new cljs.spec.t_cljs$spec13493(form,max_count,check_QMARK_,gfn,gen_max,pred,p__13490,map__13491__$1,distinct,kfn__$1,gen_into,count,min_count,opts,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__13502){
var map__13505 = p__13502;
var map__13505__$1 = ((((!((map__13505 == null)))?((((map__13505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13505):map__13505);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13505__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__13507){
var map__13520 = p__13507;
var map__13520__$1 = ((((!((map__13520 == null)))?((((map__13520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13520):map__13520);
var vec__13521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,cljs.core.cst$kw$ps);
var seq__13522 = cljs.core.seq(vec__13521);
var first__13523 = cljs.core.first(seq__13522);
var seq__13522__$1 = cljs.core.next(seq__13522);
var p1 = first__13523;
var pr = seq__13522__$1;
var ps = vec__13521;
var vec__13524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,cljs.core.cst$kw$ks);
var seq__13525 = cljs.core.seq(vec__13524);
var first__13526 = cljs.core.first(seq__13525);
var seq__13525__$1 = cljs.core.next(seq__13525);
var k1 = first__13526;
var kr = seq__13525__$1;
var ks = vec__13524;
var vec__13527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,cljs.core.cst$kw$forms);
var seq__13528 = cljs.core.seq(vec__13527);
var first__13529 = cljs.core.first(seq__13528);
var seq__13528__$1 = cljs.core.next(seq__13528);
var f1 = first__13529;
var fr = seq__13528__$1;
var forms = vec__13527;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null));
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__7628__auto__ = [];
var len__7621__auto___13532 = arguments.length;
var i__7622__auto___13533 = (0);
while(true){
if((i__7622__auto___13533 < len__7621__auto___13532)){
args__7628__auto__.push((arguments[i__7622__auto___13533]));

var G__13534 = (i__7622__auto___13533 + (1));
i__7622__auto___13533 = G__13534;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq13531){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13531));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.array_seq([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.array_seq([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7380__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__STAR_),(function (){var x__7380__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__6546__auto__ = ks;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13535_SHARP_){
var G__13538 = cljs.core.first(p1__13535_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13538) : f.call(null,G__13538));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__6546__auto__ = cljs.core.seq(ks);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6546__auto__ = cljs.core.seq(forms);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__13536_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__13536_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__13548 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__13551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(0),null);
var seq__13552 = cljs.core.seq(vec__13551);
var first__13553 = cljs.core.first(seq__13552);
var seq__13552__$1 = cljs.core.next(seq__13552);
var p1 = first__13553;
var pr = seq__13552__$1;
var ps__$1 = vec__13551;
var vec__13554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13554,(0),null);
var ks__$1 = vec__13554;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13548,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.spec.accept(cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__7628__auto__ = [];
var len__7621__auto___13558 = arguments.length;
var i__7622__auto___13559 = (0);
while(true){
if((i__7622__auto___13559 < len__7621__auto___13558)){
args__7628__auto__.push((arguments[i__7622__auto___13559]));

var G__13560 = (i__7622__auto___13559 + (1));
i__7622__auto___13559 = G__13560;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_(ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq13557){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13557));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__6534__auto__ = p1;
if(cljs.core.truth_(and__6534__auto__)){
return p2;
} else {
return and__6534__auto__;
}
})())){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__6546__auto__ = p1;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept(cljs.core.cst$kw$cljs$spec_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__6546__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec_SLASH_nil);
if(or__6546__auto__){
return or__6546__auto__;
} else {
var or__6546__auto____$1 = (function (){var and__6534__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_pcat,null,cljs.core.cst$kw$cljs$spec_SLASH_rep,null], null), null).call(null,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(p1)));
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__6534__auto__;
}
})();
if(cljs.core.truth_(or__6546__auto____$1)){
return or__6546__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__13564 = cljs.spec.reg_resolve_BANG_(p);
var map__13564__$1 = ((((!((map__13564 == null)))?((((map__13564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13564):map__13564);
var p__$1 = map__13564__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$forms);
var G__13566 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13566)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13566)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13566)){
var and__6534__auto__ = cljs$spec$accept_nil_QMARK_(p1);
if(cljs.core.truth_(and__6534__auto__)){
var or__6546__auto__ = cljs.spec.noret_QMARK_(p1,(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)));
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
var ret = cljs.spec.and_preds((cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
}
} else {
return and__6534__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13566)){
var or__6546__auto__ = (p1 === p2);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs$spec$accept_nil_QMARK_(p1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13566)){
return cljs.core.every_QMARK_(cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13566)){
return cljs.core.some(cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__13585 = cljs.spec.reg_resolve_BANG_(p);
var map__13585__$1 = ((((!((map__13585 == null)))?((((map__13585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13585):map__13585);
var p__$1 = map__13585__$1;
var vec__13586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13585__$1,cljs.core.cst$kw$ps);
var seq__13587 = cljs.core.seq(vec__13586);
var first__13588 = cljs.core.first(seq__13587);
var seq__13587__$1 = cljs.core.next(seq__13587);
var p0 = first__13588;
var pr = seq__13587__$1;
var ps = vec__13586;
var vec__13589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13585__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589,(0),null);
var ks = vec__13589;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13585__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13585__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13585__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13585__$1,cljs.core.cst$kw$forms);
var G__13593 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13593)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13593)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13593)){
var pret = cljs$spec$preturn(p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec_SLASH_nil;
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13593)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13593)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13593)){
var vec__13594 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__13597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13594,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597,(0),null);
var vec__13600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13594,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13600,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec_SLASH_nil:cljs$spec$preturn(p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__13623 = cljs.spec.reg_resolve_BANG_(p);
var map__13623__$1 = ((((!((map__13623 == null)))?((((map__13623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13623):map__13623);
var p__$1 = map__13623__$1;
var vec__13624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$ps);
var seq__13625 = cljs.core.seq(vec__13624);
var first__13626 = cljs.core.first(seq__13625);
var seq__13625__$1 = cljs.core.next(seq__13625);
var p0 = first__13626;
var pr = seq__13625__$1;
var ps = vec__13624;
var vec__13627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(0),null);
var ks = vec__13627;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__13631 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13631)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13631)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13631)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__13604_SHARP_,p2__13603_SHARP_){
return cljs.spec.unform(p2__13603_SHARP_,p1__13604_SHARP_);
});})(G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return cljs$spec$op_unform(p1,px);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13631)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__13605_SHARP_){
return cljs$spec$op_unform(p1,p1__13605_SHARP_);
});})(G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13631)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__13606_SHARP_){
return cljs$spec$op_unform(p0,p1__13606_SHARP_);
});})(G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
return cljs$spec$op_unform((kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1));
} else {
return null;
}
});})(G__13631,map__13623,map__13623__$1,p__$1,vec__13624,seq__13625,first__13626,seq__13625__$1,p0,pr,ps,vec__13627,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13631)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p0,x)], null);
} else {
var vec__13632 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13632,(1),null);
return cljs$spec$op_unform((kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1)),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__13638 = cljs.spec.reg_resolve_BANG_(p);
var map__13638__$1 = ((((!((map__13638 == null)))?((((map__13638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13638):map__13638);
var p__$1 = map__13638__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13638__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13638__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13638__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__13638,map__13638__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__13638,map__13638__$1,p__$1,op,ps,splice))
;
var G__13640 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13640)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13640)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13640)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13640)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13640)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13640)){
return prop();
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__13655 = cljs.spec.reg_resolve_BANG_(p);
var map__13655__$1 = ((((!((map__13655 == null)))?((((map__13655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13655):map__13655);
var p__$1 = map__13655__$1;
var vec__13656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$ps);
var seq__13657 = cljs.core.seq(vec__13656);
var first__13658 = cljs.core.first(seq__13657);
var seq__13657__$1 = cljs.core.next(seq__13657);
var p0 = first__13658;
var pr = seq__13657__$1;
var ps = vec__13656;
var vec__13659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$ks);
var seq__13660 = cljs.core.seq(vec__13659);
var first__13661 = cljs.core.first(seq__13660);
var seq__13660__$1 = cljs.core.next(seq__13660);
var k0 = first__13661;
var kr = seq__13660__$1;
var ks = vec__13659;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13655__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__13663 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13663)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13663)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret__$1)){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13663)){
var temp__4425__auto__ = cljs$spec$deriv(p1,x);
if(cljs.core.truth_(temp__4425__auto__)){
var p1__$1 = temp__4425__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds(cljs.spec.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret__$1,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return cljs.spec.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13663)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons(cljs$spec$deriv(p0,x),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?cljs$spec$deriv(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.add_ret(p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13663)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13663,map__13655,map__13655__$1,p__$1,vec__13656,seq__13657,first__13658,seq__13657__$1,p0,pr,ps,vec__13659,seq__13660,first__13661,seq__13660__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__13641_SHARP_){
return cljs$spec$deriv(p1__13641_SHARP_,x);
});})(G__13663,map__13655,map__13655__$1,p__$1,vec__13656,seq__13657,first__13658,seq__13657__$1,p0,pr,ps,vec__13659,seq__13660,first__13661,seq__13660__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13663)){
return cljs.spec.alt2(cljs.spec.rep_STAR_(cljs$spec$deriv(p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?cljs$spec$deriv(cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__13667 = cljs.spec.reg_resolve_BANG_(p);
var map__13667__$1 = ((((!((map__13667 == null)))?((((map__13667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13667):map__13667);
var p__$1 = map__13667__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13667__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__13669 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13669)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13669)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13669)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$clojure$spec_SLASH__AMPERSAND_,cljs$spec$op_describe(p1),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13669)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__7380__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__6546__auto__ = cljs.core.seq(ks);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),(function (){var or__6546__auto__ = cljs.core.seq(forms);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13669)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__7380__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13669)){
var x__7380__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec_SLASH__STAR_);
return cljs.core._conj((function (){var x__7380__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__13701 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(0),null);
var input__$1 = vec__13701;
var map__13704 = cljs.spec.reg_resolve_BANG_(p);
var map__13704__$1 = ((((!((map__13704 == null)))?((((map__13704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13704):map__13704);
var p__$1 = map__13704__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13704__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__4423__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__13701,x,input__$1,map__13704,map__13704__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,cljs.spec.abbrev(form__$1),cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], true, false);
});})(vec__13701,x,input__$1,map__13704,map__13704__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__13706 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13706)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13706)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13706)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))){
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1));
} else {
return insufficient(path,cljs.spec.op_describe(p1));
}
} else {
var temp__4423__auto__ = cljs.spec.deriv(p1,x);
if(cljs.core.truth_(temp__4423__auto__)){
var p1__$1 = temp__4423__auto__;
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1__$1));
} else {
return cljs$spec$op_explain(cljs.spec.op_describe(p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13706)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__6546__auto__ = cljs.core.seq(ks);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6546__auto__ = cljs.core.seq(forms);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__13707 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__13706,vec__13701,x,input__$1,map__13704,map__13704__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__13710){
var vec__13711 = p__13710;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__13706,vec__13701,x,input__$1,map__13704,map__13704__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13707,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__6546__auto__ = form__$1;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return cljs$spec$op_explain(form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13706)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__13706,vec__13701,x,input__$1,map__13704,map__13704__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain((function (){var or__6546__auto__ = form__$1;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),via__$1,in$,input__$1);
});})(G__13706,vec__13701,x,input__$1,map__13704,map__13704__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__6546__auto__ = cljs.core.seq(ks);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6546__auto__ = cljs.core.seq(forms);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13706)){
return cljs$spec$op_explain((((p1 === p2))?forms:cljs.spec.op_describe(p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__13735 = cljs.spec.reg_resolve_BANG_(p);
var map__13735__$1 = ((((!((map__13735 == null)))?((((map__13735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13735):map__13735);
var p__$1 = map__13735__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$splice);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$ret);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__6534__auto__ = rmap__$1;
if(cljs.core.truth_(and__6534__auto__)){
var and__6534__auto____$1 = id;
if(cljs.core.truth_(and__6534__auto____$1)){
var and__6534__auto____$2 = k;
if(cljs.core.truth_(and__6534__auto____$2)){
return cljs.spec.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__6534__auto____$2;
}
} else {
return and__6534__auto____$1;
}
} else {
return and__6534__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__6546__auto__ = f__$1;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return p__$2;
}
})());
});})(map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__6546__auto__ = f__$1;
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__6546__auto__ = cljs.core.seq(ks__$1);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6546__auto__ = cljs.core.seq(forms__$1);
if(or__6546__auto__){
return or__6546__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__6546__auto__ = (function (){var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
var G__13738 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__13738)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13738)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__13739 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__13739)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13739)){
var temp__4425__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__13739)){
return cljs$spec$re_gen(p1,overrides,path,rmap__$1,cljs.spec.op_describe(p1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__13739)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__13739)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__13739)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__4425__auto__ = cljs$spec$re_gen(p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4425__auto__,G__13739,or__6546__auto__,map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__13714_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__13714_SHARP_);
});})(g,temp__4425__auto__,G__13739,or__6546__auto__,map__13735,map__13735__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__13740){
while(true){
var vec__13744 = p__13740;
var seq__13745 = cljs.core.seq(vec__13744);
var first__13746 = cljs.core.first(seq__13745);
var seq__13745__$1 = cljs.core.next(seq__13745);
var x = first__13746;
var xs = seq__13745__$1;
var data = vec__13744;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p))){
var ret = cljs.spec.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
var temp__4423__auto__ = cljs.spec.deriv(p,x);
if(cljs.core.truth_(temp__4423__auto__)){
var dp = temp__4423__auto__;
var G__13747 = dp;
var G__13748 = xs;
p = G__13747;
p__13740 = G__13748;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__13762 = input;
var vec__13763 = G__13762;
var seq__13764 = cljs.core.seq(vec__13763);
var first__13765 = cljs.core.first(seq__13764);
var seq__13764__$1 = cljs.core.next(seq__13764);
var x = first__13765;
var xs = seq__13764__$1;
var data = vec__13763;
var i = (0);
var p__$1 = p;
var G__13762__$1 = G__13762;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__13766 = G__13762__$1;
var seq__13767 = cljs.core.seq(vec__13766);
var first__13768 = cljs.core.first(seq__13767);
var seq__13767__$1 = cljs.core.next(seq__13767);
var x__$1 = first__13768;
var xs__$1 = seq__13767__$1;
var data__$1 = vec__13766;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4423__auto__ = cljs.spec.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var dp = temp__4423__auto__;
var G__13769 = dp;
var G__13770 = xs__$1;
var G__13771 = (i__$2 + (1));
p__$1 = G__13769;
G__13762__$1 = G__13770;
i__$1 = G__13771;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec_SLASH_pcat)){
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(re)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], true, false);
}
} else {
var or__6546__auto__ = cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(p__$2)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec13775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13775 = (function (regex_spec_impl,re,gfn,meta13776){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta13776 = meta13776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13777,meta13776__$1){
var self__ = this;
var _13777__$1 = this;
return (new cljs.spec.t_cljs$spec13775(self__.regex_spec_impl,self__.re,self__.gfn,meta13776__$1));
});

cljs.spec.t_cljs$spec13775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13777){
var self__ = this;
var _13777__$1 = this;
return self__.meta13776;
});

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform(self__.re,x);
});

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : self__.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.t_cljs$spec13775.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec13775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$regex_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec' with a regex op argument"], null)),cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta13776], null);
});

cljs.spec.t_cljs$spec13775.cljs$lang$type = true;

cljs.spec.t_cljs$spec13775.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13775";

cljs.spec.t_cljs$spec13775.cljs$lang$ctorPrWriter = (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13775");
});

cljs.spec.__GT_t_cljs$spec13775 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec13775(regex_spec_impl__$1,re__$1,gfn__$1,meta13776){
return (new cljs.spec.t_cljs$spec13775(regex_spec_impl__$1,re__$1,gfn__$1,meta13776));
});

}

return (new cljs.spec.t_cljs$spec13775(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__6534__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cret,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
if(and__6534__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__6534__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__13778_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__13778_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__4423__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__13782 = temp__4423__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13782,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if(typeof cljs.spec.t_cljs$spec13791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec13791 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta13792){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta13792 = meta13792;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_13793,meta13792__$1){
var self__ = this;
var _13793__$1 = this;
return (new cljs.spec.t_cljs$spec13791(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta13792__$1));
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_13793){
var self__ = this;
var _13793__$1 = this;
return self__.meta13792;
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.validate_fn(f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e13794){if((e13794 instanceof Error)){
var t = e13794;
return t;
} else {
throw e13794;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
var cret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cret)){
return cljs.spec.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform(self__.argspec,args);
return cljs.spec.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$4,specs){
return (function() { 
var G__13797__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13795_13798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13796_13799 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13795_13798,_STAR_print_fn_STAR_13796_13799,sb__7532__auto__,___$4,specs){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_13795_13798,_STAR_print_fn_STAR_13796_13799,sb__7532__auto__,___$4,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13796_13799;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13795_13798;
}
return [cljs.core.str(sb__7532__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(self__.retspec));
};
var G__13797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13800__i = 0, G__13800__a = new Array(arguments.length -  0);
while (G__13800__i < G__13800__a.length) {G__13800__a[G__13800__i] = arguments[G__13800__i + 0]; ++G__13800__i;}
  args = new cljs.core.IndexedSeq(G__13800__a,0);
} 
return G__13797__delegate.call(this,args);};
G__13797.cljs$lang$maxFixedArity = 0;
G__13797.cljs$lang$applyTo = (function (arglist__13801){
var args = cljs.core.seq(arglist__13801);
return G__13797__delegate(args);
});
G__13797.cljs$core$IFn$_invoke$arity$variadic = G__13797__delegate;
return G__13797;
})()
;})(___$4,specs))
], 0));
}
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? self__.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.t_cljs$spec13791.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.array_seq([(function (){var x__7380__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__7380__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__7380__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7380__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.t_cljs$spec13791.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fspec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'fspec'"], null)),cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta13792], null);
});})(specs))
;

cljs.spec.t_cljs$spec13791.cljs$lang$type = true;

cljs.spec.t_cljs$spec13791.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13791";

cljs.spec.t_cljs$spec13791.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write(writer__7153__auto__,"cljs.spec/t_cljs$spec13791");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec13791 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec13791(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13792){
return (new cljs.spec.t_cljs$spec13791(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13792));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec13791(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_any,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_constantly,true),cljs.core.cst$kw$gen,cljs.core.cst$sym$cljs$spec$impl$gen_SLASH_any),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_constantly,true),cljs.core.constantly(true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__13802_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__13802_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__13802_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__13803_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__13803_SHARP_))),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__13802_SHARP_], null),cljs.core.list(cljs.core.cst$sym$zipmap,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__13802_SHARP_),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__13802_SHARP_))),(function (p1__13802_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_k,p1__13802_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_v,p1__13802_SHARP_));
}),null,true,(function (p1__13803_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13804){
var vec__13805 = p__13804;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,k,cljs.core.cst$kw$cljs$spec_SLASH_v,v], null);
}),p1__13803_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args13809 = [];
var len__7621__auto___13812 = arguments.length;
var i__7622__auto___13813 = (0);
while(true){
if((i__7622__auto___13813 < len__7621__auto___13812)){
args13809.push((arguments[i__7622__auto___13813]));

var G__13814 = (i__7622__auto___13813 + (1));
i__7622__auto___13813 = G__13814;
continue;
} else {
}
break;
}

var G__13811 = args13809.length;
switch (G__13811) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13809.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13808_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13808_SHARP_,cljs.spec.conform(spec,p1__13808_SHARP_)],null));
}),cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__13816_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,p1__13816_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_(coll)) && (cljs.core.every_QMARK_(check_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty(init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (init){
return (function (p1__13817_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__13817_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__13817_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(pred)], 0))], 0));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__6534__auto__ = cljs.core.inst_QMARK_(inst);
if(and__6534__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__6534__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__6534__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__6534__auto__)){
return val.lessThan(end);
} else {
return and__6534__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__6534__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__6534__auto__)){
return val.lessThan(end);
} else {
return and__6534__auto__;
}
} else {
return false;

}
}
}
});
