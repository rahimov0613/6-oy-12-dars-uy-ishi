//never
function innfiniteLoop(): never {
    while (true) {
        console.log("tugamidi");
    };
};
/*hichqanaqa qiymatga ega bo'midigan kodni ifodalashga ishlatilinadi*/

//decorator

function sayHello(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log("salom");
        return originalMethod.apply(this, args);
    };

    return descriptor;
}


// Misol uchun ishlatilishi:
class Example {
    @sayHello
    greet(name: string) {
        return `Hello ${name}`;
    }

    @sayHello
    calculate(a: number, b: number) {
        return a + b;
    }
}

// Test qilish
const example = new Example();
example.greet("Ali");      // "salom" chiqadi, keyin "Hello Ali" qaytaradi
example.calculate(5, 3);   // "salom" chiqadi, keyin 8 qaytaradi

//nullable type
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

const nullableProduct: Nullable<Product> = {
    title: null,
    price: null,
    inStock: true,
};

console.log(nullableProduct);
