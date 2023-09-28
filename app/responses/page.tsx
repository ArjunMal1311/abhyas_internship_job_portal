import React from 'react';
import getAllResponses from '../actions/getResponses';

const Page = async () => {
    const applications = await getAllResponses();

    if (!applications) {
        return null;
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-lg mx-auto">
                {applications.map((application, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
                        <h2 className="text-xl font-semibold mb-2">Application {index + 1}</h2>
                        <p className="text-lg">Listing Title: {application.listingTitle}</p>
                        <p className="text-lg">Name: {application.name}</p>
                        <p className="text-lg">Email: {application.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
