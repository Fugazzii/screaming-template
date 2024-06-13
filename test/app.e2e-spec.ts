import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("AppController (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    /**
     * @module PostsModule
     */
    describe("Testing Posts Module (e2e)", () => {
        it("GET /posts", () => {
            return request(app.getHttpServer())
                .get("/posts")
                .expect(200);
        });
    
        it("POST /post", () => {
            return request(app.getHttpServer())
                .post("/post")
                .send({ title: "Post 1", content: "Content 1", author: "Author" })
                .expect(201);
        });    
    });
});
