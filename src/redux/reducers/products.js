const productsReducer = (state = [], action) => {
    switch(action.type) {
        case 'INSERT_ONE':
            state.push(action.product);
            return state;
        case 'INSERT_ALL':
            return action.allProducts;
            //state = action.allProducts;
            //return state;
        case 'GET_ALL':
            return state;
        default:
            return state;
    }
}

export default productsReducer;