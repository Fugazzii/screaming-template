import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class PostModel {
    @Prop({ type: mongoose.Schema.Types.ObjectId, _id: true, auto: true })
    _id: string;

    @Prop({ type: mongoose.Schema.Types.String, required: true })
    title: string;

    @Prop({ type: mongoose.Schema.Types.String, required: true })
    content: string;

    @Prop({ type: mongoose.Schema.Types.String, required: true })
    author: string;

    @Prop({ type: mongoose.Schema.Types.Date, required: true })
    created_at: Date;
}

export const PostSchema = SchemaFactory.createForClass(PostModel);
export const PostsProvider = { name: PostModel.name, schema: PostSchema };