// import React from 'react'
// import UserContext from './UserContext'


// const UserContextProvider =  ({children}) =>{
//     const[user,setuser] = React.useState(null);
//   return (
//     <UserContext.Provider value={{user,setuser}}>
//     {children}
//     </UserContext.Provider>
//   )
// }

// export default UserContextProvider;
import React from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState('');
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserContextProvider;
