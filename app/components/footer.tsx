import Link from "next/link"
export default function Footer() {
  return (<nav>
    <ul className="flex-row h-12 bg-blue-500 items-center text-center justify-center text-white font-bold gap-80 p-2 m-2">
      <li>Made by<Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"> Muhammad Shaheryar</Link></li>
    </ul>
  </nav>
  );
}