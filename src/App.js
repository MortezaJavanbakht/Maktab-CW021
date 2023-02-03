import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import UserList from "./Components/userList/UserList";
import { requests } from "./scripts/request";
import EditUser from "./Components/EditUser/EditUser";

export const UsersContext = createContext();

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [edituser, setEditUser] = useState({});
  useEffect(() => {
    requests.getall(setAllUsers);
  }, []);

  return (
    <div className="mainContainer">
      <UsersContext.Provider
        value={{ allUsers, setAllUsers, edituser, setEditUser }}
      >
        <h1>React CRUD App with Hooks</h1>
        <div className="bodyContainer">
          <EditUser />
          <UserList />
        </div>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
