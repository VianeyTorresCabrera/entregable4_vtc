import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import addContact from './img/addContact.png';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null); 

  useEffect (()=>{
      axios
          .get('https://users-crud1.herokuapp.com/users/')
          .then(res => setUsers(res.data));
  },[]);

  const getUsers = () =>{
    axios
          .get('https://users-crud1.herokuapp.com/users/')
          .then(res => setUsers(res.data));
  }


  const selectUser = user => setUserSelected(user)  
   

  const deselectUser = () => setUserSelected(null)

  const removeUser = (id) =>{
    axios 
        .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(()=>getUsers())

  }

  const [showModal, setShowModal] = useState(false);
  
  const closeModal = () => setShowModal(false)


  return (
    <div className="App">

      <div className='btn_newUser'>
        {showModal && <UsersForm 
          getUsers={getUsers} 
          userSelected={userSelected} 
          deselectUser={deselectUser} 
          closeModal={closeModal}/>}        
        <button  onClick={() => setShowModal(true)} className='button_addContact'><img src={addContact} alt="" title='Add new user'/></button>
      </div>     
      <UsersList users={users} selectUser={selectUser} removeUser={removeUser} />
    </div>
  );
}

export default App;
