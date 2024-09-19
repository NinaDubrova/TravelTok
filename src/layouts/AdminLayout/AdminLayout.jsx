import React from 'react';
import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import AdminHeader from './AdminHeader';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* <Sidebar /> */}
      <div className="admin-content">
        {/* <AdminHeader /> */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;