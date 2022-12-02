import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../components/Profile';

function Dashboard() {
    const { logout } = useAuth0();
    return (
        <div>
            <a href='/' className='text-cyan-500'>Landing page</a>
            <Profile/>
            <button className='bg-teal-700 text-gray-200' onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
        </div>
    )
}
export default Dashboard
