import { FormContainer, FormWrapper, ErrorDiv } from "./style";
import Button from '../../common/Button';
import { useForm } from "react-hook-form";

export const Form = ({ handleChange, handleSubmitt, buyer, cart }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { name, phone, email } = buyer;

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit(handleSubmitt)}>
        <input placeholder="Nombre" name="name" type="text" value={name} {...register("name", { minLength: 3, maxLength: 20, required: true })} onChange={handleChange} />
        {errors.name && <ErrorDiv>El nombre es requerido.</ErrorDiv>}
        {errors.name && errors.name.type === "minLength" && <ErrorDiv>El nombre debe tener al menos 3 caracteres.</ErrorDiv>}
        {errors.name && errors.name.type === "maxLength" && <ErrorDiv>El nombre debe tener máximo 20 caracteres.</ErrorDiv>}

        <input placeholder="Phone" name="phone" type="number" value={phone} {...register("phone", { maxLength: 16, minLength: 8, required: true })} onChange={handleChange} />
        {errors.phone && <ErrorDiv>El teléfono es requerido.</ErrorDiv>}
        {errors.phone && errors.phone.type === "minLength" && <ErrorDiv>El teléfono debe tener al menos 8 caracteres.</ErrorDiv>}
        {errors.phone && errors.phone.type === "maxLength" && <ErrorDiv>El teléfono debe tener máximo 10 caracteres.</ErrorDiv>}

        <input placeholder="Email" name="email" type="email" value={email} {...register("email", { maxLength: 20, minLength: 3, required: true })} onChange={handleChange} />
        {errors.email && <ErrorDiv>El email es requerido</ErrorDiv>}
        {errors.email && errors.email.type === "minLength" && <ErrorDiv>El email debe tener al menos 3 caracteres.</ErrorDiv>}
        {errors.email && errors.email.type === "maxLength" && <ErrorDiv>El email debe tener máximo 32 caracteres.</ErrorDiv>}

        {/* Input => nombre, apellido, teléfono, email, confirm email. */}
        {/* GiF archive */}

        <Button width={"fit-content"} height={"3em"} textButton="Confirm order" type="submit" disabled={cart.length === 0} />
      </FormWrapper>
    </FormContainer>
  );
};