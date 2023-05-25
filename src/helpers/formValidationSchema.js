import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('*Name is required'),
  email: Yup.string().email('Invalid Email Address').matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    'Invalid Email Address'
  ).required('*Email is required')
});
