import React, { useState } from 'react';

const PaymentPage = () => {
  const [promoCode, setPromoCode] = useState('');
  const [walletBalance, setWalletBalance] = useState(0.0);
  const [appointmentCharges, setAppointmentCharges] = useState(1.0);
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromoCode = () => {
    // Logic for applying promo code
  };

  const handleMakePayment = () => {
    // Logic for making payment
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full max-w-sm ">
        <div className="flex items-center justify-between mb-4">
          <button className="text-blue-500">
            
          </button>
          <h1 className="text-2xl font-bold text-white">Make your payment here</h1>
          <button className="text-blue-500">
           
          </button>
        </div>
        <p className="text-center font-semibold text-white  mb-6">All your payments are 100% secured</p>
        <div className="bg-blue-100 rounded-lg p-4 mb-6">
          <p className="text-center  font-semibold text-green-600 mb-2">Appointment charges : {appointmentCharges.toFixed(2)}</p>
          <p className="text-center  font-semibold text-blue-600">Add money to your AiM4u wallet</p>
          <p className="text-center text-3xl font-bold text-blue-900">₹ {appointmentCharges.toFixed(1)}</p>
          <p className="text-center  font-semibold text-gray-600">Wallet Balance: ₹{walletBalance.toFixed(1)}</p>
        </div>
        <div className="mb-4">
          <label className="block text-white  font-semibold  mb-1">Promocode</label>
          <div className="flex items-center">
            <input
              type="text"
              value={promoCode}
              onChange={handlePromoCodeChange}
              placeholder="Insert code here"
              className="w-full p-2 border text-black rounded-full focus:outline-none"
            />
            {/* <button
              onClick={handleApplyPromoCode}
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              APPLY
            </button> */}
          </div>
          
        </div>
        <div className="flex space-x-2">
          <button className="w-1/2 bg-blue-400 text-neutral-900 p-2  font-semibold rounded-md hover:bg-blue-500 transition duration-300">Reselect Slot</button>
          <button
            onClick={handleMakePayment}
            className="w-1/2 bg-orange-600  font-semibold text-white p-2 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
