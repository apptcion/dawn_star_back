import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schema/product.schema';

@Injectable()
export class ProductService {
    
    constructor(@InjectModel(Product.name) private readonly ProductModel: Model<Product>){}
    
    getALL(type: string | null){
        const where:any = {};
        if(type){
            where.type = type;
        }

        return this.ProductModel.find(where)
    }

    search(keyword: string){
        return this.ProductModel.find(
            { product_name: { $regex: keyword, $options: 'i' } },
            { review: 0, valueInfo: 0, info: 0 })
    }

    getOne(_id: string){
        return this.ProductModel.findById(_id).populate('reviews')
    }
}
