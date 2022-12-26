import { useState } from 'react';
import { ContactList } from '../components/contactList';
import { Filter } from '../components/filter';
import { AddContactForm } from '../components/contactForm';
import { Box, Fab, Modal } from '@mui/material';
import { Add } from '@mui/icons-material';


const Contacts = () => {
    const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false);
    // const [isUpdateContactModalOpen, setIsUpdateContactModalOpen] = useState(false);
    
    
    return (
        <Box            
            sx={{            
                p: 2,
                pt: 4,
            }}>            
            <Fab
                color="primary"
                aria-label="add contact"
                size="small"                
                onClick={() => setIsAddContactModalOpen(true)}
                sx={{
                    ml: 'calc(50% - 80px)',
                }}>                
                <Add
                    fontSize="small" />                 
                
                <Box
                    component={'span'}
                    sx={{
                        position: 'absolute',
                        left: '60%',
                        minWidth: '150px',                                       
                        color: '#1976d2',
                    }}>                      
                    Add Contact                    
                </Box>
                
            </Fab>            
            <Modal
                open={isAddContactModalOpen}                
                onClose={() => setIsAddContactModalOpen(false)}
                aria-labelledby='add-contact-form'
                sx={{                    
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',                    
                }}>
                <Box                    
                    sx={{ 
                        width: '80%',
                        maxWidth: 350,
                        mt: '-100px',
                        p: 2,
                        bgcolor: '#fff',
                        borderRadius: 1,
                        outline: 0,                        
                    }}>                    
                    <AddContactForm
                        id='add-contact-form'
                        onModalClose={() => setIsAddContactModalOpen(false)} />                    
                </Box>
            </Modal>            
            <Filter />
            <ContactList />           
        </Box>
    )
}

export default Contacts;
                                