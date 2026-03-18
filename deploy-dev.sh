#!/bin/bash
set -e

cd ~/desktop/polvora-react

git checkout dev
git add .
git commit -m "${1:-deploy dev}" || true
git push

npm run build

scp -i ~/.ssh/siteground_key -P 18765 -r dist/* \
u2177-j6mf63i7mn2z@ssh.agenciapolvora.cl:/home/customer/www/dev.agenciapolvora.cl/public_html/

echo "Deploy a dev listo"