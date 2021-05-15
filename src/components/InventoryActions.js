import { useState, useEffect } from 'react';
import { insertToInventory } from '../logic/UIChanges';
import { useDispatch } from 'react-redux';
import { insertProductToInventory } from '../redux/actions/actions';
import { Fab, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useStyles from '../styles';
import { Link } from 'react-router-dom';

export default function InventoryActions(props) {
    console.log(props)

    const [quantity, setQunatity] = useState(1);
    const [productName, setProductName] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        setProductName(props.allProducts.length > 0 ? props.allProducts[0].name : '')
    }, [props.allProducts])

    function addToInventory() {
        dispatch(insertProductToInventory({ name: productName, quantity }))
    }

    return (

        <Grid container spacing={2} justify="center">
            <Grid item container direction="column" style={{width: 'auto'}} lg="auto" xs={4}>
                {/* <select style={{width: 200}} value={productName} onChange={e => setProductName(e.target.value)}>
                    {
                        props.allProducts.map((entry, i) => {
                            const { name , quantity} = entry;

                            return(
                                <option value={name} key={i}>{name}</option>
                            )
                        })
                    }
                </select> */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Product Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                        label="Product Name"
                    >
                        {
                            props.allProducts.map((entry, i) => {
                                const { name , quantity} = entry;

                                return(
                                    // <option value={name} key={i}>{name}</option>
                                    <MenuItem value={name} key={i}>{name}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                <Link to='/product'>
                    New Product
                </Link>
            </Grid>
            <Grid item lg="auto" xs={4}>
                {/* <input type="number" placeholder="quantity" onChange={(e) => setQunatity(e.target.value)}></input> */}
                <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={(e) => setQunatity(e.target.value)} />
            </Grid>
            <Grid item lg="auto" xs={4}>
                {/* <button type="button" onClick={() => addToInventory()}>+</button> */}
                <Fab aria-label="plus" className={classes.plusButton} onClick={() => addToInventory()}>+</Fab>
            </Grid>
        </Grid>

        // <div id="product-to-inventory-wrapper">
        //     <select style={{width: 200}} value={productName} onChange={e => setProductName(e.target.value)}>
        //         {
        //             props.allProducts.map((entry, i) => {
        //                 const { name , quantity} = entry;

        //                 return(
        //                     <option value={name} key={i}>{name}</option>
        //                 )
        //             })
        //         }
        //     </select>
        //     <input type="number" placeholder="quantity" onChange={(e) => setQunatity(e.target.value)}></input>
        //     <button type="button" onClick={() => addToInventory()}>+</button>
        // </div>
    )
}