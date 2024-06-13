import { Test, TestingModule } from "@nestjs/testing";
import { CreatePostUseCaseService } from "./create-post.service";

describe("Create Post Service", () => {
    let moduleFixture: TestingModule;
    beforeAll(async () => {
        moduleFixture = await Test.createTestingModule({
            providers: [CreatePostUseCaseService],
        }).compile();
    });

    it("be defined", () => {
        const service = moduleFixture.get<CreatePostUseCaseService>(CreatePostUseCaseService);
        expect(service).toBeDefined();
    });

    it("return a post", async () => {
        const service = moduleFixture.get<CreatePostUseCaseService>(CreatePostUseCaseService);
        const createSpy = jest.spyOn(service, "exec");
        const post = await service.exec();
        expect(post).toBeDefined();
        expect(post.getTitle()).toBe("Ilia magaria");
        expect(post.getContent()).toBe("ilia uteslesia");
        expect(post.getAuthor()).toBe("ilia");
        expect(createSpy).toHaveBeenCalled();
    });
});