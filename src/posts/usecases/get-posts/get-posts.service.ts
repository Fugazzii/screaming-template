import { IUseCaseService } from "@DDD";
import { Injectable } from "@nestjs/common";
import { Post } from "@posts/domain";

@Injectable()
export class GetPostsUseCaseService implements IUseCaseService {
    public async exec(): Promise<Post[]> {
        return [
            new Post("1", "Post 1", "Content 1"),
            new Post("2", "Post 2", "Content 2")
        ];
    }
}