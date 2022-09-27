import Navbar from './Navbar';

interface IProps {
    children: React.ReactNode;
    onHamburgerClick(): void;
}

const Layout = ({ children, onHamburgerClick }: IProps) => {
    return (
        <>
            <Navbar onHamburgerClick={onHamburgerClick} />
            {children}
            <div>Footer</div>
        </>
    );
};

export default Layout;
