## Small server

**Small server, using a file database together with a small API.**

Babel and webpack are preconfigured, the entry point of babel is /Client/app.js the folder where all the assests can be stored is /Public

**Installation**

```
git clone https://github.com/josef32/small-server.git

npm install nodemon -g
npm install

nodemon
```

**API and C(reate)R(ead)U(pdate)D(elete) operations**

Inserting items (Has body)
```
POST to /api/{tablename}
```
List items
```
GET to /api/{tablename}
```
Update item (Has body)
```
PUT to /api/{tablename}/{id}
```
Delete item
```
DELETE TO /api/{tablename}/{id}
```

There is a packaged preinstalled called axios, it will simplify the requests. You will find in their documentation the corresponding http methods.
<a href="https://github.com/mzabriskie/axios">https://github.com/mzabriskie/axios</a>
