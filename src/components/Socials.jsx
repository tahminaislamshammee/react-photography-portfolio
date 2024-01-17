import { useContext } from "react";
import { ImFacebook, ImTwitter, ImInstagram, ImYoutube} from "react-icons/im";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
const Socials = () => {
    const {mouseEnterHandler,mouseRemoveHandler} = useContext(CursorContext)
    return ( 
        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseRemoveHandler}
        className="hidden xl:flex ml-24">
            <ul className="flex gap-x-4">
                <li>
                    <Link to="https://www.facebook.com" target="_blank"><ImFacebook/></Link>
                </li>
                <li>
                    <Link to="https://www.twitter.com" target="_blank"><ImTwitter/></Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com" target="_blank"><ImInstagram/></Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com" target="_blank"><ImYoutube/></Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Socials;