const initialState = {
    data: null
  }
  
  // Use the initialState as a default value
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
       
      default:
        return state;
    }
  }