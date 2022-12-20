import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LogInForm } from '../components/logInForm/LogInForm';

export const LogIn = () => {
    return (
        <Box
            sx={{            
                padding: 4,
                textAlign: 'center',
            }}>
            <LogInForm />
            <Link
                component={NavLink}
                to='/register'
                underline='none'
                sx={{
                    '&:hover': {                    
                        opacity: [0.9, 0.8, 0.7],                        
                    },
                    '&:focus': {                    
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                        outline: 0,
                    },
                }}>                
                Haven’t Your account yet?
            </Link>
        </Box>
    )
}
    