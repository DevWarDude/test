function Button({ children, color, onClick }) {
  return (
    <button
      className={`rounded-xl bg-gradient-to-r px-5 py-3 font-semibold tracking-wider ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function PopUpButtons({ text, handle1, handle2 }) {
  return (
    <div className="mt-4 flex justify-end space-x-3">
      <button
        type="button"
        className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        // onClick={() => setCurrentWallet(null)}
        onClick={handle1}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => handle2()}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
