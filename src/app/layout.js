import "./globals.css";
import MainLayout from "@/layout/MainLayout";

export const metadata = {
  title: "AI Solutions - Transforming Business with Artificial Intelligence",
  description: "Leading AI solutions provider offering machine learning, data analytics, and automation services to transform your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Poppins">
   <MainLayout>
    {children}
   </MainLayout>
      </body>
    </html>
  );
}