import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dara Investment — Smart Property Alerts",
  description:
    "Get daily investment property alerts tailored to your criteria. Join our Telegram channel for free or upgrade to personalized notifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
