import Link from "next/link"
export default function Navbar() {
  return (<nav>
    <ul className="flex item-center text-center justify-center text-white font-bold gap-80 border">
      <li><Link href="Download App via SMS">Download App via SMS</Link></li>
      <li><Link href="Urdu">Urdu</Link></li>
      <li><Link href="Sign Up">Sign Up</Link></li>
      <li><Link href="Sign In">Sign In</Link></li>
    </ul>
  </nav>
  );
}