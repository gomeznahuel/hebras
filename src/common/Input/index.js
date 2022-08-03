import { InputContainer } from "./style"

export const Input = ({ id, name, type, placeholder, value, onChange, onClick }) => {
  return <InputContainer id={id} name={name} type={type} placeholder={placeholder}  value={value} onChange={onChange} onClick={onClick} />
}
