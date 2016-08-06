// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14532){
var map__14557 = p__14532;
var map__14557__$1 = ((((!((map__14557 == null)))?((((map__14557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14557):map__14557);
var m = map__14557__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14557__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14557__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4425__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__14559_14581 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__14560_14582 = null;
var count__14561_14583 = (0);
var i__14562_14584 = (0);
while(true){
if((i__14562_14584 < count__14561_14583)){
var f_14585 = chunk__14560_14582.cljs$core$IIndexed$_nth$arity$2(null,i__14562_14584);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_14585], 0));

var G__14586 = seq__14559_14581;
var G__14587 = chunk__14560_14582;
var G__14588 = count__14561_14583;
var G__14589 = (i__14562_14584 + (1));
seq__14559_14581 = G__14586;
chunk__14560_14582 = G__14587;
count__14561_14583 = G__14588;
i__14562_14584 = G__14589;
continue;
} else {
var temp__4425__auto___14590 = cljs.core.seq(seq__14559_14581);
if(temp__4425__auto___14590){
var seq__14559_14591__$1 = temp__4425__auto___14590;
if(cljs.core.chunked_seq_QMARK_(seq__14559_14591__$1)){
var c__7357__auto___14592 = cljs.core.chunk_first(seq__14559_14591__$1);
var G__14593 = cljs.core.chunk_rest(seq__14559_14591__$1);
var G__14594 = c__7357__auto___14592;
var G__14595 = cljs.core.count(c__7357__auto___14592);
var G__14596 = (0);
seq__14559_14581 = G__14593;
chunk__14560_14582 = G__14594;
count__14561_14583 = G__14595;
i__14562_14584 = G__14596;
continue;
} else {
var f_14597 = cljs.core.first(seq__14559_14591__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_14597], 0));

var G__14598 = cljs.core.next(seq__14559_14591__$1);
var G__14599 = null;
var G__14600 = (0);
var G__14601 = (0);
seq__14559_14581 = G__14598;
chunk__14560_14582 = G__14599;
count__14561_14583 = G__14600;
i__14562_14584 = G__14601;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14602 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6546__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_14602], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_14602)))?cljs.core.second(arglists_14602):arglists_14602)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__14563_14603 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__14564_14604 = null;
var count__14565_14605 = (0);
var i__14566_14606 = (0);
while(true){
if((i__14566_14606 < count__14565_14605)){
var vec__14567_14607 = chunk__14564_14604.cljs$core$IIndexed$_nth$arity$2(null,i__14566_14606);
var name_14608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567_14607,(0),null);
var map__14570_14609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567_14607,(1),null);
var map__14570_14610__$1 = ((((!((map__14570_14609 == null)))?((((map__14570_14609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14570_14609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14570_14609):map__14570_14609);
var doc_14611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570_14610__$1,cljs.core.cst$kw$doc);
var arglists_14612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570_14610__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_14608], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_14612], 0));

if(cljs.core.truth_(doc_14611)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_14611], 0));
} else {
}

var G__14613 = seq__14563_14603;
var G__14614 = chunk__14564_14604;
var G__14615 = count__14565_14605;
var G__14616 = (i__14566_14606 + (1));
seq__14563_14603 = G__14613;
chunk__14564_14604 = G__14614;
count__14565_14605 = G__14615;
i__14566_14606 = G__14616;
continue;
} else {
var temp__4425__auto___14617 = cljs.core.seq(seq__14563_14603);
if(temp__4425__auto___14617){
var seq__14563_14618__$1 = temp__4425__auto___14617;
if(cljs.core.chunked_seq_QMARK_(seq__14563_14618__$1)){
var c__7357__auto___14619 = cljs.core.chunk_first(seq__14563_14618__$1);
var G__14620 = cljs.core.chunk_rest(seq__14563_14618__$1);
var G__14621 = c__7357__auto___14619;
var G__14622 = cljs.core.count(c__7357__auto___14619);
var G__14623 = (0);
seq__14563_14603 = G__14620;
chunk__14564_14604 = G__14621;
count__14565_14605 = G__14622;
i__14566_14606 = G__14623;
continue;
} else {
var vec__14572_14624 = cljs.core.first(seq__14563_14618__$1);
var name_14625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14572_14624,(0),null);
var map__14575_14626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14572_14624,(1),null);
var map__14575_14627__$1 = ((((!((map__14575_14626 == null)))?((((map__14575_14626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14575_14626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14575_14626):map__14575_14626);
var doc_14628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14575_14627__$1,cljs.core.cst$kw$doc);
var arglists_14629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14575_14627__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_14625], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_14629], 0));

if(cljs.core.truth_(doc_14628)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_14628], 0));
} else {
}

var G__14630 = cljs.core.next(seq__14563_14618__$1);
var G__14631 = null;
var G__14632 = (0);
var G__14633 = (0);
seq__14563_14603 = G__14630;
chunk__14564_14604 = G__14631;
count__14565_14605 = G__14632;
i__14566_14606 = G__14633;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4425__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4425__auto__)){
var fnspec = temp__4425__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__14577 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__14578 = null;
var count__14579 = (0);
var i__14580 = (0);
while(true){
if((i__14580 < count__14579)){
var role = chunk__14578.cljs$core$IIndexed$_nth$arity$2(null,i__14580);
var temp__4425__auto___14634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4425__auto___14634__$1)){
var spec_14635 = temp__4425__auto___14634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_14635)], 0));
} else {
}

var G__14636 = seq__14577;
var G__14637 = chunk__14578;
var G__14638 = count__14579;
var G__14639 = (i__14580 + (1));
seq__14577 = G__14636;
chunk__14578 = G__14637;
count__14579 = G__14638;
i__14580 = G__14639;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__14577);
if(temp__4425__auto____$1){
var seq__14577__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__14577__$1)){
var c__7357__auto__ = cljs.core.chunk_first(seq__14577__$1);
var G__14640 = cljs.core.chunk_rest(seq__14577__$1);
var G__14641 = c__7357__auto__;
var G__14642 = cljs.core.count(c__7357__auto__);
var G__14643 = (0);
seq__14577 = G__14640;
chunk__14578 = G__14641;
count__14579 = G__14642;
i__14580 = G__14643;
continue;
} else {
var role = cljs.core.first(seq__14577__$1);
var temp__4425__auto___14644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4425__auto___14644__$2)){
var spec_14645 = temp__4425__auto___14644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_14645)], 0));
} else {
}

var G__14646 = cljs.core.next(seq__14577__$1);
var G__14647 = null;
var G__14648 = (0);
var G__14649 = (0);
seq__14577 = G__14646;
chunk__14578 = G__14647;
count__14579 = G__14648;
i__14580 = G__14649;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
