function Circular({ children }) {
  return (
    <div className="inline-block rounded-full bg-gradient-to-tr from-white to-yellow-500 p-[2px]">
      <div className="bg- flex h-7 w-7 items-center justify-center rounded-full bg-[#0e0743]">
        {children}
      </div>
    </div>
  );
}

export default Circular;
