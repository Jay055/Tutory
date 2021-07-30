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
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
