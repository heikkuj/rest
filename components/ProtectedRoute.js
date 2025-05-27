'use client'

import { useAuth } from "../context/AuthContext";
import Login from "./Login";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Laster...</div>
    };

    if (!user) {
        return <Login />
    };

    return children;
}