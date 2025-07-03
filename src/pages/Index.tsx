
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user } = useAuth();
  
  if (user) {
    return <Navigate to={`/${user.role}`} replace />;
  }
  
  return <Navigate to="/login" replace />;
};

export default Index;
