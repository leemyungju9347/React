import React, { useState,useContext } from 'react';


export const UserContext = React.createContext();

// 예제1
// const UserContextProvider = ({children}) => (
//  <UserContext.Provider value={{ name:'Nico' }}>
//      {children}
// </UserContext.Provider>
// );

// 예제2
// const UserContextProvider = ({children}) =>{ 
//     const [user,setUser] = useState({
//         name: 'Nico',
//         loggedIn: false
//     })

//     const logUserIn = () => {
//         return setUser({...user, loggedIn: !user.loggedIn })
//     }
//     return (
//         <UserContext.Provider value={{user,logUserIn}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

const UserContextProvider = ({children}) =>{ 
    const [user,setUser] = useState({
        name: 'Nico',
        loggedIn: false
    })

    const logUserIn = () => {
        return setUser({...user, loggedIn: !user.loggedIn })
    }
    return (
        <UserContext.Provider value={{ user, fn: { logUserIn } } }>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const {user} = useContext(UserContext);

    return user
}

export const useFns = () => {
    const {fn} = useContext(UserContext);

    return fn
}
   


export default UserContextProvider