import { ILoginRequest, ILogin } from '../abstract/IAuth';
import axios from 'axios';

export async function loginRequest<ILoginRequest>({username, password}: ILogin) {
    try {
        const response = await axios.post('http://192.168.0.10:5001/Customers/LoginHandler',{
            username: username,
            password: password
        });

        return response.data;

    } catch (error) {
        console.log(error);
    }
}