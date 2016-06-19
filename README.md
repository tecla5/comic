# comic

it is a blog to learn in funny way to learn clojure, clojurescript
and even learn writing in markdown


## development


server pandeiro help to serve html

    boot dev

open browser

    google-chrome http://localhost:3000


## build

    boot build

## publish:


<!---
git subtree push --prefix target/public origin gh-pages
--->

    boot prod

    git checkout gh-pages
    sudo cp -r target/public/* .
    rm -r target

    git add --all
    git commit -m 'version xyz'
    git push -u origin gh-pages

    git checkout master


## references

[perum](https://github.com/hashobject/perun/wiki/Getting-Started)


## other commands

    boot --help
    boot render --help
    boot -h