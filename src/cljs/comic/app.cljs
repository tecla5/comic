(ns comic.app
  ;(:require-macros [frontend.macro :refer [foobar]])
  (:require [rum.core :as rum]
            [rum.mdl  :as mdl]
            [cljs.reader :as reader]
            [dirac.runtime]
            [comic.states :as states]))
(dirac.runtime/install!)

(enable-console-print!)

;; RUM application state
;; Defonce used to that the state is kept between reloads
(defonce app-state (atom {:y 2016}))
;(defonce app-state (atom year))


(defn el [id] (.getElementById js/document id))


(defn foo-cljc [x]
  (str "Hello from cljs " x "!")) ;? (:clj "clj" :cljs "cljs") " " x "!"))


(rum/defc app < rum/reactive  [] ;data-table
  (js/console.log "home")
  [:div
   [:h1 (foo-cljc (:y @app-state))] ;(foo-cljc (:y @app-state))]
   [:div.btn-toolbar
    (mdl/button {:mdl [:fab :colored :ripple] :on-click #(swap! app-state update :y inc) }    (mdl/icon "add"))
    (mdl/button {:mdl [:fab :colored :ripple] :on-click #(swap! app-state update :y dec) }    (mdl/icon "remove"))
    [:button.btn.btn-default
     {:type "button"
      :on-click #(js/console.log @app-state)}
     "Console.log"]]])



;;
;; Put the app/game in here
;;
(rum/defc app-container < rum/reactive [data]
  (js/console.log data)
 [:div#box
;   (for [{:keys [ permalink short-filename date-created]} data] ; permalink
;     (.log js/console "here" permalink short-filename date-created)
;     [:article {:key short-filename :itemprop "blogPost" :itemscope "" :itemtype "http://schema.org/BlogPosting"}
;      [:h3
;       ;[:span date-published]; datestr
;       " "
;       [:a.title {:href short-filename} ;permalink
;        name]]])

  [:h1 (:title (rum/react app-state))]
  (app)])





;; edn definition
(defn init []
  (js/console.log "Starting the app")
  (if-let [edn (.-edn js/window)]
    (rum/mount (app-container (reader/read-string edn)) (el "container")))
    ;(js/console.log (cljs.reader/read-string edn)))
  ;(println (read-string))) ;(slurp "js/data.edn"))))
  ;(js/console.log "edn:" edn)
  ;(index/add-numbers))
  ;(.log js/console states/set-data))
  ;(.log js/console states/mystates)
  (.log js/console states/sinexport)
  (.log js/console (states/sinexport)))
  ;(.log js/console states/data))

;(defn start! []
;  (js/console.log "Starting the app")
;  (r/defc home [main] (js/document.getElementById "app")))

;; When this namespace is (re)loaded the Reagent app is mounted to DOM
;(start!)

;; Macro test
;(foobar :abc 3)

;; Example of interop call to plain JS in src/cljs/foo.js
;(js/foo)
