import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations.js";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="div_app">
      <h1 className="title_header">
        Phone<span className="text_span">Book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
