import React, {useState, useEffect} from 'react';
import '../App.css';
import styled from 'styled-components'
import {Text} from '../assets/lorenData'
import {FaRegCopy, FaSearch} from 'react-icons/fa';
import {ContextUser} from '../context'

const Container = styled.div`
font-size: 1.4rem;
margin: 0 7%;
max-width: 100%;
min-height: 100vh;
.lorenText{
  font-size: 14px;
  text-align:left
}
.copiednote{
  color: green;
  font-size: 1rem;
  font-weight: 600;
  z-index: 10;
  top: 10rem;
  position: fixed;
  width: 200px;
  background: rgb(230,230,240,0.9);
  padding: 1.5rem;
  transform: translateX(-50%);
  margin-left: 43%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-iten: center
}
.copy{
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.5s;
  margin: 20px;
  display: inline-block;
  box-sizing: content-box
}
.copy:hover{
  opacity: 0.7;
  color: green
}

.error{
  border: 1px solid red
}
.errorMsg{
  font-size:0.9rem;
  color: #e34
}
` 

const Loren =()=>{
  let [number, setNumber] = useState(1)
  const [lorenText, setLorenText] = useState([Text[0]])
  const [error, setError] = useState({show:false, msg: ''})
  const {textCopiedFunc} = ContextUser()

  const generateText=(e)=>{
    setError({show: false, msg: ''})
    e.preventDefault()
    let newText = [];
  
    if(number < 1){
      number= 1
       newText = Text.slice(0,number);
       setError({show:true, msg: 'Invalid number. Please enter a number greater then 0.'})
       return setLorenText(newText)
    }
     newText = Text.slice(0,number);
   return setLorenText(newText)
  }

  const setNumValue =(e)=>{
    setNumber(e.target.value)
    setError({show: false, msg: ''})
  }
    return (
        <Container>
           <form onSubmit={generateText}>
            <h3>Generate Placeholder texts:</h3>
            <p className='info'>Enter number of paragraphs to generate.</p>
            
            <div className='form_box'>
              <input type='search' value={number} className={`${error.show? 'form-style error':'form-style'}`}
               onChange={setNumValue}/>
              <button className='form-btn' type='submit'>Generate</button>
              </div>
          </form>
            <p className='errorMsg'>{error.show && error.msg}</p>
              <div className='boxx' >
              <span className='copy' onClick={()=>{
                textCopiedFunc()
                navigator.clipboard.writeText(lorenText)
              }}><FaRegCopy /></span>
                {lorenText.map(textItem => {
                  return <p className='lorenText'>{textItem}</p>
                })}
              </div>
        </Container>
    )
}

export default Loren


