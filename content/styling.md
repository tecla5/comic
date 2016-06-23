# Styling task

we adding styling tasks based in garden to boot
foloowing this: [boot-garden](https://github.com/martinklepsch/boot-garden)

## Adding the css and references

created `src/site/styles.clj` for styling
```clojure
(ns site.styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

(defstyles base
  (let [body (rule :body)]
    (body {:background-color "beige" ...})
    ... ))
```


edited  `core.clj` adding
```clojure
[:head (include-css "css/garden.css")]
```


## Adding the task
edited `build.boot` adding

dependencies:
    [org.martinklepsch/boot-garden "1.3.0-0"]

and defined the task css
```clojure

(:dependencies ...  
                [org.martinklepsch/boot-garden "1.3.0-0"]
                ... )

; style task
(deftask css
  "Generate CSS from Garden and watch for future changes"
  []
  (comp (garden :styles-var 'site.styles/base :output-to "public/css/garden.css" :pretty-print true)))

```
