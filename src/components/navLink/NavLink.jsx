import { Link } from "./NavLink.styled"

export const NavLink = ({ children, fontSize = 16, to }) => {
    
    return (
        <Link            
            to={to}            
            style={{                    
                    fontSize: `${fontSize}px`,
                }}>
            {children}            
        </Link>
    )
}