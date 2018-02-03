# Anotaciones del Google Developer Challege Scholarship: Mobile Web


### 2018-01-04

Chaitra
Nick


Hi everyone 

My name is Pedro. I'm from Spain. I'm computer engienering and I'm working in frontEnd worlds.
A few years ago, I landed in the www side and I decided that it is my roadmap. I love JS, HTML, CSS, UX... everything that I can use to build a better product it is welcome. 

I was working in a hard project in my work, so I knew that I will started in January. I missed these months, but I promise work hard to take advantage of the course and pass to next six month nanodegree.

See you soon and happy coding :-D
Pedro


## Clase 2 The Benefits of Offline First

#### Intro
ServiceWorker

### The Problem
Lie-Fi la conexión es muy lenta

### The Benefits of Offline First

### Introducing the Demo App
Arranca la aplicación wittr


### Introducing the Services Worker


### IndexDB

``` javascript
import idb from 'idb';

var dbPromise = idb.open('test-db', 1, function(upgradeDb) {
  var keyValStore = upgradeDb.createObjectStore('keyval');
  keyValStore.put("world", "hello");
});

// read "hello" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval');
  var keyValStore = tx.objectStore('keyval');
  return keyValStore.get('hello');
}).then(function(val) {
  console.log('The value of "hello" is:', val);
});

// set "foo" to be "bar" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval', 'readwrite');
  var keyValStore = tx.objectStore('keyval');
  keyValStore.put('bar', 'foo');
  return tx.complete;
}).then(function() {
  console.log('Added foo:bar to keyval');
});

dbPromise.then(function(db) {
  // TODO: in the keyval store, set
  // "favoriteAnimal" to your favourite animal
  // eg "cat" or "dog"
  var tx = db.transaction('keyval','readwrite');
  var keyValStore = tx.objectStore('keyval');
  keyValStore.put('bear','favoriteAnimal');
}).then(function(){
    console.log('Added favoriteAnimal');
});


store.index('by-date').openCursor(null,'prev')
.then( function(cursor) {
    if (!cursor) return;
  cursor.advance(30);
}).then( function eliminar(cursor) {
  if (!cursor) return;
  cursor.delete();
  cursor.continue().then(eliminar)
})
```

### Cachear fotos

``` javascript
  return caches.open(contentImgsCache).then(function(cache) {
    return cache.match(storageUrl).then(function(response) {
      if (response) return response;
      return fetch(request).then(function(networkResponse) {
        cache.put(storageUrl, networkResponse.clone());
        return networkResponse;
      });
    });
  });
```