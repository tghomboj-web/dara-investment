import SignupPage from "@/components/SignupPage";

export default function ProPage() {
  return (
    <SignupPage
      config={{
        tier: "Pro — Tier 3",
        name: "Pro",
        price: "$39",
        period: "/mo",
        tagline:
          "Everything in Smart, plus sqft range, year built, HOA cap, data-quality flags, and up to 15 ZIP codes for full investment control.",
        features: [
          "Everything in Smart",
          "Sqft & year built filters",
          "Max HOA filter",
          "Data-quality flags",
          "Up to 15 custom ZIP codes",
        ],
        showPriceRange: true,
        showPropertyType: true,
        showZipCodes: true,
        maxZips: 15,
        showStrategy: true,
        showAvmFilter: true,
        showAdvanced: true,
      }}
    />
  );
}
