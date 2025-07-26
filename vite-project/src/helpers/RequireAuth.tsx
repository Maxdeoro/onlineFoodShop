import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
    children: ReactNode;
};

const RequireAuth = ({children}: RequireAuthProps) => {
    const jwt = localStorage.getItem('jwt');

    if(!jwt) {
        return (
            <Navigate to='/auth/login' replace={true}/>
        );
    }
    return children;
};

export default RequireAuth;

// import type { ReactNode } from "react";
// import { Navigate, useLocation } from "react-router-dom";

// interface RequireAuthProps {
//   children: ReactNode;
// }

// const RequireAuth = ({ children }: RequireAuthProps) => {
//   const location = useLocation();
//   const jwt = localStorage.getItem('jwt'); 
//     // const jwt = 'm';

//   if (!jwt) {
//     return <Navigate to="/auth/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default RequireAuth;

