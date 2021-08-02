import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import UserDashboard from './components/UserDashboard';
import LessonsPage from './components/LessonsPage';
import CreateCourse from './components/CreateCourse';
import TutorCourses from './components/TutorCourses';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Container>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/userdashboard' component={UserDashboard} />
            <Route path='/createcourse' component={CreateCourse} />
            <Route path='/lessonspage' component={LessonsPage} />
            <Route path='/tutorcourses' component={TutorCourses} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
