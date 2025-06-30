import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import ButtonWithProps from '../props compnts/ButtonWithProps';

const MessageToEmail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Message sent!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Try again.');
    });
  };

  return (
    <div data-aos="zoom-in-up" className="w-full max-w-[500px] px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 py-8 rounded-2xl shadow-lg border border-[#27272a] text-white">
      <h3 className="text-center font-bold text-2xl mb-5">Send Me a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          
          className="w-full bg-neutral-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full bg-neutral-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full bg-neutral-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          className="w-full bg-neutral-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
        />

        <ButtonWithProps
          text="Send Message"
          icon={FaPaperPlane}
          className="bg-blue-700 w-full h-12 inline-flex justify-center items-center text-white font-medium rounded-md transition-all duration-300 hover:scale-x-105 hover:scale-y-105"
          type="submit"
        />
      </form>
    </div>
  );
};

export default MessageToEmail;
