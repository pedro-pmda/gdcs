# Biuo


## Symbols

## Iterable and Iterator

xxx of xxx 
.next()

value done

Symbol.iterator()


## Set

const games = new Set({})
games.add()
games.delete()
games.clear()
games.size()
games.has()
games.get()
clear

games.values() devuelve un iterator

Puedes usar también un for...of para recorrer un set

## WeakSet

new WeakSet() Solamente pueden contener objetos y no tiene le método clear.

Poniendo el objeto a null el garbage collection lo saca del set.

## Set vs Map, WeakSet vs WeakMaps
Comparten los mismos métodos. La diferencia es que la famila set es para crear
arrays, mientras que la familia map para crear objetos.
Set es similar a los arrays, map es similiar a los objetos.

## Maps

let nombre = new Map();
nombre.set(clave,{valor})
map.delete();
map.clear();
map.has()
map.get()
No devuelve erro de clave duplicada, sino que sobreescribe. Idem cuando borra (devuelve tru o false)


## WeakMaps
Igual que WeakSet, pero con objetos.

### PROMISES

new Promise(function(resolve, reject) {
    resolve(xxx) 

    reject(xxxx)  
})


Una promesa retorna inmediatamente un objeto.

mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
    console.log(msg);
    self.goCry(); // not a real method
});


### PROXIES
Un objeto capaz de actuar por otro.

new Proxy();


var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'


const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the a


### Generators
Pausable Functions 
Funciones que se pausan. Importante el asterisco después de function lo convierte e un una funcion pausable. Yield es donde se para.
Cuando lo invocas, crea un iterador que puedes ir invocando con next.


``` Javascript
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
````