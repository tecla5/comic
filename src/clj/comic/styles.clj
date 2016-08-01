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

(defstyles base
  (let [body (rule :body)]
    (body
     {:font-family "Helvetica Neue"
      :background-color "beige"
      :font-size   "16px"
      :line-height 1.5}))
  (let [div (rule :div)]
    (div
     {:background-color "blue"})))




[:demo-card-square [:.mdl-card__title {:background-color "red"}]]
