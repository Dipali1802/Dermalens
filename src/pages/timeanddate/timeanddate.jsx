
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import "react-datetime/css/react-datetime.css";
import "./timeanddate.css";  // Import the custom CSS
import "tailwindcss/tailwind.css";

const AppointmentScheduler = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('AM');
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };
  const handleConfirmSlot = () => {
   
    navigate('/payment');
  };
  const formatDateTime = () => {
    if (date && time) {
      const timeParts = time.split(':');
      const hour = period === 'PM' ? parseInt(timeParts[0], 10) + 12 : parseInt(timeParts[0], 10);
      const minute = parseInt(timeParts[1], 10);
      const selectedDate = moment(date).set({ hour, minute });
      return selectedDate.format('MMMM Do YYYY, h:mm:ss a');
    }
    return '';
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-900 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold  mb-6 text-white">Set up your appointment</h1>
        <div className="mb-4">
          <label className="block text-white text-lg font-bold text-justify mb-2">Select Date</label>
          <Datetime
            value={date}
            onChange={handleDateChange}
            timeFormat={false}
            inputProps={{
              className: "w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black",
            }}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg text-justify font-bold mb-2">Select Time</label>
          <div className="flex items-center space-x-4">
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          
          </div>
        </div>
        {date && time && (
          <div className="mt-6 text-center">
            <p className=" text-lg font-bold text-center text-white">Selected Date and Time :</p>
            <p className="text-amber-500 text-lg font-semibold">
              {formatDateTime()}
            </p>
          </div>
        )}
        <button 
         onClick={handleConfirmSlot}
        className="mt-6 w-full font-bold  bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Confirm Slot
        </button>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
