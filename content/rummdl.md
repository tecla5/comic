# RUM MDL

depencies:
lassname-0.2.1.jar
rum-mdl-0.1.1.jar
material-1.1.3-1.jar


## adding rum mdl

edit `boot.build` andd add this:

```clojure

; dependencies
    [rum "0.10.4"]
    [rum-mdl "0.1.1"]

; require
    '[rum.core :as rum]
    '[rum.mdl  :as mdl])

; inside a task  
  (comp
    (sift :add-jar {'cljsjs/material #".*.css$"})
    (sift :move { #".*/material.inc.css"     "public/css/material.inc.css"
              #".*/material.min.inc.css" "public/css/material.min.inc.css"}))


```


edit `core.clj` and add the reference:


```clojure
(html5
  [:head (include-css      "css/material.inc.css")]
  ;or [:link {:rel "stylesheet" :href "css/material.inc.css"}]]
  [:link {:rel "stylesheet", :href "//fonts.googleapis.com/icon?family=Material+Icons"}]
  [:link {:rel "stylesheet", :href "//cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"}]]
  ;...
)
```

edit `app.cljs`
```clojure

(:require [rum.core :as rum]
            [rum.mdl  :as mdl]))

; two buttons
(mdl/button {:mdl [:fab :colored :ripple] :on-click #(swap! app-state update :y inc) }    (mdl/ic
(mdl/button {:mdl [:fab :colored :ripple] :on-click #(swap! app-state update :y dec) }    (mdl/ic


```



the result: 
![screenshot from 2016-07-11 19 49 54](https://cloud.githubusercontent.com/assets/3462917/16740766/d9d8cd00-47a0-11e6-9045-1ef5b4df145b.png)

___
# update boot and dependencies

boot show -d

boot show -u

update on boot.build
```sh
adzerk/boot-cljs-repl     "0.3.2"
pandeiro/boot-http "0.7.3"
binaryage/devtools      "0.7.2"

```


edit `boot.properties`
```
BOOT_VERSION=2.6.0
```

---
