import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { identity } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://oganto.vercel.app"),
  title: `${identity.realName} — ${identity.brandName} | Full-Stack & AI Developer`,
  description: identity.intro,
  openGraph: {
    title: `${identity.realName} — ${identity.brandName}`,
    description: identity.intro,
    url: "https://oganto.vercel.app",
    siteName: identity.brandName,
    images: [{ url: identity.heroPhoto, width: 1200, height: 1500 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.realName} — ${identity.brandName}`,
    description: identity.intro,
    images: [identity.heroPhoto],
    creator: "@oganto_",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-text">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
