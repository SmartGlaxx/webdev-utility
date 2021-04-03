import React from 'react'
import styled from 'styled-components';

const FootDiv = styled.div`
    background: black;
    position: relative;
    bottom: 0px;
    height: 2rem;
    width: 100%;
    color: white;
    font-size: 0.9rem;    
    .name{
        color: #98f;
        margin-left: 10px
    }
    
`


const Footer = ()=>{
    return (
        <FootDiv>
            &copy; {new Date().getFullYear()}
            <span className='name'>smartcodes</span>
        </FootDiv>
    )
}

export default Footer

