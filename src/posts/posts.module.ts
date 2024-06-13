import { Module } from '@nestjs/common';
import { CreatePostUseCaseController } from './usecases/create-post/create-post.controller';
import { CreatePostUseCaseService } from './usecases/create-post/create-post.service';
import { GetPostsController } from './usecases/get-posts/get-posts.controller';
import { GetPostsUseCaseService } from './usecases/get-posts/get-posts.service';

@Module({
    controllers: [
        CreatePostUseCaseController,
        GetPostsController
    ],
    providers: [
        CreatePostUseCaseService,
        GetPostsUseCaseService
    ]
})
export class PostsModule {}
