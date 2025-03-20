type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
interface Product {
    title: string;
    price: number;
    inStock: boolean;
}
declare const nullableProduct: Nullable<Product>;
