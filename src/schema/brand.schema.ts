import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'

export type ProductDocument = HydratedDocument<Brand>

@Schema()
export class Brand{
    @Prop()
    name: string;

    // 브랜드 이름
    @Prop({required: true})
    brand_name: string;

    // 해당 브랜드의 상품
    @Prop({type: [mongoose.Schema.Types.ObjectId] , ref: 'Product'})
    products: mongoose.Types.ObjectId[]

}

export const BrandSchema = SchemaFactory.createForClass(Brand)