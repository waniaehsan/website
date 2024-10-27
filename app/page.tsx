import Navbar from "./components/navbar";

export default function Home() {
  return (

    <div className="bg-black h-screen">
      <ul className="text-white font-bold flex justify-center gap-20 ">
        <li>Used Cars</li>
        <li>New Cars</li>
        <li>Bikes</li>
        <li>Auto Store</li>
        <li>Videos</li>
        <li>Forums</li>
        <li>Blog</li>
        <li>More</li>
      </ul>
      <ul className="text-white font-bold flex justify-center gap-20 text-4xl mt-10 ">
        <li>Find Used Cars in Pakistan</li>
      </ul>
      <ul className="text-white font-bold flex justify-center gap-20 ">
        <li>With thousands of cars, we have just the right one for you</li>
      </ul>
      <form className="flex flex justify-center item-center ">
        <input />
      </form>
      <button className="flex border-4 bg-blue-200 m-10 justify-between">Advanced Filter</button>
      <img className="w-screen h-2/4" src="https://cache2.pakwheels.com/system/super_boards/background_images/000/000/008/original/8.jpeg?1729810786" alt="loading" />
      <h1 className="font-bold text-center p-10 text-2xl">Sell Your Car on PakWheels and Get the Best Price</h1>

      <ul className="flex-col item-left ml-20">
        <li className="">Post your Ad on PakWheels</li>
        <li>Post your Ad for Free in 3 Easy Steps</li>
        <li>Get Genuine offers from Verified Buyers</li>
        <li>Sell your car Fast at the Best Price</li>
        <button className="bg-blue-900 text-white boder-4 rounded-2 p-4 item-center text-center ">Post Your Ad</button>
      </ul>

      <ul className="flex-col item-end ml-20">
        <li>Try PakWheels Sell It For Me</li>
        <li>Dedicated Sales Expert to Sell your Car</li>
        <li>We Bargain for you and share the Best Offer</li>
        <li>We ensure Safe & Secure Transaction</li>
        <button className="bg-red-900 text-white boder-4 rounded-2 p-4 ">Register Your Car</button>
      </ul>
      <p className="ml-20 style-bold text-2xl mt-20">Managed by PakWheels</p>
      <ul>
        <li className="h-60 w-60 mt-10 ml-20"><img src="https://cache3.pakwheels.com/ad_pictures/1064/mercedes-benz-e-class-e-250-2011-106415955.webp" alt="Loading" /></li>
      </ul>
      <ul className="ml-20">
        <li className="text-blue-500">Mercedes Benz E Class 2011</li>
        <li className="text-green-500">PKR 13,200,000</li>
        <li>Karachi</li>
      </ul>
      <ul>
        <li className="h-60 w-60 mt-10 ml-20"><img src="https://cache4.pakwheels.com/ad_pictures/1083/mercedes-benz-c-class-c180-2-2015-108329128.webp" alt="Loading" /></li>
      </ul>
      <ul className="ml-20">
        <li className="text-blue-500">Mercedes Benz C Class 2015</li>
        <li className="text-green-500">PKR 14,500,000</li>
        <li>Karachi</li>
      </ul>
      <ul>
        <li className="h-60 w-60 mt-10 ml-20"><img src="https://cache4.pakwheels.com/ad_pictures/1073/honda-civic-vti-oriel-automatic-2000-107376631.webp" alt="Loading" /></li>
      </ul>
      <ul className="ml-20">
        <li className="text-blue-500">Honda Civic 2000</li>
        <li className="text-green-500">PKR 1,500,000</li>
        <li>Karachi</li>
      </ul>
      <ul>
        <li className="h-60 w-60 mt-10 ml-20"><img src="https://cache4.pakwheels.com/ad_pictures/1106/audi-e-tron-50-quattro-sportback-230kw-2023-110636921.webp" alt="Loading" /></li>
      </ul>
      <ul className="ml-20">
        <li className="text-blue-500">Audi e-tron 2023</li>
        <li className="text-green-500">PKR 30,000,000</li>
        <li>Karachi</li>
      </ul>
    </div>

  )
};

