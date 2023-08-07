import {ClerkProvider} from "@clerk/nextjs";
import {Inter} from "next/font/google";
import "../globals.css"
import {NextFont} from "next/dist/compiled/@next/font";

export const metadata : { title : string, description : string } = {
    title : 'Threads',
    description : 'A next.js 13 Meta Threads Application'
}

const inter : NextFont = Inter ( {subsets : [ "latin" ]})

export default function RootLayout( { children } : { children : React.ReactNode } )  {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}