import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootStore } from "../store/store";

interface RequireAuthProps {
    children: ReactNode;
};

const RequireAuth = ({children}: RequireAuthProps) => {

    const jwt = useSelector((state: RootStore) => state.user.jwt);

    if(!jwt) {
        return (
            <Navigate to='/auth/login' replace={true}/>
        );
    }
    return children;
};

export default RequireAuth;



