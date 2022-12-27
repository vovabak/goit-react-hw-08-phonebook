import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import { ContactPage } from '@mui/icons-material';


export const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '30vh',
                padding: 2,
                textAlign: 'center',
            }}
        >
            <Link
                component={NavLink}
                to='contacts'
                underline='none'                
                sx={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: 1.4,
                    '&:hover': {                    
                        opacity: [0.9, 0.8, 0.7],                        
                    },
                    '&:focus': {                    
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                        outline: 0,
                    },
                }}>                
                <ContactPage
                    fontSize='large' />
                <br /> My contacts                
            </Link>            
        </Box>
    )
}