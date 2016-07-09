# Cljs task

based on [tenzing](https://github.com/martinklepsch/tenzing) was added clojurescript to the blog.


## clojurescript

[ClojureScript](https://github.com/clojure/clojurescript)
is a compiler for Clojure that targets JavaScript. It is designed to emit JavaScript code which is compatible with the advanced compilation mode of the Google Closure optimizing compiler.



## Adding the ClojureScript app


creating the file `cljs/comic/app.cljs` that contain the our app with clojurescript.
```clojure
 (defn init []
   (let [c (.. js/document (createElement "DIV"))]
     (aset c "innerHTML" "<p>i'm dynamically created, yes :)</p>")
     (.. js/document (getElementById "container") (appendChild c))))
```


adding id container and script reference to `site/core.clj` file
```clojure
     [:div {:style "background-color: blue"}
         [:h2 "comic-app"]
         [:div {:id "container"}]
         (include-js "js/app.js")]]))
```


## Configuration for compile and ClojureScript browser REPL on boot


### boot-cljs task

[boot-cljs](https://github.com/adzerk-oss/boot-cljs)
 Boot task to compile ClojureScript applications.

adding config file `app.cljs.edn`
```clojure
{:require  [comic.app]
 :init-fns [comic.app/init]
 :compiler-options {:asset-path "js/app.out"}}
```

### boot-reload task

[boot-reload](https://github.com/adzerk-oss/boot-reload) is a boot task to automatically reload resources in the browser when files in the project change. Communication with the client is via websockets.

### boot-cljs-repl task
[boot-cljs-repl](https://github.com/adzerk-oss/boot-cljs-repl) is a boot task providing a ClojureScript browser REPL via [Weasel](https://github.com/tomjakubowski/weasel) and [Piggieback](https://github.com/cemerick/piggieback).
and dependant also [tool.nrepl](https://github.com/clojure/tools.nrepl)

- Weasel uses WebSockets to communicate between a ClojureScript REPL, which is typically hosted on nREPL using piggieback, and an environment which can execute compiled ClojureScript, which can be a web browser or any JavaScript environment that supports the WebSocket APIs.

- Piggieback is nREPL middleware that enables the use of a ClojureScript REPL on top of an nREPL session.

on browser js console:
![screenshot from 2016-07-08 16 56 23](https://cloud.githubusercontent.com/assets/3462917/16707698/34038524-45d8-11e6-9daf-b0858d2da7d6.png)


result on the app:
  ![screenshot from 2016-07-08 16 54 44](https://cloud.githubusercontent.com/assets/3462917/16707673/3628fb28-45d7-11e6-9917-7ceb091a3060.png)

___
