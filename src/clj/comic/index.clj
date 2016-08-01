(ns comic.index
  ; : use or require
  ;[hiccup.core :refer [html]]
  (:use [hiccup.page :only (html5 include-css include-js)]
        [hiccup.core :refer [html]]
        [rum.core :as rum]))
        ;[comic.states :as states]))
  ;[blog.dates :refer [datestr]]
  ;[blog.views.common :as common])



;;rum/defc
(rum/defc set-data < rum/static [data]
  [:script {:type "text/javascript"} (str "var edn = '")
                       (pr-str data)"';"])

(rum/defc set-data2 < rum/static [data]
  ;(println data)
  ;(spit "resources/js/data.edn" (with-out-str (pr data))))
  (def ^:export data))
  ;(defn ^:export add-numbers [] (data))
  ;(clj->js  :a 1 :b [1 2 3] :c #{"d" true :e nil})
  ;(defonce app-state (atom {:y 2016}))
  ;(spit "resources/js/data.edn" (with-out-str (pr (sort-by :date-created posts))))


;:entry post
(defn render [{global :meta posts :entries}]
  ;(:name post)
  ;(spit "resources/js/data.edn" (with-out-str (pr posts)))
  ;(println (read-string (slurp "data.edn")))
  (def linkposts
    (mapv (defn x[post]
              {:short-filename (get post :short-filename)})
         (sort-by :date-created posts)))
  (println linkposts)

  (set-data2 linkposts)

;(defn render [{:keys [meta entries]}];[data]
  ;(println global); nil

  ;(println posts)
  ;{}:path rummdl.md, :slug , :content <hr/>, :permalink /index.html,  :original true,
  ;:full-path /home/.../comic/nbo/-grrwi1/rummdl.md, :parent-path ,  :short-filename rummdl,
  ;:extension md, :filename rummdl.md

;entries


  (html5
    {:lang "en"} ;; :itemtype "http://schema.org/Blog"
    ;(common/coll-head meta)
    [:head
       (include-css
                    "css/material.inc.css"
                    "//fonts.googleapis.com/icon?family=Material+Icons"
                    "//cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"
                    "css/garden.css")]
       ;;[:link {:rel "stylesheet" :href "css/material.inc.css"}]]
    [:body
      ;(common/header meta)
      [:div
          [:h2 "comic-app:"]
          [:div {:id "container" :style "background-color: lightblue"}]
          (set-data linkposts)


          (include-js "js/app.js")]


      (for [{:keys [permalink name date-published]} (sort-by :date-created posts)] ; permalink
        [:article {:itemprop "blogPost" :itemscope "" :itemtype "http://schema.org/BlogPosting"}
         [:h3
          ;[:span date-published]; datestr
          " "
          [:a.title {:href permalink :itemprop "name"} ;permalink
           name]]])]))
          ;[:iframe  :width "100%" :frameborder 0 :src permalink :height 400]]])]))

       ;(common/footer
