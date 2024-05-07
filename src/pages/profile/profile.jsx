import React, { useState } from 'react';
import "./profile.css";
const Profile = () => {
  const [profile, setProfile] = useState({
    demoName: 'John Doe',
    age: 30,
    gender: 'Male',
    address: '123 Street, City, Country',
    emailid: 'john.doe@example.com',
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    setProfile(formData);
    setEditMode(false);
  };

  return (
    <div>
      <h2>Your profile details here</h2>
      <p>Find details of your profile here</p>
      {editMode ? (
        <form>
          <div>
            <label htmlFor="demoName">Name:</label>
            <input
              type="text"
              id="demoName"
              name="demoName"
              value={formData.demoName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="emailid">Email:</label>
            <input
              type="email"
              id="emailid"
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={saveProfile}>Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {profile.demoName}</p>
          <p>Age: {profile.age}</p>
          <p>Gender: {profile.gender}</p>
          <p>Address: {profile.address}</p>
          <p>Email: {profile.emailid}</p>
          <button type="button" onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;


