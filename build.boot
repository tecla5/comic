(set-env!
 :source-paths #{"src/site" "content" "src/cljs"} ;
 :resource-paths #{"resources"}
 :dependencies '[[perun  "0.3.0" :scope "test"]
                 [pandeiro/boot-http "0.7.0"]
                 [deraen/boot-livereload "0.1.2"]
                 [hiccup "1.0.5"]
                 [org.martinklepsch/boot-garden "1.3.0-0"]

                 [adzerk/boot-cljs          "1.7.228-1"  :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.0"      :scope "test"]
                 [adzerk/boot-reload        "0.4.5"      :scope "test"]
                 [com.cemerick/piggieback   "0.2.1"      :scope "test"]
                 [org.clojure/tools.nrepl   "0.2.12"     :scope "test"]
                 [weasel                    "0.7.0"      :scope "test"]

                  ; Frontend
                 [org.clojure/clojurescript "1.9.89"]; 1.7.228
                 [rum "0.10.4"] ;[rum "0.10.4"]
                 ;[rum "0.6.0" :exclusions [[cljsjs/react] [cljsjs/react-dom]]]])
                 ;[org.clojure/core.async "0.2.374"]

                 ; Dev tool
                 [binaryage/devtools      "0.7.0" :scope "test"]
                 [binaryage/dirac         "0.6.1" :scope "test"]
                 [jupl/boot-cljs-devtools "0.1.0" :scope "test"]])


(require '[io.perun :refer :all]
         '[pandeiro.boot-http :refer [serve]]
         '[deraen.boot-livereload :refer [livereload]]
         '[org.martinklepsch.boot-garden :refer [garden]]

         '[adzerk.boot-cljs      :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload    :refer [reload]]

         '[jupl.boot-cljs-devtools :refer [cljs-devtools]])


; task options
;;(task-options!
;; repl {:middleware '[cemerick.piggieback/wrap-cljs-repl]})

;; task

;; garden css task
(deftask css
  "Generate CSS from Garden and watch for future changes"
  []
  (comp (garden :styles-var 'styles/base :output-to "public/css/garden.css" :pretty-print true)))


;(watch)



; build for markdown css and html
(deftask build-dev
    []
    (comp (global-metadata)
          (base)
          (markdown)
          (css)
          (render :renderer 'core/page))) ;:page "index.html"

          ;(collection :renderer 'site.core/page)

; build for cljs
(deftask build []
  (comp (speak)
        (cljs)  ; :unified true :source-map true :optimizations :none
        (sift :move {#"^js/" "public/js/"})))
;        (sift :include #{#"^js/"})


(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true} ;; :source-map-timestamp true
                 reload {:on-jsload 'comic.app/init})
  identity)

;------------------------

(deftask dev
  "build and watch for dev"
  []
  (comp
      (watch)
      (development)
      (cljs-devtools) ;; after watch and before cljs/build-dev
      (build-dev)
      (cljs-repl); before cljs
      (reload) ;; :on-jsload 'frontend.dev/refresh
      (build)
      (serve :resource-root "public"); :dir "target" :port 3000 :port 8080
      (livereload :asset-path "public" :filter #"\.(css|html|js)$")))


(deftask prod
  "Build for prod version"
  []
  (comp  ; :prod true
      (production)
      (build-dev)
      (build)
      (inject-scripts :scripts #{"ga.js"})
      (sift :include #{#"^public"})
      (sift :move {#"^public/" ""})
      (target :dir #{"build"})))
