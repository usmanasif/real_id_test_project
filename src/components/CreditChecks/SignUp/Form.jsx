import React, {useRef} from "react";
import InputField from "components/CreditChecks/SignUp/InputField";
import { Formik } from 'formik';
import * as Yup from "yup";

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (values) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    alert(`User ${name} has been signed up with email: ${email}`);
    document.getElementById("nameField").value = "";
    document.getElementById("emailField").value = "";
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Name is required'),
    email: Yup.string().email('Invalid Email Address').matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid Email Format'
    ).required('*Email is required')
  });

  return (
    <div className="forarea">
			<h2>Get Started Today</h2>
      <Formik 
        enableReinitialize 
        initialValues={{ name: "", email: "" }} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit} 
        validateOnBlur
      >
        {({ handleSubmit, values, handleChange }) => (
          <form 
            name="frm_landlord" 
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="l_newreport" value="1" />
            <input type="hidden" name="step" value="2" />
              <ul>
                <InputField 
                  text="Your Name" 
                  type="text" 
                  name="name" 
                  placeholder="Enter your full name" 
                  innerRef={nameRef} 
                  value={values.name}
                  onChange={handleChange}
                  id="nameField"
                />
                <InputField 
                  text="Your Email" 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email address" 
                  innerRef={emailRef} 
                  value={values.email}
                  onChange={handleChange}
                  id="emailField"
                />
              </ul>
            <button type="submit" name="submit" className="button btn-lg pull-right nomargin">
              Sign Up — It's Free!
            </button>
          </form>
        )}
      </Formik>
      <div className="input-inline tollfree">Toll Free : (888) 727-3368</div>
		</div>
  )
}

export default Form;