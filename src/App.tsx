import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import AuthLayout from "./components/Layout/auth-layout";
import LoginPage from "./components/Page/auth/Login-page";
import RegisterPage from "./components/Page/auth/Register-page";
import ForgetPage from "./components/Page/auth/Forget-page";
import ResetPage from "./components/Page/auth/Reset-page";
import ChangePage from "./components/Page/auth/Change-page";
import HomeLayout from "./components/Layout/home-layout";
import DashboardLayout from "./components/Layout/dashboard-layout";
import MenuPage from "./components/Dashboard/menu-page";
import CustomersPage from "./components/Dashboard/customers-page";
import MenagerPage from "./components/Dashboard/menager-page";
import PendingPage from "./components/Dashboard/pending-page";
import ProduitsPage from "./components/Dashboard/produits-page";
import SettingPage from "./components/Dashboard/setting-page";
import MessagePage from "./components/Dashboard/message-page";
import NotificationsPage from "./components/Dashboard/notifications-page";
import FormCommande from "./components/Composants/form-commande";
import AddCustomer from "./components/Composants/Add-customer";
import AddProduct from "./components/Composants/Add-product";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Route home page */}
        <Route path="/" element={<HomeLayout />} />

        {/* Route Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<MenuPage />} />
           <Route path="form-commande" element={<FormCommande/>} />
          <Route path="menager" element={<MenagerPage />} />
          <Route path="customers" element={<CustomersPage />} />
           <Route path="customers/add-customer" element={<AddCustomer/>} />
          <Route path="pending" element={<PendingPage />} />
          <Route path="produits" element={<ProduitsPage />} />
          <Route path="produits/add" element={<AddProduct />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="notification" element={<NotificationsPage />} />
        </Route>

        {/* Auth */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="forget" element={<ForgetPage />} />
          <Route path="reset" element={<ResetPage />} />
          <Route path="change" element={<ChangePage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
