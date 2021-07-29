import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../../store/actions/userActions';

import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState('test');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    dispatch(login(user));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
