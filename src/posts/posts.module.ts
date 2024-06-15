import { Module } from '@nestjs/common';
import { CreatePostUseCaseController } from './usecases/create-post/create-post.controller';
import { CreatePostUseCaseService } from './usecases/create-post/create-post.service';
import { GetPostsController } from './usecases/get-posts/get-posts.controller';
import { GetPostsUseCaseService } from './usecases/get-posts/get-posts.service';
import { PostsMongoRepositoryProvider } from './persistence/post.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsProvider } from './persistence';

@Module({
    imports: [MongooseModule.forFeature([PostsProvider])],
    controllers: [
        CreatePostUseCaseController,
        GetPostsController
    ],
    providers: [
        CreatePostUseCaseService,
        GetPostsUseCaseService,
        PostsMongoRepositoryProvider
    ]
})
export class PostsModule {}
