import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom'
import Rotate from 'react-reveal/Rotate';

//deals with login/create an account functionality

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },

      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
    localStorage.setItem("loggedInUsername", formState.email)
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <Rotate bottom left>
    <div className="signup-form-container d-flex justify-content-center align-items-center">
        <div className="card text-white border-danger w-50" id='signupCard'>
        <h5 className="card-header">Login</h5>
        <form className="card-body" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" type="email" className="form-control border-danger" placeholder="name@example.com" value={formState.email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input name="password" type="password" className="form-control border-danger" placeholder="password" value={formState.password} onChange={handleChange}/>

          </div>
          <div className="col-auto d-flex justify-content-center">
            <button type="submit" className="btn btn-danger m-3">Login</button>
          </div>
        </form>
        </div>
      </div>
      </Rotate>
    </>
  )
};

export default Login