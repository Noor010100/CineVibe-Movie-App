import React from "react";

const About = () => {
  document.title = "CineVibe | About Us";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F1E24] text-white p-6">
      <div className="max-w-4xl bg-[#29272e] p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About CineVibe</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            At CineVibe, we are passionate about films and dedicated to providing an exceptional movie experience. Our platform offers a comprehensive collection of movies, trailers, reviews, and everything else a movie lover could desire.
          </p>
          <p className="text-lg">
            Founded by a team of cinema enthusiasts, CineVibe aims to connect movie lovers with the latest films, helping them discover their next favorite watch.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Extensive movie database with detailed information.</li>
            <li>Trending and popular movies to keep you updated.</li>
            <li>User-friendly interface for seamless navigation.</li>
            <li>Personalized recommendations based on your preferences.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg mb-4">
            We believe that movies are best enjoyed with others. Join our community of film enthusiasts, share your thoughts, and connect with fellow cinephiles.
          </p>
          <p className="text-lg">
            Your feedback is valuable to us! Reach out through our contact page with any questions or suggestions.
          </p>
        </div>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          
          <p className="text-lg mb-4">
            Follow us on social media for the latest updates and join the conversation! We're excited to have you on this cinematic journey with us.
          </p>
          <i class="ri-facebook-circle-fill text-3xl mr-4 hover:text-[#6556CD]"></i>
          <i class="ri-twitter-x-fill text-3xl mr-4 hover:text-[#6556CD] "></i>
          <i class="ri-instagram-fill text-3xl mr-4 hover:text-[#6556CD]"></i>
          
        </div>
      </div>
    </div>
  );
};

export default About;
