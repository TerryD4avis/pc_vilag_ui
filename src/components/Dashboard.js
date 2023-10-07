import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { userDetails, token } = location.state || {};

  return (
    <div>
      <h1>Dashboard</h1>
      {userDetails && (
        <div>
          <h3>User Details:</h3>
          <pre>{JSON.stringify(userDetails, null, 2)}</pre>
        </div>
      )}
      {token && (
        <div>
          <h3>JWT Token:</h3>
          <pre>{token}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
