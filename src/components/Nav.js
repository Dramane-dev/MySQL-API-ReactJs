import React from 'react';
import {
    Link
  } from "react-router-dom";

// Import style
import styled from 'styled-components'

// Import fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = styled.nav`
    background-color: #282c34;
    color: white;
`;

// A TESTER 
const StyledLink = styled(Link)`
    text-align: end;
    color: inherit;
    text-decoration: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function Nav () {
    return(
        <>
        <Navbar>
            <nav className="navbar navbar-dark">
                    <div className="container">
                            <Link to='/'><FontAwesomeIcon icon={ faHome }/></Link>
                            <Link to='/Task' style={{ textDecoration: 'inherit', color: 'inherit'}}>New Task <FontAwesomeIcon icon={ faPlusCircle  }/></Link>
                            <Link to='/Register' style={{ textDecoration: 'inherit', color: 'inherit'}}>Register/Login <FontAwesomeIcon icon={ faUser }/></Link>
                
                        {/* <a className="navbar-brand" href="/"><FontAwesomeIcon icon={ faHome }/></a>
                        <a className="navbar-brand" href="/">New Task <FontAwesomeIcon icon={ faPlusCircle  }/></a>
                        <a className="navbar-brand" href="/" style={{textAlign: 'end'}}>Register/Login <FontAwesomeIcon icon={ faUser }/></a> */}
                    </div>
                </nav>
        </Navbar>
        </>
    );
}

export default Nav;