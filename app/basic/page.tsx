import SignupPage from "@/components/SignupPage";

export default function BasicPage() {
  return (
    <SignupPage
      config={{
        tier: "Basic — Tier 1",
        name: "Basic",
        price: "$9",
        period: "/mo",
        tagline:
          "Everything in Free, plus custom price range, property type filter, and up to 5 ZIP codes you choose.",
        features: [
          "Everything in Free",
          "Custom price range",
          "Property type filter",
          "Up to 5 custom ZIP codes",
        ],
        showPriceRange: true,
        showPropertyType: true,
        showZipCodes: true,
        maxZips: 5,
      }}
    />
  );
}
