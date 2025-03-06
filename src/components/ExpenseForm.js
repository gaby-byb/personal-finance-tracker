import React, { useState } from "react";

const ExpenseForm = () => {
    const [expense, setExpense] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Expense:", expense, "Amount:", amount);
        setExpense("");
        setAmount("");
      };
    
      return (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Expense Name"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            required
          />
          <input
            type="number"
            placeholder="Amount ($)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white outline-none mt-2"
            required
          />
          <button type="submit" className="w-full bg-blue-500 p-2 rounded text-white hover:bg-blue-600 mt-2">
            Add Expense
          </button>
        </form>
      );
    };
    
    export default ExpenseForm;
    
