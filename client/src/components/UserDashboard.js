import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const UserDashboard = (props) => {
  const user = useSelector((state) => state.users.user);

  return (
    <>
      {user && (
        <div>
          <div>UserDashboard </div>
          <h1>Welcome {user.name}!</h1>
          <h3> Become an Educator with courses </h3>
          <Link to='/createcourse'>
            <Button>Create Course</Button>
          </Link>
          <Link to='/tutorcourses'>
            <Button>View Courses</Button>
          </Link>

          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
