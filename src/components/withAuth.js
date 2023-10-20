import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem('token');
    const userIsLoggedIn = !!token;
    
    if (!userIsLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
