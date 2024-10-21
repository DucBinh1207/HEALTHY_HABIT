import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const AdminRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to='/login' />;

  if (!user.admin) return <Navigate to='/' />;

  return <Outlet />;
};

export default AdminRoute;
