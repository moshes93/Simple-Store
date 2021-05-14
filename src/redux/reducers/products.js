const productsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEW_PRODUCT':
            return [...state, action.payload]
        case 'INSERT_ALL_PRODUCTS':
            return [...action.payload];
        default:
            return state;
    }
}

export default productsReducer;