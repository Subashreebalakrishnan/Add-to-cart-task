import logo from './logo.svg';
import './App.css';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './CartItem';
import { useState } from 'react';


function App() {

  


  const [cart,setCart]= useState([]);
  const [total,setTotal]= useState(0)
  const [products, setProduct]=useState([

   
      {
        title : "iPhone",
        price : 40000,
         id:1    
      },
      
      {
        title : "iMac",
        price : 60000,
         id:2
  
      },
   
      {
        title : "iPen",
        price : 20000,
        id:3
      },
  
      {
        title : "iMacPro",
        price : 50000,
        id:4
      },
      {
        title : "iPad Air",
        price : 35000,
         id:5
      },
      {
        title : "iPad",
        price : 25000,
        id:6
      },
    


  ])

  let addToCart = (item) =>{
    
    setCart([...cart,item]);
    setTotal(total + item.price)
  };

  let removeFromCart = (item) => {

     let index= cart.findIndex((obj) => obj.id===item.id )
     cart.splice (index,1);
     setCart([...cart])
     setTotal(total-item.price)
  }
  
  return (
         
    <div className="container">
      <div className= "row">
        <div className="col-lg-8">
          <div className="row">
            {
            products.map ((item) =>{
              return <Card item={item} CartItems={cart} handleAddToCart={addToCart}></Card>;
            })
            }
          </div>
        </div>

        <div className= "row mt-4">
          {

            cart.length===0 ? <div><h4> No items in cart </h4></div> :  <div className="row">

            <ol className="list-group list-group-numbered"> 
            {
              cart.map((Temp)  => {
              return <CartItem ItemInCart={Temp} removeFromCart={removeFromCart}> </CartItem>
              })
            }
          </ol>
         
       
      
        <h2>Total-{total}</h2>
        </div>
          } 

         </div>
      </div>
    </div>

    );
  }


export default App;
