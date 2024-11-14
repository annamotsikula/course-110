export interface Product {
    model: string,
    description: string
    inStock: boolean,
    thumbnail: string,
    tags: string[],
    price: number,
    title: string,
    color: string,
    id: number,
    dimensions?: Dimensions,
    releaseDate?: Date,
    rating: number[]
}

interface Dimensions {
    width: number,
    height: number,
}

