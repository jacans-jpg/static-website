import { isAxiosError } from "axios";
import api from "../config/axios";
import { AuthResponseSchema } from "../schemas";

export async function Login({ email, password }: { email: string, password: string }) {
    try {
        const url = '/auth/login';
        const response = await api.post(url, {
            password,
            email
        })
        
        const result = AuthResponseSchema.safeParse(response.data);

        if(result.success){
            return result.data.token;
        }else{
            throw new Error("Hubo un error");
        }
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            throw new Error(error.response?.data.message);
        }
    }
}