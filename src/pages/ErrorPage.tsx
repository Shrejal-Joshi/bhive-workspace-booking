import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode }: { errorCode: number }) => {
  return (
    <div className="error-container">
      <h1>Error {errorCode}</h1>
      <p>Oops! Something went wrong.</p>
      {/* Use 'to' and 'className' directly in the Link component
      <Link to="/" className="back-link">Go back to Home</Link> */}
    </div>
  );
}

export default ErrorPage;
