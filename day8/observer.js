class Observer {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notify(data) {
        this.observers.forEach(function(observer) {
            return observer(data);
        });
    }
};

module.export = Observer;