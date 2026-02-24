import { Link, useNavigate } from "react-router-dom"

function Header(){
    const name = localStorage.getItem("username");
    const navigate = useNavigate();

    // const handleLogout = () => {  
    //     localStorage.clear();   //deletes everything from local storage
    //     navigate("/");  //redirect to login page
    // };


    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("cart");

        navigate("/");
    };
    return(
        <>
        <header>
        <h1>🛍️MY STORE</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {name ? <button onClick={handleLogout} className="pbtn">LogOut</button> : null}
        </nav>
        {/* <div id="user-display">😎Welcome, User</div> */}
    <div id="user-display">
        {name ? `Welcome, ${name}` : ""}
      </div>
        </header>
        </>
    )
}
export default Header