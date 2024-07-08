
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
function navigateToDoctors() {
  window.location.href = "/doctors";
}
const AppointmentPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend

    // Clear form fields
    setDate("");
    setTime("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setGender('');
    setBloodGroup('');

    // Set isSubmitted to true to show a success message or redirect
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto mt-10 ">
      <div className="max-w-2xl mx-auto bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-3/4 " style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}>
        <h2 className="text-3xl font-bold mb-4 text-center text-neutral-50 ">Tell us more about you</h2>
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded" role="alert">
            <p className="font-bold">Success!</p>
            <p>Your appointment has been booked.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
             <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="name">
                Name
              </label>
              <input
                className="input-field text-black"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="email">
                Email
              </label>
              <input
                className="input-field text-black"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="phone">
                Phone
              </label>
              <input
                className="input-field text-black"
                id="phone"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="area">
                Area of Residence
              </label>
              <input
                className="input-field text-black"
                id="area"
                type="text"
                placeholder="Area of Residence"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="city">
                City
              </label>
              <input
                className="input-field text-black"
                id="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="state">
                State
              </label>
              <select
                className="input-field text-black"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="" style={{ color: 'grey' }}>Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
           
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="age">
                Age
              </label>
              <input
                className="input-field text-black"
                id="age"
                type="number"
                placeholder="Age"
                min="0"
              />
              
            </div>
            <div className="mb-4">
  <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="gender">
    Gender
  </label>
  <select
    className="input-field text-black"
    id=" gender"
    placeholder="Select Gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    required
  >
   
    
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
<div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="bloodGroup">
                Blood Group
              </label>
              <select
                className="input-field text-black"
                id="bloodGroup"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              >
                <option value="" style={{ color: 'grey' }}>Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="date">
                Date of Birth
              </label>
              <input
                className="input-field text-black"
                id="date"
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          
            
            <div className="mb-4">
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                className="input-field text-black"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
        
            <div className="flex items-center justify-between">
  <button
   className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
   onClick={navigateToDoctors}
   type="submit"
  >
    Next
  </button>

  

 
</div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
