import Product from "../../components/Product"
import productsReducer from "../reducers/products"

export const insertAllProducts = products => {
    return {
        type: 'INSERT_ALL_PRODUCTS',
        payload: products
    }
}

export const insertInventory = products => {
    return {
        type: 'INSERT_INVENTORY',
        payload: products
    }
}

export const insertProductToInventory = product => {
    return {
        type: 'INSERT_PRODUCT_TO_INVERNTORY',
        payload: product
    }
}

export const remvoeProductFromInventory = index => {
    return {
        type: 'REMOVE_PRODUCT_FROM_INVENTORY',
        payload: index
    }
}

export const addNewProduct = name => {
    return {
        type: 'ADD_NEW_PRODUCT',
        payload: name
    }
}