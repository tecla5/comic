# rum

after reading for a while We decide to use RUM.

[rum](https://github.com/tonsky/rum)


RUM depends of:
  cljsjs/react
  cljsjs/react-dom
  sablono


## Configuration

edit `build.boot`

```clojure

[rum "0.10.4"]

```

we change the way to do the app and we add rum react.

edit `app.cljs`
```clojure
(ns comic.app
    (:require [rum.core :as rum]))

(enable-console-print!)

;; app state
(defonce app-state (atom {:y 2016}))

;; app
(rum/defc app < rum/reactive  [] ;data-table
  (js/console.log "app")
  ;; ... more code
)

;; app container
(rum/defc app-container < rum/reactive []
 [:div#box
  [:h1 (:title (rum/react app-state))]
  (app)])

;; util search
(defn el [id] (.getElementById js/document id))

;; init insert app container
;; function called by edn definition
(defn init []
  (js/console.log "Starting the app")
  (rum/mount (app-container) (el "container")))

```
