import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom'
import {FaWindowClose} from 'react-icons/fa'

const SideBar = styled.nav`
    ${'' /* width: 90vw;
    height: 100vh;
    background: #ddd;
    position: absolute;
    left:0;
    color: var(--text-color);
    z-index: 10;
    box-shadow:
    0 4.9px 2.2px rgba(0, 0, 0, 0.02),
    0 11.7px 5.3px rgba(0, 0, 0, 0.028),
    0 22px 10px rgba(0, 0, 0, 0.035),
    0 39.3px 17.9px rgba(0, 0, 0, 0.042),
    0 73.5px 33.4px rgba(0, 0, 0, 0.05),
    0 176px 80px rgba(0, 0, 0, 0.07)
    ; */}

.links-list{
    text-decoration: none;
    height: 100vh;
    margin: 0;
    padding: 20vh 0;
    justify-content: center;
    align-items:
}
.link{
    color: var(--text-color2);
    text-decoration:none;
    transition: all 0.5s;
    font-size: 1rem;
    margin: 2rem 0
}
.link:hover{
    color: #fff
}
.overlay{
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(30,30,30, 0.9);
    height: 100%;
    width: 100vw;
    z-index: 100;

}
  .closeMenu{
      color: #900;
      font-size: 2rem;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem
  }
  @media screen and (max-width: 230px){
      .link{font-size: 0.9rem}
  }
`
export const Overlay =({closeMenu})=>{
    return (
        <SideBar onClick={closeMenu} >
        <div className='overlay'>
        <h1>OVERLAY</h1>
        </div>
        </SideBar>
    )
}

const Sidebar =({mode,closeMenu})=>{
    return (
        <SideBar className={`${ mode ? 'sidebar slide' : 'sidebar'}`}>
        <span className='closeMenu' onClick={()=>{
            closeMenu()
        }}><FaWindowClose/></span>
        <div>
            <ul className='links-list'>
                <NavLink to='/colors' className='link' onClick={closeMenu} activeClassName='active'>Color Shades Generator</NavLink><br/><br/>
                <NavLink to='/loren' className='link' onClick={closeMenu} activeClassName='active'>Loren Ipsun Generator</NavLink><br/><br/>
                <NavLink to='/photos' className='link' onClick={closeMenu} activeClassName='active'>Get Stock Photos</NavLink>
              </ul>
        </div>
        </SideBar>
    )
}


export default Sidebar