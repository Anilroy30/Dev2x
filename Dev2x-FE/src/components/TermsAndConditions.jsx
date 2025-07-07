import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-2"><strong>Last updated on:</strong> July 7, 2025</p>

      <p className="mb-4">
        For the purpose of these Terms and Conditions, the terms "we", "us", and "our" refer to <strong>Dev2x</strong>, operated by <strong>Anil</strong>. The terms "you", "your", "user", and "visitor" refer to any person visiting our website or purchasing from us.
      </p>

      <p className="mb-2">
        Your use of this website and/or purchases made through it are governed by the following Terms and Conditions:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>The content of this website is subject to change without notice.</li>
        <li>We do not guarantee the accuracy, completeness, or suitability of the content. You acknowledge that it may contain errors, and we exclude liability to the fullest extent permitted by law.</li>
        <li>Your use of any content or services on this site is at your own risk. You are responsible for ensuring they meet your specific needs.</li>
        <li>All designs, layouts, and graphics on this site are owned or licensed by us and cannot be reproduced without permission.</li>
        <li>Trademarks not owned by us are acknowledged appropriately.</li>
        <li>Unauthorized use of this website may lead to legal action for damages or criminal offense.</li>
        <li>We may include links to third-party websites for your convenience; these do not signify our endorsement.</li>
        <li>You may not link to this website without prior written consent from <strong>Anil</strong>.</li>
        <li>All disputes are subject to the laws of India.</li>
        <li>We are not liable for declined payment authorizations due to cardholder limits set by the bank.</li>
      </ul>

      <p className="mt-4">
        For any queries, you may contact us at: <br />
        <strong>Email:</strong> <a href="mailto:support@dev2x.com" className="text-blue-400">support@dev2x.com</a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
