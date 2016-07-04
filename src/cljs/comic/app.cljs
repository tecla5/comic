(ns comic.app)

(defn init []
  (let [c (.. js/document (createElement "DIV"))]
    (aset c "innerHTML" "<p>i'm dynamically created, yes :)</p>")
    (.. js/document (getElementById "container") (appendChild c))))
