import { useDispatch } from 'react-redux';
import { remvoeProductFromInventory } from '../redux/actions/actions';
import { StyledTableCell, StyledTableRow } from '../styles';

export default function Product(props) {
    const { name, quantity, index } = props;
    const dispatch = useDispatch();

    return(
        <StyledTableRow>
            <StyledTableCell align="center">{name}</StyledTableCell>
            <StyledTableCell align="center">{quantity}</StyledTableCell>
            <StyledTableCell align="center"><button type="button" onClick={() => dispatch(remvoeProductFromInventory(index))}>Delete</button></StyledTableCell>
        </StyledTableRow>

        // <tr>
        //     <td>{name}</td>
        //     <td>{quantity}</td>
        //     <td>
        //         <button type="button" onClick={() => dispatch(remvoeProductFromInventory(index))}>Delete</button>
        //     </td>
        // </tr>
    )
}