import { useState } from "react";


export default function Form(){
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    // let handleChangeName = (event) => {
    //     setFullName(event.target.value);
    // };

    //  let handleUserName = (event) => {
    //     setUserName(event.target.value);
    // };

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        console.log(newValue);
        setFormData((prevData) => {
            return {...prevData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({            
            fullName: "",
            userName: "",
            password: ""
        });
    };

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name: </label>
        <input type="text" 
        placeholder="Enter full name" 
        id="fullname"
        name="fullName" 
        value={formData.fullName}
        onChange={handleInputChange}
        // onChange={handleChangeName} 
         />

        <br /><br /><br /><br />
        
        <label htmlFor="username">Username: </label>
        <input type="text" 
        placeholder="Enter username" 
        id="username"
        name="userName"
        value={formData.userName}
        onChange={handleInputChange}
        // onChange={handleUserName}  
        />

        <label htmlFor="password">Password: </label>
        <input type="password" 
        placeholder="Enter password" 
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        // onChange={handleUserName}  
        />
        <button>Submit</button>
    </form>
)
}