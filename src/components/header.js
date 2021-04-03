import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom'
import Sidebar, {Overlay} from './sidebar'
import {FaBars} from 'react-icons/fa'

const HeaderNav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
height: 4rem;
background: black;
color: var(--text-color2);

.heading{
    font-family: Verdana;
    font-weight: 100;
    text-decoration:none
}
.heading: active{
    color: #ddd
}
.heading h2{
    position: absolute:
    left: 1rem;
}
.link{
    color: var(--text-color2);
    ${'' /* color: #ddd; */}
    text-decoration:none;
    transition: all 0.5s;
    font-size: 1rem;
    margin: 1rem
}
.link:hover{
    color: #fff
}
.menu-btn{
    font-size: 1.5rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    display:none;
    color: #ddd;
}
.active{
    color: white;
    ${'' /* text-decoration: underline; */}
    transition: all 5s
}
.active::after{
    content: '';
    position: absolute;
    ${'' /* top: 0; */}
    height: 2px;
    width: 100px;
    background: red;
    transform: translate(-100%, 1rem);
    animation: anim1 1s
}

@keyframes anim1{
    from{width: 0px}
    to{width: 100px}
}
@media screen and (max-width: 650px){
    .links{
        display:none
    }
    .menu-btn{
        display: block
    }
}
`

const Header =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isOverlay, setIsOverlay] = useState(false)
    const setMenu=()=>{
        setIsMenuOpen(true)
        setIsOverlay(true)
    }
    const closeMenu =()=>{
        setIsMenuOpen(false)
        setIsOverlay(false)
    }
    return (
        <HeaderNav>
        {isOverlay && <Overlay closeMenu={closeMenu}/>}
        <div className='menu-btn' onClick={setMenu}>
            <FaBars />
        </div>
        <Sidebar mode={isMenuOpen} closeMenu={closeMenu}/>
        <Link className=' heading' to='/' activeClassName='active'><h3>WDU</h3></Link>
              <ul className='links'>
                <NavLink to='/colors' className='link' activeClassName='active'>Color Shades Generator</NavLink>
                <NavLink to='/loren' className='link' activeClassName='active'>Loren Ipsun Generator</NavLink>
              </ul>
        </HeaderNav>
    )
}

export default Header