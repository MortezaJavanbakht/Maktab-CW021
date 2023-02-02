import { useContext } from "react";
import { UsersContext } from "../../App";
import { requests } from "../../scripts/request";
import './UserList.css'


function UserList() {

    const usersDB = useContext(UsersContext)
    const users = usersDB.allUsers

    return ( <div className="userListContainer">
        <h2>View users</h2>
        <table>
            <thead><tr><th>ID</th><th>Name</th><th>Username</th><th>Actions</th></tr></thead>
            <tbody>
            {users && users.map(item=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>
                        <button onClick={()=>requests.delete(usersDB.setAllUsers, item.id)}>DELETE</button>
                        <button onClick={()=>usersDB.setEditUser({id: item.id, name: item.name, username: item.username})}>EDIT</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div> );
}

export default UserList;