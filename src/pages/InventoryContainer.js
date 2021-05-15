import { useState, useEffect } from 'react';
import InventoryActions from '../components/InventoryActions';
import InventoryList from '../components/InventoryList';
import { getAllProducts, getMyInventory, saveInventory } from '../logic/ApiCalls';
import { useSelector, useDispatch } from 'react-redux';
import { insertAllProducts, insertInventory } from '../redux/actions/actions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import useStyles from '../styles';


export default function InventoryContainer() {
    const products = useSelector(state => state.products);
    const inventory = useSelector(state => state.inventory);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        console.log("here")
        async function getProductsAndInventory() {
            const allProducts = await getAllProducts();
            const myInventory = await getMyInventory();

            dispatch(insertAllProducts(allProducts));
            dispatch(insertInventory(myInventory))
        }
        getProductsAndInventory();
    },[])

   /* const products = useSelector(state => state.reducer.products);
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

    },[]);*/

    return(
        <Container maxWidth="md" className={classes.inventoryContainer}>
            <InventoryActions allProducts={products}/>
            {/* <Link to='/product'>
                New Product
            </Link> */}
            <InventoryList />
            <Button variant="contained" className={classes.saveButton} onClick={() => saveInventory(inventory)} color="primary">Save</Button>
        </Container>
        
        // <div id="inventory-container">
        //     <InventoryActions allProducts={products}/>
        //     <Link to='/product'>
        //         New Product
        //     </Link>
        //     <InventoryList />
        //     <Button variant="contained" onClick={() => saveInventory(inventory)} color="primary">Save</Button>
        // </div>
    )
}