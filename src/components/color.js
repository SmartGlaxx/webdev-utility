import React, {useState, useEffect} from 'react';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';
import {FaRegCopy, FaSearch} from 'react-icons/fa'
import {ContextUser} from '../context'

export const Color =({item, i})=>{
    //  const [hexVal, setHexVal] = useState(0)
     const {setCopied, setHexVal} = ContextUser()

     const copiedFunc=()=>{
      setHexVal(hex, i)
      setCopied(true)
  }
       const {hex, weight, rgb} = item
       const newRgb = rgb.join(',')
    return (
        <>
        {/* {copied && <span className='copiednote' style={{background:`#${hex}`}}>COPIED</span>} */}
        <div className='colorContainer' style={{postion: 'relative'}}> 
        <div style={{backgroundColor: `#${hex}`, color: `${i > 10 ? 'white': 'black' }`}} >
        {/* {copied && <span style={{background: `#${hex}`}} className='box'>Color copied to clipboard</span>} */}
        <span className='hexVal'>#{hex}</span>
        {/* {copied && <div className='box' >Picture URL copied to clipboard</div>} */}
        <span className='copy' onClick={()=>{
            copiedFunc(hex, i) 
        navigator.clipboard.writeText(hex)
        }}><FaRegCopy /></span>
    {/* {copied && <span style={{background: `#${hex}`}} className='box'>Color copied to clipboard</span>} */}
        </div>
        <span style={{color: `${i > 10 ? 'white': "black"}`}} className='weight'>{weight}% {i> 10? 'darker': 'lighter'}</span>
        </div>
        </>
    )
}

