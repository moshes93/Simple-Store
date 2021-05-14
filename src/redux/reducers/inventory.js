const inventoryReducer = (state = [], action) => {
    switch(action.type) {
        case 'INSERT_PRODUCT_TO_INVERNTORY':
            return [...state, action.payload];
        case 'INSERT_INVENTORY':
            return [...action.payload];
        case 'REMOVE_PRODUCT_FROM_INVENTORY':
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
        default:
            return state;
    }
}

export default inventoryReducer;