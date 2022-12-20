import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { Label, Button, FormStyled as Form, Input } from './ContactForm.styled';


const initialValues = {
        name: '',
        number: '',
}

let signupSchema = object({
  name: string().required(),
  number: string().required(), 
});

export const ContactForm = ({onModalClose}) => {
    const dispatch = useDispatch();
    const {items} = useSelector(selectContacts);
    
    const handleSubmit = (values, { resetForm }) => {
        
        const { name, number } = values;
        const normalizedName = name.toLowerCase().trim();

        if (items.find(item => item.name.toLowerCase() === normalizedName)) {
            alert(`${name.trim()} is allready in contacts`)
            return
        }
        
        dispatch(addContact({           
            name: name.trim(),
            number,
            })
        )
        
        resetForm();

        onModalClose();
    }

    return (
        <Formik                
            initialValues={initialValues}            
            validationSchema={signupSchema}            
            onSubmit={handleSubmit}>            
                <Form>                    
                    <Label>                        
                        Name                        
                        <Input                            
                            type="text"                            
                            name="name"                            
                            pattern="^[a-zA-Zа-яА-Я ]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"                            
                            required                            
                        />                        
                    </Label>
                    <Label>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />                
                    </Label>
                    <Button type="submit">Add contact</Button>
                </Form>
        </Formik>
    )
}