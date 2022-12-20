import { useState } from 'react';
import { ContactList } from '../components/contactList';
import { Filter } from '../components/filter';
import { ContactForm } from '../components/contactForm';
import { Box, Fab, Button, Modal } from '@mui/material';
import { Add } from '@mui/icons-material';


const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    
    return (
        <Box            
            sx={{            
                padding: 2,                
            }}>            
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => setIsModalOpen(true)}>                
                <Add />                
            </Fab>
            <Button>
                Add Contact
            </Button>
            <Modal
                open={isModalOpen}                
                onClose={() => setIsModalOpen(false)}
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
                    <ContactForm
                        id='add-contact-form'
                        onModalClose={() => setIsModalOpen(false)} />                    
                </Box>
            </Modal>            
            <Filter />
            <ContactList />           
        </Box>
    )
}

export default Contacts;
                                