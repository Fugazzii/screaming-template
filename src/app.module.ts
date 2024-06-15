import { Module } from "@nestjs/common";
import { PostsModule } from "./posts/posts.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        ConfigModule.forRoot({ 
            envFilePath: process.env.NODE_ENV === "test" ? ".env.test" : ".env.dev",
            isGlobal: true
        }),
        MongooseModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>("MONGO_URI")
            }),
            inject: [ConfigService]
        }),
        PostsModule
    ]
})
export class AppModule {}