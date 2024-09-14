import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div className={s.container}>
      <ul className={s.element}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
