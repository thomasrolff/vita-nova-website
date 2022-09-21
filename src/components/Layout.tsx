import Navbar from './Navbar';

interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <>
            <Navbar />
            {children}
            <div>Footer</div>
        </>
    );
};

export default Layout;
