import { mockPost } from "@app/common";
import { IPostRepository, PostMapper } from "@posts/domain";
import { Model } from "mongoose";
import { PostModel } from "./post.model";
import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";

describe("Posts Mongo Repository", () => {
    let repository: IPostRepository;
    let mongooseMock: Model<PostModel>;
    const mockMongooseRepository = {
        create: jest.fn().mockResolvedValue(mockPost)
    };

    beforeAll(async () => {

        const moduleRef = await Test.createTestingModule({
            providers: [
                {
                    provide: getModelToken(PostModel.name),
                    useValue: mockMongooseRepository
                }
            ]
        }).compile();
      
        repository = moduleRef.get<IPostRepository>(getModelToken(PostModel.name));
        mongooseMock = moduleRef.get(getModelToken(PostModel.name));
    });

    it("should be defined", () => {
        expect(repository).toBeDefined();
    });

    it("should create a post", async () => {
        const createSpy = jest.spyOn(repository, "create");
        const post = await repository.create({
            data: PostMapper.toPersistence(mockPost),
        });
        expect(post).toBeDefined();
        expect(post).toEqual(mockPost);
        expect(createSpy).toHaveBeenCalled();
        expect(mockMongooseRepository.create).toHaveBeenCalledWith({
            data: expect.objectContaining(PostMapper.toPersistence(mockPost)),
        });
    });
});
