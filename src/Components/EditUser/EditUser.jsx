import React ,{useState} from 'react';
import "./EditUser.css";

const EditUser = () => {

    const [enteredName , setEnteredName] = useState('');
    const [enteredUsername ,setEnteredUsername] = useState("")
    const [tochNameIsValid , setTochNameIsValid] = useState(false)
    const [tochUsernameIsValid , setTochUsernameIsValid] = useState(false)


    const nameIsValid = enteredName.trim() !== '';
    const inputIsValided = !nameIsValid && tochNameIsValid;
    const usernameIsValid = enteredUsername.trim() !== '';
    const userInputIsValid = !usernameIsValid && tochUsernameIsValid;

    const changeInputHandler =(e) =>{
        setEnteredName(e.target.value);
    }
    const changeInputUserHandler =(e) => {
        setEnteredUsername(e.target.value)
    }

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
        console.log(enteredName)
        console.log(enteredUsername)
        setEnteredName("")
        setEnteredUsername("")
        setTochNameIsValid(false)
        setTochUsernameIsValid(false)
    }

    const nameInputClasses = inputIsValided ? "invalid" : ""
    const usernameInputClasses = userInputIsValid ? "invalid" : ""

    return (
        <div className="container">
            <form className="form-editUser"  onSubmit={formSubmissionHandler}>
                <label htmlFor="user">Name</label>
                <input type="text"
                       name="user"
                       id="user"
                       onChange={changeInputHandler}
                       value={enteredName}
                       onBlur={blurInputChangeHandler}
                       className={nameInputClasses}
                />
                {inputIsValided && <p className="error-text">name must not be empty.</p>}
                <label htmlFor="username">UserName</label>
                <input
                    value={enteredUsername}
                    onChange={changeInputUserHandler}
                    onBlur={blurInputUserChangeHandler}
                    name="username"
                    id="username"
                    type="text"
                    className={usernameInputClasses}
                />
                {userInputIsValid && <p className="error-text">userName must not be empty.</p>}
                <div className="form-btn">
                <button type="submit" className="f-btn" style={{backgroundColor:"#37C2E7", color:"white"}}>Edit User</button>
                <button type="submit" className="f-btn">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;