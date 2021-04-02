import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const HeaderNav = styled.nav`
display:flex;
justify-contents:center;
height: 4rem;
background: black;
color: white;

.link{
    color:#ccc;
    text-decoration:none;
    transition: all 0.5s;
    font-size: 1rem;
    margin: 1rem
}
.link:hover{
    font-size: 1.1rem;
    margin: 0.5rem
    color:red
}
`

const Header =()=>{
    return (
        <HeaderNav>
        Web Dev Utility
              <ul>
                <Link to='/' className='link'>Home</Link>
                <Link to='/colors' className='link'>Color Shades Generator</Link>
                <Link to='/loren' className='link'>Loren Ipsun Generator</Link>
              </ul>
        </HeaderNav>
    )
}

export default Header