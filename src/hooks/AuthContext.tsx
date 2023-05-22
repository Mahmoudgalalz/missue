import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const AuthContext = createContext({});

export function AuthProvider({children}:any){
    const [user,setUser] = useState(null);
    const navigate = useNavigate();

    const login = async () => {
        const data = await api.createAccount();
        setUser(data);
        navigate("/dash");
    };
    const logout = async ()=>{
        await api.deleteCurrentSession();
        setUser(null);
        navigate("/", {replace:true})
    }
    const value = useMemo(
        ()=> ({
            user,
            login,
            logout,
        }),[user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
    return useContext(AuthContext)
}