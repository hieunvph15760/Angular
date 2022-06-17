export type Product = {
    _id:string,
    name:string,
    price:number,
    image:string,
    sale_price:number,
    description:string,
    status:number,
    category:string
}

export type ProductCreate = {
    name:string,
    price:number,
    image:string,
    sale_price:number,
    description:string,
    status:number,
    category:string
}

export type ProductStatus = {
    status?:number  //Có thể có hoặc không 
}