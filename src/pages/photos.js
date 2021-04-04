import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import dotenv from 'dotenv'
import Axios from 'axios'
import '../App.css';
import {FaRegCopy} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// https://api.unsplash.com/photos/?client_id=WTw-79X5QQiL2m0iEP0XcPZ80JWFkZ29lJa1v0O3_nA
const url = `https://api.unsplash.com/photos/?client_id=`
// const searchUrl = `https://api.unsplash.com/search/photos/`

const Container = styled.div`
    min-height: 100vh;
    margin: 7.5%;
.innerContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem
    }
.picture_box{
    width: 200px;
    padding: 0.5rem;
    padding-bottom: 1rem;
    background: white;
    
}
.imgBBox{
    overflow: hidden;
}
.image{
    width: 200px;
    height: 200px;
    position:relative;
    transition: all 0.8s
}
.image:hover{
    transform: scale(1.2)
}
.linkBox{
    position: absolute;
    width: 100%;
    background: rgba(0,0,0. 0.5)
}
.bio{
    font-size: 0.8rem;
    color: #333
}
.userImg{
    border-radius: 50%;
    width: 3rem;
    height: 3rem
}
.bioLink{
    text-decoration:none;
    font-size: 0.8rem;
    opacity: 0.6
}
.bioLink: hover{
    opacity: 0.8
}
`

const Photos = ()=>{
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    
    const access_key=process.env.REACT_APP_ACCESS_KEY

    const fetchImages = async(fetchUrl)=>{
        setIsLoading(true)
        const imagesResponse = await Axios(fetchUrl).catch((error)=>{console.log(error)})
        
         setData(prev => {
             return [...prev, ...imagesResponse.data]
         })
        setIsLoading(false)
    }

useEffect(()=>{
    const windowScroll = window.addEventListener('scroll', handleScroll)
},[])

const handleScroll = ()=>{
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const windowScrolled = window.scrollY

    if((windowScrolled + windowHeight) == documentHeight){
        setIsLoading(true)
        setPage(prev =>{
            return prev + 1
        }) 
     
        // fetchImages(`${url}${access_key}&page=${page}&per_page=${perPage}`)  
        // setIsLoading(false)  
    }
}

useEffect(()=>[
        fetchImages(`${url}${access_key}&page=${page}&per_page=${perPage}`)
],[page])   

return <Container id='itemContainer'>
         <h3>Access thousands of stock images free:</h3>
      
        <div className='innerContainer'>
            {data.map(item =>{
                {/* console.log(item) */}
                const {id, likes, urls: {regular}, user: {bio, name, profile_image:{small}}, links: {html}} = item
                return <div className='picture_box' key={id} >
                    <div className='imgBBox'>
                    <img src ={regular} alt={name} className='image'/>
                    </div>
                    <div className='userName'>Uploaded by: {`${name || 'Anonnymous'}`}</div>
                    <img className='userImg' src = {small} alt='Image Anonnymous'/>
                    <div className='bio'>Bio: {`${(bio && bio.slice(0, 40).toLowerCase() + '...') || ' '}`}</div>
                    <Link className='bioLink' to={html}>More about {`${name || 'the contributor'}`}</Link>
                </div>
            })}
        </div>
        {isLoading && <Loader type="TailSpin" color="#4a47a3" height={50} width={50}
        timeout={100000} />}
    </Container>
}

export default Photos