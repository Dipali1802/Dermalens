
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Noprofile from '../../images/noprofile.jpg';
function navigateToTimeanddate() {
  window.location.href = "/timeanddate";
}
const doctors = [
  {
    id: 1,
    name: 'Dr. Samiksha Seth',
    experience: '9 years of experience',
    hospital: 'Mumbai, Maharashtra',
    rating: 4.5,
    fees: '₹ 100.00 Total Fees',
  },
  {
    id: 2,
    name: 'Dr. Ashish Pimpley',
    experience: '20 years of experience',
    hospital: 'Skinz clinic, 3rd floor, Crystal Plaza building, near KRIMS Hospital, Central bazar road, Ramdaspeth, Nagpur, Maharashtra',
    rating: 4.6,
    fees: '₹ 200.00 Total Fees',
  },
  {
    id: 3,
    name: 'Dr. Mithali Jage',
    experience: '7 years of experience',
    hospital: 'Skinamour skin clinic, Sion Circle C-101, 1st Floor, C Wing, Shiv Koliwada CHS, opposite Chroma, Sion Rd Number 29, Sion East, Mumbai, Maharashtra',
    rating: 4.5,
    fees: '₹ 100.00 Total Fees',
  },
  {
    id: 1,
    name: 'Dr. Samiksha Seth',
    experience: '9 years of experience',
    hospital: 'Mumbai, Maharashtra',
    rating: 4.5,
    fees: '₹ 100.00 Total Fees',
  },
  {
    id: 2,
    name: 'Dr. Ashish Pimpley',
    experience: '20 years of experience',
    hospital: 'Skinz clinic, 3rd floor, Crystal Plaza building, near KRIMS Hospital, Central bazar road, Ramdaspeth, Nagpur, Maharashtra',
    rating: 4.6,
    fees: '₹ 200.00 Total Fees',
  },
  {
    id: 3,
    name: 'Dr. Mithali Jage',
    experience: '7 years of experience',
    hospital: 'Skinamour skin clinic, Sion Circle C-101, 1st Floor, C Wing, Shiv Koliwada CHS, opposite Chroma, Sion Rd Number 29, Sion East, Mumbai, Maharashtra',
    rating: 4.5,
    fees: '₹ 100.00 Total Fees',
  },
];

const Doctors = () => {
  const navigate = useNavigate();

  const handleBookAppointment = (doctorId) => {
    navigate(`/timeanddate`);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-950 mb-3">Book your appointment</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-blue-900 shadow-md text-left rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src={Noprofile}
                alt={`Profile of ${doctor.name}`}
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-2xl text-white font-bold mb-2">{doctor.name}</h2>
              <p className="text-white font-semibold mb-1">Experience: {doctor.experience}</p>
              <p className="text-white font-semibold mb-1">Hospital: {doctor.hospital}</p>
              <p className="text-white font-semibold mb-1">User Rating: {doctor.rating} / 5</p>
              <p className="text-white font-semibold mb-4">Total Fees: {doctor.fees}</p>
              <button 
                className="bg-orange-500 font-semibold text-white py-2 px-4 rounded hover:bg-orange-600"
               
                onClick={navigateToTimeanddate}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
