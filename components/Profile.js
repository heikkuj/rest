'use client'

import { useAuth } from "../context/AuthContext";
import Header from "./Header";

export default function Profile() {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col px-5">
                
                </div>

                <div>
                    <h2>Velkommen!</h2>
                    <p>User ID: {user.id}</p>
                </div>
            </div>
        </div>
    )
}