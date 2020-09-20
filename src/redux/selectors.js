export const gettopics = (state) => {
    
    return Object.keys(state.Tasklist.data)
  };

  export const gettasks = (state) => {
    
    return state.Tasklist.data
  };