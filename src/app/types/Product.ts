export type Product = {
    _id:string,
    name:string,
    price:number,
    image:string
}

export type ProductCreate = {
    name:string,
    price:number,
    image:string
}