import { useState } from 'react';
//import {LOGIN_USER} from '../utils/mutation';


const Login = (props) => {
  // const [formState, setFormState] = useState({email: '', password:''});
  // const [login, {error, data }] = useMutation(LOGIN_USER);

  // const handleChange = (e) => {
  //   const {name, value } = e.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   })
  // }

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try{
  //     const {data} = await login({
  //       variable: {...formState },

  //     });
  //     Auth.login(data.login.token);
  //   }catch (e){
  //     console.error(e);
  //   }
  //   setFormState({
  //     email: '',
  //     password: '',
  //   });
  // };

  return (
    <div>Login</div>
  )
}

export default Login