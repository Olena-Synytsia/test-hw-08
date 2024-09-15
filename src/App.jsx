import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsData from "./UserData/contacts.json";
import "./App.css";

const App = () => {
  const [filter, setFilter] = useState(() => {
    const searchName = window.localStorage.getItem("filter");
    return searchName ? JSON.parse(searchName) : "";
  });

  const [contacts, setContacts] = useState(contactsData);

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("contacts");
  //   return savedContacts ? JSON.parse(savedContacts) : [];
  // });

  useEffect(() => {
    window.localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
    setFilter("");
    return setContacts;
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchValue={filter} onSearchChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
