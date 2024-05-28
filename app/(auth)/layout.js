import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import connectMongo from "@/services/connectMongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stay swift",
  description: "One place stop for Hospitality",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar showMenu={false}/>
        {children}
      </body>
    </html>
  );
}
