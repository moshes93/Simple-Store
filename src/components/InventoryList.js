import { useState } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';

export default function InventoryList() {
    const myInventory = [{name: "milk", quantity: 1}, {name: "meat", quantity: 3}]
    const inventory = useSelector(state => state.inventory);
    console.log(12)

    return(
        <table id="inventory-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                inventory.map((entry, i) => {
                    const { name, quantity } = entry
                    return(
                        <Product key={i} name={name} quantity={quantity} index={i} />
                    )
                })
            }
            </tbody>
        </table>
    )
}