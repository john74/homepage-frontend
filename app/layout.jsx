import '@styles/main.css';
import { Poppins } from 'next/font/google';
import Provider from '@components/Provider';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '400']
});


const RootLayout = ({ children}) => {
    return (
        <html lang="en">
            <body className={poppins.className} suppressHydrationWarning={true}>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;