"use client";

import Navbar from "../modules/navbar";
import Footer from "../modules/footer";
import Background from "../modules/background";
import { useState } from 'react';

export default function Home() {

  const [form, setForm] = useState({ message: '', email: '' });
  const [, setResponse] = useState('');
  const [contactVisible, setContactVisible] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResponse(`Server says: ${JSON.stringify(data.received)}`);

    setContactVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Background>
        {!contactVisible && ( 
          <h1 className="text-5xl text-center font-extrabold dark:text-white">
            Thank you, your message has been sent!
          </h1>)}
        {contactVisible && ( <><div id="contact-form" className="text-center">
          <h1 className="text-5xl text-center font-extrabold dark:text-white">
            Contact
          </h1>
        </div><form onSubmit={handleSubmit} className="flex flex-col items-center mt-5">
            <label htmlFor="email" className="text-xl">E-Mail:</label>
            <input required pattern="[^ @]*@[^ @]*" type="text" name="email" onChange={handleChange} className="dark:bg-gray-700 p-1 border-gray-400 border dark:border-none rounded-md w-[90%] lg:w-[50%]"></input><br />
            <label htmlFor="message" className="text-xl">Message:</label>
            <textarea required name="message" onChange={handleChange} className="dark:bg-gray-700 p-1 border border-gray-400 dark:border-none rounded-md w-[90%] lg:w-[50%] h-50"></textarea><br />
            <input type="submit" className="transition bg-transparent dark:hover:bg-gray-600 hover:bg-gray-200 content-center border border-gray-400 rounded-md p-3 w-50" />
          </form></> )}
      </Background>
      <Footer />
    </div>
  );
}
