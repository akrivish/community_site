import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Commmunity</li>
                <li>Join</li>
                <li>Articles</li>
            </ul>
        </nav>
    )
}
export default Navbar