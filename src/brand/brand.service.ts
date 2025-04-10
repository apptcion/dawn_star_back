import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from 'src/schema/brand.schema';

@Injectable()
export class BrandService {

    constructor(@InjectModel(Brand.name) private readonly BrandModel: Model<Brand>){}

    getALL(){
        return this.BrandModel.find({},{"brand_name" : 1, "_id": 0})
    }
}
