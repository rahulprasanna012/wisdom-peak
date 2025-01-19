import React from 'react';
import { useNavigate  } from 'react-router-dom';

const UserDetails = ({ user }) => {
    const history = useNavigate();

    const handleGoBack = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company Name:</strong> {user.company.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;