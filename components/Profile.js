'use client'

import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Profile() {
    const [showID, setShowID] = useState(false);
    const { user, signOut } = useAuth();

    const toggleIdVisibility = () => {
        setShowID(!showID);
    };

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div className='flex flex-col p-[20px]'>
            <div className="font-coiny">
                <h1>Min profil</h1>
            </div>

            {/* Profile information */}
            <div className='flex flex-col gap-1'>
                <p>E-post: {user.email}</p>
                <p>Bruker-ID: <button className="underline" onClick={toggleIdVisibility}>
                    {showID ? 'Skjul' : 'Vis'}</button>
                    {showID && (
                    <span> {user?.id} </span>
                    )}
                </p>
            </div>
            <button className="mb-3 mt-5 underline"
            onClick={handleSignOut}>Logg ut</button>
            </div>
    )
}