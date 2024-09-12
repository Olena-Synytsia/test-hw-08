import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
    return (
        <div>
            <p className={s.container}>ContactList</p>
      <Contact/>
      </div>
  );
};

export default ContactList;
