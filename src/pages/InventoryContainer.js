import { useState, useEffect } from 'react';
import InventoryActions from '../components/InventoryActions';
import InventoryList from '../components/InventoryList';
import { Row } from 'react-bootstrap';
import { getAllProducts, getMyInventory, saveInventory } from '../logic/ApiCalls';
import { useSelector, useDispatch } from 'react-redux';
import { insertAllProducts, insertInventory } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

export default function InventoryContainer() {
    const products = useSelector(state => state.reducer.products);
    const inventory = useSelector(state => state.reducer.inventory);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProductsAndInventory() {
            const allProducts = await getAllProducts();
            console.log(allProducts);

            const myInventory = await getMyInventory();
            console.log(myInventory);

            dispatch(insertAllProducts(allProducts));
            dispatch(insertInventory(myInventory));
        }
        
        getProductsAndInventory();

    },[]);

    return(

        <div id="inventory-container">
            <InventoryActions allProducts={products}/>
            <Link to='/product'>
                {/* <p style={{textDecoration: 'underline'}}>New Product</p> */}
                New Product
            </Link>
            <InventoryList />
            <button type="button" onClick={() => saveInventory(inventory)}>save</button>
        </div>
    )
}