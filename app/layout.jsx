import "./globals.css";
import { gudea } from "./fonts";
import { AppProvider } from "./context/provider";

const baseUrl = "https://calculators.conservation-strategy.org/"

export const metadata = {
  title: "CSF Calculators Hub | Tools to support decision-making",
  description: "Access CSF's free tools to calculate environmental costs and benefits, speeding up planning, fundraising, and fine calculations for better decision-making.",
  openGraph: {
    title: "CSF Calculators Hub | Tools to support decision-making",
    description: "Access CSF's free tools to calculate environmental costs and benefits, speeding up planning, fundraising, and fine calculations for better decision-making.",
    images: [{
      url: `${baseUrl}/assets/hub-link-image.png`,
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CSF Calculators Hub | Tools to support decision-making",
    description: "Access CSF's free tools to calculate environmental costs and benefits, speeding up planning, fundraising, and fine calculations for better decision-making.",
    images: [`${baseUrl}/assets/hub-link-image.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gudea.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
