(set-env!
 :source-paths #{"src/clj" "src/cljc" "src/cljs" "content"} ;
 :resource-paths #{"resources"}
 :dependencies '[[perun  "0.3.0" :scope "test"]
                 [pandeiro/boot-http "0.7.3"]
                 [deraen/boot-livereload "0.1.2"]
                 [hiccup "1.0.5"]
                 [org.martinklepsch/boot-garden "1.3.0-0"]

                 [adzerk/boot-cljs          "1.7.228-1"  :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.2"      :scope "test"]
                 [adzerk/boot-reload        "0.4.11"      :scope "test"]
                 [com.cemerick/piggieback   "0.2.1"      :scope "test"]
                 [org.clojure/tools.nrepl   "0.2.12"     :scope "test"]
                 [weasel                    "0.7.0"      :scope "test"]

                  ; Frontend
                 [org.clojure/clojurescript "1.9.89"]; 1.7.228
                 [rum "0.10.4"]
                 [rum-mdl "0.1.1"];; :exclusions [[cljsjs/react] [cljsjs/react-dom]
                 ;[org.clojure/core.async "0.2.374"]

                 ; Dev tool
                 [binaryage/devtools      "0.7.2" :scope "test"]
                 [binaryage/dirac         "0.6.3" :scope "test"]
                 [jupl/boot-cljs-devtools "0.1.0" :scope "test"]])

                 ;[cpmcdaniel/boot-copy "1.0" :scope "provided"]])

(require '[io.perun :refer :all]
         '[pandeiro.boot-http :refer [serve]]
         '[deraen.boot-livereload :refer [livereload]]
         '[org.martinklepsch.boot-garden :refer [garden]]

         '[adzerk.boot-cljs      :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload    :refer [reload]]

         '[jupl.boot-cljs-devtools :refer [cljs-devtools]]

         ; rum.mdl
         '[rum.core :as rum]
         '[rum.mdl  :as mdl]
         ;'[cpmcdaniel.boot-copy :refer :all])

         '[io.perun.core :as perun]
         '[boot.core :as boot]
         '[clojure.string :as string])

; task options
;;(task-options!
;; repl {:middleware '[cemerick.piggieback/wrap-cljs-repl]})

;; task

;; garden css task

(deftask css
  "Generate CSS from Garden and watch for future changes"
  []
  (comp
    (garden :styles-var 'comic.styles/css :output-to "public/css/garden.css" :pretty-print true)))
    ;(sift :include #{#"^public/css/"})))


;(watch)
(deftask rum-mdl
  "CSS for rum mdl"
  []
  (comp
    (sift :add-jar {'cljsjs/material #".*.css$"})
    (sift :move { #".*/material.inc.css"     "public/css/material.inc.css"
                  #".*/material.min.inc.css" "public/css/material.min.inc.css"})))
    ;(sift :include #{#"^css/"})))
    ;(target :dir #{"build"})))


(deftask split-keywords []
  (boot/with-pre-wrap fileset
    (->> fileset
         (perun/get-meta)
         (map (fn [{:keys [keywords] :as post}]
                (if (string? keywords)
                  (assoc post :keywords (->> (string/split keywords #",")
                                             (mapv string/trim)))
                  post)))
         (perun/set-meta fileset))))



; build for markdown css and html
(deftask build-blog
    [p prod bool "Build rss, sitemap etc."]
    (comp
          ;;(base)
          (markdown) ;:options {:extensions {:extanchorlinks true}})
          (global-metadata)
          ;;(print-meta)
          (if prod (draft) identity)
          (css)
          ;;(ttr)
          ;;(slug)
          (permalink :permalink-fn #(perun/absolutize-url (str (:short-filename %) "/"))) ;"/"
          ;;(canonical-url)
          ;;(split-keywords)
          (render :renderer 'comic.post/render) ; blog.views.post/render
          (collection :renderer 'comic.index/render :page "index.html"))) ;; blog.views.index/render
          ;(collection :renderer 'blog.views.tags/render :page "tags/index.html")
          ;(target :dir #{"build"})))

          ;(collection :renderer 'site.core/page)

; build for cljs
(deftask build-js []
  (comp (speak)
        (cljs)
        (sift :move {#"^js/" "public/js/"})))


(deftask build
  "build and watch for dev"
  []
  (comp
    (rum-mdl)

    (cljs-devtools) ;; after watch and before cljs/build-blog
    (build-blog)
    (cljs-repl); before cljs
    (build-js)))
    ;(target :dir #{"build"})))

;-------------- design
(deftask design []
  ;(merge-env! :source-paths #{"resources"})
  ;(let [deps (get-env :dependencies)]
  ;  (set-env! :dependencies (conj deps '[foo/bar "1.2.3"]))
  ;(set-env! :source-paths #{"src/clj"}) ;
  ;(println "source-paths" (get-env :source-paths))
  identity)



;-------------- development

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true} ;; :source-map-timestamp true ; :unified true
                 reload {:on-jsload 'comic.app/init :asset-path "public"}
                 serve {:resource-root "public"} ; :dir "target" :port 3000 :port 8080
                 livereload {:asset-path "public" :filter #"\.(css|html|js)$"})
  identity)


(deftask public
  "build and leave on folder"
  []
  (comp
    (development)
    (build)
    (target :dir #{"build"})))

(deftask dev
  "build and watch for dev"
  []
  (comp
    (println "use 'boot dev-blog' or 'boot dev-app'")))


;-------------- development blog


(deftask dev-blog
  "build and watch for dev"
  []
  (comp
      (development)
      (rum-mdl)
      (build-js)

      (serve); :dir "target" :port 3000 :port 8080
      (watch)
      (css)
      (build-blog)
      (livereload)))

;-------------- development app

(deftask dev-app
  "build and watch for dev"
  []
  (comp
      (development)
      (rum-mdl)
      (build-blog) ;       (rum-mdl)

      (cljs-devtools)

      (watch)
      (css)
      (cljs-repl); before cljs
      (reload) ;; :on-jsload 'frontend.dev/refresh
      (build-js)
      (serve)))


;-------------- production
(deftask production []
  (task-options! cljs {:optimizations :advanced}
                 build-blog {:prod true}
                 ;copy {:output-dir    "dist" :matching       #{#"CNAME$"}})
                 serve {:resource-root "" :port 8080})
  identity)

(deftask dist
  "Build for prod version"
  []
  (comp  ; :prod true
      (production)
      (build-blog)
      (rum-mdl) ;; after css
      (build-js)
      (inject-scripts :scripts #{"ga.js"})
      ;(sift :include #{#"^CNAME"})
      (sift :move {#"^public/" ""})
      (target :dir #{"dist"})))


(deftask prod ; release
  "Build for prod version and watch"
  []
  (comp  ; :prod true
    (watch)
    (dist)
    (serve))); :dir "target" :port 3000 :port 8080
