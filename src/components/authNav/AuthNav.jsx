import { NavLink } from '../navLink/NavLink';
import { Wrapper } from './AuthNav.styled';


export const AuthNav = () => {
    return (
        <Wrapper>            
            <NavLink to='/register'>Register</NavLink>            
            <NavLink to='/login'>Log In</NavLink>
        </Wrapper>
    )
}