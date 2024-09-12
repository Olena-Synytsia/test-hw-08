// import { useState } from "react";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import "./App.css";

const App = () => {
  return (
    <div>
      <p>Phonebook</p>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
