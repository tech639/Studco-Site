import React from 'react'
import Hero from '../components/Hero'
import { useAuth0 } from "@auth0/auth0-react";

function LandingPage() {
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    return (
        <div>
            {
                isAuthenticated &&(
                    <>
                        <a href='/dashboard' className='text-cyan-500'>Home</a>
                        <Hero/>
                    </>
                )
            }
            {
                !isAuthenticated && (
                    <>
                        <a href='/login' className='text-cyan-500'><button onClick={() => loginWithRedirect({redirectUri:window.location.href= "http://127.0.0.1:5173/dashboard"})}>Login</button></a><br/>
                        <Hero/>
                    </>
                )
            }
        </div>
    )
}

export default LandingPage
