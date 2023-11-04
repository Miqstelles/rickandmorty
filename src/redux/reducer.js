const initialState = {
    filteredItems: [],
    pageNumbers: 0
};

function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILTERED_ITEMS':
            return {
                ...state,
                filteredItems: action.payload
            };
        default:
            return state;
    }
}

export default filtersReducer;
