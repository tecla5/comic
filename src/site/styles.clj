(ns styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

(defstyles base
  (let [body (rule :body)]
    (body
     {:font-family "Helvetica Neue"
      :background-color "beige"
      :font-size   "16px"
      :line-height 1.5})))