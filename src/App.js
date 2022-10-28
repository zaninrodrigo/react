import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import { createAllProducts } from './utils/products';
import Footer from './components/Footer';





function App() {  
 
 
    return (
      <BrowserRouter >
          <CartProvider>
            <NavBar />
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
                  <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                  <Route path='/item/:id' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<Cart />} />
              </Routes> 
              <Footer />
          </CartProvider>
      </BrowserRouter>
    );
}


export default App;
