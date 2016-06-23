(ns site.core
  (:use [hiccup.page :only (html5 include-css include-js)]))


(defn page [data]
  (html5
    [:head (include-css "css/garden.css")]
    [:body
      [:div {:style "max-width: 900px; margin: 0 auto;"}
        [:a {:href "/"} "Home"] ; <---- We added this
        (-> data :entry :content)]]))
