// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('comic.app');
goog.require('cljs.core');
comic.app.init = (function comic$app$init(){
var c = document.createElement("DIV");
(c["innerHTML"] = "<p>i'm dynamically created, yes :)</p>");

return document.getElementById("container").appendChild(c);
});
