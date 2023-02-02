import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import UserList from "./Components/userList/UserList";
import { requests } from "./scripts/request";

export const UsersContext = createContext();

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [edituser, setEditUser] = useState({});
  useEffect(() => {
    requests.getall(setAllUsers);
  }, []);

  return (
    <>
      <UsersContext.Provider
        value={{ allUsers, setAllUsers, edituser, setEditUser }}
      >
        <UserList />
      </UsersContext.Provider>
    </>
  );
}

export default App;
