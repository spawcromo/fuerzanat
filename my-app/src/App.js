
import { Nav } from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import  HomeScreen from './screens/HomeScreen'
import  ProductScreen  from './screens/ProductScreen'
import  CartScreen  from './screens/CartScreen';
import { SigninScreen } from './screens/SigninScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { ShippingAddressScreen } from './screens/ShippingAddressScreen';
import { PaymentMethodScreen } from './screens/PaymentMethodScreen';
import { PlaceOrderScreen } from './screens/PlaceOrderScreen';




function App() {



  return (

    <>

      <BrowserRouter>
      <Nav />
      

      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      
      
      

      </BrowserRouter>

    </>

  );
}

export default App;


