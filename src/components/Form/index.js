import { FormContainer, FormWrapper, ErrorDiv } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from '../../utils/validations'
import Button from '../../common/Button';
import { ProductNotFound } from "../NotFound";

export const Form = ({ handleChange, handleSubmitt, buyer, cart }) => {
  const formOptions = { resolver: yupResolver(formSchema) };
  
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors: formErrors } = formState;
  const { name, phone, email } = buyer;

  return (
    <FormContainer>
      {cart.length === 0 ? (
        <ProductNotFound text="No hay productos en el carrito." />
      ) : (
      <FormWrapper onSubmit={handleSubmit(handleSubmitt)}>
        <input placeholder="Nombre" name="name" type="text" value={name} {...register("name", { minLength: 3, maxLength: 20, required: true })} onChange={handleChange} />
        {formErrors.name && <ErrorDiv>{formErrors.name.message}.</ErrorDiv>}

        <input placeholder="Apellido" name="surname" type="text" value={buyer.surname} {...register("surname", { minLength: 3, maxLength: 20, required: true })} onChange={handleChange} />
        {formErrors.surname && <ErrorDiv>{formErrors.surname.message}.</ErrorDiv>}
        
        <input placeholder="Phone" name="phone" type="number" value={phone} {...register("phone", { maxLength: 16, minLength: 8, required: true })} onChange={handleChange} />
        {formErrors.phone && <ErrorDiv>{formErrors.phone.message}.</ErrorDiv>}
        
        <input placeholder="Email" name="email" type="email" value={email} {...register("email", { maxLength: 20, minLength: 3, required: true })} onChange={handleChange} />
        {formErrors.email && <ErrorDiv>{formErrors.email.message}.</ErrorDiv>}

        <input placeholder="Confirm Email" name="confirmEmail" type="email" {...register("confirmEmail", { maxLength: 20, minLength: 3, required: true })} onChange={handleChange} />
        {formErrors.confirmEmail && <ErrorDiv>{formErrors.confirmEmail.message}.</ErrorDiv>}

        <Button width={"fit-content"} height={"3em"} textButton="Confirm order" type="submit" disabled={cart.length === 0} />
        
      </FormWrapper>
      )}
    </FormContainer>
  );
};