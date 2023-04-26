import { ILoginRequest, ILogin } from '../abstract/IAuth'


export function loginRequest<ILoginRequest>({username, password}: ILogin) {
    if(username === "atacano"){
        return password === "12151215" ? true : false;
    } else {
        return false;
    }
}