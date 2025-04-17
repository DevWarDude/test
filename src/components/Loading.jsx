import { BeatLoader } from "react-spinners";
import { useTheme } from "../contexts/ThemeContext";

function Loading() {
  const { theme } = useTheme();
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center dark:bg-white ${theme === "light" ? "bg-[#475569]" : "bg-[#071b43]"}}`}
    >
      <BeatLoader color={theme === "light" ? "#2f5ab0" : "#0e0743"} />
    </div>
  );
}

export default Loading;
