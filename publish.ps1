cd "C:\Users\donsm_000\repos\website-source"
echo "Building website"
grunt

echo "Commiting new website"
git add .
git commit -m "Add new blog entries"
echo "Pushing changes to GitHub"
git push origin master

echo "Commiting changes to website source"
cd ..
git add .
git commit -m "Add new blog entries"
echo "Pushing source changes to GitHub"
git push origin master
