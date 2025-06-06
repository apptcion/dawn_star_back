import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'

export type ProductDocument = HydratedDocument<Product>

type Comment = { //리뷰
    writer: string; // 작성자
    content: string; // 내용
    date: Date; // 작성일자
}

@Schema()
export class Product{
    
    @Prop()
    name: string;

    // 제품 이름
    @Prop({required: true})
    product_name: string;

    // 브랜드 이름 
    @Prop({required: false, default: null}) 
    brand: string | null; // Can a product not have a brand? 

    // 이미지 base64
    @Prop({required: true})
    img: string

    // 상품 정보
    @Prop({required: true}) 
    info: string; //temp, maybe change to Object type

    // 리뷰
    @Prop({type: [mongoose.Schema.Types.ObjectId] , ref: 'Review'})
    reviews: mongoose.Types.ObjectId[]

    // 가치정보
    @Prop()
    valueInfo: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);