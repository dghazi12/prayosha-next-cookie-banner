"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";

interface ConsentMapProps {
  locationName: string;
  mapQuery: string;
  directionsUrl: string;
}

export default function ConsentMap({
  locationName,
  mapQuery,
  directionsUrl,
}: ConsentMapProps) {
  const { loaded, hasConsent } = useCookieConsent();

  // Still loading consent state — show a neutral placeholder
  if (!loaded) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md bg-cream-dark h-[300px] flex items-center justify-center">
        <div className="text-sm text-gray-600" role="status">Loading map...</div>
      </div>
    );
  }

  // User has consented to third-party cookies — show the map
  if (hasConsent("thirdParty")) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md">
        <iframe
          title={`Map of Prayosha ${locationName}`}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${mapQuery}`}
          className="w-full h-[300px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  // User has NOT consented (or rejected) — show a fallback
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-green-900 h-[300px] flex items-center justify-center relative">
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative text-center px-6 max-w-sm">
        {/* Map pin icon */}
        <div
          className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
          aria-hidden="true"
        >
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 h-7 text-green-300"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>

        <p className="text-white/90 text-sm font-medium mb-1.5">
          Map requires third-party cookies
        </p>
        <p className="text-white/70 text-xs leading-relaxed mb-5">
          Google Maps uses cookies to display the interactive map. You can accept
          cookies to view it here, or open directions in a new tab.
        </p>

        <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
          <button
            type="button"
            onClick={() => {
              // Update consent to enable third-party cookies
              try {
                const raw = localStorage.getItem("prayosha-cookie-consent");
                if (raw) {
                  const data = JSON.parse(raw);
                  data.preferences.thirdParty = true;
                  data.timestamp = new Date().toISOString();
                  localStorage.setItem(
                    "prayosha-cookie-consent",
                    JSON.stringify(data)
                  );
                } else {
                  localStorage.setItem(
                    "prayosha-cookie-consent",
                    JSON.stringify({
                      preferences: {
                        necessary: true,
                        analytics: false,
                        marketing: false,
                        thirdParty: true,
                      },
                      timestamp: new Date().toISOString(),
                      version: "1.0",
                    })
                  );
                }
                window.dispatchEvent(new Event("cookie-consent-updated"));
              } catch {
                // Fallback: reload the page
                window.location.reload();
              }
            }}
            className="bg-white text-green-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
          >
            Accept & Show Map
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            Open in Google Maps <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
