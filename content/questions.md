# Questions


?
(apply max 1 [2 3]) ;; 3
(max 1 [2 3]) ;; [2 3]

?
(max '(1 2 3) '(1 0 0))  ;; (1 2 3)

?
(= (mod 5 0) NaN) ;; false

?
NaN =? Infinity =? nil



# Weirds

!
(set! (.-title js/document) "Hi!")

?!
\# reader macro
```clojure
(map #(vector (first %) (* 2 (second %)))
            {:a 1 :b 2 :c 3})
```

?!
(= '(1 2) [1 2])
true

?!
(= 1 1 2) ;; false

?!
(not nil) ;; true

# To know

(.. "a b c d" toUpperCase (replace "A" "X"))
(. (. "a b c d" toUpperCase) (replace "A" "X")) ;; "X B C D"
cljs.user=> (.replace (.toUpperCase "a b c d") "A" "X") ;; "X B C D"
cljs.user=> (-> "a b c d" .toUpperCase (.replace "A" "X")) ;; "X B C D"


(doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))

->>

call direct js
(js/alert "Hello world!")

filter identity... to remove the nils

%

== clojurescript
Since there is only a single number type in JavaScript, 64-bit floating point, there is no reason to use the == operator in ClojureScript.

!?
js->clj

!?
(def a #js [1 2]) ;; #js means? JavaScript objects!


= is a value comparison, not an identity comparison.
```clojure
(def a #js [1 2]) ;; #'cljs.user/a
(def b #js [1 2]) ;; #'cljs.user/b
cljs.user=> (= a b) ;; false
```

JavaScript objects cannot be compared in this way until they are converted to ClojureScript collections
```clojure
cljs.user=> (def a {:foo {:bar "baz"}})
#'cljs.user/a
cljs.user=> (def b {:foo {:bar "baz"}})
#'cljs.user/b
cljs.user=> (= a b)
true
cljs.user=> (= [a b] [a b])
true
cljs.user=> (def a #js {:foo #js {:bar "baz"}})
#'cljs.user/a
cljs.user=> (def b #js {:foo #js {:bar "baz"}})
#'cljs.user/b
cljs.user=> (= a b)
false
cljs.user=> (= (js->clj a)
   (js->clj b))
true
```
