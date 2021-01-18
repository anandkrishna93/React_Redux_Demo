const initialState = {
    BuildingList: [{
        "buildngName": "Building 1",
        "buildngCode": "B1",
        "floor": "7",
        "room": "21",
        "freeRoom": "8"
    }, {
        "buildngName": "Building 2",
        "buildngCode": "B2",
        "floor": "10",
        "room": "30",
        "freeRoom": "15"
    }, {
        "buildngName": "Building 3",
        "buildngCode": "B3",
        "floor": "5",
        "room": "15",
        "freeRoom": "5"
    }],
    MeetingDetails : []
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'MeetingData') {
        newState.MeetingDetails.push(action.value);
    }

    return newState
};

export default reducer;