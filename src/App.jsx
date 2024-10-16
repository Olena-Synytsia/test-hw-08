import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage .jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";

import "./App.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register " element={<RegistrationPage />} />
        <Route path="/login " element={<LoginPage />} />
        <Route path="/contacts " element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
};
export default App;

// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "./redux/contacts/operations.js";

// import ContactForm from "./components/ContactForm/ContactForm.jsx";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
//

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className="div_app">
//       <h1 className="title_header">
//         Phone<span className="text_span">Book</span>
//       </h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

// export default App;
