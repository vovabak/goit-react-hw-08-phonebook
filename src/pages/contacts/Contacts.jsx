import { ContactList } from '../../components/contactList';
import { Filter } from '../../components/filter';
import { ContactForm } from '../../components/contactForm';
import { Wrapper } from './Contacts.styled';

const Contacts = () => {
    
    
    return (
        <Wrapper>
            <ContactForm />            
            <Filter />
            <ContactList />           
        </Wrapper>
    )
}

export default Contacts;
                                