const initState = {
    products: [],
    inventory: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_NEW_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'INSERT_ALL_PRODUCTS':
            console.log(action);
            return {
                ...state,
                products: action.payload
            }
        case 'INSERT_PRODUCT_TO_INVERNTORY':
            return {
                ...state,
                inventory: [...state.inventory, action.payload]
            }
        case 'INSERT_INVENTORY':
            return {
                ...state,
                inventory: action.payload
            }
        case 'REMOVE_PRODUCT_FROM_INVENTORY':;
            return {
                ...state,
                inventory: [...state.inventory.slice(0, action.payload), ...state.inventory.slice(action.payload + 1)]
            }
        default:
            return state;
    }
}

export default reducer;