import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        Get in touch with us for any questions or support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="font-semibold mr-2">Email:</span>
              <span className="text-gray-600">info@smoothsteps.com</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Phone:</span>
              <span className="text-gray-600">+387 61 332 613</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Address:</span>
              <span className="text-gray-600">
                Shoe Street 312, Shoe Fashion
              </span>
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Monday - Friday:</span> 9:00 AM -
              8:00 PM
            </p>
            <p>
              <span className="font-semibold">Saturday:</span> 10:00 AM - 6:00
              PM
            </p>
            <p>
              <span className="font-semibold">Sunday:</span> Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
