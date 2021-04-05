import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import dotenv from 'dotenv'
import Axios from 'axios'
import '../App.css';
import {FaRegCopy, FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Photo} from '../components/photo'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// https://api.unsplash.com/search/photos/?client_id=WTw-79X5QQiL2m0iEP0XcPZ80JWFkZ29lJa1v0O3_nA&query=cat
const url = `https://api.unsplash.com/photos/?client_id=`
const searchUrl = `https://api.unsplash.com/search/photos/?client_id=`
//https://api.unsplash.com/search/photos?page=1&query=office

const Container = styled.div`
    min-height: 100vh;
    margin: 7.5%;
.innerContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1px
    }
.picture_box{
    width: 250px;
    ${'' /* padding: 0.5rem;
    padding-bottom: 1rem; */}
    ${'' /* background: blue; */}
    position:static;
    overflow: hidden;
    z-index:1000
}
.imgBBox{
    overflow: hidden;
    position:relative
}
.image{
    width: 250px;
    height: 250px;
    position:relative;
    transition: all 0.8s;
    position: relative
}
.copy{
    color: white;
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.3rem
}
.copy:hover{
    transform: scale(1.1);
    opacity: 0.4;
    color: green
}
.image:hover{
    transform: scale(1.2)
}
.imageInfo{
    transform:translateY(50%);
    transition: all 1s;
    z-index: -1;
    position:absolute;
    background: rgba(10,10,10, 0.7);
    width: 100%;
    padding: 1rem 0
}

.picture_box:hover .imageInfo{
    transform: translateY(-100%);
    z-index: 1;
}
.linkBox{
    position: absolute;
    width: 100%;
    ${'' /* background: rgba(0,0,0, 0.5) */}
}
.bio{
    font-size: 0.9rem;
    color: #ddd;
    margin: 0.4rem
}
.userImg{
    border-radius: 50%;
    width: 3rem;
    height: 3rem
}
.bioLink{
    text-decoration:none;
    font-size: 0.8rem;
    opacity: 0.8;
    color: #34e
}
.bioLink span{
    color: white;
    opacity: 1;
}
.bioLink span:after{
    content:'';
    background: blue;
    width:20px;
    height: 3px;
    position:absolute;
    transition:all 2.5s;
    transform: translateY(700%)
}
.picture_box:hover span:after{
    width: 400px;
    transform: translate(-20%, 700%)
}
.bioLink: hover{
    opacity: 0.8
}
.copiednote{
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    z-index:1;
    top: 1rem;
    position: absolute;
    ${'' /* width: 200px; */}
    ${'' /* background: rgb(150,150,150,0.8); */}
     background: rgb(10,10,10,0.5);
    padding: 1.5rem;
    ${'' /* transform: translateX(-50%);
    margin-left: 43%; */}
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-iten: center
}
`

const Photos = ()=>{
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    
    const [search, setSearch] = useState('')
    const [term, setTerm] = useState('')

    const access_key=process.env.REACT_APP_ACCESS_KEY

    const fetchImages = async()=>{
        setIsLoading(true)
        //let imagesResponse = ;
        if(search){
            //`${searchUrl}${access_key}&per_page=${perPage}&page=${page}&query=${term}`
            // https://api.unsplash.com/search/photos/?client_id=WTw-79X5QQiL2m0iEP0XcPZ80JWFkZ29lJa1v0O3_nA&query=cat
            
             let imagesResponse = await Axios(`${searchUrl}${access_key}&query=${search}&per_page=${perPage}&page=${page}`).catch((error)=>{console.log(error)})
              if(page== 1){
                  setData(imagesResponse.data.results)
              }else{
                  setData(prev => {
                       console.log('page 0n 2')
                    return [...prev,...imagesResponse.data.results]
                })
              }
          
        }else{
            let imagesResponse = await Axios(`${url}${access_key}&page=${page}&per_page=${perPage}`).catch((error)=>{console.log(error)})
               setData(prev => {
                    console.log('page 0n 3')
                    return [...prev, ...imagesResponse.data]
                })
           
            
        }
         
        // }else{
        //     const imagesResponse = await Axios(fetchUrl).catch((error)=>{console.log(error)})
        // }
        //console.log(imagesResponse)
  
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


const handleSearch =(e)=>{
    e.preventDefault()
    setSearch(term)
    setPage(1)
    // start to handle serach 
}
const setTermFunc = (e)=>{
    setTerm(e.target.value)
    setPage(1)
}
useEffect(()=>[
        fetchImages()
],[page,search])   

return <Container id='itemContainer'>
         <h3>Access thousands of stock images free:</h3>
        <form onSubmit={handleSearch}>
            <input type='search' value={term} onChange={setTermFunc} className='form-search'/>
            <button className='search-btn' type='submit' ><FaSearch /></button>
        </form>
        <div className='innerContainer'>
       
            {data.map(item =>{
                const {id} = item
                return <Photo key={id} item={item}/>
            })}
        </div>
        {isLoading && <Loader type="TailSpin" color="#4a47a3" height={50} width={50}
        timeout={100000} />}
    </Container>
}

export default Photos