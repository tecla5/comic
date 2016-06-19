(set-env!
 :source-paths #{"src" "content"}
;   :resource-paths #{"resources"}
 :dependencies '[[perun  "0.3.0" :scope "test"]
                 [pandeiro/boot-http "0.7.0"]
                 [deraen/boot-livereload "0.1.2"]
                 [hiccup "1.0.5"]])

(require '[io.perun :refer :all]
         '[pandeiro.boot-http :refer [serve]]
         '[deraen.boot-livereload :refer [livereload]])


; task options

(deftask build-dev
    "Build dev version"
    []
    (comp (global-metadata)
          (base)
          (markdown)
          (render :renderer 'site.core/page))) ;:page "index.html"
          ;(collection :renderer 'site.core/page)



;------------------------
(deftask build
    "Build blog."
    []
    (comp (build-dev)
         (target :dir #{"target"})))


(deftask dev
    []
    (comp (watch)
         (build-dev)
         (livereload :asset-path "public" :filter #"\.(css|html|js)$")
         (serve :resource-root "public")))



(deftask prod []
 (comp (build-dev) ; :prod true
       (sift :include #{#"^public"})
       (sift :move {#"^public/" ""})
       (target :dir #{"build"})))
