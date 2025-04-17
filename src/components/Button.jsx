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

export default Button;
