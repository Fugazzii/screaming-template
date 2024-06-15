import { QueryContractOptions } from "contracts/shared";
import { z } from "zod";

export const GetUsersSchema = z.object({
    page: z.number(),
    limit: z.number()
});

export type GetUsersQuery = z.infer<typeof GetUsersSchema>;

export const GetUsersContract: QueryContractOptions<undefined, typeof GetUsersSchema> = {
    path: "/users",
    usecase: "get-users",
    method: "GET",
    query: GetUsersSchema
};
