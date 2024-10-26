// Dashboard.js
import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style1.css';
import Chat from './Chat';

function Dashboard() {
    const { signOut } = useClerk();
    const navigate = useNavigate();
  
    return (
      <div>
        <nav className="navbar">
          <h1>Mom Dashboard</h1>
        </nav>
  
        <div className="content">
          <h2>Welcome to your Dashboard!</h2>
          <div className="cards">
            <div className="card" onClick={() => navigate('/tutors')}>
              <h3>Find Tutors</h3>
              <p>Connect with qualified tutors for your children's education needs.</p>
            </div>
            <div className="card" onClick={() => navigate('/activities')}>
              <h3>Kid-Friendly Activities</h3>
              <p>Discover fun and educational activities for your children.</p>
            </div>
            <div className="card" onClick={() => navigate('/doctors')}>
              <h3>Healthcare Providers</h3>
              <p>Find trusted doctors and healthcare professionals.</p>
            </div>
          </div>
        </div>
  
        <div className="button-container">
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
  
        <Chat /> {/* Add the Chat component here */}
      </div>
    );
  }
  
  export default Dashboard;