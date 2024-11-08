import Link from "next/link"
export default function Navbar() {
  return (<nav>
    <div className="bg-blue-400">
    <div className="flex  items-left ml-80 justify-left text-white font-bold">
        <ul className="flex items-center  gap-2 text-center justify-center text-white font-bold ">
        <li className="w-3 h-3 flex flex-col"> <img src="https://pakwheel-clone-mtk.vercel.app/images/mobile.png" alt="waiting" /></li>
        <li className="flex flex-row items-left mt-3"><Link href="Download App via SMS">Download App via SMS</Link></li>
        </ul>
        </div>
        <div>
        <ul className="flex items-end justify-end  font-bold gap-10 mr-80  ">
        <li className="text-red-500"><Link href="Urdu">اردو</Link></li>
        <li><Link href="Sign Up">Sign Up</Link></li>
        <li><Link href="Sign In">Sign In</Link></li></ul>
        </div>
        <div>
      <ul className="text-white font-bold flex justify-center text-2xl gap-10 ">
        <span><img className="w-40 h-15"  src="https://static.pakwheels.com/2016/09/PakWheels-Logo-Blue-Tagline.png" alt="loading" /></span>
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
      <img className="w-screen h-80" src="https://media.licdn.com/dms/image/v2/D4D16AQEu5cFhAFjveQ/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1724613136987?e=2147483647&v=beta&t=VxftTBk6fZSlL6-lFDYk49SxgaPciorUQklVHUzz-bA" alt="loading" />
      </div></div>
  </nav>
  );
}