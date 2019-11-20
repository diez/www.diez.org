yarn build
aws s3 sync docs/.vuepress/dist s3://diez-www
aws cloudfront create-invalidation --distribution-id=$DIEZ_WWW_DISTRIBUTION --paths "/*"
