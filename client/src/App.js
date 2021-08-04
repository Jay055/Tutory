import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import UserDashboard from './components/UserDashboard';
import LessonsPage from './components/LessonsPage';
import CreateCourse from './components/CreateCourse';
import ViewCourse from './components/ViewCourse';
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
          <Route path='/' exact component={Login} />
         
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/userdashboard' component={UserDashboard} />
            <Route path='/createcourse' component={CreateCourse} />
            <Route
              path='/lessonspage/:slug'
              name='name'
              component={LessonsPage}
            />
            <Route path='/tutorcourses' component={TutorCourses} />
            <Route path='/tutorcourses' component={TutorCourses} />

            <Route
              path='/viewcourse/:slug'
              name='name'
              component={ViewCourse}
            />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
