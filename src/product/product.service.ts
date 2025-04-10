import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schema/product.schema';

@Injectable()
export class ProductService {
    
    constructor(@InjectModel(Product.name) private readonly ProductModel: Model<Product>){}
    
    getALL(){
        return this.ProductModel.find()
    }
}
