import Link from "next/link"
export default function Navbar() {
  return (<nav>
    <div>
      <ul className="flex item-center text-center justify-center text-white font-bold gap-80 border-b-2 ">
        
        <li><Link href="Download App via SMS">Download App via SMS</Link></li>
        <li><Link href="Urdu">Urdu</Link></li>
        <li><Link href="Sign Up">Sign Up</Link></li>
        <li><Link href="Sign In">Sign In</Link></li></ul>

      <ul className="text-white font-bold flex justify-center gap-20 ">
        <span><img className="w-60 h-15" src="https://static.pakwheels.com/2016/09/PakWheels-Logo-Blue-Tagline.png" alt="loading" /></span>
        <li>Used Cars</li>
        <li>New Cars</li>
        <li>Bikes</li>
        <li>Auto Store</li>
        <li>Videos</li>
        <li>Forums</li>
        <li>Blog</li>
        <li>More</li>
      </ul></div>
      <div>
      <img className="w-screen h-80" src="https://cache2.pakwheels.com/system/super_boards/background_images/000/000/008/original/8.jpeg?1729810786" alt="loading" />
      </div>
  </nav>
  );
}