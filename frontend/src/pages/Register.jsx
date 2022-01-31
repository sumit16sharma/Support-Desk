import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Password not Matching!!');
    } else {
      const userData = { name, email, password };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              value={name}
              className='form-cantrol'
              id='name'
              placeholder='Please Enter your Name'
              onChange={onChange}
              required
            />
            <input
              type='email'
              value={email}
              className='form-cantrol'
              id='email'
              placeholder='Please Enter your Email'
              onChange={onChange}
              required
            />
            <input
              type='password'
              value={password}
              className='form-cantrol'
              id='password'
              placeholder='Please Enter your Password'
              onChange={onChange}
              required
            />
            <input
              type='password'
              value={password2}
              className='form-cantrol'
              id='password2'
              placeholder='Confirm Password'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
