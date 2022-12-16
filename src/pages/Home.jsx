import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <NavLink to="contacts">        
            <h1>My contacts</h1>            
        </NavLink>
    )
}