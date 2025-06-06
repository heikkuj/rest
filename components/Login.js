'use client'

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from './ui/button';
import Header from './Header';
import Message from './Message';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [message, setMessage] = useState('');
    const { signIn, signUp } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            if (isSignUp) {
                const { error } = await signUp(email, password);
                if (error) throw error;
                setMessage('Sjekk e-posten din for bekreftelseslenke!');
            } else {
                const { error } = await signIn(email, password);
                if (error) throw error;
            }

            } catch (error) {
                setMessage(error.message);
            }
        }

        const resetPassoword = async () => {
            await supabase.auth.resetPasswordForEmail('valid.email@supabase.io', {
  redirectTo: '/reset-password',
})
        }

        return (
            <div>
                <Header />
                <div className='flex flex-col m-[20px] p-[20px]'>
                <Card className='h-auto mb-10 bg-orange-400'>
                    <CardContent>
                        <form onSubmit={handleSubmit} className='flex flex-col w-full items-center py-2'>
                            <h1 className='font-bold place-self-start mt-3'>E-postadresse</h1>
                            <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Skriv inn e-postadresse'
                            required
                            className='p-2 my-1 w-full rounded-md'
                            />

                            <h1 className='font-bold place-self-start mt-3'>Passord</h1>
                            <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Skriv inn passord'
                            required
                            className='p-2 my-1 w-full rounded-md'
                            />

                            <div className='flex flex-row gap-3 place-self-start'>
                                <Button type='submit' 
                            className='font-bold w-auto px-3 py-2 my-3'>
                                {isSignUp ? 'Opprett bruker' : 'Logg inn'}
                            </Button>
                            <button onClick={resetPassoword}
                            className='underline italic'>{isSignUp ? '' : 'Glemt passord?'}</button>
                            </div>
                        </form>

                        <div>
                            <button className='underline'
                            onClick={() => setIsSignUp(!isSignUp)}>
                                {isSignUp ? 'Har du allerede bruker? Logg på' : 'Ny bruker?'}
                            </button>
                        </div>

                        <div className='flex flex-col text-center justify-center'>
                            {message && (
                                <div>
                                    {message}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
                <Message />
            </div>
        </div>
        )
    }