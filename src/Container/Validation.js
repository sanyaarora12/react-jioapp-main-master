export default function Validations(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phonenumber) {
      errors.password = 'Phone number is required';
    } else if (values.password.length < 10) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.shopname) {
      errors.shopname = 'Shop name is required';
    } 
    return errors;
  }