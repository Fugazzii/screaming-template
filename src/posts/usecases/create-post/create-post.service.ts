import { Injectable } from "@nestjs/common";
import { Post } from "../../domain/entities/post";
import { IUseCaseService } from "@DDD";

@Injectable()
export class CreatePostUseCaseService implements IUseCaseService<Post, Post> {
    public async exec(post: Post): Promise<Post> {
        const created = new Post();
        created.author = post.author;
        created.content = post.content;
        created.createdAt = post.createdAt;
        created.title = post.title;
        return created;
    }
}