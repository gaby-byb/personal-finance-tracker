import React from "react";
import Dashboard from "./pages/Dashboard"; //Ensure correct import
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BalanceSummary from "./components/BalanceSummary";

function App() {
  return (
    <div className="min-h-screen flex">
      <h1 className="text-3xl font-bold mb-6">Personal Finance Tracker</h1>
      <Dashboard />  {/* Ensure Dashboard is being rendered */}

      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg">
        <BalanceSummary />
        <ExpenseForm />
        <ExpenseList />

      </div>
    </div>
  );
}

export default App;
