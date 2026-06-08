import SignupPage from "@/components/SignupPage";

export default function SmartPage() {
  return (
    <SignupPage
      config={{
        tier: "Smart — Tier 2",
        name: "Smart",
        price: "$19",
        period: "/mo",
        tagline:
          "Everything in Basic, plus AVM discount and rent ratio filters, investment strategy selection, and up to 10 ZIP codes.",
        features: [
          "Everything in Basic",
          "AVM discount filter",
          "Rent/price ratio filter",
          "Investment strategy",
          "Up to 10 custom ZIP codes",
        ],
        showPriceRange: true,
        showPropertyType: true,
        showZipCodes: true,
        maxZips: 10,
        showStrategy: true,
        showAvmFilter: true,
      }}
    />
  );
}
