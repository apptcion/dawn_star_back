import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Document & User

@Schema()
export class User{
    
}