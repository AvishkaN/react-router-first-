import {Route} from 'react-router-dom';
import Welcome from './Pages/Welocme';
import Product from './Pages/Product';
import Header from './Components/Header/Header';
import ProductDetailsPage from './../src/Pages/ProductDetails';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    
    <main>
      <h2>Let's get started!</h2>
      <Route path='/welcome'>
          <Welcome/>
      </Route>
      
      <Route path='/product'>
          <Product/>
      </Route>
     
      <Route path='/product-details/:productId/:details'>
          <ProductDetailsPage/>
      </Route>
    
    </main>
    </>
  );
}

export default App;
