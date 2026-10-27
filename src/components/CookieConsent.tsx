"use client";

import { useState, useEffect, useRef } from "react";

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

const OPTIONAL_CATEGORIES: {
  key: Exclude<keyof ConsentPreferences, "necessary">;
  title: string;
  description: string;
}[] = [
  {
    key: "analytics",
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors interact with our website by collecting and reporting information anonymously. Used to improve user experience.",
  },
  {
    key: "marketing",
    title: "Marketing Cookies",
    description:
      "Used to track visitors across websites to display relevant advertisements. Includes remarketing and social media pixels.",
  },
  {
    key: "thirdParty",
    title: "Third-Party Cookies",
    description:
      "Set by third-party services embedded in our pages, such as Google Maps on location pages and Google reCAPTCHA on forms.",
  },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const manageButtonRef = useRef<HTMLButtonElement>(null);
  const preferencesHeadingRef = useRef<HTMLHeadingElement>(null);
  const wasPreferencesOpen = useRef(false);
  const focusMainOnClose = useRef(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("prayosha-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Once the banner closes, move focus to the page content (after the
  // preferences effect cleanup has removed `inert` from the background)
  useEffect(() => {
    if (!visible && focusMainOnClose.current) {
      focusMainOnClose.current = false;
      document.getElementById("main-content")?.focus();
    }
  }, [visible]);

  // Modal behaviour for the preferences panel: initial focus, focus trap,
  // Escape to close, inert background, and focus restore on close
  useEffect(() => {
    if (!showPreferences) {
      if (wasPreferencesOpen.current) manageButtonRef.current?.focus();
      wasPreferencesOpen.current = false;
      return;
    }
    wasPreferencesOpen.current = true;
    preferencesHeadingRef.current?.focus();

    const background = Array.from(document.body.children).filter(
      (el) => el !== rootRef.current && el.tagName !== "SCRIPT"
    );
    background.forEach((el) => el.setAttribute("inert", ""));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setShowPreferences(false);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === preferencesHeadingRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      background.forEach((el) => el.removeAttribute("inert"));
    };
  }, [showPreferences]);

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
    // If focus was inside the banner, don't let it fall back to <body>
    if (rootRef.current?.contains(document.activeElement)) {
      wasPreferencesOpen.current = false;
      focusMainOnClose.current = true;
    }
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
    <div ref={rootRef}>
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
            ? "inset-0 flex items-center justify-center p-4 pointer-events-none"
            : "bottom-0 left-0 right-0 p-4 md:p-6"
        }`}
      >
        <div
          ref={dialogRef}
          className={`bg-white shadow-2xl transition-all duration-300 pointer-events-auto ${
            showPreferences
              ? "rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
              : "rounded-2xl max-w-4xl mx-auto border border-black/[0.06]"
          }`}
          {...(showPreferences
            ? {
                role: "dialog",
                "aria-modal": true,
                "aria-labelledby": "cookie-preferences-title",
                "aria-describedby": "cookie-preferences-desc",
              }
            : {
                role: "region",
                "aria-labelledby": "cookie-banner-title",
              })}
        >
          {!showPreferences ? (
            /* --- Compact Banner --- */
            <div className="p-6 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon + Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-lg shrink-0"
                      aria-hidden="true"
                    >
                      🍪
                    </div>
                    <h2 id="cookie-banner-title" className="font-serif text-lg text-green-800">
                      We value your privacy
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. Some cookies are
                    placed by third-party services like Google Maps that appear on our
                    pages.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 md:min-w-[180px]">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition-colors w-full"
                  >
                    Accept All
                  </button>
                  <button
                    type="button"
                    onClick={handleRejectNonEssential}
                    className="bg-cream-dark text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors w-full"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    ref={manageButtonRef}
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    aria-haspopup="dialog"
                    className="text-green-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors w-full border border-green-700/40"
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
                  <h2
                    id="cookie-preferences-title"
                    ref={preferencesHeadingRef}
                    tabIndex={-1}
                    className="font-serif text-xl text-green-800 focus:outline-none"
                  >
                    Cookie Preferences
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-800"
                    aria-label="Close preferences"
                  >
                    <span aria-hidden="true">✕</span>
                  </button>
                </div>
                <p
                  id="cookie-preferences-desc"
                  className="text-sm text-gray-600 leading-relaxed mb-5"
                >
                  Choose which cookies you&apos;d like to allow. You can change these
                  settings at any time.
                </p>
              </div>

              {/* Cookie Categories */}
              <div className="px-6 space-y-1">
                {/* Necessary */}
                <div className="border border-black/[0.06] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-sans font-semibold text-sm text-gray-800">
                      Necessary Cookies
                    </h3>
                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Always Active
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Required for the website to function properly. These include
                    cookies for session management, accessibility preferences, and
                    security. Cannot be disabled.
                  </p>
                </div>

                {OPTIONAL_CATEGORIES.map(({ key, title, description }) => (
                  <div key={key} className="border border-black/[0.06] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3
                        id={`cookie-${key}-title`}
                        className="font-sans font-semibold text-sm text-gray-800"
                      >
                        {title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => togglePreference(key)}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          preferences[key] ? "bg-green-600" : "bg-gray-500"
                        }`}
                        role="switch"
                        aria-checked={preferences[key]}
                        aria-labelledby={`cookie-${key}-title`}
                        aria-describedby={`cookie-${key}-desc`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                            preferences[key] ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <p
                      id={`cookie-${key}-desc`}
                      className="text-xs text-gray-600 leading-relaxed"
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 pt-5 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition-colors flex-1"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="bg-cream-dark text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors flex-1"
                >
                  Accept All
                </button>
              </div>

              {/* Privacy link */}
              <div className="px-6 pb-5 text-center">
                <a
                  href="/privacy"
                  className="text-xs text-gray-600 underline hover:text-green-700 transition-colors"
                >
                  Read our full Privacy Policy <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
