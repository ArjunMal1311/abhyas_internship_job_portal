import React from 'react';
import getAllResponses from '../actions/getResponses';
import { Application } from '@prisma/client';

const Page = async () => {
  const applications = await getAllResponses();

  if (!applications) {
    return null;
  }

  return (
    <div>
      {applications.map((application : Application, index : any) => (
        <div key={index}>
          <h2>Application {index + 1}</h2>
          <p>Name: {application.name}</p>
          <p>Email: {application.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
