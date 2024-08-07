import "../styles/globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { StyledBody } from "../components/ui/styled-body";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Vic Shihang Li",
  description:
    "Vic Shihang Li, a curious student figuring out his path in Computer Science.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load global fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=optional"
          rel="stylesheet"
        />

        {/* Set favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>

      {/* Configure Vercel telemetry */}
      <Analytics />
      <SpeedInsights />

      <StyledBody>{children}</StyledBody>
    </html>
  );
}
