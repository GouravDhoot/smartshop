import { Product } from '../product';

export interface Bill{
    product:Product
    purchase_date:Date
    quantity:number
}