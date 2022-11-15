export type Product = {
    id: number,
    name: string,
    imageSrc: string,
    price: number,
    color: string,
    description: string,
    isFav: boolean
};


export type Cart = {
    id: number;
    product: Product;
    quantity: number;
    total: number

};




