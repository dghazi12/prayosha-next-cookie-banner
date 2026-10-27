import type { Metadata } from "next";
import CareersForm from "@/components/CareersForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Prayosha team! We're hiring waxologists, threading technicians, estheticians, receptionists, and store managers across our Toronto locations.",
  openGraph: {
    title: "Careers | Prayosha Threading & Wax Bar",
    description:
      "Join our growing team across 5 Toronto locations. Now hiring estheticians, technicians & more.",
  },
};

const REQUIREMENTS = [
  "Certificate from an Esthetics School or completed waxing course",
  "Strong customer service and communication skills",
  "Ability to work in a fast-paced salon environment",
  "Passion for beauty and self-care industry",
  "Availability for flexible scheduling including weekends",
];

export default function CareersPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[2.5px] text-green-600 mb-3">
        Join Our Team
      </p>
      <h1 className="font-serif text-3xl md:text-4xl text-green-800 mb-4">
        Careers at Prayosha
      </h1>
      <p className="text-gray-500 text-base max-w-[540px] leading-relaxed">
        We&apos;re always looking for talented, passionate people to join our growing
        team across Toronto.
      </p>

      {/* Info Card */}
      <div className="bg-white rounded-2xl p-10 shadow-md mt-10">
        <h2 className="font-serif text-xl text-green-800 mb-3">
          Be a Part of Our Team
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We are always looking for customer service oriented, experienced and
          self-motivated store managers, Estheticians (waxologist & threading
          technicians) and Receptionists.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          If you are one of them and looking to join our team, we would love to meet
          you!
        </p>

        {/* Requirements */}
        <h3 className="font-serif text-lg text-green-800 mb-4">Requirements</h3>
        <ul className="space-y-2.5 mb-8">
          {REQUIREMENTS.map((req) => (
            <li key={req} className="flex items-center gap-2.5 text-[15px] text-gray-600">
              <div
                className="w-6 h-6 bg-green-50 rounded-md flex items-center justify-center text-green-600 text-[13px] shrink-0"
                aria-hidden="true"
              >
                ✓
              </div>
              {req}
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500">
          You can also email your resume directly to{" "}
          <a
            href="mailto:careers@prayoshathreadingbar.ca"
            className="text-green-700 font-semibold underline"
          >
            careers@prayoshathreadingbar.ca
          </a>
        </p>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-2xl p-10 shadow-md mt-8">
        <h2 className="font-serif text-xl text-green-800 mb-6">Apply Now</h2>
        <CareersForm />
      </div>
    </section>
  );
}
