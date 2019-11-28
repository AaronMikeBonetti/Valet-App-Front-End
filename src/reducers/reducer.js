export default function reducer(prevState, action){
    switch(action.type){
        case 'UPDATE_COLOR':
            return {...prevState, color : action.payload}
        case 'UPDATE_BACKGROUND':
            return {...prevState, backgroundColor: action.payload} 
        default:
            throw Error('reducer error')
    }
}