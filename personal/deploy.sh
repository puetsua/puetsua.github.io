echo "==== Clearing /dist..."
rm -rf dist

echo "==== Building..."
npm run build

echo "==== Creating git repository..."
cd dist
git init
git add -A
git commit -m "Deploy new version."

echo "==== Uploading... "
git push -f git@github.com:puetsua/puetsua.github.io.git master
cd ..

echo "==== Completed!"
