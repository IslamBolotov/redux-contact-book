

const initialState = {
  data: [],
  data2:null,
  isEdit: false,
  firstName:'',
  lastName:'',
  phoneNumber:''
}

const AppReducer = ( state = initialState, action) =>{
  
  switch(action.type){
    case 'SET_DATA': return{
      ...state,
      data:action.payload
    }
    case 'SET_DATA_FOR_MODAL': return{
      ...state,
      data2:action.payload
      
    }
    case 'SET_EDIT_STATUS': return{
      ...state,
      isEdit: action.payload
    }

    case 'firstName': return{
      ...state,
      firstName: action.payload
    }

    case 'lastName': return{
      ...state,
      lastName: action.payload
    }

    case 'phoneNumber': return{
      ...state,
      phoneNumber: action.payload
    }
    default: return state
  }
}

export default AppReducer; 