import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
const Add = () => {

  const users = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }

  const [user ,setUser ] = useState(users)
  const navigate = useNavigate()

  const inputHandler = (e) =>{
    const{name, value} = e.target;
    setUser({...user, [name]:value})
    }

    const submitForm= async(e) =>{
      e.preventDefault()
      await axios.post("http://localhost:8000/api/create", user).then((res) => {
        console.log(res)
        navigate("/")
      }).catch(err => console.log(err))
    }

  return (
    
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add new User</h3>
      <form onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="fname">
            First Name:-
          </label>
          <input type="text" name='fname' id='fname' placeholder='first name' autoComplete='off' onChange={inputHandler}/>
        <br />

          <label htmlFor="lname">
            last name:-
          </label>
          <input type="text" name='lname' id='lname' placeholder='last name' autoComplete='off' onChange={inputHandler}/>
              <br />
          <label htmlFor="email">
            Email:-
          </label>
          <input type="mail" name='email' id='email' placeholder='enter email' autoComplete='off' onChange={inputHandler}/>
          <br />
          <label htmlFor="password">
            Password:- 
          </label>
          <input type="password" name='password' id='password' placeholder='enter ur password' autoComplete='off' onChange={inputHandler}/>
          <br />
          <button type='submit'>Add user</button>

        </div>
      </form>
    </div>
  )
}

export default Add
