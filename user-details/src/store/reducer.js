const initialState = {
    UserDetails : []
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'UserDetails') {
        newState.UserDetails = [...action.value];
    }

    return newState
};

export default reducer;