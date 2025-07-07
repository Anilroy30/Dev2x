import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white-800">
      <h1 className="text-3xl font-bold mb-4">Shipping & Delivery Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated on Jul 7, 2025</p>

      <p className="mb-4">
        At <strong>Dev2x</strong>, we are committed to delivering your order in a timely and reliable manner. Below are the details of our shipping and delivery policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Methods:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>International Orders:</strong> Shipped through registered international courier companies or international speed post.
        </li>
        <li>
          <strong>Domestic Orders:</strong> Shipped through registered domestic courier companies or India Post (speed post).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Timeframe:</h2>
      <p className="mb-4">
        Orders are typically shipped within <strong>0-7 business days</strong> from the date of order and payment confirmation, or as per the agreed delivery date at the time of order placement.
      </p>

      <p className="mb-4">
        Delivery timelines are subject to the norms of the respective courier or postal services. While we ensure that shipments are handed over to the courier within the mentioned time frame, <strong>Dev2x</strong> is not liable for delays caused by the courier company or postal authorities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Delivery Address:</h2>
      <p className="mb-4">
        All orders will be delivered to the address provided by the buyer during the order process. Please ensure that your shipping address and contact details are accurate at the time of placing the order.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Order Confirmation:</h2>
      <p className="mb-4">
        Once your order is shipped, confirmation and tracking details (if available) will be sent to your registered email address provided during signup or checkout.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Need Help?</h2>
      <p>
        If you face any issues with delivery or order status, feel free to reach out:
      </p>
      <p className="mt-2">
        <strong>Phone:</strong> 7207139787<br />
        <strong>Email:</strong> support@dev2x.com
      </p>
    </div>
  );
};

export default ShippingPolicy;
