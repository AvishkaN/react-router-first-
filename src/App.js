import {Route,Switch,Redirect} from 'react-router-dom';
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
     
      <Switch>
          <Route path='/' exact>
              <Redirect to='/welcome /'/>
          </Route>
          
          <Route path='/welcome'>
              <Welcome/>
          </Route>
          
          <Route path='/product' exact>
              <Product/>
          </Route>
        
          <Route path='/product/:productId' >
              <ProductDetailsPage/>
          </Route>
      </Switch>
    
    </main>
    </>
  );
}

export default App;
