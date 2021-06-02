import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import ProductsContainer from './components/ProductsContainer';
import MyListContainer from './components/MyListContainer';
import Navbar from './components/Navbar';
import {ListProvider} from './context/AppContext'

function App() {
  return (
    <>
      <Router>
      <ListProvider> 
          <Navbar/>

          <Switch>

            <Route exact component={Home} path="/" />
            
            <Route exact component={ProductsContainer} path="/productos" />
           
            <Route exact component={MyListContainer} path="/mi-lista" />

          </Switch>
      </ListProvider> 
      </Router> 
    </>
  );
}

export default App;
