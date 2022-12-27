import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { Item, Text } from '../listItem/ListItem.styled';
import { useState } from 'react';
import { Box, IconButton, Link } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


export const ListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const [isDeliting, setIsDeliting] = useState(false)
    const { name, number, id } = contact;    

    return (
        <Item>
            <Box                
                sx={{
                    display: 'flex',
                    flexDirection: 'column',                    
                }}>                
                <Text><b>{name}:</b></Text>                
                <Link                    
                    href={'tel:+38' + number}
                    underline="none"
                    sx={{
                        pt: 1,
                    }}>                    
                    {number}                    
                </Link>                
            </Box>
            <Box
                sx={{
                    minWidth: '80px',
                }}>                
                <IconButton                    
                    type="button"                    
                    aria-label="delete"
                    sx={{
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
                    }}>                    
                    <Edit                        
                        fontSize="small" />                    
                </IconButton>                
                <IconButton                    
                    type="button"                    
                    aria-label="delete"                    
                    disabled={isDeliting}                    
                    onClick={() => {                    
                        setIsDeliting(true);                        
                        dispatch(deleteContact(id));                        
                    }}
                    sx={{                        
                        ml: 1,                    
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
                    }}>                    
                    <Delete                        
                        fontSize="small" />                     
                
                    {/* {isDeliting ? 'Deleting...' : 'Delete'} */}
                </IconButton>                
            </Box>            
        </Item>
    )
}

ListItem.propTypes = {
    contact: PropTypes.shape({        
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
}