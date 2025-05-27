'use client'

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleSignOut}>
                    Logg av
                </button>
            </div>
            <div>
                <h2>Velkommen!</h2>
                <p>E-post: {user.email}</p>
                <p>User ID: {user.id}</p>
            </div>
        </div>
    )
}