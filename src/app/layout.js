import {Inter} from 'next/font/google'
import './globals.css'
import Providers from "@/providers/Providers";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    metadataBase: new URL("http://localhost:3000"),

    title: {
        absolute: "",
        default: "STS",
        template: "%s | STS"
    },
    description: "Signature tax services inc",
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}

export default RootLayout;