// MODELS
export type ILogin = {
    username: string;
    password: string;
}

export type ISignUpInfo = {
    firstname: string;
    lastname: string;
    birthday: Date;
    phone: string;
    username: string;
    password: string;
}

export type IUserDbModel = {
    id: number;
    firstname: string;
    lastname: string;
    birthday: Date;
    phone: string;
    username: string;
    password: string;
};

// INTERFACES

export interface ILoginRequest {
    (Object: ILogin): IUserDbModel;
}

export interface ISignUpRequest {
    (Object: ISignUpInfo): IUserDbModel;
}