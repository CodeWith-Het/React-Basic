import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FormHandlingProject = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div
        ref={formRef}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create New Bank Account Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">
              Full Name (as per Aadhaar Card)
            </label>
            <input
              type="text"
              name="full_name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block font-semibold mb-1">Father's Name</label>
            <input
              type="text"
              name="father_name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mother's Name */}
          <div>
            <label className="block font-semibold mb-1">Mother's Name</label>
            <input
              type="text"
              name="mother_name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Aadhaar Card Number */}
          <div>
            <label className="block font-semibold mb-1">Aadhaar Card Number</label>
            <input
              type="number"
              name="aadhar_number"
              required
              maxLength="12"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold mb-1">Gender</label>
            <select
              name="gender"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold mb-1">
              Phone Number (linked with Aadhaar)
            </label>
            <input
              type="tel"
              name="phone_number"
              required
              maxLength="10"
              pattern="[0-9]{10}"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Authentication Number */}
          <div>
            <label className="block font-semibold mb-1">Authentication Number</label>
            <input
              type="text"
              name="auth_number"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Branch */}
          <div>
            <label className="block font-semibold mb-1">Branch</label>
            <input
              type="text"
              name="branch"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHandlingProject;
