import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Здесь можно управлять пользователями, турами и другими сущностями.</p><br />
      <a href="/admin/users">Перейти в управление пользователями</a><br /><br />
      <a href="/admin/tours">Перейти в управление турами</a>
    </div>
  );
};

export default Dashboard;