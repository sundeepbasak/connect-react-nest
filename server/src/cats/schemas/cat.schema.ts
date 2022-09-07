import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose'

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: number

    @Prop()
    breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)

/* 
- generally, a schema is created using @Schema() decorator
- The @Prop() decorator defines a property in the document. 
*/

/* Alternatively, if you prefer not using decorators, you can define a schema manually. For example:

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
*/