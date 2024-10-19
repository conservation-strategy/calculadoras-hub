import "./globals.css";
import { gudea } from "./fonts";
import { AppProvider } from "./context/provider";

export const metadata = {
  title: "Calculators Hub",
  description: "A project by the Conservation Strategy Fund",
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
