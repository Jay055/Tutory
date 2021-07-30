import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserDashboard = (props) => {
  const user = useSelector((state) => state.users.user);

  return (
    <>
      {user && (
        <div>
          <div>UserDashboard </div>
          <h1>Welcome {user.name}!</h1>
          <h3> Become an Educator with courses </h3>
          Create Course 
        
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
