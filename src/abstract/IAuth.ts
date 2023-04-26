// MODELS

type ResponseModel = any

export type ILogin = {
    username: string;
    password: string;
}

// INTERFACES

export interface ILoginRequest {
    ({}: ILogin): ResponseModel;
}