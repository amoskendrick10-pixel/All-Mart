import ProtectedRoute from "@/components/ProtectedRoute";

const ProtectedLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
};

export default ProtectedLayout;