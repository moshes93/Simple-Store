export function getAllProducts() {
    return fetch('http://34.238.153.187:8085/product/all', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

export function getMyInventory() {
    return fetch('http://34.238.153.187:8085/inventory', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
}

export function saveInventory(products) {
    return fetch('http://34.238.153.187:8085/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(products),
    })
        .then(response => {
            return response.json().then(json => {
                return {
                    data: json,
                    status: response.status,
                }
            })
        })
        .then(data => {
            return data;
        })
}

export function addNewProductToProductList(name) {
    return fetch('http://34.238.153.187:8085/product', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name
        })
    })
    .then(response => {
        return response.json().then(json => {
            return {
                data: json,
                status: response.status,
            }
        })
    })
    .then(data => {
        return data
    })
       
}