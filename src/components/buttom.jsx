import { GrSecure } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

export  default function buttom() {

    return(

        <div className="buttom-container">
            <div className="left-container">
                <h3>Why Shop Here</h3>
                <h6>We ensure a quality service, easy return and tracking of users for a secure and smooth environment.</h6>
            </div>

            <div className="right-container">
                <span><GrSecure /> Secure Payment</span>
                <span><FaUserCheck /> User Validation</span>
                <span><FaShippingFast /> Easy Return</span>
            </div>
        </div>

    )

}