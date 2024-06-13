import { Injectable } from "@nestjs/common";
import { Post } from "../../domain/entities/post";
import { IUseCaseService } from "@DDD";

@Injectable()
export class CreatePostUseCaseService implements IUseCaseService<undefined, Post> {
    public async exec(): Promise<Post> {
        return new Post("Ilia magaria", "ilia uteslesia", "ilia");
    }
}