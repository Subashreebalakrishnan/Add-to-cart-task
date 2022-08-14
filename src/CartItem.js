function CartItem ({ItemInCart,removeFromCart}){

    return (

      <div className="col-lg-8">
            <ol className="container list-group list-group-numbered">
            <li className=" container list-group-item d-flex align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">{ItemInCart.title}</div>
                  {ItemInCart.price}
                </div>
                <button onClick= {() => removeFromCart(ItemInCart)}className="badge bg-primary rounded-pill">x</button>
            </li>
            
            </ol>
            </div>
        );
}
export default CartItem

