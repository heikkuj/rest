import { useState, React } from 'react';
import { Login } from './Login';
import { useAuth } from "../context/AuthContext";


export default function Header() {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
      setIsLoggedIn(false);
      await signOut();
    };

  return (
    <div>
      <div className='flex flex-col w-full mt-7 mb-5 text-center'>
        <h1 className='font-coiny text-4xl uppercase drop-shadow'>Rest</h1>
        <p className='text-sm drop-shadow'>Når det som ligger i skapet er på menyen</p>
      </div>
    </div>
  )
}
