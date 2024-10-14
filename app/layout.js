import "./globals.css";
import { gudea } from "./fonts";

export const metadata = {
  title: "Calculator Hub",
  description: "Developed by the Conservation Strategy Fund",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gudea.className}>
        {children}
      </body>
    </html>
  );
}
