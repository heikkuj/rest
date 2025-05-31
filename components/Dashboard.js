'use client'

import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import { Card, CardContent, CardHeader } from './ui/card';
import Greeting from './Greeting';
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [showID, setShowID] = useState(false);
    const { user, signOut } = useAuth();

    const toggleIdVisibility = () => {
        setShowID(!showID);
    };

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div>
            <Header />
            <div className='flex flex-col m-[20px] p-[20px]'>
                <Card className='h-auto mb-10 bg-orange-400'>
                    <CardHeader className="font-coiny text-xl">
                        <Greeting />
                    </CardHeader>

                    <CardContent>
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
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}