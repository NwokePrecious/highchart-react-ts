import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ViewMode from "./pages/ViewMode";
import Settings from "./pages/Settings";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
    <Route path="/" element={<ViewMode />} />
      <Route path="/view" element={<ViewMode />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default App;
