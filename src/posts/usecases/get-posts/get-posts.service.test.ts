import { Test, TestingModule } from "@nestjs/testing";
import { GetPostsController } from "./get-posts.controller";
import { GetPostsUseCaseService } from "./get-posts.service";
import { Post } from "@posts/domain";

describe("Get Posts Service", () => {
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            controllers: [GetPostsController],
            providers: [{
                provide: GetPostsUseCaseService,
                useValue: {
                    exec: jest.fn().mockResolvedValue([
                        new Post("1", "Post 1", "Content 1"),
                        new Post("2", "Post 2", "Content 2")
                    ])
                }
            }]
        }).compile();
    })

    it("defined", () => {
        const controller = module.get<GetPostsController>(GetPostsController);
        expect(controller).toBeDefined();
    });

    it("gets posts", async () => {
        const controller = module.get<GetPostsController>(GetPostsController);
        const getSpy = jest.spyOn(controller, "exec");
        const result = await controller.exec();
        expect(result).toEqual([
            new Post("1", "Post 1", "Content 1"),
            new Post("2", "Post 2", "Content 2")
        ]);
        expect(getSpy).toHaveBeenCalled();
    });
});