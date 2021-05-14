export const insertInventory = products => {
    return {
        type: 'INSERT_ALL',
        inventory: products
    }
}