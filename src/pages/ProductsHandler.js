import { addNewProduct } from '../redux/actions/actions';
import { addNewProductToProductList } from '../logic/ApiCalls';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function ProductsHandler() {
    const dispath = useDispatch();
    const history = useHistory(); 
    const [productName, setProductName] = useState('');

    async function handleProductAddition() {
        const response = await addNewProductToProductList(productName);
        if(response.status == 200) {
            dispath(addNewProduct(productName));
            history.push('/');
        }
        else{
            // Error Message to user
        }
    }
    return(
        <div style={{marginTop: 35, marginLeft: 35}}>
            <input type="text" placeholder="Product Name" onChange={e => setProductName(e.target.value)}></input>
            <button style={{marginLeft: 15}} type="button" onClick={() => handleProductAddition()}>Add new Product</button>
        </div>
    )
}