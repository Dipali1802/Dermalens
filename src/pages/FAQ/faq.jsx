
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const faqData = [
  {
    question: "Is there any cost to detect skin issues on DermaLens app?",
    answer: "No. We believe our research should be available for everyone."
  },
  {
    question: "Do I have to pay to consult dermatologists?",
    answer: "Yes. The dermatologists charge for the consultation. You can choose a dermatologist based on your availability."
  },
  {
    question: "Are these doctors creditable?",
    answer: "Yes. We do thorough research about their degrees before onboarding them."
  },
  {
    question: "Does more percentage means more probability?",
    answer: "Yes. Usually, when your skin issues match with the images in our database, you get high percentage for a particular disease. In this case, you should get your skin issues checked by a healthcare professional."
  },
  {
    question: "What happens if the doctor does not turn up for the video call?",
    answer: "We do not deduct the money from your wallet. Only once the dermatologists give you their diagnosis, we pay to the dermatologist from your wallet."
  },
  {
    question: "How accurate are the results?",
    answer: "Our results are highly accurate. Our clinical trials have been approved by leading hospitals of Mumbai and the research is backed by renowned dermatologists across India. There might be cases in which a prominent disease gets a lower percentage. That is mainly because of cropping issue or lighting issue. Feel free to share images of skin issues and dermatologist report or biopsy report at support@aim4u.co.in."
  },
  {
    question: "Do dermatologists check the images you upload?",
    answer: "No. Only when you consult a dermatologist and allow them to see your images, they will be able to see."
  },
  {
    question: "Will dermatologists ask for the skin images?",
    answer: "Yes. At times, because of issues with video call bandwidth, the doctor may ask you to send the image of affected area."
  },
  {
    question: "Can I use the Skincare Assistant anytime?",
    answer: "Yes, you can use the Skincare Assistant anytime, anywhere to check your skin issues and get connected with dermatologists."
  },
  {
    question: "Is my personal data safe with AiM4U?",
    answer: "We prioritize your privacy and ensure that your personal data is protected with the highest security standards."
  }
];

const FAQ = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-blue-950 mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border  border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div
              className="p-3 bg-white text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition duration-300"
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              <i className={`fas fa-chevron-down transition-transform duration-300 ${visibleIndex === index ? 'rotate-180' : ''}`}></i>
            </div>
            {visibleIndex === index && (
              <div className="p-3  bg-blue-900 text-white transition duration-300 text-justify text-xl font-semibold">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
