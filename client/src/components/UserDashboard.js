import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Components.css';

const UserDashboard = (props) => {
  const user = useSelector((state) => state.users.user);

  return (
    <>
      {user && (
        <div className='dashboard-container py-5'>
          <div>UserDashboard </div>
          <h1>Welcome {user.name}!</h1>
          <h3> Become a language Educator </h3>
          <Link to='/createcourse'>
            <Button className=' btn-margin mx-2'>Create Course</Button>
          </Link>
          <Link to='/tutorcourses'>
            <Button className='btn-margin mx-2 '>View Courses</Button>
          </Link>

          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
