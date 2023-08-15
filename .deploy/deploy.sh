cd prod-project
npm run build:prod

rm -rf ~/../var/www/prod-project/html
# shellcheck disable=SC2224
mv prod-project/build ~/../var/www/prod-project/html
