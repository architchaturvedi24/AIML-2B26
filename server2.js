// experiment 1 : a :
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

myEmitter.on('exit', (num) => {
    console.log(`Thank you for visiting. Code: ${num}`);
});

myEmitter.emit('greet', 'Archit');
myEmitter.emit('exit', 100);




//  Experiments 1 : b :

const EventEmitter = require('events');

class Button extends EventEmitter {
    click() {
        this.emit('click');
    }
}

const button = new Button();

button.on('click', () => {
    console.log('Button was clicked!');
});

button.click();



// Experiment : c :

console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

console.log("End");