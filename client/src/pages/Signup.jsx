import { useState } from "react";
import {useMutation} from '@apollo/client';
import { CREATE_USER } from '../utils/mutations.js';
import { Link } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
import Auth from '../utils/auth.js'

//createUser front-end functionality


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.log(data);

      Auth.login(data.createUser.token);

    } catch (error) {
      console.error(error);
    }
  };




  return (
    <>
      <Rotate bottom left>
      <div className="signup-form-container d-flex justify-content-center align-items-center">
        <div className="card text-white border-danger w-50" id='signupCard'>
        <h5 className="card-header">Sign Up</h5>
        <form className="card-body" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input name="username" type="username" className="form-control border-danger" placeholder="username" value={formState.username} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" type="email" className="form-control border-danger" placeholder="name@example.com" value={formState.email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input name="password" type="password" className="form-control border-danger" placeholder="password" value={formState.password} onChange={handleChange}/>

          </div>
          <div className="col-auto d-flex justify-content-center">
            <button type="submit" className="btn btn-danger m-3">Create Account</button>
          </div>
          <div>
            <p className="text-center">Already have an account? <Link to="/Login">login</Link> </p>
          </div>
        </form>
        </div>
      </div>
      </Rotate>
    </>
  )
}

export default Signup;

