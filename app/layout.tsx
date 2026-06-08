import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investment Property Monitor — Charlotte Area",
  description:
    "Daily property monitoring for Charlotte-area investors. Score-based filtering, custom ZIP profiles, and daily reports delivered to your inbox.",
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
