import { CreateParams } from "@app/common";
import { PostModel } from "@posts/persistence";
import { Post } from "../entities/post";

export interface IPostRepository {
    create(params: CreateParams<PostModel>): Promise<Post>;
}