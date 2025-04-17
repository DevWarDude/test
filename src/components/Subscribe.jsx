function Subscribe() {
  return (
    <div className="mx-2 mt-40 flex flex-col items-center gap-3 rounded-lg bg-violet-950 p-5 font-jost">
      <p className="font-poppins text-lg font-bold tracking-wide">Subscribe</p>
      <span className="font-extralight tracking-wide">
        Join the hundreds of teams using our services, subscribe to get
        exclusive news & offer.
      </span>
      <input
        type="Email"
        placeholder="Email address"
        className="w-[100%] rounded-lg p-2 placeholder:text-lg placeholder:text-gray-500"
      />
      <button className="mt-1 w-[70%] rounded-md bg-indigo-800 py-2 shadow-xl">
        SUBSCRIBE
      </button>
    </div>
  );
}

export default Subscribe;
