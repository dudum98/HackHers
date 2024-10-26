import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import './style.css'; // Importing your animated background styles
import './Homepage.css'; // Import your existing HomePage styles

function HomePage() {
  const { openSignIn } = useClerk(); // Open Clerk's sign-in modal

  const handleGetStarted = () => {
    openSignIn({
      afterSignInUrl: '/dashboard', // Redirect to Dashboard after sign-in
    });
  };

  return (
    <div className="area"> {/* Use the animated background area */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="context">
        <h1>Word of Moms</h1>
        <p>
          You're not alone. Find <strong>tutors</strong>, <strong>activities</strong>,  
          <strong>after-school programs</strong>, and <strong>healthcare providers</strong> to support you and your child.
        </p>
        <button className="btn" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}

export default HomePage;

