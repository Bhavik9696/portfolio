import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contect() {
 const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    contactMethod: 'Email',
    heardAbout: '',
    isHuman: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isHuman) {
      alert("Please verify you're not a robot.");
      return;
    }

    emailjs.sendForm(
      'service_97idowe',        // Service ID
      'template_s66o2dn',       // Template ID
      formRef.current,
      'jVQkhPxJlBL7NP-E5'       // Public key
    )
      .then(() => {
  toast.success("Message sent successfully!");
  setFormData({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    contactMethod: 'Email',
    heardAbout: '',
    isHuman: false
  });
})
.catch((err) => {
  console.error("EmailJS Error:", err);
  toast.error("Something went wrong. Please try again.");
});

  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center p-6">
      
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-4xl space-y-6 p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Name *</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Subject *</label>
            <select
              name="subject"
              className="w-full p-3 rounded bg-gray-800 border border-gray-600"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option>General Inquiry</option>
              <option>Feedback</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Message *</label>
            <textarea
              name="message"
              className="w-full p-3 h-32 rounded bg-gray-800 border border-gray-600"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div>
          <label className="block mb-2">Preferred Contact Method *</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={formData.contactMethod === 'Email'}
                onChange={handleChange}
              />
              Email
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={formData.contactMethod === 'Phone'}
                onChange={handleChange}
              />
              Phone
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1">How did you hear about me?</label>
          <input
            type="text"
            name="heardAbout"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
            value={formData.heardAbout}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isHuman"
            checked={formData.isHuman}
            onChange={handleChange}
          />
          <span>I'm not a robot</span>
        </div>

        <button
          type="submit"
          className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contect
