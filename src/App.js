
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./components/Header"
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
    
    <Header/>
    <Router>
   
      <Routes>
      <Route exact path="/" element={<ProductListing/>}/>
      <Route exact path="/product/:productId" element={<ProductDetails/>}/>
      <Route>404 Page not found</Route>
      </Routes>
    </Router>
    
    
    
    </div>
  );
}

export default App;
