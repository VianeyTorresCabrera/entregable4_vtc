import React from 'react';
import Delete from '../img/delete.png'
import edit from '../img/pencil.png'


const UsersList = ({users, selectUser, removeUser}) => {

   
    return (
            
            <ul>
                <h1 className='tittle_users'>USUARIOS</h1>
                <div className='card_container'>
                    {                             
                        users.map(user => (                        
                            <li key={user.id} className="card">
                                <div><h2 className='user_name'>{user.first_name}{user.last_name}</h2></div>
                                <div className='correo'><p><span className='list_tittle'>CORREO </span>{user.email}</p></div>
                                <div className='cumpleaños'><p><span className='list_tittle'>CUMPLEAÑOS </span>{user.birthday}</p></div>
                                <div className='button_list_container'>
                                    <button className='button_list' onClick={ () => selectUser(user)}><img src={edit} alt="" /></button>
                                    <button className='button_list' onClick={ () =>removeUser(user.id)}><img src={Delete} alt="" /></button>
                                </div>                            
                            </li>                       
                        ))                   
                    }
                </div>
                <div>
                </div>
            </ul>
           
    
    );
}

export default UsersList;