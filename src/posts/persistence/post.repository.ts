import { CreateParams } from "@app/common";
import { IPostRepository, Post, PostMapper } from "@posts/domain";
import { PostModel } from "./post.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class PostsRepository implements IPostRepository {
    public constructor(
        @InjectModel(PostModel.name) private readonly postsRepository: Model<PostModel>
    ) {}

    public async create(params: CreateParams<PostModel>): Promise<Post> {
        const created = await this.postsRepository.create(params.data);
        return PostMapper.toDomain(created);
    }
}