'use client'

import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Header from "./Header";
import Greeting from "./Greeting";
import ProfileCard from './ProfileCard';
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

export default function Profile() {

    const { signOut } = useAuth();
    const handleSignOut = async () => {
        await signOut();
    };

    // const changePassword = async () => {
    //     await supabase.auth.updateUser({ password: 'new_password' });
    // };

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className='flex flex-col p-[20px]'>
                <Card className='h-[50%] w-[90vw] mb-10 bg-orange-400'>

                    <CardHeader className="font-coiny text-xl">
                        <Greeting />
                    </CardHeader>

                    <CardContent className="">
                        <ProfileCard />

                        <Button variant={"outline"} className="mt-2 w-fit"
                    onClick={handleSignOut}>Logg ut</Button>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}







