import React , {useState} from 'react';
import reducer from './reducer';

const AppContext = React.createContext()

const initialState ={
    copiedColor : false,
    hex: 0,
    index: 0,
    copiedImg: false
}
const AppProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const setCopied =()=>{
        dispatch({type: 'SET_COLOR_COPIED'})
        setTimeout(()=>{
            dispatch({type: 'UNSET_COLOR_COPIED'})
        },1500)
    }
    const setHexVal = (hex, i)=>{
        dispatch({type: 'SET_HEX_VALUE', payload: {hex, i}})
    }

    const setCopiedImg =()=>{
        dispatch({type: 'SET_IMG_COPIED'})
        setTimeout(()=>{
            dispatch({type: 'UNSET_IMG_COPIED'})
        },1000)
    }
    // const [copied, setCopied] = useState(false)
    return <AppContext.Provider value={{
...state, setCopied, setHexVal, setCopiedImg
    }}>
        {children}
    </AppContext.Provider>
}

const ContextUser = ()=>{
    return React.useContext(AppContext)
}

export {AppProvider, ContextUser}