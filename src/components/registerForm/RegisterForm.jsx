import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { register } from 'redux/auth/operations';
import { object, string } from 'yup';
import { FormStyled as Form } from './RegisterForm.styled';
import {TextField, Button} from '@mui/material';


const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',        
}

let signupSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    email: string().required(),
    password: string().required(), 
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        
        const { firstname, lastname, email, password } = values;
                
        dispatch(register({
            name: `${firstname} ${lastname}`,
            email,
            password,
        }));

        resetForm();
    }

    const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  })    

    return (
        <Formik>
            <Form
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    style={{
                        marginBottom: '10px',
                    }}
                    fullWidth
                    id="firstname"
                    label="firstname"
                    variant="outlined"
                    type="text"                        
                    name="Firstname"
                    required
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.touched.firstname && Boolean(formik.errors.firstname)}                    
                    helperText={formik.touched.firstname && formik.errors.firstname}                    
                />
                <TextField
                    style={{
                        marginBottom: '10px',
                    }}
                    fullWidth
                    id="lastname"
                    label="Lastname"
                    variant="outlined"
                    type="text"                        
                    name="lastname"
                    required
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}                    
                    helperText={formik.touched.lastname && formik.errors.lastname}                    
                />
                <TextField
                    style={{
                        marginBottom: '10px',
                    }}
                    fullWidth
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    type="email"                        
                    name="email"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}                    
                    helperText={formik.touched.email && formik.errors.email}                    
                />
                <TextField
                    style={{
                        marginBottom: '10px',
                    }}
                    fullWidth
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"                        
                    name="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}                    
                    error={formik.touched.password && Boolean(formik.errors.password)}                    
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button                    
                    type="submit"
                    variant="contained"
                    >Sign Up</Button>                           
            </Form>            
        </Formik>
    )
}