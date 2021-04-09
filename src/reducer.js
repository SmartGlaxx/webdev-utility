const reducer = (state, action)=>{
    switch(action.type){
        case 'SET_COLOR_COPIED':
        return {...state, copiedColor: true}
        break;
        case 'UNSET_COLOR_COPIED':
        return {...state, copiedColor: false}
        break;
        case 'SET_HEX_VALUE':
        return {...state, hex: action.payload.hex, index: action.payload.i}
        break;
        case 'SET_IMG_COPIED':
        return {...state, copiedImg: true}
        break;
        case 'UNSET_IMG_COPIED':
        return {...state, copiedImg: false}
        break;       

        default:
        return state
    }
}

export default  reducer