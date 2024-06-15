import { Test, TestingModule } from "@nestjs/testing";
import { CreatePostUseCaseController } from "./create-post.controller";
import { CreatePostUseCaseService } from "./create-post.service";
import { IUseCaseService } from "@DDD";
import { mockPost } from "@app/common";

describe("Create Post Controller", () => {
    let module: TestingModule;
    let controller: CreatePostUseCaseController;

    beforeAll(async () => {
        const mockService: IUseCaseService = {
            exec: jest.fn().mockResolvedValue(mockPost)
        };

        module = await Test.createTestingModule({
            controllers: [CreatePostUseCaseController],
            providers: [{
                provide: CreatePostUseCaseService,
                useValue: mockService
            }]
        }).compile();

        controller = module.get<CreatePostUseCaseController>(CreatePostUseCaseController);
    });

    it("defined", () => {
        expect(controller).toBeDefined();
    });

    it("creates user", async () => {
        const createSpy = jest.spyOn(controller, "exec");
        const result = await controller.exec(mockPost);
        expect(result.data).toEqual(mockPost);
        expect(createSpy).toHaveBeenCalled();
    });
});