// import { Header } from "@/components/Header/Header";
import "./styles/fonts.css";
import "./globals.css";
import "normalize.css";
import Footer from "./sections/Footer/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          {/* <Header /> */}
          {children}
            <Footer/>
        </div>
      </body>
    </html>
  );
}

