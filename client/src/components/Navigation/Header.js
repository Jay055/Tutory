import { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/userActions';

import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const { user } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user, history]);

  const onLogOut = () => {
    dispatch(logout);
    window.localStorage.removeItem('user');
    history.push('/');
    window.location.reload();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Tutory</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            {user && (
              <Nav>
                <Nav.Link onClick={onLogOut}>Logout</Nav.Link>

                <LinkContainer to='/register'>
                  <Nav.Link></Nav.Link>
                </LinkContainer>
              </Nav>
            )}
            {!user && (
              <Nav>
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
