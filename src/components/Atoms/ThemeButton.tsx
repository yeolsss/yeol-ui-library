import { useTheme } from "@/context/ThemeContext";
import { CiDark, CiLight } from "react-icons/ci";

function ThemeButton() {
  const { theme, handleClickTheme } = useTheme();

  return (
    <button
      onClick={handleClickTheme}
      className="p-1 hover:bg-inputFocusColor rounded-md"
    >
      {theme === "light" ? (
        <CiLight
          style={{ width: "30px", height: "25px" }}
          className="text-textColor hover:text-hover-textColor"
        />
      ) : (
        <CiDark
          style={{ width: "30px", height: "25px" }}
          className="text-textColor hover:text-hover-textColor"
        />
      )}
    </button>
  );
}

export default ThemeButton;
