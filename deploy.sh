rm -rf node_modules/.cache
next build
next export
touch out/.nojekyll
echo staging.getoutline.com >> out/CNAME
git add out/
git commit -m "Deploy to gh-pages"
git subtree push --prefix out origin gh-pages