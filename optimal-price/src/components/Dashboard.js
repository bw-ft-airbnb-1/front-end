import React, {useContext} from 'react';
import Context from '../contexts/loginContext';




export const Dashboard = () => {

    const {user, setUser} = useContext(Context);

    return(
        <div>This is working {user.name} </div>
    )
}