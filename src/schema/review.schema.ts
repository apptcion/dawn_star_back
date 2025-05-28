import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose"

export type ReviewDocument = HydratedDocument<Review>


@Schema({timestamps: true})
export class Review{
    @Prop()
    name: string;

    @Prop({required: true})
    writer: string;

    @Prop({required: true})
    content: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);