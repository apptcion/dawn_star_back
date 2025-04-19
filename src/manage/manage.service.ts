import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Banner } from 'src/schema/banner.schema';

@Injectable()
export class ManageService {

    constructor(@InjectModel(Banner.name) private readonly BannerModel: Model<Banner>){}

    getBanner(type: string){
        return this.BannerModel.find({ type: { $regex: type, $options: 'i' } })
    }
}
