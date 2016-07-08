# rum


[rum](https://github.com/tonsky/rum)


edit `build.boot`

```clojure

[rum "0.10.4"]

```

deps:
  cljsjs/react 15.2.0-0
  cljsjs/react-dom 15.2.0-0
  sablono 0.7.2


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


	modified:   src/site/core.clj


Browser console
https://developer.chrome.com/devtools/docs/shortcuts

github
https://github.com/binaryage/dirac

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-app-launcher-info-dialog
