import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({greeting}) => {
    return ( 
       <Container>
        <p>Lista de Burger</p>
        <h3 class="greeting">{greeting}</h3>
        </Container> 
    );
}
 
export default ItemListContainer;