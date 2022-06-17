export type TypeCart = {
    _id:string,
    name:string,
    price:number,
    image:string,
    sale_price:number,
    description:string,
    status:number,
    category:string,
    quantity:number
}

export type order = {
    _id:string,
    lastname:string,
    name:string,
    address:string,
    phone:string,
    email:string,
    note:string
}

export type typeOrderDetails = {
    name:string,
    price:number,
    sale_price:number,
    image:string,
    quantity:number,
    total:number,
    order:string
}