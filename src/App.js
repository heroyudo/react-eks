import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from "./components/header";
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user');
      setMessage(response.data); // asumsi response.data = "hallo user"
    } catch (error) {
      setMessage('Error fetching user');
      console.error(error);
    }
  };

  const fetchLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5001/login');
      setMessage(response.data); // asumsi response.data = "hallo user"
    } catch (error) {
      setMessage('Error fetching login');
      console.error(error);
    }
  };


  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <Button variant="primary" onClick={fetchUser}>Primary</Button>
      <Button variant="secondary" onClick={fetchLogin}>Secondary</Button>
      <p>{message}</p>


    </div>
  );
}

export default App;
