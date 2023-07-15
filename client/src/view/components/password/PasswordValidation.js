import * as Yup from 'yup';
export const PasswordValidation=Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    oldpassword: Yup.string().max(10, 'Must be 10 characters or less').required('Password is Required'),
    password: Yup.string().max(10, 'Must be 10 characters or less').required('Password is Required'),
    confirmpassword:Yup.string().required("confirm Password is required").oneOf([Yup.ref('password')], 'Passwords must match')
})