import {Link} from "react-router-dom";

function RouteAboutPage(){
    return (
        <div>
            <h3>Home</h3>
            <p>현재 path = /about</p>
            <Link to="/about">Link to About</Link>
        </div>
    )
}
export default RouteAboutPage;
