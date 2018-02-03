# Functions


## Arrow Functions

() cero o dos o más parámetros tambien puedes usar _

() => xxxx  _ => XX>

x => Y 

Si la función tiene una sola expresión y retorna se llama concise body sintax

Si necesitas más de una expresión se usan {} y entonce si tienes que usar return

``` Javascript

const upperizedNames = [''].map(name => name.toUpperCase());

const longNames = names.filter(function(name) {
    return name.length > 6;
});

// Equivale a:

const longName = names.filster(name => name.length > 6):

````


Diferencia entre call, apply un uso normal.

Diferencia entre lista de argumentos y arreglo de argumentos.

## Valores por defecto para la función

buildHouse = function({floors:1, color='red', walls='brick'}:{} {
    return `Your house has ${floors} with ${color} ${walls}`
})


## Class
Las herencias son un espejismo de ES6, el lenguaje no varía y sigue basandose no clases sino en funciones con herencia prototípica

Es decir esta clase

``` Javascript
Class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}
```
es en realidad esto

``` Javascript
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};
``` 