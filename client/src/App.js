import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Container>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
