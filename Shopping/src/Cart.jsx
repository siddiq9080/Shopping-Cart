




import React, { useState } from 'react';
import './Cart.css';

const products = [
    {  
        id:"1",
        sale:"Sale",
        
        size:"450*300",
        name:"item 1",
        product:"Sale item",
        price:"$50.00"
    },
    
    {   
        id:"2",
        sale:" .   ",
        
        size:"450*300 ",
        name:"item 2",
        product:"Fancy product",
        price:"$120.00-$280.00",
    },
    
    {   
        id:"3",
        sale:"Sale",
        
        size:"450*300 ",
        name:"item 3",
        product:"Specisl item",
        price:"$20.00" 
    },
    
    {   
        id:"4",
        sale:".",
       
        size:"450*300 ",
        name:"item 4",
        product:"Popular item",
        star:"",
        price:"$40.00",
    },
    
    {  
        id:"5",
        sale:".",
        size:"450*300 ",
        name:"item 5",
        product:"Fancy product",
        star:"",
        price:"$40.00-$80.00",
    },
     
    {   
        id:"6",
        sale:"sale",
        size:"450*300 ",
        name:"item 6",
        product:"Special item",
        star:"",
        price:"$20.00"
    },
       
    {  
        id:"7",
        sale:"sale",
        size:"450*300 ",
        name:"item 7",
        product:"Sale item",
        price:"$50.00"
    },
    
    {   
        id:"8",
        sale:".",
        size:"450*300 ",
        name:"item 8",
        product:"Popular item",
        star:"",
        price:"$40.00",
    },
  ];


  const Product = ({ id, sale,size,product,star,price,name,addToCart, removeFromCart, isInCart }) => (
    <>
    <div className='cart'>
    <div className="first">
       <p className='sale'>{sale}</p>
<h1 className='size'>{size}</h1> 
</div>
      <h3>{name}</h3>
      <h3 className='product'>{product}</h3>

{star === "" && <i className="fa-solid fa-star"></i>}
{star === "" && <i className="fa-solid fa-star"></i>}
{star === "" && <i className="fa-solid fa-star"></i>}
{star === "" && <i className="fa-solid fa-star"></i>}
{star === "" && <i className="fa-solid fa-star"></i>}
<p className='price'>{price}</p>

      {isInCart ? (
        <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(id)}>Add to Cart</button>
      )}
    </div>
    </>
  );


  const Cart = ({ cart, removeFromCart }) => (
    <div className="cart">
      <h2>Added item </h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button className='CartButton' onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  );

  const App = () => {
    const [cart, setCart] = useState([]);

    
  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="container">
   <div className="addedItem">
   <Cart cart={cart} removeFromCart={removeFromCart} />
   </div>
     
    
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
      
    
  );
};

export default App;

