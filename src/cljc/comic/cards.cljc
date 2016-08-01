(ns comic.cards
  (:require
   [rum.core :as rum]
   [rum.mdl  :as mdl]))
   ;[rum.mdl.demo :as demo]))

(defonce *typebox (atom ""))

(defn intro
  ([title]
   [:.intro [:h3 title]])
  ([title text]
   [:.intro [:h3 title] [:p text]]))

(rum/defc section [& contents]
    (mdl/grid
     {:class ["demo" "example"]
      :mdl   [:color-text--grey-600]}
     (apply mdl/cell {:mdl [:12]} contents)))

(rum/defc typebox < rum/reactive [ref]
  (mdl/card
   {:mdl [:shadow--2dp]}
   (let [title (rum/react ref)
         title (if (seq title) title "TypeBox")]
     (mdl/card-title title))
   (mdl/card-text
    "Mauris sagittis pellentesque lacus eleifend lacinia...")
   (mdl/card-action
    {:mdl [:border]}
    (mdl/textfield
     (mdl/textfield-input
      {:type "text" :id "typebox-input"
       :value @ref
       :on-change #(reset! ref (.. % -target -value))})
     (mdl/textfield-label {:for "typebox-input"} "Type here...")))
   (mdl/card-menu
    (mdl/button {:mdl [:icon :ripple]} (mdl/icon "share")))))

(rum/defc cards
  []
  (section
   (intro "Cards")
   (mdl/card
    {:mdl [:shadow--2dp]}
    (mdl/card-title "Welcome")
    (mdl/card-text
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Mauris sagittis pellentesque lacus eleifend lacinia...")
    (mdl/card-action
     {:mdl [:border]}
     (mdl/button "Get Started"))
    (mdl/card-menu
     (mdl/button {:mdl [:icon :ripple]} (mdl/icon "share"))))
   (typebox *typebox)))
