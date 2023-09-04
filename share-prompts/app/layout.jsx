import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "promt app",
    description: "shares prompts"
}
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav></Nav>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout