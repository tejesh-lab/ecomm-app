import { useNavigate } from "react-router-dom"
import mobile from "../images/mobile.jpg"
import mobile2 from "../images/mobile2.jpg"
function Product(){
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if(isLoggedIn == "true"){
            navigate("/cart");
        }else{
            alert("Please login First");
            navigate("/login");
        }
    };

    return(
        <>
        <div className="products">
            <div className="product">
                <img src={mobile} alt="Product1" />
                <h3>PRODUCT-1</h3>
                <p>RS.60,000</p>
                <button onClick = {handleAddToCart}>ADD TO CART</button>
            </div>
            <div className="product">
                <img src={mobile} alt="Product2" />
                <h3>PRODUCT-2</h3>
                <p>RS.60,000</p>
                <button onClick = {handleAddToCart}>ADD TO CART</button>
            </div>
            <div className="product">
                <img src={mobile2} alt="Product3" />
                <h3>PRODUCT-3</h3>
                <p>RS.60,000</p>
                <button onClick = {handleAddToCart}>ADD TO CART</button>
            </div>
            <div className="product">
                <img src={mobile2} alt="Product4" />
                <h3>PRODUCT-4</h3>
                <p>RS.60,000</p>
                <button onClick = {handleAddToCart}>ADD TO CART</button>
            </div>
        </div>
        
        </>
    )
}
export default Product