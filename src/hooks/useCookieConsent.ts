"use client";

import { useState, useEffect, useCallback } from "react";

export type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  thirdParty: boolean;
};

const STORAGE_KEY = "prayosha-cookie-consent";

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(
    null
  );
  const [loaded, setLoaded] = useState(false);

  const readConsent = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setPreferences(parsed.preferences);
      } else {
        setPreferences(null);
      }
    } catch {
      setPreferences(null);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    readConsent();

    // Listen for consent changes from the banner component
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) readConsent();
    };

    // Also listen for a custom event so same-tab updates work
    const handleCustom = () => readConsent();

    window.addEventListener("storage", handleStorage);
    window.addEventListener("cookie-consent-updated", handleCustom);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("cookie-consent-updated", handleCustom);
    };
  }, [readConsent]);

  const hasConsent = (category: keyof ConsentPreferences): boolean => {
    if (!preferences) return false;
    return preferences[category];
  };

  return { preferences, loaded, hasConsent };
}
