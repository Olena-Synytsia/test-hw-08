import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div className={s.container}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button onClick={() => handleDeleteContact(id)} className="btn border">
        Delete
      </button>
    </div>
  );
};

export default Contact;
