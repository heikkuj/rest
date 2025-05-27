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
            <div className=''>
                <div>
                    <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        </div>

                        <button type='submit'>
                            {isSignUp ? 'SignUp' : 'SignIn'}
                        </button>
                    </form>
                    <div>
                        <button onClick={() => setIsSignUp(!isSignUp)}>
                            {isSignUp ? 'Har du allerede en bruker? Logg på' : 'Lag ny bruker'}
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