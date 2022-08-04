import * as Yup from 'yup';

export const validations = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(20, "El nombre debe tener máximo 20 caracteres"),
  phone: Yup.string()
    .required("El teléfono es requerido")
    .min(10, "El teléfono debe tener 10 dígitos")
    .max(16, "El teléfono debe tener máximo 16 dígitos"),
  email: Yup.string()
    .required("El email es requerido")
    .email("El email no es válido"),
});


// export const validations = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   } else if (values.name.length < 3) {
//     errors.name = "Must be at least 3 characters";
//   } else if (values.name.length > 15) {
//     errors.name = "Must be 15 characters or less";
//   } else if (!values.phone) {
//     errors.phone = "Required";
//   } else if (values.phone.length < 8) {
//     errors.phone = "Must be at least 8 characters";
//   } else if (values.phone.length > 10) {
//     errors.phone = "Must be 10 characters or less";
//   } else if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   } else if (values.email.length > 50) {
//     errors.email = "Must be 50 characters or less";
//   }
//   return errors;
// };
