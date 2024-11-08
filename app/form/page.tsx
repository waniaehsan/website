export default function Form() {
  return (
    <main className="bg-white min-h-screen ">
      <div className="text-bold text-3xl uppercase items-center text-center bg-grey-500 font-black  min-h-80 ">
        <p className="text-black ">Enter Your Details</p>
        <div className="min-h-80 items-center flex-col justify-center ">
        <form className="flex flex-col justify-center items-center text-center min-h-80">
          <input type="email" placeholder="enter your email address" className="rounded w-2/3 p-2 bg-black py-2 text-black " />
          <input type="password" placeholder="enter your password" className="rounded w-2/3 p-2 py-2 bg-black mt-10 text-black" />
        </form>
        </div>
        <div className="">
        <button className="p-3 bg-blue-400 rounded">Place your order Now</button>
        </div>
      </div>
    </main>
  );
}
