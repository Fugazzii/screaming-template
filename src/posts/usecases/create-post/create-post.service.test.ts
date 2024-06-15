import { Test, TestingModule } from "@nestjs/testing";
import { CreatePostUseCaseService } from "./create-post.service";
import { mockPost } from "@app/common";
import { POSTS_REPOSITORY } from "@posts/persistence";

describe("Create Post Service", () => {
    let moduleFixture: TestingModule;
    let service: CreatePostUseCaseService;

    beforeAll(async () => {
        const mockRepository = {
            create: jest.fn().mockResolvedValue(mockPost)
        };    
        moduleFixture = await Test.createTestingModule({
            providers: [
                CreatePostUseCaseService,
                { provide: POSTS_REPOSITORY, useValue: mockRepository }
            ]
        }).compile();

        service = moduleFixture.get<CreatePostUseCaseService>(CreatePostUseCaseService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("should return a post", async () => {
        const createSpy = jest.spyOn(service, "exec");
        const post = await service.exec(mockPost);
        expect(post).toBeDefined();
        expect(post).toEqual(mockPost);
        expect(createSpy).toHaveBeenCalled();
    });
});
