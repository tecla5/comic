(ns comic.styles
  (:require
            [garden
              [stylesheet :refer [rule]]
              [core]
              [def :refer :all];[defrule defstyles]
              [selectors :as s]
              [stylesheet :refer [rule at-media]]
              [color :as color]
              [units :as u :refer [px pt]]]))


;"Convenience macro equivalent to `(defn name bindings (list styles*))`."
(defmacro defstylesfn
  [name binding & styles]
  `(defn ~name ~binding (list ~@styles)))


(defstylesfn comic []
  [:div
   {:background-color "black"}])


;; ------------- boot css

(defstyles base
  (let [body (rule :body)]
    (body
     {:font-family "Helvetica Neue"
      :background-color "beige"
      :font-size   "16px"
      :line-height 1.5}))
  (let [div (rule :div.comic)]
    (div
     {:background-color "green"}))
  (let [div (rule :div.mdl-card__title)]
    (div
     {:background-color "red"})))


;; ------------
