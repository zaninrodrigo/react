import { Container, Navbar, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';
const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Boom Burger
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#Hamburguesas">Hamburguesas</Nav.Link>
                    <Nav.Link href="#bebidas">Bebidas</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget></CartWidget>
            </Container>
        </Navbar>
    )
}

export default NavBar;