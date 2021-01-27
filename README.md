Build and Run Parent App

```shell
ng serve
```


Build Child app
```shell
ng build --prod --output-hashing=none
```

Merge Child App flies to create single file

```shell
cat ./dist/child-app1/main.js ./dist/child-app1/polyfills.js ./dist/child-app1/runtime.js > ./dist/child-app1/child-app1.js
```

Run Child App

Install `lite-server` to run local node server. 

```shell
cd /dist/child-app1
lite-server
```

After this step you will able to access child-app1.js at http://localhost:3000/child-app1.js.


Your micor front end POC is now running if all above steps performed correctely.
