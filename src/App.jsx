import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ContactList from "./components/Contacts/ContactList/ContactList";
import AddContact from "./components/Contacts/AddContact/AddContact";
import ViewContact from "./components/Contacts/ViewContact/ViewContact";
import EditContact from "./components/Contacts/EditContact/EditContact";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>
    </>
  );
};

export default App;
