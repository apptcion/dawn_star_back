import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Document & Brand

@Schema()
export class Brand{
    
}