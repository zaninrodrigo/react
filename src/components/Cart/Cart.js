import { useContext, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa"
import './Cart.css'
import { Link } from "react-router-dom";
import createOrder from "../../utils/orders";
import OrderModal from "../order/OrderModal";
import { clear } from "@testing-library/user-event/dist/clear";


const buyerMock = {
  name: 'Rodrigo',
  phone: '3704469785',
  email: 'rodrigo@gmail.com'
}

const Cart = () => {
  const {cart, total, removeItem, clear} = useContext(CartContext);
  const [user, setUser] = useState(buyerMock)
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleDelete = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);
  
  const handleClose = () => setShowModal(false);

  const handleBuy = async() => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    }
   
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear()
  }

  const showTable = cart.length > 0

  return (
    <Container className="cartContainer">
      <h1>Carrito de compra</h1>

      {showTable && (
        <>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>< FaTrashAlt onClick={() => handleDelete(item.id)}/></td>
                  </tr>
                ))}
                
              </tbody>
          </Table>
          <h3>Total: ${total}</h3>
          <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
        </>
      )}
       
      {!showTable && (<Link to='/'> <Button variant="success">Seguir Comprando</Button> </Link>)}

      <OrderModal 
          showModal={showModal} 
          onClick={handleClose} 
          onBuy={handleBuy}
          orderId={orderId}
      />

    </Container>
  );
}
 
export default Cart;