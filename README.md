
Build Child app
```shell
ng build --prod --output-hashing=none
```

Merge Child App flies to create single file

```shell
cat ./dist/child-app1/main.js ./dist/child-app1/polyfills.js ./dist/child-app1/runtime.js > ./dist/child-app1/child-app1.js
```
