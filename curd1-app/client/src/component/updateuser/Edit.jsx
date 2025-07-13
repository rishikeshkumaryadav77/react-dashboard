import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
  
  
  const users={
    fname :"",
    lname:"",
    email:""
  }
  const {id} = useParams();
  const [user, setUser] = useState(users)
  const navigate = useNavigate()

  
  const inputChangeHandler = (e) =>{
    const{name, value} = e.target;
    setUser({...user, [name]:value})
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getOne/${id}`).then((res) => {
      setUser(res.data)
    }).catch((err) => console.log(err))
  }, [id])

  const submitForm = async(e) =>{
    e.preventDefault();
   await axios.put(`http://localhost:8000/api/update/${id}`, user).then((res) =>{
    alert("updated")
    navigate("/")
    })
  }
  
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h3>Update User</h3>
      <form onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="fname">
            First Name:-
          </label>
          <input type="text" value ={user.fname} name='fname' id='fname' placeholder='first name' autoComplete='off' onChange={inputChangeHandler}/>
        <br />

          <label htmlFor="lname">
            last name:-
          </label>
          <input type="text" value ={user.lname} name='lname' id='lname' placeholder='last name' autoComplete='off' onChange={inputChangeHandler}/>
              <br />
          <label htmlFor="email">
            Email:-
          </label>
          <input type="mail" value ={user.email} name='email' id='email' placeholder='enter email' autoComplete='off' onChange={inputChangeHandler}/>
          
          
          <br />
          <button type='submit'>Update user</button>

        </div>
      </form>
    </div>
  )
}

export default Edit
