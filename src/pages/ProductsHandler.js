import { addNewProduct } from '../redux/actions/actions';
import { addNewProductToProductList } from '../logic/ApiCalls';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import Alert from '../components/Alert';

export default function ProductsHandler() {
    const dispath = useDispatch();
    const history = useHistory(); 
    const [productName, setProductName] = useState('');
    const [messageDetails, setMessageDetails] = useState({open: false, message: ''});

    async function handleProductAddition() {
        const response = await addNewProductToProductList(productName);
        if(response.status == 200) {
            dispath(addNewProduct(productName));
            history.push('/');
        }
        else{
            // Error Message to user
            setMessageDetails({open: true, message: response.data.error});
        }
    }

    function handleErrorMessageClse() {
        setMessageDetails({open: false, message: ''});
    }

    return(
        <>
            <Snackbar open={messageDetails.open} autoHideDuration={6000} onClose={handleErrorMessageClse}>
                <Alert onClose={handleErrorMessageClse} severity="error">
                    {messageDetails.message}
                </Alert>
            </Snackbar>
            <div style={{marginTop: 35, marginLeft: 35}}>
                <input type="text" placeholder="Product Name" onChange={e => setProductName(e.target.value)}></input>
                <button style={{marginLeft: 15}} type="button" onClick={() => handleProductAddition()}>Add new Product</button>
                <Link style={{display: 'block'}} to={'/'}>My Inventory</Link>
            </div>
            
        </>
    )
}