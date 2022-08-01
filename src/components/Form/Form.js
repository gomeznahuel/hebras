import Button from "../../common/Button";

export const Form = ({ handleChange, handleSubmit, buyer, confirmOrder }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label> Name: </label>
      <input type="text" name="name" value={buyer.name} onChange={handleChange} />
      <label> Phone: </label>
      <input type="text" name="phone" value={buyer.phone} onChange={handleChange} />
      <label> Email: </label>
      <input type="text" name="email" value={buyer.email} onChange={handleChange} />

      <Button handleClick={confirmOrder} width={"fit-content"} height={"3em"} textButton="Confirm order" />
    </form>
  );
};
