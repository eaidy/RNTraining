import { ILoginRequest, ILogin, IUserDbModel } from '../abstract/IAuth';
// import { API_BASE_URL } from '../../evnconfig';
import axios from 'axios';

export async function loginRequest<IUserDbModel>(loginInfo: ILogin): Promise<IUserDbModel | null> {
    try {
        const response = await axios.post('http://192.168.0.10:5001/Users/LoginHandler',{
            ...loginInfo
        });
        const data: IUserDbModel = response.data;
        console.log(response.data)
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function signUpRequest<ISignUpRequest>(signUpInfo: ISignUpRequest | null) {
    try {
        const response = await axios.post('http://192.168.0.10:5001/Users/CreateCustomer',{
            ...signUpInfo
        });

        const data: IUserDbModel = response.data;
        return response.data;

    } catch (error) {
        console.log(error);
        return null;
    }
}