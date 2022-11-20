export type Product = {
    id: number,
    title: string,
    image: string,
    price: number,
    description: string,
    isFav?: boolean,
    category: string,
    rating: Rating

};

type Rating = {
    count: number,
    rate: number,
}

export type Cart = {
    id: number;
    product: Product;
    quantity: number;
    total: number

};
export type FilterInput = {
    category: string;
    search: string;
};




