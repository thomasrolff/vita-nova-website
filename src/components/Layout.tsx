import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface IProps {
    children: React.ReactNode;
    onHamburgerClick(): void;
}

export const Layout = ({ children, onHamburgerClick }: IProps) => {
    return (
        <>
            <Navbar onHamburgerClick={onHamburgerClick} />
            {children}
            <Footer />
        </>
    );
};
