import { z } from "zod";


export const AuthResponseSchema = z.object({
    statusCode: z.number(),
    token: z.string()
});