
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



function Card ({item,CartItems,handleAddToCart,}){

    return(

            <div className="col-lg-4 mb-2 mt-2">
            <div className="card" style={{width: '18rem'}}>
            <img src= "https://www.mockupworld.co/wp-content/uploads/dynamic/2018/10/free-apple-devices-ipad-iphone-apple-watch-mockup-psd-3-690x455-c-default.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <span> <FontAwesomeIcon icon={faStar} /></span>
                <span> <FontAwesomeIcon icon={faStar} /></span>
                <span> <FontAwesomeIcon icon={faStar} /></span>
                <span> <FontAwesomeIcon icon={faStar} /></span>
                <span> <FontAwesomeIcon icon={faStar} /></span>
                <p className="card-text">{item.price}</p>
                <button disabled={CartItems.some((obj) => obj.id===item.id)} onClick={() => {handleAddToCart(item)}} className="btn btn-primary">Add to Cart</button>
            </div>
            </div>
            </div>
           
        );
}
 
export default Card