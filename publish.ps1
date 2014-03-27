cd "C:\Users\donsm_000\repos\website-source"
echo "Building website"
grunt

echo "Commiting changes to website source"
git add .
git commit -m "Add new blog entries"
echo "Pushing source changes to GitHub"
git push origin master

echo "Commiting new website"
cd dutchesse.github.io
git add .
git commit -m "Add new blog entries"
echo "Pushing changes to GitHub"
git push origin master

