import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './user.css';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchData = async() =>{
      const response = await axios.get("http://localhost:8000/api/getAll")
      setUsers(response.data)
    }
    fetchData()
  },[])

  const deleteUser = (id) =>{
    axios.delete(`http://localhost:8000/api/deleteUser/${id}`).then((res) =>{
      setUsers((prevUser) => prevUser.filter((user) => user._id !== id))
    }).catch((err) =>{
      console.log(err)
    })
  }


  return (
    <div className='userTable'>
      <Link to={"/add"} className='addButton'> Add user</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>user name</th>
            <th>user email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return(
                  <tr key={user._id}> 
                  <td>{index+1}</td>
                  <td>{user.fname} {user.lname}</td>
                  <td>{user.email}</td>
                  <td>
                    <button  onClick={() => deleteUser(user._id)}>Delete</button>
                    <Link to={`/edit/`+user._id}>Edit</Link>
                  </td>
                  </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default User
