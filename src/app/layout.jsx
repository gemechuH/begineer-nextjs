import { Geist, Geist_Mono } from "next/font/google";
import '@/assets/styles/globals.css'

export const metadata = {
  title:'next js 1',
  keywords: 'rental, property, real state',
  description: 'find the right house from our service',
  

}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
