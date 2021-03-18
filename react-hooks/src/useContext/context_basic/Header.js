import React from 'react';
import { useUser } from './context';

// 예제1
// const Header = () => {
//     const {name} = useContext(UserContext);
//     return (
//         <header>
//             <a href="#">Home</a> Hello, {name}
//         </header>
//     )
// }

// 예제2
// const Header = () => {
//     const {user:{name,loggedIn}} = useContext(UserContext);
//     return (
//         <header>
//             <a href="#">Home</a> Hello, {name}, You are { loggedIn ? 'logged in' : 'anonymous' }{" "}
//         </header>
//     )
// }

const Header = () => {
    const {name, loggedIn} = useUser()

    return (
        <header>
            <a href="#">Home</a> Hello, {name}, You are { loggedIn ? 'logged in' : 'anonymous' }{" "}
        </header>
    )
}
    
    
export default Header