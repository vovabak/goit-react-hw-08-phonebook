import { Box } from '@mui/material';
import { RegisterForm } from '../components/registerForm/RegisterForm';

export const Register = () => {
    return (
        <Box
            sx={{            
                padding: 4,                
            }}>
            <RegisterForm />            
            {/* <NavLink
                to="/register"
                fontSize='12'
                style={{
                    '&.active': {backgroundColor: 'green'}
                }}>
                Haven’t Your account yet?
            </NavLink> */}
        </Box>
    )
}