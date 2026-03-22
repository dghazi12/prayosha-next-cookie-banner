"use client";

import { useState, useEffect } from "react";

type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  thirdParty: boolean;
};

const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  thirdParty: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("prayosha-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem(
      "prayosha-cookie-consent",
      JSON.stringify({
        preferences: prefs,
        timestamp: new Date().toISOString(),
        version: "1.0",
      })
    );
    // Notify other components on the same page
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      thirdParty: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const handleRejectNonEssential = () => {
    saveConsent(DEFAULT_PREFERENCES);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop when preferences panel is open */}
      {showPreferences && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-sm"
          onClick={() => setShowPreferences(false)}
          aria-hidden="true"
        />
      )}

      {/* Main banner */}
      <div
        className={`fixed z-[9999] transition-all duration-500 ease-out ${
          showPreferences
            ? "inset-0 flex items-center justify-center p-4"
            : "bottom-0 left-0 right-0 p-4 md:p-6"
        }`}
        role="dialog"
        aria-label="Cookie consent"
        aria-modal={showPreferences}
      >
        <div
          className={`bg-white shadow-2xl transition-all duration-300 ${
            showPreferences
              ? "rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
              : "rounded-2xl max-w-4xl mx-auto border border-black/[0.06]"
          }`}
        >
          {!showPreferences ? (
            /* --- Compact Banner --- */
            <div className="p-6 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon + Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-lg shrink-0">
                      🍪
                    </div>
                    <h2 className="font-serif text-lg text-green-800">
                      We value your privacy
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. Some cookies are
                    placed by third-party services like Google Maps that appear on our
                    pages.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 md:min-w-[180px]">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition-colors w-full"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectNonEssential}
                    className="bg-cream-dark text-gray-600 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors w-full"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="text-green-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors w-full border border-green-700/20"
                  >
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* --- Preferences Panel --- */
            <div>
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-serif text-xl text-green-800">
                    Cookie Preferences
                  </h2>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                    aria-label="Close preferences"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Choose which cookies you&apos;d like to allow. You can change these
                  settings at any time.
                </p>
              </div>

              {/* Cookie Categories */}
              <div className="px-6 space-y-1">
                {/* Necessary */}
                <div className="border border-black/[0.06] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-sm text-gray-800">
                      Necessary Cookies
                    </h3>
                    <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Always Active
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Required for the website to function properly. These include
                    cookies for session management, accessibility preferences, and
                    security. Cannot be disabled.
                  </p>
                </div>

                {/* Analytics */}
                <div className="border border-black/[0.06] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-sm text-gray-800">
                      Analytics Cookies
                    </h3>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        preferences.analytics ? "bg-green-600" : "bg-gray-300"
                      }`}
                      role="switch"
                      aria-checked={preferences.analytics}
                      aria-label="Toggle analytics cookies"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                          preferences.analytics ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Help us understand how visitors interact with our website by
                    collecting and reporting information anonymously. Used to improve
                    user experience.
                  </p>
                </div>

                {/* Marketing */}
                <div className="border border-black/[0.06] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-sm text-gray-800">
                      Marketing Cookies
                    </h3>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        preferences.marketing ? "bg-green-600" : "bg-gray-300"
                      }`}
                      role="switch"
                      aria-checked={preferences.marketing}
                      aria-label="Toggle marketing cookies"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                          preferences.marketing ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Used to track visitors across websites to display relevant
                    advertisements. Includes remarketing and social media pixels.
                  </p>
                </div>

                {/* Third Party */}
                <div className="border border-black/[0.06] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-sm text-gray-800">
                      Third-Party Cookies
                    </h3>
                    <button
                      onClick={() => togglePreference("thirdParty")}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        preferences.thirdParty ? "bg-green-600" : "bg-gray-300"
                      }`}
                      role="switch"
                      aria-checked={preferences.thirdParty}
                      aria-label="Toggle third-party cookies"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                          preferences.thirdParty ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Set by third-party services embedded in our pages, such as Google
                    Maps on location pages and Google reCAPTCHA on forms.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-5 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleSavePreferences}
                  className="bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition-colors flex-1"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-cream-dark text-gray-600 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors flex-1"
                >
                  Accept All
                </button>
              </div>

              {/* Privacy link */}
              <div className="px-6 pb-5 text-center">
                <a
                  href="/privacy"
                  className="text-xs text-gray-400 hover:text-green-700 transition-colors"
                >
                  Read our full Privacy Policy →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
