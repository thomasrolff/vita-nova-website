import { useState } from 'react';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { Navbar } from './Navbar';

interface IProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar onHamburgerClick={() => setMenuOpen(!menuOpen)} />
            <MobileMenu open={menuOpen} />
            {children}
            <Footer />
        </>
    );
};
