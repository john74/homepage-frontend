import '@styles/main.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '400']
});


const RootLayout = ({ children, session }) => {
    return (
        <html lang="en">
            <body className={poppins.className} suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;