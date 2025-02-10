import React from "react";
import Dashboard from "./pages/Dashboard"; // ✅ Ensure correct import

function App() {
  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <Dashboard />  {/* ✅ Ensure Dashboard is being rendered */}
    </div>
  );
}

export default App;
