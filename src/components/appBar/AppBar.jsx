import { AuthNav } from "components/authNav/AuthNav";
import { UserMenu } from "components/userMenu/UserMenu";
import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
// import { Nav, Header } from "./AppBar.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const isRefresching = useSelector(selectIsRefreshing);

    return (
        <Box
            component='header'            
            sx={{                    
                padding: '10px 10px 5px 10px',
                borderBottom: '1px solid #1976d2',                    
            }}>            
            <Box
                component='nav'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>                
                <Link
                    component={NavLink}                    
                    to='/'                    
                    underline='none'                    
                    sx={{                    
                        padding: 1,
                        fontSize: '20px',
                        fontWeight: 'bold',                    
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7],                            
                        },
                        '&:focus': {
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                            outline: 0,                        
                        },                        
                        '&.active': {
                            color: '#FFF',
                            backgroundColor: '#1976d2',                        
                            borderRadius: '4px',                            
                        },                        
                    }}>                    
                    Phonebook
                </Link>                
                {/* <NavLink to='/' fontSize='22' >Phonebook</NavLink> */}
                {isLoggedIn? <UserMenu /> : <AuthNav />}
            </Box>
        </Box>
    )
}