# comic


boot --help
boot markdown
boot print-meta markdown print-meta
boot render --help
boot markdown render -r site.core/page
boot markdown render -r site.core/page target
google-chrome target/public/index.html
boot -h
boot -d pandeiro/boot-http:0.7.0
boot serve --resource-root public markdown render -r site.core/page wait
boot serve -r public watch markdown render -r site.core/page

publish:
git subtree push --prefix target/public origin gh-pages
