import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from "react-stripe-checkout";

function App() {

  const [product, setProduct] = useState({
    name: "React T-shirt",
    price: 35,
    company: "Indie Brand"
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <StripeCheckout stripeKey={""} token={""} name={product.name}>
          
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
