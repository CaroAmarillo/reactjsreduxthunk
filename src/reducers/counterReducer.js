const initialState = {
    count1: 0
    
};

export default (state = initialState, action) => {
    let newStore;
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            newStore = Object.assign({}, state, {
                ...state,
                count1: state.count1 + 1
            });
           return newStore;
      
        case 'DECREMENT_COUNTER':
            newStore = Object.assign({}, state, {
                ...state,
                count1: state.count1 - 1
            });
            return newStore;
        default:
           return state;
    }
   }

