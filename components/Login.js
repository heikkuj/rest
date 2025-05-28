'use client'

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

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
            <div className='flex flex-col m-[20px] p-[20px] bg-orange-400 rounded-2xl'>

                {/* <div className='flex justify-center'>
                    <h1 className='font-bold mb-4'>{isSignUp ? 'Opprett ny bruker' : 'Logg inn'}</h1>
                </div> */}

                <div className='flex flex-col items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full items-center'>
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
                        className='font-bold bg-white w-fit rounded-2xl px-3 py-2 m-3'>
                            {isSignUp ? 'Opprett bruker' : 'Logg inn'}
                        </button>
                    </form>
                    <div>
                        <button onClick={() => setIsSignUp(!isSignUp)}>
                            {isSignUp ? 'Har du allerede en bruker? Logg på' : 'Ny bruker?'}
                        </button>

                        {message && (
                            <div>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }