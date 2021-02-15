import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Supreme Store</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="sign-in.html">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {data.products.map(product => (
                <Product key={product._id} product={product}></Product>            
                ))}
            </div>
        </main>
        <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
