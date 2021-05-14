const inventoryReducer = (state = [], action) => {
    switch(action.type) {
        case 'INSERT':
            return state;
        case 'INSERT_ALL':
            state = action.inventory;
            console.log(action)
            console.log(action.inventory)
            return action.inventory;
        case 'REMOVE':
            return state;
        case 'GET_ALL':
            return state;
        default:
            return state;
    }
}

export default inventoryReducer;