import { IMapper } from "@DDD";
import { PostModel } from "@posts/persistence";
import { Post } from ".";
import { CreatePostDTO } from "@contracts/create-post";
import { PostResponseDTO } from "./post.response.dto";

class PostMapperDef implements IMapper<Post, PostModel, PostResponseDTO> {
    toPersistence(entity: Post): PostModel {
        const model = new PostModel();
        model.title = entity.title;
        model.content = entity.content;
        model.author = entity.author;
        return model;
    }
    toDomain(record: CreatePostDTO): Post {
        return {
            title: record.title,
            content: record.content,
            author: record.author,
            createdAt: record.createdAt
        };
    }
    toResponse(entity: Post): PostResponseDTO {
        const dto = new PostResponseDTO();
        dto.title = entity.title;
        dto.content = entity.content;
        dto.author = entity.author;
        dto.createdAt = entity.createdAt;
        return dto;
    }
}

export const PostMapper = new PostMapperDef();