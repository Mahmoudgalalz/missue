import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}:any){
    const {user}:any = useAuth();

    if(!user){
        return <Navigate to="/"/>
    }
    return children;
}