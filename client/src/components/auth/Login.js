import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { login, register } from '../../store/actions/userActions';
import { Link, Redirect } from 'react-router-dom';
import apiService from '../../ApiService';

import { Form, Button, Container } from 'react-bootstrap';

const Login = (props) => {
  const initialState = {
    email: '',
    password: '',
  };

  const currentUser = useSelector((state) => state.users);

  useEffect(() => {
    if (currentUser) {
      props.history.push('/userdashboard');
    }
  }, currentUser);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState('test');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = { email, password };

      const response = await apiService.login(user);
      if (!(response instanceof Error)) {
        dispatch(login(user));
        window.localStorage.setItem('user', JSON.stringify(response));
        toast.success('login successful');
        props.history.push('/userdashboard');
        setLoading(false);
      } else {
        toast.error('invalid username or password');
        setLoading(false);
      }
    } catch (err) {
      toast.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-5'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
        Don't have an account? <Link to='/register'>Register</Link>
      </Form>
      <Toaster />
    </>
  );
};

export default Login;
