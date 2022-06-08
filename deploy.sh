echo "==== Clearing /dist..."
rm -rf dist

echo "==== Building..."
nuxt build && nuxt generate

echo "==== Creating git repository..."
cd dist
cp ../CNAME CNAME
git init
git add -A
git commit -m "Deploy new version."

echo "==== Uploading... "
git push -f git@github.com:puetsua/puetsua.github.io.git master
cd ..

echo "==== Completed!"
