import { useState } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { StyledTableCell } from '../styles';

export default function InventoryList() {
    const myInventory = [{ name: "milk", quantity: 1 }, { name: "meat", quantity: 3 }]
    const inventory = useSelector(state => state.inventory);
    console.log(12)

    return (

        <TableContainer style={{marginTop: 15}} /*component={Paper}*/>
            <Table /*className={classes.table}*/ aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Quantity</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                            inventory.map((entry, i) => {
                                const { name, quantity } = entry
                                return (
                                    <Product key={i} name={name} quantity={quantity} index={i} />
                                )
                            })
                        }
                </TableBody>
            </Table>
        </TableContainer>

        /*<table id="inventory-table">
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
                                return (
                                    <Product key={i} name={name} quantity={quantity} index={i} />
                                )
                            })
                        }
                    </tbody>
                </table>*/
    )
}