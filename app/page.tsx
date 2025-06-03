import ProtectedRoute from '../components/ProtectedRoute';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
}
