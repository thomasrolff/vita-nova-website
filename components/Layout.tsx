interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <>
            <div>Navbar</div>
            {children}
            <div>Footer</div>
        </>
    );
};

export default Layout;
