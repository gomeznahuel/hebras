import { FormContainer, FormWrapper, ErrorDiv } from "./style";
import { Input } from "../../common/Input";
import Button from '../../common/Button';

export const Form = ({ formik }) => {
  const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <Input placeholder="Username" name="name" type="text" onChange={handleChange} value={values.name} />
        {errors.name && touched.name && <ErrorDiv>{errors.name}</ErrorDiv>}

        <Input placeholder="Phone" name="phone" type="number" onChange={handleChange} value={values.phone} />
        {errors.phone && touched.phone && <ErrorDiv>{errors.phone}</ErrorDiv>}

        <Input placeholder="Email" name="email" type="email" onChange={handleChange} value={values.email} />
        {errors.email && touched.email && <ErrorDiv>{errors.email}</ErrorDiv>}

        <Button type="submit" textButton="Confirm Order" />
      </FormWrapper>
    </FormContainer>
  );
};
