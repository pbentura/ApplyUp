import "./App.css";
import { AppliancesList } from "./components/AppliancesList";
import { ApplyForm } from "./components/ApplyForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppliancesProvider } from "./contexts/AppliancesContext";
import { ApplianceDetails } from "./components/ApplianceDetails";
import { LoginForm } from "./components/LoginForm";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <AppliancesProvider>
        <AppRoot />
      </AppliancesProvider>
    </AuthProvider>
  );
}

const AppRoot = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ApplyForm />} />
        <Route path="/list" element={<AppliancesList />} />
        <Route path="/details/:id" element={<ApplianceDetails />} />
        {/* Syntax with search params instead of path params <Route path="/details" element={<ApplianceDetails />} /> */}
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
