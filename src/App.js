// App.js
import React from 'react';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, useClerk } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Dashboard from './Dashboard';

const clerkPubKey = "pk_test_aHVtYmxlLWdudS0zNy5jbGVyay5hY2NvdW50cy5kZXYk"; // Your Clerk Publishable Key

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          {/* Public HomePage route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Dashboard route (protected, requires sign-in) */}
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            }
          />

          {/* Redirect to SignIn if not signed in */}
          <Route
            path="/dashboard"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
