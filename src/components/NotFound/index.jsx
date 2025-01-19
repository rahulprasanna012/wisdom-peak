import React from 'react';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img 
            src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png" 
            alt="not found" 
            className="size-1/5"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Page Not Found</h1>
    </div>
);

export default NotFound;