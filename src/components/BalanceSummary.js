import React from "react";

//defines component as a function
const BalanceSummary = () => {
    return(
        <div className="mb-4 text-center">
            <h2 className="text-xl font-semibold">Current Balance</h2>
            <p className="text-2xl font-bold text-green-400">$0.00</p>
        </div>
    );
};

export default BalanceSummary;
