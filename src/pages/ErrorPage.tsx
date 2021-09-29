import React from 'react';

import Error from '../assets/images/error-page.jpeg';

export const ErrorPage: React.FC = () => (
  <div className="page-error">
    <img src={Error} alt="error" />
  </div>
);

export default ErrorPage;
