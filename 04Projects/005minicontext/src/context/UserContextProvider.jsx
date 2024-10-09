import React from 'react';
import UserContext from './UserContext';

//Children is same as the <Outlet />. Whatever we get in children(Which is generic name can be anything ), we simply pass it.
const UserContextProvider = ({children}) =>{

    const [user, setUser] = React.useState(null) // State
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;