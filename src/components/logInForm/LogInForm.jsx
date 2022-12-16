import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { logIn } from 'redux/auth/operations';
import { object, string } from 'yup';
import { FormStyled as Form } from './LogInForm.styled';
import { NavLink } from 'react-router-dom';
import {TextField, Button} from '@mui/material';


const initialValues = {    
    email: '',
    password: '',        
}

let signupSchema = object({    
    email: string().required(),
    password: string().required(), 
});

export const LogInForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {        
        dispatch(logIn(values));
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
                    style={{                    
                        marginBottom: '10px',                        
                    }}>Log In</Button>
                <NavLink to="/register">Haven’t Your account yet?</NavLink>                
            </Form>            
        </Formik>
    )
}