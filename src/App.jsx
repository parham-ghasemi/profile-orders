import React from "react";
import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import { ModalProvider } from "./contexts/ModalContext";

import Profile from "./components/profile/Profile";
import Orders from "./components/orders/Orders";

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/insurance" element={<Layout />}>
              {/* Routes Go Here ! */}
              {/* <Route index={true} element={<Home />} />
              <Route path="complaints" element={<Complaints />} />
              <Route path="tickets" element={<Tickets />} />
              <Route path="new-ticket" element={<NewTicket />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="requests" element={<Requests />} />
              <Route
                path="insurance-policies"
                element={<InsurancePolicies />}
              />
              <Route path="new-insPolicy" element={<NewInsPolicy />} />
              <Route path="customers" element={<Customers />} />
              <Route path="chats" element={<Chats />} /> */}
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
              {/* <Route path="subscription" element={<Subscription />} /> */}
              {/* <Route path="notifications" element={<NotificationPage />} /> */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
