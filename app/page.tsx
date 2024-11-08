
import Link from "next/link"
import { brotliDecompress } from "zlib";


export default function Home() {
  return (

<div className="bg-white text-black font-semibold">
      <ul className="text-black font-semibold flex justify-center gap-10 text-5xl mt-30 ">
        <li>Find Used Cars in Pakistan</li>
      </ul>
      <ul className="text-white font-bold flex justify-center gap-20 ">
        <li>With thousands of cars, we have just the right one for you</li>
      </ul>
      <form className="flex flex-col w-4/4 justify-center items-center mt-5">
        <input type="text" className="flex flex-col w-2/4 bg-white border-4 p-4 m-4 text-black" />
      </form>
      <div className="flex flex-col items-center">
      <button className="flex border-1 p-6 rounded bg-blue-400 m-10 justify-between">Advanced Filter</button>
      </div>      
      <h1 className="font-bold text-center text-4xl">Sell Your Car on PakWheels and Get the Best Price</h1>
      <div className="flex justify-center items-center gap-60 mt-20">
<div className="flex flex-col ">
      <ul className="border-2 shadow-lg border-gray-300 flex p-4 flex-col items-left ">
        <li className="font-bold text-blue-500 text-2xl py-2">Post your Ad on PakWheels</li>
        <li className="py-2">Post your Ad for Free in 3 Easy Steps</li>
        <li className="py-2">Get Genuine offers from Verified Buyers</li>
        <li className="py-2">Sell your car Fast at the Best Price</li>
        <button className="bg-red-900 text-white boder-4 rounded py-2 mt-4 " >Post Your Ad</button>
      </ul></div>
      <div className="text-4xl font-semi bold">
        <div>OR</div>
      </div>
      <div className="border-2 shadow-lg border-gray-300 flex p-4 flex-col items-left ">
      <ul className="flex flex-col justify-left">
        <li className="font-bold text-blue-500 text-2xl py-2">Try PakWheels Sell It For Me</li>
        <li className="py-2">Dedicated Sales Expert to Sell your Car</li>
        <li className="py-2">We Bargain for you and share the Best Offer</li>
        <li className="py-2">We ensure Safe & Secure Transaction</li>
        <button className="bg-blue-900 text-white boder-4 rounded py-2 mt-4 ">Register Your Car</button>
      </ul>
      </div></div>
      <p className="style-bold text-2xl my-10 mx-20">Managed by PakWheels</p>
      <div className="flex flex-row gap-40 px-20">
      <div className="">
      <ul >
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache2.pakwheels.com/ad_pictures/1112/honda-civic-oriel-1-8-i-vtec-cvt-2017-111279217.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Honda Civic 2017</Link>
        <li className="text-green-500">PKR 4,890,000</li>
        <li>Lahore</li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60  cursor-pointer"><img src="https://cache2.pakwheels.com/ad_pictures/1102/honda-vezel-hybrid-x-2019-110201289.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Honda Vezel Hybrid Z Honda Sensing 2019</Link>
        <li className="text-green-500">PKR 1,150,000</li>
        <li>Lahore</li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache3.pakwheels.com/ad_pictures/1096/suzuki-mehran-vx-2-2010-109635333.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
      <Link href="http://localhost:3000/form">Suzuki Mehran 2010</Link>
        <li className="text-green-500">PKR 730,000</li>
        <li>Karachi</li>
      </ul>
      </div>
      <div>
        <ul>
        <li className="h-60 w-60 cursor-pointer"><img src="https://cache2.pakwheels.com/ad_pictures/1094/suzuki-mehran-vxr-euro-ii-2019-109415411.webp" alt="Loading" /></li>
      </ul>
      <ul className="">
        <li>
        <Link href="http://localhost:3000/form">Suzuki Mehran 2019</Link></li>
        <li className="text-green-500">PKR 1,500,000</li>
        <li>Karachi</li>
      </ul>
      </div>
         </div>
         </div>
    
  )
};


