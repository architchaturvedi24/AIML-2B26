// Experiment 1: EventEmitter

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
});

myEmitter.on('exit', (num) => {
    console.log(`Thank you for visiting. Code: ${num}`);
});

// Another event for practice
myEmitter.on('welcome', (name, course) => {
    console.log(`Welcome ${name}! You are learning ${course}.`);
});

// Emit events
myEmitter.emit('greet', 'Archit');
myEmitter.emit('exit', 100);
myEmitter.emit('welcome', 'Archit', 'Node.js');