"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface DoctorInfo {
  name: string;
  email: string;
  phone: string;
  gender: string;
  specialization: string;
  profilePicture: string;
  fees: string;
  address: string;
}

const DoctorDashboard: React.FC = () => {
  const [doctorInfo, setDoctorInfo] = useState<DoctorInfo>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    specialization: "",
    profilePicture: "",
    fees: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDoctorInfo({ ...doctorInfo, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handlePasswordChange = () => {
    // Handle password change
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Doctor Dashboard
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctorInfo.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={doctorInfo.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={doctorInfo.phone}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={doctorInfo.gender}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="specialization">
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={doctorInfo.specialization}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="profilePicture">
            Profile Picture URL
          </label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value={doctorInfo.profilePicture}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {doctorInfo.profilePicture && (
            <img
              src={doctorInfo.profilePicture}
              alt="Profile"
              className="mt-2 h-24 w-24 rounded-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="fees">
            Fees per Appointment
          </label>
          <input
            type="text"
            id="fees"
            name="fees"
            value={doctorInfo.fees}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={doctorInfo.address}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="password">
            Change Password
          </label>
          <button
            type="button"
            onClick={handlePasswordChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Change Password
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DoctorDashboard;
