"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

const INPUT_CLASS =
  "px-4 py-3 border border-gray-500 rounded-lg text-sm bg-cream text-gray-800 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 transition-all";

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
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so screen reader and keyboard users aren't lost
  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

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
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-700"
      >
        <p className="text-2xl mb-2" aria-hidden="true">✓</p>
        <p className="font-semibold">
          Thank you for your application! We&apos;ll review it and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm text-gray-600 mb-4">
        Fields marked with <span className="text-red-700" aria-hidden="true">*</span>
        <span className="sr-only">an asterisk</span> are required.
      </p>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-name" className="text-[13px] font-semibold text-gray-800">
            Your Name <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id="career-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className={INPUT_CLASS}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-email" className="text-[13px] font-semibold text-gray-800">
            Email <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id="career-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className={INPUT_CLASS}
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
            className={INPUT_CLASS}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-position" className="text-[13px] font-semibold text-gray-800">
            Position <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <select
            id="career-position"
            name="position"
            required
            value={form.position}
            onChange={handleChange}
            className={INPUT_CLASS}
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
          className={`${INPUT_CLASS} resize-y min-h-[100px]`}
        />
      </div>

      {/* File Upload */}
      <div className="flex flex-col gap-1.5 mb-4">
        <span id="career-resume-label" className="text-[13px] font-semibold text-gray-800">
          Attach Resume
        </span>
        <label className="inline-flex items-center gap-2 px-5 py-3 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer text-sm text-gray-600 hover:border-green-500 hover:text-green-700 focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-green-500 transition-all bg-cream w-fit">
          <span aria-hidden="true">📎</span> {fileName || "Choose file..."}
          <input
            type="file"
            name="resume"
            className="sr-only"
            accept=".pdf,.doc,.docx"
            aria-labelledby="career-resume-label"
            aria-describedby="career-resume-hint"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
        <span id="career-resume-hint" className="text-xs text-gray-600">
          PDF, DOC or DOCX
        </span>
      </div>

      {/* reCAPTCHA */}
      <div className="inline-flex items-center gap-3 border border-gray-500 rounded-lg px-4 py-3 bg-cream mt-2">
        <input
          type="checkbox"
          id="recaptcha-check"
          required
          checked={captchaChecked}
          onChange={(e) => setCaptchaChecked(e.target.checked)}
          className="w-5 h-5 accent-green-700 cursor-pointer"
        />
        <label htmlFor="recaptcha-check" className="text-sm text-gray-600 cursor-pointer">
          I&apos;m not a robot
        </label>
        <div className="ml-6 flex flex-col items-center gap-0.5" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-60" focusable="false">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#555"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[9px] text-gray-600">reCAPTCHA</span>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-1.5 flex items-center gap-1.5">
        <span aria-hidden="true">🔒</span> Protected by Google reCAPTCHA
      </div>

      <button
        type="submit"
        className="mt-6 bg-green-700 text-white px-9 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-green-800 hover:-translate-y-0.5 transition-all"
      >
        Submit Application
      </button>
    </form>
  );
}
