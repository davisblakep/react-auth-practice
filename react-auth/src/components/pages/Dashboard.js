import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// import FriendsList from './FriendsList';

const Dashboard = () => {
  let history = useHistory();

  const signOut = () => {
    localStorage.removeItem('token');
    return history.push('/');
  };

  return (
    <div className="dashboard">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '1%',
        }}
      >
        {/* <Link
          to="/dashboard/addfriend"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Button style={{ backgroundColor: 'white' }}>Add Friend</Button>
        </Link> */}

        <Button onClick={() => signOut()} style={{ backgroundColor: 'white' }}>
          Sign Out
        </Button>
      </div>
      {/* <FriendsList /> */}
    </div>
  );
};

export default Dashboard;
