import { CreateParams } from "@app/common";
import { IPostRepository, Post, PostMapper } from "@posts/domain";
import { PostModel } from "./post.model";

export class PostRepository implements IPostRepository {
    async create(params: CreateParams<PostModel>): Promise<Post> {
        // db simulation
        const created = new PostModel();
        created.author = params.data.author;
        created.content = params.data.content;
        created.title = params.data.title;
        created.created_at = params.data.created_at;
        return PostMapper.toDomain(created);
    }
}