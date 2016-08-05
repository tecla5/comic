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


(defn snippet-demos [demos]
   (conj
    (reduce conj [:.demos [:.padding]]
            (for [demo demos]
              [:.demo demo]))
    [:.padding]))

(defn snippet-captions [captions]
   (conj
    (reduce conj [:.captions [:.padding]]
            (for [caption captions]
              [:.caption caption]))
    [:.padding]))

(rum/defc snippet
   [{:keys [sources components captions]}]
   [:.snippet
    [:.header
     (snippet-demos components)
     (snippet-captions captions)]
    (reduce conj [:source] sources)])


(rum/defc section [& contents]
    (mdl/grid
     {:class ["comic"]
      :mdl   [:color-text--grey-600]}
     (apply mdl/cell {:mdl [:12]} contents)))


(rum/defc cards [cards]
  (section
   (intro "Cards")

   (snippet
    {:components
     [(mdl/list
       (for [{:keys [short-filename permalink]} cards]
         (mdl/li
           {:key (str short-filename) :icon "person" :content
             (mdl/card
              {:mdl [:shadow--2dp]}
              ;(mdl/card-text "some text")
              ;(mdl/card-title "Creation")
              (mdl/card-action
                {:mdl [:border]}
                [:a.title {:href permalink }
                  [:span.card-image__filename short-filename]
                  (mdl/button "Get Started")]))})))]

     :captions  ["Iteration"]})))
