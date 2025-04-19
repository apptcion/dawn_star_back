import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BannerDocument = HydratedDocument<Banner>

@Schema()
export class Banner{

    @Prop()
    name: string;

    // 배너 타입
    @Prop({required: true})
    type: string;

    // 이미지 ( Base64 )
    @Prop({required: true})
    img: string;
}

export const BannerSchema = SchemaFactory.createForClass(Banner)