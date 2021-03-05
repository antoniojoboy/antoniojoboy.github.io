@REM Installer for cmd

@REM pip install pelican ghp-import Markdown
@REM pelican-quickstart
git checkout -b content
git add .
git commit -m 'initial pelican commit to content'
git push origin content
cd content
mkdir pages images