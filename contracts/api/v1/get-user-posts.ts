import { QueryContractOptions } from "contracts/shared";
import { z } from "zod";

export const GetUserPostsSchema = z.object({
    page: z.number(),
    limit: z.number()
});

export type GetUserPostsQuery = z.infer<typeof GetUserPostsSchema>;

export const GetUserPostsContract: QueryContractOptions<undefined, typeof GetUserPostsSchema> = {
    path: "/user/:id/posts",
    usecase: "get-user-posts",
    method: "GET",
    query: GetUserPostsSchema
};