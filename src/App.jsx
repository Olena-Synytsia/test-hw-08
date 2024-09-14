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

  useEffect(() => {
    window.localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
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
