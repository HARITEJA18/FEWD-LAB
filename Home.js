import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import ContactUs from './ContactUs';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>  
      <ContactUs />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;

