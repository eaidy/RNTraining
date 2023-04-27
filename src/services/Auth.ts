import { ILoginRequest, ILogin } from '../abstract/IAuth'
import axios from 'axios';

export async function loginRequest<ILoginRequest>({username, password}: ILogin) {
    const results = await axios.post('http://192.168.0.10:5001/Customers/LoginHandler',{
            username: username,
            password: password
        })
        .then((response: any) => {
            return response.data
        })
        .catch((error: any) => {
            console.log(error);
        });

    console.log(results);

    return results;
    
}