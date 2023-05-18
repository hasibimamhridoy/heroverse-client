import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if (loading) {
        return <div className='text-4xl'>Loading........</div>
    }

    if (!user) {
        return <Navigate to='/login' state={{from:location}}> </Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRouter;