import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    `

export const Header = styled.header`
    padding: 10px 10px 5px 10px;
    border-bottom: 1px solid #1976d2;
    `    

// export const Link = styled(NavLink)`
//     display: block;    
//     text-decoration: none;
//     padding: 10px;    
//     color: #1976d2;
//     outline: none;
//     font-size: 24px;
//     font-weight: bold;

//         :hover, :focus {
//             text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
//         } 

//         &.active {
//             color: #FFF;
//             background-color: #1976d2;
//             border-radius: 4px;            
//         }
// `