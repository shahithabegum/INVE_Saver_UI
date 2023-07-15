import * as Yup from 'yup';
export const loginValidation=Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().max(10, 'Must be 10 characters or less').required('Password is Required'),
   
})