// // import React from "react";
// // import Button from "../layouts/button";

// // const Appointments = ({ closeForm }) => {
// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// //       <div className="popup-form absolute mt-12 text-black">
// //         <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
// //           <h1 className="text-4xl font-semibold text-center text-backgroundColor">
// //             Book Now
// //           </h1>
// //           <div className=" flex flex-col">
// //             <input
// //               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
// //               type="text"
// //               name="userFirstName"
// //               id="userFirstName"
// //               placeholder="First Name"
// //             />
// //           </div>
// //           <div className=" flex flex-col">
// //             <input
// //               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
// //               type="text"
// //               name="userLastName"
// //               id="userLastName"
// //               placeholder="Last Name"
// //             />
// //           </div>
// //           <div className=" flex flex-col">
// //             <input
// //               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
// //               type="email"
// //               name="userEmail"
// //               id="userEmail"
// //               placeholder="Your Email"
// //             />
// //           </div>
// //           <div className=" flex flex-col">
// //             <input
// //               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
// //               type="number"
// //               name="userNumber"
// //               id="userNumber"
// //               placeholder="Phone No."
// //             />
// //           </div>
// //           <div className=" flex gap-5">
// //             <Button title="Book Appointment" />
// //             <button
// //               className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
// //               onClick={closeForm}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Appointments;

// import React from 'react';
// import 'tailwindcss/tailwind.css';
// import DayScheduleButton from '../Appointments/dayschedule';

// export default function App() {
//   return (
//     <div>
//       {/* <nav class="bg-gray-800"> */}
//         {/* <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//           <div class="relative flex items-center justify-between h-16">
//             <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               <div class="flex-shrink-0 flex items-center">
//                 <img
//                   class="block lg:hidden h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//                 <img
//                   class="hidden lg:block h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div class="hidden sm:block sm:ml-6">
//                 {/* <div class="flex space-x-4">
//                   <a
//                     href="#"
//                     class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Home
//                   </a>
//                 </div> */}
//               {/* </div>
//             </div>
//           </div> */}
//         {/* </div> */} 

//         <div class="hidden sm:hidden">
//           <div class="px-2 pt-2 pb-3 space-y-1">
//             <a
//               href="#"
//               class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Dashboard
//             </a>
//             <a
//               href="#"
//               class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Team
//             </a>
//             <a
//               href="#"
//               class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Projects
//             </a>
//             <a
//               href="#"
//               class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Calendar
//             </a>
//           </div>
//         </div>
//       {/* </nav> */}
//       <div class="py-12 bg-white">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div class="lg:text-center">
//             <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
//               Welcome
//             </h2>
//             <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               A better way to book appointments
//             </p>
//             <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//             hiii helllo something msg
//             </p>
//             <DayScheduleButton />
//           </div>

//           <div class="mt-10">
//             <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//               <div class="flex">
//                 <div class="flex-shrink-0">
//                   <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     <svg
//                       class="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div class="ml-4">
//                   <dt class="text-lg leading-6 font-medium text-gray-900">
//                     Feature 1
//                   </dt>
//                   <dd class="mt-2 text-base text-gray-500">
//                     Lorem ipsum dolor sit amet consect adipisicing elit.
//                     Possimus magnam voluptatum cupiditate veritatis in accusamus
//                     quisquam.
//                   </dd>
//                 </div>
//               </div>
//               <div class="flex">
//                 <div class="flex-shrink-0">
//                   <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     <svg
//                       class="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div class="ml-4">
//                   <dt class="text-lg leading-6 font-medium text-gray-900">
//                     Feature 2
//                   </dt>
//                   <dd class="mt-2 text-base text-gray-500">
//                     Lorem ipsum dolor sit amet consect adipisicing elit.
//                     Possimus magnam voluptatum cupiditate veritatis in accusamus
//                     quisquam.
//                   </dd>
//                 </div>
//               </div>
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

const AppointmentPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gender, setGender] = useState('');

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

    // Set isSubmitted to true to show a success message or redirect
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto mt-10 ">
      <div className="max-w-2xl mx-auto bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-3/4 " style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}>
        <h2 className="text-3xl font-bold mb-4 text-center text-neutral-50 ">Book an Appointment</h2>
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
    id="gender"
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
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="date">
                Date
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
              <label className="block text-neutral-50 text-sm font-bold mb-2 text-left" htmlFor="time">
                Time
              </label>
              <input
                className="input-field text-black"
                id="time"
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
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
    type="submit"
  >
    Book Appointment
  </button>
</div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
