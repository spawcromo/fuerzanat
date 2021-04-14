
import { Nav } from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import  HomeScreen from './screens/HomeScreen'
import  ProductScreen  from './screens/ProductScreen'
import { Comprar } from './components/Comprar';
function App() {


  return (

    <>

      <BrowserRouter>

      <Nav />
      <Route path="/product:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Comprar />
      

      </BrowserRouter>

    </>

  );
}

export default App;


