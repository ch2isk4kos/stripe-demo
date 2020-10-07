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

  handlePayment = token => {
    // request body
    const body = {token, product};
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <StripeCheckout 
          stripeKey={process.env.REACT_APP_KEY} 
          token={handlePayment} 
          name={product.name}
          amount={product.price * 100}
          shippingAddress={""}
          billingAddress={""} />          
      </header>
    </div>
  );
}

export default App;
