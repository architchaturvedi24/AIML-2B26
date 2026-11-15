const EventEmitter = require('events');

// First example
const ud = new EventEmitter();

ud.on('greet', (name) => {
    console.log(`Hello there 2B ${name}`);
});

ud.on('exit', (num) => {
    console.log(`Thanku for visit ${num}`);
});

ud.emit('greet', "Ansh");
ud.emit('exit', 100);


// Second example
class Button extends EventEmitter {
    click() {
        this.emit("click");
    }
}

const button = new Button();

button.on("click", () => {
    console.log("Button Clicked");
});

button.click();