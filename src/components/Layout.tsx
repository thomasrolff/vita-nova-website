import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { Navbar } from './Navbar';
import { settings } from '../constants';

interface IProps {
    className?: string;
    children: React.ReactNode;
}

const BaseLayout = ({ className, children }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!menuOpen) return;

        setMenuOpen(!menuOpen);
    }, [router.asPath]);

    return (
        <div className={className}>
            <Navbar
                menuOpen={menuOpen}
                onHamburgerClick={() => setMenuOpen(!menuOpen)}
            />
            <MobileMenu
                open={menuOpen}
                onLocaleClick={() => setMenuOpen(false)}
            />
            {children}
            <Footer />
        </div>
    );
};

export const Layout = styled(BaseLayout)`
    margin-top: ${settings.navbarHeight}px;
`;
