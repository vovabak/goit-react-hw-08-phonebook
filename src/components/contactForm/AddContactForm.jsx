import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { useFormik, Formik } from 'formik';
import { object, string } from 'yup';
import {TextField, Button} from '@mui/material';
import { FormStyled as Form } from './AddContactForm.styled';


const initialValues = {
        name: '',
        number: '',
}

let signupSchema = object({
  name: string().required(),
  number: string().required(), 
});

export const AddContactForm = ({onModalClose}) => {
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

    const formik = useFormik({        
        initialValues,        
        validationSchema: signupSchema,    
        onSubmit: handleSubmit,    
    })

    return (
        <Formik>            
            <Form                
                onSubmit={formik.handleSubmit}>
                <TextField                    
                    sx={{                    
                        marginBottom: '10px',                        
                    }}                    
                    fullWidth                    
                    id="name"
                    label="Name"
                    variant="outlined"
                    type="text"                        
                    name="name"
                    inputProps={{
                        pattern: "^[a-zA-Zа-яА-Я ]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                        title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
                    }}                    
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}                    
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    sx={{                    
                        marginBottom: '10px',                        
                    }}                    
                    fullWidth                    
                    id="number"
                    label="Number"
                    variant="outlined"
                    type="tel"                        
                    name="number"
                    inputProps={{
                        pattern: "[+]?[0-9]*$",
                        title: "Phone number must be digits only and can start with '+'",
                    }}
                    required
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    error={formik.touched.number && Boolean(formik.errors.number)}                    
                    helperText={formik.touched.number && formik.errors.number}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        m: '0 auto',
                        width: '50%',                        
                    }}>
                    Add contact
                </Button>
                </Form>
        </Formik>
    )
}