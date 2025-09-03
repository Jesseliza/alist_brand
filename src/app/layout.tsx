import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { StoreProvider } from "@/store/StoreProvider";
import "./globals.css"; // ensure your Tailwind CSS entrypoint is imported

export const metadata = {
  title: "alist.ae Admin",
  description: "Admin dashboard for alist.ae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="flex min-h-screen w-screen overflow-hidden font-[Poppins]">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
