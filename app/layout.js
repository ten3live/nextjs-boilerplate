import "@/styles/globals.css";
import '@/styles/styles.css'
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "../components/footer";

export const metadata = {
  title: 'Tahiri Services',
  description: 'Powerful services that grow your business.',
  icons: {
		icon: "/favicon.ico",
		shortcut: "/topi.png",
		apple: "/topi.png",
	},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"min-h-screen bg-background antialiased"}><Providers themeProps={{ attribute: "class", defaultTheme: "light" }}><Navbar/>{children}<Footer/></Providers></body>
    </html>
  )
}