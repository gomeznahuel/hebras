import { useState } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";

const ContactForm = ({ ref, setContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    // contact form ref
    ref.current.scrollIntoView({ behavior: "smooth" });

    const objContact = {
      name,
      phone,
      address,
      comment,
    };
    setContact(objContact);
    setName("");
    setPhone("");
    setAddress("");
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleContactFormSubmit}>
        <label htmlFor="name">
          Name
          <Input type="text" id="name" value={name} onChange={({ target }) => setName(target.value)} />
        </label>
        <label htmlFor="phone">
          Phone
          <Input type="text" id="phone" value={phone} onChange={({ target }) => setPhone(target.value)} />
        </label>
        <label htmlFor="address">
          Address
          <Input type="text" id="address" value={address} onChange={({ target }) => setAddress(target.value)} />
        </label>
        <label htmlFor="comment">
          Comment
          <Input type="text" id="comment" value={comment} onChange={({ target }) => setComment(target.value)} />
        </label>
        <Button textButton="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
