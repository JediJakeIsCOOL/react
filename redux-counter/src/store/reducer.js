const initialState = {
    counter : 150,
    firstName : 'john',
    lastName : 'Doe'
    
    }

    const reducer = (state = initialState, action) => {
        if(action.type == 'INC_COUNTER') {

            return {
            ...state,
            
            counter : state.counter + 1
            
            }
            }
       else if(action.type == 'INC_COUNTER_NEG_ONE') {
            
            return {
            ...state, 

            counter : state.counter - 1
            }
        }  
      else if(action.type == 'INC_COUNTER_POS_FIVE') {
            return {
                ...state,
                counter : state.counter + 5
            }
        } 
        else if(action.type == 'INC_COUNTER_NEG_FIVE'){
            return {
                ...state, 
                counter : state.counter - 5
            }
        }
        return state
        
        }
       
    
        export default reducer;