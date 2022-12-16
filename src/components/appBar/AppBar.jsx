import { AuthNav } from "components/authNav/AuthNav";
import { UserMenu } from "components/userMenu/UserMenu";
import { NavLink } from "components/navLink/NavLink";
import { Nav, Header } from "./AppBar.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const isRefresching = useSelector(selectIsRefreshing);

    return (
        <Header>                
            <Nav>
                <NavLink to='/' fontSize='24' >Phonebook</NavLink>
                {isLoggedIn? <UserMenu /> : <AuthNav />}
            </Nav>
        </Header>
    )
}