export default function reducer(prevState, action){
    switch(action.type){
        case 'UPDATE_LOGIN_USERNAME':
            return {...prevState, color : action.payload}
        case 'UPDATE_LOGIN_PASSWORD':
            return {...prevState, backgroundColor: action.payload} 
        default:
            throw Error('reducer error')
    }
}