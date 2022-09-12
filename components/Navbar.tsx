import Link from 'next/link';

const Navbar = () => (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/rooms">Kamers</Link>
        <Link href="/ship">Het schip</Link>
    </nav>
);

export default Navbar;
