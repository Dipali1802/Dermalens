import React, { useState } from "react";
import "./profile.css";

const Profile = ({onLogout}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle savingzzzz data to backend or local storage
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="container mx-auto mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
      <div className="max-w-2xl mx-auto bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-3/4 " style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}>
        <h2 className="text-2xl font-bold mb-4 text-white">Profile</h2>
        <div className="mb-4 text-left">
          <label
            className="block text-neutral-50 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            readOnly={!isEditing}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4 text-left">
          <label
            className="block text-neutral-50 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="age"
            type="number"
            placeholder="Age"
            value={age}
            readOnly={!isEditing}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4 text-left">
          <label
            className="block text-neutral-50 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="gender"
            value={gender}
            disabled={!isEditing}
            onChange={(e) => setGender(e.target.value)}
          > 
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4 text-left">
          <label
            className="block text-neutral-50 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="address"
            placeholder="Address"
            value={address}
            readOnly={!isEditing}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4 text-left">
          <label
            className="block text-neutral-50 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            readOnly={!isEditing}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          {isEditing ? (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleEdit}
            >
              Edit Profile
            </button>
          )}
          <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogout}
            >
              Sign out
            </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

