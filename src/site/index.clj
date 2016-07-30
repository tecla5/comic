(ns index
  ; : use or require
  ;[hiccup.core :refer [html]]
  (:use [hiccup.page :only (html5 include-css include-js)]
        [hiccup.core :refer [html]]))

  ;[blog.dates :refer [datestr]]
  ;[blog.views.common :as common])

;:entry post
(defn render [{global :meta posts :entries}]
  ;(:name post)

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
    [:head (include-css "css/garden.css" "css/material.inc.css")
       [:link {:rel "stylesheet", :href "//fonts.googleapis.com/icon?family=Material+Icons"}]
       [:link {:rel "stylesheet", :href "//cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"}]]
     ;;:link {:rel "stylesheet" :href "css/material.inc.css"}]]
    [:body
      ;(common/header meta)
      [:div
          [:h2 "comic-app:"]
          [:div {:id "container" :style "background-color: lightblue"}]
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
