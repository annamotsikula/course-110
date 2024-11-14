export interface Product {
    model: string,
    description: string
    inStock: boolean,
    stock: number
    thumbnail: string,
    tags: string[],
    price: number,
    title: string,
    color: string,
    id: number,
    dimensions?: Dimensions,
    releaseDate?: Date,
    rating: number[]
    weight: number;
    category: string;
}

interface Dimensions {
    width: number,
    height: number,
}

