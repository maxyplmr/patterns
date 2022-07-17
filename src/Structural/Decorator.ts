class Decorator<T> {
    protected readonly API: T

    constructor(classInstance: T) {
        this.API = classInstance
    }
}


class ConcreteDecorator<T extends Foo> extends Decorator<T> {
    constructor(classInstance: T) {
        super(classInstance);
    }

    extraFunctionality() {
        return this.API.sayHi() + '...'
    }
}

class Foo {
    sayHi() {
        return "Hi"
    }
}
