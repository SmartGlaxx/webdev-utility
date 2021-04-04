import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Values from 'values.js'
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d43
`

const Loren =()=>{
    return (
        <Container>
        <h1>ERROR 404. Page not found</h1>        
        </Container>
    )
}

export default Loren