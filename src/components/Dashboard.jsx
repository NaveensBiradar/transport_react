import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/me', {
        headers: { Authorization: token }
      });
      setUser(response.data);
    };

    fetchUser();
  }, []);

  return <div>Welcome, {user?.email}</div>;
};

export default Dashboard;