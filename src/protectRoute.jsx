import { useAuthStore } from "./store/useAuthStore";
import Loader from "./pages/Loader";

export default function ProtectedRoute({ children }) {
  const { user, loading, initialized } = useAuthStore();

  // 🔥 Wait until auth check completes
  if (!initialized) return <Loader />;

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}