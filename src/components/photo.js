import React, {useState} from 'react';
import styled from 'styled-components';
import '../App.css';
import {FaRegCopy} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export const Photo =({item})=>{
const [copied, setCopied] = useState(false)

const setCopiedFunc=()=>{
    setCopied(true)
    setTimeout(() => {
        setCopied(false)
    }, 5000);
}
    const {likes, urls: {regular}, user: {bio, name, profile_image:{small}}, links: {html}} = item
    return (
        <div className='picture_box'  >
         {/* {copied && <div className='copiednote'>Picture URL copied to clipboard</div>} */}
            <div className='imgBBox'>
            <img src ={regular} alt={name} className='image'/>
            {copied && <div className='copiednote' >Picture URL copied to clipboard</div>}
            <FaRegCopy className='copy' onClick={()=>{
                setCopiedFunc()
                navigator.clipboard.writeText(regular)
            }}/>
                <div className='imageInfo'>
                    <div className='userName'>Uploaded by: {`${name || 'Anonnymous'}`}</div>
                    <img className='userImg' src = {small} alt='Image Anonnymous'/>
                    <div className='bio'>Bio: {`${(bio && bio.slice(0, 40).toLowerCase() + '...') || ' '}`}</div>
                    <Link className='bioLink' to={html}>More about <span>{`${name || 'the contributor'}`}</span></Link>
                </div> 
            </div>   
        </div>
    )
}


