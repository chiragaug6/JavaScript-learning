class ComplexNumber {
    #real;
    #imag;

    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }

    get realGetter() {
        return this.#real;
    }

    get imagGetter() {
        return this.#imag;
    }

    addComplexNumber(c) {
        this.#real += c.realGetter;
        this.#imag += c.imagGetter;
    }

    display() {
        console.log(this.#real, "+ i", this.#imag);
    }
}

const c1 = new ComplexNumber(2, 3);

const c2 = new ComplexNumber(4, 5);

c1.addComplexNumber(c2);

c1.display();
