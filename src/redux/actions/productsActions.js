export const getAll = () => {
    return {
        type: 'GET_ALL'
    }
}

export const insertAll = products => {
    return {
        type: 'INSERT_ALL',
        allProducts: products
    }
}