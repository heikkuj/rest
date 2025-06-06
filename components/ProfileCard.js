'use client'

import {Card, CardContent} from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

export default function ProfileCard() {
    const [showID, setShowID] = useState(false);
    const { user } = useAuth();

    const toggleIdVisibility = () => {
        setShowID(!showID);
    };

    const resetPassword = async () => {
        await supabase.auth.resetPasswordForEmail('valid.email@supabase.io', {
  redirectTo: '/account/update-password',
})
    }
    

  return (
    <div>
        <Card className="flex flex-col bg-white h-[35vh]">
            <CardContent>
                <div className='flex flex-col h-[34vh] py-[10px]'>
                    <div className="font-coiny mb-3">
                        <h1>Min profil</h1>
                    </div>

                    {/* Profile information */}
                    <div className='flex flex-col gap-1'>
                        <p>E-post: {user.email}</p>
                        <Button variant={"secondary"} >Endre</Button>

                        <p>Passord:</p> <Button variant={'secondary'} onClick={resetPassword}>Endre passord</Button>

                        <p>Bruker-ID: 
                            <Button variant={"secondary"} className="mx-2" onClick={toggleIdVisibility}>
                            {showID ? 'Skjul' : 'Vis'}</Button>
                        </p>
                    </div>
                    <div>
                        {showID && (
                            <span> {user?.id} </span>
                            )}
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
