
import { Nav } from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import  HomeScreen from './screens/HomeScreen'
import  ProductScreen  from './screens/ProductScreen'
import  CartScreen  from './screens/CartScreen';



function App() {




  return (

    <>

      <BrowserRouter>
      <Nav />
      

      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      
      
      

      </BrowserRouter>

    </>

  );
}

export default App;


