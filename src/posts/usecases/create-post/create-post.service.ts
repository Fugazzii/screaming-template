import { Inject, Injectable } from "@nestjs/common";
import { Post } from "../../domain/entities/post";
import { IUseCaseService } from "@DDD";
import { IPostRepository, PostMapper } from "@posts/domain";
import { POSTS_REPOSITORY } from "@posts/persistence/post.repository";

@Injectable()
export class CreatePostUseCaseService implements IUseCaseService<Post, Post> {
    public constructor(@Inject(POSTS_REPOSITORY) private readonly postRepository: IPostRepository) {}

    public exec(post: Post): Promise<Post> {
        return this.postRepository.create({
            data: PostMapper.toPersistence(post)
        });
    }
}