(ns comic.app
  ;(:require-macros [frontend.macro :refer [foobar]])
  (:require [rum.core :as rum]))
            ;[common.hello :refer [foo-cljc]]
            ;[foo.bar]))


(enable-console-print!)

;; RUM application state
;; Defonce used to that the state is kept between reloads
(defonce app-state (atom {:y 2016}))

(defn el [id] (.getElementById js/document id))


(defn foo-cljc [x]
  (str "Hello from cljs " x "!")) ;? (:clj "clj" :cljs "cljs") " " x "!"))


(rum/defc app < rum/reactive  [] ;data-table
  (js/console.log "home")
  [:div
   [:h1 (foo-cljc (:y @app-state))] ;(foo-cljc (:y @app-state))]
   [:div.btn-toolbar
    [:button.btn.btn-danger
     {:type "button"
      :on-click #(swap! app-state update :y inc)} "+"]
    [:button.btn.btn-success
     {:type "button"
      :on-click #(swap! app-state update :y dec)} "-"]
    [:button.btn.btn-default
     {:type "button"
      :on-click #(js/console.log @app-state)}
     "Console.log"]]])



;;
;; Put the app/game in here
;;
(rum/defc app-container < rum/reactive []
 [:div#box
  [:h1 (:title (rum/react app-state))]
  (app)])


;; edn definition
(defn init []
  (js/console.log "Starting the app")
  (rum/mount (app-container) (el "container")))

;(defn start! []
;  (js/console.log "Starting the app")
;  (r/defc home [main] (js/document.getElementById "app")))

;; When this namespace is (re)loaded the Reagent app is mounted to DOM
;(start!)

;; Macro test
;(foobar :abc 3)

;; Example of interop call to plain JS in src/cljs/foo.js
;(js/foo)
