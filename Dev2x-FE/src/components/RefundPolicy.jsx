import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white-800">
      <h1 className="text-3xl font-bold mb-4">Cancellation and Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated on Jul 7, 2025</p>

      <p className="mb-4">
        At <strong>Dev2x</strong>, we do not offer cancellations or refunds once a premium plan or service has been purchased.
        All sales are final.
      </p>

      <p className="mb-4">
        However, if you experience any technical issues — such as payment being deducted but services not being activated —
        please contact us within <strong>24 hours</strong> at <a href="mailto:support@dev2x.com" className="text-blue-600 underline">support@dev2x.com</a>.
        We will review such cases and resolve them promptly if the issue is valid.
      </p>

      <p>
        By making a purchase, you acknowledge and agree to this refund policy.
      </p>
    </div>
  );
};

export default RefundPolicy;
