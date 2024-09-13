import { useState } from "react";
import Contact from "../Contact/Contact";
import contactsData from "../../UserData/contacts.json";
import s from "./ContactList.module.css";

const ContactList = () => {
  const [contacts, setContacts] = useState(contactsData);

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={s.container}>
      <ul className={s.element}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
