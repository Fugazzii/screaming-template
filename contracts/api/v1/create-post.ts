import { CommandContractOptions } from "contracts/shared";
import { z } from "zod";

export const CreatePostSchema = z.object({
    content: z.string(),
    title: z.string(),
    author: z.string(),
    createdAt: z.date().optional()
});

export type CreatePostDTO = z.infer<typeof CreatePostSchema>;

export const CreatePostContract: CommandContractOptions<typeof CreatePostSchema> = {
    path: "/post",
    usecase: "create-post",
    method: "POST",
    body: CreatePostSchema
};
