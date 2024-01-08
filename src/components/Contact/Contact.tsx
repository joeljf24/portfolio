"use client"
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = name !== '' && email !== '' && message !== '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Handle success
        console.log('Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle error
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center mt-36 bg-transparent text-white p-4"
    >
      <h1 className="flex justify-center items-center text-4xl mb-10">Trabajemos juntos</h1>
      <label className="w-96 mb-4">
        Tu nombre: *
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full mt-1 p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-400 text-sm md:text-base"
        />
      </label>
      <label className="w-96 mb-4">
        Tu email: *
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mt-1 p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-400 text-sm md:text-base"
        />
      </label>
      <label className="w-96 mb-4">
        Tu mensaje o consulta: *
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-96 mt-1 p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:border-blue-400 text-sm md:text-base"
          rows={4}
        />
      </label>
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-96 mb-10 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none ${
          isFormValid ? '' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Enviar
      </button>
    </form>
  );
};

export default Contact;