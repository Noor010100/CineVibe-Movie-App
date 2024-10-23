import { useState } from "react";

const Contact = () => {
  document.title = "CineVibe | Contact Us";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1F1E24] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Form Section */}
        <div className="bg-[#29272e] p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-green-500 mb-4">
                Thank you for contacting us!
              </h2>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-lg mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-lg mb-2" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-black h-32"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6556CD] transition-all duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-400">
              Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-envelope text-red-500 text-2xl mr-3"></i>
              <span>support@CineVibe.com</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-red-500 text-2xl mr-3"></i>
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-red-500 text-2xl mr-3"></i>
              <span>123 Movie Street, Hollywood, CA</span>
            </div>
          </div>

          <div className=" text-white font-bold  h-16 flex items-center">
          <i class="ri-facebook-circle-fill text-3xl mr-4 hover:text-[#6556CD]"></i>
          <i class="ri-instagram-fill text-3xl mr-4 hover:text-[#6556CD]"></i>
          <i class="ri-twitter-x-fill text-3xl mr-4 hover:text-[#6556CD] "></i>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Contact;
