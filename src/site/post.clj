(ns post
  (:use [hiccup.page :only (html5 include-css include-js)]))


(defn render [data]
  ;(println data)

  (html5
    [:head (include-css "/css/garden.css" "/css/material.inc.css")
       [:link {:rel "stylesheet", :href "//fonts.googleapis.com/icon?family=Material+Icons"}]
       [:link {:rel "stylesheet", :href "//cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"}]]
     ;;:link {:rel "stylesheet" :href "css/material.inc.css"}]]
    [:body
      [:div {:style "max-width: 900px; margin: 0 auto;"}
        [:a {:href "/"} "Home"] ; <---- We added this
        (-> data :entry :content)]]))
