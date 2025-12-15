import type { Metadata } from "next"
import "@/styles/globals.css"
import { SedeProvider } from "@/contexts/SedeContext"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Menu from "@/components/core/Menu";

export const metadata: Metadata = {
  title: "Accesos - GM",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SedeProvider>
          {children}
        </SedeProvider>
      </body>
      </html>
    );
}
