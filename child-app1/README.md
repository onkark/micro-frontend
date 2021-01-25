# ChildApp1

ng build --prod --output-hashing=none

Merge Child App flies
cat ./dist/main.js ./dist/polyfills.js ./dist/runtime.js > ./dist/child-app1/child-app1.js

cat ./dist/child-app1/main.js ./dist/child-app1/polyfills.js ./dist/child-app1/runtime.js > ./dist/child-app1/child-app1.js