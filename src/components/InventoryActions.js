import { useState, useEffect } from 'react';
import { insertToInventory } from '../logic/UIChanges';
import { useDispatch } from 'react-redux';
import { insertProductToInventory } from '../redux/actions/actions';

export default function InventoryActions(props) {
    console.log(props)

    const [quantity, setQunatity] = useState(1);
    const [ productName, setProductName ] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setProductName(props.allProducts.length > 0 ? props.allProducts[0].name : '')
    },[props.allProducts])

    function addToInventory() {
        dispatch(insertProductToInventory({name: productName, quantity}))
    }

    return(
        <div id="product-to-inventory-wrapper">
            <select style={{width: 200}} value={productName} onChange={e => setProductName(e.target.value)}>
                {
                    props.allProducts.map((entry, i) => {
                        const { name , quantity} = entry;

                        return(
                            <option value={name} key={i}>{name}</option>
                        )
                    })
                }
            </select>
            <input type="number" placeholder="quantity" onChange={(e) => setQunatity(e.target.value)}></input>
            <button type="button" onClick={() => addToInventory()}>+</button>
        </div>
    )
}