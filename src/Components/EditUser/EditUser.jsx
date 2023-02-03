import React ,{useState} from 'react';
import { useContext } from 'react';
import { UsersContext } from '../../App';
import "./EditUser.css";
import { requests } from '../../scripts/request';

const EditUser = () => {

    // const [enteredName , setEnteredName] = useState('');
    // const [enteredUsername ,setEnteredUsername] = useState("")
    const [tochNameIsValid , setTochNameIsValid] = useState(false)
    const [tochUsernameIsValid , setTochUsernameIsValid] = useState(false)
    
    
    const userContext = useContext(UsersContext)
    const editUserInfo = userContext.edituser
    const nameIsValid = editUserInfo.name?.trim() !== '';
    const inputIsValided = !nameIsValid && tochNameIsValid;
    const usernameIsValid = editUserInfo.username?.trim() !== '';
    const userInputIsValid = !usernameIsValid && tochUsernameIsValid;

    // const changeInputHandler =(e) =>{
    //     setEnteredName(e.target.value);
    // }
    // const changeInputUserHandler =(e) => {
    //     setEnteredUsername(e.target.value)
    // }

    const blurInputChangeHandler = () => {
        setTochNameIsValid(true)
    }
    const blurInputUserChangeHandler = () => {
        setTochUsernameIsValid(true)
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        setTochNameIsValid(true);
        setTochUsernameIsValid(true);

        if(!nameIsValid){
            return;
        }
        if(!usernameIsValid){
            return;
        }
        // console.log(enteredName)
        // console.log(enteredUsername)
        requests.edit(userContext.setAllUsers, editUserInfo.id, editUserInfo)
        userContext.setEditUser({ name: "", username: ""})
        // setEnteredName("")
        // setEnteredUsername("")
        setTochNameIsValid(false)
        setTochUsernameIsValid(false)
    }

    const nameInputClasses = inputIsValided ? "invalid" : ""
    const usernameInputClasses = userInputIsValid ? "invalid" : ""


    return (
        <div className="container">
            <h2>Edit user</h2>
            <form className="form-editUser"  onSubmit={formSubmissionHandler}>
                <label htmlFor="user">Name</label>
                <input type="text"
                       name="user"
                       id="user"
                       onChange={(e)=>userContext.setEditUser({...editUserInfo, name: e.target.value})}
                       value={editUserInfo.name}
                       onBlur={blurInputChangeHandler}
                       className={nameInputClasses}
                />
                {inputIsValided && <p className="error-text">name must not be empty.</p>}
                <label htmlFor="username">UserName</label>
                <input
                    value={editUserInfo.username}
                    onChange={(e)=>userContext.setEditUser({...editUserInfo, username: e.target.value})}
                    onBlur={blurInputUserChangeHandler}
                    name="username"
                    id="username"
                    type="text"
                    className={usernameInputClasses}
                />
                {userInputIsValid && <p className="error-text">userName must not be empty.</p>}
                <div className="form-btn">
                <button type="submit" className="f-btn" style={{backgroundColor:"#37C2E7", color:"white"}}>Edit User</button>
                <button className="f-btn" onClick={(e)=>{e.preventDefault(); userContext.setEditUser({ name: "", username: ""});}}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;