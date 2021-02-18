import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';


const Header = styled.header`
    color:#fff;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:0 10px;
    background-color:rgba(20,20,20,0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8)
`

const List = styled.ul`
    display:flex; 
`

// &:hover{
//     background-color:blue
// }

const Item = styled.li`
    width:50px;
    height:50px;
    text-align:center;
    border-bottom:5px solid ${props => props.current ? '#e74c3c' : 'transparent' };
    transition:border-bottom .5s ease-in-out
`

// &:not(:last-child) {
//     margin-right:10px
// }

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`


const MainHeader = ({ location:{ pathname }}) => {
    return (
        <Header>
            <List>
                <Item current={pathname === '/'} >
                    <SLink to="/">Moives</SLink>
                </Item>
                <Item current={pathname === '/tv'} >
                    <SLink to="/tv">TV</SLink>
                </Item>
                <Item current={pathname === '/search'} >
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </Header>
    );
};


export default withRouter(MainHeader);