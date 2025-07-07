import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import ShippingPolicy from "./components/ShippingPolicy";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>

          {/* ✅ Public Legal Pages (No login required) */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
