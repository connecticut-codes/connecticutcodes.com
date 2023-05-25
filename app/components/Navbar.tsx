import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className='flex justify-around'>
      <Link href='/'>Logo</Link>
      <ul className=' flex gap-4 justify-between'>
        <Link href='/about'>
          <li>about</li>
        </Link>
        <Link href='/events'>
          <li>events</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
