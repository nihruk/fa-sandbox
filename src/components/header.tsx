import Link from 'next/link';

function Header() {
  return (
    <>
      <p>NIHR Funding and Awards</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/awards-and-outputs">Awards and Outputs</Link>
        </li>
        <li>
          <Link href="#">Apply for funding</Link>
        </li>
        <li>
          <Link href="#">Contact and feedback</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
