import { QueryContractOptions } from "contracts/shared";
import { z } from "zod";

export const GetUserByIdSchema = z.object({
    id: z.string()
});

export type GetUserByIdParams = z.infer<typeof GetUserByIdSchema>;

export const GetUserByIdContract: QueryContractOptions<typeof GetUserByIdSchema> = {
    path: "/user/:id",
    usecase: "get-user-by-id",
    method: "GET",
    params: GetUserByIdSchema
};