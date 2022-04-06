//5.
class Emitter {
    constructor() {
        this.events = {         
        };
    }
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = [];
    this.events[type].push(listener);
}

var emtr = new Emitter();
