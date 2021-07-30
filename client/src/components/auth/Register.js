import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { login, register } from '../../store/actions/userActions';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
  const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };


  const dispatch = useDispatch();

  const [name, setName] = useState('test');
  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState('test');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password };
      dispatch(register(newUser));
      toast.success('Registration successful');
      props.history.push('/userdashboard');
    } catch (err) {
      toast.error(err);
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
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Register
        </Button>
        Already registered? <Link to='/login'>Login</Link>
      </Form>
      <Toaster />
    </>
  );
};

export default Login;
