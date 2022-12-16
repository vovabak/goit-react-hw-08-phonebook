import { ContactList } from '../components/contactList';
import { Filter } from '../components/filter';
import { ContactForm } from '../components/contactForm';

const Contacts = () => {
    
    
    return (
        <>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />           
        </>
    )
}

export default Contacts;
                                