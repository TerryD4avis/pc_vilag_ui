import React from 'react';
import jwt_decode from 'jwt-decode';
import withAuth from './withAuth';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  
  let userDetails = null;
  if (token) {
    userDetails = jwt_decode(token);
  }

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

export default withAuth(Dashboard);
