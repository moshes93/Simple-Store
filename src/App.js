import logo from './logo.svg';
import './App.css';
import InventoryContainer from './pages/InventoryContainer';
import ProductsHandler from './pages/ProductsHandler';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InventoryContainer}></Route>
        <Route path="/product" component={ProductsHandler}></Route>
      </Switch>
    </Router>
    // <InventoryContainer />
  );
}

export default App;
