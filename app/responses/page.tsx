import React from 'react';
import getAllResponses from '../actions/getResponses';

const Page = async () => {
  const applications = await getAllResponses();

  if (!applications) {
    return null;
  }

  return (
    <div>
      {applications.map((application, index) => (
        <div key={index}>
          {/* Render content for each application here */}
          <h2>Application {index + 1}</h2>
          <p>Name: {application.name}</p>
          <p>Email: {application.email}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default Page;
