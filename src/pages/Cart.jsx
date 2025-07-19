import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price ($)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;