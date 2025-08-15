import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { TbHexagonLetterHFilled } from "react-icons/tb";
import { FaShopify } from "react-icons/fa6";


export default function header(){
    return (
        <div className="Header">

            <div className="header-container">
                <div className="header-logo">
                    <span><FaShopify /></span>
                    <h1>Eych - commerce</h1>
                </div>
                
                <div className="header-search">
                    <input type="text" placeholder="Search for products..."/>
                    <span><IoSearchOutline /></span>
                </div>

                <div className="header-cart">
                <span><FiShoppingCart/></span>
                <span><IoPersonOutline /></span>
                <span><FaRegHeart /></span>
                </div>
            </div>

            <div className="lower-header">
                <p>Categories</p>
                <p>Deals</p>
                <p>New Arrivals</p>
                <p>Best Sellers</p>
                <p>About</p>
                <p>Contact</p>
            </div>
    </div>
    );
}