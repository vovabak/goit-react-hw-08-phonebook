import { NavLink } from 'react-router-dom';
// import { Wrapper } from './AuthNav.styled';
import { Box, Link } from '@mui/material';


export const AuthNav = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',                
            }}>
            <Link
                component={NavLink}
                to='/register'
                underline='none'
                sx={{                
                    padding: 1,
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
                Register                
            </Link>            
            <Link
                component={NavLink}
                to='/login'
                underline='none'
                sx={{                
                    padding: 1,
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
                Log In
            </Link>
            {/* <NavLink to='/register'>Register</NavLink>            
            <NavLink to='/login'>Log In</NavLink> */}
        </Box>
    )
}