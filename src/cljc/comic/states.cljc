(ns comic.states
  ;(:require-macros [frontend.macro :refer [foobar]])
  (:require [rum.core :as rum]
            [rum.mdl  :as mdl]))

(def data 1)

;defn ^:export mystates []  -> comic$states$mystates()
(defn ^:export mystates []
  (println data)
  data)

(defn sinexport []
    (println data)
    data)


; ^:export
(rum/defc set-data < rum/static [data]
  (println data))
  ;(def ^:export data))
  ;(spit "resources/js/data.edn" (with-out-str (pr data))))
