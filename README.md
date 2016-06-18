# comic

it is a blog to learn in funny way to learn clojure, clojurescript
and even learn writing in markdown


## development


server pandeiro help to serve html

    boot serve -r public watch markdown render -r site.core/page

open browser

    google-chrome target/public/index.html


## build
boot markdown render -r site.core/page target

##publish:

<!---
git subtree push --prefix target/public origin gh-pages
--->

    git checkout gh-pages
    sudo cp -r target/public/* .
    rm -r target

    git add --all
    git commit -m 'version xyz'
    git push -u origin gh-pages

    git checkout master


## references

[perum](https://github.com/hashobject/perun/wiki/Getting-Started)


## useless commands

    boot --help
    boot markdown
    boot print-meta markdown print-meta
    boot render --help
    boot markdown render -r site.core/page
    boot markdown render -r site.core/page target
    boot -h
    boot serve --resource-root public markdown render -r site.core/page wait
