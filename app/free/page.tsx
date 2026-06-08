import SignupPage from "@/components/SignupPage";

export default function FreePage() {
  return (
    <SignupPage
      config={{
        tier: "Free — Tier 0",
        name: "Free",
        price: "$0",
        period: "",
        tagline:
          "Get started immediately with default Charlotte ZIP codes, standard scoring, and up to 5 daily findings delivered to your email and Telegram.",
        features: [
          "Default Charlotte ZIPs",
          "Standard score threshold",
          "Up to 5 findings/day",
          "Daily email digest",
          "Telegram alerts",
        ],
      }}
    />
  );
}
