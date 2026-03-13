import React from "react";
import { ShieldCheck, Award, Globe, CheckCircle, FileText, Leaf, FlaskConical, BadgeCheck, ClipboardList, Layers } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "FOREIGN MANUFACTURERS CERTIFICATION" },
  { icon: Award, title: "PRODUCT CERTIFICATION SCHEME" },
  { icon: Globe, title: "BIS CERTIFICATION" },
  { icon: ClipboardList, title: "WORLD MANUFACTURER IDENTIFIER (WMI) CODE" },
  { icon: CheckCircle, title: "TAC APPROVAL FOR AUTOMOBILE" },
  { icon: FileText, title: "CDSCO" },
  { icon: Leaf, title: "ECOMARK" },
  { icon: FlaskConical, title: "LABORATORY RECOGNITION SCHEME" },
  { icon: BadgeCheck, title: "REACH COMPLIANCE" },
  { icon: Layers, title: "DRUG LICENCE" },
];

export default function CertificationCards() {
  return (
    <section className="bg-[#e6e6e6] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div key={i} className="relative group">

              {/* Deep 4D Shadow Layers */}
              <div className="absolute inset-0 bg-gray-400 rounded-xl translate-x-3 translate-y-3"></div>
              <div className="absolute inset-0 bg-gray-300 rounded-xl translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 bg-gray-200 rounded-xl translate-x-1 translate-y-1"></div>

              {/* Card */}
              <div className="relative bg-white rounded-xl p-6 flex flex-col items-center text-center 
              shadow-md hover:-translate-y-2 transition-all duration-300">

                <Icon size={48} className="text-blue-600 mb-4" />

                <p className="text-xs font-semibold leading-tight">
                  {item.title}
                </p>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}