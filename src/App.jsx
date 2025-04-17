import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";
import { WalletProvider } from "./contexts/WalletContext";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const Wallets = lazy(() => import("./pages/Wallets"));
const AuthListener = lazy(() => import("./hooks/AuthListener"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));
const Wallet = lazy(() => import("./pages/Wallet"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserBoard = lazy(() => import("./pages/UserBoard"));
const Setting = lazy(() => import("./pages/Setting"));

function App() {
  const { user } = useContext(UserContext);

  const username = user?.profile?.username.toLowerCase();

  return (
    <ThemeProvider>
      <WalletProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard></Dashboard>
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to={`${username}`} />} />
              <Route path={":username"} element={<UserBoard />} />
              <Route path={`connect-wallets`} element={<Wallets />} />
              <Route path={`settings`} element={<Setting />} />
            </Route>

            {/* <Route path="connect-wallets/" element={<Wallet />} /> */}
          </Routes>
        </Suspense>
        <ReactQueryDevtools />
        <Toaster />
        <AuthListener />
      </WalletProvider>
    </ThemeProvider>
    // </QueryClientProvider>
  );
}

export default App;
