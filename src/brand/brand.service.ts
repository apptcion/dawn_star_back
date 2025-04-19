import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from 'src/schema/brand.schema';

@Injectable()
export class BrandService {

    constructor(@InjectModel(Brand.name) private readonly BrandModel: Model<Brand>){}

    getALL(getProd: boolean, type: string | null) {
        const where:any = {};
        if(type){
            where.type = type;
        }

        const query = this.BrandModel.find(where, { brand_name: 1 });
        if (getProd) {
          query.populate('products');
        }
        return query.exec();
      }

    getALLProd(brandName:string){
      if(brandName.toUpperCase() == 'ALL'){
        return this.BrandModel.find().populate('products')
      }else{
        return this.BrandModel.findOne({brand_name: brandName}).populate('products')
      }
    }
}
