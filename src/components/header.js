import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom'
import Sidebar, {Overlay} from './sidebar'
import {FaBars} from 'react-icons/fa'
import {ContextUser} from '../context'

const HeaderNav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
height: 10vh;
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
.heading h3{
    color:blue;
    position: absolute:
    left: 1rem;
}
.link{
    color: var(--text-color2);
    color: #66f;
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
    color: #6a89cc;
    color:blue;
    transition: all 5s
}
.active::after{
    content: '';
    position: absolute;
    height: 2px;
    width: 100px;
    background: var(--text-color);
    background: red;
    transform: translate(-100%, 1rem);
    animation: anim1 1s
}

.copiednote{
    z-index: 10000;
    padding: 40vh 0;
    height: 100vh; 
    position: fixed;
    top: 0; 
    width: 100vw;
    fontSize: 2rem; 
    animation: zoom1 1.5s ease-out
}
.copiednote2{
    z-index: 10000;
    padding: 40vh 0;
    height: 100vh; 
    position: fixed;
    top: 0; 
    width: 100vw;
    fontSize: 2rem; 
    animation: zoom1 1.5s ease-out
}
.undo{
	display: none
}
@keyframes zoom1{
    from{font-size: 1rem}
    to{font-size: 5rem; width: 100vw; height: 100vh}
}
.copiednote h3{
    margin: 0
}

.copiedImgnote{
    z-index: 10000;
    padding: 40vh 0;
    height: 100vh; 
    position: fixed;
    top: 0; 
    width: 100vw;
    opacity:0.8;
    background: black;
    fontSize: 2rem; 
    animation: zoom2 1s ease-out;
    ${'' /* background: var(--backgnd-color); */}
    color: white;
    text-transform: uppercase
}
@keyframes zoom2{
    from{font-size: 1rem}
    to{font-size: 3.5rem; width: 100vw; height: 100vh}
}
@keyframes anim1{
    from{width: 0px}
    to{width: 100px}
}
@media screen and (max-width: 700px){
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
    const {copiedColor, copiedText, hex, index, copiedImg} = ContextUser()


    const setMenu=()=>{
        setIsMenuOpen(true)
        setIsOverlay(true)
    }
    const closeMenu =()=>{
        setIsMenuOpen(false)
        setIsOverlay(false)
    }
     
   console.log(copiedText)
    return (
        <HeaderNav>
        {isOverlay && <Overlay closeMenu={closeMenu}/>}
        <div className='menu-btn' onClick={setMenu}>
            <FaBars />
        </div>
        <Sidebar mode={isMenuOpen} closeMenu={closeMenu}/>
       {copiedColor && <><div className='copiednote' style={{color: `${index > 10 ? 'white' : 'black'}`, background:`#${hex}`}}>
      <h3>COPIED</h3>
       <div>#{hex}</div>
       </div>
       </>}
       {copiedText && <><div className='copiednote' >
      <h3>COPIED</h3>
       </div>
       </>}
        {copiedImg && <><div className='copiedImgnote' >
      <div>Image URL</div><div>copied</div>
       </div>
       </>}
        <Link className=' heading' to='/' activeClassName='active'><h3>WDU</h3></Link>
              <ul className='links'>
                <NavLink to='/colors' className='link' activeClassName='active'>Color Shades Generator</NavLink>
                <NavLink to='/loren' className='link' activeClassName='active'>Loren Ipsun Generator</NavLink>
                <NavLink to='/photos' className='link' activeClassName='active'>Get Stock Photos</NavLink>
              </ul>
        </HeaderNav>
    )
}

export default Header