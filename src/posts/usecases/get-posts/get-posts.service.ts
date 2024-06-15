import { IUseCaseService } from "@DDD";
import { Injectable } from "@nestjs/common";
import { Post } from "@posts/domain";

@Injectable()
export class GetPostsUseCaseService implements IUseCaseService {
    public async exec(): Promise<Post[]> {
        return [];
    }
}