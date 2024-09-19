import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout/AdminLayout.jsx';
import Dashboard from '../pages/Admin/Dashboard.jsx';
import ManageUsers from '../pages/Admin/ManageUsers.jsx';
import ManageTours from '../pages/Admin/ManageTours.jsx';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="tours" element={<ManageTours />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;