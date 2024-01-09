import Contact from "@/components/Contact/Contact";
import { Transition } from "@/components/Transition/Transition";


const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <Transition />
      <Contact />
      <a href="mailto:u.programming.jf@gmail.com"
      className="flex justify-center">
        <button
          className="w-96 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          Enviar mail directo
        </button>
      </a>
    </div>
  );
};

export default ContactPage;