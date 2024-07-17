"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface PatientInfo {
  name: string;
  email: string;
  phone: string;
  gender: string;
  profilePicture: string;
}

const PatientDashboard: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '',
    email: '',
    phone: '',
    gender: '',
    profilePicture: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handlePasswordChange = () => {
    // Handle password change
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setPatientInfo({ ...patientInfo, profilePicture: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Patient Dashboard</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={patientInfo.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={patientInfo.phone}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={patientInfo.gender}
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
          <label className="text-gray-700" htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleImageUpload}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {patientInfo.profilePicture ? (
            <img src={patientInfo.profilePicture} alt="Profile" className="mt-2 h-24 w-24 rounded-full object-cover" />
          ) : (
            <div className="mt-2 h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-2 md:col-span-2">
          <label className="text-gray-700" htmlFor="password">Change Password</label>
          <button
            type="button"
            onClick={handlePasswordChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Change Password
          </button>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientDashboard;
