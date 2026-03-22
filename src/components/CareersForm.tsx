"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

export default function CareersForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!captchaChecked) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-700">
        <p className="text-2xl mb-2">✓</p>
        <p className="font-semibold">
          Thank you for your application! We&apos;ll review it and get back to you soon.
        </p>
      </div>
    );
  }

  const isValid = form.name && form.email && form.position && captchaChecked;

  return (
    <form onSubmit={handleSubmit}>
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-name" className="text-[13px] font-semibold text-gray-800">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            id="career-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className="px-4 py-3 border border-black/10 rounded-lg text-sm bg-cream text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-email" className="text-[13px] font-semibold text-gray-800">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="career-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className="px-4 py-3 border border-black/10 rounded-lg text-sm bg-cream text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-all"
          />
        </div>
      </div>

      {/* Phone & Position */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-phone" className="text-[13px] font-semibold text-gray-800">
            Phone
          </label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="px-4 py-3 border border-black/10 rounded-lg text-sm bg-cream text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-position" className="text-[13px] font-semibold text-gray-800">
            Position <span className="text-red-600">*</span>
          </label>
          <select
            id="career-position"
            name="position"
            required
            value={form.position}
            onChange={handleChange}
            className="px-4 py-3 border border-black/10 rounded-lg text-sm bg-cream text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-all"
          >
            <option value="">Select a position...</option>
            <option value="waxologist">Waxologist</option>
            <option value="threading-tech">Threading Technician</option>
            <option value="esthetician">Esthetician</option>
            <option value="receptionist">Receptionist</option>
            <option value="store-manager">Store Manager</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label htmlFor="career-message" className="text-[13px] font-semibold text-gray-800">
          Tell us about yourself
        </label>
        <textarea
          id="career-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="px-4 py-3 border border-black/10 rounded-lg text-sm bg-cream text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 transition-all resize-y min-h-[100px]"
        />
      </div>

      {/* File Upload */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-[13px] font-semibold text-gray-800">Attach Resume</label>
        <label className="inline-flex items-center gap-2 px-5 py-3 border-2 border-dashed border-black/10 rounded-lg cursor-pointer text-sm text-gray-500 hover:border-green-500 hover:text-green-700 transition-all bg-cream w-fit">
          📎 {fileName || "Choose file..."}
          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
      </div>

      {/* reCAPTCHA */}
      <div className="inline-flex items-center gap-3 border border-black/10 rounded-lg px-4 py-3 bg-cream mt-2">
        <input
          type="checkbox"
          id="recaptcha-check"
          checked={captchaChecked}
          onChange={(e) => setCaptchaChecked(e.target.checked)}
          className="w-5 h-5 accent-green-700 cursor-pointer"
        />
        <label htmlFor="recaptcha-check" className="text-sm text-gray-600 cursor-pointer">
          I&apos;m not a robot
        </label>
        <div className="ml-6 flex flex-col items-center gap-0.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-40">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#888"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[9px] text-gray-400">reCAPTCHA</span>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1.5">
        🔒 Protected by Google reCAPTCHA
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="mt-6 bg-green-700 text-white px-9 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-green-800 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        Submit Application
      </button>
    </form>
  );
}
