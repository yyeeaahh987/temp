export default function validateInfo(values) {
    let errors = {};

    //First Name
    if(!values.firstName.trim()) {
        errors.firstName = "First Name required"
    } else if (!/^[A-Za-z]+/.test(values.firstName.trim())) {
        errors.firstName = 'Enter a valid First Name';
    }

    //Last Name
    if(!values.lastName) {
        errors.lastName = "Last Name required"
    } else if (!/^[A-Za-z]+/.test(values.lastName)) {
        errors.lastName = 'Enter a valid Last Name';
    }

    //Mobile
    if(!values.mobile) {
        errors.mobile = "Mobile required"
    } else if (!/^[0-9]+/.test(values.mobile)) {
        errors.mobile = 'Please enter a valid mobile number';
    }

    //Email
    if(!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }

    //Password
    if (!values.password) {
        errors.password = 'Password required';
      } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
      }
    
      //Confirm Password
      if (!values.password2) {
        errors.password2 = 'Confirm Password required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      }
      return errors;
}