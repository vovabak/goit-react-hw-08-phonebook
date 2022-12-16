import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: inline-block;    
    text-decoration: none;
    padding: 10px;    
    color: #1976d2;
    outline: none;    
    font-weight: bold;

        :hover, :focus {
            text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
        } 

        &.active {
            color: #FFF;
            background-color: #1976d2;
            border-radius: 4px;            
        }
`