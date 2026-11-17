import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import Notification from "./components/Notification";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <AppRoutes />
          <Notification />
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
