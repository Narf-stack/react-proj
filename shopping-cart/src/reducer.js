// state: current state before the update
// action: what we are trying to do
const reducer = (state,action) =>{
  if(action.type === 'CLEAR_CART'){
    return {...state,cart:[]}
  }
  return state
}

export default reducer
