import { useDispatch, useSelector } from "react-redux";
import { Box, Button} from '@mui/material';
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
// import { Wrapper, UserInfo, Button } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'end',                
                alignItems: 'center',    
                flexWrap: 'wrap',    
            }}>            
            <Box
                component='p'                
                sx={{                    
                    m: 0,
                    mb: 0.2,
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 1,
                    color: '#1976d2',
                }}>                
                {user.email}
            </Box>
            <Button                              
                type='button'                
                onClick={() => dispatch(logOut())}                
                sx={{
                    fontSize: 16,            
                    fontWeight: 'bold',
                    lineHeight: 1,
                    textTransform: 'lowercase',
                    color: '#1976d2',
                    '&:hover': {
                        color: '#FFF',
                        bgcolor: '#1976d2',
                    },
                    '&:focus': {
                        color: '#FFF',
                        bgcolor: '#1976d2',
                        outline: 0,
                    }, 
                }}>Log Out</Button>
        </Box>
    )
}