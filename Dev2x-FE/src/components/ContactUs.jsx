import React from "react";

const ContactUs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white-800">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated on Jul 7, 2025</p>

      <p className="mb-4">
        If you have any questions, concerns, or feedback, feel free to contact us using the details below:
      </p>

      <div className="space-y-4">
        <p>
          <strong>Merchant / Business Owner:</strong> Anil
        </p>
        <p>
        <strong>Address:</strong> Gajularega, Vizianagaram, Andhra Pradesh – 535003
        </p>
        <p>
          <strong>Phone:</strong> 7207139787
        </p>
        <p>
          <strong>Email:</strong> support@dev2x.com
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
