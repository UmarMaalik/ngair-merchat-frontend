import type { Metadata } from "next";
import { Inter, Roboto, Raleway } from "next/font/google";
import '@/../public/assets/css/dashboard.css';
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/footer";
import '@/../public/assets/fonts/fonts/font-awesome.min.css';
import '@/../public/assets/css/dashboard.css';
import 'react-phone-input-2/lib/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import '@/../public/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css';
// import '@/../public/assets/plugins/toggle-sidebar/css/sidemenu.css';

// import '@/../public/assets/plugins/charts-c3/c3-chart.css';
// import '@/../public/assets/plugins/morris/morris.css';

// import '@/../public/assets/plugins/select2/select2.min.css';

// import '@/../public/assets/plugins/time-picker/jquery.timepicker.css';

// import '@/../public/assets/plugins/date-picker/spectrum.css';

// import '@/../public/assets/plugins/iconfonts/plugin.css';



export const metadata: Metadata = {
  title: "NGnair Cutomer Portal",
  description: "NGnair Cutomer Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
      </head>
      <body className={` bg-[#f2f4f8] `} >
      <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
