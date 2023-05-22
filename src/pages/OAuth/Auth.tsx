import { useState } from "react";
import api from "../../api/api"
import {Button} from "../../components/ui/button"

export function Auth(){
    const [user, setUser] = useState(null);
    const handleAuth = async (e) =>{
        e.preventDefault();
        try{
            const user = await api.createAccount();
            setUser(user);
        }
        catch(e){
            console.error(e)
        }
    }
    
    return(
        <>
        <Button onClick={handleAuth}>Login</Button>
        </>
    )
}
