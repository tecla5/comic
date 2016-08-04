(ns comic.cards
  (:require
   [rum.core :as rum]
   [rum.mdl  :as mdl]))
   ;[rum.mdl.demo :as demo]))

(defonce *typebox (atom ""))

; multi function
(defn intro
  ([title]
   [:.intro [:h3 title]]))

(rum/defc section [& contents]
    (mdl/grid
     {:class ["comic"]
      :mdl   [:color-text--grey-600]}
     (apply mdl/cell {:mdl [:12]} contents)))


(rum/defc cards
  []
  (section
   (intro "Cards")
   (mdl/card
    {:mdl [:shadow--2dp]}
    ;(mdl/card-text "some text")
    ;(mdl/card-title "Creation")
    (mdl/card-action
      {:mdl [:border]}
      [:span.card-image__filename "Upload " [:strong [:i "file.zip"]]]
      (mdl/button "Get Started")))))
