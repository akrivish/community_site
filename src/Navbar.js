import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar
