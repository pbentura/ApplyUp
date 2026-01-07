import "./App.css";
import { AppliancesList } from "./components/AppliancesList";
import { ApplyForm } from "./components/ApplyForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppliancesProvider } from "./contexts/AppliancesContext";

function App() {
  return (
    <AppliancesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ApplyForm />} />
          <Route path="/list" element={<AppliancesList />} />
        </Routes>
      </Router>
    </AppliancesProvider>
  );
}

export default App;
