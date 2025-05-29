'use client'

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
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

        return (
            <div>
                <Header />
                <div className='flex flex-col m-[20px] p-[20px]'>
                <Card className='h-auto mb-10 bg-orange-400'>
                    <CardContent>
                        <form onSubmit={handleSubmit} className='flex flex-col w-full items-center py-2'>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Epost'
                            required
                            className='p-2 my-1 w-full rounded-md'
                            />

                        <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Passord'
                            required
                            className='p-2 my-1 w-full rounded-md'
                            />

                        <button type='submit' 
                        className='font-bold bg-white w-auto rounded-2xl px-3 py-2 m-3'>
                            {isSignUp ? 'Opprett bruker' : 'Logg inn'}
                        </button>
                    </form>
                    <div className='flex flex-col text-center justify-center'>
                        <div>
                            {isSignUp && <p>Har du allerede bruker?</p>}
                        </div>
                        <button className='underline'
                        onClick={() => setIsSignUp(!isSignUp)}>
                            {isSignUp ? 'Logg på' : 'Ny bruker?'}
                        </button>

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