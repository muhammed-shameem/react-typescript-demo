// import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }:{children:JSX.Element}) {
    const authenticated = false;
    // useEffect(()=>{

    // },[authenticated])
    if (!authenticated) {
        const queryParams = { q: 'unauthorized' };
        const queryString = new URLSearchParams(queryParams).toString();
        // not logged in so redirect to login page with the return url
        return <Navigate to={`/?${queryString}`} />
    }

    // authorized so return child components
    return children;
}