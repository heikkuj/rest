'use client'

import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import { Card, CardContent } from './ui/card';
import Greeting from './Greeting';

export default function Dashboard() {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div>
            <Header />
            <div className='flex flex-col m-[20px] p-[20px]'>
                <Card className='h-auto mb-10 bg-orange-400'>

                    <CardContent>
                        <Greeting />

                        <div className='flex flex-col text-center justify-center'>
                            

                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}