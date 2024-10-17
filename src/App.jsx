import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
