cd ./dist
echo "" > .nojekyll
git init
git checkout -B master
git add -A
git commit -m "latest site deploy"
git push -f https://github.com/Vendareya/krasnoyarsk-test.git master:www_dist
cd ..