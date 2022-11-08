import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Footer, MobileMenu, Navbar } from '../components';
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
            <MobileMenu open={menuOpen} />
            {children}
            <Footer />
        </div>
    );
};

export const Layout = styled(BaseLayout)`
    display: flex;
    flex-direction: column;
    margin-top: ${settings.navbarHeight}px;
`;
