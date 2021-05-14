import { useDispatch } from 'react-redux';
import { remvoeProductFromInventory } from '../redux/actions/actions';

export default function Product(props) {
    const { name, quantity, index } = props;
    const dispatch = useDispatch();

    return(
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <button type="button" onClick={() => dispatch(remvoeProductFromInventory(index))}>Delete</button>
            </td>
        </tr>
    )
}