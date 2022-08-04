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