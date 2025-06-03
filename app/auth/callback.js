import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from '../../lib/supabase';

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const handleAuthCallback = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Auth callback error:', error);
                router.push('/login');
                return;
            }
            
            if (data.session) {
                router.push('/');
            }
        }

        handleAuthCallback();
    }, [router]);

    return <div>Processing authentication...</div>
}