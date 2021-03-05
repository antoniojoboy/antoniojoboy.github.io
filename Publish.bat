pelican content -o output -s publishconf.py
ghp-import -m "Generate Pelican site" --no-jekyll -b main output
git push origin main
git add content
git commit -m "added a first post, a photo and an about page"
git push origin content
