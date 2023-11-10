import "./styles/styles.scss";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import StyledComponentsRegistry from '@/lib/registry'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <StyledComponentsRegistry>
          <Navbar />
        {children}
        <Footer />
        </StyledComponentsRegistry>
        
        
        </body>
    </html>
  )
}
