import {Client, Account} from 'appwrite'
import { Server } from '../utils/config';

let api ={
    kit: null,

    provider:()=>{
        if(api.kit){
            return api.kit;
        }
        let client = new Client();
        client.setEndpoint(Server.endpoint).setProject(Server.project);
        const account = new Account(client)

        api.kit = {account};
        return api.kit
    },
    createAccount: ()=>{
        return api.provider().account.createOAuth2Session('github');
    }
}

export default api