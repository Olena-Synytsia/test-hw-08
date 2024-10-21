import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";

import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import toast from "react-hot-toast";

const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch {
        toast.error("Error fetching contacts:");
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={s.container}>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      <ul className={s.element}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
