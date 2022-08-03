export const validations = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Must be at least 3 characters";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  } else if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 10) {
    errors.phone = "Must be at least 10 characters";
  } else if (values.phone.length > 10) {
    errors.phone = "Must be 10 characters or less";
  } else if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (values.email.length > 50) {
    errors.email = "Must be 50 characters or less";
  }
  return errors;
};
