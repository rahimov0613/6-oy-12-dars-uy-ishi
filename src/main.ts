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
