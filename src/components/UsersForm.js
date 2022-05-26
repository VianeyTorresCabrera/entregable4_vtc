import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, deselectUser, closeModal}) => {

    const[firstName,setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail]= useState("");
    const[birthday,setBirthday]=  useState("");
    const[password,setPassword] =useState("");
    const form = document.getElementById("formUsers")
    

   
    useEffect(()=>{        
        if(userSelected !== null){
            console.log(userSelected)
            setFirstName(userSelected.first_name);  
            setLastName(userSelected.last_name);
            setEmail(userSelected.email); 
            setPassword(userSelected.password); 
            setBirthday(userSelected.birthday);        
        } else{
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setBirthday("");
        }
    },[userSelected])//avisa   cada ves que cambie el estado de userSelected


    const submit = e =>{
        e.preventDefault();
        const user = {            
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,           
            birthday: birthday           
        }
        if(userSelected !== null){// si hay algo hay que editar            
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
                .then(() =>{
                    getUsers();
                    deselectUser();
                } )                            
        }else{        
            axios
                .post('https://users-crud1.herokuapp.com/users/', user)
                .then(()=> getUsers(),
                           deselectUser()
                     )            
                .catch(error => console.log(error.response))
                
        }
    form.reset(); 
    }

    


    return (
        <div className="form-container" id="formUsers">
             <div className='modal'>    
                <form onSubmit={submit} className="form">
                    <div className='form_tittle'>ADD USER</div>
                    <div className='input-container'>
                        <label htmlFor="first_name">FirstName   </label>
                        <input 
                            type="text" 
                            className="form-name"
                            id="first_name"
                            onChange={e =>setFirstName(e.target.value)}
                            value={firstName}                    
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="last_name">LastName   </label>
                        <input 
                            type="text" 
                            className="form-genre"
                            id="last_name"
                            onChange={e =>setLastName(e.target.value)}
                            value={lastName}                    
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password   </label>
                        <input 
                            type="text" 
                            className="form-genre"
                            id="password"
                            onChange={e =>setPassword(e.target.value)}
                            value={password}                    
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email  </label>
                        <input 
                            type="text" 
                            className="form-genre"
                            id="email"
                            onChange={e =>setEmail(e.target.value)}
                            value={email}                    
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="birthday">Birthday  </label>
                        <input 
                            type="date" 
                            className="form-genre"
                            id="birthday"
                            onChange={e =>setBirthday(e.target.value)}
                            value={birthday}  
                        />
                    </div >
                    <div className="buttons_form">
                        <button type="submit" className="button">Send</button>
                        <button onClick={closeModal} className="button">Close</button>
                    </div>
                </form>
            </div>
            <div className='overlay' onClick={closeModal}></div>
        </div>
        
    );
};

export default UsersForm;